"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/08/introducing-the-new-relay-compiler","metadata":{"permalink":"/blog/2021/12/08/introducing-the-new-relay-compiler","source":"@site/blog/2021-12-08-introducing-the-new-relay-compiler.md","title":"Introducing the new Relay compiler","description":"Introducing the new Relay compiler","date":"2021-12-08T00:00:00.000Z","formattedDate":"December 8, 2021","tags":[{"label":"relay-compiler","permalink":"/blog/tags/relay-compiler"},{"label":"rust","permalink":"/blog/tags/rust"},{"label":"required","permalink":"/blog/tags/required"}],"readingTime":11.205,"truncated":false,"authors":[{"name":"Robert Balicki, Tianyu Yao & Andrey Lunyov"}],"frontMatter":{"title":"Introducing the new Relay compiler","author":"Robert Balicki, Tianyu Yao & Andrey Lunyov","tags":["relay-compiler","rust","required"],"description":"Introducing the new Relay compiler","hide_table_of_contents":false},"nextItem":{"title":"Introducing Relay Hooks","permalink":"/blog/2021/03/09/introducing-relay-hooks"}},"content":"We\'re extremely excited to release a preview of the new, Rust-based Relay compiler to open source today (as [`v13.0.0-rc.1`](https://github.com/facebook/relay/releases/tag/v13.0.0-rc.1))! This new compiler is faster, supports new runtime features, and provides a strong foundation for additional growth in the future.\\n\\nLeading up to this release, Meta\'s codebase had been growing without signs of stopping. At our scale, the time it took to compile all of the queries in our codebase was increasing at the direct expense of developer productivity. Though we tried a number of strategies to optimize our JavaScript-based compiler (discussed below), our ability to incrementally eke out performance gains could not keep up with the growth in the number of queries in our codebase.\\n\\nSo, we decided to rewrite the compiler in Rust. We chose Rust because it is fast, memory-safe, and makes it easy to safely share large data structures across threads. Development began in early 2020, and the compiler shipped internally at the end of that year. The rollout was smooth, with no interruptions to application development. Initial internal benchmarks indicated that the compiler performed nearly 5x better on average, and nearly 7x better at P95. We\'ve further improved the performance of the compiler since then.\\n\\nThis post will explore why Relay has a compiler, what we hope to unlock with the new compiler, its new features, and why we chose to use the Rust language. If you\'re in a hurry to get started using the new compiler, check out [the compiler package README](https://github.com/facebook/relay/tree/main/packages/relay-compiler) or the [release notes](https://github.com/facebook/relay/releases/tag/v13.0.0-rc.1) instead!\\n\\n## Why does Relay have a compiler?\\n\\nRelay has a compiler in order to provide stability guarantees and achieve great runtime performance.\\n\\nTo understand why, consider the workflow of using the framework. With Relay, developers use a declarative language called GraphQL to specify what data each component needs, but not how to get it. The compiler then stitches these components\' data dependencies into queries that fetch all of the data for a given page and precomputes artifacts that give Relay applications such a high level of performance and stability.\\n\\nIn this workflow, the compiler\\n\\n* allows components to be reasoned about in isolation, making large classes of bugs impossible, and\\n* shifts as much work as possible to build time, significantly improving the runtime performance of applications that use Relay.\\n\\nLet\'s interrogate each of these in turn.\\n\\n### Supporting local reasoning\\n\\nWith Relay, a component specifies only its own data requirements through the use of GraphQL fragments. The compiler then stitches these components data dependencies into queries that fetch all of the data for a given page. Developers can focus on writing a component without worrying how its data dependencies fit into a larger query.\\n\\nHowever, Relay takes this local reasoning a step further. The compiler also generates files that are used by the Relay runtime to read out just the data selected by a given component\'s fragment (we call this [data masking](https://relay.dev/docs/principles-and-architecture/thinking-in-relay/#data-masking)). So a component never accesses (in practice, not just at the type level!) any data that it didn\'t explicitly request.\\n\\nThus, modifying one component\'s data dependencies cannot affect the data another component sees, meaning that **developers can reason about components in isolation.** This gives Relay apps an unparalleled level of stability and makes large classes of bugs impossible, and is a key part of why Relay can scale to many developers touching the same codebase.\\n\\n### Improved runtime performance\\n\\nRelay also makes use of the compiler to shift as much work as possible to build time, improving the performance of Relay apps.\\n\\nBecause the Relay compiler has global knowledge of all components\' data dependencies, it is able to write queries that are as good \u2014 and generally even better \u2014 than they would be if they had been written by hand. It\'s able to do this by optimizing queries in ways that would be impractically slow at runtime. For example, it prunes branches that can never be accessed from the generated queries and flattens identical sections of queries.\\n\\nAnd because these queries are generated at build time, Relay applications never generate abstract syntax trees (ASTs) from GraphQL fragments, manipulate those ASTs, or generate query text at runtime. Instead, the Relay compiler replaces an application\'s GraphQL fragments with precomputed, optimized instructions (as plain ol\' Javascript data structures) that describe how to write network data to the store and read it back out.\\n\\nAn added benefit of this arrangement is that a Relay application bundle includes neither the schema nor \u2014 when using persisted queries \u2014 the string representation of the GraphQL fragments. This helps to reduce application size, saving users\' bandwidth and improving application performance.\\n\\nIn fact, the new compiler goes further and saves users\' bandwidth in another way \u2014 Relay can inform an application\'s server about each query text at build time and generate a unique query ID, meaning that the application never needs to send the potentially very long query string over users\' slow networks. When using such persisted queries, the only things that must be sent over the wire to make a network request are the query ID and the query variables!\\n\\n## What does the new compiler enable?\\n\\nCompiled languages are sometimes perceived as introducing friction and slowing developers down when compared to dynamic languages. However, Relay takes advantage of the compiler to reduce friction and make common developer tasks easier. For example, Relay exposes high-level primitives for common interactions that are easy to get subtly wrong, such as pagination and refetching a query with new variables.\\n\\nWhat these interactions have in common is that they require generating a new query from an old one, and thus involve boilerplate and duplication \u2014 an ideal target for automation. Relay takes advantage of the compiler\'s global knowledge to empower developers to enable pagination and refetching by adding one directive and changing one function call. That\'s it.\\n\\n**But giving developers the ability to easily add pagination is just the tip of the iceberg.** Our vision for the compiler is that it provides even more high-level tools for shipping features and avoiding boilerplate, gives developers real-time assistance and insights, and is made up of parts that can be used by other tools for working with GraphQL.\\n\\nA primary goal of this project was that the rewritten compiler\'s architecture should set us up to achieve this vision over the coming years.\\n\\nAnd while we\'re not there yet, we have made significant achievements on each of the criteria.\\n\\nFor example, the new compiler ships with support for the new `@required` directive, which will nullify the parent linked field or throw an error if a given subfield is null when read out. This may sound like a trivial quality-of-life improvement, but if half of your component\'s code is null checks, `@required` starts to look pretty good!\\n\\n<style type=\\"text/css\\">{\\" img { max-height: 600px; }\\"}</style>\\n\\n> A component without `@required`:\\n>\\n> ![Image: A component with null-checking boilerplate](./2021-12-08-introducing-the-new-relay-compiler-pre-required.png)\\n>\\n> And with `@required`:\\n>\\n> ![Image: A component will less null-checking boilerplate, due to the use of the `@required` directive](2021-12-08-introducing-the-new-relay-compiler-post-required.png)\\n\\n\\nNext, the compiler powers an internal-only VSCode extension that autocompletes field names when you type and shows type information on hover, among many other features. We haven\'t made it public, yet, but we hope to at some point! Our experience is that this VSCode extension makes working with GraphQL data much easier and more intuitive.\\n\\nLastly, the new compiler was written as a series of independent modules that can be reused by other GraphQL tools. We call this the Relay compiler platform. Internally, these modules are being reused for other code generation tools and for other GraphQL clients for different platforms.\\n\\n## Compiler performance\\n\\nSo far, we\'ve discussed why Relay has a compiler and what we hope the rewrite enables. But we haven\'t discussed why we decided to rewrite the compiler in 2020: performance.\\n\\nPrior to the decision to rewrite the compiler, the time it took to compile all of the queries in our codebase was gradually, but unrelentingly, slowing as our codebase grew. Our ability to eke out performance gains could not keep up with the growth in the number of queries in our codebase, and we saw no incremental way out of this predicament.\\n\\n### Reaching the end of JavaScript\\n\\nThe previous compiler was written in JavaScript. This was a natural choice of language for several reasons: it was the language with which our team had the most experience, the language in which the Relay runtime was written (allowing us to share code between the compiler and runtime), and the language in which the GraphQL reference implementation and our mobile GraphQL tools were written.\\n\\nThe compiler\'s performance remained reasonable for quite some time: Node/V8 comes with a heavily-optimized JIT compiler and garbage collector, and can be quite fast if you\'re careful (we were). But compilation times were growing.\\n\\nWe tried a number of strategies to keep up:\\n\\n* We had made the compiler incremental. In response to a change, it only recompiled the dependencies that were affected by that change.\\n* We had identified which transforms were slow (namely, flatten), and made the algorithmic improvements we could (such as adding memoization).\\n* The official `graphql` npm package\'s GraphQL schema representation took multiple gigabytes of memory to represent our schema, so we replaced it with a custom fork.\\n* We made profiler-guided micro-optimizations in our hottest code paths. For example, we stopped using the `...` operator to clone and modify objects, instead preferring to explicitly list out the properties of objects when copying them. This preserved the object\'s hidden class, and enabled the code to better JIT-optimized.\\n* We restructured the compiler to shell out to multiple workers, with each worker handling a single schema. Projects with multiple schemas are uncommon outside of Meta, so even with this, most users would have been using a single-threaded compiler.\\n\\nThese optimizations weren\'t enough to keep pace with the rapid internal adoption of Relay.\\n\\nThe biggest challenge was that NodeJS does not support multithreaded programs with shared memory. The best one can do is to start multiple workers that communicate by passing messages.\\n\\nThis works well in some scenarios. For example, Jest employs this pattern and makes use of all cores when running tests of transforming files. This is a good fit because Jest doesn\'t need to share much data or memory between processes.\\n\\nOn the other hand, our schema is simply too large to have multiple instances in memory, so there was simply no good way to efficiently parallelize the Relay compiler with more than one thread per schema in JavaScript.\\n\\n### Deciding on Rust\\n\\nAfter we decided to rewrite the compiler, we evaluated many languages to see which would meet the needs of our project. We wanted a language that was fast, memory-safe and supported concurrency \u2014 preferably with concurrency bugs caught at build time, not at runtime. At the same time we wanted a language that was well-supported internally. This narrowed it down to a few choices:\\n\\n* C++ met most of the criteria, but felt difficult to learn. And, the compiler doesn\'t assist with safety as much as we\'d like.\\n* Java was probably also a decent choice. It can be fast and is multi-core, but provides less low-level control.\\n* OCaml is a proven choice in the compiler space, but multi-threading is challenging.\\n* Rust is fast, memory-safe, and supports concurrency. It makes it easy to safely share large data structures across threads. With the general excitement around Rust, some previous experience on our team, and usage by other teams at Facebook, this was our clear top choice.\\n\\n## Internal rollout\\n\\nRust turned out to be a great fit! The team of mostly JavaScript developers found Rust easy to adopt. And, Rust\'s advanced type system caught many errors at build time, helping us maintain a high velocity.\\n\\nWe began development in early 2020, and rolled out the compiler internally at the end of that year. Initial internal benchmarks indicated that the compiler performed nearly 5x better on average, and nearly 7x better at P95. We\'ve further improved the performance of the compiler since then.\\n\\n## Release in OSS\\n\\nToday, we\'re excited to publish the new version of the compiler, as part of the Relay v13. New compiler features include:\\n\\n* [The `@required` directive.](https://relay.dev/docs/guides/required-directive/)\\n* The `@no_inline` directive, which can be used to prevent common fragments from being inlined, resulting in smaller generated files.\\n* Validation for conflicting GraphQL fields, arguments and directives\\n* [Support for TypeScript type generation](https://github.com/facebook/relay/pull/3182)\\n* Support for remote query persisting.\\n\\nYou can find more information about the compiler in the [README](https://github.com/facebook/relay/tree/main/packages/relay-compiler) and in the [release notes](https://github.com/facebook/relay/releases/tag/v13.0.0-rc.1)!\\n\\nWe\'re continuing to develop features within the compiler, such as giving developers the ability to access derived values on the graph, adding support for a more ergonomic syntax for updating local data, and fully fleshing out our VSCode extension, all of which we hope to release to open source. We\'re proud of this release, but there\'s still a lot more to come!\\n\\n## Thanks\\n\\nThank you Joe Savona, Lauren Tan, Jason Bonta and Jordan Eldredge for providing amazing feedback on this blog post. Thank you ch1ffa, robrichard, orta and sync for filing issues related to compiler bugs. Thank you to MaartenStaa for adding TypeScript support. Thank you @andrewingram for pointing out how difficult it is to enable the `@required` directive, which is now enabled by default. There are many others that contributed \u2014 this was truly a community effort!"},{"id":"/2021/03/09/introducing-relay-hooks","metadata":{"permalink":"/blog/2021/03/09/introducing-relay-hooks","source":"@site/blog/2021-03-09-introducing-relay-hooks.md","title":"Introducing Relay Hooks","description":"Introducing Relay Hooks","date":"2021-03-09T00:00:00.000Z","formattedDate":"March 9, 2021","tags":[{"label":"relay-hooks","permalink":"/blog/tags/relay-hooks"}],"readingTime":5.66,"truncated":false,"authors":[{"name":"Robert Balicki & Juan Tejada"}],"frontMatter":{"title":"Introducing Relay Hooks","author":"Robert Balicki & Juan Tejada","tags":["relay-hooks"],"description":"Introducing Relay Hooks","hide_table_of_contents":false},"prevItem":{"title":"Introducing the new Relay compiler","permalink":"/blog/2021/12/08/introducing-the-new-relay-compiler"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\n\\nWe are extremely excited to release [Relay Hooks](https://github.com/facebook/relay/releases/tag/v11.0.0), the most developer-friendly version of Relay yet, and [make it available to the OSS community](https://developers.facebook.com/blog/post/2021/03/09/introducing-relay-hooks-improved-react-apis-relay/) today! Relay Hooks is a set of new, rethought APIs for fetching and managing GraphQL data using React Hooks.\\n\\nThe new APIs are fully compatible with the existing, container-based APIs. Though we recommend writing any new code using Relay Hooks, *migrating existing containers to the new APIs is optional and container-based code will continue to work*.\\n\\nAlthough these APIs are newly released, they are not untested: the rewritten [Facebook.com](https://www.facebook.com) is entirely powered by Relay Hooks and these APIs have been the recommended way to use Relay at Facebook since mid-2019.\\n\\nIn addition, we are also releasing a rewritten <a href={useBaseUrl(\'/docs/guided-tour/\')}>guided tour</a> and <a href={useBaseUrl(\'/docs/\')}>updated documentation</a> that distill the best practices for building maintainable, data-driven applications that we have learned since first developing Relay.\\n\\nThough we still have a ways to go before getting started with Relay is as easy as we\u2019d like, we believe these steps will make the Relay developer experience substantially better.\\n\\n## What was released?\\n\\nWe released Relay Hooks, a set of React Hooks-based APIs for working with GraphQL data. We also took the opportunity to ship other improvements, like a more stable version of <a href={useBaseUrl(\'/docs/api-reference/fetch-query/\')}><code>fetchQuery</code></a> and the ability to customize object identifiers in Relay using <code>getDataID</code> (which is useful if your server does not have globally unique IDs.)\\n\\n See the [release notes](https://github.com/facebook/relay/releases/tag/v11.0.0) for a complete list of what was released.\\n\\n## What are the advantages of the Hooks APIs?\\n\\nThe newly released APIs improve the developer experience in at least the following ways:\\n\\n* The Hooks-based APIs for fetching queries, loading data with fragments, pagination, refetching, mutations and subscriptions generally require fewer lines of code and have less indirection than the equivalent container-based solution.\\n* These APIs have more complete Flow and Typescript coverage.\\n* These APIs take advantage of compiler features to automate error-prone tasks, such as the generation of refetch and pagination queries.\\n* These APIs come with the ability to configure fetch policies, which let you determine the conditions in which a query should be fulfilled from the store and in which a network request will be made.\\n* These APIs give you the ability to start fetching data before a component renders, something that could not be achieved with the container-based solutions. This allows data to be shown to users sooner.\\n\\nThe following examples demonstrate some of the advantages of the new APIs.\\n\\n## Refetching a fragment with different variables\\n\\nFirst, let\u2019s take a look at how we might refetch a fragment with different variables using the Hooks APIs:\\n\\n```js\\ntype Props = {\\n  comment: CommentBody_comment$key,\\n};\\n\\nfunction CommentBody(props: Props) {\\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\\n    graphql`\\n      fragment CommentBody_comment on Comment\\n      @refetchable(queryName: \\"CommentBodyRefetchQuery\\") {\\n        body(lang: $lang) {\\n          text\\n        }\\n      }\\n    `,\\n    props.comment,\\n  );\\n\\n  return <>\\n    <CommentText text={data?.text} />\\n    <Button\\n      onClick={() =>\\n        refetch({ lang: \'SPANISH\' }, { fetchPolicy: \'store-or-network\' })\\n      }>\\n    >\\n      Translate\\n    </Button>\\n  </>\\n}\\n```\\n\\nCompare this to the equivalent [container-based example](https://gist.github.com/rbalicki2/2ac2829aefd8d032e8cb32cd0066bd4e). The Hooks-based example takes fewer lines, does not require the developer to manually write a refetch query, has the refetch variables type-checked and explicitly states that a network request should not be issued if the query can be fulfilled from data in the store.\\n\\n## Starting to fetch data before rendering a component\\n\\nThe new APIs allow developers to more quickly show content to users by starting to fetch data before a component renders. Prefetching data in this way is not possible with the container-based APIs. Consider the following example:\\n\\n```js\\nconst UserQuery = graphql`\\n  query UserLinkQuery($userId: ID!) {\\n    user(id: $userId) {\\n      user_details_blurb\\n    }\\n  }\\n`;\\n\\nfunction UserLink({ userId, userName }) {\\n  const [queryReference, loadQuery] = useQueryLoader(UserQuery);\\n\\n  const [isPopoverVisible, setIsPopoverVisible] = useState(false);\\n\\n  const maybePrefetchUserData = useCallback(() => {\\n    if (!queryReference) {\\n      // calling loadQuery will cause this component to re-render.\\n      // During that re-render, queryReference will be defined.\\n      loadQuery({ userId });\\n    }\\n  }, [queryReference, loadQuery]);\\n\\n  const showPopover = useCallback(() => {\\n    maybePrefetchUserData();\\n    setIsPopoverVisible(true);\\n  }, [maybePrefetchUserData, setIsPopoverVisible]);\\n\\n  return <>\\n    <Button\\n      onMouseOver={maybePrefetchUserData}\\n      onPress={showPopover}\\n    >\\n      {userName}\\n    </Button>\\n    {isPopoverVisible && queryReference && (\\n      <Popover>\\n        <React.Suspense fallback={<Glimmer />}>\\n          <UserPopoverContent queryRef={queryReference} />\\n        </React.Suspense>\\n      </Popover>\\n    )}\\n  </>\\n}\\n\\nfunction UserPopoverContent({queryRef}) {\\n  // The following call will Suspend if the request for the data is still\\n  // in flight:\\n  const data = usePreloadedQuery(UserQuery, queryRef);\\n  // ...\\n}\\n```\\n\\nIn this example, if the query cannot be fulfilled from data in the local cache, a network request is initiated when the user hovers over a button. When the button is finally pressed, the user will thus see content sooner.\\n\\nBy contrast, the container-based APIs initiate network requests when the component renders.\\n\\n### Hooks and Suspense for Data Fetching\\n\\nYou may have noticed that both of the examples use Suspense.\\n\\nAlthough Relay Hooks uses Suspense for some of its APIs, *support, general guidance, and requirements for usage of Suspense for Data Fetching in React are still* *not ready*, and the React team is still defining what this guidance will be for upcoming releases. There are some limitations when Suspense is used with React 17.\\n\\nNonetheless, we released Relay Hooks now because we know these APIs are on the right trajectory for supporting upcoming releases of React. Even though parts of Relay\u2019s Suspense implementation may still change, the Relay Hooks APIs themselves are stable; they have been widely adopted internally, and have been in use in production for over a year.\\n\\nSee <a href={useBaseUrl(\'/docs/migration-and-compatibility/suspense-compatibility/\')}>Suspense Compatibility</a> and <a href={useBaseUrl(\'/docs/guided-tour/rendering/loading-states/\')}>Loading States with Suspense</a> for deeper treatments of this topic.\\n\\n### Where to go from here\\n\\nPlease check out the <a href={useBaseUrl(\'/docs/\')}>getting started guide</a>, the <a href={useBaseUrl(\'/docs/migration-and-compatibility/\')}>migration guide</a> and the <a href={useBaseUrl(\'/docs/guided-tour/\')}>guided tour</a>.\\n\\n### Thanks\\n\\nReleasing Relay Hooks was not just the work of the React Data team. We\'d like to thank the contributors that helped make it possible:\\n\\n@0xflotus, @AbdouMoumen, @ahmadrasyidsalim, @alexdunne, @alloy, @andrehsu, @andrewkfiedler, @anikethsaha, @babangsund, @bart88, @bbenoist, @bigfootjon, @bondz, @BorisTB, @captbaritone, @cgriego, @chaytanyasinha, @ckknight, @clucasalcantara, @damassi, @Daniel15, @daniloab, @earvinLi, @EgorShum, @eliperkins, @enisdenjo, @etcinit, @fabriziocucci, @HeroicHitesh, @jaburx, @jamesgeorge007, @janicduplessis, @jaroslav-kubicek, @jaycenhorton, @jaylattice, @JonathanUsername, @jopara94, @jquense, @juffalow, @kafinsalim, @kyarik, @larsonjj, @leoasis, @leonardodino, @levibuzolic, @liamross, @lilianammmatos, @luansantosti, @MaartenStaa, @MahdiAbdi, @MajorBreakfast, @maraisr, @mariusschulz, @martinbooth, @merrywhether, @milosa, @mjm, @morrys, @morwalz, @mrtnzlml, @n1ru4l, @Nilomiranda, @omerzach, @orta, @pauloedurezende, @RDIL, @RicCu, @robrichard, @rsmelo92, @SeshanPillay25, @sibelius, @SiddharthSham, @stefanprobst, @sugarshin, @taion, @thedanielforum, @theill, @thicodes, @tmus, @TrySound, @VinceOPS, @visshaljagtap, @Vrq, @w01fgang, @wincent, @wongmjane, @wyattanderson, @xamgore, @yangshun, @ymittal, @zeyap, @zpao and @zth.\\n\\nThe open source project [`relay-hooks`](https://github.com/relay-tools/relay-hooks) allowed the community to experiment with Relay and React Hooks, and was a source of valuable feedback for us. The idea for the `useSubscription` hook originated in [an issue](https://github.com/relay-tools/relay-hooks/issues/5#issuecomment-603930570) on that repo. Thank you @morrys for driving this project and for playing such an important role in our open source community.\\n\\nThank you for helping make this possible!"}]}')}}]);