"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[354553],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>s});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,s=g["".concat(c,".").concat(m)]||g[m]||y[m]||l;return t?r.createElement(s,i(i({ref:n},u),{},{components:t})):r.createElement(s,i({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},826649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const l={title:"\u4f18\u5316\u8868 Schema \u8bbe\u8ba1",language:"zh-CN"},i=void 0,o={unversionedId:"query-acceleration/tuning/tuning-plan/optimizing-table-schema",id:"version-3.0/query-acceleration/tuning/tuning-plan/optimizing-table-schema",title:"\u4f18\u5316\u8868 Schema \u8bbe\u8ba1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/tuning/tuning-plan/optimizing-table-schema.md",sourceDirName:"query-acceleration/tuning/tuning-plan",slug:"/query-acceleration/tuning/tuning-plan/optimizing-table-schema",permalink:"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-schema",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u4f18\u5316\u8868 Schema \u8bbe\u8ba1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u6027\u80fd\u5206\u6790",permalink:"/zh-CN/docs/3.0/query-acceleration/tuning/query-profile"},next:{title:"\u4f18\u5316\u7d22\u5f15\u8bbe\u8ba1\u548c\u4f7f\u7528",permalink:"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-index"}},c={},p=[{value:"\u6848\u4f8b 1\uff1a\u8868\u5f15\u64ce\u9009\u62e9",id:"\u6848\u4f8b-1\u8868\u5f15\u64ce\u9009\u62e9",level:2},{value:"\u6848\u4f8b 2\uff1a\u5206\u6876\u5217\u9009\u62e9",id:"\u6848\u4f8b-2\u5206\u6876\u5217\u9009\u62e9",level:2},{value:"\u6848\u4f8b 3\uff1aKey \u5217\u4f18\u5316",id:"\u6848\u4f8b-3key-\u5217\u4f18\u5316",level:2},{value:"\u6848\u4f8b 4\uff1a\u5b57\u6bb5\u7c7b\u578b\u4f18\u5316",id:"\u6848\u4f8b-4\u5b57\u6bb5\u7c7b\u578b\u4f18\u5316",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:p},g="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Schema \u8bbe\u8ba1\u548c\u8c03\u4f18\u4e2d\uff0c\u8868\u7684 Schema \u8bbe\u8ba1\u662f\u5176\u4e2d\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5305\u62ec\u8868\u5f15\u64ce\u9009\u62e9\u3001\u5206\u533a\u5206\u6876\u5217\u9009\u62e9\u3001\u5206\u533a\u5206\u6876\u5927\u5c0f\u8bbe\u7f6e\u3001key \u5217\u548c\u5b57\u6bb5\u7c7b\u578b\u4f18\u5316\u7b49\u3002\u7f3a\u4e4f Schema \u8bbe\u8ba1\u7684\u7cfb\u7edf\uff0c\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u503e\u659c\u7b49\u95ee\u9898\uff0c\u4e0d\u80fd\u5145\u5206\u5229\u7528\u7cfb\u7edf\u5e76\u884c\u548c\u6392\u5e8f\u7279\u6027\uff0c\u4ece\u800c\u5f71\u54cd Doris \u7cfb\u7edf\u5728\u4e1a\u52a1\u7cfb\u7edf\u4e2d\u53d1\u6325\u771f\u5b9e\u7684\u6027\u80fd\u4f18\u52bf\u3002"),(0,a.yg)("p",null,"\u8be6\u7ec6\u7684\u8bbe\u8ba1\u539f\u5219\u53ef\u4ee5\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"../../../table-design/overview"},"\u6570\u636e\u8868\u8bbe\u8ba1"),"\u7ae0\u8282\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002\u672c\u7ae0\u5c06\u4ece\u5b9e\u9645\u6848\u4f8b\u7684\u89d2\u5ea6\uff0c\u5c55\u793a\u51e0\u79cd\u5178\u578b\u573a\u666f\u4e0b\u56e0 Schema \u8bbe\u8ba1\u95ee\u9898\u5bfc\u81f4\u7684\u6027\u80fd\u74f6\u9888\uff0c\u5e76\u7ed9\u51fa\u4f18\u5316\u5efa\u8bae\uff0c\u4f9b\u4e1a\u52a1\u8c03\u4f18\u53c2\u8003\u3002"),(0,a.yg)("h2",{id:"\u6848\u4f8b-1\u8868\u5f15\u64ce\u9009\u62e9"},"\u6848\u4f8b 1\uff1a\u8868\u5f15\u64ce\u9009\u62e9"),(0,a.yg)("p",null,"Doris \u652f\u6301 Duplicate\u3001Unique\u3001Aggregate \u4e09\u79cd\u8868\u6a21\u578b\u3002\u5176\u4e2d\uff0cUnique \u53c8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5206\u4e3a Merge-On-Read\uff08MOR\uff09\u548c Merge-On-Write\uff08MOW\uff09\u4e24\u79cd\u3002"),(0,a.yg)("p",null,"\u8fd9\u51e0\u79cd\u8868\u6a21\u578b\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u7531\u597d\u5230\u5dee\u4f9d\u6b21\u4e3a\uff1aDuplicate > MOW > MOR == Aggregate\u3002\u56e0\u6b64\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u63a8\u8350\u4f7f\u7528 Duplicate \u8868\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u67e5\u8be2\u6027\u80fd\u3002"),(0,a.yg)("admonition",{title:"\u4f18\u5316\u5efa\u8bae",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5f53\u4e1a\u52a1\u65e0\u6570\u636e\u66f4\u65b0\u9700\u6c42\uff0c\u4f46\u5bf9\u67e5\u8be2\u6027\u80fd\u6709\u8f83\u9ad8\u8981\u6c42\u65f6\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"../../../table-design/data-model/duplicate"},"Duplicate \u8868"),"\u3002")),(0,a.yg)("h2",{id:"\u6848\u4f8b-2\u5206\u6876\u5217\u9009\u62e9"},"\u6848\u4f8b 2\uff1a\u5206\u6876\u5217\u9009\u62e9"),(0,a.yg)("p",null,"Doris \u652f\u6301\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u6876\u64cd\u4f5c\uff0c\u5373\u4f9d\u636e Schema \u4e2d\u9884\u8bbe\u7684\u5206\u6876\u952e\u6765\u5206\u5e03\u6570\u636e\uff0c\u8fdb\u800c\u5f62\u6210\u6570\u636e Bucket\u3002"),(0,a.yg)("p",null,"\u9009\u53d6\u6070\u5f53\u7684\u5206\u6876\u5217\uff0c\u5bf9\u4e8e\u539f\u59cb\u6570\u636e\u7684\u5408\u7406\u5206\u5e03\u81f3\u5173\u91cd\u8981\uff0c\u5b83\u80fd\u6709\u6548\u9632\u6b62\u6570\u636e\u503e\u659c\u6240\u5f15\u53d1\u7684\u6027\u80fd\u95ee\u9898\u3002\u540c\u65f6\uff0c\u8fd9\u4e5f\u80fd\u6700\u5927\u5316\u5730\u5229\u7528 Doris \u63d0\u4f9b\u7684 Colocate Join \u548c Bucket Shuffle Join \u7279\u6027\uff0c\u4ece\u800c\u663e\u8457\u63d0\u5347 Join \u64cd\u4f5c\u7684\u6027\u80fd\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u9762 t1 \u8868\u7684\u5efa\u8868\u8bed\u53e5\u4e3a\u4f8b\uff0c\u5f53\u524d\u5206\u6876\u5217\u9009\u5b9a\u4e3a c2\u3002\u7136\u800c\uff0c\u5728\u5b9e\u9645\u6570\u636e\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u82e5 c2 \u5217\u7684\u503c\u5168\u90e8\u9ed8\u8ba4\u4e3a null\uff0c\u90a3\u4e48\u5373\u4fbf\u8bbe\u5b9a\u4e86 64 \u4e2a\u5206\u6876\uff0c\u5b9e\u9645\u4e0a\u4e5f\u53ea\u6709\u4e00\u4e2a\u5206\u6876\u4f1a\u5305\u542b\u6240\u6709\u6570\u636e\u3002\u8fd9\u79cd\u6781\u7aef\u60c5\u51b5\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684\u6570\u636e\u503e\u659c\uff0c\u8fdb\u800c\u4ea7\u751f\u6027\u80fd\u74f6\u9888\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `t1` (\n  `c1` INT NULL,\n  `c2` INT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 64\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n\uff09;\ninsert into t1 select number, null from numbers ('number'='10000000');\n")),(0,a.yg)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5206\u6876\u5217\u4ece c2 \u6539\u4e3a c1\uff0c\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u5145\u5206\u6563\u5217\uff0c\u5e76\u6700\u5927\u5316\u5730\u5229\u7528\u7cfb\u7edf\u7684\u5e76\u884c\u5904\u7406\u80fd\u529b\uff0c\u4ece\u800c\u8fbe\u5230\u8c03\u4f18\u7684\u76ee\u7684\u3002"),(0,a.yg)("p",null,"\u56e0\u6b64\uff0c\u5728 Schema \u8bbe\u8ba1\u9636\u6bb5\uff0c\u4e1a\u52a1\u4eba\u5458\u9700\u8981\u6839\u636e\u4e1a\u52a1\u7279\u6027\uff0c\u63d0\u524d\u8fdb\u884c\u5408\u7406\u7684\u5206\u6876\u5217\u8bbe\u8ba1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u9884\u5148\u4e86\u89e3\u5230 c2 \u5217\u7684\u4e1a\u52a1\u542b\u4e49\u4e2d\u53ef\u80fd\u5305\u542b\u5927\u91cf\u503e\u659c\u7684\u503c\uff0c\u5982 null \u6216\u67d0\u4e9b\u7279\u5b9a\u7684\u503c\uff0c\u90a3\u4e48\u5c31\u5e94\u8be5\u907f\u514d\u9009\u62e9\u8fd9\u4e9b\u5b57\u6bb5\u4f5c\u4e3a\u5206\u6876\u5217\u3002\u76f8\u53cd\uff0c\u5e94\u8be5\u9009\u62e9\u90a3\u4e9b\u5728\u4e1a\u52a1\u542b\u4e49\u4e0a\u5177\u6709\u5145\u5206\u6563\u5217\u7279\u6027\u7684\u5b57\u6bb5\uff0c\u5982\u7528\u6237 ID\uff0c\u4f5c\u4e3a\u5206\u6876\u5217\u3002\u5728\u6027\u80fd\u95ee\u9898\u6392\u67e5\u9636\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b SQL \u8bed\u53e5\u6765\u786e\u8ba4\u5206\u6876\u5b57\u6bb5\u662f\u5426\u5b58\u5728\u6570\u636e\u503e\u659c\uff0c\u5e76\u636e\u6b64\u8fdb\u884c\u540e\u7eed\u7684\u4f18\u5316\u8c03\u6574\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select c2\uff0ccount(*) cnt from t1 group by c2 order by cnt desc limit 10;\n")),(0,a.yg)("p",null,"\u53ef\u4ee5\u660e\u786e\u7684\u662f\uff0c\u826f\u597d\u7684\u4e8b\u524d\u8bbe\u8ba1\u80fd\u591f\u663e\u8457\u964d\u4f4e\u4e8b\u540e\u95ee\u9898\u53d1\u751f\u65f6\u7684\u5b9a\u4f4d\u548c\u4fee\u6b63\u6210\u672c\u3002\u56e0\u6b64\uff0c\u5f3a\u70c8\u63a8\u8350\u4e1a\u52a1\u4eba\u5458\u5728 Schema \u8bbe\u8ba1\u9636\u6bb5\u8fdb\u884c\u4e25\u683c\u7684\u8bbe\u8ba1\u548c\u68c0\u67e5\uff0c\u4ee5\u907f\u514d\u5f15\u5165\u4e0d\u5fc5\u8981\u7684\u6210\u672c\u3002"),(0,a.yg)("admonition",{title:"\u4f18\u5316\u5efa\u8bae",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u68c0\u67e5\u5206\u6876\u5217\u662f\u5426\u5b58\u5728\u6570\u636e\u503e\u659c\u95ee\u9898\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u66f4\u6362\u4e3a\u5728\u4e1a\u52a1\u542b\u4e49\u4e0a\u5177\u6709\u5145\u5206\u6563\u5217\u7279\u6027\u7684\u5b57\u6bb5\u4f5c\u4e3a\u5206\u6876\u5217\u3002")),(0,a.yg)("h2",{id:"\u6848\u4f8b-3key-\u5217\u4f18\u5316"},"\u6848\u4f8b 3\uff1aKey \u5217\u4f18\u5316"),(0,a.yg)("p",null,"\u5728\u4e09\u79cd\u8868\u6a21\u578b\u4e2d\uff0c\u82e5\u5efa\u8868 Schema \u660e\u786e\u6307\u5b9a\u4e86 Duplicate Key\u3001Unique Key \u6216 Aggregate Key\uff0cDoris \u5c06\u5728\u5b58\u50a8\u5c42\u9762\u786e\u4fdd\u6570\u636e\u4f9d\u636e Key \u5217\u8fdb\u884c\u6392\u5e8f\u3002\u8fd9\u4e00\u7279\u6027\u4e3a\u6570\u636e\u67e5\u8be2\u7684\u6027\u80fd\u4f18\u5316\u63d0\u4f9b\u4e86\u65b0\u7684\u601d\u8def\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5728 Schema \u8bbe\u8ba1\u9636\u6bb5\uff0c\u82e5\u80fd\u5c06\u4e1a\u52a1\u67e5\u8be2\u4e2d\u9891\u7e41\u4f7f\u7528\u7684\u7b49\u503c\u6216\u8303\u56f4\u67e5\u8be2\u5217\u5b9a\u4e49\u4e3a Key \u5217\uff0c\u5c06\u4f1a\u663e\u8457\u63d0\u5347\u8fd9\u7c7b\u67e5\u8be2\u7684\u6267\u884c\u901f\u5ea6\uff0c\u8fdb\u800c\u63d0\u5347\u6574\u4f53\u6027\u80fd\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u7ec4\u4e1a\u52a1\u67e5\u8be2\u9700\u6c42\u7684\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select * from t1 where t1.c1 = 1;\nselect * from t1 where t1.c1 > 1 and t1.c1 < 10;\nselect * from t1 where t1.c1 in (1, 2, 3);\n")),(0,a.yg)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u4e1a\u52a1\u9700\u6c42\u548c t1 \u8868\u7684 Schema \u8bbe\u8ba1\u4e0e\u540e\u671f\u4f18\u5316\uff0c\u53ef\u4ee5\u8003\u8651\u5c06 c1 \u5217\u4f5c\u4e3a Key \u5217\uff0c\u4ee5\u52a0\u901f\u67e5\u8be2\u8fc7\u7a0b\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `t1` (\n  `c1` INT NULL,\n  `c2` INT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n\uff09;\n')),(0,a.yg)("admonition",{title:"\u4f18\u5316\u5efa\u8bae",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5c06\u4e1a\u52a1\u67e5\u8be2\u4e2d\u9891\u7e41\u4f7f\u7528\u7684\u5217\u8bbe\u5b9a\u4e3a Key \u5217\uff0c\u4ee5\u52a0\u901f\u67e5\u8be2\u8fc7\u7a0b\u3002")),(0,a.yg)("h2",{id:"\u6848\u4f8b-4\u5b57\u6bb5\u7c7b\u578b\u4f18\u5316"},"\u6848\u4f8b 4\uff1a\u5b57\u6bb5\u7c7b\u578b\u4f18\u5316"),(0,a.yg)("p",null,"\u5728\u6570\u636e\u5e93\u7cfb\u7edf\u4e2d\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u5176\u5904\u7406\u590d\u6742\u7a0b\u5ea6\u53ef\u80fd\u5b58\u5728\u663e\u8457\u5dee\u5f02\u3002\u4f8b\u5982\uff0c\u53d8\u957f\u7c7b\u578b\u7684\u6570\u636e\u5904\u7406\u76f8\u8f83\u4e8e\u5b9a\u957f\u7c7b\u578b\u800c\u8a00\uff0c\u5176\u590d\u6742\u6027\u8981\u9ad8\u5f97\u591a\uff1b\u540c\u6837\uff0c\u9ad8\u7cbe\u7c7b\u578b\u7684\u6570\u636e\u5904\u7406\u4e5f\u6bd4\u4f4e\u7cbe\u7c7b\u578b\u66f4\u4e3a\u590d\u6742\u3002"),(0,a.yg)("p",null,"\u8fd9\u4e00\u7279\u6027\u5bf9\u4e1a\u52a1\u7cfb\u7edf Schema \u7684\u8bbe\u8ba1\u53ca\u540e\u671f\u4f18\u5316\u63d0\u4f9b\u4e86\u91cd\u8981\u542f\u793a\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5728\u6ee1\u8db3\u4e1a\u52a1\u7cfb\u7edf\u8868\u8fbe\u548c\u8ba1\u7b97\u9700\u6c42\u7684\u524d\u63d0\u4e0b\uff0c\u5e94\u4f18\u5148\u9009\u62e9\u5b9a\u957f\u7c7b\u578b\uff0c\u907f\u514d\u4f7f\u7528\u53d8\u957f\u7c7b\u578b\uff1b")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u540c\u65f6\uff0c\u5c3d\u91cf\u91c7\u7528\u4f4e\u7cbe\u7c7b\u578b\uff0c\u800c\u975e\u9ad8\u7cbe\u7c7b\u578b\u3002\u5177\u4f53\u5b9e\u8df5\u5305\u62ec\uff1a\u4f7f\u7528 BIGINT \u66ff\u4ee3 VARCHAR \u6216 STRING \u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u4ee5\u53ca\u7528 FLOAT / INT / BIGINT \u66ff\u6362 DECIMAL \u7c7b\u578b\u7684\u5b57\u6bb5\u7b49\u3002\u6b64\u7c7b\u5b57\u6bb5\u7c7b\u578b\u7684\u5408\u7406\u8bbe\u8ba1\u548c\u4f18\u5316\uff0c\u5c06\u6781\u5927\u5730\u63d0\u5347\u4e1a\u52a1\u7684\u8ba1\u7b97\u6548\u7387\uff0c\u4ece\u800c\u589e\u5f3a\u7cfb\u7edf\u6027\u80fd\u3002"))),(0,a.yg)("admonition",{title:"\u4f18\u5316\u5efa\u8bae",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5728\u5b9a\u4e49 Schema \u7c7b\u578b\u65f6\uff0c\u5e94\u9075\u5faa\u5b9a\u957f\u548c\u4f4e\u7cbe\u4f18\u5148\u7684\u539f\u5219\u3002")),(0,a.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.yg)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u7684 Schema \u80fd\u591f\u6700\u5927\u5316\u5730\u5229\u7528 Doris \u7684\u7279\u6027\uff0c\u8fdb\u800c\u663e\u8457\u63d0\u5347\u4e1a\u52a1\u6027\u80fd\u3002\u53cd\u89c2\u672a\u7ecf\u8fc7\u8c03\u4f18\u7684 Schema \u8bbe\u8ba1\u5219\u53ef\u80fd\u5bf9\u4e1a\u52a1\u9020\u6210\u5168\u5c40\u6027\u7684\u8d1f\u9762\u5f71\u54cd\uff0c\u4f8b\u5982\u6570\u636e\u503e\u659c\u7b49\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u524d\u671f\u7684 Schema \u8bbe\u8ba1\u4f18\u5316\u5de5\u4f5c\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002"),(0,a.yg)("p",null,"\u9488\u5bf9\u6027\u80fd\u8c03\u4f18\u65b9\u9762\uff0c\u4f60\u8fd8\u53ef\u4ee5\u53c2\u8003\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"../../../query-data/join#colocate-join"},"Colocate Group \u4f18\u5316 Join"),"\uff0c\u8be5\u6587\u6863\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5145\u5206\u5229\u7528 Doris \u7684\u7279\u6027\u6765\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u4e3a\u4f60\u7684\u4e1a\u52a1\u6027\u80fd\u63d0\u5347\u63d0\u4f9b\u6709\u529b\u652f\u6301\u3002"))}y.isMDXComponent=!0}}]);