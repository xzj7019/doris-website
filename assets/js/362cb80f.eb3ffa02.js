"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[692181],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>u});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},E=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),E=r,u=d["".concat(o,".").concat(E)]||d[E]||c[E]||i;return t?n.createElement(u,l(l({ref:a},m),{},{components:t})):n.createElement(u,l({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=E;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}E.displayName="MDXCreateElement"},323619:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const i={title:"CREATE-EXTERNAL-TABLE",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE",title:"CREATE-EXTERNAL-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-EXTERNAL-TABLE",language:"en"},sidebar:"docs",previous:{title:"CREATE-TABLE-AS-SELECT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"},next:{title:"CREATE-INDEX",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"}},o={},p=[{value:"CREATE-EXTERNAL-TABLE",id:"create-external-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-external-table"},"CREATE-EXTERNAL-TABLE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE EXTERNAL TABLE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to create an external table, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," for the specific syntax."),(0,r.yg)("p",null,"Which type of external table is mainly identified by the ENGINE type, currently MYSQL, BROKER, HIVE, ICEBERG, HUDI are optional"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If it is mysql, you need to provide the following information in properties:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"host" = "mysql_server_host",\n"port" = "mysql_server_port",\n"user" = "your_user_name",\n"password" = "your_password",\n"database" = "database_name",\n"table" = "table_name"\n)\n')),(0,r.yg)("p",{parentName:"li"},'and there is an optional propertiy "charset" which can set character fom mysql connection, default value is "utf8". You can set another value "utf8mb4" instead of "utf8" when you need.'),(0,r.yg)("p",{parentName:"li"},"Notice:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'"table_name" in "table" entry is the real table name in mysql. The table_name in the CREATE TABLE statement is the name of the mysql table in Doris, which can be different.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The purpose of creating a mysql table in Doris is to access the mysql database through Doris. Doris itself does not maintain or store any mysql data.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If it is a broker, it means that the access to the table needs to pass through the specified broker, and the following information needs to be provided in properties:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"broker_name" = "broker_name",\n"path" = "file_path1[,file_path2]",\n"column_separator" = "value_separator"\n"line_delimiter" = "value_delimiter"\n)\n')),(0,r.yg)("p",{parentName:"li"},"In addition, you need to provide the Property information required by the Broker, and pass it through the BROKER PROPERTIES, for example, HDFS needs to pass in"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'BROKER PROPERTIES(\n  "username" = "name",\n  "password" = "password"\n)\n')),(0,r.yg)("p",{parentName:"li"},"According to different Broker types, the content that needs to be passed in is also different."),(0,r.yg)("p",{parentName:"li"},"Notice:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'If there are multiple files in "path", separate them with comma ',"[,]",". If the filename contains a comma, use %2c instead. If the filename contains %, use %25 instead"),(0,r.yg)("li",{parentName:"ul"},"Now the file content format supports CSV, and supports GZ, BZ2, LZ4, LZO (LZOP) compression formats."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If it is hive, you need to provide the following information in properties:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"database" = "hive_db_name",\n"table" = "hive_table_name",\n"hive.metastore.uris" = "thrift://127.0.0.1:9083"\n)\n')),(0,r.yg)("p",{parentName:"li"},"Where database is the name of the library corresponding to the hive table, table is the name of the hive table, and hive.metastore.uris is the address of the hive metastore service.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In case of iceberg, you need to provide the following information in properties:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"iceberg.database" = "iceberg_db_name",\n"iceberg.table" = "iceberg_table_name",\n"iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n"iceberg.catalog.type" = "HIVE_CATALOG"\n)\n')),(0,r.yg)("p",{parentName:"li"},"Where database is the library name corresponding to Iceberg;\ntable is the corresponding table name in Iceberg;\nhive.metastore.uris is the hive metastore service address;\ncatalog.type defaults to HIVE_CATALOG. Currently only HIVE_CATALOG is supported, more Iceberg catalog types will be supported in the future.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In case of hudi, you need to provide the following information in properties:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"hudi.database" = "hudi_db_in_hive_metastore",\n"hudi.table" = "hudi_table_in_hive_metastore",\n"hudi.hive.metastore.uris" = "thrift://127.0.0.1:9083"\n)\n')),(0,r.yg)("p",{parentName:"li"},"Where hudi.database is the corresponding database name in HiveMetaStore;\nhudi.table is the corresponding table name in HiveMetaStore;\nhive.metastore.uris is the hive metastore service address;"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a MYSQL external table"),(0,r.yg)("p",{parentName:"li"},"Create mysql table directly from outer table information"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL TABLE example_db.table_mysql\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nk4 VARCHAR(2048),\nk5 DATETIME\n)\nENGINE=mysql\nPROPERTIES\n(\n"host" = "127.0.0.1",\n"port" = "8239",\n"user" = "mysql_user",\n"password" = "mysql_passwd",\n"database" = "mysql_db_test",\n"table" = "mysql_table_test",\n"charset" = "utf8mb4"\n)\n')),(0,r.yg)("p",{parentName:"li"},"Create mysql table through External Catalog Resource"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Create Resource first\nCREATE EXTERNAL RESOURCE "mysql_resource"\nPROPERTIES\n(\n  "type" = "odbc_catalog",\n  "user" = "mysql_user",\n  "password" = "mysql_passwd",\n  "host" = "127.0.0.1",\n   "port" = "8239"\n);\n\n# Then create mysql external table through Resource\nCREATE EXTERNAL TABLE example_db.table_mysql\n(\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nk4 VARCHAR(2048),\nk5 DATETIME\n)\nENGINE=mysql\nPROPERTIES\n(\n"odbc_catalog_resource" = "mysql_resource",\n"database" = "mysql_db_test",\n"table" = "mysql_table_test"\n)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Create a broker external table with data files stored on HDFS, the data is split with "|", and "\\n" is newline'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL TABLE example_db.table_broker (\nk1 DATE,\nk2 INT,\nk3 SMALLINT,\nk4 VARCHAR(2048),\nk5 DATETIME\n)\nENGINE=broker\nPROPERTIES (\n"broker_name" = "hdfs",\n"path" = "hdfs://hdfs_host:hdfs_port/data1,hdfs://hdfs_host:hdfs_port/data2,hdfs://hdfs_host:hdfs_port/data3%2c4",\n"column_separator" = "|",\n"line_delimiter" = "\\n"\n)\nBROKER PROPERTIES (\n"username" = "hdfs_user",\n"password" = "hdfs_password"\n)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a hive external table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hive\n(\n  k1 TINYINT,\n  k2 VARCHAR(50),\n  v INT\n)\nENGINE=hive\nPROPERTIES\n(\n  "database" = "hive_db_name",\n  "table" = "hive_table_name",\n  "hive.metastore.uris" = "thrift://127.0.0.1:9083"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create an Iceberg skin"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.t_iceberg\nENGINE=ICEBERG\nPROPERTIES (\n"iceberg.database" = "iceberg_db",\n"iceberg.table" = "iceberg_table",\n"iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n"iceberg.catalog.type" = "HIVE_CATALOG"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create an Hudi external table"),(0,r.yg)("p",{parentName:"li"},"create hudi table without schema(recommend)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.t_hudi\nENGINE=HUDI\nPROPERTIES (\n"hudi.database" = "hudi_db_in_hive_metastore",\n"hudi.table" = "hudi_table_in_hive_metastore",\n"hudi.hive.metastore.uris" = "thrift://127.0.0.1:9083"\n);\n')),(0,r.yg)("p",{parentName:"li"},"create hudi table with schema"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.t_hudi (\n   `id` int NOT NULL COMMENT "id number",\n   `name` varchar(10) NOT NULL COMMENT "user name"\n)\nENGINE=HUDI\nPROPERTIES (\n"hudi.database" = "hudi_db_in_hive_metastore",\n"hudi.table" = "hudi_table_in_hive_metastore",\n"hudi.hive.metastore.uris" = "thrift://127.0.0.1:9083"\n);\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, EXTERNAL, TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);