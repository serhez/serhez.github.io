import{_ as o}from"./ContentRendererMarkdown.vue.Dzx21-vY.js";import{f as l,n as s,x as d,z as c}from"./entry.BecXmkdP.js";import"./index.BsYmvPZw.js";import"./preview.C9xu89aS.js";const g=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,a,u;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(a=t==null?void 0:t.value)==null?void 0:a._path}.${(u=t==null?void 0:t.value)==null?void 0:u._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var i,f;const n=d(),{value:e,excerpt:a,tag:u}=t,r=a?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((i=r==null?void 0:r.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:a,tag:u,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:a,tag:u,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((f=r==null?void 0:r.children)!=null&&f.length)?c(o,{value:e,excerpt:a,tag:u,...this.$attrs}):c("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:a,tag:u},null,2))}});export{g as default};
