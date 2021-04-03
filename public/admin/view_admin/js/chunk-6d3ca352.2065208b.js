(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3ca352"],{"11ad":function(t,e,r){},1426:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-manager"},[r("div",{staticClass:"i-layout-page-header"},[r("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[r("div",{attrs:{slot:"title"},slot:"title"},[t.$route.params.id?r("router-link",{attrs:{to:{path:"/admin/product/product_list"}}},[r("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1):t._e(),r("span",{staticClass:"mr20"},[t._v("商品评论管理")])],1)])],1),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"时间选择："}},[r("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.data)}},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,n){return r("Radio",{key:n,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),r("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1),r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"评价状态："}},[r("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.is_reply,callback:function(e){t.$set(t.formValidate,"is_reply",e)},expression:"formValidate.is_reply"}},[r("Option",{attrs:{value:"1"}},[t._v("已回复")]),r("Option",{attrs:{value:"0"}},[t._v("未回复")])],1)],1)],1),t.$route.params.id?t._e():r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"商品信息：","label-for":"store_name"}},[r("Input",{attrs:{size:"default","enter-button":"",placeholder:"请输入商品ID或者商品信息",clearable:""},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1)],1),r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"用户名称：","label-for":"account"}},[r("Input",{attrs:{size:"default","enter-button":"",placeholder:"请输入",clearable:""},model:{value:t.formValidate.account,callback:function(e){t.$set(t.formValidate,"account",e)},expression:"formValidate.account"}})],1)],1),r("Col",{staticClass:"search",attrs:{xl:3,lg:3,md:12,sm:12,xs:24}},[r("FormItem",[r("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.userSearchs}},[t._v("搜索")])],1)],1)],1)],1),r("Row",{attrs:{type:"flex"}},[r("Col",t._b({},"Col",t.grid,!1),[r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["product-reply-save_fictitious_reply"],expression:"['product-reply-save_fictitious_reply']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加虚拟评论")])],1)],1),r("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.tableList,loading:t.loading,"no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"info",fn:function(e){var n=e.row;return[r("div",{staticClass:"imgPic acea-row row-middle"},[r("viewer",[r("div",{staticClass:"pictrue"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.image,expression:"row.image"}]})])]),r("div",{staticClass:"info"},[t._v(t._s(n.store_name))])],1)]}},{key:"content",fn:function(e){var n=e.row;return[r("div",{staticClass:"mb5 content_font"},[t._v(t._s(n.comment))]),r("viewer",t._l(n.pics||[],(function(t,e){return r("div",{key:e,staticClass:"pictrue mr10"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}]})])})),0)]}},{key:"action",fn:function(e){var n=e.row,a=e.index;return[r("a",{on:{click:function(e){return t.reply(n)}}},[t._v("回复")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.del(n,"删除评论",a)}}},[t._v("删除")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),r("Modal",{attrs:{scrollable:"",title:"回复内容",closable:""},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[r("Form",{ref:"contents",attrs:{model:t.contents,rules:t.ruleInline,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{prop:"content"}},[r("Input",{attrs:{type:"textarea",rows:4,placeholder:"请输入回复内容"},model:{value:t.contents.content,callback:function(e){t.$set(t.contents,"content",e)},expression:"contents.content"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary"},on:{click:t.oks}},[t._v("确定")]),r("Button",{on:{click:t.cancels}},[t._v("取消")])],1)],1)],1)},a=[],o=r("a34a"),i=r.n(o),c=r("2f62"),u=r("c4c8");function s(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){s(o,n,a,i,c,"next",t)}function c(t){s(o,n,a,i,c,"throw",t)}i(void 0)}))}}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"product_productEvaluate",data:function(){return{modals:!1,grid:{xl:7,lg:10,md:12,sm:12,xs:24},formValidate:{is_reply:"",data:"",store_name:"",account:"",product_id:void 0===this.$route.params.id?0:this.$route.params.id,page:1,limit:15},fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},value:"45",tableList:[],total:0,loading:!1,columns:[{title:"评论ID",key:"id",width:80},{title:"商品信息",slot:"info",minWidth:230},{title:"用户名称",key:"nickname",minWidth:150},{title:"评分",key:"score",sortable:!0,minWidth:90},{title:"评价内容",slot:"content",minWidth:210},{title:"回复内容",key:"merchant_reply_content",minWidth:250},{title:"评价时间",key:"add_time",sortable:!0,minWidth:150},{title:"操作",slot:"action",fixed:"right",minWidth:150}],timeVal:[],contents:{content:""},ruleInline:{content:[{required:!0,message:"请输入回复内容",trigger:"blur"}]},rows:{}}},computed:m({},Object(c["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},watch:{"$route.params.id":function(t,e){this.formValidate.product_id=0,this.getList()}},methods:{add:function(){var t=this;this.$modalForm(Object(u["f"])(this.formValidate.product_id)).then((function(){return t.getList()}))},oks:function(){var t=this;this.modals=!0,this.$refs["contents"].validate((function(e){if(!e)return!1;Object(u["y"])(t.contents,t.rows.id).then(function(){var e=l(i.a.mark((function e(r){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg),t.modals=!1,t.$refs["contents"].resetFields(),t.getList();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}))},cancels:function(){this.modals=!1,this.$refs["contents"].resetFields()},del:function(t,e,r){var n=this,a={title:e,num:r,url:"product/reply/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(t){n.$Message.success(t.msg),n.tableList.splice(r,1)})).catch((function(t){n.$Message.error(t.msg)}))},reply:function(t){this.modals=!0,this.rows=t},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.formValidate.page=1,this.getList()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.formValidate.page=1,this.getList()},getList:function(){var t=this;this.loading=!0,this.formValidate.is_reply=this.formValidate.is_reply||"",this.formValidate.store_name=this.formValidate.store_name||"",Object(u["u"])(this.formValidate).then(function(){var e=l(i.a.mark((function e(r){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=r.data,t.tableList=n.list,t.total=r.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},search:function(){}}},h=p,b=(r("a6e8"),r("2877")),g=Object(b["a"])(h,n,a,!1,null,"84cff920",null);e["default"]=g.exports},a6e8:function(t,e,r){"use strict";var n=r("11ad"),a=r.n(n);a.a},c4c8:function(t,e,r){"use strict";r.d(e,"h",(function(){return a})),r.d(e,"i",(function(){return o})),r.d(e,"a",(function(){return i})),r.d(e,"s",(function(){return c})),r.d(e,"t",(function(){return u})),r.d(e,"B",(function(){return s})),r.d(e,"q",(function(){return l})),r.d(e,"k",(function(){return d})),r.d(e,"r",(function(){return m})),r.d(e,"l",(function(){return f})),r.d(e,"m",(function(){return p})),r.d(e,"z",(function(){return h})),r.d(e,"b",(function(){return b})),r.d(e,"u",(function(){return g})),r.d(e,"y",(function(){return v})),r.d(e,"d",(function(){return y})),r.d(e,"e",(function(){return _})),r.d(e,"g",(function(){return O})),r.d(e,"x",(function(){return w})),r.d(e,"v",(function(){return j})),r.d(e,"w",(function(){return k})),r.d(e,"f",(function(){return x})),r.d(e,"n",(function(){return V})),r.d(e,"p",(function(){return C})),r.d(e,"o",(function(){return P})),r.d(e,"A",(function(){return $})),r.d(e,"c",(function(){return L})),r.d(e,"j",(function(){return T}));var n=r("b6bd");function a(){return Object(n["a"])({url:"product/product/type_header",method:"get"})}function o(t){return Object(n["a"])({url:"product/product",method:"get",params:t})}function i(t,e){return Object(n["a"])({url:"product/product/set_show/".concat(t,"/").concat(e),method:"put"})}function c(t){return Object(n["a"])({url:"product/product/product_show",method:"put",data:t})}function u(t){return Object(n["a"])({url:"product/product/product_unshow",method:"put",data:t})}function s(){return Object(n["a"])({url:"product/category/tree/1",method:"get"})}function l(t){return Object(n["a"])({url:"product/product/".concat(t),method:"get"})}function d(t){return Object(n["a"])({url:"product/product/".concat(t.id),method:"POST",data:t})}function m(t){return Object(n["a"])({url:"product/category",method:"get",params:t})}function f(){return Object(n["a"])({url:"product/category/create",method:"get"})}function p(t){return Object(n["a"])({url:"product/category/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"product/category/set_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function b(t){return Object(n["a"])({url:"product/product/list",method:"GET",params:t})}function g(t){return Object(n["a"])({url:"product/reply",method:"get",params:t})}function v(t,e){return Object(n["a"])({url:"product/reply/set_reply/".concat(e),method:"PUT",data:t})}function y(t){return Object(n["a"])({url:"product/copy",method:"POST",data:t})}function _(t){return Object(n["a"])({url:"product/crawl/save",method:"POST",data:t})}function O(t,e,r){return Object(n["a"])({url:"product/generate_attr/".concat(e,"/").concat(r),method:"POST",data:t})}function w(t){return Object(n["a"])({url:"product/product/rule",method:"GET",params:t})}function j(t,e){return Object(n["a"])({url:"product/product/rule/".concat(e),method:"POST",data:t})}function k(t){return Object(n["a"])({url:"product/product/rule/".concat(t),method:"get"})}function x(t){return Object(n["a"])({url:"product/reply/fictitious_reply/".concat(t),method:"get"})}function V(){return Object(n["a"])({url:"product/product/get_rule",method:"get"})}function C(){return Object(n["a"])({url:"product/product/get_template",method:"get"})}function P(){return Object(n["a"])({url:"product/product/get_temp_keys",method:"get"})}function $(t){return Object(n["a"])({url:"export/storeProduct",method:"get",params:t})}function L(t){return Object(n["a"])({url:"product/product/check_activity/".concat(t),method:"get"})}function T(){return Object(n["a"])({url:"user/user_label",method:"get"})}}}]);