"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[872592],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},783136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const o={title:"\u914d\u7f6e\u90e8\u7f72 Metaservice",language:"zh-CN"},l=void 0,i={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms",id:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms",title:"\u914d\u7f6e\u90e8\u7f72 Metaservice",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms",draft:!1,tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u90e8\u7f72 Metaservice",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u7f72 FoundationDB",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb"},next:{title:"\u914d\u7f6e\u90e8\u7f72 FE",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe"}},p={},s=[{value:"\u6700\u7b80\u914d\u7f6e",id:"\u6700\u7b80\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u8d44\u6e90",id:"\u914d\u7f6e\u8d44\u6e90",level:2},{value:"\u914d\u7f6e FDB",id:"\u914d\u7f6e-fdb",level:2},{value:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6",id:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6",level:2}],c={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"MS \u662f Doris \u5b58\u7b97\u5206\u79bb\u7ec4\u4ef6 MetaService \u7684\u7b80\u79f0\uff0c\u63d0\u4f9b\u5143\u6570\u636e\u7ba1\u7406\u548c\u67e5\u8be2\u670d\u52a1\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedClulster")," \u4e2d\u914d\u7f6e\u5b57\u6bb5\u4e3a metaService\u3002"),(0,r.yg)("h2",{id:"\u6700\u7b80\u914d\u7f6e"},"\u6700\u7b80\u914d\u7f6e"),(0,r.yg)("p",null,"MS \u670d\u52a1\u5c5e\u4e8e\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u901a\u5e38\u91c7\u7528\u4e3b\u5907\u6a21\u5f0f\u90e8\u7f72\u3002\u6700\u7b80\u5355\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  metaService:\n    image: {msImage}\n    fdb:\n      configMapNamespaceName:\n        name: {foundationdbConfigmap}\n        namespace: {namespace}\n")),(0,r.yg)("p",null,"\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"{msImage}")," \u4e3a\u60f3\u8981\u90e8\u7f72\u7684 MS \u670d\u52a1\u7684\u7248\u672c\u3002\n",(0,r.yg)("inlineCode",{parentName:"p"},"{foundationdbConfigmap}")," \u4e3a K8s \u90e8\u7f72\u7684 FDB \u670d\u52a1\u63d0\u4f9b\u7684\u8bbf\u95ee configmap \u3002\n",(0,r.yg)("inlineCode",{parentName:"p"},"{namespace}")," \u4e3a K8s \u90e8\u7f72\u7684 FDB \u670d\u52a1\u6240\u5728\u7684 Namespace\u3002"),(0,r.yg)("h2",{id:"\u914d\u7f6e\u8d44\u6e90"},"\u914d\u7f6e\u8d44\u6e90"),(0,r.yg)("p",null,"\u4e3a MS \u670d\u52a1\u6dfb\u52a0\u8d44\u6e90\u4f7f\u7528\u9650\u5236\u3002\u4ee5 4c 4Gi \u914d\u7f6e\u4e3a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  metaService:\n    image: {msImage}\n    replicas: 2\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n")),(0,r.yg)("p",null,"\u5c06\u4fee\u6539\u540e\u7684\u914d\u7f6e\u66f4\u65b0\u5230\u9700\u8981",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4"},"\u90e8\u7f72\u7684\u5b58\u7b97\u5206\u79bb\u5143\u6570\u636e\u7ba1\u7406\u8d44\u6e90"),"\u4e2d\u3002"),(0,r.yg)("h2",{id:"\u914d\u7f6e-fdb"},"\u914d\u7f6e FDB"),(0,r.yg)("p",null,"FDB \u96c6\u7fa4\u5728\u540c\u4e00\u5957 K8s \u96c6\u7fa4\u4e0a\u642d\u5efa\uff0c\u5e76\u4e14\u80fd\u591f\u83b7\u53d6\u5176\u6240\u5728\u7684 namespace \u548c configmap\uff0c\u5219\u4f7f\u7528\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  metaService:\n    image: {msImage}\n    fdb:\n      configMapNamespaceName:\n        name: {foundationdbConfigmap}\n        namespace: {namespace}\n")),(0,r.yg)("p",null,"\u82e5 FDB \u662f\u7269\u7406\u673a\u90e8\u7f72\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4e3a metaService \u914d\u7f6e FDB endpoint\uff08FDB \u7684\u8bbf\u95ee\u5b57\u7b26\u4e32\uff09\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0 FDB \u7684\u8bbf\u95ee\u3002\n\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  metaService:\n    image: {msImage}\n    fdb:\n      address: {fdb_endpoint}\n")),(0,r.yg)("h2",{id:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"},"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"),(0,r.yg)("p",null,"K8s \u4e0a\u901a\u8fc7 ConfigMap \u6302\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002Doris-Operator \u5bf9\u4e8e\u5b58\u7b97\u5206\u79bb\u7ec4\u4ef6\u4e4b\u95f4\u76f8\u4e92\u611f\u77e5\u7684\u914d\u7f6e\u8fdb\u884c\u4e86\u81ea\u52a8\u5316\u5904\u7406\uff0c\u5728\u90e8\u7f72 MS \u670d\u52a1\u4f7f\u7528\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6\u65f6 FDB \u7684\u76f8\u5173\u7684\u914d\u7f6e\u8bf7\u4e0d\u8981\u914d\u7f6e\u3002"),(0,r.yg)("p",null,"\u4f7f\u7528 ConfigMap \u6302\u8f7d\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72 MS \u670d\u52a1\uff1a"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ConfigMap"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  doris_cloud.conf: |\n    # // meta_service\n    brpc_listen_port = 5000\n    brpc_num_threads = -1\n    brpc_idle_timeout_sec = 30\n    http_token = greedisgood9999\n\n    # // doris txn config\n    label_keep_max_second = 259200\n    expired_txn_scan_key_nums = 1000\n\n    # // logging\n    log_dir = ./log/\n    # info warn error\n    log_level = info\n    log_size_mb = 1024\n    log_filenum_quota = 10\n    log_immediate_flush = false\n    # log_verbose_modules = *\n\n    # //max stage num\n    max_num_stages = 40\nkind: ConfigMap\nmetadata:\n  name: doris-metaservice\n  namespace: default\n")),(0,r.yg)("p",null,"\u4f7f\u7528\u4e0a\u8ff0 ConfigMap \u7684 MS \u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  metaService:\n    image: {msImage}\n    configMaps:\n    - name: doris-metaservice\n      mountPath: /etc/doris\n")),(0,r.yg)("p",null,"\u5b9e\u9645\u90e8\u7f72\u4e2d\uff0c\u6309\u7167\u9700\u8981\u914d\u7f6e ConfigMap \u7684\u540d\u79f0\u4ee5\u53ca\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u5c06\u914d\u7f6e\u4fe1\u606f\u6309\u7167\u4e0a\u8ff0\u6837\u4f8b\u683c\u5f0f\u914d\u7f6e\u5230\u9700\u8981\u90e8\u7f72\u7684",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4"},"\u5b58\u7b97\u5206\u79bb\u5143\u6570\u636e\u7ba1\u7406\u8d44\u6e90"),"\u4e2d\u3002MS \u670d\u52a1\u4f7f\u7528\u7684\u542f\u52a8\u914d\u7f6e\u6587\u4ef6\u540d\u79f0 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris_cloud.conf")," \uff0c \u56e0\u6b64\u6302\u8f7d\u542f\u52a8\u914d\u7f6e\u7684 ConfigMap \u7684 key \u4e5f\u5fc5\u987b\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"doris_cloud.conf")," \u3002\u542f\u52a8\u914d\u7f6e\u5fc5\u987b\u6302\u8f7d\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/doris")," \u76ee\u5f55\u4e0b\uff0c\u5373 mountPath \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/doris")," \u3002"),(0,r.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"MS \u670d\u52a1\u9700\u8981\u4f7f\u7528 FDB \u4f5c\u4e3a\u540e\u7aef\u5143\u6570\u636e\u5b58\u50a8\uff0c\u90e8\u7f72 MS \u670d\u52a1\u5fc5\u987b\u90e8\u7f72 FDB \u670d\u52a1\u3002")))}d.isMDXComponent=!0}}]);