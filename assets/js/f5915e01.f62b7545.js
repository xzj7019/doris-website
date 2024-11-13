"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[210569],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>w});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,w=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(w,i(i({ref:n},u),{},{components:r})):t.createElement(w,i({ref:n},u))}));function w(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},817744:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(58168),o=(r(296540),r(15680));const a={title:"WINDOW_FUNCTION_PERCENT_RANK",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/window-functions/window-function-percent-rank",id:"sql-manual/sql-functions/window-functions/window-function-percent-rank",title:"WINDOW_FUNCTION_PERCENT_RANK",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/docs/sql-manual/sql-functions/window-functions/window-function-percent-rank.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-percent-rank",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-percent-rank",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_PERCENT_RANK",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_DENSE_RANK",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-dense-rank"},next:{title:"WINDOW_FUNCTION_CUME_DIST",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-cume-dist"}},l={},c=[{value:"WINDOW FUNCTION PERCENT_RANK",id:"window-function-percent_rank",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-percent_rank"},"WINDOW FUNCTION PERCENT_RANK"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"The PERCENT_RANK() is a window function that calculates the percentile rank of a row within a partition or result set."),(0,o.yg)("p",null,"The following shows the syntax of the PERCENT_RANK() function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"PERCENT_RANK() OVER (\n  PARTITION BY partition_expression \n  ORDER BY \n    sort_expression [ASC | DESC]\n)\n")),(0,o.yg)("p",null,"The PERCENT_RANK() function returns a number that ranges from zero to one."),(0,o.yg)("p",null,"For a specified row, PERCENT_RANK() calculates the rank of that row minus one, divided by 1 less than the number of rows in the evaluated partition or query result set:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"(rank - 1) / (total_rows - 1)\n")),(0,o.yg)("p",null,"In this formula, rank is the rank of a specified row and total_rows is the number of rows being evaluated."),(0,o.yg)("p",null,"The PERCENT_RANK() function always returns zero for the first row in a partition or result set. The repeated column values will receive the same PERCENT_RANK() value."),(0,o.yg)("p",null,"Similar to other window functions, the PARTITION BY clause distributes the rows into partitions and the ORDER BY clause specifies the logical order of rows in each partition. The PERCENT_RANK() function is calculated for each ordered partition independently."),(0,o.yg)("p",null,"Both PARTITION BY and ORDER BY clauses are optional. However, the PERCENT_RANK() is an order-sensitive function, therefore, you should always use the ORDER BY clause."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"// create table\nCREATE TABLE test_percent_rank (\n    productLine VARCHAR,\n    orderYear INT,\n    orderValue DOUBLE,\n    percentile_rank DOUBLE\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`orderYear`) BUCKETS 4\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n);\n\n// insert data into table\nINSERT INTO test_percent_rank (productLine, orderYear, orderValue, percentile_rank) VALUES\n('Motorcycles', 2003, 2440.50, 0.00),\n('Trains', 2003, 2770.95, 0.17),\n('Trucks and Buses', 2003, 3284.28, 0.33),\n('Vintage Cars', 2003, 4080.00, 0.50),\n('Planes', 2003, 4825.44, 0.67),\n('Ships', 2003, 5072.71, 0.83),\n('Classic Cars', 2003, 5571.80, 1.00),\n('Motorcycles', 2004, 2598.77, 0.00),\n('Vintage Cars', 2004, 2819.28, 0.17),\n('Planes', 2004, 2857.35, 0.33),\n('Ships', 2004, 4301.15, 0.50),\n('Trucks and Buses', 2004, 4615.64, 0.67),\n('Trains', 2004, 4646.88, 0.83),\n('Classic Cars', 2004, 8124.98, 1.00),\n('Ships', 2005, 1603.20, 0.00),\n('Motorcycles', 2005, 3774.00, 0.17),\n('Planes', 2005, 4018.00, 0.50),\n('Vintage Cars', 2005, 5346.50, 0.67),\n('Classic Cars', 2005, 5971.35, 0.83),\n('Trucks and Buses', 2005, 6295.03, 1.00);\n\n// query\nSELECT\n    productLine,\n    orderYear,\n    orderValue,\n    ROUND(\n    PERCENT_RANK()\n    OVER (\n        PARTITION BY orderYear\n        ORDER BY orderValue\n    ),2) percentile_rank\nFROM\n    test_percent_rank\nORDER BY\n    orderYear;\n\n// result\n+------------------+-----------+------------+-----------------+\n| productLine      | orderYear | orderValue | percentile_rank |\n+------------------+-----------+------------+-----------------+\n| Motorcycles      |      2003 |     2440.5 |               0 |\n| Trains           |      2003 |    2770.95 |            0.17 |\n| Trucks and Buses |      2003 |    3284.28 |            0.33 |\n| Vintage Cars     |      2003 |       4080 |             0.5 |\n| Planes           |      2003 |    4825.44 |            0.67 |\n| Ships            |      2003 |    5072.71 |            0.83 |\n| Classic Cars     |      2003 |     5571.8 |               1 |\n| Motorcycles      |      2004 |    2598.77 |               0 |\n| Vintage Cars     |      2004 |    2819.28 |            0.17 |\n| Planes           |      2004 |    2857.35 |            0.33 |\n| Ships            |      2004 |    4301.15 |             0.5 |\n| Trucks and Buses |      2004 |    4615.64 |            0.67 |\n| Trains           |      2004 |    4646.88 |            0.83 |\n| Classic Cars     |      2004 |    8124.98 |               1 |\n| Ships            |      2005 |     1603.2 |               0 |\n| Motorcycles      |      2005 |       3774 |             0.2 |\n| Planes           |      2005 |       4018 |             0.4 |\n| Vintage Cars     |      2005 |     5346.5 |             0.6 |\n| Classic Cars     |      2005 |    5971.35 |             0.8 |\n| Trucks and Buses |      2005 |    6295.03 |               1 |\n+------------------+-----------+------------+-----------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,PERCENT_RANK\n")))}d.isMDXComponent=!0}}]);