"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[642],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function t(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?t(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,a,r=function(e,o){if(null==e)return{};var n,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var o=a.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},p=function(e){var o=l(e.components);return a.createElement(i.Provider,{value:o},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},u=a.forwardRef((function(e,o){var n=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(n),u=r,m=g["".concat(i,".").concat(u)]||g[u]||d[u]||t;return n?a.createElement(m,s(s({ref:o},p),{},{components:n})):a.createElement(m,s({ref:o},p))}));function m(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var t=n.length,s=new Array(t);s[0]=u;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c[g]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<t;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5806:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const t={id:"agregacao-criando-nossas-colecoes",slug:"agregacao-criando-nossas-colecoes",title:"Nossas Cole\xe7\xf5es",sidebar_position:2,tags:["pipeline"]},s="Cole\xe7\xf5es utilizadas para entendimento do t\xf3pico",c={unversionedId:"nosql/MongoDB/agregacao/agregacao-criando-nossas-colecoes",id:"nosql/MongoDB/agregacao/agregacao-criando-nossas-colecoes",title:"Nossas Cole\xe7\xf5es",description:"Vamos trabalhar com um caso hipot\xe9tico, tal como exposto no diagrama a seguir:",source:"@site/docs/nosql/MongoDB/agregacao/002-colecoes.mdx",sourceDirName:"nosql/MongoDB/agregacao",slug:"/nosql/MongoDB/agregacao/agregacao-criando-nossas-colecoes",permalink:"/senai-nosql/docs/nosql/MongoDB/agregacao/agregacao-criando-nossas-colecoes",draft:!1,editUrl:"https://github.com/jcristiano/senai-nosql/tree/main/docs/nosql/MongoDB/agregacao/002-colecoes.mdx",tags:[{label:"pipeline",permalink:"/senai-nosql/docs/tags/pipeline"}],version:"current",sidebarPosition:2,frontMatter:{id:"agregacao-criando-nossas-colecoes",slug:"agregacao-criando-nossas-colecoes",title:"Nossas Cole\xe7\xf5es",sidebar_position:2,tags:["pipeline"]},sidebar:"nosqlSidebar",previous:{title:"Conceitos sobre pipelines",permalink:"/senai-nosql/docs/nosql/MongoDB/agregacao/agregacao-conceito-pipeline"}},i={},l=[],p={toc:l},g="wrapper";function d(e){let{components:o,...n}=e;return(0,r.kt)(g,(0,a.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cole\xe7\xf5es-utilizadas-para-entendimento-do-t\xf3pico"},"Cole\xe7\xf5es utilizadas para entendimento do t\xf3pico"),(0,r.kt)("p",null,"Vamos trabalhar com um caso hipot\xe9tico, tal como exposto no diagrama a seguir:"),(0,r.kt)("mermaid",{value:"erDiagram\n    Produtos }|..|{ Pedidos : contem"}),(0,r.kt)("mermaid",{value:"classDiagram\n    Pedidos --\x3e Produtos\n    class Produtos{\n        +String nome\n        +Double preco\n    }\n    class Pedidos{\n        +Integer quantidade\n        +Date data\n    }"}))}d.isMDXComponent=!0}}]);