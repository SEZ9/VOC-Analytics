import{s as M}from"./index-COWUANSK.js";import{s as b}from"./index-Bw1x5_pn.js";import{s as w}from"./index-BewXgKyH.js";import{aH as V,r as d,a as c,c as v,b as a,d as e,e as l,aL as h,H as r,F as k,f as C,g as D,t as E}from"./index-Bc3bAAiN.js";import"./index-CAMXmtmr.js";const I={class:"flex flex-col md:flex-row gap-8"},S={class:"md:w-1/2"},$={class:"card"},B=a("div",{class:"font-semibold text-xl mb-4"},"Toast",-1),T={class:"flex flex-wrap gap-2"},U=a("div",{class:"font-semibold text-xl mt-4 mb-4"},"Inline",-1),W={class:"flex flex-wrap mb-4 gap-2"},N={class:"flex flex-wrap gap-2"},F={class:"md:w-1/2"},H={class:"card"},L=a("div",{class:"font-semibold text-xl mb-4"},"Message",-1),q={class:"flex flex-col gap-4 mb-4"},P={__name:"MessagesDoc",setup(G){const i=V(),_=d([]),u=d(null),m=d(null);function p(){i.add({severity:"success",summary:"Success Message",detail:"Message Detail",life:3e3})}function g(){i.add({severity:"info",summary:"Info Message",detail:"Message Detail",life:3e3})}function y(){i.add({severity:"warn",summary:"Warn Message",detail:"Message Detail",life:3e3})}function x(){i.add({severity:"error",summary:"Error Message",detail:"Message Detail",life:3e3})}return(j,s)=>{const n=w,f=b,o=M;return c(),v("div",I,[a("div",S,[a("div",$,[B,a("div",T,[e(n,{onClick:s[0]||(s[0]=t=>p()),label:"Success",severity:"success"}),e(n,{onClick:s[1]||(s[1]=t=>g()),label:"Info",severity:"info"}),e(n,{onClick:s[2]||(s[2]=t=>y()),label:"Warn",severity:"warn"}),e(n,{onClick:s[3]||(s[3]=t=>x()),label:"Error",severity:"danger"})]),U,a("div",W,[e(f,{modelValue:u.value,"onUpdate:modelValue":s[4]||(s[4]=t=>u.value=t),placeholder:"Username","aria-label":"username",invalid:""},null,8,["modelValue"]),e(o,{severity:"error"},{default:l(()=>[r("Username is required")]),_:1})]),a("div",N,[e(f,{modelValue:m.value,"onUpdate:modelValue":s[5]||(s[5]=t=>m.value=t),placeholder:"Email","aria-label":"email",invalid:""},null,8,["modelValue"]),e(o,{severity:"error",icon:"pi pi-times-circle"})])])]),a("div",F,[a("div",H,[L,a("div",q,[e(o,{severity:"success"},{default:l(()=>[r("Success Message")]),_:1}),e(o,{severity:"info"},{default:l(()=>[r("Info Message")]),_:1}),e(o,{severity:"warn"},{default:l(()=>[r("Warn Message")]),_:1}),e(o,{severity:"error"},{default:l(()=>[r("Error Message")]),_:1}),e(o,{severity:"secondary"},{default:l(()=>[r("Secondary Message")]),_:1}),e(o,{severity:"contrast"},{default:l(()=>[r("Contrast Message")]),_:1})]),e(h,{name:"p-message",tag:"div"},{default:l(()=>[(c(!0),v(k,null,C(_.value,t=>(c(),D(o,{severity:t.severity,key:t.content},{default:l(()=>[r(E(t.content),1)]),_:2},1032,["severity"]))),128))]),_:1})])])])}}};export{P as default};
