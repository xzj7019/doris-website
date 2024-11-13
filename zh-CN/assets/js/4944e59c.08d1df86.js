"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[534300],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},387110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(58168),l=(a(296540),a(15680));const r={title:"CANCEL-LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Load/CANCEL-LOAD",id:"version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CANCEL-LOAD",title:"CANCEL-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CANCEL-LOAD.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CANCEL-LOAD",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CANCEL-LOAD",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CANCEL-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"STOP-SYNC-JOB",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STOP-SYNC-JOB"},next:{title:"CLEAN-LABEL",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CLEAN-LABEL"}},s={},p=[{value:"CANCEL-LOAD",id:"cancel-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"cancel-load"},"CANCEL-LOAD"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"CANCEL LOAD"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u6307\u5b9a label \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u6216\u8005\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u6279\u91cf\u64a4\u9500\u5bfc\u5165\u4f5c\u4e1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\n[FROM db_name]\nWHERE [LABEL = "load_label" | LABEL like "label_pattern" | STATE = "PENDING/ETL/LOADING"]\n')),(0,l.yg)("p",null,"\u6ce8\uff1a1.2.0 \u7248\u672c\u4e4b\u540e\u652f\u6301\u6839\u636e State \u53d6\u6d88\u4f5c\u4e1a\u3002"),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example_db \u4e0a\uff0clabel \u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"example_db_test_load_label")," \u7684\u5bfc\u5165\u4f5c\u4e1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_db_test_load_label";\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example",(0,l.yg)("em",{parentName:"p"},"db \u4e0a\uff0c\u6240\u6709\u5305\u542b example")," \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE LABEL like "example_";\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u53d6\u6d88\u72b6\u6001\u4e3a LOADING \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD\nFROM example_db\nWHERE STATE = "loading";\n')))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"CANCEL, LOAD\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u53ea\u80fd\u53d6\u6d88\u5904\u4e8e PENDING\u3001ETL\u3001LOADING \u72b6\u6001\u7684\u672a\u5b8c\u6210\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5f53\u6267\u884c\u6279\u91cf\u64a4\u9500\u65f6\uff0cDoris \u4e0d\u4f1a\u4fdd\u8bc1\u6240\u6709\u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\u539f\u5b50\u7684\u64a4\u9500\u3002\u5373\u6709\u53ef\u80fd\u4ec5\u6709\u90e8\u5206\u5bfc\u5165\u4f5c\u4e1a\u64a4\u9500\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\uff0c\u5e76\u5c1d\u8bd5\u91cd\u590d\u6267\u884c CANCEL LOAD \u8bed\u53e5\u3002")))}u.isMDXComponent=!0}}]);