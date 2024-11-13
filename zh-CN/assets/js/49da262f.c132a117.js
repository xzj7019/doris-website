"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[268023],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>O});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,O=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(O,o(o({ref:n},p),{},{components:t})):r.createElement(O,o({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},784054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"SHOW-LOAD-WARNINGS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",title:"SHOW-LOAD-WARNINGS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-LOAD-WARNINGS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-LOAD-PROFILE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"},next:{title:"SHOW-INDEX",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-INDEX"}},s={},c=[{value:"SHOW-LOAD-WARNINGS",id:"show-load-warnings",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-load-warnings"},"SHOW-LOAD-WARNINGS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW LOAD WARNINGS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5982\u679c\u5bfc\u5165\u4efb\u52a1\u5931\u8d25\u4e14\u9519\u8bef\u4fe1\u606f\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"ETL_QUALITY_UNSATISFIED"),"\uff0c\u5219\u8bf4\u660e\u5b58\u5728\u5bfc\u5165\u8d28\u91cf\u95ee\u9898, \u5982\u679c\u60f3\u770b\u5230\u8fd9\u4e9b\u6709\u8d28\u91cf\u95ee\u9898\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u8be5\u8bed\u53e5\u5c31\u662f\u5b8c\u6210\u8fd9\u4e2a\u64cd\u4f5c\u7684\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS\n[FROM db_name]\n[\n   WHERE\n   [LABEL [ = "your_label" ]]\n   [LOAD_JOB_ID = ["job id"]]\n]\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 LABEL = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 label"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 LOAD_JOB_ID\uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 JOB ID")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\u4e2d\u5b58\u5728\u8d28\u91cf\u95ee\u9898\u7684\u6570\u636e\uff0c\u6307\u5b9a label \u4e3a "load_demo_20210112" '),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112" \n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, LOAD, WARNINGS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);