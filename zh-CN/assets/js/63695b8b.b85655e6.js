"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[312106],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),g=n,d=p["".concat(m,".").concat(g)]||p[g]||y[g]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},225274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(58168),n=(a(296540),a(15680));const l={title:"schemata",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/schemata",id:"version-3.0/admin-manual/system-tables/information_schema/schemata",title:"schemata",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/information_schema/schemata.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/schemata",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/schemata",draft:!1,tags:[],version:"3.0",frontMatter:{title:"schemata",language:"zh-CN"},sidebar:"docs",previous:{title:"schema_privileges",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/schema_privileges"},next:{title:"session_variables",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/session_variables"}},m={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],c={toc:s},p="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"\u67e5\u770b Database \u7684\u76f8\u5173\u4fe1\u606f"),(0,n.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,n.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CATALOG_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(512)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Catalog \u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"SCHEMA_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(32)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Database \u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DEFAULT_CHARACTER_SET_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(32)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u65e0\u5b9e\u9645\u4f5c\u7528\uff0c\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DEFAULT_COLLATION_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(32)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u65e0\u5b9e\u9645\u4f5c\u7528\uff0c\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"SQL_PATH"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(512)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u65e0\u5b9e\u9645\u4f5c\u7528\uff0c\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"DEFAULT_ENCRYPTION"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(3)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u65e0\u5b9e\u9645\u4f5c\u7528\uff0c\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL")))))}y.isMDXComponent=!0}}]);