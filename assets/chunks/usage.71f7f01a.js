import{g as p,h as g,r as o,o as d,c as m,b as v,a as t,w as n,u as s,d as u,L as S,n as b}from"../app.2fbd2eb7.js";const k={m:"b-2"},x=u("autoInsertSpace"),y=u("\u4E2D\u6587"),C=p({setup(f){const e=g({autoInsertSpace:!0});return(l,c)=>{const _=o("el-checkbox"),r=o("el-button"),a=o("el-config-provider");return d(),m("div",null,[v("div",k,[t(_,{modelValue:s(e).autoInsertSpace,"onUpdate:modelValue":c[0]||(c[0]=i=>s(e).autoInsertSpace=i)},{default:n(()=>[x]),_:1},8,["modelValue"])]),t(a,{button:s(e)},{default:n(()=>[t(r,null,{default:n(()=>[y]),_:1})]),_:1},8,["button"])])}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const O=u("OPEN"),j=p({setup(f){const e=g({max:3}),l=()=>{S("This is a message.")};return(c,_)=>{const r=o("el-button"),a=o("el-config-provider");return d(),m("div",null,[t(a,{message:s(e)},{default:n(()=>[t(r,{onClick:l},{default:n(()=>[O]),_:1})]),_:1},8,["message"])])}}});var B=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const E=u(" Switch Lang "),V=v("br",null,null,-1),T=p({setup(f){const e=b({name:"zh-cn",el:{colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"}}}),l=b({name:"en",el:{colorpicker:{confirm:"Confirm",clear:"Clear"}}}),c=()=>{const _=e.value;e.value=l.value,l.value=_};return(_,r)=>{const a=o("el-button"),i=o("el-color-picker"),h=o("el-config-provider");return d(),m("div",null,[t(a,{m:"b-2",onClick:c},{default:n(()=>[E]),_:1}),V,t(h,{locale:l.value},{default:n(()=>[t(i,{"model-value":"",style:{"vertical-align":"middle"}})]),_:1},8,["locale"])])}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{z as _,B as a,I as b};
