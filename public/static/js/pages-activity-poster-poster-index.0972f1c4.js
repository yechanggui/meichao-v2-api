(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-poster-poster-index"],{"2f40":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-72bd9acc]{background-color:#d22516!important}.poster-poster .tip[data-v-72bd9acc]{height:%?80?%;font-size:%?26?%;color:#e8c787;text-align:center;line-height:%?80?%}.poster-poster .tip .iconfont[data-v-72bd9acc]{font-size:%?36?%;vertical-align:%?-4?%;margin-right:%?18?%}.poster-poster .pictrue[data-v-72bd9acc]{width:%?690?%;height:100%;margin:0 auto %?50?% auto}.poster-poster .pictrue uni-image[data-v-72bd9acc]{width:100%;height:100%}body.?%PAGE?%[data-v-72bd9acc]{background-color:#d22516!important}",""]),t.exports=n},4448:function(t,n,e){"use strict";var i=e("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.getCombinationList=r,n.getCombinationDetail=o,n.getCombinationPink=u,n.postCombinationRemove=c,n.getBargainList=s,n.getBargainUserList=f,n.bargainUserCancel=l,n.getBargainDetail=d,n.postBargainStartUser=g,n.postBargainStart=p,n.postBargainHelp=b,n.postBargainHelpPrice=v,n.postBargainHelpList=h,n.postBargainHelpCount=m,n.postBargainShare=w,n.getSeckillIndexTime=B,n.getSeckillList=C,n.getSeckillDetail=k,n.getBargainPoster=y,n.getCombinationPoster=P,n.getBargainUserCancel=x,n.seckillCode=I,n.scombinationCode=L;var a=i(e("4ca0"));function r(t){return a.default.get("combination/list",t,{noAuth:!0})}function o(t){return a.default.get("combination/detail/"+t)}function u(t){return a.default.get("combination/pink/"+t)}function c(t){return a.default.post("combination/remove",t)}function s(t){return a.default.get("bargain/list",t,{noAuth:!0})}function f(t){return a.default.get("bargain/user/list",t)}function l(t){return a.default.post("bargain/user/cancel",{bargainId:t})}function d(t){return a.default.get("bargain/detail/"+t)}function g(t){return a.default.post("bargain/start/user",t)}function p(t){return a.default.post("bargain/start",{bargainId:t})}function b(t){return a.default.post("bargain/help",t)}function v(t){return a.default.post("bargain/help/price",t)}function h(t){return a.default.post("bargain/help/list",t)}function m(t){return a.default.post("bargain/help/count",t)}function w(t){return a.default.post("bargain/share",{bargainId:t})}function B(){return a.default.get("seckill/index",{},{noAuth:!0})}function C(t,n){return a.default.get("seckill/list/"+t,n,{noAuth:!0})}function k(t){return a.default.get("seckill/detail/"+t)}function y(t){return a.default.post("bargain/poster",t)}function P(t){return a.default.post("combination/poster",t)}function x(t){return a.default.post("/bargain/user/cancel",t)}function I(t,n){return a.default.get("seckill/code/"+t,n)}function L(t){return a.default.get("combination/code/"+t)}},5847:function(t,n,e){"use strict";var i=e("a94c"),a=e.n(i);a.a},"74b8":function(t,n,e){"use strict";e("ac1f"),e("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("4448"),a={data:function(){return{parameter:{navbar:"1",return:"1",title:"拼团海报",color:!0,class:"0"},type:0,id:0,image:"",from:""}},onLoad:function(t){this.from="wechat";if(!t.hasOwnProperty("type")||!t.hasOwnProperty("id"))return app.Tips({title:"参数错误",icon:"none"},{tab:3,url:1});this.type=t.type,this.id=t.id,1==t.type?uni.setNavigationBarTitle({title:"砍价海报"}):uni.setNavigationBarTitle({title:"拼团海报"})},onShow:function(){this.getPosterInfo()},methods:{getPosterInfo:function(){var t=this,n={id:t.id,from:t.from};1==t.type?(0,i.getBargainPoster)({bargainId:t.id,from:t.from}).then((function(n){t.image=n.data.url})).catch((function(t){})):(0,i.getCombinationPoster)(n).then((function(n){t.image=n.data.url})).catch((function(t){}))},showImage:function(){var t=this.image.split(",");uni.previewImage({urls:t,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})}}};n.default=a},a94c:function(t,n,e){var i=e("2f40");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("7e2aa209",i,!0,{sourceMap:!1,shadowMode:!1})},b94f:function(t,n,e){"use strict";e.r(n);var i=e("74b8"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},bf3a:function(t,n,e){"use strict";e.r(n);var i=e("e619"),a=e("b94f");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("5847");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"72bd9acc",null,!1,i["a"],o);n["default"]=c.exports},e619:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"poster-poster"},[e("v-uni-view",{staticClass:"tip"},[e("v-uni-text",{staticClass:"iconfont icon-shuoming"}),t._v("提示：点击图片即可保存至手机相册")],1),e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:t.image,mode:"widthFix"}})],1)],1)],1)},r=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}))}}]);