"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[407911],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=s(n),m=a,f=y["".concat(u,".").concat(m)]||y[m]||p[m]||l;return n?t.createElement(f,o(o({ref:r},c),{},{components:n})):t.createElement(f,o({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},704514:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const l={title:"ARRAY_ENUMERATE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-enumerate",id:"sql-manual/sql-functions/array-functions/array-enumerate",title:"ARRAY_ENUMERATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-enumerate.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-enumerate",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-enumerate",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_ENUMERATE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_WITH_CONSTANT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-with-constant"},next:{title:"ARRAY_ENUMERATE_UNIQ",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-enumerate-uniq"}},u={},s=[{value:"array_enumerate",id:"array_enumerate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_enumerate"},"array_enumerate"),(0,a.yg)("p",null,"array_enumerate"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_enumerate(ARRAY<T> arr)")),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e0b\u6807, \u4f8b\u5982  ","[1, 2, 3, \u2026, length (arr) ]"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'mysql> create table array_type_table(k1 INT, k2 Array<STRING>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties(\'replication_num\' = \'1\');\nmysql> insert into array_type_table values (0, []), ("1", [NULL]), ("2", ["1", "2", "3"]), ("3", ["1", NULL, "3"]), ("4", NULL);\nmysql> select k2, array_enumerate(k2) from array_type_table;\n+------------------+-----------------------+\n| k2               | array_enumerate(`k2`) |\n+------------------+-----------------------+\n| []               | []                    |\n| [NULL]           | [1]                   |\n| [\'1\', \'2\', \'3\']  | [1, 2, 3]             |\n| [\'1\', NULL, \'3\'] | [1, 2, 3]             |\n| NULL             | NULL                  |\n+------------------+-----------------------+\n5 rows in set (0.01 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,ENUMERATE,ARRAY_ENUMERATE"))}p.isMDXComponent=!0}}]);