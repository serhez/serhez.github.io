import f from"./inputtext.esm.DkghYHzo.js";import{s as m}from"./basecomponent.esm._vYHmatY.js";import{ai as c,Q as h,o as s,c as l,F as v,h as y,r as g,b as T,Y as b,aj as I}from"./entry.BecXmkdP.js";var k={root:"p-inputotp p-component",input:"p-inputotp-input"},N=c.extend({name:"inputotp",classes:k}),x={name:"BaseInputOtp",extends:m,props:{modelValue:{type:null,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},variant:{type:String,default:null},tabindex:{type:Number,default:null},length:{type:Number,default:4},mask:{type:Boolean,default:!1},integerOnly:{type:Boolean,default:!1}},style:N,provide:function(){return{$parentInstance:this}}},P={name:"InputOtp",extends:x,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],data:function(){return{tokens:[]}},watch:{modelValue:{immediate:!0,handler:function(t){this.tokens=t?t.split(""):new Array(this.length)}}},methods:{getTemplateAttrs:function(t){return{value:this.tokens[t]}},getTemplateEvents:function(t){var e=this;return{input:function(r){return e.onInput(r,t)},keydown:function(r){return e.onKeyDown(r)},focus:function(r){return e.onFocus(r)},blur:function(r){return e.onBlur(r)},paste:function(r){return e.onPaste(r)}}},getPTOptions:function(t){var e=t==="root"?this.ptmi:this.ptm;return e(t,{context:{checked:this.checked,disabled:this.disabled}})},onInput:function(t,e){this.tokens[e]=t.target.value,this.updateModel(t),t.inputType==="deleteContentBackward"?this.moveToPrev(t):(t.inputType==="insertText"||t.inputType==="deleteContentForward")&&this.moveToNext(t)},updateModel:function(t){var e=this.tokens.join("");this.$emit("update:modelValue",e),this.$emit("change",{originalEvent:t,value:e})},moveToPrev:function(t){var e=this.findPrevInput(t.target);e&&(e.focus(),e.select())},moveToNext:function(t){var e=this.findNextInput(t.target);e&&(e.focus(),e.select())},findNextInput:function(t){var e=t.nextElementSibling;if(e)return e.nodeName==="INPUT"?e:this.findNextInput(e)},findPrevInput:function(t){var e=t.previousElementSibling;if(e)return e.nodeName==="INPUT"?e:this.findPrevInput(e)},onFocus:function(t){t.target.select(),this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)},onKeyDown:function(t){switch(t.code){case"ArrowLeft":this.moveToPrev(t),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Backspace":t.target.value.length===0&&(this.moveToPrev(t),t.preventDefault());break;case"ArrowRight":this.moveToNext(t),t.preventDefault();break;default:(this.integerOnly&&!((t.code.startsWith("Digit")||t.code.startsWith("Numpad"))&&Number(t.key)>=0&&Number(t.key)<=9)||this.tokens.join("").length>=this.length&&t.code!=="Delete")&&t.preventDefault();break}},onPaste:function(t){var e=t.clipboardData.getData("text");if(e.length){var u=e.substring(0,this.length+1);(!this.integerOnly||!isNaN(u))&&(this.tokens=u.split(""),this.updateModel(t))}t.preventDefault()}},computed:{inputMode:function(){return this.integerOnly?"numeric":"text"},inputType:function(){return this.mask?"password":"text"}},components:{OtpInputText:f}};function w(n,t,e,u,r,o){var p=h("OtpInputText");return s(),l("div",I({class:n.cx("root")},n.ptmi("root")),[(s(!0),l(v,null,y(n.length,function(i){return g(n.$slots,"default",{key:i,events:o.getTemplateEvents(i-1),attrs:o.getTemplateAttrs(i-1),index:i},function(){return[T(p,{value:r.tokens[i-1],type:o.inputType,class:b(n.cx("input")),inputmode:o.inputMode,variant:n.variant,readonly:n.readonly,disabled:n.disabled,invalid:n.invalid,tabindex:n.tabindex,unstyled:n.unstyled,onInput:function(d){return o.onInput(d,i-1)},onFocus:t[0]||(t[0]=function(a){return o.onFocus(a)}),onBlur:t[1]||(t[1]=function(a){return o.onBlur(a)}),onPaste:t[2]||(t[2]=function(a){return o.onPaste(a)}),onKeydown:t[3]||(t[3]=function(a){return o.onKeyDown(a)}),pt:n.ptm("input")},null,8,["value","type","class","inputmode","variant","readonly","disabled","invalid","tabindex","unstyled","onInput","pt"])]})}),128))],16)}P.render=w;export{P as default};
