webpackJsonp([54,59],{221:function(t,e){t.exports=' <div class=createClass> <x-header :left-options="{showBack: true}"> 班级编辑 <a slot=right @click=_complete>完成</a> </x-header> <group> <x-input type=text name=name placeholder=请输入班级名称 keyboard=text :value.sync=name :max=6></x-input> </group> </div> '},383:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(4),u=a(r),s=o(3),p=o(5),c=o(8),i=n(c);e.default={components:{XHeader:s.XHeader,XInput:s.XInput,Group:s.Group,XButton:s.XButton,Confirm:s.Confirm,PopupPicker:s.PopupPicker,Cell:s.Cell},data:function(){return{name:""}},route:{data:function(t){this.name=this.classmate.name}},methods:(0,u.default)({},(0,p.mapActions)(["updateClass"]),{_complete:function(){var t=this;0==this.name.length?i.toast("请填写班级名称"):this.name.length>6?i.toast("班级名称最大6个字"):this.updateClass({name:this.name}).then(function(){t.name="",history.back()})}}),computed:(0,u.default)({},(0,p.mapGetters)(["classmate"]))}},447:function(t,e,o){var n,a,r={};n=o(383),a=o(221),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(u.template=a),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})}});