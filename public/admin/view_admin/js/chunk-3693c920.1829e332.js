(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3693c920"],{3701:function(t,e,r){},c4ad:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goodList"},[r("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"商品分类：","label-for":"pid"}},[r("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.cate_id,callback:function(e){t.$set(t.formValidate,"cate_id",e)},expression:"formValidate.cate_id"}},t._l(t.treeSelect,(function(e){return r("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.html+e.cate_name)+"\n                        ")])})),1)],1)],1),r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"商品搜索：","label-for":"store_name"}},[r("Input",{staticStyle:{width:"80%"},attrs:{search:"","enter-button":"",placeholder:"请输入商品名称,关键字,编号"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1)],1)],1)],1),r("Table",{ref:"table",attrs:{"no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果","max-height":"400",columns:t.columns4,data:t.tableList,loading:t.loading},on:{"on-selection-change":t.changeCheckbox},scopedSlots:t._u([{key:"image",fn:function(t){var e=t.row;t.index;return[r("viewer",[r("div",{staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1),"many"===t.many?r("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary",size:"large",loading:t.modal_loading,long:""},on:{click:t.ok}},[t._v("提交")])],1):t._e()],1)},o=[],a=r("a34a"),c=r.n(a),u=r("2f62"),i=r("c4c8");function d(t,e,r,n,o,a,c){try{var u=t[a](c),i=u.value}catch(d){return void r(d)}u.done?e(i):Promise.resolve(i).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){d(a,n,o,c,u,"next",t)}function u(t){d(a,n,o,c,u,"throw",t)}c(void 0)}))}}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"index",data:function(){return{modal_loading:!1,treeSelect:[],formValidate:{page:1,limit:15,cate_id:"",store_name:""},total:0,modals:!1,loading:!1,grid:{xl:10,lg:10,md:12,sm:24,xs:24},tableList:[],currentid:0,productRow:{},columns4:[{title:"商品ID",key:"id"},{title:"图片",slot:"image"},{title:"商品名称",key:"store_name",minWidth:250},{title:"商品分类",key:"cate_name",minWidth:150}],images:[],many:""}},computed:f({},Object(u["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){var t=this,e={width:60,align:"center",render:function(e,r){var n=r.row.id,o=!1;o=t.currentid===n;var a=t;return e("div",[e("Radio",{props:{value:o},on:{"on-change":function(){if(a.currentid=n,t.productRow=r.row,t.$emit("getProductId",t.productRow),t.productRow.id){if("image"===t.$route.query.fodder){var e={image:t.productRow.image,product_id:t.productRow.id};form_create_helper.set("image",e),form_create_helper.close("image")}}else t.$Message.warning("请先选择商品")}}})])}},r={type:"selection",width:60,align:"center"},n=this.$route.query.type;this.many=n,"many"===n?this.columns4.unshift(r):this.columns4.unshift(e)},mounted:function(){this.goodsCategory(),this.getList()},methods:{changeCheckbox:function(t){var e=[];t.forEach((function(t){var r={image:t.image,product_id:t.id};e.push(r)})),this.images=e},goodsCategory:function(){var t=this;Object(i["B"])().then((function(e){t.treeSelect=e.data})).catch((function(e){t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},getList:function(){var t=this;this.loading=!0,Object(i["b"])(this.formValidate).then(function(){var e=l(c.a.mark((function e(r){var n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=r.data,t.tableList=n.list,t.total=r.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},ok:function(){this.images.length>0?"image"===this.$route.query.fodder&&(console.log("this.images"),console.log(this.images),form_create_helper.set("image",this.images),form_create_helper.close("image")):this.$Message.warning("请先选择商品")},userSearchs:function(){this.getList()},clear:function(){this.productRow.id="",this.currentid=""}}},h=p,g=(r("e471"),r("2877")),b=Object(g["a"])(h,n,o,!1,null,"52c2389e",null);e["default"]=b.exports},c4c8:function(t,e,r){"use strict";r.d(e,"h",(function(){return o})),r.d(e,"i",(function(){return a})),r.d(e,"a",(function(){return c})),r.d(e,"s",(function(){return u})),r.d(e,"t",(function(){return i})),r.d(e,"B",(function(){return d})),r.d(e,"q",(function(){return l})),r.d(e,"k",(function(){return s})),r.d(e,"r",(function(){return f})),r.d(e,"l",(function(){return m})),r.d(e,"m",(function(){return p})),r.d(e,"z",(function(){return h})),r.d(e,"b",(function(){return g})),r.d(e,"u",(function(){return b})),r.d(e,"y",(function(){return y})),r.d(e,"d",(function(){return O})),r.d(e,"e",(function(){return w})),r.d(e,"g",(function(){return _})),r.d(e,"x",(function(){return v})),r.d(e,"v",(function(){return j})),r.d(e,"w",(function(){return P})),r.d(e,"f",(function(){return k})),r.d(e,"n",(function(){return x})),r.d(e,"p",(function(){return S})),r.d(e,"o",(function(){return C})),r.d(e,"A",(function(){return V})),r.d(e,"c",(function(){return $})),r.d(e,"j",(function(){return T}));var n=r("b6bd");function o(){return Object(n["a"])({url:"product/product/type_header",method:"get"})}function a(t){return Object(n["a"])({url:"product/product",method:"get",params:t})}function c(t,e){return Object(n["a"])({url:"product/product/set_show/".concat(t,"/").concat(e),method:"put"})}function u(t){return Object(n["a"])({url:"product/product/product_show",method:"put",data:t})}function i(t){return Object(n["a"])({url:"product/product/product_unshow",method:"put",data:t})}function d(){return Object(n["a"])({url:"product/category/tree/1",method:"get"})}function l(t){return Object(n["a"])({url:"product/product/".concat(t),method:"get"})}function s(t){return Object(n["a"])({url:"product/product/".concat(t.id),method:"POST",data:t})}function f(t){return Object(n["a"])({url:"product/category",method:"get",params:t})}function m(){return Object(n["a"])({url:"product/category/create",method:"get"})}function p(t){return Object(n["a"])({url:"product/category/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"product/category/set_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function g(t){return Object(n["a"])({url:"product/product/list",method:"GET",params:t})}function b(t){return Object(n["a"])({url:"product/reply",method:"get",params:t})}function y(t,e){return Object(n["a"])({url:"product/reply/set_reply/".concat(e),method:"PUT",data:t})}function O(t){return Object(n["a"])({url:"product/copy",method:"POST",data:t})}function w(t){return Object(n["a"])({url:"product/crawl/save",method:"POST",data:t})}function _(t,e,r){return Object(n["a"])({url:"product/generate_attr/".concat(e,"/").concat(r),method:"POST",data:t})}function v(t){return Object(n["a"])({url:"product/product/rule",method:"GET",params:t})}function j(t,e){return Object(n["a"])({url:"product/product/rule/".concat(e),method:"POST",data:t})}function P(t){return Object(n["a"])({url:"product/product/rule/".concat(t),method:"get"})}function k(t){return Object(n["a"])({url:"product/reply/fictitious_reply/".concat(t),method:"get"})}function x(){return Object(n["a"])({url:"product/product/get_rule",method:"get"})}function S(){return Object(n["a"])({url:"product/product/get_template",method:"get"})}function C(){return Object(n["a"])({url:"product/product/get_temp_keys",method:"get"})}function V(t){return Object(n["a"])({url:"export/storeProduct",method:"get",params:t})}function $(t){return Object(n["a"])({url:"product/product/check_activity/".concat(t),method:"get"})}function T(){return Object(n["a"])({url:"user/user_label",method:"get"})}},e471:function(t,e,r){"use strict";var n=r("3701"),o=r.n(n);o.a}}]);