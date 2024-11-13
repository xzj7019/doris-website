"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70877],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(u,".").concat(m)]||c[m]||g[m]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},526283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"Common Tuning Parameters",language:"en"},l=void 0,o={unversionedId:"query-acceleration/tuning/faq",id:"version-3.0/query-acceleration/tuning/faq",title:"Common Tuning Parameters",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query-acceleration/tuning/faq.md",sourceDirName:"query-acceleration/tuning",slug:"/query-acceleration/tuning/faq",permalink:"/docs/3.0/query-acceleration/tuning/faq",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Common Tuning Parameters",language:"en"},sidebar:"docs",previous:{title:"DML Tuning Plan",permalink:"/docs/3.0/query-acceleration/tuning/tuning-plan/dml-tuning-plan"},next:{title:"Hint",permalink:"/docs/3.0/query-acceleration/tuning/join-hint"}},u={},s=[],p={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,a.yg)("th",{parentName:"tr",align:null},"Usage Scenario"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enable_nereids_planner"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to enable the new optimizer"),(0,a.yg)("td",{parentName:"tr",align:null},"TRUE"),(0,a.yg)("td",{parentName:"tr",align:null},"For scenarios such as low-version upgrades, initially set to false; after upgrading, it can be set to true")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enable_nereids_dml"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to enable DML support for the new optimizer"),(0,a.yg)("td",{parentName:"tr",align:null},"TRUE"),(0,a.yg)("td",{parentName:"tr",align:null},"For scenarios such as low-version upgrades, initially set to false; after upgrading, it can be set to true")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallel_pipeline_task_num"),(0,a.yg)("td",{parentName:"tr",align:null},"Pipeline parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},"0"),(0,a.yg)("td",{parentName:"tr",align:null},"For scenarios such as low-version upgrades, this value was previously set to a fixed value; after upgrading, it can be set to 0, indicating that the system's adaptive strategy determines the parallelism")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"runtime_filter_mode"),(0,a.yg)("td",{parentName:"tr",align:null},"Runtime Filter type"),(0,a.yg)("td",{parentName:"tr",align:null},"GLOBAL"),(0,a.yg)("td",{parentName:"tr",align:null},"For scenarios such as low-version upgrades, this value was NONE, indicating that Runtime Filter was not enabled; after upgrading, it can be set to GLOBAL, indicating that Runtime Filter is enabled by default")))))}g.isMDXComponent=!0}}]);