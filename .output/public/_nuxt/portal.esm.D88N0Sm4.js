import{al as r,r as t,o as d,g as s,aE as l,ak as i}from"./entry.BecXmkdP.js";var u={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=r.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,c,n,f,o,a){return a.inline?t(e.$slots,"default",{key:0}):o.mounted?(d(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
