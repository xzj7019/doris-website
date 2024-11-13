"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[199533],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,b=p["".concat(s,".").concat(y)]||p[y]||f[y]||l;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},101393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"ELT",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/elt",id:"version-2.0/sql-manual/sql-functions/string-functions/elt",title:"ELT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/elt.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/elt",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/elt",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ELT",language:"zh-CN"},sidebar:"docs",previous:{title:"UNHEX",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/unhex"},next:{title:"INSTR",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/instr"}},s={},c=[{value:"elt",id:"elt",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"elt"},"elt"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR elt(INT, VARCHAR,...)")),(0,a.yg)("p",null,"\u5728\u6307\u5b9a\u7684\u7d22\u5f15\u5904\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u6307\u5b9a\u7684\u7d22\u5f15\u5904\u6ca1\u6709\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select elt(1, 'aaa', 'bbb');\n+----------------------+\n| elt(1, 'aaa', 'bbb') |\n+----------------------+\n| aaa                  |\n+----------------------+\nmysql> select elt(2, 'aaa', 'bbb');\n+-----------------------+\n| elt(2, 'aaa', 'bbb')  |\n+-----------------------+\n| bbb                   |\n+-----------------------+\nmysql> select elt(0, 'aaa', 'bbb');\n+----------------------+\n| elt(0, 'aaa', 'bbb') |\n+----------------------+\n| NULL                 |\n+----------------------+\nmysql> select elt(2, 'aaa', 'bbb');\n+-----------------------+\n| elt(3, 'aaa', 'bbb')  |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ELT\n")))}f.isMDXComponent=!0}}]);