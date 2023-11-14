"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[6111],{3905:(e,o,n)=>{n.d(o,{Zo:()=>u,kt:()=>f});var t=n(7294);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,t,a=function(e,o){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=l(e.components);return t.createElement(c.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?t.createElement(f,i(i({ref:o},u),{},{components:n})):t.createElement(f,i({ref:o},u))}));function f(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1722:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const r={id:"relacionamento-um-para-muitos-atividades-cinco",slug:"relacionamento-um-para-muitos-atividades-cinco",title:"Exerc\xedcio 005",sidebar_position:5,tags:["atividade","operadores","agrega\xe7\xe3o"]},i="Encontre todos os funcion\xe1rios contratados em 2022",s={unversionedId:"nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-cinco",id:"nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-cinco",title:"Exerc\xedcio 005",description:"",source:"@site/docs/nosql/MongoDB/relacionamentos/resolucao/005-quinto.mdx",sourceDirName:"nosql/MongoDB/relacionamentos/resolucao",slug:"/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-cinco",permalink:"/senai-nosql/docs/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-cinco",draft:!1,editUrl:"https://github.com/jcristiano/senai-nosql/tree/main/docs/nosql/MongoDB/relacionamentos/resolucao/005-quinto.mdx",tags:[{label:"atividade",permalink:"/senai-nosql/docs/tags/atividade"},{label:"operadores",permalink:"/senai-nosql/docs/tags/operadores"},{label:"agrega\xe7\xe3o",permalink:"/senai-nosql/docs/tags/agregacao"}],version:"current",sidebarPosition:5,frontMatter:{id:"relacionamento-um-para-muitos-atividades-cinco",slug:"relacionamento-um-para-muitos-atividades-cinco",title:"Exerc\xedcio 005",sidebar_position:5,tags:["atividade","operadores","agrega\xe7\xe3o"]},sidebar:"nosqlSidebar",previous:{title:"Exerc\xedcio 004",permalink:"/senai-nosql/docs/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-quatro"},next:{title:"Exerc\xedcio 006",permalink:"/senai-nosql/docs/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-sexto"}},c={},l=[],u={toc:l},d="wrapper";function m(e){let{components:o,...n}=e;return(0,a.kt)(d,(0,t.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encontre-todos-os-funcion\xe1rios-contratados-em-2022"},"Encontre todos os funcion\xe1rios contratados em 2022"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'db.setores.aggregate([\n  {\n    $unwind: "$funcionarios"\n  },\n  {\n    $match: {\n      "funcionarios.dataContratacao": {\n        $gte: ISODate("2022-01-01"),\n        $lt: ISODate("2023-01-01")\n      }\n    }\n  }\n]);\n')))}m.isMDXComponent=!0}}]);