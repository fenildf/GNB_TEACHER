webpackJsonp([10],{"0NJ/":function(t,e,n){var i=n("NnbR");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("64c9cd34",i,!0)},FxCO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),o=n("ABCa"),r=n("D8a4"),a=n("1DHf"),h=n("rHil"),c=n("1sNz"),l=n("fBcm"),u=n("b+jt"),d=n("NYxO"),p={name:"bag",components:{XHeader:o.a,Badge:r.a,Cell:a.a,Group:h.a,ViewBox:c.a,Swiper:l.a,SwiperItem:u.a},computed:s()({},Object(d.mapGetters)(["User","News"]),{list:function(){return this.User.swiper.map(function(t,e){return{url:"/article/"+t.id,img:t.img+"?imageMogr2/auto-orient/thumbnail/x140/format/jpg/interlace/1/blur/1x0/quality/100|imageslim"}})}}),methods:s()({},Object(d.mapActions)(["getUserNews"])),beforeRouteEnter:function(t,e,n){n(function(t){t.getUserNews()})}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bag"},[n("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{showBack:!1}},slot:"header"},[t._v("书包")]),t._v(" "),n("swiper",{attrs:{auto:"",height:"140px",loop:!0,interval:5e3}},t._l(t.list,function(t,e){return n("swiper-item",{key:e},[n("router-link",{attrs:{to:{path:""+t.url}}},[n("img",{staticStyle:{width:"100%",height:"140px"},attrs:{src:t.img}})])],1)})),t._v(" "),n("group",{attrs:{gutter:"0"}},[n("cell",{attrs:{title:"我的班级",link:"class"}},[n("i",{staticClass:"icon iconfont icon-hat",staticStyle:{color:"#ABC97C"},attrs:{slot:"icon"},slot:"icon"}),t._v(" "),t.News.classes?[n("badge",{staticStyle:{position:"relative",top:"-2px"},attrs:{text:"新通知"}})]:t._e()],2),t._v(" "),n("cell",{attrs:{title:"我的下载",link:"myDownload"}},[n("i",{staticClass:"icon iconfont icon-download",staticStyle:{color:"#794BB8"},attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),n("cell",{attrs:{title:"我的作业",link:"homework"}},[n("i",{staticClass:"icon iconfont icon-download",staticStyle:{color:"#794BB8"},attrs:{slot:"icon"},slot:"icon"})])],1)],1)},f=[],m={render:v,staticRenderFns:f},_=m,g=n("VU/8"),x=g(p,_,!1,null,null,null);e.default=x.exports},NnbR:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #4cc0be;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n",""])},"b+jt":function(t,e,n){"use strict";var i={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},o=[],r={render:s,staticRenderFns:o},a=r,h=n("VU/8"),c=h(i,a,!1,null,null,null);e.a=c.exports},fBcm:function(t,e,n){"use strict";function i(t){n("0NJ/")}var s=n("mvHQ"),o=n.n(s),r=n("Zrlr"),a=n.n(r),h=n("wxAW"),c=n.n(h),l=n("BEQ0"),u=n.n(l),d=function(t){return Array.prototype.slice.call(t)},p=function(){function t(e){if(a()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=u()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return c()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){var e=this;if(t>0){var n=e._position.splice(0,1);e._position.push(n[0])}else if(t<0){var i=e._position.pop();e._position.unshift(i)}}},{key:"_setOffset",value:function(){var t=this,e=t._position.indexOf(t._current);t._offset=[],d(t.$items).forEach(function(n,i){t._offset.push((i-e)*t._distance)})}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var e="none"===t?"none":t+"ms";d(this.$items).forEach(function(t,n){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var e=this;t=t||0,d(e.$items).forEach(function(n,i){var s=e._offset[i]+t,o="translate3d("+s+"px, 0, 0)";"vertical"===e._options.direction&&(o="translate3d(0, "+s+"px, 0)"),n.style.webkitTransform=o,n.style.transform=o})}},{key:"_bind",value:function(){var t=this,e=this;e.touchstartHandler=function(t){e.stop(),e._start.x=t.changedTouches[0].pageX,e._start.y=t.changedTouches[0].pageY,e._setTransition("none")},e.touchmoveHandler=function(n){e._move.x=n.changedTouches[0].pageX,e._move.y=n.changedTouches[0].pageY;var i=e._move.x-e._start.x,s=e._move.y-e._start.y,o=s,r=Math.abs(i)>Math.abs(s);"horizontal"===e._options.direction&&r&&(o=i),t._options.loop||t._current!==t.count-1&&0!==t._current||(o/=3),(e._options.minMovingDistance&&Math.abs(o)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&r&&e._setTransform(o),r&&n.preventDefault()},e.touchendHandler=function(t){e._end.x=t.changedTouches[0].pageX,e._end.y=t.changedTouches[0].pageY;var n=e._end.y-e._start.y;"horizontal"===e._options.direction&&(n=e._end.x-e._start.x),0!==(n=e.getDistance(n))&&e._options.minMovingDistance&&Math.abs(n)<e._options.minMovingDistance||(n>e._options.threshold?e.move(-1):n<-e._options.threshold?e.move(1):e.move(0),e._loopRender())},e.transitionEndHandler=function(t){e._activate(e._current);var n=e._eventHandlers.swiped;n&&n.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),t.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(n,i){n.classList.remove(e),t===Number(n.dataset.index)&&n.classList.add(e)})}},{key:"go",value:function(t){var e=this;return e.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&d(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),t=this.$container.querySelector(this._options.item+"-clone"),t&&this.$container.removeChild(t)}}}]),t}(),v=p,f=n("0FxO"),m={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(f.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(o()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new v({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,n){t.current=n%t.length,t.index=n%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-slider"},[n("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,i){return n("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(n){t.clickListItem(e)}}},[n("a",{attrs:{href:"javascript:"}},[n("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?n("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,i){return t.listTwoLoopItem.length>0?n("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":i},on:{click:function(n){t.clickListItem(e)}}},[n("a",{attrs:{href:"javascript:"}},[n("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?n("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return n("a",{attrs:{href:"javascript:"}},[n("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},g=[],x={render:_,staticRenderFns:g},w=x,y=n("VU/8"),b=i,k=y(m,w,!1,b,null,null);e.a=k.exports}});