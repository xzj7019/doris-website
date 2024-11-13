"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[683566],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var s=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=s.createContext({}),d=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return s.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,y=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return t?s.createElement(y,a(a({ref:n},c),{},{components:t})):s.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},939589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(58168),r=(t(296540),t(15680));const o={title:"frontends_disks",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/table-valued-functions/frontends-disks",id:"version-2.0/sql-manual/sql-functions/table-valued-functions/frontends-disks",title:"frontends_disks",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-valued-functions/frontends-disks.md",sourceDirName:"sql-manual/sql-functions/table-valued-functions",slug:"/sql-manual/sql-functions/table-valued-functions/frontends-disks",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/frontends-disks",draft:!1,tags:[],version:"2.0",frontMatter:{title:"frontends_disks",language:"zh-CN"},sidebar:"docs",previous:{title:"FRONTENDS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/frontends"},next:{title:"CATALOGS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/catalogs"}},i={},d=[{value:"<code>frontends_disks</code>",id:"frontends_disks",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,s.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"frontends_disks"},(0,r.yg)("inlineCode",{parentName:"h2"},"frontends_disks")),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"frontends_disks"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210 frontends_disks \u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d doris \u96c6\u7fa4\u4e2d\u7684 FE \u8282\u70b9\u7684\u78c1\u76d8\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e from \u5b50\u53e5\u4e2d\u3002"),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks()")),(0,r.yg)("p",null,"frontends_disks() \u8868\u7ed3\u6784\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> desc function frontends_disks();\n+-------------+------+------+-------+---------+-------+\n| Field       | Type | Null | Key   | Default | Extra |\n+-------------+------+------+-------+---------+-------+\n| Name        | TEXT | No   | false | NULL    | NONE  |\n| Host        | TEXT | No   | false | NULL    | NONE  |\n| DirType     | TEXT | No   | false | NULL    | NONE  |\n| Dir         | TEXT | No   | false | NULL    | NONE  |\n| Filesystem  | TEXT | No   | false | NULL    | NONE  |\n| Capacity    | TEXT | No   | false | NULL    | NONE  |\n| Used        | TEXT | No   | false | NULL    | NONE  |\n| Available   | TEXT | No   | false | NULL    | NONE  |\n| UseRate     | TEXT | No   | false | NULL    | NONE  |\n| MountOn     | TEXT | No   | false | NULL    | NONE  |\n+-------------+------+------+-------+---------+-------+\n11 rows in set (0.14 sec)\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks()")," tvf \u5c55\u793a\u51fa\u6765\u7684\u4fe1\u606f\u57fa\u672c\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"show frontends disks")," \u8bed\u53e5\u5c55\u793a\u51fa\u7684\u4fe1\u606f\u4e00\u81f4\uff0c\u4f46\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks()")," tvf \u7684\u5404\u4e2a\u5b57\u6bb5\u7c7b\u578b\u66f4\u52a0\u660e\u786e\uff0c\u4e14\u53ef\u4ee5\u5229\u7528 tvf \u751f\u6210\u7684\u8868\u53bb\u505a\u8fc7\u6ee4\u3001join \u7b49\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,"\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks()")," tvf \u4fe1\u606f\u5c55\u793a\u8fdb\u884c\u4e86\u9274\u6743\uff0c\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"show frontends disks")," \u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\uff0c\u8981\u6c42\u7528\u6237\u5177\u6709 ADMIN/OPERATOR \u6743\u9650\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from frontends_disk()\\G\n*************************** 1. row ***************************\n       Name: fe_fe1d5bd9_d1e5_4ccc_9b03_ca79b95c9941\n       Host: 172.XX.XX.1\n    DirType: log\n        Dir: /data/doris/fe-github/log\n Filesystem: /dev/sdc5\n   Capacity: 366G\n       Used: 119G\n  Available: 228G\n    UseRate: 35%\n    MountOn: /data\n......    \n12 row in set (0.03 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"frontends_disks\n")))}f.isMDXComponent=!0}}]);