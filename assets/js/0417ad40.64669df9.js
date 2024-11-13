"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[419876],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,y=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},846613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const i={title:"CREATE-FUNCTION",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",title:"CREATE-FUNCTION",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-FUNCTION",language:"en"},sidebar:"docs",previous:{title:"CREATE-MATERIALIZED-VIEW",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"},next:{title:"CREATE-FILE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"}},s={},p=[{value:"CREATE-FUNCTION",id:"create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-function"},"CREATE-FUNCTION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE FUNCTION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement creates a custom function. Executing this command requires the user to have ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"function_name")," contains the database name, then the custom function will be created in the corresponding database, otherwise the function will be created in the database where the current session is located. The name and parameters of the new function cannot be the same as the existing functions in the current namespace, otherwise the creation will fail. But only with the same name and different parameters can be created successfully."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE [GLOBAL] [AGGREGATE] [ALIAS] FUNCTION function_name\n    (arg_type [, ...])\n    [RETURNS ret_type]\n    [INTERMEDIATE inter_type]\n    [WITH PARAMETER(param [,...]) AS origin_function]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')),(0,r.yg)("p",null,"Parameter Description:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"GLOBAL"),": If there is this item, it means that the created function is a global function.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"AGGREGATE"),": If there is this item, it means that the created function is an aggregate function."))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ALIAS"),": If there is this item, it means that the created function is an alias function.")),(0,r.yg)("p",null," If the above two items are absent, it means that the created function is a scalar function"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"function_name"),": The name of the function to be created, which can include the name of the database. For example: ",(0,r.yg)("inlineCode",{parentName:"li"},"db1.my_func"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"arg_type"),": The parameter type of the function, which is the same as the type defined when creating the table. Variable-length parameters can be represented by ",(0,r.yg)("inlineCode",{parentName:"p"},", ..."),". If it is a variable-length type, the type of the variable-length parameter is the same as that of the last non-variable-length parameter."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"ALIAS FUNCTION")," does not support variable-length arguments and must have at least one argument.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ret_type"),": Required for creating new functions. If you are aliasing an existing function, you do not need to fill in this parameter."))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"inter_type"),": The data type used to represent the intermediate stage of the aggregation function.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"param"),": used to represent the parameter of the alias function, including at least one.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"origin_function"),": used to represent the original function corresponding to the alias function.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"properties"),": Used to set function-related properties, the properties that can be set include:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file"),": Indicates the jar package containing the user UDF. In a multi-machine environment, you can also use http to download the jar package. This parameter is mandatory.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"symbol"),": Indicates the name of the class containing the UDF class. This parameter must be set")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"type"),": Indicates the UDF call type, the default is Native, and JAVA_UDF is passed when using Java UDF.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"always_nullable"),": Indicates whether NULL values may appear in the UDF return result, is an optional parameter, and the default value is true."))))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a custom UDF function"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a custom UDAF function"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION simple_sum(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a custom alias function"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a global custom alias function"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE GLOBAL ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, FUNCTION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);