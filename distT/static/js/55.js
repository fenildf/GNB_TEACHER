webpackJsonp([55,63],{214:function(e,t){e.exports=' <div class="correctDetail vux-scroller-header-box"> <div style=height:46px> <x-header :left-options="{showBack: true}" style=position:fixed;left:0;top:0;width:100% class=vux-scroller-header>我要纠错 <a slot=right @click=_commit>提交</a> </x-header> </div> <div> <group title=纠错类型> <checker style="padding:.25rem .75rem 1rem" :value.sync=type :max=4 type=checkbox default-item-class=select-item selected-item-class=select-item-selected> <checker-item :value=0>答案错误</checker-item> <checker-item :value=1>解析不全</checker-item> <checker-item :value=2>题目超纲</checker-item> <checker-item :value=3>题型太老</checker-item> <checker-item :value=4>其他</checker-item> </checker> </group> <group title=纠错内容> <x-textarea :max=200 :rows=6 :value.sync=content placeholder=请简单描述纠错内容></x-textarea> </group> </div> </div> '},384:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),s=c(i),n=r(3),a=r(7),u=r(11),p=o(u);t.default={components:{XHeader:n.XHeader,XButton:n.XButton,Checker:n.Checker,CheckerItem:n.CheckerItem,XTextarea:n.XTextarea,Group:n.Group},methods:(0,s.default)({},(0,a.mapActions)(["postCorrect"]),{_commit:function(){var e=this;if(!this.type[0]&&"0"!=this.type[0])return void p.toast("请选择纠错类型");if(this.type.indexOf(4)>=0&&""==this.content)return void p.toast("请填写纠错内容");var t={content:this.content,type:this.type};this.postCorrect(t).then(function(){e.content="",e.type=[],history.back()})}}),data:function(){return{type:[],content:""}},computed:{id:function(){return this.$store.state.route.params.id},subejectId:function(){return this.$store.state.route.params.subjectId}}}},451:function(e,t,r){var o,c,i={};o=r(384),c=r(214),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;c&&(s.template=c),s.computed||(s.computed={}),Object.keys(i).forEach(function(e){var t=i[e];s.computed[e]=function(){return t}})}});