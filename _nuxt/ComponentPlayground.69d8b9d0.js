import{u as m}from"./asyncData.94cff5dc.js";import{N as c,J as p,d as i,ae as u,r as l,O as n,k as d}from"./entry.8e2ba445.js";import f from"./Ellipsis.5f28abd1.js";import _ from"./ComponentPlaygroundData.32524125.js";import"./TabsHeader.2cae6085.js";import"./ComponentPlaygroundProps.37b3cbf9.js";import"./ProseH4.ab5313d5.js";import"./ProseCodeInline.fa7f858f.js";import"./Badge.a8c5c8fc.js";import"./MDCSlot.ce2d3f30.js";import"./slot.6a6924bb.js";import"./ProseP.1fa41c0b.js";import"./index.ac0f01f5.js";import"./ComponentPlaygroundSlots.vue.268e4eed.js";import"./ComponentPlaygroundTokens.vue.acf4e77d.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const E=d(g,[["__scopeId","data-v-1cd0b156"]]);export{E as default};