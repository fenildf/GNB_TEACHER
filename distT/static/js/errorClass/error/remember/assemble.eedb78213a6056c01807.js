webpackJsonp([59],{"iqg/":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Dd8w"),s=o.n(r),a=o("1sNz"),i=o("ABCa"),n=o("rHil"),c=o("dQSc"),l=o("1DHf"),d=o("jOlP"),h=o("YxJB"),m=o("3Lt7"),b=o("UIMx"),f=o("dgEa"),u=o("2FOq"),p=o("63CM"),w=o.n(p),v=o("NYxO"),g=o("xJtg"),x={name:"rememberAssemble",components:{ViewBox:a.a,XHeader:i.a,Group:n.a,Card:c.a,Cell:l.a,Spinner:d.a,Flexbox:h.a,FlexboxItem:m.a,Tabbar:b.a,TabbarItem:f.a,Previewer:u.a,Share:g.a},computed:s()({},Object(v.mapGetters)(["ErrorclassRemember"])),data:function(){return{loading:!0,error:!1,showAction:!1,share:{content:"试卷分享",title:"我的记错题组卷",href:""},list:[{w:0,h:0,src:""}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},directives:{TransferDom:w.a},methods:s()({},Object(v.mapActions)(["getStatisticsRememberAssemble","clearStatisticsDownload","getStatisticsAssemblUrl","clearStatisticsAssemble"]),{_getData:function(){var t=this;this.clearStatisticsDownload({type:"remember"}),this.loading=!0,this.getStatisticsRememberAssemble().then(function(){t.error=!1,t.loading=!1}).catch(function(e){t.error=!0,t.loading=!1})},show:function(t){var e=this;this.list[0].w=t.width,this.list[0].h=t.height,this.list[0].src=t.url,this.$nextTick(function(){e.$refs.previewer.show(0)})},_shareSuccess:function(){this._getData(),this.clearStatisticsAssemble({type:"remember"}),this.$router.go(-1)},_download:function(){var t=this;this.getStatisticsAssemblUrl({type:"remember"}).then(function(e){t.share.href=e.data.data.url,t.showAction=!0})}}),beforeRouteEnter:function(t,e,o){o(function(t){t._getData()})},beforeRouteLeave:function(t,e,o){this.showAction&&(this.showAction=!1),o()}},_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{attrs:{"body-padding-top":"46px","body-padding-bottom":"40px"}},[o("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[o("x-header",{attrs:{"left-options":{backText:"记错题"}}})],1),t._v(" "),t._l(t.ErrorclassRemember.download,function(e,r){return o("card",{key:r},[o("div",{staticClass:"weui-panel__hd",attrs:{slot:"header"},slot:"header"},[o("flexbox",[o("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:8}},[t._v(t._s(e.workbookName))]),t._v(" "),o("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v(t._s(t._f("ymd")(e.time)))])],1)],1),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[o("div",{on:{click:function(o){t.show(e.photo)}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.photo.url+"-errorList",expression:"error.photo.url+'-errorList'"}]})])])])}),t._v(" "),o("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[t.loading?o("spinner",{attrs:{type:"lines"}}):0===t.ErrorclassRemember.download.length?o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("您还未有组卷")]):t.error?o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:function(e){t._getData()}}},[t._v("出错了点我重新加载")]):t._e()],1),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options}})],1),t._v(" "),o("share",{attrs:{change:t.showAction,showAction:t.showAction,content:t.share.content,title:t.share.title,href:t.share.href},on:{"update:change":function(e){t.showAction=e},"on-share-success":function(e){t._shareSuccess()}}}),t._v(" "),o("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.ErrorclassRemember.download&&t.ErrorclassRemember.download.length,expression:"ErrorclassRemember.download && ErrorclassRemember.download.length"}],staticStyle:{"background-color":"#4cc0be",color:"#fff"},attrs:{slot:"bottom"},slot:"bottom"},[o("flexbox-item",{staticStyle:{"font-size":".8rem","text-align":"center",padding:".25rem 0"},attrs:{span:12},nativeOn:{click:function(e){t._download()}}},[o("i",{staticClass:"icon iconfont icon-download"}),t._v("下载")])],1)],2)},y=[],S={render:_,staticRenderFns:y},A=S,R=o("VU/8"),E=R(x,A,!1,null,null,null);e.default=E.exports}});