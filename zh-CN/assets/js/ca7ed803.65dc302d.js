"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[979160],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),y=r,g=p["".concat(i,".").concat(y)]||p[y]||u[y]||l;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<l;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},387403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(58168),r=(a(296540),a(15680));const l={title:"USE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Utility-Statements/USE",id:"version-3.0/sql-manual/sql-statements/Utility-Statements/USE",title:"USE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Utility-Statements/USE.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/USE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Utility-Statements/USE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"USE",language:"zh-CN"},sidebar:"docs",previous:{title:"HELP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Utility-Statements/HELP"},next:{title:"DESCRIBE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Utility-Statements/DESCRIBE"}},i={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Relate Commands",id:"relate-commands",level:2},{value:"Keywords",id:"keywords",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"USE \u547d\u4ee4\u5141\u8bb8\u6211\u4eec\u5728 SQL \u73af\u5883\u4e2d\u5207\u6362\u5230\u7279\u5b9a\u7684\u6570\u636e\u5e93\u6216\u8ba1\u7b97\u7ec4\u3002"),(0,r.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"USE <[CATALOG_NAME].DATABASE_NAME>\n")),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5b58\u5728\uff0c\u5c1d\u8bd5\u4f7f\u7528\u5b83\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use demo;\nDatabase changed\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5728hms_catalog\u7684Catalog\u4e0b\u5b58\u5728\uff0c\u5c1d\u8bd5\u5207\u6362\u5230hms_catalog, \u5e76\u4f7f\u7528\u5b83\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use hms_catalog.demo;\nDatabase changed\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5728\u5f53\u524d\u76ee\u5f55\u4e2d\u5b58\u5728\uff0c\u5e76\u4e14\u60a8\u60f3\u4f7f\u7528\u540d\u4e3a 'cg1' \u7684\u8ba1\u7b97\u7ec4\uff0c\u8bf7\u5c1d\u8bd5\u8bbf\u95ee\u5b83\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use demo@cg1;\nDatabase changed\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u60a8\u53ea\u60f3\u4f7f\u7528\u540d\u4e3a 'cg1' \u7684\u8ba1\u7b97\u7ec4\uff0c\u8bf7\u5c1d\u8bd5\u8bbf\u95ee\u5b83\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use @cg1;\nDatabase changed\n")))),(0,r.yg)("h2",{id:"relate-commands"},"Relate Commands"),(0,r.yg)("h2",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"USE, DATABASE, USER, COMPUTE GROUP\n")))}u.isMDXComponent=!0}}]);