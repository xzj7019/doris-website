"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[248247],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=g(n),m=r,y=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},835526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(296540),n(15680));const l={title:"Index Overview",language:"en"},i=void 0,o={unversionedId:"table-design/index/index-overview",id:"version-2.1/table-design/index/index-overview",title:"Index Overview",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/index/index-overview.md",sourceDirName:"table-design/index",slug:"/table-design/index/index-overview",permalink:"/docs/table-design/index/index-overview",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Index Overview",language:"en"},sidebar:"docs",previous:{title:"Data Types",permalink:"/docs/table-design/data-type"},next:{title:"Sort Key and Prefix Index",permalink:"/docs/table-design/index/prefix-index"}},d={},g=[{value:"Index Types and Principles",id:"index-types-and-principles",level:2},{value:"Index Design Guidelines",id:"index-design-guidelines",level:2}],p={toc:g},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Database indexes are used to accelerate queries. To speed up different query scenarios, Doris supports various rich indexes."),(0,r.yg)("h2",{id:"index-types-and-principles"},"Index Types and Principles"),(0,r.yg)("p",null,"From the perspective of accelerating queries and their principles, Doris indexes are categorized into two main types: point query indexes and skip indexes."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Point Query Indexes:")," Commonly used to speed up point queries, the principle is to locate which rows satisfy the WHERE conditions through the index and directly read those rows. Point query indexes are very effective when the number of rows meeting the conditions is small. Doris's point query indexes include Prefix Index and Inverted Index.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Prefix Index:")," Doris stores data in an ordered manner according to the sort key and creates a sparse prefix index every 1024 rows. The key in the index is the value of the sorted column in the first row of the current 1024 rows. If the query involves a sorted column, the system will find the first row of the relevant 1024-row group and start scanning from there."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Inverted Index:")," For columns with an inverted index, an posting list is created mapping each value to a set of row ids. For equality queries, it first finds the set of row ids from the posting list, then directly reads the data of those rows, avoiding row-by-row scanning. Inverted indexes can also accelerate range filtering and fulltext search. The algorithms are more complex, but the basic principles are similar. (Note: the previous BITMAP index has been replaced by the more powerful inverted index.)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Skip Indexes:")," Commonly used to accelerate analysis, the principle is to determine data blocks that do not satisfy the WHERE conditions through the index and skip these blocks, only reading the data blocks that may satisfy the conditions and then performing a row-by-row filter to finally get the rows that meet the conditions. Skip indexes are more effective when the number of rows meeting the conditions is large. Doris's skip indexes include ZoneMap indexes, BloomFilter indexes, and NGram BloomFilter indexes.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ZoneMap Index:")," Automatically maintains statistics for each column, recording the maximum, minimum, and whether there are NULL values for each data file (Segment) and data block (Page). For equality queries, range queries, and IS NULL, it can determine whether the data file and data block can contain the data that meets the conditions based on the maximum value, minimum value, and whether there are NULL values. If not, Doris skips reading the corresponding file or data block, reducing IO and accelerating queries."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"BloomFilter Index:")," Stores values of the indexed column in a BloomFilter data structure, which can quickly determine whether a value is in the BloomFilter with very low storage space. For equality queries, if the value is not in the BloomFilter, the corresponding data file or data block can be skipped, reducing IO and accelerating queries."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"NGram BloomFilter Index:")," Used to accelerate text LIKE queries. The principle is similar to the BloomFilter index, but instead of storing the original text values, it performs NGram tokenization of the text and stores each token in the BloomFilter. For LIKE queries, the LIKE pattern is also tokenized using NGram. If any token is not in the BloomFilter, the corresponding data file or data block does not meet the LIKE condition and can be skipped.")))),(0,r.yg)("p",null,"Among the above indexes, the prefix index and ZoneMap index are built-in indexes automatically maintained by Doris, requiring no user management. Inverted indexes, BloomFilter indexes, and NGram BloomFilter indexes need to be manually created and managed by the user based on the scenario."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Comparison of characteristics of different types of indexes")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Index"),(0,r.yg)("th",{parentName:"tr",align:null},"Advantages"),(0,r.yg)("th",{parentName:"tr",align:null},"Limitations"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Point Query"),(0,r.yg)("td",{parentName:"tr",align:null},"Prefix Index"),(0,r.yg)("td",{parentName:"tr",align:null},"Built-in index, best performance"),(0,r.yg)("td",{parentName:"tr",align:null},"Only one prefix index per table"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Point Query"),(0,r.yg)("td",{parentName:"tr",align:null},"Inverted Index"),(0,r.yg)("td",{parentName:"tr",align:null},"Supports tokenization and keyword matching, building index on any column, multi-condition combination and accelerating more functions"),(0,r.yg)("td",{parentName:"tr",align:null},"Large index storage space, similar to raw data"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Skip"),(0,r.yg)("td",{parentName:"tr",align:null},"ZoneMap Index"),(0,r.yg)("td",{parentName:"tr",align:null},"Built-in index, small index storage space"),(0,r.yg)("td",{parentName:"tr",align:null},"Only one prefix index per table"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Skip"),(0,r.yg)("td",{parentName:"tr",align:null},"BloomFilter Index"),(0,r.yg)("td",{parentName:"tr",align:null},"More precise than ZoneMap, medium index space"),(0,r.yg)("td",{parentName:"tr",align:null},"Supports few query types, only supports equal, not others (not equal, range, LIKE, MATCH)"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Skip"),(0,r.yg)("td",{parentName:"tr",align:null},"NGram BloomFilter"),(0,r.yg)("td",{parentName:"tr",align:null},"Supports LIKE acceleration, medium index space"),(0,r.yg)("td",{parentName:"tr",align:null},"Supports few query types, only supports LIKE acceleration"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"List of operators and functions for index acceleration")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Operator or Function"),(0,r.yg)("th",{parentName:"tr",align:null},"Prefix Index"),(0,r.yg)("th",{parentName:"tr",align:null},"Inverted Index"),(0,r.yg)("th",{parentName:"tr",align:null},"ZoneMap Index"),(0,r.yg)("th",{parentName:"tr",align:null},"BloomFilter Index"),(0,r.yg)("th",{parentName:"tr",align:null},"NGram BloomFilter Index"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"="),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"!="),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IN"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NOT IN"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">, >=, <, <=, BETWEEN"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IS NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IS NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LIKE"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"YES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MATCH, MATCH_*"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array_contains"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array_overlaps"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_ip_address_in_range"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"YES"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO"),(0,r.yg)("td",{parentName:"tr",align:null},"NO")))),(0,r.yg)("h2",{id:"index-design-guidelines"},"Index Design Guidelines"),(0,r.yg)("p",null,'The design and optimization of database table indexes are closely related to data distribution and queries, requiring testing and optimization based on the actual scenario. Although there is no "silver bullet," Doris continuously strives to reduce the difficulty of using indexes. Users can follow these simple guidelines for index selection and testing.'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Specify the most frequently used filter condition as the KEY to automatically create a prefix index, as it has the best filtering effect. However, only one prefix index can be created per table, so it should be used for the most frequent filter condition."),(0,r.yg)("li",{parentName:"ol"},"For non-key fields that require filter acceleration, the first choice is to create an inverted index due to its broad applicability and multi-condition combination. The second choice includes the following two indexes:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If there is a need for string LIKE matching, add an NGram BloomFilter index."),(0,r.yg)("li",{parentName:"ul"},"If index storage space is critical, replace the inverted index with a BloomFilter index."))),(0,r.yg)("li",{parentName:"ol"},"If performance is not as expected, analyze the amount of data filtered by the index and the time consumed through QueryProfile. Refer to the detailed documentation of each index for specifics.")))}u.isMDXComponent=!0}}]);