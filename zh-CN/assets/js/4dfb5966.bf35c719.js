"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93781],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>b});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return r?t.createElement(b,o(o({ref:n},c),{},{components:r})):t.createElement(b,o({ref:n},c))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},890193:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const l={title:"ROUND_BANKERS",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/numeric-functions/round-bankers",id:"sql-manual/sql-functions/numeric-functions/round-bankers",title:"ROUND_BANKERS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/round-bankers.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round-bankers",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round-bankers",draft:!1,tags:[],version:"current",frontMatter:{title:"ROUND_BANKERS",language:"zh-CN"},sidebar:"docs",previous:{title:"ROUND",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round"},next:{title:"XOR",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/xor"}},i={},s=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"round_bankers"},"round_bankers"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"T round_bankers(T x[, d])"),"\n\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u4f7f\u7528\u94f6\u884c\u5bb6\u820d\u5165\u6cd5\u540e\uff0c\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679c",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u4e3a0\u3002\u5982\u679c",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u6216",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,a.yg)("p",null,"\u5982\u679c d \u4e3a\u4e00\u4e2a\u5217\uff0c\u5e76\u4e14\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a Decimal \u7c7b\u578b\uff0c\u90a3\u4e48\u7ed3\u679c Decimal \u4f1a\u8ddf\u5165\u53c2 Decimal \u5177\u6709\u76f8\u540c\u7684\u5c0f\u6570\u90e8\u5206\u957f\u5ea6\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u820d\u5165\u6570\u4ecb\u4e8e\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\uff0c\u5219\u8be5\u51fd\u6570\u4f7f\u7528\u94f6\u884c\u5bb6\u7684\u820d\u5165"),(0,a.yg)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\nmysql> SELECT number\n    -> , round_bankers(number * 2.5, number - 1) AS rb_decimal_column\n    -> , round_bankers(number * 2.5, 0) AS rb_decimal_literal\n    -> , round_bankers(cast(number * 2.5 AS DOUBLE), number - 1) AS rb_double_column\n    -> , round_bankers(cast(number * 2.5 AS DOUBLE), 0) AS rb_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+-------------------+--------------------+------------------+-------------------+\n| number | rb_decimal_column | rb_decimal_literal | rb_double_column | rb_double_literal |\n+--------+-------------------+--------------------+------------------+-------------------+\n|      1 |               2.0 |                  2 |                2 |                 2 |\n+--------+-------------------+--------------------+------------------+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"round_bankers\n")))}m.isMDXComponent=!0}}]);