"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[965620],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>d});var n=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function y(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),g=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=g(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=y(e,["components","mdxType","originalType","parentName"]),m=g(t),u=l,d=m["".concat(p,".").concat(u)]||m[u]||N[u]||r;return t?n.createElement(d,i(i({ref:a},o),{},{components:t})):n.createElement(d,i({ref:a},o))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var y={};for(var p in a)hasOwnProperty.call(a,p)&&(y[p]=a[p]);y.originalType=e,y[m]="string"==typeof e?e:l,i[1]=y;for(var g=2;g<r;g++)i[g]=t[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},715273:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>y,toc:()=>g});var n=t(58168),l=(t(296540),t(15680));const r={title:"MySQL",language:"zh-CN"},i=void 0,y={unversionedId:"lakehouse/database/mysql",id:"lakehouse/database/mysql",title:"MySQL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/database/mysql.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/mysql",permalink:"/zh-CN/docs/dev/lakehouse/database/mysql",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL",language:"zh-CN"},sidebar:"docs",previous:{title:"JDBC Catalog",permalink:"/zh-CN/docs/dev/lakehouse/database/jdbc"},next:{title:"PostgreSQL",permalink:"/zh-CN/docs/dev/lakehouse/database/postgresql"}},p={},g=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 MySQL",id:"\u8fde\u63a5-mysql",level:2},{value:"\u8fde\u63a5\u5b89\u5168",id:"\u8fde\u63a5\u5b89\u5168",level:3},{value:"\u5c42\u7ea7\u6620\u5c04",id:"\u5c42\u7ea7\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u6620\u5c04",id:"\u7c7b\u578b\u6620\u5c04",level:2},{value:"MySQL \u5230 Doris \u7c7b\u578b\u6620\u5c04",id:"mysql-\u5230-doris-\u7c7b\u578b\u6620\u5c04",level:3},{value:"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406",id:"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u8c13\u8bcd\u4e0b\u63a8",id:"\u8c13\u8bcd\u4e0b\u63a8",level:3},{value:"\u884c\u6570\u9650\u5236",id:"\u884c\u6570\u9650\u5236",level:3},{value:"\u8f6c\u4e49\u5b57\u7b26",id:"\u8f6c\u4e49\u5b57\u7b26",level:3},{value:"\u8fde\u63a5\u5f02\u5e38\u6392\u67e5",id:"\u8fde\u63a5\u5f02\u5e38\u6392\u67e5",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],o={toc:g},m="wrapper";function N(e){let{components:a,...t}=e;return(0,l.yg)(m,(0,n.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris JDBC Catalog \u652f\u6301\u901a\u8fc7\u6807\u51c6 JDBC \u63a5\u53e3\u8fde\u63a5 MySQL \u6570\u636e\u5e93\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e MySQL \u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,l.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,l.yg)("p",null,"\u8981\u8fde\u63a5\u5230 MySQL \u6570\u636e\u5e93\uff0c\u60a8\u9700\u8981"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL 5.7, 8.0 \u6216\u66f4\u9ad8\u7248\u672c")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL \u6570\u636e\u5e93\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,l.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.mysql/mysql-connector-j"},"Maven \u4ed3\u5e93"),"\u4e0b\u8f7d\u6700\u65b0\u6216\u6307\u5b9a\u7248\u672c\u7684 MySQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002",(0,l.yg)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 MySQL Connector/J 8.0.31 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Doris \u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u548c MySQL \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 3306\u3002"))),(0,l.yg)("h2",{id:"\u8fde\u63a5-mysql"},"\u8fde\u63a5 MySQL"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mysql PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:mysql://example.net:3306",\n    "driver_url" = "mysql-connector-j-8.3.0.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n)\n')),(0,l.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,l.yg)("p",{parentName:"admonition"},(0,l.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u5b9a\u4e49\u8981\u4f20\u9012\u7ed9 MySQL JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u53c2\u6570\u3002\n\u652f\u6301\u7684 URL \u7684\u53c2\u6570\u53ef\u5728 ",(0,l.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html"},"MySQL \u5f00\u53d1\u6307\u5357")," \u4e2d\u627e\u5230\u3002")),(0,l.yg)("h3",{id:"\u8fde\u63a5\u5b89\u5168"},"\u8fde\u63a5\u5b89\u5168"),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u6570\u636e\u6e90\u4e0a\u5b89\u88c5\u7684\u5168\u5c40\u4fe1\u4efb\u8bc1\u4e66\u914d\u7f6e\u4e86 TLS\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u5c06\u53c2\u6570\u9644\u52a0\u5230\u5728 jdbc_url \u5c5e\u6027\u4e2d\u8bbe\u7f6e\u7684 JDBC \u8fde\u63a5\u5b57\u7b26\u4e32\u6765\u542f\u7528\u96c6\u7fa4\u548c\u6570\u636e\u6e90\u4e4b\u95f4\u7684 TLS\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u4e8e MySQL Connector/J 8.0 \u7248\uff0c\u4f7f\u7528 sslMode \u53c2\u6570\u901a\u8fc7 TLS \u4fdd\u62a4\u8fde\u63a5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a PREFERRED\uff0c\u5982\u679c\u670d\u52a1\u5668\u542f\u7528\uff0c\u5b83\u53ef\u4ee5\u4fdd\u62a4\u8fde\u63a5\u3002\u60a8\u8fd8\u53ef\u4ee5\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a REQUIRED\uff0c\u5982\u679c\u672a\u5efa\u7acb TLS\uff0c\u5219\u4f1a\u5bfc\u81f4\u8fde\u63a5\u5931\u8d25\u3002"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u5728\u901a\u8fc7\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u4e2d\u6dfb\u52a0 sslMode \u53c2\u6570\u6765\u914d\u7f6e\u5b83\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"\u201cjdbc_url\u201d=\u201cjdbc:mysql://example.net:3306/?sslMode=REQUIRED\u201d\n")),(0,l.yg)("p",null,"\u6709\u5173 TLS \u914d\u7f6e\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/en/connector-j-connp-props-security.html#cj-conn-prop_sslMode"},"MySQL JDBC \u5b89\u5168\u6587\u6863"),"\u3002"),(0,l.yg)("h2",{id:"\u5c42\u7ea7\u6620\u5c04"},"\u5c42\u7ea7\u6620\u5c04"),(0,l.yg)("p",null,"\u6620\u5c04 MySQL \u65f6\uff0cDoris \u7684\u4e00\u4e2a Database \u5bf9\u5e94\u4e8e MySQL \u4e2d\u7684\u4e00\u4e2a Database\u3002\u800c Doris \u7684 Database \u4e0b\u7684 Table \u5219\u5bf9\u5e94\u4e8e MySQL \u4e2d\uff0c\u8be5 Database \u4e0b\u7684 Tables\u3002\u5373\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,l.yg)("th",{parentName:"tr",align:"center"},"MySQL"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,l.yg)("td",{parentName:"tr",align:"center"},"MySQL Server")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,l.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,l.yg)("h2",{id:"\u7c7b\u578b\u6620\u5c04"},"\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("h3",{id:"mysql-\u5230-doris-\u7c7b\u578b\u6620\u5c04"},"MySQL \u5230 Doris \u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"MYSQL Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MEDIUMINT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UNSIGNED TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UNSIGNED MEDIUMINT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UNSIGNED INT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UNSIGNED BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UNSIGNED DECIMAL(p,s)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(p+1,s) / STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"YEAR"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SET"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ENUM"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIT"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN/STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYTEXT,TEXT,MEDIUMTEXT,LONGTEXT"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BLOB,MEDIUMBLOB,LONGBLOB,TINYBLOB"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY,VARBINARY"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Other"),(0,l.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"Doris \u4e0d\u652f\u6301 UNSIGNED \u6570\u636e\u7c7b\u578b\uff0c\u6240\u4ee5 UNSIGNED \u6570\u636e\u7c7b\u578b\u4f1a\u88ab\u6620\u5c04\u4e3a Doris \u5bf9\u5e94\u5927\u4e00\u4e2a\u6570\u91cf\u7ea7\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,l.yg)("li",{parentName:"ul"},"UNSIGNED DECIMAL(p,s) \u4f1a\u88ab\u6620\u5c04\u4e3a DECIMAL(p+1,s) \u6216 STRING\u3002\u6ce8\u610f\u5728\u6b64\u7c7b\u578b\u88ab\u6620\u5c04\u4e3a String \u65f6\uff0c\u53ea\u80fd\u652f\u6301\u67e5\u8be2\uff0c\u4e0d\u80fd\u5bf9 MySQL \u8fdb\u884c\u5199\u5165\u64cd\u4f5c\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4e3a\u4e86\u66f4\u597d\u7684\u8bfb\u53d6\u4e0e\u8ba1\u7b97\u6027\u80fd\u5747\u8861\uff0cDoris \u4f1a\u5c06 JSON \u7c7b\u578b\u6620\u5c04\u4e3a STRING \u7c7b\u578b\u3002"),(0,l.yg)("li",{parentName:"ul"},"Doris \u4e0d\u652f\u6301 BIT \u7c7b\u578b\uff0cBIT \u7c7b\u578b\u4f1a\u5728 BIT(1) \u65f6\u88ab\u6620\u5c04\u4e3a BOOLEAN\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u6620\u5c04\u4e3a STRING\u3002"),(0,l.yg)("li",{parentName:"ul"},"Doris \u4e0d\u652f\u6301 YEAR \u7c7b\u578b\uff0cYEAR \u7c7b\u578b\u4f1a\u88ab\u6620\u5c04\u4e3a SMALLINT\u3002"),(0,l.yg)("li",{parentName:"ul"},"Doris \u4e0d\u652f\u6301 TIME \u7c7b\u578b\uff0cTIME \u7c7b\u578b\u4f1a\u88ab\u6620\u5c04\u4e3a STRING\u3002"))),(0,l.yg)("h3",{id:"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406"},"\u65f6\u95f4\u6233\u7c7b\u578b\u5904\u7406"),(0,l.yg)("p",null,"\u5728 JDBC \u7c7b\u578b Catalog \u8bfb\u53d6\u6570\u636e\u65f6\uff0cBE \u7684 Java \u90e8\u5206\u4f7f\u7528 JVM \u65f6\u533a\u3002JVM \u65f6\u533a\u9ed8\u8ba4\u4e3a BE \u90e8\u7f72\u673a\u5668\u7684\u65f6\u533a\uff0c\u8fd9\u4f1a\u5f71\u54cd JDBC \u8bfb\u53d6\u6570\u636e\u65f6\u7684\u65f6\u533a\u8f6c\u6362\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u65f6\u533a\u4e00\u81f4\u6027\uff0c\u5efa\u8bae\u5728 be.conf \u7684 JAVA_OPTS \u4e2d\u8bbe\u7f6e JVM \u65f6\u533a\u4e0e Doris session \u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"time_zone")," \u4e00\u81f4\u3002"),(0,l.yg)("p",null,"\u8bfb\u53d6 MySQL \u7684 TIMESTAMP \u7c7b\u578b\u65f6\uff0c\u8bf7\u5728 JDBC URL \u4e2d\u6dfb\u52a0\u53c2\u6570\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"connectionTimeZone=LOCAL")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"forceConnectionTimeZoneToSession=true"),"\u3002\u8fd9\u4e9b\u53c2\u6570\u9002\u7528\u4e8e MySQL Connector/J 8 \u4ee5\u4e0a\u7248\u672c\uff0c\u53ef\u786e\u4fdd\u8bfb\u53d6\u7684\u65f6\u95f4\u4e3a Doris BE JVM \u65f6\u533a\uff0c\u800c\u975e MySQL session \u65f6\u533a\u3002"),(0,l.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,l.yg)("h3",{id:"\u8c13\u8bcd\u4e0b\u63a8"},"\u8c13\u8bcd\u4e0b\u63a8"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u6267\u884c\u7c7b\u4f3c\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'")," \u8fd9\u6837\u7684\u67e5\u8be2\u65f6\uff0cDoris \u80fd\u591f\u5c06\u8fd9\u4e9b\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0c\u4ece\u800c\u76f4\u63a5\u5728\u6570\u636e\u6e90\u5c42\u9762\u6392\u9664\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u83b7\u53d6\u548c\u4f20\u8f93\u3002\u8fd9\u5927\u5927\u63d0\u9ad8\u4e86\u67e5\u8be2\u6027\u80fd\uff0c\u540c\u65f6\u4e5f\u964d\u4f4e\u4e86\u5bf9\u5916\u90e8\u6570\u636e\u6e90\u7684\u8d1f\u8f7d\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_ext_func_pred_pushdown")," \u8bbe\u7f6e\u4e3atrue\uff0c\u4f1a\u5c06 where \u4e4b\u540e\u7684\u51fd\u6570\u6761\u4ef6\u4e5f\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0cDoris \u4f1a\u81ea\u52a8\u8bc6\u522b\u90e8\u5206 MySQL \u4e0d\u652f\u6301\u7684\u51fd\u6570\uff0c\u53ef\u901a\u8fc7 explain sql \u67e5\u770b\u3002 "),(0,l.yg)("p",{parentName:"li"},"\u5f53\u524d Doris \u9ed8\u8ba4\u4e0d\u4f1a\u4e0b\u63a8\u5230 MySQL \u7684\u51fd\u6570\u5982\u4e0b"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"center"},"Function"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"DATE_TRUNC")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"MONEY_FORMAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"center"},"NEGATIVE")))),(0,l.yg)("p",{parentName:"li"},"\u5f53\u60a8\u53d1\u73b0\u8fd8\u6709\u5176\u4ed6\u51fd\u6570\u4e0d\u652f\u6301\u4e0b\u63a8\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"jdbc_mysql_unsupported_pushdown_functions")," \u6765\u6307\u5b9a\u4e0d\u652f\u6301\u4e0b\u63a8\u7684\u51fd\u6570\u3002\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"jdbc_mysql_unsupported_pushdown_functions=func1,func2")))),(0,l.yg)("h3",{id:"\u884c\u6570\u9650\u5236"},"\u884c\u6570\u9650\u5236"),(0,l.yg)("p",null,"\u5982\u679c\u5728\u67e5\u8be2\u4e2d\u5e26\u6709 limit \u5173\u952e\u5b57\uff0cDoris \u4f1a\u5c06 limit \u4e0b\u63a8\u5230 MySQL\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002"),(0,l.yg)("h3",{id:"\u8f6c\u4e49\u5b57\u7b26"},"\u8f6c\u4e49\u5b57\u7b26"),(0,l.yg)("p",null,"Doris \u4f1a\u5728\u4e0b\u53d1\u5230 MySQL \u7684\u67e5\u8be2\u8bed\u53e5\u4e2d\uff0c\u81ea\u52a8\u5728\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0a\u52a0\u4e0a\u8f6c\u4e49\u7b26\uff1a(``)\uff0c\u4ee5\u907f\u514d\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0e MySQL \u5185\u90e8\u5173\u952e\u5b57\u51b2\u7a81\u3002"),(0,l.yg)("h2",{id:"\u8fde\u63a5\u5f02\u5e38\u6392\u67e5"},"\u8fde\u63a5\u5f02\u5e38\u6392\u67e5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Communications link failure The last packet successfully received from the server was 7 milliseconds ago."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u539f\u56e0\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7f51\u7edc\u95ee\u9898\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u7f51\u7edc\u4e0d\u7a33\u5b9a\u6216\u8fde\u63a5\u4e2d\u65ad\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u5ef6\u8fdf\u8fc7\u9ad8\u3002"))),(0,l.yg)("li",{parentName:"ul"},"MySQL \u670d\u52a1\u5668\u8bbe\u7f6e",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"MySQL \u670d\u52a1\u5668\u53ef\u80fd\u914d\u7f6e\u4e86\u8fde\u63a5\u8d85\u65f6\u53c2\u6570\uff0c\u4f8b\u5982 wait_timeout \u6216 interactive_timeout\uff0c\u5bfc\u81f4\u8fde\u63a5\u8d85\u65f6\u88ab\u5173\u95ed\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u9632\u706b\u5899\u8bbe\u7f6e",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u9632\u706b\u5899\u89c4\u5219\u53ef\u80fd\u963b\u6b62\u4e86\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u8fde\u63a5\u6c60\u8bbe\u7f6e",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u8fde\u63a5\u6c60\u4e2d\u7684\u914d\u7f6e connection_pool_max_life_time \u53ef\u80fd\u5bfc\u81f4\u8fde\u63a5\u88ab\u5173\u95ed\u6216\u56de\u6536\uff0c\u6216\u8005\u672a\u53ca\u65f6\u63a2\u6d3b"))),(0,l.yg)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u8d44\u6e90\u95ee\u9898",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"MySQL \u670d\u52a1\u5668\u53ef\u80fd\u8d44\u6e90\u4e0d\u8db3\uff0c\u65e0\u6cd5\u5904\u7406\u65b0\u7684\u8fde\u63a5\u8bf7\u6c42\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u914d\u7f6e",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef JDBC \u9a71\u52a8\u914d\u7f6e\u9519\u8bef\uff0c\u4f8b\u5982 autoReconnect \u53c2\u6570\u672a\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e0d\u5f53\u3002"))))),(0,l.yg)("li",{parentName:"ul"},"\u89e3\u51b3",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u786e\u8ba4\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\u7a33\u5b9a\uff0c\u907f\u514d\u7f51\u7edc\u5ef6\u8fdf\u8fc7\u9ad8\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u68c0\u67e5 MySQL \u670d\u52a1\u5668\u914d\u7f6e\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u67e5\u770b\u5e76\u8c03\u6574 MySQL \u670d\u52a1\u5668\u7684 wait_timeout \u548c interactive_timeout \u53c2\u6570\uff0c\u786e\u4fdd\u5b83\u4eec\u8bbe\u7f6e\u5408\u7406\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u68c0\u67e5\u9632\u706b\u5899\u914d\u7f6e\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u786e\u8ba4\u9632\u706b\u5899\u89c4\u5219\u5141\u8bb8\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u8c03\u6574\u8fde\u63a5\u6c60\u8bbe\u7f6e\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u68c0\u67e5\u5e76\u8c03\u6574\u8fde\u63a5\u6c60\u7684\u914d\u7f6e\u53c2\u6570 connection_pool_max_life_time,\u786e\u4fdd\u5c0f\u4e8e MySQL \u7684wait_timeout \u548c interactive_timeout \u53c2\u6570\u5e76\u5927\u4e8e\u6267\u884c\u65f6\u95f4\u6700\u957f\u7684 SQL"))),(0,l.yg)("li",{parentName:"ul"},"\u76d1\u63a7\u670d\u52a1\u5668\u8d44\u6e90\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u76d1\u63a7 MySQL \u670d\u52a1\u5668\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u786e\u4fdd\u6709\u8db3\u591f\u7684\u8d44\u6e90\u5904\u7406\u8fde\u63a5\u8bf7\u6c42\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316\u5ba2\u6237\u7aef\u914d\u7f6e\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u786e\u8ba4 JDBC \u9a71\u52a8\u7684\u914d\u7f6e\u53c2\u6570\u6b63\u786e\uff0c\u4f8b\u5982 autoReconnect=true\uff0c\u786e\u4fdd\u8fde\u63a5\u80fd\u5728\u4e2d\u65ad\u540e\u81ea\u52a8\u91cd\u8fde\u3002"))))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"java.io.EOFException MESSAGE: Can not read response from server. Expected to read 819 bytes, read 686 bytes before connection was unexpectedly lost."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u539f\u56e0\uff1a\u8fde\u63a5\u88ab MySQL Kill \u6216\u8005 MySQL \u5b95\u673a"),(0,l.yg)("li",{parentName:"ul"},"\u89e3\u51b3\uff1a\u68c0\u67e5 MySQL \u662f\u5426\u6709\u4e3b\u52a8 kill \u8fde\u63a5\u7684\u673a\u5236\uff0c\u6216\u8005\u662f\u5426\u56e0\u4e3a\u67e5\u8be2\u8fc7\u5927\u67e5\u5d29 MySQL")))),(0,l.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bfb\u5199 MySQL \u7684 emoji \u8868\u60c5\u51fa\u73b0\u4e71\u7801"),(0,l.yg)("p",{parentName:"li"},"Doris \u8fdb\u884c MySQL Catalog \u67e5\u8be2\u65f6\uff0c\u7531\u4e8e MySQL \u4e4b\u4e2d\u9ed8\u8ba4\u7684 utf8 \u7f16\u7801\u4e3a utf8mb3 \uff0c\u65e0\u6cd5\u8868\u793a\u9700\u8981 4 \u5b57\u8282\u7f16\u7801\u7684 emoji \u8868\u60c5\u3002\u8fd9\u91cc\u9700\u8981\u5c06 MySQL \u7684\u7f16\u7801\u4fee\u6539\u4e3a utf8mb4 \uff0c\u4ee5\u652f\u6301 4 \u5b57\u8282\u7f16\u7801\u3002"),(0,l.yg)("p",{parentName:"li"},"\u53ef\u5168\u5c40\u4fee\u6539\u914d\u7f6e\u9879"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"\u4fee\u6539mysql\u76ee\u5f55\u4e0b\u7684my.ini\u6587\u4ef6\uff08linux\u7cfb\u7edf\u4e3aetc\u76ee\u5f55\u4e0b\u7684my.cnf\u6587\u4ef6\uff09\n[client]\ndefault-character-set=utf8mb4\n\n[mysql]\n\u8bbe\u7f6emysql\u9ed8\u8ba4\u5b57\u7b26\u96c6\ndefault-character-set=utf8mb4\n\n[mysqld]\n\u8bbe\u7f6emysql\u5b57\u7b26\u96c6\u670d\u52a1\u5668\ncharacter-set-server=utf8mb4\ncollation-server=utf8mb4_unicode_ci\ninit_connect='SET NAMES utf8mb4\n\n\u4fee\u6539\u5bf9\u5e94\u8868\u4e0e\u5217\u7684\u7c7b\u578b\nALTER TABLE table_name MODIFY  colum_name  VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\nALTER TABLE table_name CHARSET=utf8mb4;\nSET NAMES utf8mb4\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bfb\u53d6 MySQL DATE/DATETIME \u7c7b\u578b\u51fa\u73b0\u5f02\u5e38"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.6)[INTERNAL_ERROR]UdfRuntimeException: get next block failed: \nCAUSED BY: SQLException: Zero date value prohibited\nCAUSED BY: DataReadException: Zero date value prohibited\n")),(0,l.yg)("p",{parentName:"li"},"\u8fd9\u662f\u56e0\u4e3a JDBC \u4e2d\u5bf9\u4e8e\u8be5\u975e\u6cd5\u7684 DATE/DATETIME \u9ed8\u8ba4\u5904\u7406\u4e3a\u629b\u51fa\u5f02\u5e38\uff0c\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"zeroDateTimeBehavior"),"\u63a7\u5236\u8be5\u884c\u4e3a\u3002"),(0,l.yg)("p",{parentName:"li"},"\u53ef\u9009\u53c2\u6570\u4e3a: ",(0,l.yg)("inlineCode",{parentName:"p"},"exception"),",",(0,l.yg)("inlineCode",{parentName:"p"},"convertToNull"),",",(0,l.yg)("inlineCode",{parentName:"p"},"round"),', \u5206\u522b\u4e3a\uff1a\u5f02\u5e38\u62a5\u9519\uff0c\u8f6c\u4e3aNULL\u503c\uff0c\u8f6c\u4e3a "0001-01-01 00:00:00";'),(0,l.yg)("p",{parentName:"li"},"\u9700\u8981\u5728\u521b\u5efa Catalog \u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u628aJDBC\u8fde\u63a5\u4e32\u6700\u540e\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"zeroDateTimeBehavior=convertToNull")," ,\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},'"jdbc_url" = "jdbc:mysql://127.0.0.1:3306/test?zeroDateTimeBehavior=convertToNull"'),"\n\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cJDBC \u4f1a\u628a 0000-00-00 \u6216\u8005 0000-00-00 00:00:00 \u8f6c\u6362\u6210 null\uff0c\u7136\u540e Doris \u4f1a\u628a\u5f53\u524d Catalog \u7684\u6240\u6709 Date/DateTime \u7c7b\u578b\u7684\u5217\u6309\u7167\u53ef\u7a7a\u7c7b\u578b\u5904\u7406\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6b63\u5e38\u8bfb\u53d6\u4e86\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bfb\u53d6 MySQL Catalog \u6216\u5176\u4ed6 JDBC Catalog \u65f6\uff0c\u51fa\u73b0\u52a0\u8f7d\u7c7b\u5931\u8d25"),(0,l.yg)("p",{parentName:"li"},"\u5982\u4ee5\u4e0b\u5f02\u5e38\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"failed to load driver class com.mysql.cj.jdbc.driver in either of hikariconfig class loader\n")),(0,l.yg)("p",{parentName:"li"},"\u8fd9\u662f\u56e0\u4e3a\u5728\u521b\u5efa Catalog \u65f6\uff0c\u586b\u5199\u7684 driver_class \u4e0d\u6b63\u786e\uff0c\u9700\u8981\u6b63\u786e\u586b\u5199\uff0c\u5982\u4e0a\u65b9\u4f8b\u5b50\u4e3a\u5927\u5c0f\u5199\u95ee\u9898\uff0c\u5e94\u586b\u5199\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},'"driver_class" = "com.mysql.cj.jdbc.Driver"'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8bfb\u53d6 MySQL \u51fa\u73b0\u901a\u4fe1\u94fe\u8def\u5f02\u5e38"),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u5982\u4e0b\u62a5\u9519\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = PoolInitializationException: Failed to initialize pool: Communications link failure\n\nThe last packet successfully received from the server was 7 milliseconds ago.  The last packet sent successfully to the server was 4 milliseconds ago.\nCAUSED BY: CommunicationsException: Communications link failure\n    \nThe last packet successfully received from the server was 7 milliseconds ago.  The last packet sent successfully to the server was 4 milliseconds ago.\nCAUSED BY: SSLHandshakeExcepti\n")),(0,l.yg)("p",{parentName:"li"},"\u53ef\u67e5\u770b be \u7684 be.out \u65e5\u5fd7"),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"WARN: Establishing SSL connection without server's identity verification is not recommended. \nAccording to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set. \nFor compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'. \nYou need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n")),(0,l.yg)("p",{parentName:"li"},"\u53ef\u5728\u521b\u5efa Catalog \u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u628a JDBC \u8fde\u63a5\u4e32\u6700\u540e\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"?useSSL=false")," ,\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},'"jdbc_url" = "jdbc:mysql://127.0.0.1:3306/test?useSSL=false"'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u8be2 MySQL \u5927\u6570\u636e\u91cf\u65f6\uff0c\u5982\u679c\u67e5\u8be2\u5076\u5c14\u80fd\u591f\u6210\u529f\uff0c\u5076\u5c14\u4f1a\u62a5\u5982\u4e0b\u9519\u8bef\uff0c\u4e14\u51fa\u73b0\u8be5\u9519\u8bef\u65f6 MySQL \u7684\u8fde\u63a5\u88ab\u5168\u90e8\u65ad\u5f00\uff0c\u65e0\u6cd5\u8fde\u63a5\u5230 MySQL Server\uff0c\u8fc7\u6bb5\u65f6\u95f4\u540e MySQL \u53c8\u6062\u590d\u6b63\u5e38\uff0c\u4f46\u662f\u4e4b\u524d\u7684\u8fde\u63a5\u90fd\u6ca1\u4e86\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = [INTERNAL_ERROR]UdfRuntimeException: JDBC executor sql has error:\nCAUSED BY: CommunicationsException: Communications link failure\nThe last packet successfully received from the server was 4,446 milliseconds ago. The last packet sent successfully to the server was 4,446 milliseconds ago.\n")),(0,l.yg)("p",{parentName:"li"},"\u51fa\u73b0\u4e0a\u8ff0\u73b0\u8c61\u65f6\uff0c\u53ef\u80fd\u662f MySQL Server \u81ea\u8eab\u7684\u5185\u5b58\u6216 CPU \u8d44\u6e90\u88ab\u8017\u5c3d\u5bfc\u81f4 MySQL \u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u589e\u5927 MySQL Server \u7684\u5185\u5b58\u6216 CPU \u914d\u7f6e\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u8be2 MySQL \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u53d1\u73b0\u548c\u5728 MySQL \u5e93\u7684\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5"),(0,l.yg)("p",{parentName:"li"},'\u9996\u5148\u8981\u5148\u6392\u67e5\u4e0b\u67e5\u8be2\u5b57\u6bb5\u4e2d\u662f\u5b57\u7b26\u4e32\u5426\u5b58\u5728\u6709\u5927\u5c0f\u5199\u60c5\u51b5\u3002\u6bd4\u5982\uff0cTable \u4e2d\u6709\u4e00\u4e2a\u5b57\u6bb5 c_1 \u4e2d\u6709 "aaa" \u548c "AAA" \u4e24\u6761\u6570\u636e\uff0c\u5982\u679c\u5728\u521d\u59cb\u5316 MySQL \u6570\u636e\u5e93\u65f6\u672a\u6307\u5b9a\u533a\u5206\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\uff0c\u90a3\u4e48 MySQL \u9ed8\u8ba4\u662f\u4e0d\u533a\u5206\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u7684\uff0c\u4f46\u662f\u5728 Doris \u4e2d\u662f\u4e25\u683c\u533a\u5206\u5927\u5c0f\u5199\u7684\uff0c\u6240\u4ee5\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u60c5\u51b5\uff1a'),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},'MySQL\u884c\u4e3a\uff1a\nselect count(c_1) from table where c_1 = "aaa"; \u672a\u533a\u5206\u5b57\u7b26\u4e32\u5927\u5c0f\uff0c\u6240\u4ee5\u7ed3\u679c\u4e3a\uff1a2\n\nDoris\u884c\u4e3a\uff1a\nselect count(c_1) from table where c_1 = "aaa"; \u4e25\u683c\u533a\u5206\u5b57\u7b26\u4e32\u5927\u5c0f\uff0c\u6240\u4ee5\u7ed3\u679c\u4e3a\uff1a1\n')),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u4e0a\u8ff0\u73b0\u8c61\uff0c\u90a3\u4e48\u9700\u8981\u6309\u7167\u9700\u6c42\u6765\u8c03\u6574\uff0c\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,l.yg)("p",{parentName:"li"},"\u5728 MySQL \u4e2d\u67e5\u8be2\u65f6\u6dfb\u52a0 \u201cBINARY\u201d \u5173\u952e\u5b57\u6765\u5f3a\u5236\u533a\u5206\u5927\u5c0f\u5199\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},'select count(c_1) from table where BINARY c_1 = "aaa";')," "),(0,l.yg)("p",{parentName:"li"},"\u6216\u8005\u5728 MySQL \u4e2d\u5efa\u8868\u65f6\u5019\u6307\u5b9a\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE TABLE table (c_1 VARCHAR(255) CHARACTER SET binary);")," "),(0,l.yg)("p",{parentName:"li"},"\u6216\u8005\u5728\u521d\u59cb\u5316 MySQL \u6570\u636e\u5e93\u65f6\u6307\u5b9a\u6821\u5bf9\u89c4\u5219\u6765\u533a\u5206\u5927\u5c0f\u5199\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"[mysqld]\ncharacter-set-server=utf8\ncollation-server=utf8_bin\n[client]\ndefault-character-set=utf8\n[mysql]\ndefault-character-set=utf8\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u8be2 MySQL \u7684\u65f6\u5019\uff0c\u51fa\u73b0\u957f\u65f6\u95f4\u5361\u4f4f\u6ca1\u6709\u8fd4\u56de\u7ed3\u679c\uff0c\u6216\u7740\u5361\u4f4f\u5f88\u957f\u65f6\u95f4\u5e76\u4e14 fe.warn.log \u4e2d\u51fa\u73b0\u51fa\u73b0\u5927\u91cf write lock \u65e5\u5fd7\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5728 URL \u6dfb\u52a0 socketTimeout \uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://host:port/database?socketTimeout=30000"),"\uff0c\u9632\u6b62 JDBC \u5ba2\u6237\u7aef \u5728\u88ab MySQL \u5173\u95ed\u8fde\u63a5\u540e\u65e0\u9650\u7b49\u5f85\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5728\u4f7f\u7528 MySQL Catalog \u7684\u8fc7\u7a0b\u4e2d\u53d1\u73b0 FE \u7684 JVM \u5185\u5b58\u6216 Threads \u6570\u6301\u7eed\u589e\u957f\u4e0d\u51cf\u5c11\uff0c\u5e76\u53ef\u80fd\u540c\u65f6\u51fa\u73b0 Forward to master connection timed out \u62a5\u9519"),(0,l.yg)("p",{parentName:"li"},"\u6253\u5370 FE \u7ebf\u7a0b\u5806\u6808 ",(0,l.yg)("inlineCode",{parentName:"p"},"jstack fe_pid > fe.js"),"\uff0c\u5982\u679c\u51fa\u73b0\u5927\u91cf ",(0,l.yg)("inlineCode",{parentName:"p"},"mysql-cj-abandoned-connection-cleanup")," \u7ebf\u7a0b\uff0c\u8bf4\u660e\u662f MySQL JDBC \u9a71\u52a8\u7684\u95ee\u9898\u3002"),(0,l.yg)("p",{parentName:"li"},"\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u5904\u7406\uff1a"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},"\u5347\u7ea7 MySQL JDBC \u9a71\u52a8\u5230 8.0.31 \u53ca\u4ee5\u4e0a\u7248\u672c"),(0,l.yg)("li",{parentName:"ol"},"\u5728 FE \u548c BE conf \u6587\u4ef6\u7684 JAVA_OPTS \u4e2d\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"li"},"-Dcom.mysql.cj.disableAbandonedConnectionCleanup=true")," \u53c2\u6570\uff0c\u7981\u7528 MySQL JDBC \u9a71\u52a8\u7684\u8fde\u63a5\u6e05\u7406\u529f\u80fd\uff0c\u5e76\u91cd\u542f\u96c6\u7fa4")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5982\u679c Doris \u7684\u7248\u672c\u5728 2.0.13 \u53ca\u4ee5\u4e0a\uff082.0 Release\uff09\uff0c\u6216 2.1.5 \u53ca\u4ee5\u4e0a\uff082.1 Release\uff09\u5219\u65e0\u9700\u589e\u52a0\u8be5\u53c2\u6570\uff0c\u56e0\u4e3a Doris \u5df2\u7ecf\u9ed8\u8ba4\u7981\u7528\u4e86 MySQL JDBC \u9a71\u52a8\u7684\u8fde\u63a5\u6e05\u7406\u529f\u80fd\u3002\u53ea\u9700\u66f4\u6362 MySQL JDBC \u9a71\u52a8\u7248\u672c\u5373\u53ef\u3002\u4f46\u662f\u9700\u8981\u91cd\u542f Doris \u96c6\u7fa4\u6765\u6e05\u7406\u6389\u4e4b\u524d\u7684 Threads\u3002"))))}N.isMDXComponent=!0}}]);