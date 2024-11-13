"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[210667],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(58168),o=(n(296540),n(15680));const i={title:"TO_IPV4_OR_DEFAULT",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv4-or-default",id:"sql-manual/sql-functions/ip-functions/to-ipv4-or-default",title:"TO_IPV4_OR_DEFAULT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/to-ipv4-or-default.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv4-or-default",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-default",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_IPV4_OR_DEFAULT",language:"en"},sidebar:"docs",previous:{title:"TO_IPV4",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4"},next:{title:"TO_IPV4_OR_NULL",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null"}},s={},u=[{value:"TO_IPV4_OR_DEFAULT",id:"to_ipv4_or_default",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv4_or_default"},"TO_IPV4_OR_DEFAULT"),(0,o.yg)("p",null,"TO_IPV4_OR_DEFAULT"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV4 TO_IPV4_OR_DEFAULT(STRING ipv4_str)")),(0,o.yg)("p",null,"Same as to_ipv4, but if the IPv4 address has an invalid format, it returns 0.0.0.0 (0 as IPv4)."),(0,o.yg)("h4",{id:"notice"},"Notice"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"If input is NULL, return 0.0.0.0 (0 as IPv4).")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv4_or_default('.');\n+-------------------------+\n| to_ipv4_or_default('.') |\n+-------------------------+\n| 0.0.0.0                 |\n+-------------------------+\n\nmysql> select to_ipv4_or_default(NULL);\n+--------------------------+\n| to_ipv4_or_default(NULL) |\n+--------------------------+\n| 0.0.0.0                  |\n+--------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("p",null,"TO_IPV4_OR_DEFAULT, IP"))}f.isMDXComponent=!0}}]);