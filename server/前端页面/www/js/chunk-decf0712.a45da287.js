(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-decf0712"],{"0fc3":function(t,e,i){"use strict";var o=i("b505");t.exports=function(t,e){var i=[][t];return!i||!o((function(){i.call(null,e||function(){throw 1},1)}))}},"24de":function(t,e,i){"use strict";var o=i("62a8"),n=i("a406"),s=i("f78f");t.exports=function(t,e,i){var c=o(e);c in t?n.f(t,c,s(0,i)):t[c]=i}},"3d97":function(t,e,i){"use strict";var o,n=i("46c0"),s=i("6e6d"),c=i("ccdb"),r=i("0945"),a=i("7794"),l=i("fe0e"),f=i("ce34"),u=Object(c["a"])("dialog"),h=u[0],d=u[1],v=u[2],p=h({mixins:[l["a"]],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(i){!1!==i&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")}},render:function(){var t,e,i=this,o=arguments[0];if(this.shouldRender){var n=this.message,s=this.messageAlign,c=this.slots(),l=this.slots("title")||this.title,u=l&&o("div",{class:d("header",{isolated:!n&&!c})},[l]),h=(c||n)&&o("div",{class:d("content")},[c||o("div",{domProps:{innerHTML:n},class:d("message",(t={"has-title":l},t[s]=s,t))})]),p=this.showCancelButton&&this.showConfirmButton,g=o("div",{class:[a["d"],d("footer",{buttons:p})]},[this.showCancelButton&&o(f["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||v("cancel")},class:d("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){i.handleAction("cancel")}}}),this.showConfirmButton&&o(f["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||v("confirm")},class:[d("confirm"),(e={},e[a["b"]]=p,e)],style:{color:this.confirmButtonColor},on:{click:function(){i.handleAction("confirm")}}})]);return o("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[o("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[d(),this.className],style:{width:Object(r["a"])(this.width)}},[u,h,g])])}}}),g=i("a178");function m(t){return document.body.contains(t)}function C(){o&&o.$destroy(),o=new(s["a"].extend(p))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function y(t){return g["d"]?Promise.resolve():new Promise((function(e,i){o&&m(o.$el)||C(),Object(n["a"])(o,y.currentOptions,t,{resolve:e,reject:i})}))}y.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},y.alert=y,y.confirm=function(t){return y(Object(n["a"])({showCancelButton:!0},t))},y.close=function(){o&&(o.value=!1)},y.setDefaultOptions=function(t){Object(n["a"])(y.currentOptions,t)},y.resetDefaultOptions=function(){y.currentOptions=Object(n["a"])({},y.defaultOptions)},y.resetDefaultOptions(),y.install=function(){s["a"].use(p)},y.Component=p,s["a"].prototype.$dialog=y;e["a"]=y},"3ff8":function(t,e,i){"use strict";i("3f51"),i("a5c8"),i("46b5"),i("6660")},"4e0e":function(t,e,i){"use strict";var o=i("0e84"),n=i("d5b6");o({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},64791:function(t,e,i){var o=i("5bf1"),n=i("81a8"),s=i("d5b6"),c=i("fe5a");for(var r in n){var a=o[r],l=a&&a.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(f){l.forEach=s}}},6660:function(t,e,i){},"6b56":function(t,e,i){},"81a8":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8909:function(t,e,i){"use strict";var o=i("0e84"),n=i("65d1"),s=i("aa83"),c=i("f422"),r=i("0d15"),a=i("f2a8"),l=i("24de"),f=i("8dc3"),u=Math.max,h=Math.min,d=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!f("splice")},{splice:function(t,e){var i,o,f,p,g,m,C=r(this),y=c(C.length),b=n(t,y),w=arguments.length;if(0===w?i=o=0:1===w?(i=0,o=y-b):(i=w-2,o=h(u(s(e),0),y-b)),y+i-o>d)throw TypeError(v);for(f=a(C,o),p=0;p<o;p++)g=b+p,g in C&&l(f,p,C[g]);if(f.length=o,i<o){for(p=b;p<y-o;p++)g=p+o,m=p+i,g in C?C[m]=C[g]:delete C[m];for(p=y;p>y-o+i;p--)delete C[p-1]}else if(i>o)for(p=y-o;p>b;p--)g=p+o-1,m=p+i-1,g in C?C[m]=C[g]:delete C[m];for(p=0;p<i;p++)C[p+b]=arguments[p+2];return C.length=y-o+i,f}})},"8dc3":function(t,e,i){var o=i("b505"),n=i("d86a"),s=i("3a63"),c=n("species");t.exports=function(t){return s>=51||!o((function(){var e=[],i=e.constructor={};return i[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"92e5":function(t,e,i){var o=i("12fd"),n=i("57e5"),s=i("0d15"),c=i("f422"),r=i("f2a8"),a=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,f=4==t,u=6==t,h=5==t||u;return function(d,v,p,g){for(var m,C,y=s(d),b=n(y),w=o(v,p,3),S=c(b.length),x=0,O=g||r,L=e?O(d,S):i?O(d,0):void 0;S>x;x++)if((h||x in b)&&(m=b[x],C=w(m,x,y),t))if(e)L[x]=C;else if(C)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:a.call(L,m)}else if(f)return!1;return u?-1:l||f?f:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},cddb:function(t,e,i){"use strict";var o=i("0e84"),n=i("9523").indexOf,s=i("0fc3"),c=[].indexOf,r=!!c&&1/[1].indexOf(1,-0)<0,a=s("indexOf");o({target:"Array",proto:!0,forced:r||a},{indexOf:function(t){return r?c.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},d222:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page modal-page",attrs:{id:"collect"}},[i("app-header",{staticClass:"topColor border-bottom",attrs:{title:t.title,hasBack:t.hasBack}},[i("span",{staticClass:"right-btn",attrs:{slot:"right-btn"},on:{click:function(e){return t.show()}},slot:"right-btn"},[t._v("取消")])]),i("app-scroll",{staticClass:"content bg"},[i("div",{ref:"show",staticClass:"show"},[i("div",{staticClass:"list"},t._l(t.list,(function(e,o){return i("div",{key:o,staticClass:"item"},[i("div",{staticClass:"choice"},[i("span",{ref:"choice",refInFor:!0,staticClass:"iconfont icon-yuangou",on:{click:function(i){return t.hasChoice(o,e.id)}}})]),i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.img,alt:""}})]),i("div",{staticClass:"item-inner"},[i("p",{staticClass:"item-title more-overflow",on:{click:function(i){return t.goTopicDetail(e.id)}}},[t._v(t._s(e.desc))]),i("p",{staticClass:"item-tag"},[t._v("#"+t._s(e.pro))])])])})),0)])]),i("div",{ref:"footer",staticClass:"footer"},[i("span",{staticClass:"deleteAll",on:{click:t.deleteAll}},[t._v("清空收藏视频")]),i("span",{staticClass:"deleteChoice",on:{click:t.deleteChoice}},[t._v("删除")])]),i("div",{staticClass:"end"})],1)},n=[],s=(i("4e0e"),i("cddb"),i("ed08"),i("8909"),i("64791"),i("89b2"),i("d404")),c=(i("3ff8"),i("3d97")),r={data:function(){return{title:"我的收藏",hasBack:!0,isShow:!0,isChoice:[],list:[],topArr:[]}},mounted:function(){storage.get("collect")&&(this.list=storage.get("collect"))},methods:{show:function(){var t=this.$refs.show,e=this.$refs.footer;this.isShow?(t.classList.add("showChoice"),e.style.display="block",this.isShow=!1):(t.classList.remove("showChoice"),e.style.display="none",this.isShow=!0)},deleteAll:function(){var t=this;c["a"].confirm({title:"删除提示",message:"确定要删除所有收藏吗?"}).then((function(){t.list="",storage.remove("collect"),s["a"].success("删除成功")})).catch((function(){t.delAll=!1,s["a"].fail("取消删除")}))},deleteChoice:function(){var t=this;c["a"].confirm({title:"删除提示",message:"确定要删除选中的收藏吗?"}).then((function(){var e=t.isChoice,i=[];e.forEach((function(t){i.push(t.collId)}));var o=storage.get("collect"),n=[];o.forEach((function(t,e){i.indexOf(t.id)+1&&n.push(e)})),n.reverse();for(var c=0;c<n.length;c++)o.splice(n[c],1);storage.set("collect",o),t.list=o,t.isChoice=[],t.topArr=[];var r=t.$refs.choice;r.forEach((function(t){t.style.color="#333"})),s["a"].success("删除成功")})).catch((function(){t.delChoice=!1,s["a"].fail("取消删除")}))},goTopicDetail:function(t){var e=t;this.$router.push("/topic/topicDetail/".concat(e))},hasChoice:function(t,e){var i=this.$refs.choice;if(this.isChoice.length){var o=this.isChoice,n=[];o.forEach((function(t){n.push(t.paiIndex)}));var s=n.indexOf(t)+1;if(s){var c;this.isChoice.forEach((function(e,i){e.paiIndex==t&&(c=i)})),this.isChoice.splice(c,1),i[t].style.color="#333"}else{i[t].style.color="red";var r={collId:e,paiIndex:t,choice:!0};this.isChoice.push(r)}}else{i[t].style.color="red";var a={collId:e,paiIndex:t,choice:!0};this.isChoice.push(a)}}}},a=r,l=(i("eab3"),i("4e82")),f=Object(l["a"])(a,o,n,!1,null,"f7465e14",null);e["default"]=f.exports},d5b6:function(t,e,i){"use strict";var o=i("92e5").forEach,n=i("0fc3");t.exports=n("forEach")?function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},eab3:function(t,e,i){"use strict";var o=i("6b56"),n=i.n(o);n.a},ed08:function(t,e,i){"use strict";var o=i("0e84"),n=i("fdac"),s=[].reverse,c=[1,2];o({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),s.call(this)}})},f2a8:function(t,e,i){var o=i("dc17"),n=i("fdac"),s=i("d86a"),c=s("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?o(i)&&(i=i[c],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},fdac:function(t,e,i){var o=i("4cbe");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-decf0712.a45da287.js.map