"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[1175],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>g});var a=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),l=function(e){var o=a.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},d=function(e){var o=l(e.components);return a.createElement(c.Provider,{value:o},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},p=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=t,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(g,i(i({ref:o},d),{},{components:n})):a.createElement(g,i({ref:o},d))}));function g(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[m]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7580:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),t=(n(7294),n(3905));const r={id:"relacionamento-um-para-muitos-atividades-um",slug:"relacionamento-um-para-muitos-atividades-um",title:"Exerc\xedcio 001",sidebar_position:1,tags:["atividade","operadores","agrega\xe7\xe3o"]},i="Recuperar todos os setores que t\xeam um nome com mais de 10 caracteres",s={unversionedId:"nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-um",id:"nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-um",title:"Exerc\xedcio 001",description:"Processo de desenvolvimento da atividades",source:"@site/docs/nosql/MongoDB/relacionamentos/resolucao/001-primeiro.mdx",sourceDirName:"nosql/MongoDB/relacionamentos/resolucao",slug:"/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-um",permalink:"/senai-nosql/docs/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-um",draft:!1,editUrl:"https://github.com/jcristiano/senai-nosql/tree/main/docs/nosql/MongoDB/relacionamentos/resolucao/001-primeiro.mdx",tags:[{label:"atividade",permalink:"/senai-nosql/docs/tags/atividade"},{label:"operadores",permalink:"/senai-nosql/docs/tags/operadores"},{label:"agrega\xe7\xe3o",permalink:"/senai-nosql/docs/tags/agregacao"}],version:"current",sidebarPosition:1,frontMatter:{id:"relacionamento-um-para-muitos-atividades-um",slug:"relacionamento-um-para-muitos-atividades-um",title:"Exerc\xedcio 001",sidebar_position:1,tags:["atividade","operadores","agrega\xe7\xe3o"]},sidebar:"nosqlSidebar",previous:{title:"Solu\xe7\xe3o dos Exerc\xedcios",permalink:"/senai-nosql/docs/category/solu\xe7\xe3o-dos-exerc\xedcios"},next:{title:"Exerc\xedcio 002",permalink:"/senai-nosql/docs/nosql/MongoDB/relacionamentos/resolucao/relacionamento-um-para-muitos-atividades-dois"}},c={},l=[{value:"Processo de desenvolvimento da atividades",id:"processo-de-desenvolvimento-da-atividades",level:2},{value:"Cria\xe7\xe3o das cole\xe7\xf5es no MongoDB",id:"cria\xe7\xe3o-das-cole\xe7\xf5es-no-mongodb",level:3},{value:"Uma poss\xedvel solu\xe7\xe3o para o exerc\xedcio 1",id:"uma-poss\xedvel-solu\xe7\xe3o-para-o-exerc\xedcio-1",level:3}],d={toc:l},m="wrapper";function u(e){let{components:o,...r}=e;return(0,t.kt)(m,(0,a.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"recuperar-todos-os-setores-que-t\xeam-um-nome-com-mais-de-10-caracteres"},"Recuperar todos os setores que t\xeam um nome com mais de 10 caracteres"),(0,t.kt)("h2",{id:"processo-de-desenvolvimento-da-atividades"},"Processo de desenvolvimento da atividades"),(0,t.kt)("h3",{id:"cria\xe7\xe3o-das-cole\xe7\xf5es-no-mongodb"},"Cria\xe7\xe3o das cole\xe7\xf5es no MongoDB"),(0,t.kt)("p",null,"Caso voc\xea n\xe3o tenha criado as cole\xe7\xf5es do t\xf3pico anterir, execute o procedimento a seguir:"),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Procedimento para cria\xe7\xe3o da estrutura"),(0,t.kt)("p",null,"Para subir o MongoDB:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"mongod --dbpath c:\\data\\db\n")),(0,t.kt)("p",null,"Com o utilit\xe1rio ",(0,t.kt)("a",{parentName:"p",href:"https://nosqlbooster.com/"},"NoSQLBooster"),", crie uma nova conex\xe3o do tipo localhost."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Botao nova conexao NoSQLBooster",src:n(7607).Z,width:"540",height:"332"})),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Tela nova conexao",src:n(8720).Z,width:"997",height:"617"})),(0,t.kt)("p",null,"Crie um novo banco chamado empresa e execute o seguinte c\xf3digo (",(0,t.kt)("inlineCode",{parentName:"p"},"Somente se n\xe3o existir"),")"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Criacao do validator"',title:'"Criacao',do:!0,'validator"':!0},'db.createCollection("setores", {\n   validator: {\n      $jsonSchema: {\n         bsonType: "object",\n         required: ["_id", "nome", "sigla", "funcionarios"],\n         properties: {\n            _id: {\n               bsonType: "int",\n               description: "ID \xfanico do setor"\n            },\n            nome: {\n               bsonType: "string",\n               description: "Nome do setor"\n            },\n            sigla: {\n               bsonType: "string",\n               description: "Sigla do setor",\n               minLength: 2,\n               maxLength: 5\n            },\n            funcionarios: {\n               bsonType: "array",\n               description: "Array de funcion\xe1rios",\n               items: {\n                  bsonType: "object",\n                  required: ["_id", "nome", "cargo", "modulo", "salario", "dataContratacao", "ativo"],\n                  properties: {\n                     _id: {\n                        bsonType: "int",\n                        description: "ID \xfanico do funcion\xe1rio"\n                     },\n                     nome: {\n                        bsonType: "string",\n                        description: "Nome do funcion\xe1rio"\n                     },\n                     cargo: {\n                        bsonType: "string",\n                        description: "Cargo do funcion\xe1rio"\n                     },\n                     modulo: {\n                        bsonType: "int",\n                        description: "M\xf3dulo do funcion\xe1rio",\n                        minimum: 0,\n                        maximum: 5\n                     },\n                     salario: {\n                        bsonType: "double",\n                        description: "Sal\xe1rio do funcion\xe1rio"\n                     },\n                     dataContratacao: {\n                        bsonType: "date",\n                        description: "Data de contrata\xe7\xe3o do funcion\xe1rio"\n                     },\n                     ativo: {\n                        bsonType: "bool",\n                        description: "Indica se o funcion\xe1rio est\xe1 ativo"\n                     }\n                  }\n               }\n            }\n         }\n      }\n    }\n});\n')),(0,t.kt)("p",null,"Agora \xe9 o momento de inserir os dados da cole\xe7\xe3o rec\xe9m criada:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Dados da cole\xe7\xe3o"',title:'"Dados',da:!0,'cole\xe7\xe3o"':!0},'db.setores.insertMany([\n    {\n        _id: 1,\n        nome: "Recursos Humanos",\n        sigla: "RH",\n        funcionarios: [\n            {\n                _id: 1,\n                nome: "Amanda Oliveira Santanna",\n                cargo: "Analista de Recursos Humanos",\n                modulo: 1,\n                salario: 5034.45,\n                dataContratacao: new ISODate("2020-05-18"),\n                ativo: true,\n            },\n            {\n                _id: 2,\n                nome: "Anderson Campos Monteiro",\n                cargo: "Analista de Recursos Humanos",\n                modulo: 3,\n                salario: 12311.26,\n                dataContratacao: new ISODate("2011-10-01"),\n                ativo: false\n            },        \n        ]\n    },\n    {\n        _id: 2,\n        nome: "Marketing",\n        sigla: "MKT",\n        funcionarios: [\n            {\n                _id: 3,\n                nome: "Washington Marcondes Nunes",\n                cargo: "Analista de Marketing",\n                modulo: 1,\n                salario: 6436.41,\n                dataContratacao: new ISODate("2015-06-12"),\n                ativo: true\n            },\n            {\n                _id: 4,\n                nome: "Bruna Correia da Fonseca",\n                cargo: "Analista de Marketing",\n                modulo: 2,\n                salario: 8122.13,\n                dataContratacao: new ISODate("2013-05-30"),\n                ativo: true\n            },        \n        ]\n    },\n    {\n        _id: 3,\n        nome: "Tecnologia e Engenharia",\n        sigla: "GTE",\n        funcionarios: [\n            {\n                _id: 5,\n                nome: "Pedro Antunes Silva Barros",\n                cargo: "Estagi\xe1rio",\n                modulo: 0,\n                salario: Double(2200.00),\n                dataContratacao: new ISODate("2021-10-21"),\n                ativo: true\n            },\n            {            \n                _id: 6,\n                nome: "Caroline Gouvea do Prado",\n                cargo: "Desenvolvedor FullStack",\n                modulo: 4,\n                salario: 18246.78,\n                dataContratacao: new ISODate("2011-02-01"),\n                ativo: true\n            },\n            {          \n                _id: 7,  \n                nome: "Alisson Mendon\xe7a Pereira",\n                cargo: "Analista de DevOps",\n                modulo: 2,\n                salario: 8451.89,\n                dataContratacao: new ISODate("2018-07-07"),\n                ativo: true\n            },\n        ]\n    }\n]);\n'))),(0,t.kt)("h3",{id:"uma-poss\xedvel-solu\xe7\xe3o-para-o-exerc\xedcio-1"},"Uma poss\xedvel solu\xe7\xe3o para o exerc\xedcio 1"),(0,t.kt)("p",null,"Uma abordagem para a solu\xe7\xe3o seria utilizar o mecanismo de busca do MongoDB ",(0,t.kt)("inlineCode",{parentName:"p"},"find")," sobre a nossa cole\xe7\xe3o. Retornar apenas as entradas onde o campo nome \xe9 maior do que 10:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'db.setores.find({\n    $expr: { $gt: [{ $strLenCP: "$nome" }, 10] }\n});\n')),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Utilizando o m\xe9todo de pipeline para obter o mesmo resultado"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Busca por aggregate"',title:'"Busca',por:!0,'aggregate"':!0},'db.setores.aggregate([\n  {\n    $match: {\n      $expr: { $gt: [{ $strLenCP: "$nome" }, 10] }\n    }\n  }\n]);\n'))),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Tamb\xe9m \xe9 poss\xedvel combinar operadores para identificar um intervalo.\nPor exemplo, caso o exerc\xedcio solicite um intervalo entre 10 e 20 caracteres poder\xedamos utilizar a seguinte consulta."),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'db.setores.find({\n      $expr: { \n          $and: [\n            { $gte: [{ $strLenCP: "$nome" }, 10] }, \n            { $lte: [{ $strLenCP: "$nome" }, 20] }\n          ]\n      }\n  });\n'))))}u.isMDXComponent=!0},7607:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/001-booster_nova_conexao-3b74355e21b3d58f31d251f2ed79e954.png"},8720:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/002-tela_nova_conexao-de1391c22aa02ead4857a3f4e7720329.png"}}]);