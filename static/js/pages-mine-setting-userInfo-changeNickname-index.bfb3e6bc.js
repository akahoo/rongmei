(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setting-userInfo-changeNickname-index"],{"00b6":function(e,t,n){"use strict";var l;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"my-button-gradient",style:{width:e.width,height:e.height,background:e.bgColor,borderRadius:e.radius,fontSize:e.fontSize,color:e.fontColor},attrs:{"hover-class":"hover-class","hover-stay-time":"100"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default")],2)},c=[]},"14c5":function(e,t,n){var l=n("24fb");t=l(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-cell-list[data-v-28cf63ec]{padding-left:%?24?%;box-sizing:border-box}.my-cell-list .my-cell-list-con[data-v-28cf63ec]{border-bottom:%?1?% solid #eee;box-sizing:border-box;display:flex;align-items:center;font-size:%?32?%}.my-cell-list .my-cell-list-con .label[data-v-28cf63ec]{color:#777;margin-right:%?40?%}.my-cell-list .my-cell-list-con .label .required[data-v-28cf63ec]{color:red}.my-cell-list .my-cell-list-con .cell-con[data-v-28cf63ec]{flex:1;padding-right:%?24?%;display:flex;align-items:center}.my-cell-list .my-cell-list-con .cell-con .inp[data-v-28cf63ec]{flex:1;margin-right:%?20?%}.my-cell-list .my-cell-list-con .cell-con .select[data-v-28cf63ec]{flex:1}.my-cell-list .my-cell-list-con .cell-con .number[data-v-28cf63ec]{flex:1;display:flex;align-items:center}.my-cell-list .my-cell-list-con .cell-con .number .number-inp[data-v-28cf63ec]{flex:1;margin-right:%?20?%}.my-cell-list .my-cell-list-con .cell-con .number .suffix[data-v-28cf63ec]{margin-left:%?20?%}.my-cell-list .my-cell-list-con .cell-con .date-icon[data-v-28cf63ec]{color:#999;font-size:%?30?%;margin-right:%?16?%}.my-cell-list .my-cell-list-con .cell-con .date[data-v-28cf63ec]{flex:1;display:flex}.my-cell-list .my-cell-list-con .cell-con .drop[data-v-28cf63ec]{font-size:%?28?%;color:#999}.my-cell-list .my-cell-list-con .cell-con .clear.iconfont[data-v-28cf63ec]{color:#ccc}.my-cell-list .my-cell-list-con .cell-con .placeholder-class[data-v-28cf63ec]{color:#b3b5b9}',""]),e.exports=t},1891:function(e,t,n){"use strict";n.r(t);var l=n("4690"),a=n.n(l);for(var c in l)"default"!==c&&function(e){n.d(t,e,(function(){return l[e]}))}(c);t["default"]=a.a},"252e":function(e,t,n){var l=n("c108");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var a=n("4f06").default;a("c8217af4",l,!0,{sourceMap:!1,shadowMode:!1})},"37ff":function(e,t,n){"use strict";var l=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=l(n("1da1")),c={data:function(){return{form:{nickname:""}}},methods:{changeNicknameRequest:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$api.changeNickname(e);case 3:l=n.sent,l&&1==l.code&&(getApp().getUserInfoRequest(),uni.navigateBack()),n.next=9;break;case 7:n.prev=7,n.t0=n["catch"](0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},handleToSetNewMobile:function(){this.form.nickname&&this.changeNicknameRequest(this.form)}}};t.default=c},4690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={name:"my-button-gradient",props:{width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},bgColor:{type:String,default:""},radius:{type:String,default:"96rpx"},fontSize:{type:String,default:"32rpx"},fontColor:{type:String,default:"#fff"}},methods:{handleClick:function(e){this.$emit("click",e)}}};t.default=l},"4e75":function(e,t,n){var l=n("24fb");t=l(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-279f9040]{background-color:#fff;box-sizing:border-box;padding-top:%?6?%}.container .comfirm-btn[data-v-279f9040]{margin:%?254?% %?32?% 0}',""]),e.exports=t},6209:function(e,t,n){var l=n("14c5");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var a=n("4f06").default;a("01ad6298",l,!0,{sourceMap:!1,shadowMode:!1})},"759e":function(e,t,n){"use strict";n.r(t);var l=n("37ff"),a=n.n(l);for(var c in l)"default"!==c&&function(e){n.d(t,e,(function(){return l[e]}))}(c);t["default"]=a.a},"79ed":function(e,t,n){"use strict";n.r(t);var l=n("c388"),a=n("759e");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("d62c");var i,s=n("f0c5"),r=Object(s["a"])(a["default"],l["b"],l["c"],!1,null,"279f9040",null,!1,l["a"],i);t["default"]=r.exports},9009:function(e,t,n){"use strict";n.r(t);var l=n("00b6"),a=n("1891");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("fb45");var i,s=n("f0c5"),r=Object(s["a"])(a["default"],l["b"],l["c"],!1,null,"7e6c3f39",null,!1,l["a"],i);t["default"]=r.exports},ab6c:function(e,t,n){"use strict";var l=n("6209"),a=n.n(l);a.a},c108:function(e,t,n){var l=n("24fb");t=l(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-button-gradient[data-v-7e6c3f39]{text-align:center;display:flex;align-items:center;justify-content:center;background:linear-gradient(140deg,#fb2d1a,#ff553f);color:#fff;font-size:%?32?%}.my-button-gradient.hover-class[data-v-7e6c3f39]{opacity:.8}',""]),e.exports=t},c118:function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={name:"my-cell-list",props:{type:{type:String,default:"text"},label:{type:String,default:""},required:{type:Boolean,default:!1},value:{type:[String,Number],default:""},placeholder:{type:String,default:""},maxlength:{type:[String,Number],default:140},height:{type:String,default:"112rpx"},suffix:{type:String,default:null},disabled:{type:Boolean,default:!1},labelColor:{type:String,default:""}},model:{prop:"value",event:"change"},methods:{handleInput:function(e){this.$emit("change",e.detail.value)},handleSelect:function(e){this.$emit("select",e)},handleClear:function(){this.$emit("change",null)},handleBlur:function(e){this.$emit("blur",e)}}};t.default=l},c388:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l}));var l={myCellList:n("d1e6").default,myButtonGradient:n("9009").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("my-cell-list",{attrs:{label:"昵称",required:!0},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}}),n("my-button-gradient",{staticClass:"comfirm-btn",style:{opacity:e.form.nickname?1:.5},attrs:{bgColor:"linear-gradient(90deg, #FF4D6A 0%, #FA2C19 100%)",width:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleToSetNewMobile.apply(void 0,arguments)}}},[e._v("完成")])],1)},c=[]},ceac:function(e,t,n){"use strict";n.r(t);var l=n("c118"),a=n.n(l);for(var c in l)"default"!==c&&function(e){n.d(t,e,(function(){return l[e]}))}(c);t["default"]=a.a},d1e6:function(e,t,n){"use strict";n.r(t);var l=n("d9ad"),a=n("ceac");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("ab6c");var i,s=n("f0c5"),r=Object(s["a"])(a["default"],l["b"],l["c"],!1,null,"28cf63ec",null,!1,l["a"],i);t["default"]=r.exports},d51e:function(e,t,n){var l=n("4e75");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var a=n("4f06").default;a("2c63257e",l,!0,{sourceMap:!1,shadowMode:!1})},d62c:function(e,t,n){"use strict";var l=n("d51e"),a=n.n(l);a.a},d9ad:function(e,t,n){"use strict";var l;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"my-cell-list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSelect.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"my-cell-list-con",style:{height:e.height}},[e.label?n("v-uni-view",{staticClass:"label"},[e.required?n("v-uni-text",{staticClass:"required"},[e._v("*")]):e._e(),n("v-uni-text",{style:{color:e.labelColor},attrs:{decode:!0}},[e._v(e._s(e.label))])],1):e._e(),n("v-uni-view",{staticClass:"cell-con"},["text"===e.type?[e.disabled?[n("v-uni-view",{staticClass:"select"},[e.value?n("v-uni-text",{staticClass:"value"},[e._v(e._s(e.value))]):n("v-uni-text",{staticClass:"placeholder-class"},[e._v(e._s(e.placeholder))])],1)]:[n("v-uni-input",{staticClass:"inp",attrs:{value:e.value,placeholder:e.placeholder,maxlength:e.maxlength,disabled:e.disabled,"placeholder-class":"placeholder-class",onkeypress:"javascript:if(event.keyCode == 32)event.returnValue = false"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBlur.apply(void 0,arguments)}}}),e.value?n("v-uni-text",{staticClass:"clear iconfont icon-a-fenqishanchu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClear.apply(void 0,arguments)}}}):e._e()]]:e._e(),"select"===e.type?[n("v-uni-view",{staticClass:"select"},[e.value?n("v-uni-text",{staticClass:"value"},[e._v(e._s(e.value))]):n("v-uni-text",{staticClass:"placeholder-class"},[e._v(e._s(e.placeholder))])],1),n("v-uni-text",{staticClass:"drop iconfont icon-jinrujiantou2"})]:e._e(),"number"===e.type?[e.disabled?[n("v-uni-view",{staticClass:"select"},[e.value?n("v-uni-text",{staticClass:"value"},[e._v(e._s(e.value))]):n("v-uni-text",{staticClass:"placeholder-class"},[e._v(e._s(e.placeholder))])],1)]:[n("v-uni-view",{staticClass:"number"},[n("v-uni-input",{staticClass:"number-inp",attrs:{value:e.value,type:"number",placeholder:e.placeholder,"placeholder-class":"placeholder-class",onkeypress:"javascript:if(event.keyCode == 32)event.returnValue = false"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBlur.apply(void 0,arguments)}}}),e.value?n("v-uni-text",{staticClass:"clear iconfont icon-a-fenqishanchu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClear.apply(void 0,arguments)}}}):e._e(),e.suffix?n("v-uni-text",{staticClass:"suffix"},[e._v(e._s(e.suffix))]):e._e()],1)]]:e._e(),"date"===e.type?[n("v-uni-text",{staticClass:"date-icon iconfont icon-xuanzeriqi"}),n("v-uni-view",{staticClass:"date"},[e.value?n("v-uni-text",{staticClass:"value"},[e._v(e._s(e.value))]):n("v-uni-text",{staticClass:"placeholder-class"},[e._v(e._s(e.placeholder))])],1),e.value?n("v-uni-text",{staticClass:"clear iconfont icon-a-fenqishanchu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClear.apply(void 0,arguments)}}}):e._e()]:e._e(),"password"===e.type?[n("v-uni-input",{staticClass:"inp",attrs:{value:e.value,type:"password",placeholder:e.placeholder,maxlength:e.maxlength,"placeholder-class":"placeholder-class",onkeypress:"javascript:if(event.keyCode == 32)event.returnValue = false"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBlur.apply(void 0,arguments)}}}),e.value?n("v-uni-text",{staticClass:"clear iconfont icon-a-fenqishanchu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClear.apply(void 0,arguments)}}}):e._e()]:e._e()],2)],1)],1)},c=[]},fb45:function(e,t,n){"use strict";var l=n("252e"),a=n.n(l);a.a}}]);