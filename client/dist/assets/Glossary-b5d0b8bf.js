import{_,o as e,c as r,a as s,t as c,r as f,b as v,d as h,F as l,e as y,f as $}from"./index-867a3c2e.js";const w={name:"AppWord",props:["word","value"]},g={class:"glossary-item"},x={class:"glossary-item__name"},A={class:"glossary-item__value"};function B(o,a,t,n,d,i){return e(),r("div",g,[s("div",x,c(t.word),1),s("div",A,c(t.value),1)])}const W=_(w,[["render",B]]),k={name:"Glossary",components:{AppWord:W},setup(){const o=f();return v(async()=>{const a=await fetch("/api/glossary");o.value=await a.json()}),{words:o}}},F=s("h1",null,"Словарь",-1),G={class:"glossary-wrapper"},b={class:"glossary"};function j(o,a,t,n,d,i){const p=h("AppWord");return e(),r(l,null,[F,s("div",G,[s("div",b,[(e(!0),r(l,null,y(n.words,(u,m)=>(e(),$(p,{word:m,value:u},null,8,["word","value"]))),256))])])],64)}const D=_(k,[["render",j]]);export{D as default};
