(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_combination_details-index~pages-activity-goods_seckill_details-index~pages-good~e4ad8ce2"],{1465:function(t,e,i){"use strict";i.r(e);var r=i("2dcc"),a=i("3e45");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("3b57");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"2358c866",null,!1,r["a"],o);e["default"]=c.exports},"1c26":function(t,e,i){"use strict";var r,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"product-bg"},[r("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,"indicator-active-color":"#e93323",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t.videoline?r("v-uni-swiper-item",[r("v-uni-view",{staticClass:"item"},[r("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo",src:t.videoline,objectFit:"cover",controls:!0,"show-center-play-btn":!0,"show-mute-btn":"true","auto-pause-if-navigate":!0,"custom-cache":!1}}),t.controls?r("v-uni-view",{staticClass:"poster"},[r("v-uni-image",{staticClass:"image",attrs:{src:t.imgUrls[0]}})],1):t._e(),t.controls?r("v-uni-view",{staticClass:"stop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPause.apply(void 0,arguments)}}},[r("v-uni-image",{staticClass:"image",attrs:{src:i("e3b2")}})],1):t._e()],1)],1):t._e(),t._l(t.imgUrls,(function(t,e){return[r("v-uni-swiper-item",[r("v-uni-image",{staticClass:"slide-image",attrs:{src:t}})],1)]}))],2)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}))},"1d08":function(t,e,i){"use strict";i.r(e);var r=i("2b55"),a=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"1e96":function(t,e,i){"use strict";var r,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"evaluateWtapper"},t._l(t.reply,(function(e,r){return i("v-uni-view",{key:r,staticClass:"evaluateItem"},[i("v-uni-view",{staticClass:"pic-text acea-row row-middle"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.avatar}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"start",class:"star"+e.star})],1)],1),i("v-uni-view",{staticClass:"time"},[t._v(t._s(e.add_time)+" "+t._s(e.suk))]),i("v-uni-view",{staticClass:"evaluate-infor"},[t._v(t._s(e.comment))]),i("v-uni-view",{staticClass:"imgList acea-row"},t._l(e.pics,(function(e,a){return i("v-uni-view",{key:a,staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getpreviewImage(r,a)}}})],1)})),1),e.merchant_reply_content?i("v-uni-view",{staticClass:"reply"},[i("v-uni-text",{staticClass:"font-color"},[t._v("店小二")]),t._v("："+t._s(e.merchant_reply_content))],1):t._e()],1)})),1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}))},"21f3":function(t,e,i){"use strict";i.r(e);var r=i("368f"),a=i("ef60");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("bd85");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"d8384874",null,!1,r["a"],o);e["default"]=c.exports},"2b55":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{reply:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{getpreviewImage:function(t,e){uni.previewImage({urls:this.reply[t].pics,current:this.reply[t].pics[e]})}}};e.default=r},"2dcc":function(t,e,i){"use strict";var r,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}))},"33d5":function(t,e,i){"use strict";i.r(e);var r=i("1c26"),a=i("471b");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("8240");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"4a5280b8",null,!1,r["a"],o);e["default"]=c.exports},"368f":function(t,e,i){"use strict";var r,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"product-window",class:(!0===t.attr.cartAttr?"on":"")+" "+(t.iSbnt?"join":"")+" "+(t.iScart?"joinCart":"")},[i("v-uni-view",{staticClass:"textpic acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.attr.productSelect.image},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getpreviewImage.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"line1"},[t._v(t._s(t.attr.productSelect.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.attr.productSelect.price))]),t.isShow?i("v-uni-text",{staticClass:"stock"},[t._v("库存: "+t._s(t.attr.productSelect.stock))]):t._e(),t.limitNum?i("v-uni-text",{staticClass:"stock"},[t._v("限量: "+t._s(t.attr.productSelect.quota))]):t._e()],1)],1),i("v-uni-view",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAttr.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"rollTop"},[i("v-uni-view",{staticClass:"productWinList"},t._l(t.attr.productAttr,(function(e,r){return i("v-uni-view",{key:r,staticClass:"item"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.attr_name))]),i("v-uni-view",{staticClass:"listn acea-row row-middle"},t._l(e.attr_value,(function(a,n){return i("v-uni-view",{key:n,staticClass:"itemn",class:e.index===a.attr?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapAttr(r,n)}}},[t._v(t._s(a.attr))])})),1)],1)})),1),i("v-uni-view",{staticClass:"cart acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"title"},[t._v("数量")]),i("v-uni-view",{staticClass:"carnum acea-row row-left"},[i("v-uni-view",{staticClass:"item reduce",class:t.attr.productSelect.cart_num<=1?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumDes.apply(void 0,arguments)}}},[t._v("-")]),i("v-uni-view",{staticClass:"item num acea-row row-middle"},[i("v-uni-input",{attrs:{type:"number","data-name":"productSelect.cart_num"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindCode(t.attr.productSelect.cart_num)}},model:{value:t.attr.productSelect.cart_num,callback:function(e){t.$set(t.attr.productSelect,"cart_num",e)},expression:"attr.productSelect.cart_num"}})],1),t.iSplus?i("v-uni-view",{staticClass:"item plus",class:t.attr.productSelect.cart_num>=t.attr.productSelect.stock?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumAdd.apply(void 0,arguments)}}},[t._v("+")]):i("v-uni-view",{staticClass:"item plus",class:t.attr.productSelect.cart_num>=t.attr.productSelect.quota||t.attr.productSelect.cart_num>=t.attr.productSelect.product_stock||t.attr.productSelect.cart_num>=t.attr.productSelect.num?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumAdd.apply(void 0,arguments)}}},[t._v("+")])],1)],1)],1),t.iSbnt&&t.attr.productSelect.product_stock>0&&t.attr.productSelect.quota>0?i("v-uni-view",{staticClass:"joinBnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCat.apply(void 0,arguments)}}},[t._v("我要参团")]):t.iSbnt&&t.attr.productSelect.quota<=0||t.iSbnt&&t.attr.productSelect.product_stock<=0?i("v-uni-view",{staticClass:"joinBnt on"},[t._v("已售罄")]):t._e(),t.iScart&&t.attr.productSelect.stock?i("v-uni-view",{staticClass:"joinBnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCat.apply(void 0,arguments)}}},[t._v("确定")]):t.iScart&&!t.attr.productSelect.stock?i("v-uni-view",{staticClass:"joinBnt on"},[t._v("已售罄")]):t._e()],1),i("v-uni-view",{staticClass:"mask",attrs:{hidden:!1===t.attr.cartAttr},on:{touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAttr.apply(void 0,arguments)}}})],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}))},"389b":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.product-window[data-v-d8384874]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:77;border-radius:%?16?% %?16?% 0 0;padding-bottom:%?140?%;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:all .3s cubic-bezier(.25,.5,.5,.9);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.product-window.on[data-v-d8384874]{-webkit-transform:translateZ(0);transform:translateZ(0)}.product-window.join[data-v-d8384874]{padding-bottom:%?30?%}.product-window.joinCart[data-v-d8384874]{padding-bottom:%?30?%;z-index:999}.product-window .textpic[data-v-d8384874]{padding:0 %?130?% 0 %?30?%;margin-top:%?29?%;position:relative}.product-window .textpic .pictrue[data-v-d8384874]{width:%?150?%;height:%?150?%}.product-window .textpic .pictrue uni-image[data-v-d8384874]{width:100%;height:100%;border-radius:%?10?%}.product-window .textpic .text[data-v-d8384874]{width:%?410?%;font-size:%?32?%;color:#202020}.product-window .textpic .text .money[data-v-d8384874]{font-size:%?24?%;margin-top:%?40?%}.product-window .textpic .text .money .num[data-v-d8384874]{font-size:%?36?%}.product-window .textpic .text .money .stock[data-v-d8384874]{color:#999;margin-left:%?18?%}.product-window .textpic .iconfont[data-v-d8384874]{position:absolute;right:%?30?%;top:%?-5?%;font-size:%?35?%;color:#8a8a8a}.product-window .rollTop[data-v-d8384874]{max-height:%?500?%;overflow:auto;margin-top:%?36?%}.product-window .productWinList .item ~ .item[data-v-d8384874]{margin-top:%?36?%}.product-window .productWinList .item .title[data-v-d8384874]{font-size:%?30?%;color:#999;padding:0 %?30?%}.product-window .productWinList .item .listn[data-v-d8384874]{padding:0 %?30?% 0 %?16?%}.product-window .productWinList .item .listn .itemn[data-v-d8384874]{border:1px solid #f2f2f2;font-size:%?26?%;color:#282828;padding:%?7?% %?33?%;border-radius:%?25?%;margin:%?20?% 0 0 %?14?%;background-color:#f2f2f2}.product-window .productWinList .item .listn .itemn.on[data-v-d8384874]{color:#e93323;background:#fff4f3;border-color:#e93323}.product-window .productWinList .item .listn .itemn.limit[data-v-d8384874]{color:#999;text-decoration:line-through}.product-window .cart[data-v-d8384874]{margin-top:%?36?%;padding:0 %?30?%}.product-window .cart .title[data-v-d8384874]{font-size:%?30?%;color:#999}.product-window .cart .carnum[data-v-d8384874]{height:%?54?%;margin-top:%?24?%}.product-window .cart .carnum uni-view[data-v-d8384874]{width:%?84?%;text-align:center;height:100%;line-height:%?54?%;color:#282828;font-size:%?45?%}.product-window .cart .carnum .reduce[data-v-d8384874]{border-right:0;border-radius:%?6?% 0 0 %?6?%;line-height:%?48?%}.product-window .cart .carnum .reduce.on[data-v-d8384874]{color:#dedede;font-size:%?60?%}.product-window .cart .carnum .plus[data-v-d8384874]{border-left:0;border-radius:0 %?6?% %?6?% 0;line-height:%?46?%}.product-window .cart .carnum .plus.on[data-v-d8384874]{border-color:#e3e3e3;color:#dedede}.product-window .cart .carnum .num[data-v-d8384874]{background:#f2f2f2;color:#282828;font-size:%?28?%}.product-window .joinBnt[data-v-d8384874]{font-size:%?30?%;width:%?620?%;height:%?86?%;border-radius:%?50?%;text-align:center;line-height:%?86?%;color:#fff;margin:%?21?% auto 0 auto}.product-window .joinBnt.on[data-v-d8384874]{background-color:#bbb;color:#fff}',""]),t.exports=e},"3b57":function(t,e,i){"use strict";var r=i("7ece"),a=i.n(r);a.a},"3bc0":function(t,e,i){function r(t){for(var e={},i=t.split(","),r=i.length;r--;)e[i[r]]=!0;return e}i("ac1f"),i("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:r(" , ,\t,\r,\n,\f"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:r("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:r("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:r("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:r("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:r("autoplay,controls,ignore,loop,muted"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"3e45":function(t,e,i){"use strict";i.r(e);var r=i("75a2"),a=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"3fa0":function(t,e,i){var r=i("389b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("175af76c",r,!0,{sourceMap:!1,shadowMode:!1})},"40c1":function(t,e,i){"use strict";i.r(e);var r=i("1e96"),a=i("1d08");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("8d98");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"0abae6fa",null,!1,r["a"],o);e["default"]=c.exports},"471b":function(t,e,i){"use strict";i.r(e);var r=i("cfc7"),a=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"4e51":function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{attr:{type:Object,default:function(){}},limitNum:{type:Number,value:0},isShow:{type:Number,value:0},iSbnt:{type:Number,value:0},iSplus:{type:Number,value:0},iScart:{type:Number,value:0}},data:function(){return{}},mounted:function(){},methods:{getpreviewImage:function(){uni.previewImage({urls:this.attr.productSelect.image.split(","),current:this.attr.productSelect.image})},goCat:function(){this.$emit("goCat")},bindCode:function(t){this.$emit("iptCartNum",this.attr.productSelect.cart_num)},closeAttr:function(){this.$emit("myevent")},CartNumDes:function(){this.$emit("ChangeCartNum",!1)},CartNumAdd:function(){this.$emit("ChangeCartNum",!0)},tapAttr:function(t,e){var i=this;i.$emit("attrVal",{indexw:t,indexn:e}),this.$set(this.attr.productAttr[t],"index",this.attr.productAttr[t].attr_values[e]);var r=i.getCheckedValue().join(",");i.$emit("ChangeAttr",r)},getCheckedValue:function(){for(var t=this.attr.productAttr,e=[],i=0;i<t.length;i++)for(var r=0;r<t[i].attr_values.length;r++)t[i].index===t[i].attr_values[r]&&e.push(t[i].attr_values[r]);return e}}};e.default=r},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return a}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var r=i("dde1");function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(r["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n,o=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,n=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(s)throw n}}}}},"5ad5":function(t,e,i){var r=i("e214");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("6872e6d8",r,!0,{sourceMap:!1,shadowMode:!1})},"6e56":function(t,e,i){var r=i("c60b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("17be4714",r,!0,{sourceMap:!1,shadowMode:!1})},"75a2":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("ee27");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("54f8")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("3bc0"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,r="",a=0;i=e[a];a++){if("/"==i&&"/"!=e[a-1]&&"/"!=e[a+1])break;r+=Math.random()>.5?i.toUpperCase():i}return r+=e.substr(a),this[t]=r}if(this[t]=e,e.includes("data:image")){var n=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!n)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,i="",r=(0,_createForOfIteratorHelper2.default)(t);try{for(r.s();!(e=r.n()).done;){var a=e.value;if("text"==a.type)i+=a.text;else{for(var n in i+="<"+a.name,a.attrs||{})i+=" "+n+'="'+a.attrs[n]+'"';a.children&&a.children.length?i+=">"+this._Dom2Str(a.children)+"</"+a.name+">":i+=">"}}}catch(o){r.e(o)}finally{r.f()}return i},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var i="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var r in cfg.userAgentStyles)i+="".concat(r,"{").concat(cfg.userAgentStyles[r],"}");for(r in this.tagStyle)i+="".concat(r,"{").concat(this.tagStyle[r],"}");i+="</style>",t=i+t}return t},setContent:function(t,e){var i=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var a,n=this.rtf.getElementsByTagName("style"),o=0;a=n[o++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var u,d=this.rtf.getElementsByTagName("img"),l=0,p=0;u=d[l];l++){u.style.maxWidth="100%";var f=u.getAttribute("src");this.domain&&f&&("/"==f[0]?"/"==f[1]?u.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+f:u.src=this.domain+f:f.includes("://")||(u.src=this.domain+"/"+f)),u.hasAttribute("ignore")||"A"==u.parentElement.nodeName||(u.i=p++,s.imgList.push(u.src||u.getAttribute("data-src")),u.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),u.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&u.src&&0!=u.i&&(u.setAttribute("data-src",u.src),u.removeAttribute("src"),this._observer.observe(u))}var v,h=this.rtf.getElementsByTagName("a"),m=(0,_createForOfIteratorHelper2.default)(h);try{for(m.s();!(v=m.n()).done;){var g=v.value;g.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(S){m.e(S)}finally{m.f()}var b=this.rtf.getElementsByTagName("video");s.videoContexts=b;for(var _,w=0;_=b[w++];)_.style.maxWidth="100%",_.onerror=function(){s.$emit("error",{source:"video",target:this})},_.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var y,x,C=this.rtf.getElementsByTagName("audios"),k=(0,_createForOfIteratorHelper2.default)(C);try{for(k.s();!(y=k.n()).done;){var A=y.value;A.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(S){k.e(S)}finally{k.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.width=t[0].width,t[0].height==x&&(i.$emit("ready",t[0]),clearInterval(i._timer)),x=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var i=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(i,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=i/2,this._tMin=(i-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},"7ece":function(t,e,i){var r=i("c3f7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("337db163",r,!0,{sourceMap:!1,shadowMode:!1})},8240:function(t,e,i){"use strict";var r=i("6e56"),a=i.n(r);a.a},"8d98":function(t,e,i){"use strict";var r=i("5ad5"),a=i.n(r);a.a},a96f:function(t,e,i){"use strict";var r=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=n,e.getProductCode=o,e.collectAdd=s,e.collectDel=c,e.postCartAdd=u,e.getCategoryList=d,e.getProductslist=l,e.getProductHot=p,e.collectAll=f,e.getGroomList=v,e.getCollectUserList=h,e.getReplyList=m,e.getReplyConfig=g,e.getSearchKeyword=b,e.storeListApi=_;var a=r(i("4ca0"));function n(t){return a.default.get("product/detail/"+t,{},{noAuth:!0})}function o(t){return a.default.get("product/code/"+t,{})}function s(t,e){return a.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function c(t,e){return a.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function u(t){return a.default.post("cart/add",t)}function d(){return a.default.get("category",{},{noAuth:!0})}function l(t){return a.default.get("products",t,{noAuth:!0})}function p(t,e){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function f(t,e){return a.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function v(t,e){return a.default.get("groom/list/"+t,e,{noAuth:!0})}function h(t){return a.default.get("collect/user",t)}function m(t,e){return a.default.get("reply/list/"+t,e)}function g(t){return a.default.get("reply/config/"+t)}function b(){return a.default.get("search/keyword",{},{noAuth:!0})}function _(t){return a.default.get("store_list",t)}},bd85:function(t,e,i){"use strict";var r=i("3fa0"),a=i.n(r);a.a},c3f7:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes show-data-v-2358c866{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-2358c866{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},c60b:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.product-bg[data-v-4a5280b8]{width:100%;height:%?750?%;position:relative}.product-bg uni-swiper[data-v-4a5280b8]{width:100%;height:100%;position:relative}.product-bg .slide-image[data-v-4a5280b8]{width:100%;height:100%}.product-bg .pages[data-v-4a5280b8]{position:absolute;background-color:#fff;height:%?34?%;padding:0 %?10?%;border-radius:%?3?%;right:%?30?%;bottom:%?30?%;line-height:%?34?%;font-size:%?24?%;color:#050505}#myVideo[data-v-4a5280b8]{width:100%;height:100%}.product-bg .item[data-v-4a5280b8]{position:relative;width:100%;height:100%}.product-bg .item .poster[data-v-4a5280b8]{position:absolute;top:0;left:0;height:%?750?%;width:100%;z-index:9}.product-bg .item .poster .image[data-v-4a5280b8]{width:100%;height:100%}.product-bg .item .stop[data-v-4a5280b8]{position:absolute;top:50%;left:50%;width:%?136?%;height:%?136?%;margin-top:%?-68?%;margin-left:%?-68?%;z-index:9}.product-bg .item .stop .image[data-v-4a5280b8]{width:100%;height:100%}',""]),t.exports=e},cfc7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{imgUrls:{type:Array,default:function(){return[]}},videoline:{type:String,value:""}},data:function(){return{indicatorDots:!0,circular:!0,autoplay:!1,interval:3e3,duration:500,currents:"1",controls:!0}},mounted:function(){this.videoContext=uni.createVideoContext("myVideo",this)},methods:{bindPause:function(){this.videoContext.play(),this.$set(this,"controls",!1)},change:function(t){this.$set(this,"currents",t.detail.current+1)}}};e.default=r},e214:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.evaluateWtapper .evaluateItem[data-v-0abae6fa]{background-color:#fff;padding-bottom:%?25?%}.evaluateWtapper .evaluateItem ~ .evaluateItem[data-v-0abae6fa]{border-top:%?1?% solid #f5f5f5}.evaluateWtapper .evaluateItem .pic-text[data-v-0abae6fa]{font-size:%?26?%;color:#282828;height:%?95?%;padding:0 %?30?%}.evaluateWtapper .evaluateItem .pic-text .pictrue[data-v-0abae6fa]{width:%?56?%;height:%?56?%;margin-right:%?20?%}.evaluateWtapper .evaluateItem .pic-text .pictrue uni-image[data-v-0abae6fa]{width:100%;height:100%;border-radius:50%}.evaluateWtapper .evaluateItem .pic-text .name[data-v-0abae6fa]{max-width:%?450?%;margin-right:%?15?%}.evaluateWtapper .evaluateItem .time[data-v-0abae6fa]{font-size:%?24?%;color:#82848f;padding:0 %?30?%}.evaluateWtapper .evaluateItem .evaluate-infor[data-v-0abae6fa]{font-size:%?28?%;color:#282828;margin-top:%?19?%;padding:0 %?30?%}.evaluateWtapper .evaluateItem .imgList[data-v-0abae6fa]{padding:0 %?30?% 0 %?15?%;margin-top:%?25?%}.evaluateWtapper .evaluateItem .imgList .pictrue[data-v-0abae6fa]{width:%?156?%;height:%?156?%;margin:0 0 %?15?% %?15?%}.evaluateWtapper .evaluateItem .imgList .pictrue uni-image[data-v-0abae6fa]{width:100%;height:100%}.evaluateWtapper .evaluateItem .reply[data-v-0abae6fa]{font-size:%?26?%;color:#454545;background-color:#f7f7f7;border-radius:%?5?%;margin:%?20?% %?30?% 0 %?30?%;padding:%?30?%;position:relative}.evaluateWtapper .evaluateItem .reply[data-v-0abae6fa]::before{content:"";width:0;height:0;border-left:%?20?% solid transparent;border-right:%?20?% solid transparent;border-bottom:%?30?% solid #f7f7f7;position:absolute;top:%?-30?%;left:%?40?%}',""]),t.exports=e},e3b2:function(t,e,i){t.exports=i.p+"static/img/stop.5a8e6dc1.png"},ef60:function(t,e,i){"use strict";i.r(e);var r=i("4e51"),a=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a}}]);