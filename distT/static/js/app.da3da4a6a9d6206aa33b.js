webpackJsonp([79],{142:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.USERINFO="USERINFO",e.USER_TOKEN="USER_TOKEN",e.USERINFO_UPDATE="USERINFO_UPDATE",e.USERINFO_CLEAR="USERINFO_CLEAR",e.USERPHOTO_SET="USERPHOTO_SET",e.USERPHOTO_POST="USERPHOTO_POST",e.USER_NEW_MESSAGE="USER_NEW_MESSAGE",e.SWIPER_INFO="SWIPER_INFO"},195:function(t,e,n){n(507);var o=n(52)(n(257),n(516),null,null);t.exports=o.exports},196:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(264),i=o(u),a=n(53),r=o(a),c=n(519),s=o(c),l=n(521),d=n(91),f=o(d),h=n(252),p=o(h),m=n(243),_=o(m),v=n(233),w=o(v),b=n(237),g=o(b),x=n(239),y=o(x),S=n(240),k=o(S),O=n(241),I=o(O),E=n(244),P=o(E),T=n(246),M=o(T),j=n(234),C=o(j),R=n(245),$=o(R),N=n(238),U=o(N),V=n(249),H=o(V),B=n(250),F=o(B),D=n(242),A=o(D),L=n(248),W=o(L),Y=n(247),Z=o(Y);r.default.use(s.default);var K=new s.default({mode:"hash",routes:[C.default,w.default,g.default,U.default,y.default,k.default,I.default,A.default].concat((0,i.default)(p.default),[_.default,P.default,$.default,M.default,W.default,Z.default,H.default,F.default])});(0,l.sync)(f.default,K),e.default=K},205:function(t,e,n){n(509);var o=n(52)(n(258),n(518),null,null);t.exports=o.exports},209:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(134),i=o(u),a=n(208),r=o(a),c=n(133),s=o(c),l=n(53),d=o(l),f=n(215),h=o(f);h.default.defaults.timeout=1e4,h.default.defaults.baseURL="https://www.guinaben.com/teacher/",h.default.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",h.default.interceptors.request.use(function(t){return t.params=(0,s.default)({},t.params,{VERSION:"3.2.0"}),"post"===t.method&&(t.data=(0,r.default)(t.data)),t}),h.default.interceptors.response.use(function(t){if(401===t.data.code)return localStorage.removeItem("token"),d.default.$vux.toast.show({text:t.data.msg,type:"warn",time:500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(t){window.location.href="/login"}},500),i.default.reject(t);if(403===t.data.code)d.default.$vux.alert.show({title:"发现新版本",content:"赚积分有惊喜",onHide:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/gui-na-ben-jiao-shi-duan-zai/id1190013249?l=en&mt=8"):window.location.href="market://details?id=com.sanbao.guinaben.teacher"}});else if(200!==t.data.code)return d.default.$vux.toast.show({text:t.data.msg,type:"text",time:1e3,position:"bottom"}),i.default.reject(t);return t},function(t){return d.default.$vux.toast.show({text:"网络异常",type:"text",time:1e3,position:"bottom"}),i.default.reject(t)}),e.default=h.default},211:function(t,e,n){n(505);var o=n(52)(n(256),n(514),null,null);t.exports=o.exports},214:function(t,e,n){n(508);var o=n(52)(n(254),n(517),null,null);t.exports=o.exports},233:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/about",component:function(t){return n.e(76).then(function(){return t(n(529))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"about",component:function(t){return n.e(37).then(function(){return t(n(528))}.bind(null,n)).catch(n.oe)}},{path:"my",name:"about_my",component:function(t){return n.e(56).then(function(){return t(n(530))}.bind(null,n)).catch(n.oe)}},{path:"advice",name:"about_advice",component:function(t){return n.e(18).then(function(){return t(n(526))}.bind(null,n)).catch(n.oe)}},{path:"adviceHistory",component:function(t){return n.e(61).then(function(){return t(n(527))}.bind(null,n)).catch(n.oe)}}]}},234:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/assemble",component:function(t){return n.e(75).then(function(){return t(n(531))}.bind(null,n)).catch(n.oe)},redirect:"/assemble/sync",children:[{path:"gaokao",name:"assemble_gaokao",component:function(t){return n.e(19).then(function(){return t(n(534))}.bind(null,n)).catch(n.oe)}},{path:"sync",name:"assemble_sync",component:function(t){return n.e(16).then(function(){return t(n(536))}.bind(null,n)).catch(n.oe)}},{path:"options",name:"assemble_options",component:function(t){return n.e(26).then(function(){return t(n(535))}.bind(null,n)).catch(n.oe)}},{path:"example/:type/:id/:name",name:"assemble_example",component:function(t){return n.e(51).then(function(){return t(n(533))}.bind(null,n)).catch(n.oe)}},{path:"choice/:subjectId/:grade/:id",name:"assemble_choice",component:function(t){return n.e(52).then(function(){return t(n(532))}.bind(null,n)).catch(n.oe)}}]}},235:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.swiperInfoClear=e.getSwiperInfo=e.uploadHeadImg=e.setHeadImg=e.getUserNews=e.getToken=e.setUserInfo=e.getUserInfo=void 0;var u=n(133),i=o(u),a=n(134),r=o(a),c=n(53),s=o(c),l=n(209),d=o(l),f=n(142),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(f);e.getUserInfo=function(t){var e=t.rootState,n=t.commit;return s.default.$vux.loading.show({text:"请稍候"}),new r.default(function(t,o){(0,d.default)({method:"get",url:"user",params:{token:e.common.user.token}}).then(function(e){n(h.USERINFO,e.data.data),t(e),s.default.$vux.loading.hide()}).catch(function(){s.default.$vux.loading.hide()})})},e.setUserInfo=function(t,e){var n=t.rootState;t.commit,t.dispatch;return s.default.$vux.loading.show({text:"请稍候"}),new r.default(function(t,o){(0,d.default)({method:"post",url:"user/update",data:(0,i.default)({},e,{token:n.common.user.token})}).then(function(e){s.default.$vux.loading.hide(),t(e)}).catch(function(){s.default.$vux.loading.hide()})})},e.getToken=function(t,e){var n=t.commit;return s.default.$vux.loading.show({text:"请稍候"}),new r.default(function(t,o){(0,d.default)({method:"post",url:"user/token",data:(0,i.default)({},e)}).then(function(e){n("USER_TOKEN",e.data.token),s.default.$vux.loading.hide(),t(e)}).catch(function(t){s.default.$vux.loading.hide(),o(t)})})},e.getUserNews=function(t){var e=t.rootState,n=t.commit;return new r.default(function(t,o){(0,d.default)({method:"get",url:"message/new",params:{token:e.common.user.token}}).then(function(e){n(h.USER_NEW_MESSAGE,e.data.data),t(e)})})},e.setHeadImg=function(t,e){(0,t.commit)(h.USERPHOTO_SET,e)},e.uploadHeadImg=function(t,e){var n=t.rootState,o=t.commit,u=t.dispatch;return s.default.$vux.loading.show({text:"请稍候"}),new r.default(function(t,i){(0,d.default)({method:"post",url:"user/headImg",data:{img:e.img,token:n.common.user.token}}).then(function(e){o(h.USERPHOTO_POST,e.data.data),u("getUserInfo"),s.default.$vux.loading.hide(),t(e)}).catch(function(t){s.default.$vux.loading.hide(),i(t)})})},e.getSwiperInfo=function(t){var e=t.rootState,n=t.commit;return new r.default(function(t,o){(0,d.default)({method:"get",url:"swiper",params:{id:e.route.params.id}}).then(function(e){n(h.SWIPER_INFO,e.data.data),t(e)})})},e.swiperInfoClear=function(t){(0,t.commit)(h.SWIPER_INFO,{title:"",article:""})}},236:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var u,i=n(210),a=function(t){return t&&t.__esModule?t:{default:t}}(i),r=n(142),c=o(r),s=n(235),l=o(s),d={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{version:"",headImg:"",bufferImg:"",name:"",school:"",subjectId:"",sex:"",mobile:"",classes:[],swiper:[{}],token:localStorage.getItem("token")}},f={Path:function(t,e,n){return n.route.path},Query:function(t,e,n){return n.route.query},Params:function(t,e,n){return n.route.params},Route:function(t,e,n){return n.route},User:function(t){return t.user},News:function(t){return t.news},SwiperInfo:function(t){return t.article},System:function(t){return t.system}},h=(u={},(0,a.default)(u,c.USERINFO,function(t,e){t.user.headImg=e.headImg,t.user.name=e.name,t.user.subjectId=e.subjectId,t.user.mobile=e.mobile,t.user.school=e.school,t.user.sex=e.sex,t.user.swiper=e.swiper,t.user.classes=e.classes,t.user.version=e.version}),(0,a.default)(u,c.USERPHOTO_POST,function(t,e){t.user.headImg=e.headImg}),(0,a.default)(u,c.USERPHOTO_SET,function(t,e){t.user.bufferImg=e}),(0,a.default)(u,c.USER_TOKEN,function(t,e){t.user.token=e,localStorage.setItem("token",e)}),(0,a.default)(u,c.USER_NEW_MESSAGE,function(t,e){t.news.classes=e.classes,t.news.correct=e.correct,t.news.system=e.system}),(0,a.default)(u,c.SWIPER_INFO,function(t,e){t.article.title=e.title,t.article.content=e.content}),u);e.default={state:d,getters:f,mutations:h,actions:l}},237:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/correct/:grade/:subjectId/:id",name:"correct",component:function(t){return n.e(29).then(function(){return t(n(537))}.bind(null,n)).catch(n.oe)}}},238:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/download",component:function(t){return n.e(74).then(function(){return t(n(539))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"download",component:function(t){return n.e(1).then(function(){return t(n(538))}.bind(null,n)).catch(n.oe)}},{path:"update/:id",name:"download_update",component:function(t){return n.e(53).then(function(){return t(n(540))}.bind(null,n)).catch(n.oe)}}]}},239:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/error",name:"error",component:function(t){return n.e(73).then(function(){return t(n(543))}.bind(null,n)).catch(n.oe)},redirect:"/error",children:[{path:"/",name:"error_classmate",component:function(t){return n.e(23).then(function(){return t(n(541))}.bind(null,n)).catch(n.oe)}},{path:"list/:name/:studentId",name:"error_list",component:function(t){return n.e(0).then(function(){return t(n(544))}.bind(null,n)).catch(n.oe)}},{path:"comment/:studentId/:wbeid/:chapterId",name:"error_comment",component:function(t){return n.e(31).then(function(){return t(n(542))}.bind(null,n)).catch(n.oe)}}]}},240:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/example/:type/:subjectId/:grade/:id",name:"example",component:function(t){return n.e(33).then(function(){return t(n(545))}.bind(null,n)).catch(n.oe)}}},241:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/homework",component:function(t){return n.e(72).then(function(){return t(n(548))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"homework",component:function(t){return n.e(4).then(function(){return t(n(547))}.bind(null,n)).catch(n.oe)}},{path:"class/:index/:id",name:"homework_class",component:function(t){return n.e(28).then(function(){return t(n(546))}.bind(null,n)).catch(n.oe)}},{path:"publish/content",name:"homework_publish_content",component:function(t){return n.e(17).then(function(){return t(n(550))}.bind(null,n)).catch(n.oe)}},{path:"publish/audio",name:"homework_publish_audio",component:function(t){return n.e(12).then(function(){return t(n(549))}.bind(null,n)).catch(n.oe)}},{path:"publish/image",name:"homework_publish_image",component:function(t){return n.e(13).then(function(){return t(n(551))}.bind(null,n)).catch(n.oe)}},{path:"publish/photo",name:"homework_publish_photo",component:function(t){return n.e(62).then(function(){return t(n(552))}.bind(null,n)).catch(n.oe)}}]}},242:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/invite",component:function(t){return n.e(71).then(function(){return t(n(554))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"invite",component:function(t){return n.e(41).then(function(){return t(n(553))}.bind(null,n)).catch(n.oe)}},{path:"list",name:"invite_list",component:function(t){return n.e(45).then(function(){return t(n(555))}.bind(null,n)).catch(n.oe)}}]}},243:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/login",component:function(t){return n.e(66).then(function(){return t(n(558))}.bind(null,n)).catch(n.oe)},children:[{path:"/",component:function(t){return n.e(34).then(function(){return t(n(559))}.bind(null,n)).catch(n.oe)}},{path:"/forget",component:function(t){return n.e(11).then(function(){return t(n(556))}.bind(null,n)).catch(n.oe)}},{path:"/register",component:function(t){return n.e(10).then(function(){return t(n(560))}.bind(null,n)).catch(n.oe)}},{path:"/info",component:function(t){return n.e(7).then(function(){return t(n(557))}.bind(null,n)).catch(n.oe)}},{path:"/resetPassword",component:function(t){return n.e(9).then(function(){return t(n(561))}.bind(null,n)).catch(n.oe)}},{path:"/setPassword",component:function(t){return n.e(8).then(function(){return t(n(562))}.bind(null,n)).catch(n.oe)}}]}},244:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/message",component:function(t){return n.e(65).then(function(){return t(n(566))}.bind(null,n)).catch(n.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return n.e(50).then(function(){return t(n(565))}.bind(null,n)).catch(n.oe)}},{path:"correct",component:function(t){return n.e(59).then(function(){return t(n(564))}.bind(null,n)).catch(n.oe)}},{path:"system",component:function(t){return n.e(58).then(function(){return t(n(567))}.bind(null,n)).catch(n.oe)}},{path:"class",component:function(t){return n.e(60).then(function(){return t(n(563))}.bind(null,n)).catch(n.oe)}}]}},245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/myDownload",component:function(t){return n.e(70).then(function(){return t(n(569))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"myDownload",component:function(t){return n.e(2).then(function(){return t(n(568))}.bind(null,n)).catch(n.oe)}},{path:"list/:id",name:"myDownload_list",component:function(t){return n.e(39).then(function(){return t(n(570))}.bind(null,n)).catch(n.oe)}}]}},246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/class",component:function(t){return n.e(64).then(function(){return t(n(575))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"class",component:function(t){return n.e(47).then(function(){return t(n(574))}.bind(null,n)).catch(n.oe)}},{path:"add",name:"class_add",component:function(t){return n.e(22).then(function(){return t(n(571))}.bind(null,n)).catch(n.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(t){return n.e(5).then(function(){return t(n(572))}.bind(null,n)).catch(n.oe)}},{path:"update/name/:code/:name",name:"class_update_name",component:function(t){return n.e(21).then(function(){return t(n(576))}.bind(null,n)).catch(n.oe)}},{path:"classmate/update/:code/:name",name:"class_classmate_update",component:function(t){return n.e(30).then(function(){return t(n(573))}.bind(null,n)).catch(n.oe)}}]}},247:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/paper",component:function(t){return n.e(69).then(function(){return t(n(577))}.bind(null,n)).catch(n.oe)},redirect:"/paper/index",children:[{path:"index",name:"paper",component:function(t){return n.e(32).then(function(){return t(n(579))}.bind(null,n)).catch(n.oe)}},{path:"options",name:"paper_options",component:function(t){return n.e(25).then(function(){return t(n(580))}.bind(null,n)).catch(n.oe)}},{path:"history",name:"paper_history",component:function(t){return n.e(3).then(function(){return t(n(578))}.bind(null,n)).catch(n.oe)}}]}},248:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/points",component:function(t){return n.e(68).then(function(){return t(n(583))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"points",component:function(t){return n.e(36).then(function(){return t(n(582))}.bind(null,n)).catch(n.oe)}},{path:"earn",name:"points_earn",component:function(t){return n.e(44).then(function(){return t(n(581))}.bind(null,n)).catch(n.oe)}},{path:"rask",name:"points_rask",component:function(t){return n.e(43).then(function(){return t(n(585))}.bind(null,n)).catch(n.oe)}},{path:"list",name:"points_list",component:function(t){return n.e(40).then(function(){return t(n(584))}.bind(null,n)).catch(n.oe)}}]}},249:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/settings",component:function(t){return n.e(77).then(function(){return t(n(588))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"settings",component:function(t){return n.e(20).then(function(){return t(n(586))}.bind(null,n)).catch(n.oe)}},{path:"info",name:"settings_info",component:function(t){return n.e(54).then(function(){return t(n(587))}.bind(null,n)).catch(n.oe)}},{path:"update",name:"settings_update",component:function(t){return n.e(6).then(function(){return t(n(591))}.bind(null,n)).catch(n.oe)}},{path:"photo",name:"settings_photo",component:function(t){return n.e(63).then(function(){return t(n(589))}.bind(null,n)).catch(n.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(t){return n.e(24).then(function(){return t(n(590))}.bind(null,n)).catch(n.oe)}}]}},250:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={path:"/workbook",component:function(t){return n.e(67).then(function(){return t(n(598))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"workbook",component:function(t){return n.e(15).then(function(){return t(n(597))}.bind(null,n)).catch(n.oe)}},{path:"chapter/:name/:workbookId",name:"workbook_chapter",component:function(t){return n.e(42).then(function(){return t(n(592))}.bind(null,n)).catch(n.oe)}},{path:"exercise",component:function(t){return n.e(46).then(function(){return t(n(594))}.bind(null,n)).catch(n.oe)},children:[{path:"number/:name/:chapterId/",name:"workbook_exercise_number",component:function(t){return n.e(55).then(function(){return t(n(595))}.bind(null,n)).catch(n.oe)}},{path:"photo/:name/:chapterId/",name:"workbook_exercise_photo",component:function(t){return n.e(27).then(function(){return t(n(596))}.bind(null,n)).catch(n.oe)}}]},{path:"exercise/error/:chapterId/:wbeid/",name:"workbook_exercise_error",component:function(t){return n.e(14).then(function(){return t(n(593))}.bind(null,n)).catch(n.oe)}}]}},251:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(53),i=o(u),a=n(204),r=o(a),c=n(203),s=o(c),l=n(91),d=o(l),f=n(196),h=o(f),p=n(200),m=o(p),_=n(199),v=o(_),w=n(198),b=o(w),g=n(201),x=o(g),y=n(197),S=o(y),k=n(205),O=o(k);n(202),i.default.use(m.default),i.default.use(r.default,{attempt:3}),i.default.use(v.default),i.default.use(b.default),i.default.use(S.default),s.default.attach(document.body),i.default.config.productionTip=!1,i.default.filter("ymd",function(t){return(0,x.default)(new Date(Number(t+"000")),"YYYY-MM-DD")}),i.default.filter("ymdhms",function(t){return(0,x.default)(new Date(Number(t+"000")),"YYYY-MM-DD HH:mm:ss")}),i.default.filter("subject",function(t){switch(t){case 2:return"数学";case 7:return"物理";case 8:return"化学"}}),i.default.filter("errorType",function(t){switch(t){case-1:return"错误类型";case 1:return"审题不清";case 2:return"概念模糊";case 3:return"思路不清";case 4:return"运算错误";case 5:return"粗心大意";case 6:return"方法不对";case 7:return"时间不够";case 0:return"我不知道"}}),document.addEventListener("plusready",function(){var t=null;plus.navigator.setStatusBarBackground("#4cc0be"),setTimeout(function(){var t=plus.audio.createPlayer("233.mp3");t.setRoute(plus.audio.ROUTE_SPEAKER),t.play(function(){},function(t){})},500),plus.key.addEventListener("backbutton",function(){"/index"===d.default.state.route.path||"/bag"===d.default.state.route.path||"/login"===d.default.state.route.path||"/user"===d.default.state.route.path?t?(new Date).getTime()-t<1e3&&plus.runtime.quit():(t=(new Date).getTime(),i.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1e3,position:"bottom"}),setTimeout(function(){t=null},1e3)):history.back()},!1)});var I=new i.default({router:h.default,store:d.default,render:function(t){return t(O.default)}}).$mount("#app-box");e.default=I},252:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/",component:function(t){return n.e(48).then(function(){return t(n(602))}.bind(null,n)).catch(n.oe)},redirect:function(t){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(t){return n.e(38).then(function(){return t(n(601))}.bind(null,n)).catch(n.oe)}},{path:"bag",name:"bag",component:function(t){return n.e(35).then(function(){return t(n(600))}.bind(null,n)).catch(n.oe)}},{path:"user",name:"user",component:function(t){return n.e(49).then(function(){return t(n(603))}.bind(null,n)).catch(n.oe)}}]},{path:"/article/:id",component:function(t){return n.e(57).then(function(){return t(n(599))}.bind(null,n)).catch(n.oe)}}]},253:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(195),u=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"alert",components:{XDialog:u.default},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},254:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(195),u=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"confirm",components:{XDialog:u.default},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.$refs.input.focus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}},255:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},256:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(260),u=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"toast",mixins:[u.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},257:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(259),u=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={mixins:[u.default],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},503:function(t,e){},504:function(t,e){},505:function(t,e){},506:function(t,e){},507:function(t,e){},508:function(t,e){},509:function(t,e){},513:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},514:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]}},515:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},516:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog"},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},517:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-dialog",{attrs:{dialogClass:"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showInput?n("div",{staticClass:"vux-prompt"},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.inputAttrs,!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},518:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},522:function(t,e,n){n(504);var o=n(52)(n(253),n(513),null,null);t.exports=o.exports},523:function(t,e,n){n(506);var o=n(52)(n(255),n(515),null,null);t.exports=o.exports},91:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(53),i=o(u),a=n(207),r=o(a),c=n(236),s=o(c);i.default.use(r.default),e.default=new r.default.Store({modules:{common:s.default}})}},[251]);