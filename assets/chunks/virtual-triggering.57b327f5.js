import{f as x,h as u,k as d,r as a,o as m,c as g,a as e,w as t,F as h,d as r,aj as $,ak as y,u as v,as as k,b as c,g as w}from"../app.f5b8b360.js";const C=r("Hover to activate"),O=r("Click to activate"),S=r("Focus to activate"),j=r("contextmenu to activate"),T=r("Manual to activate"),z=u({__name:"basic-usage",setup(f){const s=d(!1);return(_,n)=>{const o=a("el-button"),l=a("el-popover");return m(),g(h,null,[e(l,{placement:"top-start",title:"Title",width:200,trigger:"hover",content:"this is content, this is content, this is content"},{reference:t(()=>[e(o,{class:"m-2"},{default:t(()=>[C]),_:1})]),_:1}),e(l,{placement:"bottom",title:"Title",width:200,trigger:"click",content:"this is content, this is content, this is content"},{reference:t(()=>[e(o,{class:"m-2"},{default:t(()=>[O]),_:1})]),_:1}),e(l,{ref:"popover",placement:"right",title:"Title",width:200,trigger:"focus",content:"this is content, this is content, this is content"},{reference:t(()=>[e(o,{class:"m-2"},{default:t(()=>[S]),_:1})]),_:1},512),e(l,{ref:"popover",title:"Title",width:200,trigger:"contextmenu",content:"this is content, this is content, this is content"},{reference:t(()=>[e(o,{class:"m-2"},{default:t(()=>[j]),_:1})]),_:1},512),e(l,{visible:s.value,placement:"bottom",title:"Title",width:200,content:"this is content, this is content, this is content"},{reference:t(()=>[e(o,{class:"m-2",onClick:n[0]||(n[0]=i=>s.value=!s.value)},{default:t(()=>[T]),_:1})]),_:1},8,["visible"])],64)}}});var R=x(z,[["__scopeId","data-v-75d791aa"]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const N=r("Click me"),P=c("span",null," Some content ",-1),M=u({__name:"directive-usage",setup(f){d();const s=d(),_=()=>{var n,o;(o=(n=v(s).popperRef)==null?void 0:n.delayHide)==null||o.call(n)};return(n,o)=>{const l=a("el-button"),i=a("el-popover"),p=$("popover");return m(),g(h,null,[y(e(l,null,{default:t(()=>[N]),_:1},512),[[p,s.value],[v(k),_]]),e(i,{ref_key:"popoverRef",ref:s,trigger:"click",title:"With title","virtual-triggering":"",persistent:""},{default:t(()=>[P]),_:1},512)],64)}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const B={style:{display:"flex","align-items":"center"}},D=r("Click to activate"),J={class:"demo-rich-conent",style:{display:"flex",gap:"16px","flex-direction":"column"}},V=c("div",null,[c("p",{class:"demo-rich-content__name",style:{margin:"0","font-weight":"500"}}," Element Plus "),c("p",{class:"demo-rich-content__mention",style:{margin:"0","font-size":"14px",color:"var(--el-color-info)"}}," @element-plus ")],-1),Y=c("p",{class:"demo-rich-content__desc",style:{margin:"0"}}," Element Plus, a Vue 3 based component library for developers, designers and product managers ",-1),E=u({__name:"nested-information",setup(f){const s=[{date:"2016-05-02",name:"Jack",address:"New York City"},{date:"2016-05-04",name:"Jack",address:"New York City"},{date:"2016-05-01",name:"Jack",address:"New York City"},{date:"2016-05-03",name:"Jack",address:"New York City"}];return(_,n)=>{const o=a("el-button"),l=a("el-table-column"),i=a("el-table"),p=a("el-popover"),b=a("el-avatar");return m(),g("div",B,[e(p,{placement:"right",width:400,trigger:"click"},{reference:t(()=>[e(o,{style:{"margin-right":"16px"}},{default:t(()=>[D]),_:1})]),default:t(()=>[e(i,{data:s},{default:t(()=>[e(l,{width:"150",property:"date",label:"date"}),e(l,{width:"100",property:"name",label:"name"}),e(l,{width:"300",property:"address",label:"address"})]),_:1})]),_:1}),e(p,{width:300,"popper-style":"box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"},{reference:t(()=>[e(b,{src:"https://avatars.githubusercontent.com/u/72015883?v=4"})]),default:t(()=>[c("div",J,[e(b,{size:60,src:"https://avatars.githubusercontent.com/u/72015883?v=4",style:{"margin-bottom":"8px"}}),V,Y])]),_:1})])}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const F=c("p",null,"Are you sure to delete this?",-1),H={style:{"text-align":"right",margin:"0"}},U=r("cancel"),W=r("confirm"),A=r("Delete"),I=u({__name:"nested-operation",setup(f){const s=d(!1);return(_,n)=>{const o=a("el-button"),l=a("el-popover");return m(),w(l,{visible:s.value,placement:"top",width:160},{reference:t(()=>[e(o,{onClick:n[2]||(n[2]=i=>s.value=!0)},{default:t(()=>[A]),_:1})]),default:t(()=>[F,c("div",H,[e(o,{size:"small",text:"",onClick:n[0]||(n[0]=i=>s.value=!1)},{default:t(()=>[U]),_:1}),e(o,{size:"small",type:"primary",onClick:n[1]||(n[1]=i=>s.value=!1)},{default:t(()=>[W]),_:1})])]),_:1},8,["visible"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const q=r("Click me"),G=c("span",null," Some content ",-1),K=u({__name:"virtual-triggering",setup(f){const s=d(),_=d(),n=()=>{var o,l;(l=(o=v(_).popperRef)==null?void 0:o.delayHide)==null||l.call(o)};return(o,l)=>{const i=a("el-button"),p=a("el-popover");return m(),g(h,null,[y(e(i,{ref_key:"buttonRef",ref:s},{default:t(()=>[q]),_:1},512),[[v(k),n]]),e(p,{ref_key:"popoverRef",ref:_,"virtual-ref":s.value,trigger:"click",title:"With title","virtual-triggering":""},{default:t(()=>[G]),_:1},8,["virtual-ref"])],64)}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{Q as _,X as a,Z as b,ee as c,te as d};
