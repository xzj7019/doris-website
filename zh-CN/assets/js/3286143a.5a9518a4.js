"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[535149],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},274342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const l={title:"COALESCE",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/conditional-functions/coalesce",id:"version-2.0/sql-manual/sql-functions/conditional-functions/coalesce",title:"COALESCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/conditional-functions/coalesce.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/coalesce",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/conditional-functions/coalesce",draft:!1,tags:[],version:"2.0",frontMatter:{title:"COALESCE",language:"zh-CN"},sidebar:"docs",previous:{title:"CASE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/conditional-functions/case"},next:{title:"IF",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/conditional-functions/if"}},i={},s=[{value:"coalesce",id:"coalesce",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"coalesce"},"coalesce"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"coalesce(expr1, expr2, ...., expr_n))")),(0,o.yg)("p",null,"\u8fd4\u56de\u53c2\u6570\u4e2d\u7684\u7b2c\u4e00\u4e2a\u975e\u7a7a\u8868\u8fbe\u5f0f\uff08\u4ece\u5de6\u5411\u53f3\uff09"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select coalesce(NULL, '1111', '0000');\n+--------------------------------+\n| coalesce(NULL, '1111', '0000') |\n+--------------------------------+\n| 1111                           |\n+--------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"COALESCE\n")))}d.isMDXComponent=!0}}]);