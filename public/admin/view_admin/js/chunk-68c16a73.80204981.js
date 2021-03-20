(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c16a73"],{2867:function(t,e,n){},8404:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("PageHeader",{staticClass:"product_tabs",attrs:{title:t.$route.meta.title,"hidden-breadcrumb":""}})],1),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"artFrom",attrs:{model:t.artFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24}},[n("Col",t._b({staticClass:"mr"},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"提货点名称：","label-for":"store_name"}},[n("Select",{attrs:{"element-id":"store_id",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.artFrom.store_id,callback:function(e){t.$set(t.artFrom,"store_id",e)},expression:"artFrom.store_id"}},t._l(t.storeSelectList,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["merchant-store_staff-create"],expression:"['merchant-store_staff-create']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加核销员")])],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.storeLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;t.index;return[n("viewer",[n("div",{staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])])]}},{key:"status",fn:function(e){var r=e.row;e.index;return[n("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r.id,r.status)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[t._v(">\n                    "),n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var r=e.row,o=e.index;return[n("a",{on:{click:function(e){return t.edit(r.id)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除核销员",o)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.artFrom.page,"show-elevator":"","show-total":"","page-size":t.artFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},o=[],a=n("2f62"),i=n("90e7");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"setting_staff",components:{},computed:c({},Object(a["e"])("admin/layout",["isMobile"]),{},Object(a["e"])("admin/userLevel",["categoryId"]),{labelWidth:function(){return this.isMobile?void 0:85},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},artFrom:{page:1,limit:15,store_id:0},loading:!1,columns:[{title:"ID",key:"id",width:80,sortable:!0},{title:"微信名称",key:"nickname",minWidth:100},{title:"头像",slot:"avatar",minWidth:100},{title:"客服名称",key:"staff_name",minWidth:100},{title:"所属提货点",key:"name",minWidth:100},{title:"添加时间",key:"add_time",minWidth:100},{title:"状态",slot:"status",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],storeLists:[],storeSelectList:[],total:0}},mounted:function(){this.getList(),this.storeList()},methods:{storeList:function(){var t=this;Object(i["z"])().then((function(e){t.storeSelectList=e.data}))},getList:function(){var t=this,e=this;e.loading=!0,Object(i["P"])(e.artFrom).then((function(t){e.loading=!1,e.storeLists=t.data.list,e.total=t.data.count})).catch((function(e){t.$Message.error(e.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()},pageChange:function(t){this.artFrom.page=t,this.getList()},del:function(t,e,n){var r=this,o={title:e,num:n,url:"merchant/store_staff/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(o).then((function(t){r.$Message.success(t.msg),r.storeLists.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},add:function(){var t=this;this.$modalForm(Object(i["Q"])(0)).then((function(){return t.getList()}))},onchangeIsShow:function(t,e){var n=this;Object(i["S"])(t,e).then((function(t){n.$Message.success(t.msg),n.getList()}))},edit:function(t){var e=this;this.$modalForm(Object(i["R"])(t)).then((function(){return e.getList()}))}}},f=d,l=(n("8ff9"),n("2877")),m=Object(l["a"])(f,r,o,!1,null,"e9b81e76",null);e["default"]=m.exports},"8ff9":function(t,e,n){"use strict";var r=n("2867"),o=n.n(r);o.a},"90e7":function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"U",(function(){return i})),n.d(e,"T",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"B",(function(){return d})),n.d(e,"H",(function(){return f})),n.d(e,"I",(function(){return l})),n.d(e,"A",(function(){return m})),n.d(e,"J",(function(){return h})),n.d(e,"L",(function(){return g})),n.d(e,"v",(function(){return p})),n.d(e,"K",(function(){return b})),n.d(e,"j",(function(){return O})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return v})),n.d(e,"k",(function(){return _})),n.d(e,"E",(function(){return y})),n.d(e,"F",(function(){return w})),n.d(e,"C",(function(){return k})),n.d(e,"D",(function(){return x})),n.d(e,"x",(function(){return L})),n.d(e,"q",(function(){return P})),n.d(e,"t",(function(){return F})),n.d(e,"s",(function(){return C})),n.d(e,"n",(function(){return E})),n.d(e,"u",(function(){return S})),n.d(e,"p",(function(){return T})),n.d(e,"r",(function(){return $})),n.d(e,"o",(function(){return W})),n.d(e,"m",(function(){return D})),n.d(e,"w",(function(){return G})),n.d(e,"e",(function(){return M})),n.d(e,"b",(function(){return z})),n.d(e,"c",(function(){return I})),n.d(e,"V",(function(){return R})),n.d(e,"W",(function(){return U})),n.d(e,"X",(function(){return B})),n.d(e,"G",(function(){return J})),n.d(e,"M",(function(){return N})),n.d(e,"y",(function(){return H})),n.d(e,"O",(function(){return Q})),n.d(e,"N",(function(){return q})),n.d(e,"P",(function(){return A})),n.d(e,"Q",(function(){return K})),n.d(e,"R",(function(){return V})),n.d(e,"S",(function(){return X})),n.d(e,"Y",(function(){return Y})),n.d(e,"Z",(function(){return Z})),n.d(e,"z",(function(){return tt})),n.d(e,"d",(function(){return et}));var r=n("b6bd");function o(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/setting/config/edit_basics",method:"get",params:t})}function i(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function u(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function c(t){return Object(r["a"])({url:"notify/sms/config",method:"post",data:t})}function s(t){return Object(r["a"])({url:"notify/sms/captcha",method:"post",data:t})}function d(t){return Object(r["a"])({url:"notify/sms/register",method:"post",data:t})}function f(){return Object(r["a"])({url:"notify/sms/number",method:"get"})}function l(){return Object(r["a"])({url:"notify/sms/price",method:"get"})}function m(t){return Object(r["a"])({url:"notify/sms/pay_code",method:"post",data:t})}function h(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function g(){return Object(r["a"])({url:"merchant/store",method:"GET"})}function p(){return Object(r["a"])({url:"merchant/store/address",method:"GET"})}function b(t){return Object(r["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function O(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function j(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function v(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function _(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function y(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function w(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function k(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function x(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function L(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function P(t){return Object(r["a"])({url:"app/wechat/kefu",method:"get",params:t})}function F(t){return Object(r["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function C(){return Object(r["a"])({url:"app/wechat/kefu/add",method:"get"})}function E(t){return Object(r["a"])({url:"app/wechat/kefu",method:"post",data:t})}function S(t){return Object(r["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function T(t){return Object(r["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function $(t,e){return Object(r["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function W(t){return Object(r["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function D(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function G(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function M(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function z(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function I(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function R(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function U(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function B(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function J(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function N(){return Object(r["a"])({url:"merchant/store/get_header",method:"get"})}function H(t){return Object(r["a"])({url:"merchant/store",method:"get",params:t})}function Q(t,e){return Object(r["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function q(t){return Object(r["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function A(t){return Object(r["a"])({url:"merchant/store_staff",method:"get",params:t})}function K(){return Object(r["a"])({url:"merchant/store_staff/create",method:"get"})}function V(t){return Object(r["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function X(t,e){return Object(r["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function Y(t){return Object(r["a"])({url:"merchant/verify_order",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function tt(){return Object(r["a"])({url:"merchant/store_list",method:"get"})}function et(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}}}]);