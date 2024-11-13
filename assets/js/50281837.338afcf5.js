"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[724983],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(r),c=n,d=g["".concat(u,".").concat(c)]||g[c]||p[c]||o;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[g]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},613260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(296540),r(15680));const o={title:"workload_group_resource_usage",language:"en"},l=void 0,i={unversionedId:"admin-manual/system-tables/information_schema/workload_group_resource_usage",id:"admin-manual/system-tables/information_schema/workload_group_resource_usage",title:"workload_group_resource_usage",description:"\x3c!--",source:"@site/docs/admin-manual/system-tables/information_schema/workload_group_resource_usage.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/workload_group_resource_usage",permalink:"/docs/dev/admin-manual/system-tables/information_schema/workload_group_resource_usage",draft:!1,tags:[],version:"current",frontMatter:{title:"workload_group_resource_usage",language:"en"},sidebar:"docs",previous:{title:"workload_group_privileges",permalink:"/docs/dev/admin-manual/system-tables/information_schema/workload_group_privileges"},next:{title:"workload_groups",permalink:"/docs/dev/admin-manual/system-tables/information_schema/workload_groups"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],m={toc:s},g="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Stores usage information for Workload Group resources."),(0,n.yg)("h2",{id:"database"},"Database"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,n.yg)("h2",{id:"table-information"},"Table Information"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BE_ID"),(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"The ID of the Backend")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WORKLOAD_GROUP_ID"),(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"The ID of the Workload Group")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MEMORY_USAGE_BYTES"),(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"Memory usage in bytes")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"CPU_USAGE_PERCENT"),(0,n.yg)("td",{parentName:"tr",align:null},"double"),(0,n.yg)("td",{parentName:"tr",align:null},"CPU usage percentage")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LOCAL_SCAN_BYTES_PER_SECOND"),(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"Local scan data rate in bytes per second")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"REMOTE_SCAN_BYTES_PER_SECOND"),(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"Remote scan data rate in bytes per second")))))}p.isMDXComponent=!0}}]);