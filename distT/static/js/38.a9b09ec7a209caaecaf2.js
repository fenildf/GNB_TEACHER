webpackJsonp([38],{1054:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view-box",{ref:"about",attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{"left-options":{backText:"邀请好友"}},slot:"header"},[i("p",{on:{click:function(t){e.$router.push({name:"invite_list"})}},slot:"right"},[e._v("受邀好友")])]),e._v(" "),i("div",[i("flexbox",{staticClass:"tip",attrs:{justify:"center"}},[i("flexbox-item",{attrs:{span:11}},[i("h4",[e._v("提示:")]),e._v(" "),i("p",[e._v("邀请好友安装归纳本APP，并在本界面填写您的邀请码。"),i("span",{staticStyle:{color:"red"}},[e._v("您和您的好友都可获得100积分")])])])],1),e._v(" "),i("flexbox",{attrs:{justify:"center"}},[i("flexbox-item",{staticClass:"code",attrs:{span:10},nativeOn:{click:function(t){e.showAction=!0}}},[i("h4",[e._v("我的邀请码")]),e._v(" "),i("p",[e._v(e._s(e.Invite.inviteCode))]),e._v(" "),i("x-button",{attrs:{type:"primary",plain:"",mini:""},on:{click:function(t){e.showAction=!0}}},[e._v("分享邀请码")])],1)],1),e._v(" "),i("flexbox",{staticStyle:{"margin-top":".5rem"},attrs:{justify:"center"}},[i("flexbox-item",{attrs:{span:10}},[i("x-button",{attrs:{type:"default",disabled:e.Invite.isInvited},nativeOn:{click:function(t){e._input(t)}}},[e._v("输入好友邀请码")])],1)],1)],1),e._v(" "),i("share",{attrs:{change:e.showAction,showAction:e.showAction,content:e.share.content,title:e.share.title,href:e.share.href+e.Invite.inviteCode},on:{"update:change":function(t){e.showAction=t}}})],1)},staticRenderFns:[]}},516:function(e,t,i){i(980);var n=i(50)(i(875),i(1054),"data-v-7ffd0f8e",null);e.exports=n.exports},563:function(e,t,i){"use strict";function n(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":(0,r.default)(e))||t&&"string"==typeof e&&!/http/.test(e)?"object"===(void 0===e?"undefined":(0,r.default)(e))&&!0===e.replace?t.replace(e):"BACK"===e?t.go(-1):t.push(e):window.location.href=e}}function o(e,t){return!t||t._history||"string"!=typeof e||/http/.test(e)?e&&"object"!==(void 0===e?"undefined":(0,r.default)(e))?e:"javascript:void(0);":"#!"+e}Object.defineProperty(t,"__esModule",{value:!0});var a=i(68),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.go=n,t.getUrl=o},564:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},565:function(e,t,i){t=e.exports=i(487)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},566:function(e,t,i){var n=i(565);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(488)("61d8428e",n,!0)},567:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},568:function(e,t,i){i(566);var n=i(50)(i(564),i(567),null,null);e.exports=n.exports},569:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(192),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return(0,o.default)({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},570:function(e,t,i){t=e.exports=i(487)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},571:function(e,t,i){var n=i(570);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(488)("5a02d2fe",n,!0)},572:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},573:function(e,t,i){i(571);var n=i(50)(i(569),i(572),null,null);e.exports=n.exports},590:function(e,t,i){var n=i(50)(i(592),i(597),null,null);e.exports=n.exports},591:function(e,t,i){i(595);var n=i(50)(i(593),i(596),null,null);e.exports=n.exports},592:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];t.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={};if(e["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var t=0;t<n.length;t++)e[n[t]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:0}}}},593:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},594:function(e,t,i){t=e.exports=i(487)(!1),t.push([e.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{-webkit-box-flex:1;flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}",""])},595:function(e,t,i){var n=i(594);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(488)("9df12630",n,!0)},596:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},597:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},600:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(563);t.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:String},methods:{onClick:function(){!this.disabled&&(0,n.go)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},604:function(e,t,i){t=e.exports=i(487)(!1),t.push([e.i,'.weui-btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#fff;line-height:2.33333333;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden}.weui-btn:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.weui-btn_inline{display:inline-block}.weui-btn_default{color:#fff;background-color:#4cc0be}.weui-btn_default:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_default:not(.weui-btn_disabled):active{color:rgba(0,0,0,.6);background-color:rgba(75,183,156,.85)}.weui-btn_primary{background-color:#4cc0be}.weui-btn_primary:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_primary:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:rgba(75,183,156,.85)}.weui-btn_warn{background-color:#e64340}.weui-btn_warn:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_warn:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}.weui-btn_disabled{color:hsla(0,0%,100%,.6)}.weui-btn_disabled.weui-btn_default{color:rgba(0,0,0,.3);background-color:rgba(75,183,156,.85)}.weui-btn_disabled.weui-btn_primary{background-color:#9ed99d}.weui-btn_disabled.weui-btn_warn{background-color:#ec8b89}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:hsla(0,0%,100%,.6)}.weui-btn_loading.weui-btn_primary .weui-loading,.weui-btn_loading.weui-btn_warn .weui-loading{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPg==")}.weui-btn_loading.weui-btn_primary{background-color:rgba(75,183,156,.85)}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}.weui-btn_plain-primary{color:#1aad19;border:1px solid #1aad19}.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6);background-color:transparent}.weui-btn_plain-primary:after{border-width:0}.weui-btn_plain-default{color:#353535;border:1px solid #353535}.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6)}.weui-btn_plain-default:after{border-width:0}.weui-btn_plain-disabled{color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.2)}button.weui-btn,input.weui-btn{width:100%;border-width:0;outline:0;-webkit-appearance:none}button.weui-btn:focus,input.weui-btn:focus{outline:0}button.weui-btn_inline,button.weui-btn_mini,input.weui-btn_inline,input.weui-btn_mini{width:auto}button.weui-btn_plain-default,button.weui-btn_plain-primary,input.weui-btn_plain-default,input.weui-btn_plain-primary{border-width:1px;background-color:transparent}.weui-btn_mini{display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}.weui-btn+.weui-btn{margin-top:15px}.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline{margin-top:auto;margin-left:15px}.weui-btn-area{margin:1.25em 15px .3em}.weui-btn-area_inline{display:-webkit-box;display:-webkit-flex;display:flex}.weui-btn-area_inline .weui-btn{margin-top:auto;margin-right:15px;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-btn-area_inline .weui-btn:last-child{margin-right:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},606:function(e,t,i){var n=i(604);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(488)("0e6eb3ea",n,!0)},608:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"weui-btn",class:e.classes,attrs:{disabled:e.disabled,type:e.actionType},on:{click:e.onClick}},[e.showLoading?i("i",{staticClass:"weui-loading"}):e._e(),e._v(" "),e._t("default",[e._v(e._s(e.text))])],2)},staticRenderFns:[]}},610:function(e,t,i){i(606);var n=i(50)(i(600),i(608),null,null);e.exports=n.exports},624:function(e,t,i){"use strict";function n(e){return void 0===e?document.body:"string"==typeof e&&0===e.indexOf("?")?document.body:("string"==typeof e&&e.indexOf("?")>0&&(e=e.split("?")[0]),"body"===e||!0===e?document.body:e instanceof window.Node?e:document.querySelector(e))}function o(e){if(!e)return!1;if("string"==typeof e&&e.indexOf("?")>0)try{return JSON.parse(e.split("?")[1]).autoUpdate||!1}catch(e){return!1}return!1}Object.defineProperty(t,"__esModule",{value:!0});var a=i(192),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s={inserted:function(e,t,i){var o=t.value;e.className=e.className?e.className+" v-transfer-dom":"v-transfer-dom";var a=e.parentNode,r=document.createComment(""),s=!1;!1!==o&&(a.replaceChild(r,e),n(o).appendChild(e),s=!0),e.__transferDomData||(e.__transferDomData={parentNode:a,home:r,target:n(o),hasMovedOut:s})},componentUpdated:function(e,t){var i=t.value;if(o(i)){var a=e.__transferDomData,s=a.parentNode,c=a.home,l=a.hasMovedOut;!l&&i?(s.replaceChild(c,e),n(i).appendChild(e),e.__transferDomData=(0,r.default)({},e.__transferDomData,{hasMovedOut:!0,target:n(i)})):l&&!1===i?(s.replaceChild(e,c),e.__transferDomData=(0,r.default)({},e.__transferDomData,{hasMovedOut:!1,target:n(i)})):i&&n(i).appendChild(e)}},unbind:function(e,t){e.className=e.className.replace("v-transfer-dom",""),!0===e.__transferDomData.hasMovedOut&&e.__transferDomData.parentNode&&e.__transferDomData.parentNode.appendChild(e),e.__transferDomData=null}};t.default=s},647:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(194),a=n(o),r=i(68),s=n(r);t.default={name:"actionsheet",mounted:function(){var e=this;this.hasHeaderSlot=!!this.$slots.header,this.$nextTick(function(){e.$tabbar=document.querySelector(".weui-tabbar")})},props:{value:Boolean,showCancel:Boolean,cancelText:String,theme:{type:String,default:"ios"},menus:{type:[Object,Array],default:function(){return{}}},closeOnClickingMask:{type:Boolean,default:!0},closeOnClickingMenu:{type:Boolean,default:!0}},data:function(){return{hasHeaderSlot:!1,show:!1}},methods:{onMenuClick:function(e,t){"string"==typeof e?this.emitEvent("on-click-menu",t,e):"disabled"!==e.type&&"info"!==e.type&&(e.value?this.emitEvent("on-click-menu",e.value,e):(this.emitEvent("on-click-menu","",e),this.show=!1))},onClickingMask:function(){this.$emit("on-click-mask"),this.closeOnClickingMask&&(this.show=!1)},emitEvent:function(e,t,i){if("on-click-menu"===e&&!/.noop/.test(t)){var n=i;"object"===(void 0===n?"undefined":(0,s.default)(n))&&(n=JSON.parse((0,a.default)(n))),this.$emit(e,t,n),this.$emit(e+"-"+t),this.closeOnClickingMenu&&(this.show=!1)}},fixIos:function(e){this.$el.parentNode&&-1!==this.$el.parentNode.className.indexOf("v-transfer-dom")||this.$tabbar&&/iphone/i.test(navigator.userAgent)&&(this.$tabbar.style.zIndex=e)}},watch:{show:function(e){var t=this;this.$emit("input",e),e?this.fixIos(-1):setTimeout(function(){t.fixIos(100)},200)},value:{handler:function(e){this.show=e},immediate:!0}},beforeDestroy:function(){this.fixIos(100)}}},649:function(e,t,i){t=e.exports=i(487)(!1),t.push([e.i,'.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-actionsheet{position:fixed;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.weui-actionsheet__menu{background-color:#fff}.weui-actionsheet__action{margin-top:6px;background-color:#fff}.weui-actionsheet__cell{position:relative;padding:10px 0;text-align:center;font-size:18px}.weui-actionsheet__cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-actionsheet__cell:active{background-color:#ececec}.weui-actionsheet__cell:first-child:before{display:none}.weui-skin_android .weui-actionsheet{position:fixed;left:50%;top:50%;bottom:auto;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:274px;box-sizing:border-box;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:transparent;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.weui-skin_android .weui-actionsheet__action{display:none}.weui-skin_android .weui-actionsheet__menu{border-radius:2px;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-actionsheet__cell{padding:13px 24px;font-size:16px;line-height:1.4;text-align:left}.weui-skin_android .weui-actionsheet__cell:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.weui-skin_android .weui-actionsheet__cell:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.weui-actionsheet_toggle{-webkit-transform:translate(0);transform:translate(0)}.vux-actionsheet-menu-primary{color:#1aad19}.vux-actionsheet-menu-warn{color:#e64340}.vux-actionsheet-menu-default{color:#000}.vux-actionsheet-menu-disabled{color:#ccc}.vux-actionsheet-mask-enter,.vux-actionsheet-mask-leave-active,.vux-android-actionsheet-enter,.vux-android-actionsheet-leave-active{opacity:0}.vux-actionsheet-mask-enter-active,.vux-actionsheet-mask-leave-active,.vux-android-actionsheet-enter-active,.vux-android-actionsheet-leave-active{-webkit-transition:opacity .3s!important;transition:opacity .3s!important}',""])},651:function(e,t,i){var n=i(649);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(488)("2efcd28c",n,!0)},655:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-actionsheet"},[i("transition",{attrs:{name:"vux-actionsheet-mask"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-mask weui-mask_transparent",on:{click:e.onClickingMask}})]),e._v(" "),"android"===e.theme?i("div",{staticClass:"weui-skin_android"},[i("transition",{attrs:{name:"vux-android-actionsheet"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-actionsheet"},[i("div",{staticClass:"weui-actionsheet__menu"},e._l(e.menus,function(t,n){return i("div",{staticClass:"weui-actionsheet__cell",domProps:{innerHTML:e._s(t.label||t)},on:{click:function(i){e.onMenuClick(t,n)}}})}))])])],1):i("div",{staticClass:"weui-actionsheet",class:{"weui-actionsheet_toggle":e.show}},[i("div",{staticClass:"weui-actionsheet__menu"},[e.hasHeaderSlot?i("div",{staticClass:"weui-actionsheet__cell"},[e._t("header")],2):e._e(),e._v(" "),e._l(e.menus,function(t,n){return i("div",{staticClass:"weui-actionsheet__cell",class:"vux-actionsheet-menu-"+(t.type||"default"),domProps:{innerHTML:e._s(t.label||t)},on:{click:function(i){e.onMenuClick(t,n)}}})})],2),e._v(" "),e.showCancel?i("div",{staticClass:"weui-actionsheet__action",on:{click:function(t){e.emitEvent("on-click-menu","cancel")}}},[i("div",{staticClass:"weui-actionsheet__cell"},[e._v(e._s(e.cancelText||"取消"))])]):e._e()])],1)},staticRenderFns:[]}},656:function(e,t,i){i(651);var n=i(50)(i(647),i(655),null,null);e.exports=n.exports},683:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(656),a=n(o),r=i(624),s=n(r);t.default={name:"share",components:{Actionsheet:a.default},data:function(){return{show:"",shares:{},sharesList:[{id:"weixin",ex:"WXSceneSession"},{id:"weixin",ex:"WXSceneTimeline"},{id:"qq"}],menus:{qq:"分享给QQ好友",wechat:"分享给微信好友"}}},directives:{TransferDom:s.default},props:{showAction:{type:[Boolean]},href:{type:[String]},title:{type:[String]},content:{type:[String]}},watch:{show:function(e){this.$emit("update:change",e)},showAction:function(e){this.show=e}},methods:{_shareAction:function(e,t){var i=this,n=null;if(!e||!(n=this.shares[e]))return void console.log({text:"无效的分享服务！",type:"text",time:1e3,position:"bottom"});n.authenticated?(console.log({text:"已授权",type:"text",time:1e3,position:"bottom"}),this.shareMessage(n,t)):(console.log({text:"未授权",type:"text",time:1e3,position:"bottom"}),n.authorize(function(){i.shareMessage(n,t)},function(e){console.log({text:"认证授权失败",type:"text",time:1e3,position:"bottom"})}))},shareMessage:function(e,t){var i=this,n={href:this.href,title:this.title,content:this.content,thumbs:["http://img.guinaben.com/iconTeacher.png?imageView2/0/w/256/h/256/format/png/interlace/1/q/100|imageslim"],pictures:["http://img.guinaben.com/iconTeacher.png?imageView2/0/w/256/h/256/format/png/interlace/1/q/100|imageslim"],extra:{scene:t}};e.send(n,function(){i.onShareSuccess(),i.$vux.toast.show({text:"分享成功",type:"text",time:1e3,position:"bottom"})},function(e){i.$vux.toast.show({text:"您取消分享",type:"text",time:1e3,position:"bottom"})})},onShareSuccess:function(){this.$emit("on-share-success")},_menuClick:function(e){var t=void 0;t="qq"===e?2:"wechat"===e?0:1,this._shareAction(this.sharesList[t].id,this.sharesList[t].ex)}},created:function(){var e=this;try{plus.share.getServices(function(t){e.shares={};for(var i in t){var n=t[i];e.shares[n.id]=n}console.log({text:"获取分享服务列表成功",type:"text",time:1e3,position:"bottom"})},function(e){console.log({text:"获取分享服务列表失败："+e.message,type:"text",time:1e3,position:"bottom"})})}catch(e){console.log(e)}this.show=this.showAction}}},711:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("actionsheet",{attrs:{menus:e.menus},on:{"on-click-menu":e._menuClick,"on-share-success":function(t){e.onShareSuccess()}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},staticRenderFns:[]}},714:function(e,t,i){var n=i(50)(i(683),i(711),null,null);e.exports=n.exports},875:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(128),a=n(o),r=i(573),s=n(r),c=i(610),l=n(c),d=i(568),u=n(d),f=i(591),b=n(f),h=i(590),p=n(h),g=i(199),m=n(g),w=i(193),x=i(714),v=n(x);t.default={name:"index",components:{XHeader:s.default,XButton:l.default,ViewBox:u.default,Flexbox:b.default,FlexboxItem:p.default,Confirm:m.default,Share:v.default},computed:(0,a.default)({},(0,w.mapGetters)(["Invite"])),data:function(){return{showAction:!1,share:{content:"好东西，自然与朋友共分享",title:"替老师批改作业，帮学生归纳错题",href:"http://share.guinaben.com/#/invite?code="}}},methods:(0,a.default)({},(0,w.mapActions)(["getInvite","setInviteCode"]),{_input:function(){var e=this;this.$vux.confirm.prompt("请输入邀请码",{title:"输入好友邀请码",dialogTransition:"vux-fade",onConfirm:function(t){e.setInviteCode({code:t})}})}}),beforeRouteEnter:function(e,t,i){"user"===t.name||"points_earn"===t.name?i(function(e){e.getInvite()}):i()},beforeRouteLeave:function(e,t,i){this.showAction?(this.showAction=!1,i(!1)):i()}}},950:function(e,t,i){t=e.exports=i(487)(!1),t.push([e.i,".tip[data-v-7ffd0f8e]{padding:1rem 0;font-size:normal}.tip h4[data-v-7ffd0f8e]{font-size:.75rem;color:#4cc0be}.tip p[data-v-7ffd0f8e]{font-size:.8rem}.code[data-v-7ffd0f8e]{text-align:center;padding:1.5rem 0;line-height:2rem;background:#fff;box-sizing:border-box;margin:2rem 0;border:2px dashed #ccc}.weui-btn_disabled.weui-btn_default[data-v-7ffd0f8e]{color:#fff;background:#ccc}",""])},980:function(e,t,i){var n=i(950);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(488)("52077ed4",n,!0)}});