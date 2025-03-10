/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f4281ee8edc1e88f49b9a3f96893bd55>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type ThrowBeforeReadResolver$key = any;
import queryThrowBeforeReadResolver from "../resolvers/ThrowBeforeReadResolver.js";
// Type assertion validating that `queryThrowBeforeReadResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryThrowBeforeReadResolver: (
  rootKey: ThrowBeforeReadResolver$key, 
) => mixed);
export type RelayReaderResolverTest14Query$variables = {||};
export type RelayReaderResolverTest14Query$data = {|
  +throw_before_read: ?$Call<<R>((...empty[]) => R) => R, typeof queryThrowBeforeReadResolver>,
|};
export type RelayReaderResolverTest14Query = {|
  response: RelayReaderResolverTest14Query$data,
  variables: RelayReaderResolverTest14Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderResolverTest14Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ThrowBeforeReadResolver"
        },
        "kind": "RelayResolver",
        "name": "throw_before_read",
        "resolverModule": require('./../resolvers/ThrowBeforeReadResolver'),
        "path": "throw_before_read"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReaderResolverTest14Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2c1f3f1791c97aa006d1dd4bc3884d08",
    "id": null,
    "metadata": {},
    "name": "RelayReaderResolverTest14Query",
    "operationKind": "query",
    "text": "query RelayReaderResolverTest14Query {\n  ...ThrowBeforeReadResolver\n}\n\nfragment ThrowBeforeReadResolver on Query {\n  me {\n    id\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "796e410e5226384ec64305a38fa81d1d";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderResolverTest14Query$variables,
  RelayReaderResolverTest14Query$data,
>*/);
