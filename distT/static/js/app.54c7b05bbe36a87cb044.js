webpackJsonp([96],{142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.USERINFO="USERINFO",t.USER_TOKEN="USER_TOKEN",t.USERINFO_UPDATE="USERINFO_UPDATE",t.USERINFO_CLEAR="USERINFO_CLEAR",t.USERPHOTO_SET="USERPHOTO_SET",t.USERPHOTO_POST="USERPHOTO_POST",t.USER_NEW_MESSAGE="USER_NEW_MESSAGE",t.SWIPER_INFO="SWIPER_INFO"},196:function(e,t,n){n(509);var o=n(52)(n(260),n(518),null,null);e.exports=o.exports},197:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(144),a=o(u),r=n(53),i=o(r),c=n(521),s=o(c),l=n(523),d=n(91),f=o(d),h=n(255),m=o(h),p=n(244),_=o(p),b=n(234),w=o(b),v=n(240),g=o(v),x=n(241),y=o(x),S=n(242),O=o(S),k=n(245),C=o(k),I=n(247),E=o(I),P=n(237),M=o(P),T=n(246),j=o(T),R=n(249),$=o(R),N=n(253),U=o(N),D=n(252),V=o(D),H=n(243),B=o(H),F=n(248),A=o(F);i.default.use(s.default);var L=new s.default({mode:"hash",routes:[].concat((0,a.default)(M.default),[w.default,g.default,y.default,O.default,B.default],(0,a.default)(m.default),(0,a.default)(V.default),[_.default,C.default,j.default,E.default,A.default,$.default,U.default])});(0,l.sync)(f.default,L),t.default=L},206:function(e,t,n){n(511);var o=n(52)(n(261),n(520),null,null);e.exports=o.exports},210:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(134),a=o(u),r=n(209),i=o(r),c=n(133),s=o(c),l=n(53),d=o(l),f=n(216),h=o(f);h.default.defaults.timeout=1e4,h.default.defaults.baseURL="http://www.guinaben.com:8070/test/teacher/",h.default.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",h.default.interceptors.request.use(function(e){return e.params=(0,s.default)({},e.params,{VERSION:"3.3.0"}),"post"===e.method&&(e.data=(0,i.default)(e.data)),e}),h.default.interceptors.response.use(function(e){if(401===e.data.code)return localStorage.removeItem("token"),d.default.$vux.toast.show({text:e.data.msg,type:"warn",time:500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(e){window.location.href="/login"}},500),a.default.reject(e);if(403===e.data.code)d.default.$vux.alert.show({title:"发现新版本",content:"赚积分有惊喜",onHide:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/gui-na-ben-jiao-shi-duan-zai/id1190013249?l=en&mt=8"):window.location.href="market://details?id=com.sanbao.guinaben.teacher"}});else if(200!==e.data.code)return d.default.$vux.toast.show({text:e.data.msg,type:"text",time:1e3,position:"bottom"}),a.default.reject(e);return e},function(e){return d.default.$vux.toast.show({text:"网络异常",type:"text",time:1e3,position:"bottom"}),a.default.reject(e)}),t.default=h.default},212:function(e,t,n){n(507);var o=n(52)(n(259),n(516),null,null);e.exports=o.exports},215:function(e,t,n){n(510);var o=n(52)(n(257),n(519),null,null);e.exports=o.exports},234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/about",component:function(e){return n.e(92).then(function(){return e(n(531))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"about",component:function(e){return n.e(47).then(function(){return e(n(530))}.bind(null,n)).catch(n.oe)}},{path:"my",name:"about_my",component:function(e){return n.e(73).then(function(){return e(n(532))}.bind(null,n)).catch(n.oe)}},{path:"advice",name:"about_advice",component:function(e){return n.e(25).then(function(){return e(n(528))}.bind(null,n)).catch(n.oe)}},{path:"adviceHistory",component:function(e){return n.e(78).then(function(){return e(n(529))}.bind(null,n)).catch(n.oe)}}]}},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/assemble",component:function(e){return n.e(91).then(function(){return e(n(533))}.bind(null,n)).catch(n.oe)},redirect:"/assemble/sync",children:[{path:"gaokao",name:"assemble_gaokao",component:function(e){return n.e(26).then(function(){return e(n(536))}.bind(null,n)).catch(n.oe)}},{path:"sync",name:"assemble_sync",component:function(e){return n.e(23).then(function(){return e(n(538))}.bind(null,n)).catch(n.oe)}},{path:"options",name:"assemble_options",component:function(e){return n.e(33).then(function(){return e(n(537))}.bind(null,n)).catch(n.oe)}},{path:"example/:type/:id/:name",name:"assemble_example",component:function(e){return n.e(57).then(function(){return e(n(535))}.bind(null,n)).catch(n.oe)}},{path:"choice/:subjectId/:grade/:id",name:"assemble_choice",component:function(e){return n.e(58).then(function(){return e(n(534))}.bind(null,n)).catch(n.oe)}}]}},236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/assemble/download",component:function(e){return n.e(90).then(function(){return e(n(540))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"download",component:function(e){return n.e(1).then(function(){return e(n(539))}.bind(null,n)).catch(n.oe)}},{path:"update/:id",name:"download_update",component:function(e){return n.e(64).then(function(){return e(n(541))}.bind(null,n)).catch(n.oe)}}]}},237:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(235),a=o(u),r=n(236),i=o(r);t.default=[a.default,i.default]},238:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.swiperInfoClear=t.getSwiperInfo=t.uploadHeadImg=t.setHeadImg=t.getUserNews=t.getToken=t.setUserInfo=t.getUserInfo=void 0;var u=n(133),a=o(u),r=n(134),i=o(r),c=n(53),s=o(c),l=n(210),d=o(l),f=n(142),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f);t.getUserInfo=function(e){var t=e.rootState,n=e.commit;return s.default.$vux.loading.show({text:"请稍候"}),new i.default(function(e,o){(0,d.default)({method:"get",url:"user",params:{token:t.common.user.token}}).then(function(t){n(h.USERINFO,t.data.data),e(t),s.default.$vux.loading.hide()}).catch(function(){s.default.$vux.loading.hide()})})},t.setUserInfo=function(e,t){var n=e.rootState;e.commit,e.dispatch;return s.default.$vux.loading.show({text:"请稍候"}),new i.default(function(e,o){(0,d.default)({method:"post",url:"user/update",data:(0,a.default)({},t,{token:n.common.user.token})}).then(function(t){s.default.$vux.loading.hide(),e(t)}).catch(function(){s.default.$vux.loading.hide()})})},t.getToken=function(e,t){var n=e.commit;return s.default.$vux.loading.show({text:"请稍候"}),new i.default(function(e,o){(0,d.default)({method:"post",url:"user/token",data:(0,a.default)({},t)}).then(function(t){n("USER_TOKEN",t.data.token),s.default.$vux.loading.hide(),e(t)}).catch(function(e){s.default.$vux.loading.hide(),o(e)})})},t.getUserNews=function(e){var t=e.rootState,n=e.commit;return new i.default(function(e,o){(0,d.default)({method:"get",url:"message/new",params:{token:t.common.user.token}}).then(function(t){n(h.USER_NEW_MESSAGE,t.data.data),e(t)})})},t.setHeadImg=function(e,t){(0,e.commit)(h.USERPHOTO_SET,t)},t.uploadHeadImg=function(e,t){var n=e.rootState,o=e.commit,u=e.dispatch;return s.default.$vux.loading.show({text:"请稍候"}),new i.default(function(e,a){(0,d.default)({method:"post",url:"user/headImg",data:{img:t.img,token:n.common.user.token}}).then(function(t){o(h.USERPHOTO_POST,t.data.data),u("getUserInfo"),s.default.$vux.loading.hide(),e(t)}).catch(function(e){s.default.$vux.loading.hide(),a(e)})})},t.getSwiperInfo=function(e){var t=e.rootState,n=e.commit;return new i.default(function(e,o){(0,d.default)({method:"get",url:"swiper",params:{id:t.route.params.id}}).then(function(t){n(h.SWIPER_INFO,t.data.data),e(t)})})},t.swiperInfoClear=function(e){(0,e.commit)(h.SWIPER_INFO,{title:"",article:""})}},239:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var u,a=n(211),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=n(142),c=o(i),s=n(238),l=o(s),d={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{version:"",headImg:"",bufferImg:"",name:"",school:"",subjectId:"",sex:"",mobile:"",classes:[],swiper:[{}],token:localStorage.getItem("token")}},f={Path:function(e,t,n){return n.route.path},Query:function(e,t,n){return n.route.query},Params:function(e,t,n){return n.route.params},Route:function(e,t,n){return n.route},User:function(e){return e.user},News:function(e){return e.news},SwiperInfo:function(e){return e.article},System:function(e){return e.system}},h=(u={},(0,r.default)(u,c.USERINFO,function(e,t){e.user.headImg=t.headImg,e.user.name=t.name,e.user.subjectId=t.subjectId,e.user.mobile=t.mobile,e.user.school=t.school,e.user.sex=t.sex,e.user.swiper=t.swiper,e.user.classes=t.classes,e.user.version=t.version}),(0,r.default)(u,c.USERPHOTO_POST,function(e,t){e.user.headImg=t.headImg}),(0,r.default)(u,c.USERPHOTO_SET,function(e,t){e.user.bufferImg=t}),(0,r.default)(u,c.USER_TOKEN,function(e,t){e.user.token=t,localStorage.setItem("token",t)}),(0,r.default)(u,c.USER_NEW_MESSAGE,function(e,t){e.news.classes=t.classes,e.news.correct=t.correct,e.news.system=t.system}),(0,r.default)(u,c.SWIPER_INFO,function(e,t){e.article.title=t.title,e.article.content=t.content}),u);t.default={state:d,getters:f,mutations:h,actions:l}},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/correct/:grade/:subjectId/:id",name:"correct",component:function(e){return n.e(38).then(function(){return e(n(542))}.bind(null,n)).catch(n.oe)}}},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/example/:type/:subjectId/:grade/:id",name:"example",component:function(e){return n.e(42).then(function(){return e(n(543))}.bind(null,n)).catch(n.oe)}}},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/homework",component:function(e){return n.e(89).then(function(){return e(n(546))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"homework",component:function(e){return n.e(6).then(function(){return e(n(545))}.bind(null,n)).catch(n.oe)}},{path:"class/:index/:id",name:"homework_class",component:function(e){return n.e(37).then(function(){return e(n(544))}.bind(null,n)).catch(n.oe)}},{path:"publish/content",name:"homework_publish_content",component:function(e){return n.e(24).then(function(){return e(n(548))}.bind(null,n)).catch(n.oe)}},{path:"publish/audio",name:"homework_publish_audio",component:function(e){return n.e(17).then(function(){return e(n(547))}.bind(null,n)).catch(n.oe)}},{path:"publish/image",name:"homework_publish_image",component:function(e){return n.e(18).then(function(){return e(n(549))}.bind(null,n)).catch(n.oe)}},{path:"publish/photo",name:"homework_publish_photo",component:function(e){return n.e(79).then(function(){return e(n(550))}.bind(null,n)).catch(n.oe)}}]}},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/invite",component:function(e){return n.e(88).then(function(){return e(n(552))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"invite",component:function(e){return n.e(52).then(function(){return e(n(551))}.bind(null,n)).catch(n.oe)}},{path:"list",name:"invite_list",component:function(e){return n.e(56).then(function(){return e(n(553))}.bind(null,n)).catch(n.oe)}}]}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/login",component:function(e){return n.e(83).then(function(){return e(n(556))}.bind(null,n)).catch(n.oe)},children:[{path:"/",component:function(e){return n.e(43).then(function(){return e(n(557))}.bind(null,n)).catch(n.oe)}},{path:"/forget",component:function(e){return n.e(16).then(function(){return e(n(554))}.bind(null,n)).catch(n.oe)}},{path:"/register",component:function(e){return n.e(15).then(function(){return e(n(558))}.bind(null,n)).catch(n.oe)}},{path:"/info",component:function(e){return n.e(12).then(function(){return e(n(555))}.bind(null,n)).catch(n.oe)}},{path:"/resetPassword",component:function(e){return n.e(14).then(function(){return e(n(559))}.bind(null,n)).catch(n.oe)}},{path:"/setPassword",component:function(e){return n.e(13).then(function(){return e(n(560))}.bind(null,n)).catch(n.oe)}}]}},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/message",component:function(e){return n.e(82).then(function(){return e(n(564))}.bind(null,n)).catch(n.oe)},redirect:"/message/",children:[{path:"/",component:function(e){return n.e(62).then(function(){return e(n(563))}.bind(null,n)).catch(n.oe)}},{path:"correct",component:function(e){return n.e(76).then(function(){return e(n(562))}.bind(null,n)).catch(n.oe)}},{path:"system",component:function(e){return n.e(75).then(function(){return e(n(565))}.bind(null,n)).catch(n.oe)}},{path:"class",component:function(e){return n.e(77).then(function(){return e(n(561))}.bind(null,n)).catch(n.oe)}}]}},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/myDownload",component:function(e){return n.e(87).then(function(){return e(n(573))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"myDownload",component:function(e){return n.e(69).then(function(){return e(n(572))}.bind(null,n)).catch(n.oe)}},{path:"assemble",name:"myDownloadAssemble",component:function(e){return n.e(5).then(function(){return e(n(566))}.bind(null,n)).catch(n.oe)}},{path:"assemble/:id",name:"myDownloadAssemble_detail",component:function(e){return n.e(50).then(function(){return e(n(567))}.bind(null,n)).catch(n.oe)}},{path:"camera",name:"myDownloadCamera",component:function(e){return n.e(4).then(function(){return e(n(568))}.bind(null,n)).catch(n.oe)}},{path:"camera/:id",name:"myDownloadCamera_detail",component:function(e){return n.e(34).then(function(){return e(n(569))}.bind(null,n)).catch(n.oe)}},{path:"good",name:"myDownloadGood",component:function(e){return n.e(3).then(function(){return e(n(570))}.bind(null,n)).catch(n.oe)}},{path:"good/:id",name:"myDownloadGood_detail",component:function(e){return n.e(49).then(function(){return e(n(571))}.bind(null,n)).catch(n.oe)}},{path:"remember",name:"myDownloadRemember",component:function(e){return n.e(2).then(function(){return e(n(574))}.bind(null,n)).catch(n.oe)}},{path:"remember/:id",name:"myDownloadRemember_detail",component:function(e){return n.e(46).then(function(){return e(n(575))}.bind(null,n)).catch(n.oe)}}]}},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/class",component:function(e){return n.e(81).then(function(){return e(n(580))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"class",component:function(e){return n.e(60).then(function(){return e(n(579))}.bind(null,n)).catch(n.oe)}},{path:"add",name:"class_add",component:function(e){return n.e(29).then(function(){return e(n(576))}.bind(null,n)).catch(n.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(e){return n.e(9).then(function(){return e(n(577))}.bind(null,n)).catch(n.oe)}},{path:"update/name/:code/:name",name:"class_update_name",component:function(e){return n.e(28).then(function(){return e(n(581))}.bind(null,n)).catch(n.oe)}},{path:"classmate/update/:code/:name",name:"class_classmate_update",component:function(e){return n.e(39).then(function(){return e(n(578))}.bind(null,n)).catch(n.oe)}}]}},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/points",component:function(e){return n.e(86).then(function(){return e(n(584))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"points",component:function(e){return n.e(45).then(function(){return e(n(583))}.bind(null,n)).catch(n.oe)}},{path:"earn",name:"points_earn",component:function(e){return n.e(55).then(function(){return e(n(582))}.bind(null,n)).catch(n.oe)}},{path:"rask",name:"points_rask",component:function(e){return n.e(54).then(function(){return e(n(586))}.bind(null,n)).catch(n.oe)}},{path:"list",name:"points_list",component:function(e){return n.e(51).then(function(){return e(n(585))}.bind(null,n)).catch(n.oe)}}]}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/settings",component:function(e){return n.e(93).then(function(){return e(n(589))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"settings",component:function(e){return n.e(27).then(function(){return e(n(587))}.bind(null,n)).catch(n.oe)}},{path:"info",name:"settings_info",component:function(e){return n.e(68).then(function(){return e(n(588))}.bind(null,n)).catch(n.oe)}},{path:"update",name:"settings_update",component:function(e){return n.e(10).then(function(){return e(n(592))}.bind(null,n)).catch(n.oe)}},{path:"photo",name:"settings_photo",component:function(e){return n.e(80).then(function(){return e(n(590))}.bind(null,n)).catch(n.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(e){return n.e(31).then(function(){return e(n(591))}.bind(null,n)).catch(n.oe)}}]}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"errorClass/class",name:"errorClass",component:function(e){return n.e(63).then(function(){return e(n(594))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/chapter/:classCode/:name",name:"errorClassChapter",component:function(e){return n.e(40).then(function(){return e(n(593))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/chapter/options/:name/:classCode",name:"errorClassOptions",component:function(e){return n.e(32).then(function(){return e(n(595))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error",component:function(e){return n.e(70).then(function(){return e(n(601))}.bind(null,n)).catch(n.oe)},children:[{path:"camera/:classCode/:chapterId/:name",name:"errorClassCamera",component:function(e){return n.e(20).then(function(){return e(n(596))}.bind(null,n)).catch(n.oe)}},{path:"remember/:classCode/:chapterId/:name",name:"errorClassRemember",component:function(e){return n.e(19).then(function(){return e(n(602))}.bind(null,n)).catch(n.oe)}},{path:"good/:classCode/:chapterId/:name",name:"errorClassGood",component:function(e){return n.e(36).then(function(){return e(n(598))}.bind(null,n)).catch(n.oe)}}]},{path:"errorClass/error/remember/assemble/options",name:"errorClassRemember_options",component:function(e){return n.e(71).then(function(){return e(n(604))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/good/assemble/options",name:"errorClassGood_options",component:function(e){return n.e(66).then(function(){return e(n(600))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/remember/assemble/:classCode",name:"errorClassRemember_assemble",component:function(e){return n.e(7).then(function(){return e(n(603))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/good/assemble/:classCode",name:"errorClassGood_assemble",component:function(e){return n.e(11).then(function(){return e(n(599))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/camera/assemble/:classCode",name:"errorClassCamera_assemble",component:function(e){return n.e(8).then(function(){return e(n(597))}.bind(null,n)).catch(n.oe)}}]},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"errorClassmate",name:"errorClassmate",component:function(e){return n.e(85).then(function(){return e(n(607))}.bind(null,n)).catch(n.oe)},redirect:"errorClassmate/",children:[{path:"/",name:"errorClassmate_index",component:function(e){return n.e(30).then(function(){return e(n(605))}.bind(null,n)).catch(n.oe)}},{path:"list/:name/:studentId",name:"errorClassmate_list",component:function(e){return n.e(0).then(function(){return e(n(608))}.bind(null,n)).catch(n.oe)}},{path:"comment/:studentId/:wbeid/:chapterId",name:"errorClassmate_comment",component:function(e){return n.e(41).then(function(){return e(n(606))}.bind(null,n)).catch(n.oe)}}]}},252:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(144),a=o(u),r=n(250),i=o(r),c=n(251),s=o(c);t.default=[{path:"/statistics",component:function(e){return n.e(94).then(function(){return e(n(610))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"statistics",component:function(e){return n.e(67).then(function(){return e(n(609))}.bind(null,n)).catch(n.oe)}}].concat((0,a.default)(i.default),[s.default])}]},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/workbook",component:function(e){return n.e(84).then(function(){return e(n(617))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"workbook",component:function(e){return n.e(22).then(function(){return e(n(616))}.bind(null,n)).catch(n.oe)}},{path:"chapter/:name/:workbookId",name:"workbook_chapter",component:function(e){return n.e(53).then(function(){return e(n(611))}.bind(null,n)).catch(n.oe)}},{path:"exercise",component:function(e){return n.e(59).then(function(){return e(n(613))}.bind(null,n)).catch(n.oe)},children:[{path:"number/:name/:chapterId/",name:"workbook_exercise_number",component:function(e){return n.e(72).then(function(){return e(n(614))}.bind(null,n)).catch(n.oe)}},{path:"photo/:name/:chapterId/",name:"workbook_exercise_photo",component:function(e){return n.e(35).then(function(){return e(n(615))}.bind(null,n)).catch(n.oe)}}]},{path:"exercise/error/:chapterId/:wbeid/",name:"workbook_exercise_error",component:function(e){return n.e(21).then(function(){return e(n(612))}.bind(null,n)).catch(n.oe)}}]}},254:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(53),a=o(u),r=n(205),i=o(r),c=n(204),s=o(c),l=n(91),d=o(l),f=n(197),h=o(f),m=n(201),p=o(m),_=n(200),b=o(_),w=n(199),v=o(w),g=n(202),x=o(g),y=n(198),S=o(y),O=n(206),k=o(O);n(203),a.default.use(p.default),a.default.use(i.default,{attempt:3}),a.default.use(b.default),a.default.use(v.default),a.default.use(S.default),s.default.attach(document.body),a.default.config.productionTip=!1,a.default.filter("ymd",function(e){return(0,x.default)(new Date(Number(e+"000")),"YYYY-MM-DD")}),a.default.filter("ymdhms",function(e){return(0,x.default)(new Date(Number(e+"000")),"YYYY-MM-DD HH:mm:ss")}),a.default.filter("subject",function(e){switch(e){case 2:return"数学";case 7:return"物理";case 8:return"化学"}}),a.default.filter("errorType",function(e){switch(e){case-1:return"错误类型";case 1:return"审题不清";case 2:return"概念模糊";case 3:return"思路不清";case 4:return"运算错误";case 5:return"粗心大意";case 6:return"方法不对";case 7:return"时间不够";case 0:return"我不知道"}}),document.addEventListener("plusready",function(){var e=null;plus.navigator.setStatusBarBackground("#4cc0be"),setTimeout(function(){var e=plus.audio.createPlayer("233.mp3");e.setRoute(plus.audio.ROUTE_SPEAKER),e.play(function(){},function(e){})},500),plus.key.addEventListener("backbutton",function(){"/index"===d.default.state.route.path||"/bag"===d.default.state.route.path||"/login"===d.default.state.route.path||"/user"===d.default.state.route.path?e?(new Date).getTime()-e<1e3&&plus.runtime.quit():(e=(new Date).getTime(),a.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1e3,position:"bottom"}),setTimeout(function(){e=null},1e3)):history.back()},!1)});var C=new a.default({router:h.default,store:d.default,render:function(e){return e(k.default)}}).$mount("#app-box");t.default=C},255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/",component:function(e){return n.e(65).then(function(){return e(n(621))}.bind(null,n)).catch(n.oe)},redirect:function(e){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(e){return n.e(48).then(function(){return e(n(620))}.bind(null,n)).catch(n.oe)}},{path:"bag",name:"bag",component:function(e){return n.e(44).then(function(){return e(n(619))}.bind(null,n)).catch(n.oe)}},{path:"user",name:"user",component:function(e){return n.e(61).then(function(){return e(n(622))}.bind(null,n)).catch(n.oe)}}]},{path:"/article/:id",component:function(e){return n.e(74).then(function(){return e(n(618))}.bind(null,n)).catch(n.oe)}}]},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(196),u=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"alert",components:{XDialog:u.default},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(e){this.showValue=e},showValue:function(e){this.$emit("input",e)}}}},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(196),u=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"confirm",components:{XDialog:u.default},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(e){this.showValue=e},showValue:function(e){var t=this;this.$emit("input",e),e&&(this.showInput&&(this.msg="",setTimeout(function(){t.$refs.input&&t.$refs.input.focus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(e){this.msg=e},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(e){this.$emit("update:show",e)}}}},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(263),u=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"toast",mixins:[u.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(e){var t=this;e&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.show=!1,t.$emit("input",!1),t.$emit("on-hide"),t.fixSafariOverflowScrolling("touch")},this.time))},value:function(e){this.show=e}}}},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(262),u=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={mixins:[u.default],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(e){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},watch:{show:function(e){this.$emit("update:show",e),this.$emit(e?"on-show":"on-hide"),e?this.addModalClassName():this.removeModalClassName()}},methods:{hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},505:function(e,t){},506:function(e,t){},507:function(e,t){},508:function(e,t){},509:function(e,t){},510:function(e,t){},511:function(e,t){},515:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":e.maskTransition,"dialog-transition":e.dialogTransition,"hide-on-blur":e.hideOnBlur,"mask-z-index":e.maskZIndex},on:{"on-hide":function(t){e.$emit("on-hide")},"on-show":function(t){e.$emit("on-show")}},model:{value:e.showValue,callback:function(t){e.showValue=t},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"weui-dialog__bd"},[e._t("default",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],2),e._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:e._onHide}},[e._v(e._s(e.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},516:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowMask&&e.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),e._v(" "),n("transition",{attrs:{name:e.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-toast",class:e.toastClass,style:{width:e.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==e.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),e._v(" "),e.text?n("p",{staticClass:"weui-toast__content",style:e.style,domProps:{innerHTML:e._s(e.text)}}):n("p",{staticClass:"weui-toast__content",style:e.style},[e._t("default")],2)])])],1)},staticRenderFns:[]}},517:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),e._v(" "),n("div",{staticClass:"weui-toast",style:{position:e.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),e._v(" "),n("p",{staticClass:"weui-toast__content"},[e._v(e._s(e.text||"加载中")),e._t("default")],2)])])])},staticRenderFns:[]}},518:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-x-dialog"},[n("transition",{attrs:{name:e.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-mask",style:e.maskStyle,on:{click:e.hide}})]),e._v(" "),n("transition",{attrs:{name:e.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:e.dialogClass,style:e.dialogStyle},[e._t("default")],2)])],1)},staticRenderFns:[]}},519:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-dialog",{attrs:{dialogClass:"android"===e.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":e.maskTransition,"dialog-transition":"android"===e.theme?"vux-fade":e.dialogTransition,"hide-on-blur":e.hideOnBlur,"mask-z-index":e.maskZIndex},on:{"on-hide":function(t){e.$emit("on-hide")}},model:{value:e.showValue,callback:function(t){e.showValue=t},expression:"showValue"}},[e.title?n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[e._v(e._s(e.title))])]):e._e(),e._v(" "),e.showInput?n("div",{staticClass:"vux-prompt"},[n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:e.placeholder},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}},"input",e.inputAttrs,!1))]):n("div",{staticClass:"weui-dialog__bd"},[e._t("default",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],2),e._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:e._onCancel}},[e._v(e._s(e.cancelText||"取消"))]),e._v(" "),n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:e._onConfirm}},[e._v(e._s(e.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},520:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},524:function(e,t,n){n(506);var o=n(52)(n(256),n(515),null,null);e.exports=o.exports},525:function(e,t,n){n(508);var o=n(52)(n(258),n(517),null,null);e.exports=o.exports},91:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(53),a=o(u),r=n(208),i=o(r),c=n(239),s=o(c);a.default.use(i.default),t.default=new i.default.Store({modules:{common:s.default}})}},[254]);