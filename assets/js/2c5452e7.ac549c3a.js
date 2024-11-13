"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82744],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},985519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const o={title:"Subquery",language:"en"},l=void 0,i={unversionedId:"query-data/subquery",id:"version-2.1/query-data/subquery",title:"Subquery",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query-data/subquery.md",sourceDirName:"query-data",slug:"/query-data/subquery",permalink:"/docs/query-data/subquery",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Subquery",language:"en"},sidebar:"docs",previous:{title:"Join",permalink:"/docs/query-data/join"},next:{title:"Multi-Dimensional Analytics",permalink:"/docs/query-data/multi-dimensional-analytics"}},s={},u=[{value:"Classification of Subqueries",id:"classification-of-subqueries",level:2},{value:"Classification Based on the Characteristics of Data Returned by Subqueries",id:"classification-based-on-the-characteristics-of-data-returned-by-subqueries",level:3},{value:"Classification Based on Whether the Subquery References Columns from the Outer Query",id:"classification-based-on-whether-the-subquery-references-columns-from-the-outer-query",level:3},{value:"Subqueries Supported by Doris",id:"subqueries-supported-by-doris",level:2},{value:"Limitations of Correlated Subqueries",id:"limitations-of-correlated-subqueries",level:2},{value:"Limitations of Correlated Scalar Subqueries",id:"limitations-of-correlated-scalar-subqueries",level:3},{value:"Limitations of Correlated (NOT) EXISTS Subqueries",id:"limitations-of-correlated-not-exists-subqueries",level:3},{value:"Limitations of Correlated (NOT) IN Subqueries",id:"limitations-of-correlated-not-in-subqueries",level:3},{value:"Limitations of Nested Subqueries",id:"limitations-of-nested-subqueries",level:3},{value:"Mark Join",id:"mark-join",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"For Correlated Scalar Subqueries",id:"for-correlated-scalar-subqueries",level:3},{value:"For Non-Correlated Scalar Subqueries",id:"for-non-correlated-scalar-subqueries",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A Subquery is an SQL query nested within another query (usually a SELECT statement). It can be used in the SELECT, FROM, WHERE, or HAVING clauses to provide data or conditions for the outer query. The use of subqueries makes SQL queries more flexible and powerful, as they allow us to solve more complex problems within a single query."),(0,a.yg)("p",null,"Some important features of subqueries are as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Position of Subqueries: Subqueries can be placed in multiple SQL clauses, such as the WHERE clause, HAVING clause, and FROM clause. They can be used with SELECT, UPDATE, INSERT, DELETE statements, and expression operators (such as comparison operators =, >, <, <=, as well as IN, EXISTS, etc.).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Relationship between Main Query and Subquery: A subquery is a query nested inside another query. The outer query is referred to as the main query, while the inner query is referred to as the subquery.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Execution Order: When there is no correlation between the subquery and the main query, the subquery is usually executed first. When there is a correlation, the parser decides which query to execute first in real-time as needed and uses the output of the subquery accordingly.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use of Parentheses: Subqueries must be enclosed in parentheses to distinguish them as nested within another query."))),(0,a.yg)("p",null,"Below, we will use tables t1 and t2 and related SQL to introduce the basic features and usage of subqueries. The table creation statements are as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create table t1\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n\ncreate table t2\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n')),(0,a.yg)("h2",{id:"classification-of-subqueries"},"Classification of Subqueries"),(0,a.yg)("h3",{id:"classification-based-on-the-characteristics-of-data-returned-by-subqueries"},"Classification Based on the Characteristics of Data Returned by Subqueries"),(0,a.yg)("p",null,"Subqueries can be classified into scalar and non-scalar subqueries based on the characteristics of the data they return:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Scalar Subquery")),(0,a.yg)("p",null,"A subquery that always returns a single value (essentially equivalent to a one-row, one-column Relation). If the subquery does not return any data, it returns a NULL value. Scalar subqueries can theoretically appear anywhere a single-value expression is allowed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Non-scalar Subquery")),(0,a.yg)("p",null,"A subquery that returns a Relation (different from the return value of a scalar subquery, this Relation can contain multiple rows and columns). If the subquery does not return any data, it returns an empty set (0 rows). Non-scalar subqueries can theoretically appear anywhere a relation (set) is allowed."),(0,a.yg)("p",null,"The following examples illustrate scalar and non-scalar subqueries (for the two subqueries in parentheses, when t2 is an empty table, the results returned by the two subqueries are different):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Scalar subquery, when t2 is an empty table, the subquery returns the scalar value null    \nselect * from t1 where t1.c1 > (select sum(t2.c1) from t2);    \n    \n-- Non-scalar subquery, when t2 is an empty table, the subquery returns an empty set (0 rows)    \nselect * from t1 where t1.c1 in (select t2.c1 from t2);\n")),(0,a.yg)("h3",{id:"classification-based-on-whether-the-subquery-references-columns-from-the-outer-query"},"Classification Based on Whether the Subquery References Columns from the Outer Query"),(0,a.yg)("p",null,"Subqueries can be classified into correlated subqueries and non-correlated subqueries based on whether they reference columns from the outer query:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Non-correlated Subquery")),(0,a.yg)("p",null,"A subquery that does not reference any columns from the outer query. Non-correlated subqueries can often be computed independently and return the corresponding results once for the outer query to use."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"4. Correlated Subquery")),(0,a.yg)("p",null,"A subquery that references one or more columns from the main query (also known as the outer query) (the referenced outer columns are often in the WHERE condition of the subquery). Correlated subqueries can often be seen as a filtering operation on the externally associated table, as for each row of data in the outer table, the subquery is computed and returns the corresponding result."),(0,a.yg)("p",null,"The following examples illustrate correlated and non-correlated subqueries:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Correlated subquery, the subquery internally uses the column t1.c2 from the outer table    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t2.c2 = t1.c2);    \n    \n-- Non-correlated subquery, the subquery internally does not use any columns from the outer table t1    \nselect * from t1 where t1.c1 in (select t2.c1 from tt2);\n")),(0,a.yg)("h2",{id:"subqueries-supported-by-doris"},"Subqueries Supported by Doris"),(0,a.yg)("p",null,"Doris supports all non-correlated subqueries and provides partial support for correlated subqueries as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supports correlated scalar subqueries in the ",(0,a.yg)("inlineCode",{parentName:"p"},"WHERE")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"HAVING")," clauses.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supports correlated ",(0,a.yg)("inlineCode",{parentName:"p"},"IN"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"NOT IN"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"EXISTS"),",",(0,a.yg)("inlineCode",{parentName:"p"},"NOT EXISTS")," non-scalar subqueries in the ",(0,a.yg)("inlineCode",{parentName:"p"},"WHERE")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"HAVING")," clauses.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supports correlated scalar subqueries in the ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," list.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"For nested subqueries, Doris only supports subqueries correlated to their immediate parent query and does not support cross-level correlation to outer queries beyond the parent."))),(0,a.yg)("h2",{id:"limitations-of-correlated-subqueries"},"Limitations of Correlated Subqueries"),(0,a.yg)("h3",{id:"limitations-of-correlated-scalar-subqueries"},"Limitations of Correlated Scalar Subqueries"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The correlation condition must be an equality condition.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The output of the subquery must be the result of a single aggregate function without a GROUP BY clause."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Single aggregate function without GROUP BY, supported    \nselect * from t1 where t1.c1 < (select max(t2.c1) from t2 where t1.c2 = t2.c2);    \n    \n-- Equivalent rewritten SQL as follows:    \nselect t1.* from t1 inner join (select t2.c2 as c2, max(t2.c1) as c1 from t2 group by t2.c2) tx on t1.c1 < tx.c1 and t1.c2 = tx.c2;    \n    \n-- Non-equality condition, not supported    \nselect * from t1 where t1.c1 = (select max(t2.c1) from t2 where t1.c2 > t2.c2);    \n    \n-- No aggregate function, not supported    \nselect * from t1 where t1.c1 = (select t2.c1 from t2 where t1.c2 = t2.c2);    \n    \n-- With aggregate function but includes GROUP BY, not supported    \nselect * from t1 where t1.c1 = (select max(t2.c1) from t2 where t1.c2 = t2.c2 group by t2.c2);\n")),(0,a.yg)("h3",{id:"limitations-of-correlated-not-exists-subqueries"},"Limitations of Correlated (NOT) EXISTS Subqueries"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The subquery cannot have both OFFSET and LIMIT.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- With LIMIT but no OFFSET, supported    \nselect * from t1 where exists (select t2.c1 from t2 where t1.c2 = t2.c2 limit 2);    \n    \n-- Equivalent rewritten SQL as follows:    \nselect * from t1 left semi join t2 on t1.c2 = t2.c2;    \n    \n-- With OFFSET and LIMIT, not supported    \nselect * from t1 where exists (select t2.c1 from t2 where t1.c2 = t2.c2 limit 2, 3);\n")),(0,a.yg)("h3",{id:"limitations-of-correlated-not-in-subqueries"},"Limitations of Correlated (NOT) IN Subqueries"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The output of the subquery must be a single column.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The subquery cannot have LIMIT.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The subquery cannot have aggregate functions or GROUP BY clauses."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Supported subquery    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2);    \n    \n-- Equivalent rewritten SQL as follows:    \nselect * from t1 left semi join t2 on t1.c1 = t2.c1 and t1.c2 = t2.c2;    \n    \n-- Subquery output is multiple columns, not supported    \nselect * from t1 where (t1.a, t1.c) in (select t2.c1, t2.c from t2 where t1.c2 = t2.c2);    \n    \n-- Subquery with LIMIT, not supported    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2 limit 3);    \n    \n-- With GROUP BY clause, not supported    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2 group by t2.c1);    \n    \n-- With aggregate function, not supported    \nselect * from t1 where t1.c1 in (select sum(t2.c1) from t2 where t1.c2 = t2.c2);\n")),(0,a.yg)("h3",{id:"limitations-of-nested-subqueries"},"Limitations of Nested Subqueries"),(0,a.yg)("p",null,"Currently, only subqueries that correlate directly with their immediate parent queries are supported. Correlation with outer layers of the parent query is not supported."),(0,a.yg)("p",null,"Assume there is another table ",(0,a.yg)("inlineCode",{parentName:"p"},"t3")," with the following creation statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create table t3  \n(  \n    c1 bigint,   \n    c2 bigint  \n)  \nDISTRIBUTED BY HASH(c1) BUCKETS 3  \nPROPERTIES ("replication_num" = "1");\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supported when the subquery only uses columns from its immediate parent query:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select   \n    t1.c1   \nfrom   \n    t1   \nwhere not exists (  \n    select   \n        t2.c1   \n    from   \n        t2   \n    where not exists (  \n        select   \n            t3.c1   \n        from   \n            t3   \n        where   \n            t3.c2 = t2.c2  \n    ) and t2.c2 = t1.c2  \n);\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Not supported when the innermost subquery uses columns from its immediate parent query ",(0,a.yg)("inlineCode",{parentName:"p"},"t2.c2")," and also columns from the outermost query ",(0,a.yg)("inlineCode",{parentName:"p"},"t1.c1"),":"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"  select   \n      t1.c1   \n  from   \n      t1   \n  where not exists (  \n      select   \n          t2.c1   \n      from   \n          t2   \n      where not exists (  \n          select   \n              t3.c1   \n          from   \n              t3   \n          where   \n              t3.c2 = t2.c2 and t3.c1 = t1.c1  \n      )  \n  );\n")))),(0,a.yg)("h2",{id:"mark-join"},"Mark Join"),(0,a.yg)("p",null,"In ",(0,a.yg)("inlineCode",{parentName:"p"},"where")," conditions, clauses with ",(0,a.yg)("inlineCode",{parentName:"p"},"or")," relationships composed of subqueries using ",(0,a.yg)("inlineCode",{parentName:"p"},"(not) in")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"(not) exists")," and other filtering conditions require special handling to produce correct results. An example is given below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select \n    t1.c1, \n    t1.c2 \nfrom t1 \nwhere exists (\n    select \n        t2.c1 \n    from t2 \n    where \n        t1.c2 = t2.c2\n    ) or t1.c1 > 0;\n")),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"exists")," clause in this SQL is directly implemented using ",(0,a.yg)("inlineCode",{parentName:"p"},"left semi join"),", according to the semantics of ",(0,a.yg)("inlineCode",{parentName:"p"},"left semi join"),", only rows from ",(0,a.yg)("inlineCode",{parentName:"p"},"t1")," that satisfy ",(0,a.yg)("inlineCode",{parentName:"p"},"t1.c2 = t2.c2")," will be output. However, rows that actually satisfy the condition ",(0,a.yg)("inlineCode",{parentName:"p"},"t1.c1 > 0")," should also be output. To achieve this, the mechanism of ",(0,a.yg)("inlineCode",{parentName:"p"},"Mark Join")," is introduced."),(0,a.yg)("admonition",{title:"Note",type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"right semi join")," is similar but differs in the left and right tables. Here, we use ",(0,a.yg)("inlineCode",{parentName:"p"},"left semi join")," as an example.")),(0,a.yg)("p",null,"Example SQL is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- This SQL cannot be executed and is only for demonstration purposes    \nselect     \n    tx.c1,     \n    tx.c2     \nfrom     \n    (    \n        select     \n            t1.c1,     \n            t1.c2,     \n            mark_join_flag     \n        from     \n            t1 left (mark) semi join t2 on t1.c2 = t2.c2    \n    ) tx    \nwhere     \n    tx.mark_join_flag or tx.c1 > 0;\n")),(0,a.yg)("p",null,"The difference between ",(0,a.yg)("inlineCode",{parentName:"p"},"Mark Join")," and a regular ",(0,a.yg)("inlineCode",{parentName:"p"},"left semi join")," is that a regular ",(0,a.yg)("inlineCode",{parentName:"p"},"left semi join")," directly outputs rows from the left table that meet the condition, while ",(0,a.yg)("inlineCode",{parentName:"p"},"Mark Join")," outputs the original left table with an additional flag column (the ",(0,a.yg)("inlineCode",{parentName:"p"},"mark_join_flag")," in the example) that can be ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),". The value of the flag is determined by the ",(0,a.yg)("inlineCode",{parentName:"p"},"join")," condition expression ",(0,a.yg)("inlineCode",{parentName:"p"},"t1.c2 = t2.c2"),", with each row corresponding to a flag value. The calculation of flag values is shown in the table below:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"t1.c1"),(0,a.yg)("th",{parentName:"tr",align:null},"t2.c1"),(0,a.yg)("th",{parentName:"tr",align:null},"mark_join_flag"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"TRUE")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"FALSE")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"NULL"),(0,a.yg)("td",{parentName:"tr",align:null},"NULL")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"NULL"),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"NULL")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"NULL"),(0,a.yg)("td",{parentName:"tr",align:null},"NULL"),(0,a.yg)("td",{parentName:"tr",align:null},"NULL")))),(0,a.yg)("p",null,"With this flag, the ",(0,a.yg)("inlineCode",{parentName:"p"},"where")," filtering condition can be rewritten as ",(0,a.yg)("inlineCode",{parentName:"p"},"where mark_join_flag or t1.c1 > 0")," to obtain the correct results."),(0,a.yg)("h2",{id:"common-issues"},"Common Issues"),(0,a.yg)("p",null,"Since the output of a scalar subquery must be a single value, Doris adopts different processing methods for correlated and non-correlated scalar subqueries."),(0,a.yg)("h3",{id:"for-correlated-scalar-subqueries"},"For Correlated Scalar Subqueries"),(0,a.yg)("p",null,"Currently, Doris can only statically ensure that the subquery outputs a single value (i.e., a single aggregate function without ",(0,a.yg)("inlineCode",{parentName:"p"},"group by"),"). Therefore, when using correlated scalar subqueries, a ",(0,a.yg)("inlineCode",{parentName:"p"},"group by"),"-less aggregate function such as ",(0,a.yg)("inlineCode",{parentName:"p"},"any_value")," needs to be added according to requirements, so that the optimizer can recognize the single-value semantics smoothly. Users need to ensure that the subquery always returns only one value. If the subquery actually returns multiple values (other database systems would report an error at runtime), due to the added aggregate function, it will always return one value, although the result may not match expectations."),(0,a.yg)("p",null,"Please refer to the following SQL example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Correlated scalar subquery lacking a single aggregate function without group by, currently not supported    \nselect t1.*, (select t2.c1 from t2 where t1.c2 = t2.c2) from t1;    \n  \n-- Add a single aggregate function for the optimizer to recognize smoothly    \nselect t1.*, (select any_value(t2.c1) from t2 where t1.c2 = t2.c2) from t1;\n")),(0,a.yg)("h3",{id:"for-non-correlated-scalar-subqueries"},"For Non-Correlated Scalar Subqueries"),(0,a.yg)("p",null,"Doris will add an ",(0,a.yg)("inlineCode",{parentName:"p"},"assert num rows")," operator at runtime. If the subquery returns more than one row of data, a runtime error will be reported."),(0,a.yg)("p",null,"Please refer to the following SQL example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Non-correlated scalar subquery, will report an error if table t2 has more than 1 row of data    \nselect t1.*, (select t2.c1 from t2) from t1;    \n  \n-- Example error message    \nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[CANCELLED]Expected EQ 1 to be returned by expression\n")))}m.isMDXComponent=!0}}]);