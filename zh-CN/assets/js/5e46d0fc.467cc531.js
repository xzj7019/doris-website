"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[587422],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>d});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),s=m(r),c=n,d=s["".concat(o,".").concat(c)]||s[c]||g[c]||l;return r?a.createElement(d,i(i({ref:t},y),{},{components:r})):a.createElement(d,i({ref:t},y))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},390709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(58168),n=(r(296540),r(15680));const l={title:"procs_priv",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/system-tables/mysql/props_priv",id:"admin-manual/system-tables/mysql/props_priv",title:"procs_priv",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/mysql/props_priv.md",sourceDirName:"admin-manual/system-tables/mysql",slug:"/admin-manual/system-tables/mysql/props_priv",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/mysql/props_priv",draft:!1,tags:[],version:"current",frontMatter:{title:"procs_priv",language:"zh-CN"},sidebar:"docs",previous:{title:"workload_policy",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/workload_policy"},next:{title:"user",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/mysql/user"}},o={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],y={toc:m},s="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(s,(0,a.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"\u6b64\u8868\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL \u884c\u4e3a\u3002\u6c38\u8fdc\u4e3a\u7a7a\u3002"),(0,n.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"mysql")),(0,n.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"host"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(60)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"db"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"user"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(32)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"routine_name"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"routine_type"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(9)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"grantor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(93)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"proc_priv"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(16)"),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"timestamp"),(0,n.yg)("td",{parentName:"tr",align:"left"},"char(1)"),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}g.isMDXComponent=!0}}]);