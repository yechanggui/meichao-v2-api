(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_spread_code-index"],{"077f":function(t,e,i){"use strict";i.r(e);var n=i("10ad"),a=i("8a25");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d437");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"579090e2",null,!1,n["a"],s);e["default"]=c.exports},"10ad":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"11ca":function(t,e,i){var n=i("55de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4106c5d0",n,!0,{sourceMap:!1,shadowMode:!1})},"138b":function(t,e,i){"use strict";var n=i("11ca"),a=i.n(n);a.a},"55de":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-04a977cd]{background-color:#a3a3a3!important}.distribution-posters uni-swiper[data-v-04a977cd]{width:100%;height:%?1000?%;position:relative;margin-top:%?40?%}.distribution-posters .slide-image[data-v-04a977cd]{width:100%;height:100%;margin:0 auto;border-radius:%?15?%}.distribution-posters .slide-image.active[data-v-04a977cd]{-webkit-transform:none;transform:none;-webkit-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s}.distribution-posters .slide-image.quiet[data-v-04a977cd]{-webkit-transform:scale(.83333);transform:scale(.83333);-webkit-transition:all .2s ease-in 0s;transition:all .2s ease-in 0s}.distribution-posters .keep[data-v-04a977cd]{font-size:%?30?%;color:#fff;width:%?600?%;height:%?80?%;border-radius:%?50?%;text-align:center;line-height:%?80?%;margin:%?38?% auto}.distribution-posters .preserve[data-v-04a977cd]{color:#fff;text-align:center;margin-top:%?38?%}.distribution-posters .preserve .line[data-v-04a977cd]{width:%?100?%;height:1px;background-color:#fff}.distribution-posters .preserve .tip[data-v-04a977cd]{margin:0 %?30?%}body.?%PAGE?%[data-v-04a977cd]{background-color:#a3a3a3!important}',""]),t.exports=e},"6d2e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-579090e2]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-579090e2]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-579090e2]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-579090e2]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-579090e2]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-579090e2]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-579090e2]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"8a25":function(t,e,i){"use strict";i.r(e);var n=i("ffec"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9507:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"distribution-posters"},[i("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"previous-margin":"40px","next-margin":"40px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindchange.apply(void 0,arguments)}}},[t._l(t.spreadList,(function(e,n){return[i("v-uni-swiper-item",[i("v-uni-image",{staticClass:"slide-image",class:t.swiperIndex==n?"active":"quiet",attrs:{src:e.wap_poster,mode:"aspectFill"}})],1)]}))],2),i("div",{staticClass:"preserve acea-row row-center-wrapper"},[i("div",{staticClass:"line"}),i("div",{staticClass:"tip"},[t._v("长按保存图片")]),i("div",{staticClass:"line"})])],1),i("home")],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"9e52":function(t,e,i){"use strict";i.r(e);var n=i("d9df"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a78e:function(t,e,i){"use strict";i.r(e);var n=i("9507"),a=i("9e52");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("138b");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"04a977cd",null,!1,n["a"],s);e["default"]=c.exports},c1ea:function(t,e,i){var n=i("6d2e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1866f425",n,!0,{sourceMap:!1,shadowMode:!1})},d437:function(t,e,i){"use strict";var n=i("c1ea"),a=i.n(n);a.a},d9df:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("e6f8"),o=i("dccc"),s=i("2f62"),r=n(i("077f")),c={components:{home:r.default},data:function(){return{imgUrls:[],indicatorDots:!1,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],userInfo:{},poster:"",isAuto:!1,isShowAuth:!1}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.userSpreadBannerList():(0,o.toLogin)()},methods:{onLoadFun:function(t){this.$set(this,"userInfo",t),this.userSpreadBannerList()},authColse:function(t){this.isShowAuth=t},bindchange:function(t){var e=this.spreadList;this.swiperIndex=t.detail.current,this.$set(this,"poster",e[t.detail.current].poster)},savePosterPath:function(){var t=this;uni.downloadFile({url:t.poster,success:function(e){if(200!==e.statusCode)return t.$util.Tips({title:e.errMsg});uni.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(e){return t.$util.Tips({title:"保存成功"})},fail:function(e){return t.$util.Tips({title:e.errMsg})},complete:function(t){}}):uni.authorize({scope:"scope.writePhotosAlbum",success:function(){uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(e){return t.$util.Tips({title:"保存成功"})},fail:function(e){return t.$util.Tips({title:e.errMsg})},complete:function(t){}})},fail:function(){uni.showModal({title:"您已拒绝获取相册权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)uni.openSetting({success:function(t){}});else if(e.cancel)return t.$util.Tips({title:"已取消！"})}})}})},fail:function(t){}})},fail:function(e){return t.$util.Tips({title:e.errMsg})}})},setShareInfoStatus:function(){var t=this;this.$wechat.isWeixin()&&(this.isLogin?(0,a.getUserInfo)().then((function(e){var i={desc:"分销海报",title:e.data.nickname+"-分销海报",link:"/pages/index/index?spread="+e.data.uid,imgUrl:t.spreadList[0]};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],i)})):(0,o.toLogin)())},userSpreadBannerList:function(){var t=this;uni.showLoading({title:"获取中",mask:!0}),(0,a.spreadBanner)().then((function(e){uni.hideLoading(),t.$set(t,"spreadList",e.data),t.$set(t,"poster",e.data[0].poster),t.setShareInfoStatus()})).catch((function(t){uni.hideLoading()}))}}};e.default=c},ffec:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),a={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=a}}]);