"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[546023],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},883509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(296540),r(15680));const o={title:"INT",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-data-types/numeric/INT",id:"sql-manual/sql-data-types/numeric/INT",title:"INT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-data-types/numeric/INT.md",sourceDirName:"sql-manual/sql-data-types/numeric",slug:"/sql-manual/sql-data-types/numeric/INT",permalink:"/docs/dev/sql-manual/sql-data-types/numeric/INT",draft:!1,tags:[],version:"current",frontMatter:{title:"INT",language:"en"},sidebar:"docs",previous:{title:"SMALLINT",permalink:"/docs/dev/sql-manual/sql-data-types/numeric/SMALLINT"},next:{title:"BIGINT",permalink:"/docs/dev/sql-manual/sql-data-types/numeric/BIGINT"}},c={},s=[{value:"INT",id:"int",level:2},{value:"Description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"int"},"INT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"INT\n4-byte signed integer, range ","[-2147483648, 2147483647]"),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"INT"))}d.isMDXComponent=!0}}]);