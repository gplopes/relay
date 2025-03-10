/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use common::Diagnostic;
use dependency_analyzer::get_reachable_ast;
use dependency_analyzer::ReachableAst;
use fnv::FnvHashMap;
use graphql_syntax::ExecutableDefinition;
use intern::string_key::StringKeySet;
use relay_config::ProjectConfig;
use relay_transforms::get_resolver_fragment_name;
use schema::SDLSchema;
use schema::Schema;

use crate::compiler_state::ProjectName;
use crate::errors::BuildProjectError;
use crate::GraphQLAsts;

pub struct ProjectAsts {
    pub changed_names: StringKeySet,
    pub base_definition_names: StringKeySet,
    pub definitions: Vec<ExecutableDefinition>,
}

pub struct ProjectAstData {
    pub project_asts: ProjectAsts,
    pub base_fragment_names: StringKeySet,
}

pub fn get_project_asts(
    schema: &SDLSchema,
    graphql_asts: &FnvHashMap<ProjectName, GraphQLAsts>,
    project_config: &ProjectConfig,
) -> Result<ProjectAstData, BuildProjectError> {
    let project_asts = graphql_asts
        .get(&project_config.name)
        .map(|asts| asts.get_all_executable_definitions())
        .unwrap_or_default();
    let (base_project_asts, base_definition_names) = match project_config.base {
        Some(base_project_name) => {
            let base_project_asts = graphql_asts
                .get(&base_project_name)
                .map(|asts| asts.get_all_executable_definitions())
                .unwrap_or_default();
            let base_definition_names = base_project_asts
                .iter()
                // TODO(T64459085): Figure out what to do about unnamed (anonymous) operations
                .filter_map(|definition| definition.name())
                .collect::<StringKeySet>();
            (base_project_asts, base_definition_names)
        }
        None => (Vec::new(), Default::default()),
    };
    find_duplicates(&project_asts, &base_project_asts).map_err(|errors| {
        BuildProjectError::ValidationErrors {
            errors,
            project_name: project_config.name,
        }
    })?;

    let mut base_resolver_fragment_asts =
        find_base_resolver_fragment_asts(schema, &base_definition_names, &base_project_asts);

    let ReachableAst {
        mut definitions,
        mut base_fragment_names,
    } = get_reachable_ast(project_asts, base_project_asts);

    base_fragment_names.extend(
        base_resolver_fragment_asts
            .iter()
            .filter_map(|ast| ast.name()),
    );
    definitions.append(&mut base_resolver_fragment_asts);

    Ok(ProjectAstData {
        project_asts: ProjectAsts {
            definitions,
            base_definition_names,
            changed_names: find_changed_names(graphql_asts, project_config),
        },
        base_fragment_names,
    })
}

fn find_changed_names(
    graphql_asts: &FnvHashMap<ProjectName, GraphQLAsts>,
    project_config: &ProjectConfig,
) -> StringKeySet {
    let mut changed_names = graphql_asts
        .get(&project_config.name)
        .map(|asts| asts.pending_definition_names.clone())
        .unwrap_or_default();
    if let Some(base_project_name) = project_config.base {
        changed_names.extend(
            graphql_asts
                .get(&base_project_name)
                .map(|asts| asts.pending_definition_names.clone())
                .unwrap_or_default(),
        );
    }
    changed_names
}

fn find_duplicates(
    asts: &[ExecutableDefinition],
    base_asts: &[ExecutableDefinition],
) -> Result<(), Vec<Diagnostic>> {
    let mut definitions = FnvHashMap::default();

    let mut errors = Vec::new();
    for def in asts.iter().chain(base_asts) {
        if let Some(name) = def.name() {
            if let Some(prev_def) = definitions.insert(name, def) {
                errors.push(
                    Diagnostic::error(
                        graphql_ir::ValidationMessage::DuplicateDefinition(name),
                        def.location(),
                    )
                    .annotate("previously defined here", prev_def.location()),
                );
            }
        }
    }

    if errors.is_empty() {
        Ok(())
    } else {
        Err(errors)
    }
}

/// For all resolver fields defined on the schema
/// this method will return a list of documents from the base projects
fn find_base_resolver_fragment_asts(
    schema: &SDLSchema,
    base_definition_asts: &StringKeySet,
    base_project_asts: &[ExecutableDefinition],
) -> Vec<ExecutableDefinition> {
    let mut base_resolver_fragments = StringKeySet::default();
    for field in schema.fields() {
        if let Some(fragment_name) = get_resolver_fragment_name(field) {
            if base_definition_asts.contains(&fragment_name) {
                base_resolver_fragments.insert(fragment_name);
            }
        }
    }

    base_project_asts
        .iter()
        .filter(|definition| match definition {
            ExecutableDefinition::Fragment(fragment) => {
                base_resolver_fragments.contains(&fragment.name.value)
            }
            ExecutableDefinition::Operation(_) => false,
        })
        .cloned()
        .collect::<Vec<_>>()
}
