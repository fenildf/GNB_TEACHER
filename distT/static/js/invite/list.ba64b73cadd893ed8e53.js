webpackJsonp([84],{joMZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),l=i("ABCa"),o=i("jOlP"),s=i("rHil"),r=i("1DHf"),d=i("1sNz"),c=i("NYxO"),u={name:"list",components:{XHeader:l.a,Spinner:o.a,Group:s.a,Cell:r.a,ViewBox:d.a},computed:a()({},Object(c.mapGetters)(["Invite"])),data:function(){return{loading:!0}},methods:a()({},Object(c.mapActions)(["getInviteList","setInviteListClear"]),{_getData:function(){var t=this;this.loading=!0,this.getInviteList().then(function(e){t.loading=!1}).catch(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,i){i(function(t){t.setInviteListClear(),t._getData()})}},p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"受邀好友"}},slot:"header"}),t._v(" "),i("div",[!t.loading&&t.Invite.list.length?[i("group",{attrs:{title:"邀请列表"}},[t._l(t.Invite.list,function(e,n){return[i("cell",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headImg,expression:"item.headImg"}],staticStyle:{display:"block","margin-right":"5px","border-radius":"50%",background:"#ddd"},attrs:{slot:"icon",width:"30",height:"30"},slot:"icon"}),t._v(" "),i("div",{attrs:{slot:"after-title"},slot:"after-title"},[t._v(t._s(e.name))])])]})],2)]:t._e(),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[t.loading?i("spinner",{attrs:{type:"dots"}}):t._e(),t._v(" "),0!=t.Invite.list.length||t.loading?t._e():i("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4cc0be"}},[t._v("暂无邀请好友~")])],1)],2)],1)},v=[],g={render:p,staticRenderFns:v},f=g,h=i("VU/8"),_=h(u,f,!1,null,null,null);e.default=_.exports}});