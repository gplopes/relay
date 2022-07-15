"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53076],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){return function(t){var a=c(t.components);return n.createElement(e,o({},t,{components:a}))}},c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={title:"Introducing the new Relay compiler",author:"Robert Balicki, Tianyu Yao & Andrey Lunyov",tags:["relay-compiler","rust","required"],description:"Introducing the new Relay compiler",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/2021/12/08/introducing-the-new-relay-compiler",source:"@site/blog/2021-12-08-introducing-the-new-relay-compiler.md",title:"Introducing the new Relay compiler",description:"Introducing the new Relay compiler",date:"2021-12-08T00:00:00.000Z",formattedDate:"December 8, 2021",tags:[{label:"relay-compiler",permalink:"/blog/tags/relay-compiler"},{label:"rust",permalink:"/blog/tags/rust"},{label:"required",permalink:"/blog/tags/required"}],readingTime:11.205,truncated:!1,authors:[{name:"Robert Balicki, Tianyu Yao & Andrey Lunyov"}],frontMatter:{title:"Introducing the new Relay compiler",author:"Robert Balicki, Tianyu Yao & Andrey Lunyov",tags:["relay-compiler","rust","required"],description:"Introducing the new Relay compiler",hide_table_of_contents:!1},nextItem:{title:"Introducing Relay Hooks",permalink:"/blog/2021/03/09/introducing-relay-hooks"}},p={authorsImageUrls:[void 0]},c=[{value:"Why does Relay have a compiler?",id:"why-does-relay-have-a-compiler",level:2},{value:"Supporting local reasoning",id:"supporting-local-reasoning",level:3},{value:"Improved runtime performance",id:"improved-runtime-performance",level:3},{value:"What does the new compiler enable?",id:"what-does-the-new-compiler-enable",level:2},{value:"Compiler performance",id:"compiler-performance",level:2},{value:"Reaching the end of JavaScript",id:"reaching-the-end-of-javascript",level:3},{value:"Deciding on Rust",id:"deciding-on-rust",level:3},{value:"Internal rollout",id:"internal-rollout",level:2},{value:"Release in OSS",id:"release-in-oss",level:2},{value:"Thanks",id:"thanks",level:2}],m={toc:c};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"We're extremely excited to release a preview of the new, Rust-based Relay compiler to open source today (as ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v13.0.0-rc.1"},(0,o.mdx)("inlineCode",{parentName:"a"},"v13.0.0-rc.1")),")! This new compiler is faster, supports new runtime features, and provides a strong foundation for additional growth in the future."),(0,o.mdx)("p",null,"Leading up to this release, Meta's codebase had been growing without signs of stopping. At our scale, the time it took to compile all of the queries in our codebase was increasing at the direct expense of developer productivity. Though we tried a number of strategies to optimize our JavaScript-based compiler (discussed below), our ability to incrementally eke out performance gains could not keep up with the growth in the number of queries in our codebase."),(0,o.mdx)("p",null,"So, we decided to rewrite the compiler in Rust. We chose Rust because it is fast, memory-safe, and makes it easy to safely share large data structures across threads. Development began in early 2020, and the compiler shipped internally at the end of that year. The rollout was smooth, with no interruptions to application development. Initial internal benchmarks indicated that the compiler performed nearly 5x better on average, and nearly 7x better at P95. We've further improved the performance of the compiler since then."),(0,o.mdx)("p",null,"This post will explore why Relay has a compiler, what we hope to unlock with the new compiler, its new features, and why we chose to use the Rust language. If you're in a hurry to get started using the new compiler, check out ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/tree/main/packages/relay-compiler"},"the compiler package README")," or the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v13.0.0-rc.1"},"release notes")," instead!"),(0,o.mdx)("h2",{id:"why-does-relay-have-a-compiler"},"Why does Relay have a compiler?"),(0,o.mdx)("p",null,"Relay has a compiler in order to provide stability guarantees and achieve great runtime performance."),(0,o.mdx)("p",null,"To understand why, consider the workflow of using the framework. With Relay, developers use a declarative language called GraphQL to specify what data each component needs, but not how to get it. The compiler then stitches these components' data dependencies into queries that fetch all of the data for a given page and precomputes artifacts that give Relay applications such a high level of performance and stability."),(0,o.mdx)("p",null,"In this workflow, the compiler"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"allows components to be reasoned about in isolation, making large classes of bugs impossible, and"),(0,o.mdx)("li",{parentName:"ul"},"shifts as much work as possible to build time, significantly improving the runtime performance of applications that use Relay.")),(0,o.mdx)("p",null,"Let's interrogate each of these in turn."),(0,o.mdx)("h3",{id:"supporting-local-reasoning"},"Supporting local reasoning"),(0,o.mdx)("p",null,"With Relay, a component specifies only its own data requirements through the use of GraphQL fragments. The compiler then stitches these components data dependencies into queries that fetch all of the data for a given page. Developers can focus on writing a component without worrying how its data dependencies fit into a larger query."),(0,o.mdx)("p",null,"However, Relay takes this local reasoning a step further. The compiler also generates files that are used by the Relay runtime to read out just the data selected by a given component's fragment (we call this ",(0,o.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/principles-and-architecture/thinking-in-relay/#data-masking"},"data masking"),"). So a component never accesses (in practice, not just at the type level!) any data that it didn't explicitly request."),(0,o.mdx)("p",null,"Thus, modifying one component's data dependencies cannot affect the data another component sees, meaning that ",(0,o.mdx)("strong",{parentName:"p"},"developers can reason about components in isolation.")," This gives Relay apps an unparalleled level of stability and makes large classes of bugs impossible, and is a key part of why Relay can scale to many developers touching the same codebase."),(0,o.mdx)("h3",{id:"improved-runtime-performance"},"Improved runtime performance"),(0,o.mdx)("p",null,"Relay also makes use of the compiler to shift as much work as possible to build time, improving the performance of Relay apps."),(0,o.mdx)("p",null,"Because the Relay compiler has global knowledge of all components' data dependencies, it is able to write queries that are as good \u2014 and generally even better \u2014 than they would be if they had been written by hand. It's able to do this by optimizing queries in ways that would be impractically slow at runtime. For example, it prunes branches that can never be accessed from the generated queries and flattens identical sections of queries."),(0,o.mdx)("p",null,"And because these queries are generated at build time, Relay applications never generate abstract syntax trees (ASTs) from GraphQL fragments, manipulate those ASTs, or generate query text at runtime. Instead, the Relay compiler replaces an application's GraphQL fragments with precomputed, optimized instructions (as plain ol' Javascript data structures) that describe how to write network data to the store and read it back out."),(0,o.mdx)("p",null,"An added benefit of this arrangement is that a Relay application bundle includes neither the schema nor \u2014 when using persisted queries \u2014 the string representation of the GraphQL fragments. This helps to reduce application size, saving users' bandwidth and improving application performance."),(0,o.mdx)("p",null,"In fact, the new compiler goes further and saves users' bandwidth in another way \u2014 Relay can inform an application's server about each query text at build time and generate a unique query ID, meaning that the application never needs to send the potentially very long query string over users' slow networks. When using such persisted queries, the only things that must be sent over the wire to make a network request are the query ID and the query variables!"),(0,o.mdx)("h2",{id:"what-does-the-new-compiler-enable"},"What does the new compiler enable?"),(0,o.mdx)("p",null,"Compiled languages are sometimes perceived as introducing friction and slowing developers down when compared to dynamic languages. However, Relay takes advantage of the compiler to reduce friction and make common developer tasks easier. For example, Relay exposes high-level primitives for common interactions that are easy to get subtly wrong, such as pagination and refetching a query with new variables."),(0,o.mdx)("p",null,"What these interactions have in common is that they require generating a new query from an old one, and thus involve boilerplate and duplication \u2014 an ideal target for automation. Relay takes advantage of the compiler's global knowledge to empower developers to enable pagination and refetching by adding one directive and changing one function call. That's it."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"But giving developers the ability to easily add pagination is just the tip of the iceberg.")," Our vision for the compiler is that it provides even more high-level tools for shipping features and avoiding boilerplate, gives developers real-time assistance and insights, and is made up of parts that can be used by other tools for working with GraphQL."),(0,o.mdx)("p",null,"A primary goal of this project was that the rewritten compiler's architecture should set us up to achieve this vision over the coming years."),(0,o.mdx)("p",null,"And while we're not there yet, we have made significant achievements on each of the criteria."),(0,o.mdx)("p",null,"For example, the new compiler ships with support for the new ",(0,o.mdx)("inlineCode",{parentName:"p"},"@required")," directive, which will nullify the parent linked field or throw an error if a given subfield is null when read out. This may sound like a trivial quality-of-life improvement, but if half of your component's code is null checks, ",(0,o.mdx)("inlineCode",{parentName:"p"},"@required")," starts to look pretty good!"),(0,o.mdx)("style",{type:"text/css"}," img { max-height: 600px; }"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"A component without ",(0,o.mdx)("inlineCode",{parentName:"p"},"@required"),":"),(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("img",{alt:"Image: A component with null-checking boilerplate",src:a(3555).Z,width:"740",height:"1000"})),(0,o.mdx)("p",{parentName:"blockquote"},"And with ",(0,o.mdx)("inlineCode",{parentName:"p"},"@required"),":"),(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("img",{alt:"Image: A component will less null-checking boilerplate, due to the use of the `@required` directive",src:a(50098).Z,width:"740",height:"1000"}))),(0,o.mdx)("p",null,"Next, the compiler powers an internal-only VSCode extension that autocompletes field names when you type and shows type information on hover, among many other features. We haven't made it public, yet, but we hope to at some point! Our experience is that this VSCode extension makes working with GraphQL data much easier and more intuitive."),(0,o.mdx)("p",null,"Lastly, the new compiler was written as a series of independent modules that can be reused by other GraphQL tools. We call this the Relay compiler platform. Internally, these modules are being reused for other code generation tools and for other GraphQL clients for different platforms."),(0,o.mdx)("h2",{id:"compiler-performance"},"Compiler performance"),(0,o.mdx)("p",null,"So far, we've discussed why Relay has a compiler and what we hope the rewrite enables. But we haven't discussed why we decided to rewrite the compiler in 2020: performance."),(0,o.mdx)("p",null,"Prior to the decision to rewrite the compiler, the time it took to compile all of the queries in our codebase was gradually, but unrelentingly, slowing as our codebase grew. Our ability to eke out performance gains could not keep up with the growth in the number of queries in our codebase, and we saw no incremental way out of this predicament."),(0,o.mdx)("h3",{id:"reaching-the-end-of-javascript"},"Reaching the end of JavaScript"),(0,o.mdx)("p",null,"The previous compiler was written in JavaScript. This was a natural choice of language for several reasons: it was the language with which our team had the most experience, the language in which the Relay runtime was written (allowing us to share code between the compiler and runtime), and the language in which the GraphQL reference implementation and our mobile GraphQL tools were written."),(0,o.mdx)("p",null,"The compiler's performance remained reasonable for quite some time: Node/V8 comes with a heavily-optimized JIT compiler and garbage collector, and can be quite fast if you're careful (we were). But compilation times were growing."),(0,o.mdx)("p",null,"We tried a number of strategies to keep up:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"We had made the compiler incremental. In response to a change, it only recompiled the dependencies that were affected by that change."),(0,o.mdx)("li",{parentName:"ul"},"We had identified which transforms were slow (namely, flatten), and made the algorithmic improvements we could (such as adding memoization)."),(0,o.mdx)("li",{parentName:"ul"},"The official ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," npm package's GraphQL schema representation took multiple gigabytes of memory to represent our schema, so we replaced it with a custom fork."),(0,o.mdx)("li",{parentName:"ul"},"We made profiler-guided micro-optimizations in our hottest code paths. For example, we stopped using the ",(0,o.mdx)("inlineCode",{parentName:"li"},"...")," operator to clone and modify objects, instead preferring to explicitly list out the properties of objects when copying them. This preserved the object's hidden class, and enabled the code to better JIT-optimized."),(0,o.mdx)("li",{parentName:"ul"},"We restructured the compiler to shell out to multiple workers, with each worker handling a single schema. Projects with multiple schemas are uncommon outside of Meta, so even with this, most users would have been using a single-threaded compiler.")),(0,o.mdx)("p",null,"These optimizations weren't enough to keep pace with the rapid internal adoption of Relay."),(0,o.mdx)("p",null,"The biggest challenge was that NodeJS does not support multithreaded programs with shared memory. The best one can do is to start multiple workers that communicate by passing messages."),(0,o.mdx)("p",null,"This works well in some scenarios. For example, Jest employs this pattern and makes use of all cores when running tests of transforming files. This is a good fit because Jest doesn't need to share much data or memory between processes."),(0,o.mdx)("p",null,"On the other hand, our schema is simply too large to have multiple instances in memory, so there was simply no good way to efficiently parallelize the Relay compiler with more than one thread per schema in JavaScript."),(0,o.mdx)("h3",{id:"deciding-on-rust"},"Deciding on Rust"),(0,o.mdx)("p",null,"After we decided to rewrite the compiler, we evaluated many languages to see which would meet the needs of our project. We wanted a language that was fast, memory-safe and supported concurrency \u2014 preferably with concurrency bugs caught at build time, not at runtime. At the same time we wanted a language that was well-supported internally. This narrowed it down to a few choices:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"C++ met most of the criteria, but felt difficult to learn. And, the compiler doesn't assist with safety as much as we'd like."),(0,o.mdx)("li",{parentName:"ul"},"Java was probably also a decent choice. It can be fast and is multi-core, but provides less low-level control."),(0,o.mdx)("li",{parentName:"ul"},"OCaml is a proven choice in the compiler space, but multi-threading is challenging."),(0,o.mdx)("li",{parentName:"ul"},"Rust is fast, memory-safe, and supports concurrency. It makes it easy to safely share large data structures across threads. With the general excitement around Rust, some previous experience on our team, and usage by other teams at Facebook, this was our clear top choice.")),(0,o.mdx)("h2",{id:"internal-rollout"},"Internal rollout"),(0,o.mdx)("p",null,"Rust turned out to be a great fit! The team of mostly JavaScript developers found Rust easy to adopt. And, Rust's advanced type system caught many errors at build time, helping us maintain a high velocity."),(0,o.mdx)("p",null,"We began development in early 2020, and rolled out the compiler internally at the end of that year. Initial internal benchmarks indicated that the compiler performed nearly 5x better on average, and nearly 7x better at P95. We've further improved the performance of the compiler since then."),(0,o.mdx)("h2",{id:"release-in-oss"},"Release in OSS"),(0,o.mdx)("p",null,"Today, we're excited to publish the new version of the compiler, as part of the Relay v13. New compiler features include:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/guides/required-directive/"},"The ",(0,o.mdx)("inlineCode",{parentName:"a"},"@required")," directive.")),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"@no_inline")," directive, which can be used to prevent common fragments from being inlined, resulting in smaller generated files."),(0,o.mdx)("li",{parentName:"ul"},"Validation for conflicting GraphQL fields, arguments and directives"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/relay/pull/3182"},"Support for TypeScript type generation")),(0,o.mdx)("li",{parentName:"ul"},"Support for remote query persisting.")),(0,o.mdx)("p",null,"You can find more information about the compiler in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/tree/main/packages/relay-compiler"},"README")," and in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v13.0.0-rc.1"},"release notes"),"!"),(0,o.mdx)("p",null,"We're continuing to develop features within the compiler, such as giving developers the ability to access derived values on the graph, adding support for a more ergonomic syntax for updating local data, and fully fleshing out our VSCode extension, all of which we hope to release to open source. We're proud of this release, but there's still a lot more to come!"),(0,o.mdx)("h2",{id:"thanks"},"Thanks"),(0,o.mdx)("p",null,"Thank you Joe Savona, Lauren Tan, Jason Bonta and Jordan Eldredge for providing amazing feedback on this blog post. Thank you ch1ffa, robrichard, orta and sync for filing issues related to compiler bugs. Thank you to MaartenStaa for adding TypeScript support. Thank you @andrewingram for pointing out how difficult it is to enable the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@required")," directive, which is now enabled by default. There are many others that contributed \u2014 this was truly a community effort!"))}h.isMDXComponent=!0},50098:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2021-12-08-introducing-the-new-relay-compiler-post-required-5d8885970f034d798e022fa46fb6508a.png"},3555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2021-12-08-introducing-the-new-relay-compiler-pre-required-34d7c573b373c37510cb92f5d5bac681.png"}}]);