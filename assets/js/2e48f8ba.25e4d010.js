"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[1243],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||n;return o?r.createElement(f,s(s({ref:t},d),{},{components:o})):r.createElement(f,s({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},420:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const n={id:"novas-arquiteturas",title:"Novas Representa\xe7\xf5es",sidebar_position:1},s="Modelos de dados alternativos",i={unversionedId:"nosql/novas-arquiteturas",id:"nosql/novas-arquiteturas",title:"Novas Representa\xe7\xf5es",description:"Estamos habituados com o modelo relacional que \xe9 composto basicamente por tabelas, colunas e linhas, e que tem como principais caracter\xedsticas a integridade dos dados e a necessidade de modelar toda estrutura antes de seu uso (conhecido como schema-first).",source:"@site/docs/nosql/002-novas_arquiteturas.mdx",sourceDirName:"nosql",slug:"/nosql/novas-arquiteturas",permalink:"/senai-nosql/docs/nosql/novas-arquiteturas",draft:!1,editUrl:"https://github.com/jcristiano/senai-nosql/tree/main/docs/nosql/002-novas_arquiteturas.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"novas-arquiteturas",title:"Novas Representa\xe7\xf5es",sidebar_position:1},sidebar:"nosqlSidebar",previous:{title:"Um pouco de hist\xf3ria",permalink:"/senai-nosql/docs/nosql/intro"},next:{title:"MongoDB",permalink:"/senai-nosql/docs/category/mongodb"}},l={},c=[],d={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modelos-de-dados-alternativos"},"Modelos de dados alternativos"),(0,a.kt)("p",null,"Estamos habituados com o modelo relacional que \xe9 composto basicamente por tabelas, colunas e linhas, e que tem como principais caracter\xedsticas a integridade dos dados e a necessidade de modelar toda estrutura antes de seu uso (conhecido como schema-first)."),(0,a.kt)("p",null,"Com o modelo relacional conseguimos, quase que naturalmente, modelar qualquer necessidade de armazenamento de dados, entretanto o modelo relacional nem sempre \xe9 o mais adequado para certas necessidades, como por exemplo: \xe1rvores (estrutura hier\xe1rquica) ou estruturas din\xe2micas."),(0,a.kt)("p",null,"Atualmente, no universo de ferramentas noSQL, se destacam quatro diferentes tipos de modelos de dados: Chave-Valor, Orientado a Documento, Fam\xedlia de Colunas (ou clone de BigTable) e Grafo."),(0,a.kt)("p",null,"Nas pr\xf3ximas se\xe7\xf5es iremos explorar cada um destes modelos em detalhe, iniciando pelo mais simples, mas n\xe3o menos poderoso: chave-valor."))}m.isMDXComponent=!0}}]);