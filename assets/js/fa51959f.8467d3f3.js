"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[500913],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},668411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"DAYOFWEEK",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/dayofweek",id:"version-2.0/sql-manual/sql-functions/date-time-functions/dayofweek",title:"DAYOFWEEK",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/dayofweek.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/dayofweek",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/dayofweek",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DAYOFWEEK",language:"en"},sidebar:"docs",previous:{title:"DAYOFMONTH",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/dayofmonth"},next:{title:"WEEK",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/week"}},s={},c=[{value:"dayofweek",id:"dayofweek",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"dayofweek"},"dayofweek"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT DAYOFWEEK (DATETIME date)")),(0,a.yg)("p",null,"The DAYOFWEEK function returns the index value of the working day of the date, that is, 1 on Sunday, 2 on Monday, and 7 on Saturday."),(0,a.yg)("p",null,"The parameter is Date or Datetime type"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select dayofweek('2019-06-25');\n+----------------------------------+\n| dayofweek('2019-06-25 00:00:00') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n\nmysql> select dayofweek(cast(20190625 as date)); \n+-----------------------------------+\n| dayofweek(CAST(20190625 AS DATE)) |\n+-----------------------------------+\n|                                 3 |\n+-----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DAYOFWEEK\n")))}p.isMDXComponent=!0}}]);