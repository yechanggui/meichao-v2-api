(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-070fd0a8"],{4553:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mt20 ml20"},[r("Input",{directives:[{name:"width",rawName:"v-width",value:"35%",expression:"'35%'"}],attrs:{placeholder:"请输入视频链接"},model:{value:t.videoLink,callback:function(e){t.videoLink=e},expression:"videoLink"}}),r("input",{ref:"refid",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.zh_uploadFile_change}}),r("Button",{staticClass:"ml10",attrs:{type:"primary",icon:"ios-cloud-upload-outline"},on:{click:t.zh_uploadFile}},[t._v(t._s(t.videoLink?"确认添加":"上传视频"))]),t.upload.videoIng?r("Progress",{attrs:{percent:t.progress,"stroke-width":5}}):t._e(),t.formValidate.video_link?r("div",{staticClass:"iview-video-style"},[r("video",{staticStyle:{width:"100%",height:"100%!important","border-radius":"10px"},attrs:{src:t.formValidate.video_link,controls:"controls"}},[t._v("\n        您的浏览器不支持 video 标签。\n      ")]),r("div",{staticClass:"mark"}),r("Icon",{staticClass:"iconv",attrs:{type:"ios-trash-outline"},on:{click:t.delVideo}})],1):t._e()],1),r("div",{staticClass:"mt50 ml20"},[r("Button",{attrs:{type:"primary"},on:{click:t.uploads}},[t._v("确认")])],1)])},o=[],c=r("c4c8"),u=(r("6bef"),{name:"vide11o",data:function(){return{upload:{videoIng:!1},progress:0,videoLink:"",formValidate:{video_link:""}}},methods:{delVideo:function(){var t=this;t.$set(t.formValidate,"video_link","")},zh_uploadFile:function(){this.videoLink?this.formValidate.video_link=this.videoLink:this.$refs.refid.click()},zh_uploadFile_change:function(t){var e=this,r=t.target.files[0].name.substr(t.target.files[0].name.indexOf("."));if(".mp4"!==r)return e.$Message.error("只能上传MP4文件");Object(c["o"])().then((function(r){e.$videoCloud.videoUpload({type:r.data.type,evfile:t,res:r,uploading:function(t,r){e.upload.videoIng=t,console.log(t,r)}}).then((function(t){e.formValidate.video_link=t.url,e.$Message.success("视频上传成功")})).catch((function(t){e.$Message.error(t)}))}))},uploads:function(){nowEditor.dialog.close(!0),nowEditor.editor.setContent("<video src='"+this.formValidate.video_link+"' controls='controls'></video>",!0)}}}),i=u,a=(r("f97e"),r("2877")),d=Object(a["a"])(i,n,o,!1,null,"b31ceaf2",null);e["default"]=d.exports},"6bef":function(t,e){(function(){if(window.frameElement.id){var t=window.parent,e=t.$EDITORUI[window.frameElement.id.replace(/_iframe$/,"")],r=e.editor,n=t.UE,o=n.dom.domUtils,c=n.utils,u=(n.browser,n.ajax,function(t){return document.getElementById(t)});window.nowEditor={editor:r,dialog:e},c.loadFile(document,{href:r.options.themePath+r.options.theme+"/dialogbase.css?cache="+Math.random(),tag:"link",type:"text/css",rel:"stylesheet"});var i=r.getLang(e.className.split("-")[2]);i&&o.on(window,"load",(function(){var t=r.options.langPath+r.options.lang+"/images/";for(var e in i["static"]){var n=u(e);if(n){var a=n.tagName,d=i["static"][e];switch(d.src&&(d=c.extend({},d,!1),d.src=t+d.src),d.style&&(d=c.extend({},d,!1),d.style=d.style.replace(/url\s*\(/g,"url("+t)),a.toLowerCase()){case"var":n.parentNode.replaceChild(document.createTextNode(d),n);break;case"select":for(var s,l=n.options,p=0;s=l[p];)s.innerHTML=d.options[p++];for(var f in d)"options"!=f&&n.setAttribute(f,d[f]);break;default:o.setAttributes(n,d)}}}}))}})()},"8a6e":function(t,e,r){},c4c8:function(t,e,r){"use strict";r.d(e,"h",(function(){return o})),r.d(e,"i",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"s",(function(){return i})),r.d(e,"t",(function(){return a})),r.d(e,"B",(function(){return d})),r.d(e,"q",(function(){return s})),r.d(e,"k",(function(){return l})),r.d(e,"r",(function(){return p})),r.d(e,"l",(function(){return f})),r.d(e,"m",(function(){return m})),r.d(e,"z",(function(){return h})),r.d(e,"b",(function(){return v})),r.d(e,"u",(function(){return g})),r.d(e,"y",(function(){return b})),r.d(e,"d",(function(){return O})),r.d(e,"e",(function(){return _})),r.d(e,"g",(function(){return w})),r.d(e,"x",(function(){return y})),r.d(e,"v",(function(){return j})),r.d(e,"w",(function(){return k})),r.d(e,"f",(function(){return x})),r.d(e,"n",(function(){return P})),r.d(e,"p",(function(){return T})),r.d(e,"o",(function(){return E})),r.d(e,"A",(function(){return C})),r.d(e,"c",(function(){return L})),r.d(e,"j",(function(){return V}));var n=r("b6bd");function o(){return Object(n["a"])({url:"product/product/type_header",method:"get"})}function c(t){return Object(n["a"])({url:"product/product",method:"get",params:t})}function u(t,e){return Object(n["a"])({url:"product/product/set_show/".concat(t,"/").concat(e),method:"put"})}function i(t){return Object(n["a"])({url:"product/product/product_show",method:"put",data:t})}function a(t){return Object(n["a"])({url:"product/product/product_unshow",method:"put",data:t})}function d(){return Object(n["a"])({url:"product/category/tree/1",method:"get"})}function s(t){return Object(n["a"])({url:"product/product/".concat(t),method:"get"})}function l(t){return Object(n["a"])({url:"product/product/".concat(t.id),method:"POST",data:t})}function p(t){return Object(n["a"])({url:"product/category",method:"get",params:t})}function f(){return Object(n["a"])({url:"product/category/create",method:"get"})}function m(t){return Object(n["a"])({url:"product/category/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"product/category/set_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function v(t){return Object(n["a"])({url:"product/product/list",method:"GET",params:t})}function g(t){return Object(n["a"])({url:"product/reply",method:"get",params:t})}function b(t,e){return Object(n["a"])({url:"product/reply/set_reply/".concat(e),method:"PUT",data:t})}function O(t){return Object(n["a"])({url:"product/copy",method:"POST",data:t})}function _(t){return Object(n["a"])({url:"product/crawl/save",method:"POST",data:t})}function w(t,e,r){return Object(n["a"])({url:"product/generate_attr/".concat(e,"/").concat(r),method:"POST",data:t})}function y(t){return Object(n["a"])({url:"product/product/rule",method:"GET",params:t})}function j(t,e){return Object(n["a"])({url:"product/product/rule/".concat(e),method:"POST",data:t})}function k(t){return Object(n["a"])({url:"product/product/rule/".concat(t),method:"get"})}function x(t){return Object(n["a"])({url:"product/reply/fictitious_reply/".concat(t),method:"get"})}function P(){return Object(n["a"])({url:"product/product/get_rule",method:"get"})}function T(){return Object(n["a"])({url:"product/product/get_template",method:"get"})}function E(){return Object(n["a"])({url:"product/product/get_temp_keys",method:"get"})}function C(t){return Object(n["a"])({url:"export/storeProduct",method:"get",params:t})}function L(t){return Object(n["a"])({url:"product/product/check_activity/".concat(t),method:"get"})}function V(){return Object(n["a"])({url:"user/user_label",method:"get"})}},f97e:function(t,e,r){"use strict";var n=r("8a6e"),o=r.n(n);o.a}}]);