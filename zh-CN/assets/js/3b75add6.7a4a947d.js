"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[445645],{15680:(e,r,n)=>{n.d(r,{xA:()=>y,yg:()=>m});var t=n(296540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},y=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=l,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return n?t.createElement(m,o(o({ref:r},y),{},{components:n})):t.createElement(m,o({ref:r},y))}));function m(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},400457:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(58168),l=(n(296540),n(15680));const a={title:"\u5927\u67e5\u8be2\u7194\u65ad",language:"zh-CN"},o=void 0,c={unversionedId:"admin-manual/resource-admin/workload-fusing",id:"admin-manual/resource-admin/workload-fusing",title:"\u5927\u67e5\u8be2\u7194\u65ad",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/resource-admin/workload-fusing.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-fusing",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/workload-fusing",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5927\u67e5\u8be2\u7194\u65ad",language:"zh-CN"},sidebar:"docs",previous:{title:"Resource Group",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/multi-tenant"},next:{title:"\u4f7f\u7528Workload Group\u7ba1\u7406\u5185\u5b58\u8d44\u6e90",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/use-workload-mem-limit"}},i={},s=[{value:"\u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5",id:"\u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:3},{value:"\u57fa\u4e8e\u5185\u5b58\u5bb9\u91cf\u7684\u7194\u65ad",id:"\u57fa\u4e8e\u5185\u5b58\u5bb9\u91cf\u7684\u7194\u65ad",level:3},{value:"\u57fa\u4e8eSCAN\u6570\u636e\u91cf\u7684\u7194\u65ad",id:"\u57fa\u4e8escan\u6570\u636e\u91cf\u7684\u7194\u65ad",level:3},{value:"\u57fa\u4e8e\u67e5\u8be2\u65f6\u95f4\u7684\u7194\u65ad",id:"\u57fa\u4e8e\u67e5\u8be2\u65f6\u95f4\u7684\u7194\u65ad",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}],y={toc:s},u="wrapper";function d(e){let{components:r,...n}=e;return(0,l.yg)(u,(0,t.A)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5927\u67e5\u8be2\u7194\u65ad\u901a\u5e38\u9002\u7528\u4e8e\u7ebf\u4e0a\u96c6\u7fa4\u7ecf\u5e38\u51fa\u73b0\u4e2a\u522b\u5360\u7528\u8d44\u6e90\u8fc7\u591a\u7684\u67e5\u8be2\u5bfc\u81f4\u96c6\u7fa4\u6574\u4f53\u53ef\u7528\u6027\u4e0b\u964d\u7684\u573a\u666f\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u5728\u8fd0\u884c\u65f6\u68c0\u6d4b\u5f02\u5e38\u7684\u5927\u67e5\u8be2\uff0c\u5e76\u4e14\u963b\u6b62\u8fd9\u4e2a\u67e5\u8be2\u8fd0\u884c\u7684\u65b9\u5f0f\u4f7f\u5f97\u96c6\u7fa4\u6062\u590d\u6b63\u5e38\u3002\n\u5982\u679c\u7528\u6237\u5df2\u7ecf\u6839\u636e\u67e5\u8be2\u5ef6\u8fdf\u5bf9\u8d1f\u8f7d\u8fdb\u884c\u4e86\u5206\u7ec4\uff0c\u6bd4\u5982\u5927\u67e5\u8be2\u5212\u5206\u5230\u4e00\u4e2aWorkload Group\uff0c\u5c0f\u67e5\u8be2\u5212\u5206\u5230\u4e00\u4e2aWorkload Group\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5927\u67e5\u8be2\u7194\u65ad\u7684\u65b9\u5f0f\u63d0\u9ad8\u5c0f\u67e5\u8be2\u5206\u7ec4\u7684\u53ef\u7528\u6027\u3002\n\u76ee\u524d\u7684\u5927\u67e5\u8be2\u7194\u65ad\u7b56\u7565\u4e3b\u8981\u662f\u901a\u8fc7Workload Policy\u529f\u80fd\u5b9e\u73b0\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u7279\u5b9a\u7684\u7b56\u7565\u5b9e\u73b0\u5927\u67e5\u8be2\u7684\u81ea\u52a8\u7194\u65ad\u3002"),(0,l.yg)("h2",{id:"\u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5"},"\u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5"),(0,l.yg)("h3",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,l.yg)("p",null,"1FE\uff0c1BE\uff0cBE\u914d\u7f6e\u4e3a96\u6838\uff0c\u6d4b\u8bd5\u6570\u636e\u96c6\u4e3aclickbench\u3002"),(0,l.yg)("h3",{id:"\u57fa\u4e8e\u5185\u5b58\u5bb9\u91cf\u7684\u7194\u65ad"},"\u57fa\u4e8e\u5185\u5b58\u5bb9\u91cf\u7684\u7194\u65ad"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6d4b\u8bd5SQL\u4f7f\u7528ckbench\u7684q29\uff0c\u53ef\u4ee5\u901a\u8fc7\u5ba1\u8ba1\u770b\u5230\u8fd9\u4e2a\u67e5\u8be2\u7684\u5cf0\u503c\u5185\u5b58\u7528\u91cf\uff08peakMemoryBytes\uff09\u4e3a8G\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"|User=root|Ctl=internal|Db=hits|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=4614|ScanBytes=13107527680|ScanRows=81032736|ReturnRows=11|StmtId=526|QueryId=e5b6c62d624146e4-b7291221492a7cc2|IsQuery=true|isNereids=true|feIp=10.16.10.8|StmtType=SELECT|Stmt=SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25|CpuTimeMS=105631|ShuffleSendBytes=0|ShuffleSendRows=0|SqlHash=b03d48a7e6849912003ad1cff9519957|peakMemoryBytes=8741352477|SqlDigest=|cloudClusterName=UNKNOWN|TraceId=|WorkloadGroup=normal|FuzzyVariables=|scanBytesFromLocalStorage=0|scanBytesFromRemoteStorage=0\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u65b0\u5efa\u4e00\u4e2aWorkload Policy\uff0c\u5982\u679c\u67e5\u8be2\u5185\u5b58\u8d85\u8fc71G\u5c31kill\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"create workload policy cancel_1g_query conditions(query_be_memory_bytes > 1073741824) actions(cancel_query);\n\n// \u901a\u8fc7\u7cfb\u7edf\u8868\u67e5\u770b\u65b0\u5efa\u7684policy\nmysql [information_schema]>select * from workload_policy;\n+-------+-----------------+------------------------------------+--------------+----------+---------+---------+----------------+\n| ID    | NAME            | CONDITION                          | ACTION       | PRIORITY | ENABLED | VERSION | WORKLOAD_GROUP |\n+-------+-----------------+------------------------------------+--------------+----------+---------+---------+----------------+\n| 11313 | cancel_1g_query | query_be_memory_bytes > 1073741824 | cancel_query |        0 |       1 |       0 |                |\n+-------+-----------------+------------------------------------+--------------+----------+---------+---------+----------------+\n1 row in set (0.02 sec)\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u518d\u6b21\u6267\u884c\u67e5\u8be2\uff0c\u53ef\u4ee5\u770b\u5230\u6b64\u65f6\u67e5\u8be2\u4f1a\u88ab\u65b0\u5efa\u7684Policy\u7ed9cancel\u6389\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    mysql [information_schema]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits.hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INTERNAL_ERROR]query ceb0553d359e454f-8939599b2e602d07 cancelled by workload policy: cancel_1g_query, id:11313\n")),(0,l.yg)("h3",{id:"\u57fa\u4e8escan\u6570\u636e\u91cf\u7684\u7194\u65ad"},"\u57fa\u4e8eSCAN\u6570\u636e\u91cf\u7684\u7194\u65ad"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528ckbench\u7684q29\u8fdb\u884c\u6d4b\u8bd5\uff0c\u65b0\u5efa\u4e00\u4e2a\u9650\u5236\u626b\u63cf\u884c\u6570\u7684Policy\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"// \u5148\u7981\u7528\u6389\u5df2\u7ecf\u521b\u5efa\u7684policy\nalter workload policy cancel_1g_query properties('enabled'='false');\n\n// \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u57fa\u4e8escan\u51fd\u6570\u7194\u65ad\u7684policy\ncreate workload policy canel_scan_5kw_query conditions(be_scan_rows > 50000000) actions(cancel_query);\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6d4b\u8bd5\u67e5\u8be2\u6267\u884c\u60c5\u51b5\uff0c\u6b64\u65f6\u67e5\u8be2\u4f1a\u7531\u4e8eSCAN\u884c\u6570\u8d85\u8fc7\u914d\u7f6e\u7684\u503c\u800c\u5931\u8d25\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits.hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\n\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INTERNAL_ERROR]query f9d15001bfc94322-9b63a8b84aef9dee cancelled by workload policy: canel_scan_5kw_query, id:11314\n")),(0,l.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cbe_scan_rows\u4e3b\u8981\u7edf\u8ba1\u7684\u662f\u67d0\u4e2a\u67e5\u8be2\u5728\u5355BE\u4e0a\u7684\u626b\u63cf\u6570\u636e\u91cf\uff0c\u7ebf\u4e0a\u73af\u5883\u4e0b\u4e00\u4e2a\u8868\u7684\u6570\u636e\u901a\u5e38\u5206\u5e03\u5728\u591a\u4e2aBE\u4e0a\uff0c\u800c\u5ba1\u8ba1\u4e2d\u770b\u5230\u7684\u67e5\u8be2\u7684\u626b\u63cf\u884c\u6570\u662f\u591a\u4e2aBE\u7684\u6c47\u603b\uff0c\n\u56e0\u6b64\u5f53\u67e5\u8be2\u7531\u4e8eSCAN\u6570\u636e\u91cf\u5931\u8d25\u65f6\uff0c\u5ba1\u8ba1\u91cc\u7684\u626b\u63cf\u884c\u6570\u901a\u5e38\u8981\u6bd4Policy\u4e2d\u914d\u7f6e\u7684\u5927\u5f88\u591a\u3002"),(0,l.yg)("h3",{id:"\u57fa\u4e8e\u67e5\u8be2\u65f6\u95f4\u7684\u7194\u65ad"},"\u57fa\u4e8e\u67e5\u8be2\u65f6\u95f4\u7684\u7194\u65ad"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528ckbench\u7684q29\u8fdb\u884c\u6d4b\u8bd5\uff0c\u65b0\u5efa\u4e00\u4e2a\u53d6\u6d88\u6267\u884c\u65f6\u95f4\u8d85\u8fc71s\u7684\u67e5\u8be2\u7684Policy\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"// \u5148\u7981\u7528\u5df2\u7ecf\u521b\u5efa\u7684policy\nalter workload policy canel_scan_5kw_query properties('enabled'='false');\n\ncreate workload policy cancel_time_1s_query conditions(query_time > 1000) actions(cancel_query);\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6267\u884c\u67e5\u8be2\uff0c\u53ef\u4ee5\u770b\u5230\u8be5\u67e5\u8be2\u7531\u4e8e\u6267\u884c\u65f6\u95f4\u8d85\u8fc71\u79d2\u800c\u5931\u8d25\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits.hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INTERNAL_ERROR]query c6aebdf403e24c62-965daf0bdff179f7 cancelled by workload policy: cancel_time_1s_query, id:11315\n")),(0,l.yg)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u76ee\u524dFE\u5411BE\u540c\u6b65Workload Policy\u5143\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\u4e3a30\u79d2\uff0c\u4e5f\u5c31\u662f\u5bf9\u4e8epolicy\u7684\u53d8\u66f4\u6700\u5927\u9700\u898130\u79d2\u624d\u4f1a\u751f\u6548\u3002"),(0,l.yg)("li",{parentName:"ol"},"BE\u76ee\u524d\u662f\u901a\u8fc7\u5b9a\u65f6\u7ebf\u7a0b\u6765\u6267\u884cPolicy\u4e2d\u914d\u7f6e\u7684\u7b56\u7565\uff0c\u65f6\u95f4\u95f4\u9694\u4e3a500ms\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u67e5\u8be2\u7684\u65f6\u95f4\u8fc7\u77ed\uff0c\u5728500ms\u4ee5\u5185\uff0c\u53ef\u80fd\u4e0d\u4f1a\u53d7\u5230Workload Policy\u7684\u7ea6\u675f\u3002")))}d.isMDXComponent=!0}}]);