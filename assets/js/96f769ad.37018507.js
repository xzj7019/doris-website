"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[258495],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,h=c["".concat(p,".").concat(y)]||c[y]||m[y]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},280445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(296540),r(15680));const i={title:"Release 2.0.14",language:"en"},o=void 0,l={unversionedId:"releasenotes/v2.0/release-2.0.14",id:"releasenotes/v2.0/release-2.0.14",title:"Release 2.0.14",description:"\x3c!--",source:"@site/docs/releasenotes/v2.0/release-2.0.14.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.14",permalink:"/docs/dev/releasenotes/v2.0/release-2.0.14",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0.14",language:"en"},sidebar:"releasenotes",previous:{title:"Release 2.0.15",permalink:"/docs/dev/releasenotes/v2.0/release-2.0.15"},next:{title:"Release 2.0.13",permalink:"/docs/dev/releasenotes/v2.0/release-2.0.13"}},p={},s=[{value:"1 New features",id:"1-new-features",level:2},{value:"2 Improvements",id:"2-improvements",level:2},{value:"Credits",id:"credits",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Thanks to our community users and developers, about 110 improvements and bug fixes have been made in Doris 2.0.14 version"),(0,a.yg)("h2",{id:"1-new-features"},"1 New features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Adds a REST interface to retrieve the most recent query profile: ",(0,a.yg)("inlineCode",{parentName:"li"},"curl http://user:password@127.0.0.1:8030/api/profile/text")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/38268"},"#38268"))),(0,a.yg)("h2",{id:"2-improvements"},"2 Improvements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Optimizes the primary key point query performance for MOW tables with sequence columns ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38287"},"#38287"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Enhances the performance of inverted index queries with many conditions  ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35346"},"#35346"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Automatically enables the   ",(0,a.yg)("inlineCode",{parentName:"p"},"support_phrase")," option when creating a tokenized inverted index to accelerate  ",(0,a.yg)("inlineCode",{parentName:"p"},"match_phrase")," phrase queries ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37949"},"#37949"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supports simplified SQL hints, for example: ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT /*+ query_timeout(3000) */ * FROM t;")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37720"},"#37720"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Automatically retries reading from object storage when encountering a   ",(0,a.yg)("inlineCode",{parentName:"p"},"429")," error to improve stability ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35396"},"#35396"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"LEFT SEMI / ANTI JOIN terminates subsequent matching execution upon matching a qualifying data row to enhance performance. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34703"},"#34703"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Prevents coredump when returning illegal data to MySQL results. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/28069"},"#28069"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Unifies the output of type names in lowercase to maintain compatibility with MySQL and be more friendly to BI tools. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38521"},"#38521")))),(0,a.yg)("p",null,"You can access the full list through the GitHub ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.13...2.0.14"},"link")," , with the key features and improvements highlighted below."),(0,a.yg)("h2",{id:"credits"},"Credits"),(0,a.yg)("p",null,"Thanks all who contribute to this release:"),(0,a.yg)("p",null,"@ByteYue, @CalvinKirs, @GoGoWen, @HappenLee, @Jibing-Li, @Lchangliang, @LiBinfeng-01, @Mryange, @XieJiann, @Yukang-Lian, @Yulei-Yang, @airborne12, @amorynan, @biohazard4321, @cambyzju, @csun5285, @eldenmoon, @englefly, @freemandealer, @hello-stephen, @hubgeter, @kaijchen, @liaoxin01, @luwei16, @morningman, @morrySnow, @mymeiyi, @qidaye, @sollhui, @starocean999, @w41ter, @wuwenchi, @xiaokang, @xy720, @yujun777, @zclllyybb, @zddr, @zhangstar333, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"))}m.isMDXComponent=!0}}]);