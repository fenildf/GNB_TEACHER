webpackJsonp([64],{ygZh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),s=a("ABCa"),o=a("jOlP"),l=a("rHil"),r=a("1DHf"),d=a("1sNz"),c=a("NYxO"),p={name:"rask",components:{XHeader:s.a,Spinner:o.a,Group:l.a,Cell:r.a,ViewBox:d.a},computed:n()({},Object(c.mapGetters)(["Points"])),data:function(){return{loading:!0}},methods:n()({},Object(c.mapActions)(["getPointsRask","clearPointsList"]),{_getData:function(){var t=this;this.loading=!0,this.getPointsRask().then(function(e){t.loading=!1}).catch(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,a){a(function(t){t.clearPointsList(),t._getData()})}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view-box",{attrs:{"body-padding-top":"46px"}},[a("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"排行榜"}},slot:"header"}),t._v(" "),a("div",[!t.loading&&t.Points.rask?[a("group",{attrs:{gutter:0}},[t._l(t.Points.rask,function(e,i){return[i<3?a("cell",{key:i,attrs:{title:e.name,"inline-desc":e.school}},[a("p",{attrs:{slot:"icon"},slot:"icon"},[a("span",{staticStyle:{display:"inline-block","font-size":"30px",padding:"0 .5rem",color:"#ff5722",float:"left","font-weight":"bold"}},[t._v(t._s(i+1))]),t._v(" "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headImg,expression:"item.headImg"}],staticStyle:{display:"inline-block",margin:"0 10px","border-radius":"50%",background:"#ddd"},attrs:{width:"50",height:"50"}})]),t._v(" "),a("div",{staticStyle:{color:"#3a9392","font-size":"23px"},attrs:{slot:"value"},slot:"value"},[t._v("\n              "+t._s(e.points)+"\n            ")])]):a("cell",{key:i,attrs:{title:e.name,"inline-desc":e.school}},[a("p",{attrs:{slot:"icon"},slot:"icon"},[a("span",{staticStyle:{display:"inline-block","font-size":"20px",padding:"0 .35rem 0 0",float:"left",width:"30px","text-align":"center"}},[t._v(t._s(i+1))]),t._v(" "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headImg,expression:"item.headImg"}],staticStyle:{display:"block",margin:"0 10px","border-radius":"50%",background:"#ddd"},attrs:{width:"40",height:"40"}})]),t._v(" "),a("div",{staticStyle:{color:"#4cc0be","font-size":"18px"},attrs:{slot:"value"},slot:"value"},[t._v("\n              "+t._s(e.points)+"\n            ")])])]})],2)]:t._e(),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[t.loading?a("spinner",{attrs:{type:"dots"}}):t._e()],1)],2)],1)},g=[],v={render:u,staticRenderFns:g},f=v,h=a("VU/8"),m=h(p,f,!1,null,null,null);e.default=m.exports}});