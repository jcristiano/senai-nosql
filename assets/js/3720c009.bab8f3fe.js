"use strict";(self.webpackChunksenai_nosql=self.webpackChunksenai_nosql||[]).push([[3751],{727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),n=a(6010),r=a(5155),s=a(1944),c=a(5281),m=a(7961),o=a(6090),g=a(197);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.docsPages,c.k.page.docsTagsListPage)},l.createElement(s.d,{title:a}),l.createElement(g.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},3008:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(6010),r=a(9960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:a,count:c}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s.tag,c?s.tagWithCount:s.tagRegular)},a,c&&l.createElement("span",null,c))}},6090:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(5155),r=a(3008);const s={tag:"tag_Nnez"};function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},5155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(5999);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);