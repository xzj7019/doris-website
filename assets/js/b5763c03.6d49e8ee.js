"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[868694],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},237005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const o={title:"Data export",language:"en"},l=void 0,i={unversionedId:"data-operate/export/export-manual",id:"version-1.2/data-operate/export/export-manual",title:"Data export",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-operate/export/export-manual.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-manual",permalink:"/docs/1.2/data-operate/export/export-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Data export",language:"en"},sidebar:"docs",previous:{title:"Load JSON Format Data",permalink:"/docs/1.2/data-operate/import/import-way/load-json-format"},next:{title:"Export Query Result",permalink:"/docs/1.2/data-operate/export/outfile"}},s={},p=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Principle",id:"principle",level:2},{value:"query plan splitting",id:"query-plan-splitting",level:3},{value:"Query Plan Execution",id:"query-plan-execution",level:3},{value:"Broker parameter",id:"broker-parameter",level:3},{value:"Start Export",id:"start-export",level:2},{value:"Export to hdfs",id:"export-to-hdfs",level:3},{value:"Export to object storage (supports S3 protocol)",id:"export-to-object-storage-supports-s3-protocol",level:3},{value:"View export status",id:"view-export-status",level:3},{value:"Cancel export job",id:"cancel-export-job",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Splitting Query Plans",id:"splitting-query-plans",level:3},{value:"exec_mem_limit",id:"exec_mem_limit",level:3},{value:"Notes",id:"notes",level:2},{value:"Relevant configuration",id:"relevant-configuration",level:2},{value:"FE",id:"fe",level:3},{value:"More Help",id:"more-help",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"data-export"},"Data export"),(0,n.yg)("p",null,"Export is a function provided by Doris to export data. This function can export user-specified table or partition data in text format to remote storage through Broker process, such as HDFS / Object storage (supports S3 protocol) etc."),(0,n.yg)("p",null,"This document mainly introduces the basic principles, usage, best practices and precautions of Export."),(0,n.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,n.yg)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage."),(0,n.yg)("li",{parentName:"ul"},"Broker: Doris can manipulate files for remote storage through the Broker process."),(0,n.yg)("li",{parentName:"ul"},"Tablet: Data fragmentation. A table is divided into multiple data fragments.")),(0,n.yg)("h2",{id:"principle"},"Principle"),(0,n.yg)("p",null,"After the user submits an Export job. Doris counts all Tablets involved in this job. These tablets are then grouped to generate a special query plan for each group. The query plan reads the data on the included tablet and then writes the data to the specified path of the remote storage through Broker. It can also be directly exported to the remote storage that supports S3 protocol through S3 protocol."),(0,n.yg)("p",null,"The overall mode of dispatch is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"+--------+\n| Client |\n+---+----+\n    |  1. Submit Job\n    |\n+---v--------------------+\n| FE                     |\n|                        |\n| +-------------------+  |\n| | ExportPendingTask |  |\n| +-------------------+  |\n|                        | 2. Generate Tasks\n| +--------------------+ |\n| | ExportExporingTask | |\n| +--------------------+ |\n|                        |\n| +-----------+          |     +----+   +------+   +---------+\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   | Remote  |\n| +-----------+          |     +----+   +------+   | Storage |\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   +---------+\n+------------------------+         3. Execute Tasks\n\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The user submits an Export job to FE."),(0,n.yg)("li",{parentName:"ol"},"FE's Export scheduler performs an Export job in two stages:",(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"PENDING: FE generates Export Pending Task, sends snapshot command to BE, and takes a snapshot of all Tablets involved. And generate multiple query plans."),(0,n.yg)("li",{parentName:"ol"},"EXPORTING: FE generates Export ExportingTask and starts executing the query plan.")))),(0,n.yg)("h3",{id:"query-plan-splitting"},"query plan splitting"),(0,n.yg)("p",null,"The Export job generates multiple query plans, each of which scans a portion of the Tablet. The number of Tablets scanned by each query plan is specified by the FE configuration parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"export_tablet_num_per_task"),", which defaults to 5. That is, assuming a total of 100 Tablets, 20 query plans will be generated. Users can also specify this number by the job attribute ",(0,n.yg)("inlineCode",{parentName:"p"},"tablet_num_per_task"),", when submitting a job."),(0,n.yg)("p",null,"Multiple query plans for a job are executed sequentially."),(0,n.yg)("h3",{id:"query-plan-execution"},"Query Plan Execution"),(0,n.yg)("p",null,"A query plan scans multiple fragments, organizes read data in rows, batches every 1024 actions, and writes Broker to remote storage."),(0,n.yg)("p",null,"The query plan will automatically retry three times if it encounters errors. If a query plan fails three retries, the entire job fails."),(0,n.yg)("p",null,"Doris will first create a temporary directory named ",(0,n.yg)("inlineCode",{parentName:"p"},"doris_export_tmp_12345")," (where ",(0,n.yg)("inlineCode",{parentName:"p"},"12345")," is the job id) in the specified remote storage path. The exported data is first written to this temporary directory. Each query plan generates a file with an example file name:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"export-data-c69fcf2b6db5420f-a96b94c1ff8bccef-1561453713822")),(0,n.yg)("p",null,"Among them, ",(0,n.yg)("inlineCode",{parentName:"p"},"c69fcf2b6db5420f-a96b94c1ff8bccef")," is the query ID of the query plan. ",(0,n.yg)("inlineCode",{parentName:"p"}," 1561453713822")," Timestamp generated for the file."),(0,n.yg)("p",null,"When all data is exported, Doris will rename these files to the user-specified path."),(0,n.yg)("h3",{id:"broker-parameter"},"Broker parameter"),(0,n.yg)("p",null,"Export needs to use the Broker process to access remote storage. Different brokers need to provide different parameters. For details, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/advanced/broker"},"Broker documentation")),(0,n.yg)("h2",{id:"start-export"},"Start Export"),(0,n.yg)("p",null,"For detailed usage of Export, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT"),"."),(0,n.yg)("p",null,"Export's detailed commands can be passed through ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP EXPORT;")," Examples are as follows:"),(0,n.yg)("h3",{id:"export-to-hdfs"},"Export to hdfs"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "hdfs://host/path/to/export/" \nPROPERTIES\n(\n    "label" = "mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "exec_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER "hdfs"\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"label"),": The identifier of this export job. You can use this identifier to view the job status later."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"column_separator"),": Column separator. The default is ",(0,n.yg)("inlineCode",{parentName:"li"},"\\t"),". Supports invisible characters, such as'\\x07'."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"column"),": columns to be exported, separated by commas, if this parameter is not filled in, all columns of the table will be exported by default."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"line_delimiter"),": Line separator. The default is ",(0,n.yg)("inlineCode",{parentName:"li"},"\\n"),". Supports invisible characters, such as'\\x07'."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"exec_mem_limit"),": Represents the memory usage limitation of a query plan on a single BE in an Export job. Default 2GB. Unit bytes."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"timeout"),": homework timeout. Default 2 hours. Unit seconds."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"tablet_num_per_task"),": The maximum number of fragments allocated per query plan. The default is 5.")),(0,n.yg)("h3",{id:"export-to-object-storage-supports-s3-protocol"},"Export to object storage (supports S3 protocol)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "s3://bucket/path/to/export/dir/" WITH S3  (\n        "AWS_ENDPOINT" = "http://host",\n        "AWS_ACCESS_KEY" = "AK",\n        "AWS_SECRET_KEY"="SK",\n        "AWS_REGION" = "region"\n    );\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY"),"/",(0,n.yg)("inlineCode",{parentName:"li"},"AWS_SECRET_KEY"),"\uff1aIs your key to access the object storage API."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"AWS_ENDPOINT"),"\uff1aEndpoint indicates the access domain name of object storage external services."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"AWS_REGION"),"\uff1aRegion indicates the region where the object storage data center is located.")),(0,n.yg)("h3",{id:"view-export-status"},"View export status"),(0,n.yg)("p",null,"After submitting a job, the job status can be viewed by querying the   ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT"),"  command. The results are as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show EXPORT\\G;\n*************************** 1. row ***************************\n     JobId: 14008\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"exec mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3"}\n      Path: hdfs://host/path/to/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: NULL\n1 row in set (0.01 sec)\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"JobId: The unique ID of the job"),(0,n.yg)("li",{parentName:"ul"},"State: Job status:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"PENDING: Jobs to be Scheduled"),(0,n.yg)("li",{parentName:"ul"},"EXPORTING: Data Export"),(0,n.yg)("li",{parentName:"ul"},"FINISHED: Operation Successful"),(0,n.yg)("li",{parentName:"ul"},"CANCELLED: Job Failure"))),(0,n.yg)("li",{parentName:"ul"},"Progress: Work progress. The schedule is based on the query plan. Assuming a total of 10 query plans have been completed, the progress will be 30%."),(0,n.yg)("li",{parentName:"ul"},"TaskInfo: Job information in Json format:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"db: database name"),(0,n.yg)("li",{parentName:"ul"},"tbl: Table name"),(0,n.yg)("li",{parentName:"ul"},"partitions: Specify the exported partition. ",(0,n.yg)("inlineCode",{parentName:"li"},"*")," Represents all partitions."),(0,n.yg)("li",{parentName:"ul"},"exec MEM limit: query plan memory usage limit. Unit bytes."),(0,n.yg)("li",{parentName:"ul"},"column separator: The column separator for the exported file."),(0,n.yg)("li",{parentName:"ul"},"line delimiter: The line separator for the exported file."),(0,n.yg)("li",{parentName:"ul"},"tablet num: The total number of tablets involved."),(0,n.yg)("li",{parentName:"ul"},"Broker: The name of the broker used."),(0,n.yg)("li",{parentName:"ul"},"Coord num: Number of query plans."))),(0,n.yg)("li",{parentName:"ul"},"Path: Export path on remote storage."),(0,n.yg)("li",{parentName:"ul"},"CreateTime/StartTime/FinishTime: Creation time, start scheduling time and end time of jobs."),(0,n.yg)("li",{parentName:"ul"},"Timeout: Job timeout. The unit is seconds. This time is calculated from CreateTime."),(0,n.yg)("li",{parentName:"ul"},"Error Msg: If there is an error in the job, the cause of the error is shown here.")),(0,n.yg)("h3",{id:"cancel-export-job"},"Cancel export job"),(0,n.yg)("p",null,"After submitting a job, the job can be canceled by using the  ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},"CANCEL EXPORT"),"  command. For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n')),(0,n.yg)("h2",{id:"best-practices"},"Best Practices"),(0,n.yg)("h3",{id:"splitting-query-plans"},"Splitting Query Plans"),(0,n.yg)("p",null,"How many query plans need to be executed for an Export job depends on the total number of Tablets and how many Tablets can be allocated for a query plan at most. Since multiple query plans are executed serially, the execution time of jobs can be reduced if more fragments are processed by one query plan. However, if the query plan fails (e.g., the RPC fails to call Broker, the remote storage jitters, etc.), too many tablets can lead to a higher retry cost of a query plan. Therefore, it is necessary to arrange the number of query plans and the number of fragments to be scanned for each query plan in order to balance the execution time and the success rate of execution. It is generally recommended that the amount of data scanned by a query plan be within 3-5 GB (the size and number of tables in a table can be viewed by ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW TABLETS FROM tbl_name;"),"statement."),(0,n.yg)("h3",{id:"exec_mem_limit"},"exec","_","mem","_","limit"),(0,n.yg)("p",null,"Usually, a query plan for an Export job has only two parts ",(0,n.yg)("inlineCode",{parentName:"p"},"scan"),"- ",(0,n.yg)("inlineCode",{parentName:"p"},"export"),", and does not involve computing logic that requires too much memory. So usually the default memory limit of 2GB can satisfy the requirement. But in some scenarios, such as a query plan, too many Tablets need to be scanned on the same BE, or too many data versions of Tablets, may lead to insufficient memory. At this point, larger memory needs to be set through this parameter, such as 4 GB, 8 GB, etc."),(0,n.yg)("h2",{id:"notes"},"Notes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It is not recommended to export large amounts of data at one time. The maximum amount of exported data recommended by an Export job is tens of GB. Excessive export results in more junk files and higher retry costs."),(0,n.yg)("li",{parentName:"ul"},"If the amount of table data is too large, it is recommended to export it by partition."),(0,n.yg)("li",{parentName:"ul"},"During the operation of the Export job, if FE restarts or cuts the master, the Export job will fail, requiring the user to resubmit."),(0,n.yg)("li",{parentName:"ul"},"If the Export job fails, the ",(0,n.yg)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," temporary directory generated in the remote storage and the generated files will not be deleted, requiring the user to delete them manually."),(0,n.yg)("li",{parentName:"ul"},"If the Export job runs successfully, the ",(0,n.yg)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," directory generated in the remote storage may be retained or cleared according to the file system semantics of the remote storage. For example, in object storage (supporting the S3 protocol), after removing the last file in a directory through rename operation, the directory will also be deleted. If the directory is not cleared, the user can clear it manually."),(0,n.yg)("li",{parentName:"ul"},"When the Export runs successfully or fails, the FE reboots or cuts, then some information of the jobs displayed by ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW EXPORT")," will be lost and cannot be viewed."),(0,n.yg)("li",{parentName:"ul"},"Export jobs only export data from Base tables, not Rollup Index."),(0,n.yg)("li",{parentName:"ul"},"Export jobs scan data and occupy IO resources, which may affect the query latency of the system.")),(0,n.yg)("h2",{id:"relevant-configuration"},"Relevant configuration"),(0,n.yg)("h3",{id:"fe"},"FE"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"expo_checker_interval_second"),": Scheduling interval of Export job scheduler, default is 5 seconds. Setting this parameter requires restarting FE."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"export_running_job_num_limit "),": Limit on the number of Export jobs running. If exceeded, the job will wait and be in PENDING state. The default is 5, which can be adjusted at run time."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Export_task_default_timeout_second"),": Export job default timeout time. The default is 2 hours. It can be adjusted at run time."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"export_tablet_num_per_task"),": The maximum number of fragments that a query plan is responsible for. The default is 5."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"label"),": The label of this Export job. Doris will generate a label for an Export job if this param is not set.")),(0,n.yg)("h2",{id:"more-help"},"More Help"),(0,n.yg)("p",null,"For more detailed syntax and best practices used by Export, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},"Export")," command manual, you can also You can enter ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP EXPORT")," at the command line of the MySql client for more help."))}d.isMDXComponent=!0}}]);