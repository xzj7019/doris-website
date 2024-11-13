"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[865383],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,d=p["".concat(m,".").concat(y)]||p[y]||g[y]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},342139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const l={title:"engines",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/engines",id:"version-2.1/admin-manual/system-tables/information_schema/engines",title:"engines",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/system-tables/information_schema/engines.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/engines",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/engines",draft:!1,tags:[],version:"2.1",frontMatter:{title:"engines",language:"zh-CN"},sidebar:"docs",previous:{title:"columns",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/columns"},next:{title:"events",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/events"}},m={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],c={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u6b64\u8868\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL \u884c\u4e3a\u3002\u6c38\u8fdc\u4e3a\u7a7a\u3002"),(0,r.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ENGINE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SUPPORT"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(8)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"COMMENT"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(80)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TRANSACTIONS"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(3)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"XA"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(3)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SAVEPOINTS"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(3)"),(0,r.yg)("td",{parentName:"tr",align:"left"})))))}g.isMDXComponent=!0}}]);