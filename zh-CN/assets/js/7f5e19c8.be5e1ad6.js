"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[435405],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},125033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=t(58168),a=(t(296540),t(15680));const l={title:"\u914d\u7f6e\u90e8\u7f72 FE",language:"zh-CN"},o=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe",id:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe",title:"\u914d\u7f6e\u90e8\u7f72 FE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe",draft:!1,tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u90e8\u7f72 FE",language:"zh-CN"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u90e8\u7f72 Metaservice",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms"},next:{title:"\u914d\u7f6e\u90e8\u7f72\u8ba1\u7b97\u7ec4",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-cg"}},p={},i=[{value:"\u914d\u7f6e\u8d44\u6e90",id:"\u914d\u7f6e\u8d44\u6e90",level:2},{value:"\u914d\u7f6e\u670d\u52a1\u7684\u8ba1\u7b97\u8d44\u6e90",id:"\u914d\u7f6e\u670d\u52a1\u7684\u8ba1\u7b97\u8d44\u6e90",level:3},{value:"\u914d\u7f6e\u670d\u52a1\u5b58\u50a8\u8d44\u6e90",id:"\u914d\u7f6e\u670d\u52a1\u5b58\u50a8\u8d44\u6e90",level:3},{value:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6",id:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6",level:2}],c={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"FE \u5728\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\u4e3b\u8981\u8d1f\u8d23 SQL \u89e3\u6790\u76f8\u5173\u5de5\u4f5c\uff0c\u4e5f\u8d1f\u8d23\u8ddf\u5143\u6570\u636e\u7ba1\u7406\u7ec4\u4ef6 MS \u4ea4\u4e92\u3002FE \u901a\u5e38\u60c5\u51b5\u4e0b\u53ea\u9700\u90e8\u7f72 2 \u4e2a\u670d\u52a1\uff0creplicas \u8bbe\u7f6e\u4e3a 2 \u5373\u53ef\u3002\u6700\u7b80\u5355\u90e8\u7f72\u6a21\u5f0f\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    image: {feImage}\n    replicas: 2\n")),(0,a.yg)("p",null,"\u914d\u7f6e\u597d\u7248\u672c\u5927\u4e8e 3.0.2 \u7684\u9700\u8981\u4f7f\u7528\u7684 FE \u670d\u52a1\u955c\u50cf\uff0c\u5c06\u914d\u7f6e\u66f4\u65b0\u5230\u9700\u8981",(0,a.yg)("a",{parentName:"p",href:"install-quickstart#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4"},"\u90e8\u7f72\u7684\u5b58\u7b97\u5206\u79bb\u8d44\u6e90"),"\u4e2d\u3002"),(0,a.yg)("h2",{id:"\u914d\u7f6e\u8d44\u6e90"},"\u914d\u7f6e\u8d44\u6e90"),(0,a.yg)("h3",{id:"\u914d\u7f6e\u670d\u52a1\u7684\u8ba1\u7b97\u8d44\u6e90"},"\u914d\u7f6e\u670d\u52a1\u7684\u8ba1\u7b97\u8d44\u6e90"),(0,a.yg)("p",null,"\u4e3a FE \u670d\u52a1\u6dfb\u52a0\u8ba1\u7b97\u8d44\u6e90\u914d\u7f6e\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u590d\u7528 K8s \u7684 requests \u548c limits \u6765\u914d\u7f6e\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u8d44\u6e90\u4f7f\u7528\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528 4c 4Gi \u6765\u914d\u7f6e FE \u670d\u52a1\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n")),(0,a.yg)("p",null,"\u4e0a\u8ff0\u6837\u4f8b\u5c55\u793a\u5982\u4f55\u5c06 FE \u670d\u52a1\u7684\u8ba1\u7b97\u8d44\u6e90\u914d\u7f6e\u4e3a 4c 4Gi \u7684\u6a21\u5f0f\u3002\u914d\u7f6e\u597d FE \u5e0c\u671b\u4f7f\u7528\u7684\u8d44\u6e90\uff0c\u5c06\u914d\u7f6e\u4fe1\u606f\u66f4\u65b0\u5230",(0,a.yg)("a",{parentName:"p",href:"install-quickstart#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4"},"\u9700\u8981\u90e8\u7f72\u7684\u5b58\u7b97\u5206\u79bb\u8d44\u6e90"),"\u4e2d\u3002"),(0,a.yg)("h3",{id:"\u914d\u7f6e\u670d\u52a1\u5b58\u50a8\u8d44\u6e90"},"\u914d\u7f6e\u670d\u52a1\u5b58\u50a8\u8d44\u6e90"),(0,a.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4 FE \u670d\u52a1\u662f\u6709\u72b6\u6001\u670d\u52a1\uff0c\u5728 K8s \u90e8\u7f72\u6a21\u5f0f\u4e0b\u9700\u8981\u6302\u8f7d\u76f8\u5e94\u7684\u78c1\u76d8\u6765\u5b58\u50a8 FE \u670d\u52a1\u9700\u8981\u6301\u4e45\u5316\u7684\u5b58\u50a8\u4fe1\u606f\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u4e3a FE \u914d\u7f6e\u4f7f\u7528\u9ed8\u8ba4 ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/storage/storage-classes/"},"StorageClass")," \u6765\u63d0\u4f9b\u5b58\u50a8\u670d\u52a1\u7684\u4f7f\u7528\u6837\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    persistentVolume:\n      persistentVolumeClaimSpec:\n        #storageClassName\uff1a{storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 200Gi\n")),(0,a.yg)("p",null,"\u4e0a\u8ff0\u6837\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4e3a FE \u670d\u52a1\u6dfb\u52a0 200Gi \u7684\u5b58\u50a8\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"{storageClassName}")," \u4e3a\u9700\u8981\u4f7f\u7528\u7684 StorageClass \u7684\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u586b\u5199\u5c06\u4f7f\u7528\u96c6\u7fa4\u9ed8\u8ba4\u7684 StorageClass \u3002\u6309\u4e0a\u8ff0\u6a21\u5f0f\u914d\u7f6e\u597d FE \u670d\u52a1\u9700\u8981\u4f7f\u7528\u7684\u5b58\u50a8\u4fe1\u606f\u540e\uff0c\u5c06\u914d\u7f6e\u66f4\u65b0\u5230",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4"},"\u9700\u8981\u90e8\u7f72\u7684\u5b58\u7b97\u5206\u79bb\u8d44\u6e90"),"\u4e2d\u3002"),(0,a.yg)("h2",{id:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"},"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"),(0,a.yg)("p",null,"\u5728 K8s \u90e8\u7f72\u4e2d\u53ef\u4f7f\u7528 ConfigMap \u4e3a FE \u670d\u52a1\u6302\u8f7d\u5b9a\u5236\u5316\u7684\u914d\u7f6e\u6765\u542f\u52a8 FE \u670d\u52a1\u3002\u5047\u5b9a\u4f7f\u7528\u5982\u4e0b\u914d\u7f6e\u542f\u52a8 FE \u670d\u52a1\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fe-configmap\n  namespace: default\n  labels:\n    app.kubernetes.io/component: fe\ndata:\n  fe.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n    # Log dir\n    LOG_DIR = ${DORIS_HOME}/log\n    # For jdk 17, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_17="-Djavax.security.auth.useSubjectCredsOnly=false -Xmx8192m -Xms8192m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$LOG_DIR -Xlog:gc*:$LOG_DIR/fe.gc.log.$CUR_DATE:time,uptime:filecount=10,filesize=50M --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens java.base/jdk.internal.ref=ALL-UNNAMED"\n    # INFO, WARN, ERROR, FATAL\n    sys_log_level = INFO\n    # NORMAL, BRIEF, ASYNC\n    sys_log_mode = NORMAL\n    # Default dirs to put jdbc drivers,default value is ${DORIS_HOME}/jdbc_drivers\n    # jdbc_drivers_dir = ${DORIS_HOME}/jdbc_drivers\n    http_port = 8030\n    rpc_port = 9020\n    query_port = 9030\n    edit_log_port = 9010\n    enable_fqdn_mode=true\n')),(0,a.yg)("p",null,"\u5728 K8s \u90e8\u7f72\u4e2d\uff0c\u5fc5\u987b\u8bbe\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode=true")," \uff0cFE \u4f7f\u7528\u4e0a\u8ff0 ConfigMap \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u8d44\u6e90\u6837\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  feSpec:\n    replicas: 2\n    configMaps:\n    - name: fe-configmap\n")),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u8d44\u6e90\u4e2d\uff0c\u914d\u7f6e\u6302\u8f7d ConfigMap \u7684 configMaps \u662f\u4e00\u4e2a\u6570\u7ec4\u3002\u6bcf\u4e00\u4e2a\u5143\u7d20\u7684 name \u8868\u793a\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u7684 ConfigMap \u540d\u79f0\u3002"),(0,a.yg)("p",null,"\u6309\u4e0a\u8ff0\u6a21\u5f0f\u914d\u7f6e\u597d FE \u670d\u52a1\u9700\u8981\u4f7f\u7528\u7684 ConfigMap \u4fe1\u606f\uff0c\u5c06\u914d\u7f6e\u66f4\u65b0\u5230",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4"},"\u9700\u8981\u90e8\u7f72\u7684\u5b58\u7b97\u5206\u79bb\u8d44\u6e90"),"\u4e2d\u3002"),(0,a.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"K8s \u90e8\u7f72\u4e2d\uff0c\u4f7f\u7528 ConfigMap \u6302\u8f7d\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u65e0\u9700\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"li"},"meta_service_endpoint"),"\u3001",(0,a.yg)("inlineCode",{parentName:"li"},"deploy_mode")," \u4ee5\u53ca ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster_id")," \u914d\u7f6e\uff0cDoris-Operator \u76f8\u5173\u670d\u52a1\u4f1a\u81ea\u52a8\u6dfb\u52a0\u3002"),(0,a.yg)("li",{parentName:"ol"},"K8s \u90e8\u7f72\u4e2d\uff0c\u4f7f\u7528 ConfigMap \u6302\u8f7d\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u5fc5\u987b\u8bbe\u5b9a ",(0,a.yg)("inlineCode",{parentName:"li"},"enable_fqdn_mode=true"),"\u3002"))))}d.isMDXComponent=!0}}]);