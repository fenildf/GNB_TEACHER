webpackJsonp([21],{EYMz:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"\n.weui-btn + .weui-btn[data-v-7cfbeebe]{\r\n  margin-top:0;\n}\n.assembleCount[data-v-7cfbeebe]{\r\n  position: fixed;\r\n  background:#4cc0be;\r\n  color:#fff;\r\n  font-size: .9rem;\r\n  height: 3.5rem;\r\n  width: 3.5rem;\r\n  -webkit-box-shadow: 2px 2px 7px #4cc0be;\r\n          box-shadow: 2px 2px 7px #4cc0be;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding:.5rem .75rem;\r\n  border-radius: 50%;\r\n  bottom: 10%;\r\n  right: 5%;\r\n  text-align: center;\n}\n.checker-popup[data-v-7cfbeebe]{\r\n  background: #fff;\n}\n.check-item[data-v-7cfbeebe] {\r\n  background-color: #ddd;\r\n  color: #222;\r\n  font-size: 14px;\r\n  padding: 8px 0;\r\n  width:32%;\r\n  margin-right: 0px;\r\n  line-height: 18px;\r\n  text-align:center;\r\n  margin-bottom: 10px;\r\n  border-radius: 15px;\n}\n.check-item-selected[data-v-7cfbeebe] {\r\n  background-color: #4cc0be;\r\n  color: #fff;\n}\n.check-item-disabled[data-v-7cfbeebe] {\r\n  color: #999;\n}\r\n",""])},"YwU+":function(e,t,r){var i=r("EYMz");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("24715b08",i,!0)},c7ob:function(e,t,r){"use strict";function i(e){r("YwU+")}Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a=r("ABCa"),s=r("rHil"),c=r("dQSc"),l=r("1DHf"),d=r("jOlP"),b=r("YxJB"),p=r("3Lt7"),f=r("2sLL"),m=r("2FOq"),x=r("63CM"),v=r.n(x),u=r("NYxO"),g={name:"remember",components:{XHeader:a.a,Group:s.a,Card:c.a,Cell:l.a,Spinner:d.a,Flexbox:b.a,FlexboxItem:p.a,XButton:f.a,Previewer:m.a},computed:o()({},Object(u.mapGetters)(["ErrorclassRemember"])),data:function(){return{loading:!1,loadingNoData:!1,list:[{w:0,h:0,src:""}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},directives:{TransferDom:v.a},methods:o()({},Object(u.mapActions)(["getStatisticsRemember","setStatisticsRememberAssembleUpdate","setStatisticsScroll"]),{_getData:function(){var e=this;this.loading=!0,this.getStatisticsRemember().then(function(t){0===t.data.data.offset.length&&(e.loadingNoData=!0),e.loading=!1})},show:function(e){var t=this;this.list[0].w=e.width,this.list[0].h=e.height,this.list[0].src=e.url,this.$nextTick(function(){t.$refs.previewer.show(0)})}}),beforeRouteEnter:function(e,t,r){r(function(e){e.ErrorclassRemember.index.reset&&e._getData(),e.$parent.$refs.viewBoxBody.scrollTop=e.ErrorclassRemember.index.scroll})},beforeRouteLeave:function(e,t,r){this.setStatisticsScroll({type:"remember",height:this.$parent.$refs.viewBoxBody.scrollTop}),r()}},h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.ErrorclassRemember.index.list,function(t,i){return r("card",{key:i},[r("div",{staticClass:"weui-panel__hd",attrs:{slot:"header"},slot:"header"},[r("flexbox",[r("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:8}},[e._v(e._s(t.workbookName))]),e._v(" "),r("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v(e._s(e._f("ymd")(t.time)))])],1)],1),e._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[r("div",{on:{click:function(r){e.show(t.photo)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.photo.url+"-errorList",expression:"error.photo.url+'-errorList'"}]})])]),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"5px 15px"}},[r("div",{staticClass:"weui-cell__bd"},[r("flexbox",{attrs:{gutter:0}},[r("flexbox-item",{attrs:{span:4}},[e._v("\n              错误人数: "+e._s(t.errorCount)+"\n            ")]),e._v(" "),r("flexbox-item",{attrs:{span:4}},[e._v("\n              页码: "+e._s(t.page)+"\n            ")]),e._v(" "),r("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:4},nativeOn:{click:function(r){e.setStatisticsRememberAssembleUpdate({id:t.id,index:i})}}},[t.isAssembly?r("i",{staticClass:"icon iconfont icon-correct",staticStyle:{color:"#4cc0be","margin-right":"1rem"}}):r("i",{staticClass:"icon iconfont icon-icon073102",staticStyle:{color:"#4cc0be","margin-right":"1rem"}})])],1)],1)])])])}),e._v(" "),r("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e.loading?r("spinner",{attrs:{type:"lines"}}):e._e(),e._v(" "),r("div",[e.loadingNoData?r("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[e._v("已经加载全部错题~")]):e._e(),e._v(" "),e.loadingNoData||e.loading?e._e():r("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:e._getData}},[e._v("点我加载更多")])])],1),e._v(" "),r("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[r("previewer",{ref:"previewer",attrs:{list:e.list,options:e.options}})],1)],2)},_=[],w={render:h,staticRenderFns:_},y=w,k=r("VU/8"),S=i,C=k(g,y,!1,S,"data-v-7cfbeebe",null);t.default=C.exports}});