"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[105494],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},y=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},y),{},{components:t})):r.createElement(m,a({ref:n},y))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},409129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"AES_ENCRYPT",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt",id:"sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt",title:"AES_ENCRYPT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt",draft:!1,tags:[],version:"current",frontMatter:{title:"AES_ENCRYPT",language:"en"},sidebar:"docs",previous:{title:"uuid_numeric",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/uuid_numeric"},next:{title:"AES_DECRYPT",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt"}},s={},c=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],y={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"AES encryption function. This function behaves like the ",(0,i.yg)("inlineCode",{parentName:"p"},"AES_ENCRYPT")," function in MySQL. By default, it uses the ",(0,i.yg)("inlineCode",{parentName:"p"},"AES_128_ECB")," algorithm with ",(0,i.yg)("inlineCode",{parentName:"p"},"PKCS7")," padding mode. The underlying encryption is done using the OpenSSL library.\nReference: ",(0,i.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt")),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR AES_ENCRYPT(VARCHAR str, VARCHAR key_str[, VARCHAR init_vector][, VARCHAR encryption_mode])")),(0,i.yg)("p",null,"Returns the encrypted result, where:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"str")," is the text to be encrypted;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"key_str")," is the key. Note that this key is not a hexadecimal encoding, but a string representation of the encoded key. For example, for 128-bit key encryption, ",(0,i.yg)("inlineCode",{parentName:"li"},"key_str")," should be 16-length. If the key is not long enough, use ",(0,i.yg)("strong",{parentName:"li"},"zero padding")," to make it up. If it is longer than that, the final key is found using a cyclic xor method. For example, if the 128-bit key used by the algorithm finally is ",(0,i.yg)("inlineCode",{parentName:"li"},"key"),", then ",(0,i.yg)("inlineCode",{parentName:"li"},"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ...")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"init_vector")," is the initial vector to be used in the algorithm, this is only valid for some algorithms, if not specified then Doris will use the built-in value;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"encryption_mode")," is the encryption algorithm, optionally available in variable.")),(0,i.yg)("h4",{id:"remarks"},"Remarks"),(0,i.yg)("p",null,"For the incoming key, the AES_ENCRYPT function not directly uses, but will further process it. The specific steps are as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"According to the encryption algorithm used, determine the number of bytes of the key, for example, if you use the AES_128_ECB algorithm, the number of bytes of the key is ",(0,i.yg)("inlineCode",{parentName:"li"},"128 / 8 = 16")," (if you use the AES_256_ECB algorithm, the number of bytes of the key is ",(0,i.yg)("inlineCode",{parentName:"li"},"128 / 8 = 32"),"). 2;"),(0,i.yg)("li",{parentName:"ol"},"then for the key entered by the user, bits ",(0,i.yg)("inlineCode",{parentName:"li"},"i")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"16*k+i")," are used to perform an isomorphism, followed by a zero if the key entered by the user is less than 16 bits. 3. finally, the newly generated key is used to generate a new key;"),(0,i.yg)("li",{parentName:"ol"},"finally, the newly generated key is used for encryption.")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set block_encryption_mode='';\nQuery OK, 0 rows affected (0.10 sec)\n\nmysql> select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n+----------------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '', 'AES_128_ECB')) |\n+----------------------------------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==                                 |\n+----------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n+----------------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '', 'AES_256_CBC')) |\n+----------------------------------------------------------+\n| 3dym0E7/+1zbrLIaBVNHSw==                                 |\n+----------------------------------------------------------+\n1 row in set (0.14 sec)\n\nmysql> select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+--------------------------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789', 'AES_256_CBC')) |\n+--------------------------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                                           |\n+--------------------------------------------------------------------+\n1 row in set (0.13 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"AES_ENCRYPT, AES, ENCRYPT\n")))}u.isMDXComponent=!0}}]);