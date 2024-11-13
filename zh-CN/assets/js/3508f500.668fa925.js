"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[205340],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=p(a),c=r,d=y["".concat(m,".").concat(c)]||y[c]||s[c]||l;return a?n.createElement(d,i(i({ref:t},g),{},{components:a})):n.createElement(d,i({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},329602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"table_options",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/table_options",id:"admin-manual/system-tables/information_schema/table_options",title:"table_options",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/information_schema/table_options.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/table_options",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/table_options",draft:!1,tags:[],version:"current",frontMatter:{title:"table_options",language:"zh-CN"},sidebar:"docs",previous:{title:"table_constraints",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/table_constraints"},next:{title:"table_privileges",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/table_privileges"}},m={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],g={toc:p},y="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u6b64\u8868\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL \u884c\u4e3a\u3002\u6c38\u8fdc\u4e3a\u7a7a\u3002"),(0,r.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TABLE_CATALOG"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TABLE_SCHEMA"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TABLE_NAME"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TABLE_MODEL"),(0,r.yg)("td",{parentName:"tr",align:"left"},"text"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TABLE_MODEL_KEY"),(0,r.yg)("td",{parentName:"tr",align:"left"},"text"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DISTRIBUTE_KEY"),(0,r.yg)("td",{parentName:"tr",align:"left"},"text"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DISTRIBUTE_TYPE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"text"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"BUCKETS_NUM"),(0,r.yg)("td",{parentName:"tr",align:"left"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"PARTITION_NUM"),(0,r.yg)("td",{parentName:"tr",align:"left"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);