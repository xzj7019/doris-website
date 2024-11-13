"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[930386],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),y=s,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},718652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(58168),s=(n(296540),n(15680));const a={title:"ST_AsText,ST_AsWKT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/spatial-functions/st_astext",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_astext",title:"ST_AsText,ST_AsWKT",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_astext.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_astext",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_astext",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_AsText,ST_AsWKT",language:"en"},sidebar:"docs",previous:{title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_polygon"},next:{title:"ST_Contains",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_contains"}},l={},c=[{value:"ST_AsText,ST_AsWKT",id:"st_astextst_aswkt",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"st_astextst_aswkt"},"ST_AsText,ST_AsWKT"),(0,s.yg)("h3",{id:"description"},"Description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR ST_AsText (GEOMETRY geo)")),(0,s.yg)("p",null,"Converting a geometric figure into a WKT (Well Known Text) representation"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("p",null,"ST_ASTEXT,ST_ASWKT,ST,ASTEXT,ASWKT"))}f.isMDXComponent=!0}}]);