webpackJsonp([55],{501:function(t,n,e){var o=e(50)(e(813),e(932),null,null);t.exports=o.exports},740:function(t,n,e){"use strict";e.d(n,"g",function(){return o}),e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return d}),e.d(n,"f",function(){return c});var o="DOWNLOAD_URL",r="DOWNLOAD_PAPER",i="DOWNLOAD_PAPER_UP",a="DOWNLOAD_PAPER_DOWN",u="DOWNLOAD_PAPER_DEL",d="DOWNLOAD_PAPER_RESET",c="DOWNLOAD_PAPER_SCROLL"},764:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"getDownloadList",function(){return l}),e.d(n,"getDownloadUpdate",function(){return s}),e.d(n,"getDownloadUrl",function(){return f}),e.d(n,"setMyDownloadPaperUp",function(){return p}),e.d(n,"setMyDownloadPaperDown",function(){return m}),e.d(n,"setMyDownloadPaperDel",function(){return w}),e.d(n,"setMyDownloadPaperScroll",function(){return D}),e.d(n,"clearMyDownloadPaper",function(){return x});var o=e(190),r=e.n(o),i=e(128),a=e.n(i),u=e(740),d=e(194),c=e(52),l=function(t,n){var o=t.rootState,i=t.commit;return new a.a(function(t,a){e.i(d.a)({method:"get",url:"download/list",params:r()({token:o.common.user.token},n)}).then(function(n){i(u.a,n.data.data),t(n)}).catch(function(t){a(t)})})},s=function(t,n){for(var o=t.rootState,r=t.state,i=(t.commit,[]),u=r.paper.list.block,l=0;l<u.length;l++)for(var s=0;s<u[l].list.length;s++)i.push(u[l].list[s].exercisesId);return c.default.$vux.loading.show({text:"请稍候"}),new a.a(function(t,n){e.i(d.a)({method:"post",url:"download/update",data:{token:o.common.user.token,downloadId:o.route.params.id,ids:i}}).then(function(n){c.default.$vux.loading.hide(),t(n)}).catch(function(t){c.default.$vux.loading.hide(),n(t)})})},f=function(t,n){var o=t.rootState,r=t.commit;return new a.a(function(t,i){e.i(d.a)({method:"post",url:"download/update",data:{token:o.common.user.token,downloadId:n.id}}).then(function(n){r(u.g,n.data.data),t(n)}).catch(function(t){i(t)})})},p=function(t,n){var e=(t.state,t.commit);0===n.index?c.default.$vux.toast.show({text:"不能再上移了",type:"text",time:1e3,position:"bottom"}):e(u.b,n)},m=function(t,n){var e=t.state,o=t.commit;n.index===e.paper.list.block[n.pindex].list.length-1?c.default.$vux.toast.show({text:"不能再下移了",type:"text",time:1e3,position:"bottom"}):o(u.c,n)},w=function(t,n){(0,t.commit)(u.d,n)},D=function(t,n){(0,t.commit)(u.f,n)},x=function(t){t.rootState;(0,t.commit)(u.e)}},765:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"DownloadPaper",function(){return o}),e.d(n,"DownloadUrl",function(){return r});var o=function(t){return t.paper},r=function(t){return t.downloadUrl}},766:function(t,n,e){"use strict";var o,r=e(195),i=e.n(r),a=e(740),u=e(765),d=e(764),c={paper:{list:[],scroll:0},downloadUrl:""},l=(o={},i()(o,a.a,function(t,n){t.paper.list=n}),i()(o,a.b,function(t,n){var e=t.paper.list.block[n.pindex].list;e[n.index]=e.splice(n.index-1,1,e[n.index])[0]}),i()(o,a.c,function(t,n){var e=t.paper.list.block[n.pindex].list;e[n.index]=e.splice(n.index+1,1,e[n.index])[0]}),i()(o,a.d,function(t,n){t.paper.list.block[n.pindex].list.splice(n.index,1)}),i()(o,a.e,function(t){t.paper.list=[],t.paper.scroll=0}),i()(o,a.f,function(t,n){t.paper.scroll=n}),o);n.a={state:c,getters:u,actions:d,mutations:l}},813:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(190),r=e.n(o),i=e(87),a=e(766);n.default={name:"download",beforeCreate:function(){i.a.registerModule("download",r()({},a.a))}}},932:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("keep-alive",[e("router-view")],1)},staticRenderFns:[]}}});