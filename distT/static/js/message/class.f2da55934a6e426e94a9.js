webpackJsonp([78],{ya8Y:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Dd8w"),n=s.n(a),i=s("ABCa"),o=s("1sNz"),l=s("jOlP"),c=s("NYxO"),r={name:"class",components:{XHeader:i.a,ViewBox:o.a,Spinner:l.a},computed:n()({},Object(c.mapGetters)(["messageClassList"])),data:function(){return{loading:!0}},methods:n()({},Object(c.mapActions)(["getMessageClass","clearMessage"])),beforeRouteEnter:function(e,t,s){s(function(e){e.loading=!0,e.getMessageClass().then(function(){e.loading=!1}).catch(function(t){e.loading=!1})})},beforeRouteLeave:function(e,t,s){this.clearMessage(),s()}},d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view-box",{ref:"messageClass",attrs:{"body-padding-top":"46px"}},[s("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"班级通知"}},slot:"header"}),e._v(" "),e.loading?e._e():s("div",{staticClass:"messageSection"},e._l(e.messageClassList,function(t,a){return s("section",{key:a},[s("h3",[e._v(e._s(e._f("ymd")(t.time)))]),e._v(" "),s("article",[e._v(e._s(t.content))])])})),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[e.loading?s("spinner",{attrs:{type:"dots"}}):0==e.messageClassList.length?s("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4cc0be"}},[e._v("暂无班级消息~")]):e._e()],1)],1)},u=[],g={render:d,staticRenderFns:u},p=g,f=s("VU/8"),_=f(r,p,!1,null,null,null);t.default=_.exports}});