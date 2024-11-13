"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[200803],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},264397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"Service expansion and contraction",language:"en"},s=void 0,i={unversionedId:"install/cluster-deployment/k8s-deploy/expansion-and-contraction",id:"version-2.1/install/cluster-deployment/k8s-deploy/expansion-and-contraction",title:"Service expansion and contraction",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/install/cluster-deployment/k8s-deploy/expansion-and-contraction.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/expansion-and-contraction",permalink:"/docs/install/cluster-deployment/k8s-deploy/expansion-and-contraction",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Service expansion and contraction",language:"en"},sidebar:"docs",previous:{title:"Configuring the Username and Password for the Management Cluster",permalink:"/docs/install/cluster-deployment/k8s-deploy/init-pwd"},next:{title:"How to enter the container when the service crashes",permalink:"/docs/install/cluster-deployment/k8s-deploy/debug-crash"}},l={},c=[{value:"Get DorisCluster resources",id:"get-doriscluster-resources",level:2},{value:"Expansion and contraction",id:"expansion-and-contraction",level:2},{value:"FE expansion",id:"fe-expansion",level:3},{value:"BE expansion",id:"be-expansion",level:3},{value:"Service contraction",id:"service-contraction",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The expansion and contraction of Doris on K8S can be achieved by modifying the replicas field of the corresponding component of the DorisCluster resource. Modifications can be made by directly editing the corresponding resources, or by using commands."),(0,a.yg)("h2",{id:"get-doriscluster-resources"},"Get DorisCluster resources"),(0,a.yg)("p",null,"Use the command ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl --namespace {namespace} get doriscluster")," to get the name of the deployed DorisCluster (referred to as dcr) resource. In this article, we use doris as the namespace."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl --namespace doris get doriscluster\nNAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")),(0,a.yg)("h2",{id:"expansion-and-contraction"},"Expansion and contraction"),(0,a.yg)("p",null,"All K8S operation and maintenance operations are performed by modifying the resources to the final state, and the Operator service automatically completes the operation and maintenance. For expansion and contraction operations, you can directly enter the edit mode to modify the replicas value of the corresponding spec through ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl --namespace {namespace} edit doriscluster {dcr_name}"),". After saving and exiting, Doris-Operator completes the operation and maintenance. You can also use the following commands to implement different components. Expansion and contraction."),(0,a.yg)("h3",{id:"fe-expansion"},"FE expansion"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Check the current number of FE services")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=fe"\nNAME                       READY   STATUS    RESTARTS       AGE\ndoriscluster-sample-fe-0   1/1     Running   0              10d\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Expansion FE")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris patch doriscluster doriscluster-sample --type merge --patch \'{"spec":{"feSpec":{"replicas":3}}}\'\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Check expansion results")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=fe"\nNAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-2   1/1     Running   0          9m37s\ndoriscluster-sample-fe-1   1/1     Running   0          9m37s\ndoriscluster-sample-fe-0   1/1     Running   0          8m49s\n')),(0,a.yg)("h3",{id:"be-expansion"},"BE expansion"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Check the current number of BE services")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=be"\nNAME                       READY   STATUS    RESTARTS      AGE\ndoriscluster-sample-be-0   1/1     Running   0             3d2h\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Expansion BE")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris patch doriscluster doriscluster-sample --type merge --patch \'{"spec":{"beSpec":{"replicas":3}}}\'\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Check expansion results")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=be"\nNAME                       READY   STATUS    RESTARTS      AGE\ndoriscluster-sample-be-0   1/1     Running   0             3d2h\ndoriscluster-sample-be-2   1/1     Running   0             12m\ndoriscluster-sample-be-1   1/1     Running   0             12m\n')),(0,a.yg)("h3",{id:"service-contraction"},"Service contraction"),(0,a.yg)("p",null,"Regarding the issue of node shrinkage, Doris-Operator currently does not support the safe shutdown of nodes. Here, the purpose of reducing FE or BE can still be achieved by reducing the replicas attribute of the cluster component. Here, the node is directly stopped to achieve node shutdown. line, the current version of Doris-Operator fails to implement ",(0,a.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},"decommission")," and goes offline after safely transferring the copy.  This may cause some problems and precautions as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If the BE node is rashly taken offline when there is a single copy of the table, there will definitely be data loss, so avoid this operation as much as possible."),(0,a.yg)("li",{parentName:"ul"},"FE Follower nodes try to avoid being offline at will, which may cause metadata damage and affect services."),(0,a.yg)("li",{parentName:"ul"},"FE Observer type nodes can be taken offline at will without risk."),(0,a.yg)("li",{parentName:"ul"},"The CN node does not hold a copy of the data and can be offline at will. However, the remote data cache existing on the CN node will be lost, resulting in a certain performance regression in data query within a short period of time.")))}u.isMDXComponent=!0}}]);