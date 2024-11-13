"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[842949],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var i=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},154731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(58168),a=(t(296540),t(15680));const r={title:"Runtime Filter",language:"en"},o=void 0,l={unversionedId:"query-acceleration/tuning/runtime-filter",id:"query-acceleration/tuning/runtime-filter",title:"Runtime Filter",description:"\x3c!--",source:"@site/docs/query-acceleration/tuning/runtime-filter.md",sourceDirName:"query-acceleration/tuning",slug:"/query-acceleration/tuning/runtime-filter",permalink:"/docs/dev/query-acceleration/tuning/runtime-filter",draft:!1,tags:[],version:"current",frontMatter:{title:"Runtime Filter",language:"en"},sidebar:"docs",previous:{title:"Hint",permalink:"/docs/dev/query-acceleration/tuning/join-hint"},next:{title:"TOPN Query Optimization",permalink:"/docs/dev/query-acceleration/tuning/topn-query"}},s={},p=[{value:"Join Runtime Filter",id:"join-runtime-filter",level:2},{value:"Principles",id:"principles",level:3},{value:"Filter Types",id:"filter-types",level:3},{value:"Viewing Join Runtime Filter",id:"viewing-join-runtime-filter",level:3},{value:"Tuning",id:"tuning",level:3},{value:"TopN Runtime Filter",id:"topn-runtime-filter",level:2},{value:"Principles",id:"principles-1",level:3},{value:"Viewing TopN Runtime Filter",id:"viewing-topn-runtime-filter",level:3},{value:"Tuning",id:"tuning-1",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,i.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Runtime Filter mainly consists of two types: Join Runtime Filter and TopN Runtime Filter. This article will provide a detailed introduction to the working principles, usage guidelines, and tuning methods of these two types of Runtime Filters."),(0,a.yg)("h2",{id:"join-runtime-filter"},"Join Runtime Filter"),(0,a.yg)("p",null,"Join Runtime Filter (hereinafter referred to as JRF) is an optimization technique that dynamically generates filters at the Join node based on runtime data, leveraging the Join condition. This technique not only reduces the size of the Join Probe but also effectively minimizes data I/O and network transmission."),(0,a.yg)("h3",{id:"principles"},"Principles"),(0,a.yg)("p",null,"Let's illustrate the working principle of JRF using a Join operation similar to that found in the TPC-H Schema."),(0,a.yg)("p",null,"Assume there are two tables in the database:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Orders Table: Contains 100 million rows of data, recording order keys (",(0,a.yg)("inlineCode",{parentName:"p"},"o_orderkey"),"), customer keys (",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey"),"), and other order information.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Customer Table: Contains 100,000 rows of data, recording customer keys (",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey"),"), customer nations (",(0,a.yg)("inlineCode",{parentName:"p"},"c_nation"),"), and other customer information. This table records customers from 25 countries, with approximately 4,000 customers per country."))),(0,a.yg)("p",null,"To count the number of orders from customers in China, the query statement would be:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select count(*)\nfrom orders join customer on o_custkey = c_custkey\nwhere c_nation = "china"\n')),(0,a.yg)("p",null,"The main component of the execution plan for this query is a Join, as illustrated below:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Join Runtime Filter",src:t(333158).A,width:"1280",height:"901"})),(0,a.yg)("p",null,"Without JRF: The Scan node scans the orders table, reading 100 million rows of data. The Join node then performs a Hash Probe on these 100 million rows to generate the Join result."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Optimization")),(0,a.yg)("p",null,"The filter condition ",(0,a.yg)("inlineCode",{parentName:"p"},"c_nation = 'china'")," filters out all non-Chinese customers, so only a portion (approximately 1/25) of the customer table is involved in the Join. Given the subsequent Join condition ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey = c_custkey"),", we need to focus on the ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," values selected in the filtered result. Let's denote the filtered ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," values as set A. In the following text, we use set A specifically to refer to the ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," set participating in the Join."),(0,a.yg)("p",null,"If set A is pushed down to the orders table as an IN condition, the Scan node for the orders table can filter the orders accordingly. This is similar to adding a filter condition ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey IN (c001, c003)"),"."),(0,a.yg)("p",null,"Based on this optimization concept, SQL can be optimized to:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select count(*)\nfrom orders join customer on o_custkey = c_custkey\nwhere c_nation = "china" and o_custkey in (c001, c003)\n')),(0,a.yg)("p",null,"The optimized execution plan is illustrated below:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"join-runtime-filter-2",src:t(460913).A,width:"1280",height:"893"})),(0,a.yg)("p",null,"By adding a filter condition on the orders table, the actual number of orders participating in the Join is reduced from 100 million to 400,000, significantly improving query speed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Implementation")),(0,a.yg)("p",null,"While the optimization described above is significant, the optimizer does not know the actual ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," values selected (set A) and thus cannot statically generate a fixed in-predicate filter operator during the optimization phase."),(0,a.yg)("p",null,"In practical applications, we collect the right-side data at the Join node, generate set A at runtime, and push down set A to the Scan node of the orders table. We typically denote this JRF as: ",(0,a.yg)("inlineCode",{parentName:"p"},"RF(c_custkey -> [o_custkey])"),"."),(0,a.yg)("p",null,"As Doris is a distributed database, JRF requires an additional merging step to cater to distributed scenarios. Assuming the Join in the example is a Shuffle Join, multiple instances of this Join handle individual shards of the orders and customer tables. Consequently, each Join instance only obtains a portion of set A."),(0,a.yg)("p",null,"In the current version of Doris, we select a node to serve as the Runtime Filter Manager. Each Join instance generates a Partial JRF based on the ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," values in its shard and sends it to the Manager. The Manager collects all Partial JRFs, merges them into a Global JRF, and then sends the Global JRF to all Scan instances of the orders table."),(0,a.yg)("p",null,"The process of generating the Global JRF is illustrated below:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Global JRF",src:t(786404).A,width:"1280",height:"836"})),(0,a.yg)("h3",{id:"filter-types"},"Filter Types"),(0,a.yg)("p",null,"There are various data structures that can be employed to implement JRF (Join Runtime Filter), each with varying efficiencies in generation, merging, transmission, and application, making them suitable for different scenarios."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. In Filter")),(0,a.yg)("p",null,"The simplest approach to implementing JRF is through the use of an In Filter. Taking the previous example, when using an In Filter, the execution engine generates a predicate ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey in (...list of elements in Set A...)")," on the left table. This In filter condition can then be applied to filter the orders table. When the number of elements in Set A is small, the In Filter is efficient."),(0,a.yg)("p",null,"However, using an In Filter becomes problematic when the number of elements in Set A is large:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Firstly, the cost of generating an In Filter is high, especially when JRF merging is required. Values collected from Join nodes corresponding to different data partitions may contain duplicates. For instance, if ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," is not the primary key of the table, values like ",(0,a.yg)("inlineCode",{parentName:"p"},"c001")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"c003")," could appear multiple times, necessitating a time-consuming deduplication process.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Secondly, when Set A contains many elements, the cost of transmitting data between the Join node and the Scan node of the orders table is significant.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Lastly, executing the In predicate at the Scan node of the orders table also takes time."))),(0,a.yg)("p",null,"Considering these factors, we introduce the Bloom Filter."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Bloom Filter")),(0,a.yg)("p",null,"For those unfamiliar with Bloom Filters, they can be thought of as a set of superimposed hash tables. Using a Bloom Filter (or hash table) for filtering leverages the following property:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A hash table T is generated based on Set A. If an element is not in hash table T, it can be definitively concluded that the element is not in Set A. However, the reverse is not true."),(0,a.yg)("p",{parentName:"li"},"Therefore, if an ",(0,a.yg)("inlineCode",{parentName:"p"},"o_orderkey")," is filtered out by the Bloom Filter, it can be concluded that there is no matching ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," on the right side of the Join. Nevertheless, due to hash collisions, some ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey"),"s may pass through the Bloom Filter even if there is no matching ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey"),"."),(0,a.yg)("p",{parentName:"li"},"While a Bloom Filter cannot achieve precise filtering, it still provides a certain level of filtering effectiveness.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The number of buckets in the hash table determines the accuracy of filtering. The larger the number of buckets, the larger and more accurate the Filter becomes, but at the cost of increased computational overhead in generation, transmission, and usage."),(0,a.yg)("p",{parentName:"li"},"Therefore, the size of the Bloom Filter must strike a balance between filtering effectiveness and usage costs. To this end, we have set a configurable range for the Bloom Filter's size, defined by ",(0,a.yg)("inlineCode",{parentName:"p"},"RUNTIME_BLOOM_FILTER_MIN_SIZE")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"RUNTIME_BLOOM_FILTER_MAX_SIZE"),"."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Min/Max Filter")),(0,a.yg)("p",null,"Apart from the Bloom Filter, the Min-Max Filter can also be used for approximate filtering. If the data column is ordered, the Min-Max Filter can achieve excellent filtering results. Additionally, the costs of generating, merging, and using a Min-Max Filter are significantly lower than those of an In Filter or Bloom Filter."),(0,a.yg)("p",null,"For non-equi Joins, both In Filters and Bloom Filters become ineffective, but the Min-Max Filter can still function. Suppose we modify the query from the previous example to:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select count(*)\nfrom orders join customer on o_custkey > c_custkey\nwhere c_name = "China"\n')),(0,a.yg)("p",null,"In this case, we can select the maximum filtered ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey"),", denote it as n, and pass it to the Scan node of the orders table. The Scan node will then only output rows where ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey > n"),"."),(0,a.yg)("h3",{id:"viewing-join-runtime-filter"},"Viewing Join Runtime Filter"),(0,a.yg)("p",null,"To see which JRFs (Join Runtime Filters) have been generated for a specific query, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"explain"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"explain shape plan"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"explain physical plan")," commands."),(0,a.yg)("p",null,"Using the TPC-H Schema as an example, we will detail how to view JRFs using these three commands."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select count(*) from orders join customer on o_custkey=c_custkey;\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Explain")),(0,a.yg)("p",null,"In traditional Explain output, JRF information is typically displayed in Join and Scan nodes, as shown in the following example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"4: VHASH JOIN(258)  \n| join op: INNER JOIN(PARTITIONED)[]  \n|  equal join conjunct: (o_custkey[#10] = c_custkey[#0])  \n|  runtime filters: RF000[bloom] <- c_custkey[#0] (150000000/134217728/16777216)  \n|  cardinality=1,500,000,000  \n|  vec output tuple id: 3  \n|  output tuple id: 3  \n|  vIntermediate tuple ids: 2  \n|  hash output slot ids: 10  \n|  final projections: o_custkey[#17]  \n|  final project output tuple id: 3  \n|  distribute expr lists: o_custkey[#10]\n|  distribute expr lists: c_custkey[#0]  \n|  \n|---1: VEXCHANGE  \n|      offset: 0  \n|      distribute expr lists: c_custkey[#0]   \n3: VEXCHANGE  \n|  offset: 0  \n|  distribute expr lists:  \n  \nPLAN FRAGMENT 2  \n| PARTITION: HASH_PARTITIONED: o_orderkey[#8]  \n| HAS_COLO_PLAN_NODE: false  \n| STREAM DATA SINK  \n|   EXCHANGE ID: 03  \n|   HASH_PARTITIONED: o_custkey[#10]  \n  \n2: VOlapScanNode(242)  \n|  TABLE: regression_test_nereids_tpch_shape_sf1000_p0.orders(orders)  \n|  PREAGGREGATION: ON  \n|  runtime filters: RF000[bloom] -> o_custkey[#10]  \n|  partitions=1/1 (orders)  \n|  tablets=96/96, tabletList=54990,54992,54994 ...  \n|  cardinality=0, avgRowSize=0.0, numNodes=1  \n|  pushAggOp=NONE\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Join Side: ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime filters: RF000[bloom] <- c_custkey[#0] (150000000/134217728/16777216)")),(0,a.yg)("p",{parentName:"li"},"This indicates that a Bloom Filter with ID 000 has been generated, using ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," as input to create the JRF. The three numbers following are related to Bloom Filter size calculations and can be ignored for now.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Scan Side: ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime filters: RF000[bloom] -> o_custkey[#10]")),(0,a.yg)("p",{parentName:"li"},"This indicates that JRF 000 will be applied to the Scan node of the orders table, filtering the ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey")," field."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Explain Shape Plan")),(0,a.yg)("p",null,"In the Explain Plan series, we'll use Shape Plan as an example to show how to view JRFs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> explain shape plan select count(*) from orders join customer on o_custkey=c_custkey where c_nationkey=5;  \n+--------------------------------------------------------------------------------------------------------------------------+\nExplain String(Nereids Planner)                                                                                            \uff5c\n+--------------------------------------------------------------------------------------------------------------------------+\nPhysicalResultSink                                                                                                         \uff5c  \n--hashAgg[GLOBAL]                                                                                                          \uff5c  \n----PhysicalDistribute[DistributionSpecGather]                                                                             \uff5c   \n------hashAgg[LOCAL]                                                                                                       \uff5c \n--------PhysicalProject                                                                                                    \uff5c\n----------hashJoin[INNER_JOIN shuffle]                                                                                     \uff5c\n------------hashCondition=((orders.o_custkey=customer.c_custkey)) otherCondition=() buildRFs:RF0 c_custkey->[o_custkey]    \uff5c  \n--------------PhysicalProject                                                                                              \uff5c  \n----------------Physical0lapScan[orders] apply RFs: RF0                                                                    \uff5c\n--------------PhysicalProject                                                                                              \uff5c \n----------------filter((customer.c_nationkey=5))                                                                           \uff5c \n------------------Physical0lapScan[customer]                                                                               \uff5c\n+--------------------------------------------------------------------------------------------------------------------------+\n11 rows in set (0.02 sec)\n")),(0,a.yg)("p",null,"As shown above:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Join Side: ",(0,a.yg)("inlineCode",{parentName:"p"},"build RFs: RF0 c_custkey -> [o_custkey]")," indicates that JRF 0 is generated using ",(0,a.yg)("inlineCode",{parentName:"p"},"c_custkey")," data and applied to ",(0,a.yg)("inlineCode",{parentName:"p"},"o_custkey"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Scan Side: ",(0,a.yg)("inlineCode",{parentName:"p"},"PhysicalOlapScan[orders] apply RFs: RF0")," indicates that orders table is filtered by JRF 0."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Profile")),(0,a.yg)("p",null,"During actual execution, BE outputs JRF usage details to the Profile (requires ",(0,a.yg)("inlineCode",{parentName:"p"},"set enable_profile=true"),"). Using the same SQL query as an example, we can view JRF execution details in the Profile."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Join Side"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"HASH_JOIN_SINK_OPERATOR  (id=3  ,  nereids_id=367):(ExecTime:  703.905us)\n      -  JoinType:  INNER_JOIN\n      \u3002\u3002\u3002\n      -  BuildRows:  617\n      \u3002\u3002\u3002\n      -  RuntimeFilterComputeTime:  70.741us\n      -  RuntimeFilterInitTime:  10.882us\n")),(0,a.yg)("p",{parentName:"li"},"This is the Build side Profile for the Join. In this example, generating the JRF took 70.741us with 617 rows of input data. The JRF size and type are shown on the Scan side.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Scan Side"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"OLAP_SCAN_OPERATOR  (id=2.  nereids_id=351.  table  name  =  orders(orders)):(ExecTime:  13.32ms)\n            -  RuntimeFilters:  :  RuntimeFilter:  (id  =  0,  type  =  bloomfilter,  need_local_merge:  false,  is_broadcast:  true,  build_bf_cardinality:  false,  \n            \u3002\u3002\u3002\n            -  RuntimeFilterInfo:  \n                -  filter  id  =  0  filtered:  714.761K  (714761)\n                -  filter  id  =  0  input:  747.862K  (747862)\n            \u3002\u3002\u3002\n            -  WaitForRuntimeFilter:  6.317ms\n          RuntimeFilter:  (id  =  0,  type  =  bloomfilter):\n                -  Info:  [IsPushDown  =  true,  RuntimeFilterState  =  READY,  HasRemoteTarget  =  false,  HasLocalTarget  =  true,  Ignored  =  false]\n                -  RealRuntimeFilterType:  bloomfilter\n                -  BloomFilterSize:  1024\n")),(0,a.yg)("p",{parentName:"li"},"Note:"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Lines 5-6 show the input rows and the number of filtered rows. A higher number of filtered rows indicates better JRF effectiveness.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Line 10, ",(0,a.yg)("inlineCode",{parentName:"p"},"IsPushDown = true"),", indicates that JRF computation has been pushed down to the storage layer, which can help reduce IO through delayed materialization.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Line 10, ",(0,a.yg)("inlineCode",{parentName:"p"},"RuntimeFilterState = READY"),", indicates whether the Scan node has applied the JRF. Since JRF uses a try-best mechanism, if JRF generation takes too long, the Scan node may start scanning data after a waiting period, potentially outputting unfiltered data.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Line 12, ",(0,a.yg)("inlineCode",{parentName:"p"},"BloomFilterSize: 1024"),", shows the size of the Bloom Filter in bytes."))))),(0,a.yg)("h3",{id:"tuning"},"Tuning"),(0,a.yg)("p",null,"For Join Runtime Filter tuning, in most cases, the function is adaptive, and users do not need to manually tune it. However, there are a few adjustments that can be made to optimize performance."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Enable or Disable JRF")),(0,a.yg)("p",null,"The session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime_filter_mode")," controls whether JRFs are generated."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To enable JRF: ",(0,a.yg)("inlineCode",{parentName:"p"},"set runtime_filter_mode = GLOBAL"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To disable JRF: ",(0,a.yg)("inlineCode",{parentName:"p"},"set runtime_filter_mode = OFF")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Set JRF Type")),(0,a.yg)("p",null,"The session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime_filter_type")," controls the type of JRFs, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"IN(1)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"BLOOM(2)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"MIN_MAX(4)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"IN_OR_BLOOM(8)")))),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"IN_OR_BLOOM")," Filter allows BE to adaptively choose between generating an ",(0,a.yg)("inlineCode",{parentName:"p"},"IN")," Filter or a ",(0,a.yg)("inlineCode",{parentName:"p"},"BLOOM")," Filter based on the actual number of rows of data."),(0,a.yg)("p",null,"Multiple JRF types can be generated for a single Join condition by setting ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime_filter_type")," to the sum of the corresponding enumeration values. "),(0,a.yg)("p",null,"For example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To generate both a ",(0,a.yg)("inlineCode",{parentName:"p"},"BLOOM")," Filter and a ",(0,a.yg)("inlineCode",{parentName:"p"},"MIN_MAX")," Filter for each Join condition: ",(0,a.yg)("inlineCode",{parentName:"p"},"set runtime_filter_type = 6"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"In version 2.1, the default value of ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime_filter_type")," is 12, which generates both a ",(0,a.yg)("inlineCode",{parentName:"p"},"MIN_MAX")," Filter and an ",(0,a.yg)("inlineCode",{parentName:"p"},"IN_OR_BLOOM")," Filter."))),(0,a.yg)("p",null,"The integers in parentheses represent the enumeration values for Runtime Filter Types."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Set Wait Time")),(0,a.yg)("p",null,"As mentioned earlier, JRF uses a Try-best mechanism, where Scan nodes wait for JRFs before starting. Doris calculates the wait time based on runtime conditions. However, in some cases, the calculated wait time may not be sufficient, resulting in JRFs not being fully effective, and the Scan nodes may output more rows than expected. As discussed in the Profile section, if ",(0,a.yg)("inlineCode",{parentName:"p"},"RuntimeFilterState = false")," in the Scan node's Profile, users can manually set a longer wait time."),(0,a.yg)("p",null,"The session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime_filter_wait_time_ms")," controls the wait time for Scan nodes to wait for JRFs. The default value is 1000 milliseconds."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"4. Pruning JRF")),(0,a.yg)("p",null,"In some cases, JRFs may not provide filtering benefits. For example, if the ",(0,a.yg)("inlineCode",{parentName:"p"},"orders")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"customer")," tables have a primary-foreign key relationship, but there are no filtering conditions on the ",(0,a.yg)("inlineCode",{parentName:"p"},"customer")," table, the input to the JRF would be all ",(0,a.yg)("inlineCode",{parentName:"p"},"custkeys"),", allowing all rows in the ",(0,a.yg)("inlineCode",{parentName:"p"},"orders")," table to pass through the JRF. The optimizer prunes ineffective JRFs based on column statistics."),(0,a.yg)("p",null,"The session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_runtime_filter_prune = true/false")," controls whether pruning is performed. The default value is ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("h2",{id:"topn-runtime-filter"},"TopN Runtime Filter"),(0,a.yg)("h3",{id:"principles-1"},"Principles"),(0,a.yg)("p",null,"In Doris, data is processed in a block-streaming manner. Therefore, when an SQL statement includes a ",(0,a.yg)("inlineCode",{parentName:"p"},"topN")," operator, Doris does not compute all results but instead generates a dynamic filter to pre-filter the data early on."),(0,a.yg)("p",null,"Consider the following SQL statement as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select o_orderkey from orders order by o_orderdate limit 5;\n")),(0,a.yg)("p",null,"The execution plan for this SQL statement is illustrated below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> explain select o_orderkey from orders order by o_orderdate limit 5;\n+-----------------------------------------------------+\n| Explain String(Nereids Planner)                     |\n+-----------------------------------------------------+\n| PLAN FRAGMENT 0                                     |\n|   OUTPUT EXPRS:                                     |\n|     o_orderkey[#11]                                 |\n|   PARTITION: UNPARTITIONED                          |\n|                                                     |\n|   HAS_COLO_PLAN_NODE: false                         |\n|                                                     |\n|   VRESULT SINK                                      |\n|      MYSQL_PROTOCAL                                 |\n|                                                     |\n|   2:VMERGING-EXCHANGE                               |\n|      offset: 0                                      |\n|      limit: 5                                       |\n|      final projections: o_orderkey[#9]              |\n|      final project output tuple id: 2               |\n|      distribute expr lists:                         |\n|                                                     |\n| PLAN FRAGMENT 1                                     |\n|                                                     |\n|   PARTITION: HASH_PARTITIONED: O_ORDERKEY[#0]       |\n|                                                     |\n|   HAS_COLO_PLAN_NODE: false                         |\n|                                                     |\n|   STREAM DATA SINK                                  |\n|     EXCHANGE ID: 02                                 |\n|     UNPARTITIONED                                   |\n|                                                     |\n|   1:VTOP-N(119)                                     |\n|   |  order by: o_orderdate[#10] ASC                 |\n|   |  TOPN OPT                                       |\n|   |  offset: 0                                      |\n|   |  limit: 5                                       |\n|   |  distribute expr lists: O_ORDERKEY[#0]          |\n|   |                                                 |\n|   0:VOlapScanNode(113)                              |\n|      TABLE: tpch.orders(orders), PREAGGREGATION: ON |\n|      TOPN OPT:1                                     |\n|      partitions=1/1 (orders)                        |\n|      tablets=3/3, tabletList=135112,135114,135116   |\n|      cardinality=150000, avgRowSize=0.0, numNodes=1 |\n|      pushAggOp=NONE                                 |\n+-----------------------------------------------------+\n41 rows in set (0.06 sec)\n")),(0,a.yg)("p",null,"Without a ",(0,a.yg)("inlineCode",{parentName:"p"},"topn filter"),", the scan node would sequentially read each data block from the ",(0,a.yg)("inlineCode",{parentName:"p"},"orders")," table and pass them to the TopN node. The TopN node maintains the current top 5 rows from the ",(0,a.yg)("inlineCode",{parentName:"p"},"orders")," table through heap sorting."),(0,a.yg)("p",null,"Since a data block typically contains around 1024 rows, the TopN node can identify the 5th ranked row within the first data block after processing it."),(0,a.yg)("p",null,"Assuming this ",(0,a.yg)("inlineCode",{parentName:"p"},"o_orderdate")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"1995-01-01"),", the scan node can then use ",(0,a.yg)("inlineCode",{parentName:"p"},"1995-01-01")," as a filter condition when outputting the second data block, eliminating the need to send rows with ",(0,a.yg)("inlineCode",{parentName:"p"},"o_orderdate")," greater than ",(0,a.yg)("inlineCode",{parentName:"p"},"1995-01-01")," to the TopN node for further processing."),(0,a.yg)("p",null,"This threshold is dynamically updated. For instance, if the TopN node discovers a smaller ",(0,a.yg)("inlineCode",{parentName:"p"},"o_orderdate")," when processing the second filtered data block, it updates the threshold to the fifth-ranked ",(0,a.yg)("inlineCode",{parentName:"p"},"o_orderdate")," among the first two data blocks."),(0,a.yg)("h3",{id:"viewing-topn-runtime-filter"},"Viewing TopN Runtime Filter"),(0,a.yg)("p",null,"Using the Explain command, we can inspect the TopN Runtime Filter planned by the optimizer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"1:VTOP-N(119)\n| order by: o_orderdate[#10] ASC  \n| TOPN OPT  \n| offset: 0\n| limit: 5  \n| distribute expr lists: O_ORDERKEY[#0]  \n|\n \n0:VLapScanNode[113]  \n    TABLE: regression_test_nereids_tpch_p0.(orders), PREAGGREGATION: ON  \n    TOPN OPT: 1  \n    partitions=1/1 (orders)  \n    tablets=3/3, tabletList=135112,135114,135116  \n    cardinality=150000, avgRowSize=0.0, numNodes=1  \n    pushAggOp: NONE\n")),(0,a.yg)("p",null,"As shown in the example above:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The TopN node displays ",(0,a.yg)("inlineCode",{parentName:"p"},"TOPN OPT"),", indicating that this TopN node generates a TopN Runtime Filter.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The Scan node indicates which TopN node generates the TopN Runtime Filter it uses. For instance, in the example, line 11 indicates that the Scan node for the ",(0,a.yg)("inlineCode",{parentName:"p"},"orders")," table will use the Runtime Filter generated by TopN node 1, shown as ",(0,a.yg)("inlineCode",{parentName:"p"},"TOPN OPT: 1")," in the plan."))),(0,a.yg)("p",null,"As a distributed database, Doris considers the physical machines where TopN and Scan nodes actually run. Due to the high cost of cross-BE communication, BEs adaptively decide whether and to what extent to use TopN Runtime Filters. Currently, we have implemented BE-level TopN Runtime Filters, where TopN and Scan reside on the same BE. This is because updating TopN Runtime Filter thresholds only requires inter-thread communication, which is relatively inexpensive."),(0,a.yg)("h3",{id:"tuning-1"},"Tuning"),(0,a.yg)("p",null,"The session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"topn_opt_limit_threshold")," controls whether to generate a TopN Runtime Filter."),(0,a.yg)("p",null,"The fewer rows specified in the SQL's ",(0,a.yg)("inlineCode",{parentName:"p"},"limit")," clause, the stronger the filtering effect of the TopN Runtime Filter. Therefore, by default, Doris enables the generation of corresponding TopN Runtime Filters only when the ",(0,a.yg)("inlineCode",{parentName:"p"},"limit")," number is less than 1024."),(0,a.yg)("p",null,"For example, setting ",(0,a.yg)("inlineCode",{parentName:"p"},"set topn_opt_limit_threshold=10")," would prevent the generation of a TopN Runtime Filter for the following query:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select o_orderkey from orders order by o_orderdate limit 20;\n")))}c.isMDXComponent=!0},786404:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/global-JRF-f4ce94b2113981f437259b92d75a8b69.jpg"},333158:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/join-runtime-filter-1-67d6c6e148fa738cfef92960af57ee9d.jpg"},460913:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/join-runtime-filter-2-5a91a3c43d68ad12e9cc1c5814c72fc0.jpg"}}]);