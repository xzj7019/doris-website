"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[840431],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>s});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),m=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=m(e.components);return t.createElement(i.Provider,{value:a},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=m(n),y=r,s=g["".concat(i,".").concat(y)]||g[y]||h[y]||c;return n?t.createElement(s,l(l({ref:a},p),{},{components:n})):t.createElement(s,l({ref:a},p))}));function s(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=y;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<c;m++)l[m]=n[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},746207:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var t=n(58168),r=(n(296540),n(15680));const c={title:"Cache \u5185\u5b58\u5206\u6790",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis",id:"version-2.1/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis",title:"Cache \u5185\u5b58\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Cache \u5185\u5b58\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5168\u5c40\u5185\u5b58\u5206\u6790",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/global-memory-analysis"},next:{title:"\u5143\u6570\u636e\u5185\u5b58\u5206\u6790",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"}},i={},m=[{value:"Doris Cache \u7c7b\u578b",id:"doris-cache-\u7c7b\u578b",level:2},{value:"Doris Cache \u67e5\u770b\u65b9\u6cd5",id:"doris-cache-\u67e5\u770b\u65b9\u6cd5",level:2},{value:"Cache \u5185\u5b58\u5206\u6790",id:"cache-\u5185\u5b58\u5206\u6790",level:2},{value:"DataPageCache \u5185\u5b58\u4f7f\u7528\u591a",id:"datapagecache-\u5185\u5b58\u4f7f\u7528\u591a",level:3},{value:"SegmentCache \u5185\u5b58\u4f7f\u7528\u591a",id:"segmentcache-\u5185\u5b58\u4f7f\u7528\u591a",level:3},{value:"PKIndexPageCache \u5185\u5b58\u4f7f\u7528\u591a",id:"pkindexpagecache-\u5185\u5b58\u4f7f\u7528\u591a",level:3}],p={toc:m},g="wrapper";function h(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris \u81ea\u5df1\u7ba1\u7406\u7684 Cache \u76ee\u524d\u5747\u4e3a LRU \u6dd8\u6c70\u7b56\u7565\uff0c\u5747\u652f\u6301\u5355\u72ec\u901a\u8fc7\u53c2\u6570\u63a7\u5236\u5bb9\u91cf\u548c\u6dd8\u6c70\u65f6\u957f\u3002"),(0,r.yg)("h2",{id:"doris-cache-\u7c7b\u578b"},"Doris Cache \u7c7b\u578b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Page Cache")),(0,r.yg)("p",null,"\u7528\u4e8e\u52a0\u901f\u6570\u636e\u626b\u63cf\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- DataPageCache: \u7f13\u5b58\u6570\u636e Page\u3002\n- IndexPageCache: \u7f13\u5b58\u6570\u636e Page \u7684\u7d22\u5f15\u3002\n- PKIndexPageCache: \u7f13\u5b58 Page \u7684\u4e3b\u952e\u7d22\u5f15\u3002\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Metadata Cache")),(0,r.yg)("p",null,"\u7528\u4e8e\u52a0\u901f\u5143\u6570\u636e\u8bfb\u53d6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- SegmentCache: \u7f13\u5b58\u5df2\u6253\u5f00\u7684 Segment\uff0c\u5982\u7d22\u5f15\u4fe1\u606f\u3002\n- SchemaCache: \u7f13\u5b58 Rowset Schema\u3002\n- TabletSchemaCache: \u7f13\u5b58 Tablet Schema\u3002\n- CreateTabletRRIdxCache:  \u7f13\u5b58 Create Tabelt \u7d22\u5f15\u3002\n- MowTabletVersionCache: \u7f13\u5b58 Mow Tablet Version\u3002\n- MowDeleteBitmapAggCache: \u7f13\u5b58 Mow DeleteBitmap\u3002\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Cloud Cache")),(0,r.yg)("p",null,"\u4e91\u4e0a\u4e13\u7528\u7684\u7f13\u5b58\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- CloudTabletCache: Cloud \u4e0a\u7f13\u5b58 Tablet\u3002\n- CloudTxnDeleteBitmapCache: Cloud \u4e0a\u7f13\u5b58 DeleteBitmap\u3002\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Inverted Index Cache")),(0,r.yg)("p",null,"\u52a0\u901f\u5012\u6392\u7d22\u5f15\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- InvertedIndexSearcherCache\n- InvertedIndexQueryCache\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Point Query Cache")),(0,r.yg)("p",null,"\u52a0\u901f\u70b9\u67e5\u8be2\u6267\u884c\uff0c\u4e3b\u8981\u7528\u4e8e\u65e5\u5fd7\u5206\u6790\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- PointQueryRowCache\n- PointQueryLookupConnectionCache\n")),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Other Cache")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- FileCache: \u5916\u8868\u67e5\u8be2\u548c Cloud \u4f7f\u7528\u7684\u6587\u4ef6\u7f13\u5b58\u3002\n- CommonObjLRUCache\n- LastSuccessChannelCache\n")),(0,r.yg)("h2",{id:"doris-cache-\u67e5\u770b\u65b9\u6cd5"},"Doris Cache \u67e5\u770b\u65b9\u6cd5"),(0,r.yg)("p",null,"\u6709\u4e09\u79cd\u65b9\u5f0f\u67e5\u770b Doris Cache \u76f8\u5173\u6307\u6807\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Doris BE Metrics")),(0,r.yg)("p",null,"Web \u9875\u9762 ",(0,r.yg)("inlineCode",{parentName:"p"},"http://http://{be_host}:{be_web_server_port}/metrics")," \u53ef\u4ee5\u770b\u5230 BE \u8fdb\u7a0b\u5185\u5b58\u76d1\u63a7(Metrics)\uff0c\u5305\u62ec\u6bcf\u4e2a Cache \u7684\u5bb9\u91cf\u3001\u4f7f\u7528\u7387\u3001\u5143\u7d20\u4e2a\u6570\u3001\u67e5\u627e\u548c\u547d\u4e2d\u6b21\u6570\u7b49\u6307\u6807\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'- `doris_be_cache_capacity{name="TabletSchemaCache"} 102400`\uff1aCache \u5bb9\u91cf\uff0c\u5185\u5b58\u5927\u5c0f\u6216\u8005\u5143\u7d20\u4e2a\u6570\u4e24\u79cd\u9650\u5236\u65b9\u6cd5\u3002\n- `doris_be_cache_usage{name="TabletSchemaCache"} 40838`\uff1aCache \u4f7f\u7528\u91cf\uff0c\u5185\u5b58\u5927\u5c0f\u6216\u8005\u5143\u7d20\u4e2a\u6570\uff0c\u5bf9\u5e94 Cache \u5bb9\u91cf\u7684\u9650\u5236\u3002\n- `doris_be_cache_usage_ratio{name="TabletSchemaCache"} 0.398809`\uff1aCache \u4f7f\u7528\u7387\uff0c\u7b49\u4e8e`(cache_usage / cache_capacity)`\u3002\n- `doris_be_cache_element_count{name="TabletSchemaCache"} 1628`\uff1aCache \u5143\u7d20\u4e2a\u6570\uff0c\u5f53 Cache \u5bb9\u91cf\u9650\u5236\u5143\u7d20\u4e2a\u6570\u65f6\u7b49\u4e8e Cache Usage\u3002\n- `doris_be_cache_lookup_count{name="TabletSchemaCache"} 63393`\uff1a\u67e5\u627e Cache \u7684\u6b21\u6570\u3002\n- `doris_be_cache_hit_count{name="TabletSchemaCache"} 61765`\uff1a\u67e5\u627e Cache \u65f6\u547d\u4e2d\u7684\u6b21\u6570\u3002\n- `doris_be_cache_hit_ratio{name="TabletSchemaCache"} 0.974319`\uff1a\u547d\u4e2d\u7387\uff0c\u7b49\u4e8e`(hit_count / lookup_count)`\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Doris BE Bvar")),(0,r.yg)("p",null,"Web \u9875\u9762 ",(0,r.yg)("inlineCode",{parentName:"p"},"http://http://{be_host}:{brpc_port}/vars/*cache*")," \u53ef\u4ee5\u770b\u5230\u90e8\u5206 Cache \u72ec\u6709\u7684\u4e00\u4e9b\u6307\u6807\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u672a\u6765\u4f1a\u5c06 Doris BE Metrics \u4e2d\u7684\u6307\u6807\u79fb\u52a8\u5230 Doris BE Bvar \u4e2d\u3002")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Memory Trakcer")),(0,r.yg)("p",null,"\u5b9e\u65f6\u67e5\u770b\u6bcf\u4e2a Cache \u5360\u7528\u5185\u5b58\u5927\u5c0f\uff0c\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/global-memory-analysis"},"\u5168\u5c40\u5185\u5b58\u5206\u6790"),"\uff0c\u5f53\u5b58\u5728\u5185\u5b58\u62a5\u9519\u65f6\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u627e\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," \u4e2d\uff0c\u5176\u4e2d\u5305\u542b\u5f53\u65f6\u7684 Cache \u5185\u5b58\u5927\u5c0f\u3002"),(0,r.yg)("h2",{id:"cache-\u5185\u5b58\u5206\u6790"},"Cache \u5185\u5b58\u5206\u6790"),(0,r.yg)("p",null,"Doris BE \u8fd0\u884c\u65f6\u5b58\u5728\u5404\u79cd Cache\uff0c\u901a\u5e38\u65e0\u9700\u5173\u6ce8 Cache \u5185\u5b58\uff0c\u56e0\u4e3a\u5728 BE \u8fdb\u7a0b\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u65f6\u4f1a\u89e6\u53d1\u5185\u5b58 GC \u9996\u5148\u6e05\u7406 Cache\u3002"),(0,r.yg)("p",null,"\u4f46 Cache \u8fc7\u5927\u4f1a\u589e\u52a0\u5185\u5b58 GC \u7684\u538b\u529b\uff0c\u589e\u52a0\u67e5\u8be2\u6216\u5bfc\u5165\u62a5\u9519\u8fdb\u7a0b\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u7684\u98ce\u9669\uff0c\u4ee5\u53ca BE \u8fdb\u7a0b OOM Crash \u7684\u98ce\u9669\u3002\u6240\u4ee5\u5982\u679c\u5185\u5b58\u6301\u7eed\u7d27\u5f20\uff0c\u53ef\u4ee5\u8003\u8651\u4f18\u5148\u964d\u4f4e Cache \u7684\u4e0a\u9650\u3001\u5173\u95ed Cache \u6216\u964d\u4f4e Cache entry \u7684\u5b58\u6d3b\u65f6\u95f4\uff0c\u66f4\u5c0f\u7684 Cache \u5728\u67d0\u4e9b\u573a\u666f\u4e2d\u53ef\u80fd\u4f1a\u964d\u4f4e\u67e5\u8be2\u6027\u80fd\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u901a\u5e38\u53ef\u4ee5\u88ab\u5bb9\u5fcd\uff0c\u8c03\u6574\u540e\u53ef\u4ee5\u89c2\u5bdf\u4e00\u6bb5\u65f6\u95f4\u7684\u67e5\u8be2\u548c\u5bfc\u5165\u7684\u6027\u80fd\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Doris 2.1 \u4e4b\u524d Memory GC \u8fd8\u4e0d\u5b8c\u5584\uff0c\u5185\u5b58\u4e0d\u8db3\u65f6\u53ef\u80fd\u65e0\u6cd5\u53ca\u65f6\u91ca\u653e Cache\uff0c\u5982\u679c\u5185\u5b58\u6301\u7eed\u7d27\u5f20\uff0c\u5e38\u5e38\u9700\u8981\u8003\u8651\u624b\u52a8\u964d\u4f4e Cache \u4e0a\u9650\u3002")),(0,r.yg)("p",null,"Doris 2.1.6 \u4e4b\u540e\uff0c\u5982\u679c\u5e0c\u671b\u5728 BE \u8fd0\u884c\u4e2d\u624b\u52a8\u6e05\u7406\u6240\u6709 Cache\uff0c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"curl http://{be_host}:{be_web_server_port}/api/clear_cache/all"),"\uff0c\u5c06\u8fd4\u56de\u91ca\u653e\u7684\u5185\u5b58\u5927\u5c0f\u3002"),(0,r.yg)("p",null,"\u4e0b\u9762\u5206\u6790\u4e0d\u540c Cache \u5185\u5b58\u4f7f\u7528\u591a\u7684\u60c5\u51b5\u3002"),(0,r.yg)("h3",{id:"datapagecache-\u5185\u5b58\u4f7f\u7528\u591a"},"DataPageCache \u5185\u5b58\u4f7f\u7528\u591a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris 2.1.6 \u4e4b\u540e\uff0c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"curl http://{be_host}:{be_web_server_port}/api/clear_cache/DataPageCache")," \u53ef\u4ee5\u5728 BE \u8fd0\u884c\u4e2d\u624b\u52a8\u6e05\u7406\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"curl -X POST http://{be_host}:{be_web_server_port}/api/update_config?disable_storage_page_cache=true")," \u5bf9\u6b63\u5728\u8fd0\u884c\u7684 BE \u7981\u7528 DataPageCache\uff0c\u5e76\u9ed8\u8ba4\u5728\u6700\u957f 10 \u5206\u949f\u540e\u6e05\u7a7a\uff0c\u4f46\u8fd9\u662f\u4e34\u65f6\u65b9\u6cd5\uff0cBE \u91cd\u542f\u540e DataPageCache \u5c06\u91cd\u65b0\u751f\u6548\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u82e5\u786e\u8ba4\u8981\u957f\u671f\u51cf\u5c11 DataPageCache \u7684\u5185\u5b58\u4f7f\u7528\uff0c\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879"),"\uff0c\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/be.conf")," \u4e2d\u8c03\u5c0f ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_page_cache_limit")," \u51cf\u5c0f DataPageCache \u7684\u5bb9\u91cf\uff0c\u6216\u8c03\u5c0f ",(0,r.yg)("inlineCode",{parentName:"p"},"data_page_cache_stale_sweep_time_sec")," \u51cf\u5c0f DataPageCache \u7f13\u5b58\u6709\u6548\u65f6\u957f\uff0c\u6216\u589e\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"disable_storage_page_cache=true")," \u7981\u7528 DataPageCache\uff0c\u7136\u540e\u91cd\u542f BE \u8fdb\u7a0b\u3002"))),(0,r.yg)("h3",{id:"segmentcache-\u5185\u5b58\u4f7f\u7528\u591a"},"SegmentCache \u5185\u5b58\u4f7f\u7528\u591a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris 2.1.6 \u4e4b\u540e\uff0c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"curl http://{be_host}:{be_web_server_port}/api/clear_cache/SegmentCache")," \u53ef\u4ee5\u5728 BE \u8fd0\u884c\u4e2d\u624b\u52a8\u6e05\u7406\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"curl -X POST http:/{be_host}:{be_web_server_port}/api/update_config?disable_segment_cache=true")," \u5bf9\u6b63\u5728\u8fd0\u884c\u7684 BE \u7981\u7528 SegmentCache\uff0c\u5e76\u9ed8\u8ba4\u5728\u6700\u957f 10 \u5206\u949f\u540e\u6e05\u7a7a\uff0c\u4f46\u8fd9\u662f\u4e34\u65f6\u65b9\u6cd5\uff0cBE \u91cd\u542f\u540e SegmentCache \u5c06\u91cd\u65b0\u751f\u6548\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u82e5\u786e\u8ba4\u8981\u957f\u671f\u51cf\u5c11 SegmentCache \u7684\u5185\u5b58\u4f7f\u7528\uff0c\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879"),"\uff0c\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/be.conf")," \u4e2d\u8c03\u6574 ",(0,r.yg)("inlineCode",{parentName:"p"},"segment_cache_capacity")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"segment_cache_memory_percentage")," \u51cf\u5c0f SegmentCache \u7684\u5bb9\u91cf\uff0c\u6216\u8c03\u5c0f ",(0,r.yg)("inlineCode",{parentName:"p"},"tablet_rowset_stale_sweep_time_sec")," \u51cf\u5c0f SegmentCache \u7f13\u5b58\u6709\u6548\u65f6\u957f\uff0c\u6216\u8005\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/be.conf")," \u4e2d\u589e\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"disable_segment_cache=true")," \u7981\u7528 SegmentCache \u5e76\u91cd\u542f BE \u8fdb\u7a0b\u3002"))),(0,r.yg)("h3",{id:"pkindexpagecache-\u5185\u5b58\u4f7f\u7528\u591a"},"PKIndexPageCache \u5185\u5b58\u4f7f\u7528\u591a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris 2.1.6 \u4e4b\u540e\uff0c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"curl http://{be_host}:{be_web_server_port}/api/clear_cache/PKIndexPageCache")," \u53ef\u4ee5\u5728 BE \u8fd0\u884c\u4e2d\u624b\u52a8\u6e05\u7406\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879"),"\uff0c\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/be.conf")," \u4e2d\u8c03\u5c0f ",(0,r.yg)("inlineCode",{parentName:"p"},"pk_storage_page_cache_limit")," \u51cf\u5c0f PKIndexPageCache \u7684\u5bb9\u91cf\uff0c\u6216\u8c03\u5c0f ",(0,r.yg)("inlineCode",{parentName:"p"},"pk_index_page_cache_stale_sweep_time_sec")," \u51cf\u5c0f PKIndexPageCache \u7f13\u5b58\u6709\u6548\u65f6\u957f\uff0c\u6216\u8005\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/be.conf")," \u4e2d\u589e\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"disable_pk_storage_page_cache=true")," \u7981\u7528 PKIndexPageCache\uff0c\u7136\u540e\u91cd\u542f BE \u8fdb\u7a0b\u3002"))))}h.isMDXComponent=!0}}]);