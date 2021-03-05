(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1068:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(a),u=n,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},350:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a(3),r=a(7),i=(a(0),a(1068)),o={id:"thinking-in-graphql",title:"Thinking in GraphQL",original_id:"thinking-in-graphql"},s={unversionedId:"thinking-in-graphql",id:"version-v7.0.0/thinking-in-graphql",isDocsHomePage:!1,title:"Thinking in GraphQL",description:"GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. It provides a way for developers to specify the precise data needed for a view and enables a client to fetch that data in a single network request. Compared to traditional approaches such as REST, GraphQL helps applications to fetch data more efficiently (compared to resource-oriented REST approaches) and avoid duplication of server logic (which can occur with custom endpoints). Furthermore, GraphQL helps developers to decouple product code and server logic. For example, a product can fetch more or less information without requiring a change to every relevant server endpoint. It's a great way to fetch data.",source:"@site/versioned_docs/version-v7.0.0/PrinciplesAndArchitecture-ThinkingInGraphQL.md",slug:"/thinking-in-graphql",permalink:"/docs/v7.0.0/thinking-in-graphql",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v7.0.0/PrinciplesAndArchitecture-ThinkingInGraphQL.md",version:"v7.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614961879,sidebar:"version-v7.0.0/docs",previous:{title:"Local State Management",permalink:"/docs/v7.0.0/local-state-management"},next:{title:"Thinking In Relay",permalink:"/docs/v7.0.0/thinking-in-relay"}},c=[{value:"Fetching Data",id:"fetching-data",children:[]},{value:"Client Caching",id:"client-caching",children:[]},{value:"Cache Consistency",id:"cache-consistency",children:[{value:"Caching A Graph",id:"caching-a-graph",children:[]},{value:"Using The Cache",id:"using-the-cache",children:[]},{value:"Populating The Cache",id:"populating-the-cache",children:[]},{value:"Reading From Cache",id:"reading-from-cache",children:[]},{value:"Cache Updates",id:"cache-updates",children:[]}]},{value:"Data/View Consistency",id:"dataview-consistency",children:[{value:"Achieving View Consistency",id:"achieving-view-consistency",children:[]}]},{value:"Mutations",id:"mutations",children:[]},{value:"Data-Fetching APIs",id:"data-fetching-apis",children:[]}],l={toc:c};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. It provides a way for developers to specify the precise data needed for a view and enables a client to fetch that data in a single network request. Compared to traditional approaches such as REST, GraphQL helps applications to fetch data more efficiently (compared to resource-oriented REST approaches) and avoid duplication of server logic (which can occur with custom endpoints). Furthermore, GraphQL helps developers to decouple product code and server logic. For example, a product can fetch more or less information without requiring a change to every relevant server endpoint. It's a great way to fetch data."),Object(i.b)("p",null,"In this article we'll explore what it means to build a GraphQL client framework and how this compares to clients for more traditional REST systems. Along the way we'll look at the design decisions behind Relay and see that it's not just a GraphQL client but also a framework for ",Object(i.b)("em",{parentName:"p"},"declarative data-fetching"),". Let's start at the beginning and fetch some data!"),Object(i.b)("h2",{id:"fetching-data"},"Fetching Data"),Object(i.b)("p",null,"Imagine we have a simple application that fetches a list of stories, and some details about each one. Here's how that might look in resource-oriented REST:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\n// Fetch the list of story IDs but not their details:\nrest.get(\'/stories\').then(stories =>\n  // This resolves to a list of items with linked resources:\n  // `[ { href: "http://.../story/1" }, ... ]`\n  Promise.all(stories.map(story =>\n    rest.get(story.href) // Follow the links\n  ))\n).then(stories => {\n  // This resolves to a list of story items:\n  // `[ { id: "...", text: "..." } ]`\n  console.log(stories);\n});\n\n')),Object(i.b)("p",null,"Note that this approach requires ",Object(i.b)("em",{parentName:"p"},"n+1")," requests to the server: 1 to fetch the list, and ",Object(i.b)("em",{parentName:"p"},"n")," to fetch each item. With GraphQL we can fetch the same data in a single network request to the server (without creating a custom endpoint that we'd then have to maintain):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\ngraphql.get(`query { stories { id, text } }`).then(\n  stories => {\n    // A list of story items:\n    // `[ { id: "...", text: "..." } ]`\n    console.log(stories);\n  }\n);\n\n')),Object(i.b)("p",null,"So far we're just using GraphQL as a more efficient version of typical REST approaches. Note two important benefits in the GraphQL version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All data is fetched in a single round trip."),Object(i.b)("li",{parentName:"ul"},"The client and server are decoupled: the client specifies the data needed instead of ",Object(i.b)("em",{parentName:"li"},"relying on")," the server endpoint to return the correct data.")),Object(i.b)("p",null,"For a simple application that's already a nice improvement."),Object(i.b)("h2",{id:"client-caching"},"Client Caching"),Object(i.b)("p",null,"Repeatedly refetching information from the server can get quite slow. For example, navigating from the list of stories, to a list item, and back to the list of stories means we have to refetch the whole list. We'll solve this with the standard solution: ",Object(i.b)("em",{parentName:"p"},"caching"),"."),Object(i.b)("p",null,"In a resource-oriented REST system, we can maintain a ",Object(i.b)("strong",{parentName:"p"},"response cache")," based on URIs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nvar _cache = new Map();\nrest.get = uri => {\n  if (!_cache.has(uri)) {\n    _cache.set(uri, fetch(uri));\n  }\n  return _cache.get(uri);\n};\n\n")),Object(i.b)("p",null,"Response-caching can also be applied to GraphQL. A basic approach would work similarly to the REST version. The text of the query itself can be used as a cache key:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nvar _cache = new Map();\ngraphql.get = queryText => {\n  if (!_cache.has(queryText)) {\n    _cache.set(queryText, fetchGraphQL(queryText));\n  }\n  return _cache.get(queryText);\n};\n\n")),Object(i.b)("p",null,"Now, requests for previously cached data can be answered immediately without making a network request. This is a practical approach to improving the perceived performance of an application. However, this method of caching can cause problems with data consistency."),Object(i.b)("h2",{id:"cache-consistency"},"Cache Consistency"),Object(i.b)("p",null,"With GraphQL it is very common for the results of multiple queries to overlap. However, our response cache from the previous section doesn't account for this overlap \u2014 it caches based on distinct queries. For example, if we issue a query to fetch stories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nquery { stories { id, text, likeCount } }\n\n")),Object(i.b)("p",null,"and then later refetch one of the stories whose ",Object(i.b)("inlineCode",{parentName:"p"},"likeCount")," has since been incremented:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'\nquery { story(id: "123") { id, text, likeCount } }\n\n')),Object(i.b)("p",null,"We'll now see different ",Object(i.b)("inlineCode",{parentName:"p"},"likeCount"),"s depending on how the story is accessed. A view that uses the first query will see an outdated count, while a view using the second query will see the updated count."),Object(i.b)("h3",{id:"caching-a-graph"},"Caching A Graph"),Object(i.b)("p",null,"The solution to caching GraphQL is to normalize the hierarchical response into a flat collection of ",Object(i.b)("strong",{parentName:"p"},"records"),". Relay implements this cache as a map from IDs to records. Each record is a map from field names to field values. Records may also link to other records (allowing it to describe a cyclic graph), and these links are stored as a special value type that references back into the top-level map. With this approach each server record is stored ",Object(i.b)("em",{parentName:"p"},"once")," regardless of how it is fetched."),Object(i.b)("p",null,"Here's an example query that fetches a story's text and its author's name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'\nquery {\n  story(id: "1") {\n    text,\n    author {\n      name\n    }\n  }\n}\n\n')),Object(i.b)("p",null,"And here's a possible response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'\nquery: {\n  story: {\n     text: "Relay is open-source!",\n     author: {\n       name: "Jan"\n     }\n  }\n}\n\n')),Object(i.b)("p",null,"Although the response is hierarchical, we'll cache it by flattening all the records. Here is an example of how Relay would cache this query response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nMap {\n  // `story(id: \"1\")`\n  1: Map {\n    text: 'Relay is open-source!',\n    author: Link(2),\n  },\n  // `story.author`\n  2: Map {\n    name: 'Jan',\n  },\n};\n\n")),Object(i.b)("p",null,"This is only a simple example: in reality the cache must handle one-to-many associations and pagination (among other things)."),Object(i.b)("h3",{id:"using-the-cache"},"Using The Cache"),Object(i.b)("p",null,"So how do we use this cache? Let's look at two operations: writing to the cache when a response is received, and reading from the cache to determine if a query can be fulfilled locally (the equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"_cache.has(key)")," above, but for a graph)."),Object(i.b)("h3",{id:"populating-the-cache"},"Populating The Cache"),Object(i.b)("p",null,"Populating the cache involves walking a hierarchical GraphQL response and creating or updating normalized cache records. At first it may seem that the response alone is sufficient to process the response, but in fact this is only true for very simple queries. Consider ",Object(i.b)("inlineCode",{parentName:"p"},'user(id: "456") { photo(size: 32) { uri } }')," \u2014 how should we store ",Object(i.b)("inlineCode",{parentName:"p"},"photo"),"? Using ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," as the field name in the cache won't work because a different query might fetch the same field but with different argument values (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"photo(size: 64) {...}"),"). A similar issue occurs with pagination. If we fetch the 11th to 20th stories with ",Object(i.b)("inlineCode",{parentName:"p"},"stories(first: 10, offset: 10)"),", these new results should be ",Object(i.b)("em",{parentName:"p"},"appended")," to the existing list."),Object(i.b)("p",null,"Therefore, a normalized response cache for GraphQL requires processing payloads and queries in parallel. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," field from above might be cached with a generated field name such as ",Object(i.b)("inlineCode",{parentName:"p"},"photo_size(32)")," in order to uniquely identify the field and its argument values."),Object(i.b)("h3",{id:"reading-from-cache"},"Reading From Cache"),Object(i.b)("p",null,"To read from the cache we can walk a query and resolve each field. But wait: that sounds ",Object(i.b)("em",{parentName:"p"},"exactly")," like what a GraphQL server does when it processes a query. And it is! Reading from the cache is a special case of an executor where a) there's no need for user-defined field functions because all results come from a fixed data structure and b) results are always synchronous \u2014 we either have the data cached or we don't."),Object(i.b)("p",null,"Relay implements several variations of ",Object(i.b)("strong",{parentName:"p"},"query traversal"),': operations that walk a query alongside some other data such as the cache or a response payload. For example, when a query is fetched Relay performs a "diff" traversal to determine what fields are missing (much like React diffs virtual DOM trees). This can reduce the amount of data fetched in many common cases and even allow Relay to avoid network requests at all when queries are fully cached.'),Object(i.b)("h3",{id:"cache-updates"},"Cache Updates"),Object(i.b)("p",null,"Note that this normalized cache structure allows overlapping results to be cached without duplication. Each record is stored once regardless of how it is fetched. Let's return to the earlier example of inconsistent data and see how this cache helps in that scenario."),Object(i.b)("p",null,"The first query was for a list of stories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nquery { stories { id, text, likeCount } }\n\n")),Object(i.b)("p",null,"With a normalized response cache, a record would be created for each story in the list. The ",Object(i.b)("inlineCode",{parentName:"p"},"stories")," field would store links to each of these records."),Object(i.b)("p",null,"The second query refetched the information for one of those stories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'\nquery { story(id: "123") { id, text, likeCount } }\n\n')),Object(i.b)("p",null,"When this response is normalized, Relay can detect that this result overlaps with existing data based on its ",Object(i.b)("inlineCode",{parentName:"p"},"id"),". Rather than create a new record, Relay will update the existing ",Object(i.b)("inlineCode",{parentName:"p"},"123")," record. The new ",Object(i.b)("inlineCode",{parentName:"p"},"likeCount")," is therefore available to ",Object(i.b)("em",{parentName:"p"},"both")," queries, as well as any other query that might reference this story."),Object(i.b)("h2",{id:"dataview-consistency"},"Data/View Consistency"),Object(i.b)("p",null,"A normalized cache ensures that the ",Object(i.b)("em",{parentName:"p"},"cache")," is consistent. But what about our views? Ideally, our React views would always reflect the current information from the cache."),Object(i.b)("p",null,"Consider rendering the text and comments of a story along with the corresponding author names and photos. Here's the GraphQL query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'\nquery {\n  story(id: "1") {\n    text,\n    author { name, photo },\n    comments {\n      text,\n      author { name, photo }\n    }\n  }\n}\n\n')),Object(i.b)("p",null,"After initially fetching this story our cache might be as follows. Note that the story and comment both link to the same record as ",Object(i.b)("inlineCode",{parentName:"p"},"author"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n// Note: This is pseudo-code for `Map` initialization to make the structure\n// more obvious.\nMap {\n  // `story(id: \"1\")`\n  1: Map {\n    text: 'got GraphQL?',\n    author: Link(2),\n    comments: [Link(3)],\n  },\n  // `story.author`\n  2: Map {\n    name: 'Yuzhi',\n    photo: 'http://.../photo1.jpg',\n  },\n  // `story.comments[0]`\n  3: Map {\n    text: 'Here\\'s how to get one!',\n    author: Link(2),\n  },\n}\n\n")),Object(i.b)("p",null,"The author of this story also commented on it \u2014 quite common. Now imagine that some other view fetches new information about the author, and her profile photo has changed to a new URI. Here's the ",Object(i.b)("em",{parentName:"p"},"only")," part of our cached data that changes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nMap {\n  ...\n  2: Map {\n    ...\n    photo: 'http://.../photo2.jpg',\n  },\n}\n\n")),Object(i.b)("p",null,"The value of the ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," field has changed; and therefore the record ",Object(i.b)("inlineCode",{parentName:"p"},"2")," has also changed. And that's it. Nothing else in the ",Object(i.b)("em",{parentName:"p"},"cache")," is affected. But clearly our ",Object(i.b)("em",{parentName:"p"},"view")," needs to reflect the update: both instances of the author in the UI (as story author and comment author) need to show the new photo."),Object(i.b)("p",null,'A standard response is to "just use immutable data structures" \u2014 but let\'s see what would happen if we did:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\nImmutableMap {\n  1: ImmutableMap // same as before\n  2: ImmutableMap {\n    ... // other fields unchanged\n    photo: 'http://.../photo2.jpg',\n  },\n  3: ImmutableMap // same as before\n}\n\n")),Object(i.b)("p",null,"If we replace ",Object(i.b)("inlineCode",{parentName:"p"},"2")," with a new immutable record, we'll also get a new immutable instance of the cache object. However, records ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"3")," are untouched. Because the data is normalized, we can't tell that ",Object(i.b)("inlineCode",{parentName:"p"},"story"),"'s contents have changed just by looking at the ",Object(i.b)("inlineCode",{parentName:"p"},"story")," record alone."),Object(i.b)("h3",{id:"achieving-view-consistency"},"Achieving View Consistency"),Object(i.b)("p",null,"There are a variety of solutions for keeping views up to date with a flattened cache. The approach that Relay takes is to maintain a mapping from each UI view to the set of IDs it references. In this case, the story view would subscribe to updates on the story (",Object(i.b)("inlineCode",{parentName:"p"},"1"),"), the author (",Object(i.b)("inlineCode",{parentName:"p"},"2"),"), and the comments (",Object(i.b)("inlineCode",{parentName:"p"},"3")," and any others). When writing data into the cache, Relay tracks which IDs are affected and notifies ",Object(i.b)("em",{parentName:"p"},"only")," the views that are subscribed to those IDs. The affected views re-render, and unaffected views opt-out of re-rendering for better performance (Relay provides a safe but effective default ",Object(i.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"). Without this strategy, every view would re-render for even the tiniest change."),Object(i.b)("p",null,"Note that this solution will also work for ",Object(i.b)("em",{parentName:"p"},"writes"),": any update to the cache will notify the affected views, and writes are just another thing that updates the cache."),Object(i.b)("h2",{id:"mutations"},"Mutations"),Object(i.b)("p",null,"So far we've looked at the process of querying data and keeping views up to date, but we haven't looked at writes. In GraphQL, writes are called ",Object(i.b)("strong",{parentName:"p"},"mutations"),". We can think of them as queries with side effects. Here's an example of calling a mutation that might mark a given story as being liked by the current user:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\n// Give a human-readable name and define the types of the inputs,\n// in this case the id of the story to mark as liked.\nmutation StoryLike($storyID: String) {\n   // Call the mutation field and trigger its side effects\n   storyLike(storyID: $storyID) {\n     // Define fields to re-fetch after the mutation completes\n     likeCount\n   }\n}\n\n")),Object(i.b)("p",null,"Notice that we're querying for data that ",Object(i.b)("em",{parentName:"p"},"may")," have changed as a result of the mutation. An obvious question is: why can't the server just tell us what changed? The answer is: it's complicated. GraphQL abstracts over ",Object(i.b)("em",{parentName:"p"},"any")," data storage layer (or an aggregation of multiple sources), and works with any programming language. Furthermore, the goal of GraphQL is to provide data in a form that is useful to product developers building a view."),Object(i.b)("p",null,"We've found that it's common for the GraphQL schema to differ slightly or even substantially from the form in which data is stored on disk. Put simply: there isn't always a 1:1 correspondence between data changes in your underlying ",Object(i.b)("em",{parentName:"p"},"data storage")," (disk) and data changes in your ",Object(i.b)("em",{parentName:"p"},"product-visible schema")," (GraphQL). The perfect example of this is privacy: returning a user-facing field such as ",Object(i.b)("inlineCode",{parentName:"p"},"age")," might require accessing numerous records in our data-storage layer to determine if the active user is even allowed to ",Object(i.b)("em",{parentName:"p"},"see")," that ",Object(i.b)("inlineCode",{parentName:"p"},"age")," (Are we friends? Is my age shared? Did I block you? etc.)."),Object(i.b)("p",null,"Given these real-world constraints, the approach in GraphQL is for clients to query for things that may change after a mutation. But what exactly do we put in that query? During the development of Relay we explored several ideas \u2014 let's look at them briefly in order to understand why Relay uses the approach that it does:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 1: Re-fetch everything that the app has ever queried. Even though only a small subset of this data will actually change, we'll still have to wait for the server to execute the ",Object(i.b)("em",{parentName:"p"},"entire")," query, wait to download the results, and wait to process them again. This is very inefficient.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 2: Re-fetch only the queries required by actively rendered views. This is a slight improvement over option 1. However, cached data that ",Object(i.b)("em",{parentName:"p"},"isn't")," currently being viewed won't be updated. Unless this data is somehow marked as stale or evicted from the cache subsequent queries will read outdated information.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 3: Re-fetch a fixed list of fields that ",Object(i.b)("em",{parentName:"p"},"may")," change after the mutation. We'll call this list a ",Object(i.b)("strong",{parentName:"p"},"fat query"),". We found this to also be inefficient because typical applications only render a subset of the fat query, but this approach would require fetching all of those fields.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 4 (Relay): Re-fetch the intersection of what may change (the fat query) and the data in the cache. In addition to the cache of data Relay also remembers the queries used to fetch each item. These are called ",Object(i.b)("strong",{parentName:"p"},"tracked queries"),". By intersecting the tracked and fat queries, Relay can query exactly the set of information the application needs to update and nothing more."))),Object(i.b)("h2",{id:"data-fetching-apis"},"Data-Fetching APIs"),Object(i.b)("p",null,"So far we looked at the lower-level aspects of data-fetching and saw how various familiar concepts translate to GraphQL. Next, let's step back and look at some higher-level concerns that product developers often face around data-fetching:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fetching all the data for a view hierarchy."),Object(i.b)("li",{parentName:"ul"},"Managing asynchronous state transitions and coordinating concurrent requests."),Object(i.b)("li",{parentName:"ul"},"Managing errors."),Object(i.b)("li",{parentName:"ul"},"Retrying failed requests."),Object(i.b)("li",{parentName:"ul"},"Updating the local cache after receiving query/mutation responses."),Object(i.b)("li",{parentName:"ul"},"Queuing mutations to avoid race conditions."),Object(i.b)("li",{parentName:"ul"},"Optimistically updating the UI while waiting for the server to respond to mutations.")),Object(i.b)("p",null,"We've found that typical approaches to data-fetching \u2014 with imperative APIs \u2014 force developers to deal with too much of this non-essential complexity. For example, consider ",Object(i.b)("em",{parentName:"p"},"optimistic UI updates"),". This is a way of giving the user feedback while waiting for a server response. The logic of ",Object(i.b)("em",{parentName:"p"},"what"),' to do can be quite clear: when the user clicks "like", mark the story as being liked and send the request to the server. But the implementation is often much more complex. Imperative approaches require us to implement all of those steps: reach into the UI and toggle the button, initiate a network request, retry it if necessary, show an error if it fails (and untoggle the button), etc. The same goes for data-fetching: specifying ',Object(i.b)("em",{parentName:"p"},"what")," data we need often dictates ",Object(i.b)("em",{parentName:"p"},"how")," and ",Object(i.b)("em",{parentName:"p"},"when")," it is fetched. Next, we'll explore our approach to solving these concerns with ",Object(i.b)("strong",{parentName:"p"},"Relay"),"."))}h.isMDXComponent=!0}}]);