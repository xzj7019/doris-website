"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[830735],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),g=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(n),y=r,d=p["".concat(m,".").concat(y)]||p[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},77288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(296540),n(15680));const l={title:"rowsets",language:"en"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/rowsets",id:"version-2.1/admin-manual/system-tables/information_schema/rowsets",title:"rowsets",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/system-tables/information_schema/rowsets.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/rowsets",permalink:"/docs/admin-manual/system-tables/information_schema/rowsets",draft:!1,tags:[],version:"2.1",frontMatter:{title:"rowsets",language:"en"},sidebar:"docs",previous:{title:"routines",permalink:"/docs/admin-manual/system-tables/information_schema/routines"},next:{title:"schema_privileges",permalink:"/docs/admin-manual/system-tables/information_schema/schema_privileges"}},m={},g=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],s={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Returns basic information about the Rowset."),(0,r.yg)("h2",{id:"database"},"Database"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"table-information"},"Table Information"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BACKEND_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The ID of the Backend, which is a unique identifier for the Backend.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROWSET_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"The ID of the Rowset, which is a unique identifier for the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLET_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The ID of the Tablet, which is a unique identifier for the Tablet.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROWSET_NUM_ROWS"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of data rows contained in the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TXN_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The transaction ID that wrote to the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUM_SEGMENTS"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of Segments contained in the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"START_VERSION"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The starting version number of the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"END_VERSION"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The ending version number of the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INDEX_DISK_SIZE"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The storage space for indexes within the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATA_DISK_SIZE"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The storage space for data within the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CREATION_TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"The creation time of the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NEWEST_WRITE_TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"The most recent write time of the Rowset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SCHEMA_VERSION"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"The Schema version number of the table corresponding to the Rowset data.")))))}u.isMDXComponent=!0}}]);