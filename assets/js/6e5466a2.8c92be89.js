"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[799],{3905:(e,o,a)=>{a.d(o,{Zo:()=>l,kt:()=>v});var n=a(7294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=n.createContext({}),m=function(e){var o=n.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},l=function(e){var o=m(e.components);return n.createElement(d.Provider,{value:o},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=t,v=c["".concat(d,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(v,i(i({ref:o},l),{},{components:a})):n.createElement(v,i({ref:o},l))}));function v(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s[c]="string"==typeof e?e:t,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8199:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),t=(a(7294),a(3905));const r={sidebar_position:1},i="Um pouco de hist\xf3ria",s={unversionedId:"nosql/intro",id:"nosql/intro",title:"Um pouco de hist\xf3ria",description:"Antes de falar sobre noSQL, vamos entender um pouco da hist\xf3ria dos sistemas de gerenciamento de dados desde seu surgimento at\xe9 o aparecimento deste movimento chamado noSQL. Esta vis\xe3o hist\xf3rica \xe9 importante porque, como escreveu o fil\xf3sofo George Santayana, \u201caqueles que n\xe3o podem lembrar o passado, est\xe3o condenados a repeti-lo\u201d.",source:"@site/docs/nosql/intro.mdx",sourceDirName:"nosql",slug:"/nosql/intro",permalink:"/senai-nosql/docs/nosql/intro",draft:!1,editUrl:"https://github.com/jcristiano/senai-nosql/tree/main/docs/nosql/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"nosqlSidebar"},d={},m=[{value:"O movimento noSQL",id:"o-movimento-nosql",level:2}],l={toc:m},c="wrapper";function p(e){let{components:o,...a}=e;return(0,t.kt)(c,(0,n.Z)({},l,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"um-pouco-de-hist\xf3ria"},"Um pouco de hist\xf3ria"),(0,t.kt)("p",null,"Antes de falar sobre noSQL, vamos entender um pouco da hist\xf3ria dos sistemas de gerenciamento de dados desde seu surgimento at\xe9 o aparecimento deste movimento chamado noSQL. Esta vis\xe3o hist\xf3rica \xe9 importante porque, como escreveu o fil\xf3sofo George Santayana, \u201caqueles que n\xe3o podem lembrar o passado, est\xe3o condenados a repeti-lo\u201d."),(0,t.kt)("p",null,"Nos \xfaltimos 30 anos temos vivido a \u201cditadura\u201d do modelo relacional, por\xe9m, \xe9 importante lembrar que os primeiros sistemas de gerenciamento de bancos de dados (ou SGBDs) n\xe3o eram baseados em estruturas relacionais, e sim hier\xe1rquicas (IMS-DB, final dos anos 1960) ou baseados em grafo (CODASYL \u2013 anos 1970). O modelo relacional s\xf3 seria apresentado por \u201cTed\u201d Codd no in\xedcio dos anos 1970 e realmente adotado apenas no final dos anos 1980."),(0,t.kt)("p",null,"Entretanto, ap\xf3s o modelo relacional ter se estabelecido, e sido largamente adotado, poucas iniciativas tentaram propor um modelo alternativo, e as poucas alternativas que surgiram n\xe3o tiveram muito sucesso (como os bancos de dados orientados a objeto ou bancos xml)."),(0,t.kt)("p",null,"Um ponto interessante e comum a cada nova proposta de modelos alternativos (isso desde o in\xedcio, l\xe1 nos anos 1960) \xe9 a tentativa de invalidar e substituir por completo o modelo dominante, isso at\xe9 agora..."),(0,t.kt)("h2",{id:"o-movimento-nosql"},"O movimento noSQL"),(0,t.kt)("p",null,"O movimento noSQL teve sua origem em junho de 2009, para nomear um encontro promovido por Johan Oskarsson e Eric Evans, que teve como objetivo discutir o crescente surgimento de solu\xe7\xf5es open source de armazenamento de dados distribu\xeddos n\xe3o relacionais. Em outubro do mesmo ano, foi realizada a confer\xeancia \u201cno:sql(east)\u201d, que redefiniu o uso do termo noSQL para descrever solu\xe7\xf5es de armazenamento de dados n\xe3o relacionais."),(0,t.kt)("p",null,"Podemos considerar noSQL como uma nova onda de SGBDs, pois prop\xf5e algumas alternativas ao modelo relacional, por\xe9m com uma grande diferen\xe7a hist\xf3rica: o movimento noSQL n\xe3o tem como objetivo invalidar ou promover a total substitui\xe7\xe3o do modelo relacional, e sim o fim do modelo relacional como bala de prata, como a \xfanica solu\xe7\xe3o correta ou v\xe1lida. Inclusive, \xe9 importante entender que noSQL n\xe3o significa \u201cno SQL\u201d (n\xe3o ao SQL), mas sim \u201cnot only SQL\u201d (n\xe3o s\xf3 SQL)."),(0,t.kt)("p",null,"Com isso, temos, pela primeira vez na hist\xf3ria, uma nova onda surgindo sem o objetivo de substituir por completo o modelo atual (relacional)."),(0,t.kt)("admonition",{title:"A origem do Termo NoSQL",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Ao que tudo indica o termo noSQL foi criado em 1998 por Carlo Strozzi para nomear seu projeto open source, que tinha como objetivo ser uma implementa\xe7\xe3o mais leve de um banco de dados relacional, por\xe9m sua principal caracter\xedstica era n\xe3o expor a interface SQL"),(0,t.kt)("p",{parentName:"admonition"},"Portanto \xe9 bem ir\xf4nico usar o termo noSQL, criado para nomear um banco de dados relacional, para classificar solu\xe7\xf5es de armazenamento de dados n\xe3o relacionais.")),(0,t.kt)("p",null,"Ap\xf3s esta importante vis\xe3o hist\xf3rica, iremos agora nos aprofundar nas caracter\xedsticas das solu\xe7\xf5es chamadas noSQL. Esta explora\xe7\xe3o ser\xe1 dividida em duas \xe1reas distintas, por\xe9m complementares: Modelos de Dados e Caracter\xedsticas de Arquitetura. Vamos iniciar esta explora\xe7\xe3o pelos modelos alternativos ao relacional, pois esta \xe9 a porta de entrada para compreender melhor as propostas destas ferramentas noSQL."),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Conte\xfado retirado do site ",(0,t.kt)("a",{parentName:"p",href:"https://www.devmedia.com.br/"},"DevMedia")),(0,t.kt)("p",{parentName:"admonition"},"Voc\xea pode visitar o conte\xfado original a partir do artigo ",(0,t.kt)("a",{parentName:"p",href:"https://www.devmedia.com.br/o-que-e-nosql-java-magazine-86/18777"},"O que \xe9 noSQL?")," publicado na Java Magazine 86")))}p.isMDXComponent=!0}}]);