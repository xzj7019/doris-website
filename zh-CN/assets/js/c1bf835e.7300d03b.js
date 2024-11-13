"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[557742],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):g(g({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},o=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=y(e,["components","mdxType","originalType","parentName"]),m=p(t),o=l,d=m["".concat(i,".").concat(o)]||m[o]||N[o]||r;return t?a.createElement(d,g(g({ref:n},u),{},{components:t})):a.createElement(d,g({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=o;var y={};for(var i in n)hasOwnProperty.call(n,i)&&(y[i]=n[i]);y.originalType=e,y[m]="string"==typeof e?e:l,g[1]=y;for(var p=2;p<r;p++)g[p]=t[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}o.displayName="MDXCreateElement"},459020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>g,default:()=>N,frontMatter:()=>r,metadata:()=>y,toc:()=>p});var a=t(58168),l=(t(296540),t(15680));const r={title:"MySQL \u517c\u5bb9\u6027",language:"zh-CN"},g=void 0,y={unversionedId:"query-data/mysql-compatibility",id:"query-data/mysql-compatibility",title:"MySQL \u517c\u5bb9\u6027",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-data/mysql-compatibility.md",sourceDirName:"query-data",slug:"/query-data/mysql-compatibility",permalink:"/zh-CN/docs/dev/query-data/mysql-compatibility",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL \u517c\u5bb9\u6027",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4e8b\u52a1",permalink:"/zh-CN/docs/dev/data-operate/transaction"},next:{title:"\u8fde\u63a5\uff08JOIN\uff09",permalink:"/zh-CN/docs/dev/query-data/join"}},i={},p=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6570\u5b57\u7c7b\u578b",id:"\u6570\u5b57\u7c7b\u578b",level:3},{value:"\u65e5\u671f\u7c7b\u578b",id:"\u65e5\u671f\u7c7b\u578b",level:3},{value:"\u5b57\u7b26\u4e32\u7c7b\u578b",id:"\u5b57\u7b26\u4e32\u7c7b\u578b",level:3},{value:"JSON \u6570\u636e\u7c7b\u578b",id:"json-\u6570\u636e\u7c7b\u578b",level:3},{value:"Doris \u7279\u6709\u7684\u6570\u636e\u7c7b\u578b",id:"doris-\u7279\u6709\u7684\u6570\u636e\u7c7b\u578b",level:3},{value:"\u8bed\u6cd5\u533a\u522b",id:"\u8bed\u6cd5\u533a\u522b",level:2},{value:"DDL",id:"ddl",level:3},{value:"DROP TABLE / DROP INDEX",id:"drop-table--drop-index",level:3},{value:"DML",id:"dml",level:3},{value:"SQL Function",id:"sql-function",level:2}],u={toc:p},m="wrapper";function N(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris \u662f\u9ad8\u5ea6\u517c\u5bb9 MySQL \u8bed\u6cd5\uff0c\u652f\u6301\u6807\u51c6 SQL\u3002\u4f46\u662f Doris \u4e0e MySQL \u8fd8\u662f\u6709\u5f88\u591a\u4e0d\u540c\u7684\u5730\u65b9\uff0c\u4e0b\u9762\u7ed9\u51fa\u4e86\u4ed6\u4eec\u7684\u5dee\u5f02\u70b9\u4ecb\u7ecd\u3002"),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.yg)("h3",{id:"\u6570\u5b57\u7c7b\u578b"},"\u6570\u5b57\u7c7b\u578b"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a0 \u4ee3\u8868 false\uff0c1 \u4ee3\u8868 true"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301",(0,l.yg)("br",null),"- \u5173\u952e\u5b57\uff1aBoolean ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a0 \u4ee3\u8868 false\uff0c1 \u4ee3\u8868 true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bit"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a1 ~ 64"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Tinyint"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1asigned \u7684\u8303\u56f4\u662f -128 ~ 127\uff0cunsigned \u7684\u8303\u56f4\u662f 0 ~ 255"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a-128 ~ 127")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Smallint"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1asigned \u7684\u8303\u56f4\u662f -2^15 ~ 2^15-1\uff0cunsigned \u7684\u8303\u56f4\u662f 0 ~ 2^16-1"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a-32768 ~ 32767")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Mediumint"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1asigned \u7684\u8303\u56f4\u662f -2^23 ~ 2^23-1\uff0cunsigned \u7684\u8303\u56f4\u662f 0 ~ -2^24-1"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1asigned \u7684\u8303\u56f4\u662f -2^31 ~ 2^31-1\uff0cunsigned \u7684\u8303\u56f4\u662f 0 ~ -2^32-1"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a -2147483648~ 2147483647")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bigint"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1asigned \u7684\u8303\u56f4\u662f -2^63 ~ 2^63-1\uff0cunsigned \u7684\u8303\u56f4\u662f 0 ~ 2^64-1"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a -2^63 ~ 2^63-1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Largeint"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a-2^127 ~ 2^127-1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned\uff088.0.17 \u4ee5\u524d\u652f\u6301\uff0c\u8be5\u7248\u672c\u4ee5\u4e0a\u6807\u8bb0\u4e3a deprecated\uff09",(0,l.yg)("br",null),"- \u9ed8\u8ba4\u503c\uff1aDecimal(10, 0)"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed ",(0,l.yg)("br",null),"- \u9ed8\u8ba4\u503c\uff1aDecimal(9, 0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Float/Double"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u652f\u6301 signed,unsigned\uff088.0.17 \u4ee5\u524d\u652f\u6301\uff0c\u8be5\u7248\u672c\u4ee5\u4e0a\u6807\u8bb0\u4e3a deprecated\uff09"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u53ea\u652f\u6301 signed")))),(0,l.yg)("h3",{id:"\u65e5\u671f\u7c7b\u578b"},"\u65e5\u671f\u7c7b\u578b"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Date"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","['1000-01-01','9999-12-31']"," ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1aYYYY-MM-DD"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","['0000-01-01', '9999-12-31']"," ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1aYYYY-MM-DD")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- DATETIME(","[P]",")\uff0c\u53ef\u9009\u53c2\u6570 P \u8868\u793a\u7cbe\u5ea6 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a'1000-01-01 00:00:00.000000' ,'9999-12-31 23:59:59.999999' ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1aYYYY-MM-DD hh:mm:ss","[.fraction]"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- DATETIME(","[P]",")\uff0c\u53ef\u9009\u53c2\u6570 P \u8868\u793a\u7cbe\u5ea6 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a['0000-01-01 00:00:00","[.000000]","', '9999-12-31 23:59:59","[.999999]","'] ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1aYYYY-MM-DD hh:mm:ss","[.fraction]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- Timestamp","[(p)]","\uff0c\u53ef\u9009\u53c2\u6570 P \u8868\u793a\u7cbe\u5ea6 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","['1970-01-01 00:00:01.000000' UTC , '2038-01-19 03:14:07.999999' UTC]"," ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1aYYYY-MM-DD hh:mm:ss","[.fraction]"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Time"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- Time","[(p)]"," ",(0,l.yg)("br",null)," - \u8303\u56f4\uff1a","['-838:59:59.000000' to '838:59:59.000000']"," ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1ahh:mm:ss","[.fraction]"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Year"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a1901 to 2155, or 0000 ",(0,l.yg)("br",null),"- \u683c\u5f0f\uff1ayyyy"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")))),(0,l.yg)("h3",{id:"\u5b57\u7b26\u4e32\u7c7b\u578b"},"\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Char"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- CHAR(M)\uff0cM \u4e3a\u5b57\u7b26\u957f\u5ea6\uff0c\u7f3a\u7701\u8868\u793a\u957f\u5ea6\u4e3a 1 ",(0,l.yg)("br",null),"- \u5b9a\u957f ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","[0,255]","\uff0c\u5b57\u8282\u5927\u5c0f"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- CHAR(M)\uff0cM \u4e3a\u5b57\u8282\u957f\u5ea6 ",(0,l.yg)("br",null),"- \u53ef\u53d8 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","[1,255]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Varchar"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- VARCHAR(M)\uff0cM \u4e3a\u5b57\u7b26\u957f\u5ea6 ",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","[0,65535]","\uff0c\u5b57\u8282\u5927\u5c0f"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- VARCHAR(M)\uff0cM \u4e3a\u5b57\u8282\u957f\u5ea6\u3002",(0,l.yg)("br",null),"- \u8303\u56f4\uff1a","[1, 65533]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- 1048576 \u5b57\u8282\uff081MB\uff09\uff0c\u53ef\u8c03\u5927\u5230 2147483643 \u5b57\u8282\uff082G\uff09")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Binary"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u7c7b\u4f3c\u4e8e Char"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Varbinary"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u7c7b\u4f3c\u4e8e Varchar"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Blob"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- TinyBlob\u3001Blob\u3001MediumBlob\u3001LongBlob"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Text"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- TinyText\u3001Text\u3001MediumText\u3001LongText"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u6700\u591a\u652f\u6301 65535 \u4e2a elements"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Set"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u652f\u6301 ",(0,l.yg)("br",null),"- \u6700\u591a\u652f\u6301 64 \u4e2a elements"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u4e0d\u652f\u6301")))),(0,l.yg)("h3",{id:"json-\u6570\u636e\u7c7b\u578b"},"JSON \u6570\u636e\u7c7b\u578b"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,l.yg)("td",{parentName:"tr",align:null},"\u652f\u6301")))),(0,l.yg)("h3",{id:"doris-\u7279\u6709\u7684\u6570\u636e\u7c7b\u578b"},"Doris \u7279\u6709\u7684\u6570\u636e\u7c7b\u578b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"HyperLogLog")),(0,l.yg)("p",{parentName:"li"},"HLL \u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\uff0c\u652f\u6301\u5728 Aggregate \u6a21\u578b\u3001Duplicate \u6a21\u578b\u548c Unique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002\u5728 Aggregate \u6a21\u578b\u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u5efa\u8868\u65f6\u914d\u5408\u7684\u805a\u5408\u7c7b\u578b\u4e3a HLL_UNION\u3002\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\u5e76\u4e14 HLL \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 HLL_UNION_AGG\u3001HLL_RAW_AGG\u3001HLL_CARDINALITY\u3001HLL_HASH \u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"),(0,l.yg)("p",{parentName:"li"},"HLL \u662f\u6a21\u7cca\u53bb\u91cd\uff0c\u5728\u5904\u7406\u5927\u6570\u636e\u91cf\u65f6\uff0c\u5176\u6027\u80fd\u4f18\u4e8e Count Distinct\u3002HLL \u7684\u8bef\u5dee\u7387\u901a\u5e38\u5728 1% \u5de6\u53f3\uff0c\u6709\u65f6\u53ef\u80fd\u4f1a\u8fbe\u5230 2%\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"BITMAP")),(0,l.yg)("p",{parentName:"li"},"BITMAP \u7c7b\u578b\u7684\u5217\u53ef\u4ee5\u5728 Aggregate \u8868\u3001Unique \u8868\u6216 Duplicate \u8868\u4e2d\u4f7f\u7528\uff0c\u4f46\u5fc5\u987b\u4f5c\u4e3a\u975e Key \u5217\u3002\u5728 Unique \u8868\u6216 Duplicate \u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u540c\u6837\u9700\u9075\u5faa\u6b64\u89c4\u5219\u3002\u5728 Aggregate \u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u8fd8\u9700\u914d\u5408 BITMAP_UNION \u805a\u5408\u7c7b\u578b\u3002\u7528\u6237\u65e0\u9700\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\uff0c\u957f\u5ea6\u4f1a\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7531\u7cfb\u7edf\u5185\u90e8\u63a7\u5236\u3002\u5e76\u4e14\uff0cBITMAP \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 BITMAP_UNION_COUNT\u3001BITMAP_UNION\u3001BITMAP_HASH\u3001BITMAP_HASH64 \u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"),(0,l.yg)("p",{parentName:"li"},"\u79bb\u7ebf\u573a\u666f\u4e0b\u4f7f\u7528 BITMAP \u53ef\u80fd\u4f1a\u5f71\u54cd\u5bfc\u5165\u901f\u5ea6\uff0c\u5728\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5176\u67e5\u8be2\u901f\u5ea6\u4f1a\u6162\u4e8e HLL\uff0c\u4f46\u4f18\u4e8e Count Distinct\u3002\u6ce8\u610f\uff1a\u5728\u5b9e\u65f6\u573a\u666f\u4e0b\uff0c\u5982\u679c BITMAP \u4e0d\u4f7f\u7528\u5168\u5c40\u5b57\u5178\uff0c\u800c\u4f7f\u7528\u4e86 BITMAP_HASH()\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7ea6\u5343\u5206\u4e4b\u4e00\u7684\u8bef\u5dee\u3002\u5982\u679c\u6b64\u8bef\u5dee\u4e0d\u53ef\u63a5\u53d7\uff0c\u53ef\u4ee5\u4f7f\u7528 BITMAP_HASH64\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"QUANTILE_PERCENT\uff08QUANTILE_STATE\uff09")),(0,l.yg)("p",{parentName:"li"},"QUANTILE_STATE \u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\uff0c\u652f\u6301\u5728 Aggregate \u6a21\u578b\u3001Duplicate \u6a21\u578b\u548c Unique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002\u5728 Aggregate \u6a21\u578b\u8868\u4e2d\u4f7f\u7528\u65f6\uff0c\u5efa\u8868\u65f6\u914d\u5408\u7684\u805a\u5408\u7c7b\u578b\u4e3a QUANTILE_UNION\u3002\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\u5e76\u4e14 QUANTILE_STATE \u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002"),(0,l.yg)("p",{parentName:"li"},"QUANTILE_STATE \u662f\u4e00\u79cd\u8ba1\u7b97\u5206\u4f4d\u6570\u8fd1\u4f3c\u503c\u7684\u7c7b\u578b\uff0c\u5728\u5bfc\u5165\u65f6\u4f1a\u5bf9\u76f8\u540c\u7684 Key\uff0c\u4e0d\u540c Value \u8fdb\u884c\u9884\u805a\u5408\uff0c\u5f53 Value \u6570\u91cf\u4e0d\u8d85\u8fc7 2048 \u65f6\uff0c\u4f1a\u91c7\u7528\u660e\u7ec6\u8bb0\u5f55\u6240\u6709\u6570\u636e\uff0c\u5f53 Value \u6570\u91cf\u5927\u4e8e 2048 \u65f6\u91c7\u7528 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf"},"TDigest")," \u7b97\u6cd5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\uff08\u805a\u7c7b\uff09\uff0c\u5e76\u4fdd\u5b58\u805a\u7c7b\u540e\u7684\u8d28\u5fc3\u70b9\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Array<T",">")),(0,l.yg)("p",{parentName:"li"},"Array \u7531 T \u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728 Duplicate \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\uff0c\u4e5f\u652f\u6301\u5728 Unique \u6a21\u578b\u7684\u8868\u4e2d\u975e Key \u5217\u4f7f\u7528\u3002"),(0,l.yg)("p",{parentName:"li"},"T \u7c7b\u578b\u5305\u62ec\uff1aBOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME,CHAR, VARCHAR, STRING")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"MAP<K, V>")),(0,l.yg)("p",{parentName:"li"},"Map \u662f\u7531 K, V \u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u6620\u5c04\u8868\uff0c\u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728 Duplicate\uff0cUnique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002"),(0,l.yg)("p",{parentName:"li"},"K,V \u652f\u6301\u7684\u7c7b\u578b\u5305\u62ec\uff1aBOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME,  CHAR, VARCHAR, STRING")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"STRUCT<field_name:field_type, ... >")),(0,l.yg)("p",{parentName:"li"},"Struct \u7531\u591a\u4e2a Field \u7ec4\u6210\u7684\u7ed3\u6784\u4f53\uff0c\u4e5f\u53ef\u88ab\u7406\u89e3\u4e3a\u591a\u4e2a\u5217\u7684\u96c6\u5408\u3002\u4e0d\u80fd\u4f5c\u4e3a Key \u4f7f\u7528\uff0c\u76ee\u524d Struct \u4ec5\u652f\u6301\u5728 Duplicate \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002"),(0,l.yg)("p",{parentName:"li"},"\u4e00\u4e2a Struct \u4e2d\u7684 Field \u7684\u540d\u5b57\u548c\u6570\u91cf\u56fa\u5b9a\uff0c\u4e14\u603b\u662f\u4e3a Nullable\uff0c\u4e00\u4e2a Field \u901a\u5e38\u7531\u4e0b\u9762\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"field_name: Field \u7684\u6807\u8bc6\u7b26\uff0c\u4e0d\u53ef\u91cd\u590d")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"field_type: Field \u7684\u7c7b\u578b"))),(0,l.yg)("p",{parentName:"li"},"\u5f53\u524d\u53ef\u652f\u6301\u7684\u7c7b\u578b\u5305\u62ec\uff1aBOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME, CHAR, VARCHAR, STRING")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Agg_State")),(0,l.yg)("p",{parentName:"li"},"AGG_STATE \u4e0d\u80fd\u4f5c\u4e3a Key \u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u9700\u8981\u540c\u65f6\u58f0\u660e\u805a\u5408\u51fd\u6570\u7684\u7b7e\u540d\u3002"),(0,l.yg)("p",{parentName:"li"},"\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u5b9e\u9645\u5b58\u50a8\u7684\u6570\u636e\u5927\u5c0f\u4e0e\u51fd\u6570\u5b9e\u73b0\u6709\u5173\u3002"),(0,l.yg)("p",{parentName:"li"},"AGG_STATE \u53ea\u80fd\u914d\u5408",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-functions/combinators/state"},"STATE")," / ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-functions/combinators/merge"},"MERGE")," / ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-functions/combinators/union"},"UNION"),"\u51fd\u6570\u7ec4\u5408\u5668\u4f7f\u7528\u3002 "))),(0,l.yg)("h2",{id:"\u8bed\u6cd5\u533a\u522b"},"\u8bed\u6cd5\u533a\u522b"),(0,l.yg)("h3",{id:"ddl"},"DDL"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1 CREATE TABLE")),(0,l.yg)("p",null,"Doris \u5efa\u8868\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [database.]table\n(\n    column_definition_list\n    [, index_definition_list]\n)\n[engine_type]\n[keys_type]\n[table_comment]\n[partition_info]\ndistribution_desc\n[rollup_list]\n[properties]\n[extra_properties]\n")),(0,l.yg)("p",null,"\u4e0e MySQL \u7684\u4e0d\u540c\u4e4b\u5904\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u4e0e MySQL \u4e0d\u540c\u4e4b\u5904"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"column_definition_list"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u5b57\u6bb5\u5217\u8868\u5b9a\u4e49\uff0c\u5176\u57fa\u672c\u8bed\u6cd5\u4e0e MySQL \u7c7b\u4f3c\uff0c\u4f46\u4f1a\u989d\u5916\u5305\u542b\u4e00\u4e2a\u805a\u5408\u7c7b\u578b\u7684\u64cd\u4f5c\u3002",(0,l.yg)("br",null),"- \u8be5\u805a\u5408\u7c7b\u578b\u7684\u64cd\u4f5c\uff0c\u4e3b\u8981\u652f\u6301\u7684\u6570\u636e\u6a21\u578b\u4e3a Aggregate \u548c Duplicate\u3002",(0,l.yg)("br",null),"- \u5728\u521b\u5efa\u8868\u65f6\uff0cMySQL \u5141\u8bb8\u5728\u5b57\u6bb5\u5217\u8868\u5b9a\u4e49\u540e\u6dfb\u52a0 Index \u7b49\u7ea6\u675f\uff0c\u5982 Primary Key\u3001Unique Key \u7b49\uff1b\u800c Doris \u5219\u662f\u901a\u8fc7\u5b9a\u4e49\u6570\u636e\u6a21\u578b\u6765\u5b9e\u73b0\u5bf9\u8fd9\u4e9b\u7ea6\u675f\u548c\u8ba1\u7b97\u7684\u652f\u6301\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"index_definition_list"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u7d22\u5f15\u5217\u8868\u5b9a\u4e49\uff0c\u57fa\u672c\u8bed\u6cd5\u4e0e MySQL \u7c7b\u4f3c\uff0c\u652f\u6301\u4f4d\u56fe\u7d22\u5f15\u3001\u5012\u6392\u7d22\u5f15\u548c N-Gram \u7d22\u5f15\uff0c\u4f46\u662f\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15\u662f\u901a\u8fc7\u5c5e\u6027\u8bbe\u7f6e\u3002",(0,l.yg)("br",null),"- \u800c MySQL \u652f\u6301\u7684 index \u6709 B+Tree\uff0cHash\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"engine_type"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u8868\u5f15\u64ce\u7c7b\u578b\uff0c\u53ef\u9009\u3002",(0,l.yg)("br",null),"- \u76ee\u524d\u652f\u6301\u7684\u8868\u5f15\u64ce\u4e3b\u8981\u662f OLAP \u539f\u751f\u5f15\u64ce\u3002",(0,l.yg)("br",null),"- MySQL \u652f\u6301\u7684\u5b58\u50a8\u5f15\u64ce\u6709\uff1aInnodb\uff0cMyISAM \u7b49")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"keys_type"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u6570\u636e\u6a21\u578b\uff0c\u53ef\u9009\u3002",(0,l.yg)("br",null),"- \u652f\u6301\u7684\u7c7b\u578b\u5305\u62ec\uff1a1\uff09DUPLICATE KEY\uff08\u9ed8\u8ba4\uff09\uff1a\u5176\u540e\u6307\u5b9a\u7684\u5217\u4e3a\u6392\u5e8f\u5217\u30022\uff09AGGREGATE KEY\uff1a\u5176\u540e\u6307\u5b9a\u7684\u5217\u4e3a\u7ef4\u5ea6\u5217\u30023\uff09UNIQUE KEY\uff1a\u5176\u540e\u6307\u5b9a\u7684\u5217\u4e3a\u4e3b\u952e\u5217\u3002",(0,l.yg)("br",null),"- MySQL \u5219\u6ca1\u6709\u6570\u636e\u6a21\u578b\u7684\u6982\u5ff5\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_comment"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8868\u6ce8\u91ca")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_info"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u5206\u533a\u7b97\u6cd5\uff0c\u53ef\u9009\u3002\u652f\u6301\u7684\u5206\u533a\u7b97\u6cd5\uff0c\u5305\u62ec\uff1a",(0,l.yg)("br",null)," LESS THAN\uff1a\u4ec5\u5b9a\u4e49\u5206\u533a\u4e0a\u754c\u3002\u4e0b\u754c\u7531\u4e0a\u4e00\u4e2a\u5206\u533a\u7684\u4e0a\u754c\u51b3\u5b9a\u3002FIXED RANGE\uff1a\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\u3002",(0,l.yg)("br",null),"- MULTI RANGE\uff1a\u6279\u91cf\u521b\u5efa RANGE \u5206\u533a\uff0c\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u8bbe\u5b9a\u65f6\u95f4\u5355\u4f4d\u548c\u6b65\u957f\uff0c\u65f6\u95f4\u5355\u4f4d\u652f\u6301\u5e74\u3001\u6708\u3001\u65e5\u3001\u5468\u548c\u5c0f\u65f6\u3002",(0,l.yg)("br",null)," MULTI RANGE\uff1a\u6279\u91cf\u521b\u5efa\u6570\u5b57\u7c7b\u578b\u7684 RANGE \u5206\u533a\uff0c\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u8bbe\u5b9a\u6b65\u957f\u3002",(0,l.yg)("br",null),"- MySQL \u652f\u6301\u7684\u7b97\u6cd5\uff1aHash\uff0cRange\uff0cList\uff0c\u5e76\u4e14\u8fd8\u652f\u6301\u5b50\u5206\u533a\uff0c\u5b50\u5206\u533a\u652f\u6301\u7684\u7b97\u6cd5\u53ea\u6709 Hash\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"distribution_desc"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u5206\u6876\u7b97\u6cd5\uff0c\u5fc5\u9009\uff0c\u5305\u62ec\uff1a1\uff09Hash \u5206\u6876\u8bed\u6cd5\uff1aDISTRIBUTED BY HASH (k1","[,k2 ...]",") ","[BUCKETS num","|","auto]"," \u8bf4\u660e\uff1a\u4f7f\u7528\u6307\u5b9a\u7684 key \u5217\u8fdb\u884c\u54c8\u5e0c\u5206\u6876\u30022\uff09Random \u5206\u6876\u8bed\u6cd5\uff1aDISTRIBUTED BY RANDOM ","[BUCKETS num","|","auto]"," \u8bf4\u660e\uff1a\u4f7f\u7528\u968f\u673a\u6570\u8fdb\u884c\u5206\u6876\u3002",(0,l.yg)("br",null),"- MySQL \u6ca1\u6709\u5206\u6876\u7b97\u6cd5\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rollup_list"),(0,l.yg)("td",{parentName:"tr",align:null},"- \u5efa\u8868\u7684\u540c\u65f6\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7269\u5316\u89c6\u56fe\u3002 ",(0,l.yg)("br",null),"- \u8bed\u6cd5\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},'rollup_name (col1[, col2, ...]) [DUPLICATE KEY(col1[, col2, ...])][PROPERTIES("key" = "value")]')," ",(0,l.yg)("br",null),"- MySQL \u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8868\u5c5e\u6027\uff0c\u4e0e MySQL \u7684\u8868\u5c5e\u6027\u4e0d\u4e00\u81f4\uff0c\u5b9a\u4e49\u8868\u5c5e\u6027\u7684\u8bed\u6cd5\u4e5f\u4e0e MySQL \u4e0d\u4e00\u81f4")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2 CREATE INDEX")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table_name (column [, ...],) [USING BITMAP];\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u76ee\u524d\u652f\u6301\uff1a\u4f4d\u56fe\u7d22\u5f15\u3001\u5012\u6392\u7d22\u5f15\u548c N-Gram \u7d22\u5f15\uff0c\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15\uff08\u5355\u72ec\u7684\u8bed\u6cd5\u8bbe\u7f6e\uff09")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL \u652f\u6301\u7684\u7d22\u5f15\u7b97\u6cd5\u6709\uff1aB+Tree\uff0cHash"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3 CREATE VIEW")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n\nCREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        (KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN partitionKey = identifier RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        propertyClause?\n        AS query\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u57fa\u672c\u8bed\u6cd5\u4e0e MySQL \u4e00\u81f4")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Doris \u652f\u6301\u4e24\u79cd\u7269\u5316\u89c6\u56fe\uff0c\u540c\u6b65\u7269\u5316\u89c6\u56fe\u548c\u5f02\u6b65\u7269\u5316\u89c6\u56fe\uff08\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4ece v2.1 \u5f00\u59cb\u652f\u6301\uff09\u3002Doris \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u66f4\u52a0\u5f3a\u5927\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL \u4ec5\u652f\u6301\u5f02\u6b65\u7269\u5316\u89c6\u56fe"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"4 ALTER TABLE / ALTER INDEX")),(0,l.yg)("p",null,"Doris Alter \u7684\u8bed\u6cd5\u4e0e MySQL \u7684\u57fa\u672c\u4e00\u81f4\u3002 "),(0,l.yg)("h3",{id:"drop-table--drop-index"},"DROP TABLE / DROP INDEX"),(0,l.yg)("p",null,"Doris Drop \u7684\u8bed\u6cd5\u4e0e MySQL \u7684\u57fa\u672c\u4e00\u81f4 "),(0,l.yg)("h3",{id:"dml"},"DML"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1 INSERT")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,l.yg)("p",null,"Doris Insert \u8bed\u6cd5\u4e0e MySQL \u7684\u57fa\u672c\u4e00\u81f4\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2 UPDATE")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE target_table [table_alias]\n    SET assignment_list\n    WHERE condition\n\nassignment_list:\n    assignment [, assignment] ...\n\nassignment:\n    col_name = value\n\nvalue:\n    {expr | DEFAULT}\n")),(0,l.yg)("p",null,"Doris Update \u8bed\u6cd5\u4e0e MySQL \u57fa\u672c\u4e00\u81f4\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f",(0,l.yg)("strong",{parentName:"p"},"\u5fc5\u987b\u52a0\u4e0a WHERE \u6761\u4ef6\u3002")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3 DELETE")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias] \n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n")),(0,l.yg)("p",null,"Doris \u8be5\u8bed\u6cd5\u53ea\u80fd\u6307\u5b9a\u8fc7\u6ee4\u8c13\u8bcd"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n")),(0,l.yg)("p",null,"Doris \u8be5\u8bed\u6cd5\u53ea\u80fd\u5728 UNique Key \u6a21\u578b\u8868\u4e0a\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"Doris Delete \u8bed\u6cd5\u4e0e MySQL \u57fa\u672c\u4e00\u81f4\u3002\u4f46\u662f\u7531\u4e8e Doris \u662f\u4e00\u4e2a\u5206\u6790\u6570\u636e\u5e93\uff0c\u6240\u4ee5\u5220\u9664\u4e0d\u80fd\u8fc7\u4e8e\u9891\u7e41\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"4 SELECT")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    [hint_statement, ...]\n    [ALL | DISTINCT]\n    select_expr [, select_expr ...]\n    [EXCEPT ( col_name1 [, col_name2, col_name3, ...] )]\n    [FROM table_references\n      [PARTITION partition_list]\n      [TABLET tabletid_list]\n      [TABLESAMPLE sample_value [ROWS | PERCENT]\n        [REPEATABLE pos_seek]]\n    [WHERE where_condition]\n    [GROUP BY [GROUPING SETS | ROLLUP | CUBE] {col_name | expr | position}]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position} [ASC | DESC], ...]\n    [LIMIT {[offset_count,] row_count | row_count OFFSET offset_count}]\n    [INTO OUTFILE 'file_name']\n")),(0,l.yg)("p",null,"Doris Select \u8bed\u6cd5\u4e0e MySQL \u57fa\u672c\u4e00\u81f4 "),(0,l.yg)("h2",{id:"sql-function"},"SQL Function"),(0,l.yg)("p",null,"Doris Function \u57fa\u672c\u8986\u76d6\u7edd\u5927\u90e8\u5206 MySQL Function\u3002"))}N.isMDXComponent=!0}}]);