webpackJsonp([89],{"+oFv":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),a=n("ABCa"),c=n("pDNl"),s=n("rHil"),r=n("ALGc"),l=n("2sLL"),u=n("1sNz"),d=n("NYxO"),p={name:"advice",components:{XHeader:a.a,XInput:c.a,Group:s.a,XTextarea:r.a,XButton:l.a,ViewBox:u.a},data:function(){return{title:"",content:"",contact:""}},methods:i()({},Object(d.mapActions)(["updateAdvice"]),{_submit:function(){var t=this;this.title&&this.content&&this.contact?this.updateAdvice({title:this.title,content:this.content,contact:this.contact}).then(function(){setTimeout(function(){t.$router.push("adviceHistory")},300)}):this.$vux.toast.show({text:"请完善内容",type:"text",time:1e3,position:"bottom"})}}),activated:function(){this.title="",this.content="",this.contact=""}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-box",{attrs:{"body-padding-top":"46px"}},[n("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"意见反馈"}},slot:"header"},[n("router-link",{attrs:{slot:"right",to:{path:"adviceHistory"}},slot:"right"},[n("p",[t._v("反馈历史")])])],1),t._v(" "),n("group",{attrs:{gutter:"0"}},[n("x-input",{attrs:{placeholder:"标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("x-input",{attrs:{placeholder:"QQ号/微信号"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}}),t._v(" "),n("x-textarea",{attrs:{max:200,name:"description",placeholder:"问题或建议描述",rows:5},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("div",{staticStyle:{width:"90%",margin:"1rem auto 0"}},[n("x-button",{staticClass:"footer_botton",attrs:{type:"primary"},nativeOn:{click:function(e){t._submit(e)}}},[t._v("确定")])],1)],1)},v=[],x={render:h,staticRenderFns:v},m=x,f=n("VU/8"),b=f(p,m,!1,null,null,null);e.default=b.exports}});