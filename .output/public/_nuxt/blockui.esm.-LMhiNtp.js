import{ai as a,al as s,at as o,o as l,c as n,r,aj as c}from"./entry.BecXmkdP.js";import{s as d}from"./basecomponent.esm._vYHmatY.js";var m={root:"p-blockui-container"},h=a.extend({name:"blockui",classes:m}),u={name:"BaseBlockUI",extends:d,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:h,provide:function(){return{$parentInstance:this}}},k={name:"BlockUI",extends:u,inheritAttrs:!1,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(t){t===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var t="p-blockui p-component-overlay p-component-overlay-enter";this.fullScreen?(t+=" p-blockui-document",this.mask=s.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),s.blockBodyScroll(),document.activeElement.blur()):(this.mask=s.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&o.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var t=this;!this.isUnstyled&&s.addClass(this.mask,"p-component-overlay-leave"),s.hasCSSAnimation(this.mask)>0?this.mask.addEventListener("animationend",function(){t.removeMask()}):this.removeMask()},removeMask:function(){o.clear(this.mask),this.fullScreen?(document.body.removeChild(this.mask),s.unblockBodyScroll()):this.$refs.container.removeChild(this.mask),this.isBlocked=!1,this.$emit("unblock")}}},p=["aria-busy"];function f(e,t,b,v,i,y){return l(),n("div",c({ref:"container",class:e.cx("root"),"aria-busy":i.isBlocked},e.ptmi("root")),[r(e.$slots,"default")],16,p)}k.render=f;export{k as default};
