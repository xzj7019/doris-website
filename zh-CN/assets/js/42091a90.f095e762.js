"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75717],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(s,".").concat(f)]||u[f]||g[f]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},701368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"REGEXP_EXTRACT_ALL",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",title:"REGEXP_EXTRACT_ALL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",draft:!1,tags:[],version:"1.2",frontMatter:{title:"REGEXP_EXTRACT_ALL",language:"zh-CN"},sidebar:"docs",previous:{title:"REGEXP_EXTRACT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract"},next:{title:"REGEXP_REPLACE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace"}},s={},c=[{value:"regexp_extract_all",id:"regexp_extract_all",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"regexp_extract_all"},"regexp_extract_all"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR regexp_extract_all(VARCHAR str, VARCHAR pattern)")),(0,a.yg)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u62bd\u53d6\u7b26\u5408 pattern \u7684\u7b2c\u4e00\u4e2a\u5b50\u6a21\u5f0f\u5339\u914d\u90e8\u5206\u3002\u9700\u8981 pattern \u5b8c\u5168\u5339\u914d str \u4e2d\u7684\u67d0\u90e8\u5206\uff0c\u8fd9\u6837\u624d\u80fd\u8fd4\u56de pattern \u90e8\u5206\u4e2d\u9700\u5339\u914d\u90e8\u5206\u7684\u5b57\u7b26\u4e32\u6570\u7ec4\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\u6216\u8005pattern\u6ca1\u6709\u5b50\u6a21\u5f0f\uff0c\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,a.yg)("p",null,"\u5b57\u7b26\u96c6\u5339\u914d\u9700\u8981\u4f7f\u7528 Unicode \u6807\u51c6\u5b57\u7b26\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u5339\u914d\u4e2d\u6587\u8bf7\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"\\p{Han}"),"\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)');\n+--------------------------------------------------------------+\n| regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)') |\n+--------------------------------------------------------------+\n| ['b']                                                        |\n+--------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)');\n+-----------------------------------------------------------------+\n| regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)') |\n+-----------------------------------------------------------------+\n| ['b','f']                                                       |\n+-----------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('abc=111, def=222, ghi=333','(\"[^\"]+\"|\\\\w+)=(\"[^\"]+\"|\\\\w+)');\n+--------------------------------------------------------------------------------+\n| regexp_extract_all('abc=111, def=222, ghi=333', '(\"[^\"]+\"|\\w+)=(\"[^\"]+\"|\\w+)') |\n+--------------------------------------------------------------------------------+\n| ['abc','def','ghi']                                                            |\n+--------------------------------------------------------------------------------+\n\nmysql> select regexp_extract_all('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '(\\\\p{Han}+)(.+)');\n+------------------------------------------------------------------------------------------------+\n| regexp_extract_all('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '(\\p{Han}+)(.+)')       |\n+------------------------------------------------------------------------------------------------+\n| ['\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587']                                                                               |\n+------------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REGEXP_EXTRACT_ALL,REGEXP,EXTRACT,ALL\n")))}g.isMDXComponent=!0}}]);