"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[197],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>g});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},c=function(e){var o=l(e.components);return n.createElement(p.Provider,{value:o},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(g,s(s({ref:o},c),{},{components:t})):n.createElement(g,s({ref:o},c))}));function g(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6030:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const r={id:"mongodb-types-bson",title:"BSON",sidebar_position:1,tags:["bson","types"]},s="BSON types",i={unversionedId:"nosql/MongoDB/BSON/mongodb-types-bson",id:"nosql/MongoDB/BSON/mongodb-types-bson",title:"BSON",description:"BSON (Binary JSON | JSON Bin\xe1rio ) \xe9 uma serializa\xe7\xe3o bin\xe1ria utilizada para armazenar documentos e para fazer chamadas a interfaces do MongoDB. A especifica\xe7\xe3o do BSON \xe9 encontrada em bsonspec.org",source:"@site/docs/nosql/MongoDB/003-BSON/001-bson.mdx",sourceDirName:"nosql/MongoDB/003-BSON",slug:"/nosql/MongoDB/BSON/mongodb-types-bson",permalink:"/senai-nosql/docs/nosql/MongoDB/BSON/mongodb-types-bson",draft:!1,editUrl:"https://github.com/jcristiano/senai-nosql/tree/main/docs/nosql/MongoDB/003-BSON/001-bson.mdx",tags:[{label:"bson",permalink:"/senai-nosql/docs/tags/bson"},{label:"types",permalink:"/senai-nosql/docs/tags/types"}],version:"current",sidebarPosition:1,frontMatter:{id:"mongodb-types-bson",title:"BSON",sidebar_position:1,tags:["bson","types"]},sidebar:"nosqlSidebar",previous:{title:"Tipos de Dados",permalink:"/senai-nosql/docs/category/tipos-de-dados"},next:{title:"Agregacao",permalink:"/senai-nosql/docs/category/agregacao"}},p={},l=[{value:"Alguns tipos",id:"alguns-tipos",level:2}],c={toc:l},d="wrapper";function u(e){let{components:o,...t}=e;return(0,a.kt)(d,(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bson-types"},"BSON types"),(0,a.kt)("p",null,"BSON (Binary JSON | JSON Bin\xe1rio ) \xe9 uma serializa\xe7\xe3o bin\xe1ria utilizada para armazenar documentos e para fazer chamadas a interfaces do MongoDB. A especifica\xe7\xe3o do BSON \xe9 encontrada em ",(0,a.kt)("a",{parentName:"p",href:"http://bsonspec.org/"},"bsonspec.org")),(0,a.kt)("p",null,"Each BSON type has both integer and string identifiers as listed in the following table:"),(0,a.kt)("p",null,"Cada tipo de dados no formato BSON."),(0,a.kt)("h2",{id:"alguns-tipos"},"Alguns tipos"),(0,a.kt)("p",null,"O MongoDB armazena registros de dados como documentos BSON, que \xe9 uma representa\xe7\xe3o bin\xe1ria de documentos JSON."),(0,a.kt)("p",null,"O valor de um campo em um documento pode ser qualquer um dos tipos de dados BSON, incluindo outros documentos, matrizes e matrizes de documentos, ent\xe3o vamos conhecer alguns desses tipos de dados?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NULL"),": armazena valores nulos;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Boolean"),": pode armazenar valores true ou falso;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Number"),": n\xfamero com sinal que pode ter uma nota\xe7\xe3o com E exponencial;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inteiro"),": pode armazenar o tipo de dados inteiro em duas formas, inteiro assinado de 32 bits e inteiro assinado de 64 bits;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"String"),": uma sequ\xeancia de um ou mais caracteres Unicode;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Object"),": um array n\xe3o ordenado com itens do tipo chave/valor, tamb\xe9m conhecidos como documentos aninhados;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Array"),": armazena uma lista ordenada de qualquer tipo, criada usando colchetes e com cada elemento separado por v\xedrgulas;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ObjectId"),": identificador \xfanico de um registro do MongoDB;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Date()"),": retorna a data atual em formato de string; e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"New Date()")," e ",(0,a.kt)("strong",{parentName:"p"},"ISODate()"),": retornam um objeto de data."))}u.isMDXComponent=!0}}]);