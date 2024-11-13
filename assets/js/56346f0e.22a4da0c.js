"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[315410],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>c});var i=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,r=function(e,a){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},u=function(e){var a=p(e.components);return i.createElement(s.Provider,{value:a},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},g=i.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(t),g=r,c=h["".concat(s,".").concat(g)]||h[g]||m[g]||l;return t?i.createElement(c,n(n({ref:a},u),{},{components:t})):i.createElement(c,n({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,n=new Array(l);n[0]=g;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[h]="string"==typeof e?e:r,n[1]=o;for(var p=2;p<l;p++)n[p]=t[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},202128:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(58168),r=(t(296540),t(15680));const l={title:"Release 2.1.7",language:"en"},n=void 0,o={unversionedId:"releasenotes/v2.1/release-2.1.7",id:"version-3.0/releasenotes/v2.1/release-2.1.7",title:"Release 2.1.7",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/releasenotes/v2.1/release-2.1.7.md",sourceDirName:"releasenotes/v2.1",slug:"/releasenotes/v2.1/release-2.1.7",permalink:"/docs/3.0/releasenotes/v2.1/release-2.1.7",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Release 2.1.7",language:"en"},sidebar:"releasenotes",previous:{title:"Release 3.0.2",permalink:"/docs/3.0/releasenotes/v3.0/release-3.0.2"},next:{title:"Release 2.1.6",permalink:"/docs/3.0/releasenotes/v2.1/release-2.1.6"}},s={},p=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Async Materialized View",id:"async-materialized-view",level:3},{value:"Query Execution",id:"query-execution",level:3},{value:"Storage Management",id:"storage-management",level:3},{value:"Others",id:"others",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Async Materialized View",id:"async-materialized-view-1",level:3},{value:"Query optimizer",id:"query-optimizer",level:3},{value:"Query Execution",id:"query-execution-1",level:3},{value:"Storage Management",id:"storage-management-1",level:3},{value:"Others",id:"others-1",level:3},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Async Materialized View",id:"async-materialized-view-2",level:3},{value:"Semi-Structured Data Management",id:"semi-structured-data-management",level:3},{value:"Query optimizer",id:"query-optimizer-1",level:3},{value:"Query Execution",id:"query-execution-2",level:3},{value:"Storage Management",id:"storage-management-2",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Others",id:"others-2",level:3}],u={toc:p},h="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,i.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Dear community, ",(0,r.yg)("strong",{parentName:"p"},"Apache Doris version 2.1.7 was officially released on September 10, 2024.")," This version brings continuous upgrades and improvementsAdditionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GitHub Release:")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,r.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The following global variables will be forcibly set to the following default values:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"enable_nereids_dml: true"),(0,r.yg)("li",{parentName:"ul"},"enable_nereids_dml_with_pipeline: true"),(0,r.yg)("li",{parentName:"ul"},"enable_nereids_planner: true"),(0,r.yg)("li",{parentName:"ul"},"enable_fallback_to_original_planner: true"),(0,r.yg)("li",{parentName:"ul"},"enable_pipeline_x_engine: true"))),(0,r.yg)("li",{parentName:"ul"},"New columns have been added to the audit log. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42262"},"#42262"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For more information, please  refer to ",(0,r.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/admin-manual/audit-plugin/"},"docs"))))),(0,r.yg)("h2",{id:"new-features"},"New features"),(0,r.yg)("h3",{id:"async-materialized-view"},"Async Materialized View"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An asynchronous materialized view has added a property called ",(0,r.yg)("inlineCode",{parentName:"li"},"use_for_rewrite")," to control whether it participates in transparent rewriting. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40332"},"#40332"))),(0,r.yg)("h3",{id:"query-execution"},"Query Execution"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The list of changed session variables is now output in the Profile. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41016"},"#41016")),(0,r.yg)("li",{parentName:"ul"},"Support for ",(0,r.yg)("inlineCode",{parentName:"li"},"trim_in"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"ltrim_in"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"rtrim_in")," functions has been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42641"},"#42641")," (Note: This is a duplicate mention, but I'm including it as per your original list.)"),(0,r.yg)("li",{parentName:"ul"},"Support for several URL functions (top_level_domain, first_significant_subdomain, cut_to_first_significant_subdomain) has been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42916"},"#42916")),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"bit_set")," function has been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42099"},"#42916")),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"count_substrings")," function has been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42055"},"#42055")),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"translate")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"url_encode")," functions have been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41051"},"#41051")),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"normal_cdf"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"to_iso8601"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"from_iso8601_date")," functions have been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40695"},"#40695")),(0,r.yg)("li",{parentName:"ul"},"(Duplicate entry, but for completeness) Support for ",(0,r.yg)("inlineCode",{parentName:"li"},"trim_in"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"ltrim_in"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"rtrim_in")," functions has been added. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42641"},"#42641"))),(0,r.yg)("h3",{id:"storage-management"},"Storage Management"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"information_schema.table_options")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"table_properties")," system tables have been added, supporting the querying of attributes set during table creation. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/34384"},"#34384")),(0,r.yg)("li",{parentName:"ul"},"Support for ",(0,r.yg)("inlineCode",{parentName:"li"},"bitmap_empty")," as a default value has been implemented. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40364"},"#40364")),(0,r.yg)("li",{parentName:"ul"},"A new session variable ",(0,r.yg)("inlineCode",{parentName:"li"},"require_sequence_in_insert")," has been introduced to control whether a sequence column must be provided when performing ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT INTO SELECT")," writes to a unique key table. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41655"},"#41655"))),(0,r.yg)("h3",{id:"others"},"Others"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Allow for generating flame graphs on the BE WebUI page.",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41044"},"#41044"))),(0,r.yg)("h2",{id:"improvements"},"Improvements"),(0,r.yg)("h3",{id:"lakehouse"},"Lakehouse"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support for writing data to Hive text format tables. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40537"},"#40537"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For more information, please  refer to ",(0,r.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build"},"docs")))),(0,r.yg)("li",{parentName:"ul"},"Access MaxCompute data using MaxCompute Open Storage API. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41610"},"#41610"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For more information, please  refer to ",(0,r.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/lakehouse/database/max-compute"},"docs")))),(0,r.yg)("li",{parentName:"ul"},"Support for Paimon DLF Catalog. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41694"},"#41694"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For more information, please  refer to ",(0,r.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/lakehouse/datalake-analytics/paimon"},"docs")))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("inlineCode",{parentName:"li"},"table$partitions")," syntax to directly query Hive partition information.",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41230"},"#41230"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For more information, please  refer to ",(0,r.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/lakehouse/datalake-analytics/hive"},"docs")))),(0,r.yg)("li",{parentName:"ul"},"Support for reading Parquet files in brotli compression format.",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42162"},"#42162")),(0,r.yg)("li",{parentName:"ul"},"Support for reading DECIMAL 256 types in Parquet files. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42241"},"#42241")),(0,r.yg)("li",{parentName:"ul"},"Support for reading Hive tables in OpenCsvSerde format.",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42939"},"#42939"))),(0,r.yg)("h3",{id:"async-materialized-view-1"},"Async Materialized View"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Refined the granularity of lock holding during the build process for asynchronous materialized views. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40402"},"#40402")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41010"},"#41010"),".")),(0,r.yg)("h3",{id:"query-optimizer"},"Query optimizer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved the accuracy of statistic information collection and usage in extreme cases to enhance planning stability. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40457"},"#40457")),(0,r.yg)("li",{parentName:"ul"},"Runtime filters can now be generated in more scenarios to improve query performance. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40815"},"#40815")),(0,r.yg)("li",{parentName:"ul"},"Enhanced constant folding capabilities for numerical, date, and string functions to boost query performance.  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40820"},"#40820")),(0,r.yg)("li",{parentName:"ul"},"Optimized the column pruning algorithm to enhance query performance. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41548"},"#41548"))),(0,r.yg)("h3",{id:"query-execution-1"},"Query Execution"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Supported parallel preparation to reduce the time consumed by short queries. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40270"},"#40270")),(0,r.yg)("li",{parentName:"ul"},"Corrected the names of some counters in the profile to match the audit logs. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41993"},"#41993")),(0,r.yg)("li",{parentName:"ul"},"Added new local shuffle rules to speed up certain queries. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40637"},"#40637"))),(0,r.yg)("h3",{id:"storage-management-1"},"Storage Management"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW PARTITIONS")," command now supports displaying the commit version. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28274"},"#28274")),(0,r.yg)("li",{parentName:"ul"},"Checked for unreasonable partition expressions when creating tables. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40158"},"#40158")),(0,r.yg)("li",{parentName:"ul"},"Optimized the scheduling logic when encountering EOF in Routine Load. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40509"},"#40509")),(0,r.yg)("li",{parentName:"ul"},"Made Routine Load aware of schema changes. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40508"},"#40508")),(0,r.yg)("li",{parentName:"ul"},"Improved the timeout logic for Routine Load tasks. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41135"},"#41135"))),(0,r.yg)("h3",{id:"others-1"},"Others"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Allowed closing the built-in service port of BRPC via BE configuration. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41047"},"#41047")),(0,r.yg)("li",{parentName:"ul"},"Fixed issues with missing fields and duplicate records in audit logs. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/43015"},"#43015"))),(0,r.yg)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.yg)("h3",{id:"lakehouse-1"},"Lakehouse"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the inconsistency in the behavior of INSERT OVERWRITE with Hive. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/39840"},"#39840")),(0,r.yg)("li",{parentName:"ul"},"Cleaned up temporarily created folders to address the issue of too many empty folders on HDFS.  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40424"},"#40424")),(0,r.yg)("li",{parentName:"ul"},"Resolved memory leaks in FE caused by using the JDBC Catalog in some cases. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40923"},"#40923")),(0,r.yg)("li",{parentName:"ul"},"Resolved memory leaks in BE caused by using the JDBC Catalog in some cases. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41266"},"#41266")),(0,r.yg)("li",{parentName:"ul"},"Fixed errors in reading Snappy compressed formats in certain scenarios. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40862"},"#40862")),(0,r.yg)("li",{parentName:"ul"},"Addressed potential FileSystem leaks on the FE side in certain scenarios. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41108"},"#41108")),(0,r.yg)("li",{parentName:"ul"},"Resolved issues where using EXPLAIN VERBOSE to view external table execution plans could cause null pointer exceptions in some cases. ","[#41231]"," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41231"},"https://github.com/apache/doris/pull/41231"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed the inability to read tables in Paimon parquet format. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41487"},"#41487")),(0,r.yg)("li",{parentName:"ul"},"Addressed performance issues introduced by compatibility changes in the JDBC Oracle Catalog.  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41407"},"#41407")),(0,r.yg)("li",{parentName:"ul"},"Disabled predicate pushing down after implicit conversion to resolve incorrect query results in some cases with JDBC Catalog. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42242"},"#42242")),(0,r.yg)("li",{parentName:"ul"},"Fixed issues with case-sensitive access to table names in the External Catalog. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/42261"},"#42261"))),(0,r.yg)("h3",{id:"async-materialized-view-2"},"Async Materialized View"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the issue where user-specified start times were not effective. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/39573"},"#39573")),(0,r.yg)("li",{parentName:"ul"},"Resolved the issue of nested materialized views not refreshing. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40433"},"#40433")),(0,r.yg)("li",{parentName:"ul"},"Fixed the issue where materialized views might not refresh after the base table was deleted and recreated.  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41762"},"#41762")),(0,r.yg)("li",{parentName:"ul"},"Addressed issues where partition compensation rewrites could lead to incorrect results. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40803"},"#40803")),(0,r.yg)("li",{parentName:"ul"},"Fixed potential errors in rewrite results when ",(0,r.yg)("inlineCode",{parentName:"li"},"sql_select_limit")," was set. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40106"},"#40106"))),(0,r.yg)("h3",{id:"semi-structured-data-management"},"Semi-Structured Data Management"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the issue of index file handle leaks. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41915"},"#41915")),(0,r.yg)("li",{parentName:"ul"},"Addressed inaccuracies in the ",(0,r.yg)("inlineCode",{parentName:"li"},"count()")," function of inverted indexes in special cases. (#41127)","[https://github.com/apache/doris/pull/41127]"),(0,r.yg)("li",{parentName:"ul"},"Fixed exceptions with variant when light schema change was not enabled. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40908"},"#40908")),(0,r.yg)("li",{parentName:"ul"},"Resolved memory leaks when variant returns arrays. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41339"},"#41339"))),(0,r.yg)("h3",{id:"query-optimizer-1"},"Query optimizer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Corrected potential errors in nullable calculations for filter conditions during external table queries, leading to execution exceptions. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41014"},"#41014")),(0,r.yg)("li",{parentName:"ul"},"Fixed potential errors in optimizing range comparison expressions. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41356"},"#41356"))),(0,r.yg)("h3",{id:"query-execution-2"},"Query Execution"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The match_regexp function could not correctly handle empty strings. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/39503"},"#39503")),(0,r.yg)("li",{parentName:"ul"},"Resolved issues where the scanner thread pool could become stuck in high-concurrency scenarios. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40495"},"#40495")),(0,r.yg)("li",{parentName:"ul"},"Fixed errors in the results of the ",(0,r.yg)("inlineCode",{parentName:"li"},"data_floor")," function. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41948"},"#41948")),(0,r.yg)("li",{parentName:"ul"},"Addressed incorrect cancel messages in some scenarios. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41798"},"#41798")),(0,r.yg)("li",{parentName:"ul"},"Fixed issues with excessive warning logs printed by arrow flight. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41770"},"#41770")),(0,r.yg)("li",{parentName:"ul"},"Resolved issues where runtime filters failed to send in some scenarios. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41698"},"#41698")),(0,r.yg)("li",{parentName:"ul"},"Fixed problems where some system table queries could not end normally or became stuck. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41592"},"#41592")),(0,r.yg)("li",{parentName:"ul"},"Addressed incorrect results from window functions. ]",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40761"},"#40761")),(0,r.yg)("li",{parentName:"ul"},"Fixed issues where the encrypt and decrypt functions caused BE cores. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40726"},"#40726")),(0,r.yg)("li",{parentName:"ul"},"Resolved errors in the results of the conv function. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40530"},"#40530"))),(0,r.yg)("h3",{id:"storage-management-2"},"Storage Management"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed import failures when Memtable migration was used in multi-replica scenarios with machine crashes.  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/38003"},"#38003")),(0,r.yg)("li",{parentName:"ul"},"Addressed inaccurate memory statistics during the Memtable flush phase during imports. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/39536"},"#39536")),(0,r.yg)("li",{parentName:"ul"},"Fixed fault tolerance issues with Memtable migration in multi-replica scenarios. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40477"},"#40477")),(0,r.yg)("li",{parentName:"ul"},"Resolved inaccurate bvar statistics with Memtable migration. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40985"},"#40985")),(0,r.yg)("li",{parentName:"ul"},"Fixed inaccurate progress reporting for S3 loads. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/40987"},"#40987"))),(0,r.yg)("h3",{id:"permissions"},"Permissions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed permission issues related to show columns, show sync, and show data from db.table. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/39726"},"#39726"))),(0,r.yg)("h3",{id:"others-2"},"Others"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the issue where the audit log plugin for version 2.0 could not be used in version 2.1. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/41400"},"#41400"))))}m.isMDXComponent=!0}}]);