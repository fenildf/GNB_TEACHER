webpackJsonp([58],{533:function(e,t,n){var o=n(50)(n(845),n(979),null,null);e.exports=o.exports},787:function(e,t,n){"use strict";var o=n(128),a=n.n(o),u=n(52),r=n(194),i={updatePwd:function(e,t){var o=e.rootState,i=e.commit;return u.default.$vux.loading.show({text:"请稍候"}),new a.a(function(e,a){n.i(r.a)({method:"post",url:"pwd/update",data:{oldPwd:t.oldPwd,pwd:t.pwd,token:o.common.user.token}}).then(function(t){u.default.$vux.loading.hide(),i("PWD_UPDATE"),e(t)}).catch(function(e){u.default.$vux.loading.hide(),a(e)})})}};t.a={actions:i}},845:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(190),a=n.n(o),u=n(787),r=n(87);t.default={name:"settings",beforeCreate:function(){r.a.registerModule("settings",a()({},u.a))}}},979:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("router-view")],1)},staticRenderFns:[]}}});