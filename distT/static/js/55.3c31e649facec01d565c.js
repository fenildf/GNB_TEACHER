webpackJsonp([55],{501:function(t,e,o){var n=o(50)(o(819),o(942),null,null);t.exports=n.exports},746:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOWNLOAD_URL="DOWNLOAD_URL",e.DOWNLOAD_PAPER="DOWNLOAD_PAPER",e.DOWNLOAD_PAPER_UP="DOWNLOAD_PAPER_UP",e.DOWNLOAD_PAPER_DOWN="DOWNLOAD_PAPER_DOWN",e.DOWNLOAD_PAPER_DEL="DOWNLOAD_PAPER_DEL",e.DOWNLOAD_PAPER_RESET="DOWNLOAD_PAPER_RESET",e.DOWNLOAD_PAPER_SCROLL="DOWNLOAD_PAPER_SCROLL"},770:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.clearMyDownloadPaper=e.setMyDownloadPaperScroll=e.setMyDownloadPaperDel=e.setMyDownloadPaperDown=e.setMyDownloadPaperUp=e.getDownloadUrl=e.getDownloadUpdate=e.getDownloadList=void 0;var a=o(190),l=n(a),r=o(128),d=n(r),u=o(746),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(u),c=o(194),s=n(c),D=o(52),f=n(D);e.getDownloadList=function(t,e){var o=t.rootState,n=t.commit;return new d.default(function(t,a){(0,s.default)({method:"get",url:"download/list",params:(0,l.default)({token:o.common.user.token},e)}).then(function(e){n(i.DOWNLOAD_PAPER,e.data.data),t(e)}).catch(function(t){a(t)})})},e.getDownloadUpdate=function(t,e){for(var o=t.rootState,n=t.state,a=(t.commit,[]),l=n.paper.list.block,r=0;r<l.length;r++)for(var u=0;u<l[r].list.length;u++)a.push(l[r].list[u].exercisesId);return f.default.$vux.loading.show({text:"请稍候"}),new d.default(function(t,e){(0,s.default)({method:"post",url:"download/update",data:{token:o.common.user.token,downloadId:o.route.params.id,ids:a}}).then(function(e){f.default.$vux.loading.hide(),t(e)}).catch(function(t){f.default.$vux.loading.hide(),e(t)})})},e.getDownloadUrl=function(t,e){var o=t.rootState,n=t.state,a=t.commit;return new d.default(function(t,e){(0,s.default)({method:"post",url:"download/download",data:{token:o.common.user.token,downloadId:n.paper.list.downloadId}}).then(function(e){a(i.DOWNLOAD_URL,e.data.data),t(e)}).catch(function(t){f.default.$vux.toast.show({text:"获取下载地址失败",type:"text",time:1e3,position:"bottom"}),e(t)})})},e.setMyDownloadPaperUp=function(t,e){var o=(t.state,t.commit);0===e.index?f.default.$vux.toast.show({text:"不能再上移了",type:"text",time:1e3,position:"bottom"}):o(i.DOWNLOAD_PAPER_UP,e)},e.setMyDownloadPaperDown=function(t,e){var o=t.state,n=t.commit;e.index===o.paper.list.block[e.pindex].list.length-1?f.default.$vux.toast.show({text:"不能再下移了",type:"text",time:1e3,position:"bottom"}):n(i.DOWNLOAD_PAPER_DOWN,e)},e.setMyDownloadPaperDel=function(t,e){(0,t.commit)(i.DOWNLOAD_PAPER_DEL,e)},e.setMyDownloadPaperScroll=function(t,e){(0,t.commit)(i.DOWNLOAD_PAPER_SCROLL,e)},e.clearMyDownloadPaper=function(t){t.rootState;(0,t.commit)(i.DOWNLOAD_PAPER_RESET)}},771:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DownloadPaper=function(t){return t.paper},e.DownloadUrl=function(t){return t.downloadUrl}},772:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var a,l=o(195),r=function(t){return t&&t.__esModule?t:{default:t}}(l),d=o(746),u=n(d),i=o(771),c=n(i),s=o(770),D=n(s),f={paper:{list:[],scroll:0},downloadUrl:""},p=(a={},(0,r.default)(a,u.DOWNLOAD_PAPER,function(t,e){t.paper.list=e}),(0,r.default)(a,u.DOWNLOAD_URL,function(t,e){t.downloadUrl=e}),(0,r.default)(a,u.DOWNLOAD_PAPER_UP,function(t,e){var o=t.paper.list.block[e.pindex].list;o[e.index]=o.splice(e.index-1,1,o[e.index])[0]}),(0,r.default)(a,u.DOWNLOAD_PAPER_DOWN,function(t,e){var o=t.paper.list.block[e.pindex].list;o[e.index]=o.splice(e.index+1,1,o[e.index])[0]}),(0,r.default)(a,u.DOWNLOAD_PAPER_DEL,function(t,e){t.paper.list.block[e.pindex].list.splice(e.index,1)}),(0,r.default)(a,u.DOWNLOAD_PAPER_RESET,function(t){t.paper.list=[],t.paper.scroll=0}),(0,r.default)(a,u.DOWNLOAD_PAPER_SCROLL,function(t,e){t.paper.scroll=e}),a);e.default={state:f,getters:c,actions:D,mutations:p}},819:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(190),l=n(a),r=o(87),d=n(r),u=o(772),i=n(u);e.default={name:"download",beforeCreate:function(){d.default.registerModule("download",(0,l.default)({},i.default))}}},942:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("keep-alive",[o("router-view")],1)},staticRenderFns:[]}}});