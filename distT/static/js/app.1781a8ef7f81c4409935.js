webpackJsonp([47],{134:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"d",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"b",function(){return a}),e.d(n,"e",function(){return r}),e.d(n,"f",function(){return c});var o="USERINFO",i="USER_TOKEN",u="USERPHOTO_SET",a="USERPHOTO_POST",r="USER_NEW_MESSAGE",c="SWIPER_INFO"},181:function(t,n,e){"use strict";var o=e(238),i=e.n(o),u=e(51),a=e(476),r=e(478),c=(e.n(r),e(86)),s=e(227),l=e(221),d=e(215),h=e(218),f=e(219),m=e(220),p=e(222),w=e(223),v=e(224),g=e(225);u.default.use(a.a);var b=new a.a({mode:"hash",routes:[d.a,f.a,h.a,m.a,l.a].concat(i()(s.a),[p.a,w.a,v.a,g.a])});e.i(r.sync)(c.a,b),n.a=b},189:function(t,n,e){function o(t){e(463)}var i=e(57)(e(232),e(475),o,null,null);t.exports=i.exports},193:function(t,n,e){"use strict";var o=e(128),i=e.n(o),u=e(51),a=e(197),r=e.n(a),c=e(467),s=e.n(c);r.a.defaults.timeout=1e4,r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",r.a.defaults.baseURL="https://www.guinaben.com/teacher/",r.a.interceptors.request.use(function(t){return"post"===t.method&&(t.data=s.a.stringify(t.data,{arrayFormat:"brackets"})),t}),r.a.interceptors.response.use(function(t){return 401===t.data.code?(localStorage.removeItem("token"),u.default.$vux.toast.show({text:t.data.msg,type:"warn",time:500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(t){window.location.href="/login"}},500),i.a.reject(t)):200!==t.data.code?(u.default.$vux.toast.show({text:t.data.msg,type:"text",time:1e3,position:"bottom"}),i.a.reject(t)):t},function(t){return u.default.$vux.toast.show({text:"网络异常",type:"text",time:1e3,position:"bottom"}),i.a.reject(t)}),n.a=r.a},195:function(t,n,e){function o(t){e(462)}var i=e(57)(e(228),e(474),o,null,null);t.exports=i.exports},215:function(t,n,e){"use strict";n.a={path:"/about",component:function(t){return e.e(44).then(function(){return t(e(487))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(17).then(function(){return t(e(486))}.bind(null,e)).catch(e.oe)}},{path:"my",component:function(t){return e.e(31).then(function(){return t(e(488))}.bind(null,e)).catch(e.oe)}},{path:"advice",component:function(t){return e.e(8).then(function(){return t(e(484))}.bind(null,e)).catch(e.oe)}},{path:"adviceHistory",component:function(t){return e.e(37).then(function(){return t(e(485))}.bind(null,e)).catch(e.oe)}}]}},216:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"getUserInfo",function(){return l}),e.d(n,"setUserInfo",function(){return d}),e.d(n,"getToken",function(){return h}),e.d(n,"getUserNews",function(){return f}),e.d(n,"setHeadImg",function(){return m}),e.d(n,"uploadHeadImg",function(){return p}),e.d(n,"getSwiperInfo",function(){return w}),e.d(n,"swiperInfoClear",function(){return v});var o=e(190),i=e.n(o),u=e(128),a=e.n(u),r=e(51),c=e(193),s=e(134),l=function(t){var n=t.rootState,o=t.commit;return r.default.$vux.loading.show({text:"请稍候"}),new a.a(function(t,i){e.i(c.a)({method:"get",url:"user",params:{token:n.common.user.token}}).then(function(n){o(s.a,n.data.data),t(n),r.default.$vux.loading.hide()}).catch(function(){r.default.$vux.loading.hide()})})},d=function(t,n){var o=t.rootState;t.commit,t.dispatch;return r.default.$vux.loading.show({text:"请稍候"}),new a.a(function(t,u){e.i(c.a)({method:"post",url:"user/update",data:i()({},n,{token:o.common.user.token})}).then(function(n){r.default.$vux.loading.hide(),t(n)}).catch(function(){r.default.$vux.loading.hide()})})},h=function(t,n){var o=t.commit;return r.default.$vux.loading.show({text:"请稍候"}),new a.a(function(t,u){e.i(c.a)({method:"get",url:"user/token",params:i()({},n)}).then(function(n){o("USER_TOKEN",n.data.token),r.default.$vux.loading.hide(),t(n)}).catch(function(t){r.default.$vux.loading.hide(),u(t)})})},f=function(t){var n=t.rootState,o=t.commit;return new a.a(function(t,i){e.i(c.a)({method:"get",url:"message/new",params:{token:n.common.user.token}}).then(function(n){o(s.e,n.data.data),t(n)})})},m=function(t,n){(0,t.commit)(s.c,n)},p=function(t,n){var o=t.rootState,i=t.commit,u=t.dispatch;return r.default.$vux.loading.show({text:"请稍候"}),new a.a(function(t,a){e.i(c.a)({method:"post",url:"user/headImg",data:{img:n.img,token:o.common.user.token}}).then(function(n){i(s.b,n.data.data),u("getUserInfo"),r.default.$vux.loading.hide(),t(n)}).catch(function(t){r.default.$vux.loading.hide(),a(t)})})},w=function(t){var n=t.rootState,o=t.commit;return new a.a(function(t,i){e.i(c.a)({method:"get",url:"swiper",params:{id:n.route.params.id}}).then(function(n){o(s.f,n.data.data),t(n)})})},v=function(t){(0,t.commit)(s.f,{title:"",article:""})}},217:function(t,n,e){"use strict";var o,i=e(194),u=e.n(i),a=e(134),r=e(216),c={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{headImg:"",bufferImg:"",name:"",school:"",subjectId:"",sex:"",mobile:"",classes:[],swiper:[{}],token:localStorage.getItem("token")}},s={Path:function(t,n,e){return e.route.path},Query:function(t,n,e){return e.route.query},Params:function(t,n,e){return e.route.params},Route:function(t,n,e){return e.route},User:function(t){return t.user},News:function(t){return t.news},SwiperInfo:function(t){return t.article},System:function(t){return t.system}},l=(o={},u()(o,a.a,function(t,n){t.user.headImg=n.headImg,t.user.name=n.name,t.user.subjectId=n.subjectId,t.user.mobile=n.mobile,t.user.school=n.school,t.user.sex=n.sex,t.user.swiper=n.swiper,t.user.classes=n.classes}),u()(o,a.b,function(t,n){t.user.headImg=n.headImg}),u()(o,a.c,function(t,n){t.user.bufferImg=n}),u()(o,a.d,function(t,n){t.user.token=n,localStorage.setItem("token",n)}),u()(o,a.e,function(t,n){t.news.classes=n.classes,t.news.correct=n.correct,t.news.system=n.system}),u()(o,a.f,function(t,n){t.article.title=n.title,t.article.content=n.content}),o);n.a={state:c,getters:s,mutations:l,actions:r}},218:function(t,n,e){"use strict";n.a={path:"/correct/:subjectId/:id",name:"correct",component:function(t){return e.e(14).then(function(){return t(e(489))}.bind(null,e)).catch(e.oe)}}},219:function(t,n,e){"use strict";n.a={path:"/error",component:function(t){return e.e(43).then(function(){return t(e(491))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"error_classmate",component:function(t){return e.e(11).then(function(){return t(e(490))}.bind(null,e)).catch(e.oe)}},{path:"list/:name/:id",name:"error",component:function(t){return e.e(0).then(function(){return t(e(492))}.bind(null,e)).catch(e.oe)}}]}},220:function(t,n,e){"use strict";n.a={path:"/example/:subjectId/:id",name:"example",component:function(t){return e.e(18).then(function(){return t(e(493))}.bind(null,e)).catch(e.oe)}}},221:function(t,n,e){"use strict";n.a={path:"/login",component:function(t){return e.e(41).then(function(){return t(e(496))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(16).then(function(){return t(e(497))}.bind(null,e)).catch(e.oe)}},{path:"/forget",component:function(t){return e.e(6).then(function(){return t(e(494))}.bind(null,e)).catch(e.oe)}},{path:"/register",component:function(t){return e.e(5).then(function(){return t(e(498))}.bind(null,e)).catch(e.oe)}},{path:"/info",component:function(t){return e.e(2).then(function(){return t(e(495))}.bind(null,e)).catch(e.oe)}},{path:"/resetPassword",component:function(t){return e.e(4).then(function(){return t(e(499))}.bind(null,e)).catch(e.oe)}},{path:"/setPassword",component:function(t){return e.e(3).then(function(){return t(e(500))}.bind(null,e)).catch(e.oe)}}]}},222:function(t,n,e){"use strict";n.a={path:"/message",component:function(t){return e.e(40).then(function(){return t(e(504))}.bind(null,e)).catch(e.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return e.e(27).then(function(){return t(e(503))}.bind(null,e)).catch(e.oe)}},{path:"correct",component:function(t){return e.e(35).then(function(){return t(e(502))}.bind(null,e)).catch(e.oe)}},{path:"system",component:function(t){return e.e(34).then(function(){return t(e(505))}.bind(null,e)).catch(e.oe)}},{path:"class",component:function(t){return e.e(36).then(function(){return t(e(501))}.bind(null,e)).catch(e.oe)}}]}},223:function(t,n,e){"use strict";n.a={path:"/class",component:function(t){return e.e(39).then(function(){return t(e(509))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"class",component:function(t){return e.e(26).then(function(){return t(e(508))}.bind(null,e)).catch(e.oe)}},{path:"add",name:"class_add",component:function(t){return e.e(12).then(function(){return t(e(506))}.bind(null,e)).catch(e.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(t){return e.e(10).then(function(){return t(e(507))}.bind(null,e)).catch(e.oe)}},{path:"update/:code/:name",name:"class_update",component:function(t){return e.e(25).then(function(){return t(e(510))}.bind(null,e)).catch(e.oe)}},{path:"update/name/:code/:name",name:"class_update_name",component:function(t){return e.e(9).then(function(){return t(e(511))}.bind(null,e)).catch(e.oe)}}]}},224:function(t,n,e){"use strict";n.a={path:"/settings",component:function(t){return e.e(45).then(function(){return t(e(514))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"settings",component:function(t){return e.e(24).then(function(){return t(e(512))}.bind(null,e)).catch(e.oe)}},{path:"info",name:"settings_info",component:function(t){return e.e(23).then(function(){return t(e(513))}.bind(null,e)).catch(e.oe)}},{path:"update",name:"settings_update",component:function(t){return e.e(1).then(function(){return t(e(517))}.bind(null,e)).catch(e.oe)}},{path:"photo",name:"settings_photo",component:function(t){return e.e(38).then(function(){return t(e(515))}.bind(null,e)).catch(e.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(t){return e.e(13).then(function(){return t(e(516))}.bind(null,e)).catch(e.oe)}}]}},225:function(t,n,e){"use strict";n.a={path:"/workbook",component:function(t){return e.e(42).then(function(){return t(e(524))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"workbook",component:function(t){return e.e(7).then(function(){return t(e(523))}.bind(null,e)).catch(e.oe)}},{path:"chapter/:workbookId",name:"workbook_chapter",component:function(t){return e.e(19).then(function(){return t(e(518))}.bind(null,e)).catch(e.oe)}},{path:"exercise",name:"workbook_exercise",component:function(t){return e.e(30).then(function(){return t(e(520))}.bind(null,e)).catch(e.oe)},children:[{path:"number/:workbookId/:chapterId/",name:"workbook_exercise_number",component:function(t){return e.e(29).then(function(){return t(e(521))}.bind(null,e)).catch(e.oe)}},{path:"photo/:workbookId/:chapterId/",name:"workbook_exercise_photo",component:function(t){return e.e(21).then(function(){return t(e(522))}.bind(null,e)).catch(e.oe)}},{path:"error/:workbookId/:chapterId/:wbeid/",name:"workbook_exercise_error",component:function(t){return e.e(22).then(function(){return t(e(519))}.bind(null,e)).catch(e.oe)}}]}]}},226:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(51),i=e(186),u=(e.n(i),e(86)),a=e(187),r=e.n(a),c=e(181),s=e(188),l=e.n(s),d=e(184),h=e(183),f=e(182),m=e(185),p=e.n(m),w=e(189),v=e.n(w);o.default.use(d.a),o.default.use(l.a,{attempt:3}),o.default.use(h.a),o.default.use(f.a),r.a.attach(document.body),o.default.config.productionTip=!1,o.default.filter("ymd",function(t){return p()(new Date(Number(t+"000")),"YYYY-MM-DD")}),document.addEventListener("plusready",function(){var t=null;plus.navigator.setStatusBarBackground("#4BB7AA"),plus.key.addEventListener("backbutton",function(){"/index"===u.a.state.route.path||"/bag"===u.a.state.route.path||"/login"===u.a.state.route.path||"/user"===u.a.state.route.path?t?(new Date).getTime()-t<1e3&&plus.runtime.quit():(t=(new Date).getTime(),o.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1e3,position:"bottom"}),setTimeout(function(){t=null},1e3)):history.back()},!1)});var g=new o.default({router:c.a,store:u.a,render:function(t){return t(v.a)}}).$mount("#app-box");n.default=g},227:function(t,n,e){"use strict";n.a=[{path:"/",component:function(t){return e.e(28).then(function(){return t(e(528))}.bind(null,e)).catch(e.oe)},redirect:function(t){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(t){return e.e(32).then(function(){return t(e(527))}.bind(null,e)).catch(e.oe)}},{path:"bag",name:"bag",component:function(t){return e.e(15).then(function(){return t(e(526))}.bind(null,e)).catch(e.oe)}},{path:"user",name:"user",component:function(t){return e.e(20).then(function(){return t(e(529))}.bind(null,e)).catch(e.oe)}}]},{path:"/article/:id",component:function(t){return e.e(33).then(function(){return t(e(525))}.bind(null,e)).catch(e.oe)}}]},228:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(481),i=e.n(o);n.default={components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},content:String},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}},data:function(){return{showValue:!1}},methods:{_onConfirm:function(){this.showValue=!1,this.$emit("on-confirm")},_onCancel:function(){this.showValue=!1,this.$emit("on-cancel")}}}},229:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},230:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(233);n.default={mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},231:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0}},created:function(){void 0!==this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},232:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},459:function(t,n){},460:function(t,n){},461:function(t,n){},462:function(t,n){},463:function(t,n){},471:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},472:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"vux-mask"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},473:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(n){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog",style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},474:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur},on:{"on-hide":function(n){t.$emit("on-hide")},"on-show":function(n){t.$emit("on-show")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},475:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}},479:function(t,n,e){function o(t){e(460)}var i=e(57)(e(229),e(472),o,null,null);t.exports=i.exports},480:function(t,n,e){function o(t){e(459)}var i=e(57)(e(230),e(471),o,null,null);t.exports=i.exports},481:function(t,n,e){function o(t){e(461)}var i=e(57)(e(231),e(473),o,null,null);t.exports=i.exports},86:function(t,n,e){"use strict";var o=e(51),i=e(192),u=e(217);o.default.use(i.c),n.a=new i.c.Store({modules:{common:u.a}})}},[226]);