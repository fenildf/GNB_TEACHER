webpackJsonp([42],{1047:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[i("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},slot:"header"},[i("x-header",{attrs:{"left-options":{backText:"精选练习"}}},[i("div",{on:{click:function(t){e.$router.push({name:"download"})}},slot:"right"},[i("i",{staticClass:"icon iconfont icon-download_link"})])])],1),e._v(" "),i("div",[e._l(e.list,function(t,n){return i("card",{key:n},[i("div",{on:{click:function(i){e.$router.push({name:"example",params:{subjectId:t.subject_id,grade:t.grade,id:t.exercisesId,type:"lxexercises"}})}},slot:"content"},[i("div",{domProps:{innerHTML:e._s(t.stem)}}),e._v(" "),t.opt.hasOwnProperty("A")?i("div",e._l(t.opt,function(t,n){return i("div",{key:t,staticStyle:{"padding-top":"5px"}},[e._v(e._s(n)+"： "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(t)}})])})):e._e()]),e._v(" "),i("div",{slot:"footer"},[i("div",{staticClass:"weui-cell weui-cell_link"},[i("div",{staticClass:"weui-cell__bd"},[i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",{attrs:{span:3}},[e._v("难度: "+e._s(t.degree))]),e._v(" "),i("flexbox-item",{attrs:{span:7}},[e._v("时间: "+e._s(e._f("ymd")(t.time)))]),e._v(" "),i("flexbox-item",{staticStyle:{"text-align":"center"},attrs:{span:2},nativeOn:{click:function(i){e.setAssemble({id:t.exercisesId,index:n})}}},[t.isAssembly?i("span",{staticStyle:{color:"#ff5722"}},[e._v("已组卷")]):i("span",{staticStyle:{color:"#4cc0be"}},[e._v("组卷")])])],1)],1)])])])}),e._v(" "),i("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e.loading?i("spinner",{attrs:{type:"lines"}}):e._e(),e._v(" "),i("div",[e.loadingNoData?i("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[e._v("已经加载全部练习题~")]):e._e(),e._v(" "),e.loadingNoData||e.loading?e._e():i("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:e._getData}},[e._v("点我加载更多")])])],1)],2)])},staticRenderFns:[]}},494:function(e,t,i){var n=i(50)(i(842),i(1047),null,null);e.exports=n.exports},557:function(e,t,i){"use strict";function n(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":(0,a.default)(e))||t&&"string"==typeof e&&!/http/.test(e)?"object"===(void 0===e?"undefined":(0,a.default)(e))&&!0===e.replace?t.replace(e):"BACK"===e?t.go(-1):t.push(e):window.location.href=e}}function o(e,t){return!t||t._history||"string"!=typeof e||/http/.test(e)?e&&"object"!==(void 0===e?"undefined":(0,a.default)(e))?e:"javascript:void(0);":"#!"+e}Object.defineProperty(t,"__esModule",{value:!0});var r=i(68),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.go=n,t.getUrl=o},558:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},559:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},560:function(e,t,i){var n=i(559);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("61d8428e",n,!0)},561:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},562:function(e,t,i){i(560);var n=i(50)(i(558),i(561),null,null);e.exports=n.exports},563:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(192),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return(0,o.default)({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},564:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},565:function(e,t,i){var n=i(564);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("5a02d2fe",n,!0)},566:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},567:function(e,t,i){i(565);var n=i(50)(i(563),i(566),null,null);e.exports=n.exports},585:function(e,t,i){var n=i(50)(i(587),i(592),null,null);e.exports=n.exports},586:function(e,t,i){i(590);var n=i(50)(i(588),i(591),null,null);e.exports=n.exports},587:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];t.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={};if(e["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var t=0;t<n.length;t++)e[n[t]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:0}}}},588:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},589:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{-webkit-box-flex:1;flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}",""])},590:function(e,t,i){var n=i(589);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("9df12630",n,!0)},591:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},592:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},593:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(596),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];t.default={name:"spinner",mounted:function(){var e=this;this.$nextTick(function(){(0,o.default)(e.$el,e.type,e.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var e={},t=0;t<r.length;t++)e["vux-spinner-"+r[t]]=this.type===r[t];return e}}}},595:function(e,t,i){"use strict";for(var n=0,o=["webkit","moz"],r=0;r<o.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[o[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o[r]+"CancelAnimationFrame"]||window[o[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var i=(new Date).getTime(),o=Math.max(0,16-(i-n)),r=window.setTimeout(function(){e(i+o)},o);return n=i+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},596:function(e,t,i){"use strict";function n(e,t,i,r,a){var l,c,u,f=document.createElement(s[e]||e);for(l in t)if("[object Array]"===Object.prototype.toString.call(t[l]))for(c=0;c<t[l].length;c++)if(t[l][c].fn)for(u=0;u<t[l][c].t;u++)n(l,t[l][c].fn(u,r),f,r);else n(l,t[l][c],f,r);else o(f,l,t[l]);a&&"28px"!==a&&o(f,"style","width: "+a+"; height: "+a),i.appendChild(f)}function o(e,t,i){e.setAttribute(s[t]||t,i)}function r(e,t){var i=e.split(";"),n=i.slice(t),o=i.slice(0,i.length-n.length);return i=n.concat(o).reverse(),i.join(";")+";"+i[0]}function a(e,t){return(e/=t/2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var o,r;o=t;var a=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[u[o]]},a,o,i),e.innerHTML=a.innerHTML,function(){f[o]&&(r=f[o](e)())}(),e},i(595);var s={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},l={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},c={sw:4,lc:"round",line:[{fn:function(e,t){return{y1:"ios"===t?17:12,y2:"ios"===t?29:20,t:"translate(32,32) rotate("+(30*e+(e<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:"indefinite"}},t:1}]}},t:12}]},u={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:c,"ios-small":c,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:r("1;2;3;4;5;6;7;8",e),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".3;.3;.3;.4;.7;.85;.9;1",e),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[l]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".5;.6;.8;1;.8;.6;.5",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:r("4;5;6;5;4;3;3",e),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:"750ms",v:r("16;18;28;18;16",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:r("48;44;36;46;48",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("1;.8;.5;.4;1",e),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[l]}]}},f={android:function(e){function t(){if(!i.stop){var e=a(Date.now()-n,650),u=1,f=0,d=188-58*e,p=182-182*e;r%2&&(u=-1,f=-64,d=128- -58*e,p=182*e);var x=[0,-101,-90,-11,-180,79,-270,-191][r];o(c,"da",Math.max(Math.min(d,188),128)),o(c,"os",Math.max(Math.min(p,182),0)),o(c,"t","scale("+u+",1) translate("+f+",0) rotate("+x+",32,32)"),s+=4.1,s>359&&(s=0),o(l,"t","rotate("+s+",32,32)"),e>=1&&(r++,r>7&&(r=0),n=Date.now()),window.requestAnimationFrame(t)}}var i=this;this.stop=!1;var n,r=0,s=0,l=e.querySelector("g"),c=e.querySelector("circle");return function(){return n=Date.now(),t(),i}}}},597:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},599:function(e,t,i){var n=i(597);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("037558f0",n,!0)},601:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-spinner",class:e.className,style:e.styles})},staticRenderFns:[]}},603:function(e,t,i){i(599);var n=i(50)(i(593),i(601),null,null);e.exports=n.exports},630:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(557);t.default={name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&(0,n.go)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},631:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-panel .weui-cell:first-child:before{display:block}',""])},632:function(e,t,i){var n=i(631);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("4349ef72",n,!0)},633:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-panel weui-panel_access"},[e.header&&e.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:e._s(e.header.title)},on:{click:function(t){e.$emit("on-click-header")}}}):e._e(),e._v(" "),e._t("header"),e._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[e._t("content")],2)]),e._v(" "),i("div",{staticClass:"weui-panel__ft"},[e.footer&&e.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:e.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:e._s(e.footer.title)}})]):e._e()]),e._v(" "),e._t("footer")],2)},staticRenderFns:[]}},634:function(e,t,i){i(632);var n=i(50)(i(630),i(633),null,null);e.exports=n.exports},842:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(191),r=n(o),a=i(567),s=n(a),l=i(562),c=n(l),u=i(634),f=n(u),d=i(603),p=n(d),x=i(586),h=n(x),b=i(585),v=n(b),m=i(193);t.default={name:"choice",components:{XHeader:s.default,ViewBox:c.default,Card:f.default,Spinner:p.default,Flexbox:h.default,FlexboxItem:v.default},computed:(0,r.default)({},(0,m.mapGetters)(["Route","AssembleChoice"]),{list:function(){return this.AssembleChoice.list}}),data:function(){return{loading:!0,loadingNoData:!1}},methods:(0,r.default)({},(0,m.mapActions)(["getAssembleChoice","setAssembleChoiceScroll","setAssemble","clearAssembleChoice"]),{_getData:function(){var e=this;this.loading=!0,this.getAssembleChoice().then(function(t){t.data.data.list.length<10&&(e.loadingNoData=!0),e.loading=!1}).catch(function(){e.loading=!1})}}),beforeRouteEnter:function(e,t,i){i(function(e){"assemble_example"!==t.name&&"download"!==t.name||(e.loadingNoData=!1,e.clearAssembleChoice(),e._getData()),e.$refs.viewBox.scrollTo(e.AssembleChoice.scroll)})},beforeRouteLeave:function(e,t,i){this.setAssembleChoiceScroll(this.$refs.viewBox.getScrollTop()),i()}}}});