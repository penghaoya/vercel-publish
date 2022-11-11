import{h as f,k as p,r as d,o as m,c as w,a as o,F as P,b as r,g as b,w as _,u as i,C as x,d as U,al as z,f as O}from"../app.11bc8ada.js";const S=r("div",{style:{margin:"20px 0"}},null,-1),$=f({__name:"auto-sizing-textarea",setup(c){const t=p(""),s=p("");return(a,n)=>{const e=d("el-input");return m(),w(P,null,[o(e,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l),autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"]),S,o(e,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value=l),autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},null,8,["modelValue"])],64)}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const j=f({__name:"basic",setup(c){const t=p("");return(s,a)=>{const n=d("el-input");return m(),b(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"Please input"},null,8,["modelValue"])}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const T=f({__name:"clearable",setup(c){const t=p("");return(s,a)=>{const n=d("el-input");return m(),b(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"Please input",clearable:""},null,8,["modelValue"])}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const h=f({__name:"disabled",setup(c){const t=p("");return(s,a)=>{const n=d("el-input");return m(),b(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),disabled:"",placeholder:"Please input"},null,8,["modelValue"])}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));const I=f({__name:"formatter",setup(c){const t=p("");return(s,a)=>{const n=d("el-input");return m(),b(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"Please input",formatter:e=>`$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\$\s?|(,*)/g,"")},null,8,["modelValue","formatter","parser"])}}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const M=r("div",{style:{margin:"20px 0"}},null,-1),k=f({__name:"length-limiting",setup(c){const t=p(""),s=p("");return(a,n)=>{const e=d("el-input");return m(),w(P,null,[o(e,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l),maxlength:"10",placeholder:"Please input","show-word-limit":"",type:"text"},null,8,["modelValue"]),M,o(e,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value=l),maxlength:"30",placeholder:"Please input","show-word-limit":"",type:"textarea"},null,8,["modelValue"])],64)}}});var se=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));const B=U("Http://"),N={class:"mt-4"},C=U(".com"),R={class:"mt-4"},F={class:"mt-4"},E=f({__name:"mixed-input",setup(c){const t=p(""),s=p(""),a=p(""),n=p("");return(e,l)=>{const u=d("el-input"),g=d("el-option"),y=d("el-select"),V=d("el-button");return m(),w(P,null,[r("div",null,[o(u,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=v=>t.value=v),placeholder:"Please input"},{prepend:_(()=>[B]),_:1},8,["modelValue"])]),r("div",N,[o(u,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=v=>s.value=v),placeholder:"Please input"},{append:_(()=>[C]),_:1},8,["modelValue"])]),r("div",R,[o(u,{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=v=>a.value=v),placeholder:"Please input",class:"input-with-select"},{prepend:_(()=>[o(y,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=v=>n.value=v),placeholder:"Select",style:{width:"115px"}},{default:_(()=>[o(g,{label:"Restaurant",value:"1"}),o(g,{label:"Order No.",value:"2"}),o(g,{label:"Tel",value:"3"})]),_:1},8,["modelValue"])]),append:_(()=>[o(V,{icon:i(x)},null,8,["icon"])]),_:1},8,["modelValue"])]),r("div",F,[o(u,{modelValue:a.value,"onUpdate:modelValue":l[5]||(l[5]=v=>a.value=v),placeholder:"Please input",class:"input-with-select"},{prepend:_(()=>[o(V,{icon:i(x)},null,8,["icon"])]),append:_(()=>[o(y,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=v=>n.value=v),placeholder:"Select",style:{width:"115px"}},{default:_(()=>[o(g,{label:"Restaurant",value:"1"}),o(g,{label:"Order No.",value:"2"}),o(g,{label:"Tel",value:"3"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])],64)}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const H=f({__name:"password",setup(c){const t=p("");return(s,a)=>{const n=d("el-input");return m(),b(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])}}});var de=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const q=f({__name:"textarea",setup(c){const t=p("");return(s,a)=>{const n=d("el-input");return m(),b(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),rows:2,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])}}});var _e=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const A={class:"demo-input-size"},D={class:"demo-input-size"},G={class:"demo-input-size"},J=f({__name:"various-size",setup(c){const t=p(""),s=p(""),a=p("");return(n,e)=>{const l=d("el-input");return m(),w(P,null,[r("div",A,[o(l,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value=u),class:"w-50 m-2",size:"large",placeholder:"Please Input"},null,8,["modelValue"]),o(l,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=u=>s.value=u),class:"w-50 m-2",placeholder:"Please Input"},null,8,["modelValue"]),o(l,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=u=>a.value=u),class:"w-50 m-2",size:"small",placeholder:"Please Input"},null,8,["modelValue"])]),r("div",D,[o(l,{modelValue:t.value,"onUpdate:modelValue":e[3]||(e[3]=u=>t.value=u),class:"w-50 m-2",size:"large",placeholder:"Please Input","suffix-icon":i(x)},null,8,["modelValue","suffix-icon"]),o(l,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=u=>s.value=u),class:"w-50 m-2",placeholder:"Please Input","suffix-icon":i(x)},null,8,["modelValue","suffix-icon"]),o(l,{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=u=>a.value=u),class:"w-50 m-2",size:"small",placeholder:"Please Input","suffix-icon":i(x)},null,8,["modelValue","suffix-icon"])]),r("div",G,[o(l,{modelValue:t.value,"onUpdate:modelValue":e[6]||(e[6]=u=>t.value=u),class:"w-50 m-2",size:"large",placeholder:"Please Input","prefix-icon":i(x)},null,8,["modelValue","prefix-icon"]),o(l,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=u=>s.value=u),class:"w-50 m-2",placeholder:"Please Input","prefix-icon":i(x)},null,8,["modelValue","prefix-icon"]),o(l,{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=u=>a.value=u),class:"w-50 m-2",size:"small",placeholder:"Please Input","prefix-icon":i(x)},null,8,["modelValue","prefix-icon"])])],64)}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));const K={class:"demo-input-suffix"},L=r("span",{class:"ml-3 w-35 text-gray-600 inline-flex items-center"},"Using attributes",-1),Q={class:"demo-input-suffix"},W=r("span",{class:"ml-3 w-35 text-gray-600 inline-flex items-center"},"Using slots",-1),X=f({__name:"with-icon",setup(c){const t=p(""),s=p(""),a=p(""),n=p("");return(e,l)=>{const u=d("el-input"),g=d("el-row"),y=d("el-icon");return m(),w(P,null,[r("div",K,[o(g,{gutter:20},{default:_(()=>[L,o(u,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=V=>t.value=V),class:"w-50 m-2",placeholder:"Pick a date","suffix-icon":i(z)},null,8,["modelValue","suffix-icon"]),o(u,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=V=>s.value=V),class:"w-50 m-2",placeholder:"Type something","prefix-icon":i(x)},null,8,["modelValue","prefix-icon"])]),_:1})]),r("div",Q,[o(g,{gutter:20},{default:_(()=>[W,o(u,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=V=>a.value=V),class:"w-50 m-2",placeholder:"Pick a date"},{suffix:_(()=>[o(y,{class:"el-input__icon"},{default:_(()=>[o(i(z))]),_:1})]),_:1},8,["modelValue"]),o(u,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=V=>n.value=V),class:"w-50 m-2",placeholder:"Type something"},{prefix:_(()=>[o(y,{class:"el-input__icon"},{default:_(()=>[o(i(x))]),_:1})]),_:1},8,["modelValue"])]),_:1})])],64)}}});var ie=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const Y={},Z=U("a11y");function ee(c,t){const s=d("el-tag");return m(),b(s,{size:"small",effect:"plain",hit:"",round:"",class:"ml-2"},{default:_(()=>[Z]),_:1})}var me=O(Y,[["render",ee],["__scopeId","data-v-331c2ca6"]]);export{te as _,oe as a,ae as b,ne as c,ue as d,se as e,pe as f,de as g,_e as h,re as i,ie as j,me as k};
