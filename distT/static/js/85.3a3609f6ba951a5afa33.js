webpackJsonp([85],{1004:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(133),n=o(a),u=r(916),R=o(u),c=r(92),s=o(c);e.default={name:"errorClassmate",beforeCreate:function(){s.default.registerModule(["statistics","classmate"],(0,n.default)({},R.default))}}},1130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("keep-alive",[r("router-view")],1)},staticRenderFns:[]}},611:function(t,e,r){var o=r(39)(r(1004),r(1130),null,null);t.exports=o.exports},870:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ERROR_CLASSMATE="ERROR_CLASSMATE",e.ERROR_CLASSMATE_SCROLL="ERROR_CLASSMATE_SCROLL",e.ERROR_CLASSMATE_RELOAD="ERROR_CLASSMATE_RELOAD",e.ERROR="ERROR",e.ERROR_SCROLL="ERROR_SCROLL",e.ERROR_RELOAD="ERROR_RELOAD",e.ERROR_ERROR_TYPE="ERROR_ERROR_TYPE",e.ERROR_COMMENT="ERROR_COMMENT",e.ERROR_COMMENT_POST="ERROR_COMMENT_POST",e.ERROR_COMMENT_RESET="ERROR_COMMENT_RESET"},914:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.clearErrorClassmate=e.setErrorClassmateScroll=e.clearErrorComment=e.setErrorComment=e.getErrorComment=e.getErrorClassmate=e.clearError=e.setErrorScroll=e.setErrorType=e.getError=void 0;var a=r(134),n=o(a),u=r(211),R=o(u),c=r(870),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(c),d=r(53),l=o(d);e.getError=function(t,e){var r=t.rootState,o=t.commit,a=t.state;return new n.default(function(t,n){(0,R.default)({method:"get",url:"error/list",params:{offset:a.error.offset,token:r.common.user.token,subject_id:e.subjectId,studentId:r.route.params.studentId}}).then(function(r){o(s.ERROR,{subjectId:e.subjectId,data:r.data.data}),t(r)}).catch(function(t){n(t)})})},e.setErrorType=function(t,e){var r=t.rootState,o=t.commit;t.state;return new n.default(function(t,a){(0,R.default)({method:"post",url:"error/type",data:{token:r.common.user.token,studentId:r.route.params.studentId,wbeid:e.wbeid,chapterId:e.chapterId,type:e.type}}).then(function(r){o(s.ERROR_ERROR_TYPE,{index:e.index,type:e.type}),t(r)}).catch(function(t){a(t)})})},e.setErrorScroll=function(t,e){(0,t.commit)(s.ERROR_SCROLL,{height:e})},e.clearError=function(t){t.rootState;(0,t.commit)(s.ERROR_RELOAD)},e.getErrorClassmate=function(t,e){var r=t.rootState,o=t.commit;t.state;return new n.default(function(t,e){(0,R.default)({method:"get",url:"class/classmate/all",params:{token:r.common.user.token}}).then(function(e){o(s.ERROR_CLASSMATE,{data:e.data.data}),t(e)}).catch(function(t){e(t)})})},e.getErrorComment=function(t,e){var r=t.rootState,o=t.commit;t.state;return l.default.$vux.loading.show({text:"请稍候"}),new n.default(function(t,e){(0,R.default)({method:"get",url:"error/getComment",params:{token:r.common.user.token,studentId:r.route.params.studentId,wbeid:r.route.params.wbeid,chapterId:r.route.params.chapterId}}).then(function(e){o(s.ERROR_COMMENT,{data:e.data.data}),l.default.$vux.loading.hide(),t(e)}).catch(function(t){l.default.$vux.loading.hide(),e(t)})})},e.setErrorComment=function(t,e){var r=t.rootState,o=t.commit;t.state;return l.default.$vux.loading.show({text:"请稍候"}),new n.default(function(t,a){var n=plus.uploader.createUpload("https://www.guinaben.com/teacher/error/comment",{method:"POST"},function(e,n){200===n?(l.default.$vux.loading.hide(),o(s.ERROR_COMMENT_POST,{index:r.route.query.index}),t(e)):(l.default.$vux.loading.hide(),alert("Upload failed: "+n),a(n))});n.addFile(e.audio,{key:"audio"}),n.addData("studentId",r.route.params.studentId),n.addData("wbeid",r.route.params.wbeid+""),n.addData("token",r.common.user.token),n.addData("content",e.content),n.addData("chapterId",r.route.params.chapterId),n.start()})},e.clearErrorComment=function(t){(0,t.commit)(s.ERROR_COMMENT_RESET)},e.setErrorClassmateScroll=function(t,e){(0,t.commit)(s.ERROR_CLASSMATE_SCROLL,{height:e})},e.clearErrorClassmate=function(t){(0,t.commit)(s.ERROR_CLASSMATE_RELOAD)}},915:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.errorClassmate=function(t){return t.classmate},e.errorList=function(t){return t.error},e.errorComment=function(t){return t.comment}},916:function(t,e,r){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var a,n=r(212),u=function(t){return t&&t.__esModule?t:{default:t}}(n),R=r(870),c=o(R),s=r(915),d=o(s),l=r(914),i=o(l),f={classmate:{list:[],scroll:0},error:{list:[],subjectId:2,offset:"",scroll:0},comment:{content:"",audio:""}},E=(a={},(0,u.default)(a,c.ERROR_CLASSMATE,function(t,e){t.classmate.list=e.data}),(0,u.default)(a,c.ERROR_CLASSMATE_SCROLL,function(t,e){t.classmate.scroll=e.height}),(0,u.default)(a,c.ERROR_CLASSMATE_RELOAD,function(t){t.classmate.list=[],t.classmate.scroll=0}),(0,u.default)(a,c.ERROR,function(t,e){t.error.offset=e.data.offset,t.error.subjectId=e.subjectId,t.error.list?t.error.list=t.error.list.concat(e.data.list):t.error.list=t.error.list}),(0,u.default)(a,c.ERROR_SCROLL,function(t,e){t.error.scroll=e.height}),(0,u.default)(a,c.ERROR_RELOAD,function(t,e){t.error.list=[],t.error.offset="",t.error.scroll=0,t.error.subjectId=2}),(0,u.default)(a,c.ERROR_ERROR_TYPE,function(t,e){t.error.list[e.index].errorType=Number(e.type)}),(0,u.default)(a,c.ERROR_COMMENT,function(t,e){t.comment.audio=e.data.audioUrl,t.comment.content=e.data.content}),(0,u.default)(a,c.ERROR_COMMENT_RESET,function(t){t.comment.audio="",t.comment.content=""}),(0,u.default)(a,c.ERROR_COMMENT_POST,function(t,e){t.error.list[e.index].comment=!0}),a);e.default={state:f,mutations:E,getters:d,actions:i}}});