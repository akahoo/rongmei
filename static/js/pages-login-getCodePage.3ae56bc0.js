(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-getCodePage"],{"00b6":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"my-button-gradient",style:{width:e.width,height:e.height,background:e.bgColor,borderRadius:e.radius,fontSize:e.fontSize,color:e.fontColor},attrs:{"hover-class":"hover-class","hover-stay-time":"100"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default")],2)},i=[]},"10d5":function(e,t,n){"use strict";n.r(t);var a=n("2fc1"),r=n("4aee");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("6390");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"1d0dc14a",null,!1,a["a"],o);t["default"]=c.exports},1891:function(e,t,n){"use strict";n.r(t);var a=n("4690"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"252e":function(e,t,n){var a=n("c108");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("c8217af4",a,!0,{sourceMap:!1,shadowMode:!1})},"2fc1":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={myButtonGradient:n("9009").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"welcome"},[e._v(e._s("register"===e.loginType?"欢迎注册元拍":"找回密码"))]),n("v-uni-view",{staticClass:"title"},[e._v("手机号")]),n("v-uni-view",{staticClass:"inp-wrapper"},[n("v-uni-text",{staticClass:"prefix"},[e._v("+86")]),n("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),"register"===e.loginType?n("v-uni-view",{staticClass:"agreement-wrapper"},[n("v-uni-label",{staticClass:"radio",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChangeRadioState.apply(void 0,arguments)}}},[n("v-uni-radio",{attrs:{checked:e.radioState,color:"#FB2D1A"}})],1),n("v-uni-view",{staticClass:"argeement"},[e._v("我已阅读并同意"),n("v-uni-text",[e._v("《用户协议》")]),e._v("和"),n("v-uni-text",[e._v("《隐私政策》")]),e._v("且确认已经满18岁")],1)],1):e._e(),"register"===e.loginType?n("my-button-gradient",{style:{opacity:e.phone&&e.radioState?1:.5},attrs:{bgColor:"linear-gradient(90deg, #FF4D6A 0%, #FA2C19 100%)"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleToCheckCode.apply(void 0,arguments)}}},[e._v("获取验证码")]):e._e(),"forgetPassword"===e.loginType?n("my-button-gradient",{style:{marginTop:"128rpx",opacity:e.phone?1:.5},attrs:{bgColor:"linear-gradient(90deg, #FF4D6A 0%, #FA2C19 100%)",width:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleToCheckCode.apply(void 0,arguments)}}},[e._v("下一步：获取验证码")]):e._e()],1)},i=[]},4690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"my-button-gradient",props:{width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},bgColor:{type:String,default:""},radius:{type:String,default:"96rpx"},fontSize:{type:String,default:"32rpx"},fontColor:{type:String,default:"#fff"}},methods:{handleClick:function(e){this.$emit("click",e)}}};t.default=a},"4aee":function(e,t,n){"use strict";n.r(t);var a=n("b3d1"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},6390:function(e,t,n){"use strict";var a=n("b764"),r=n.n(a);r.a},8708:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=a(n("1da1")),i=a(n("5530")),o=n("26cb"),s={data:function(){return{countDown:0,timer:0}},computed:(0,i.default)({},(0,o.mapState)("system",["loginType","loginForm"])),methods:{countDownFunc:function(e){var t=this;clearInterval(this.timer),this.countDown=e,this.timer=setInterval((function(){if(t.countDown<=1)return t.countDown=0,void clearInterval(t.timer);t.countDown--}),1e3)},sendSmsRequest:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$api.sendSms(e);case 3:a=n.sent,a&&1==a.code&&(t.countDownFunc(60),uni.showToast({title:"发送成功",icon:"none"}),"login"!==t.loginType&&(t.$store.commit("system/set_loginForm",e),uni.navigateTo({url:"/pages/login/checkCode"}))),console.log(a),n.next=10;break;case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},checkSmsCodeRequest:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$api.checkSmsCode(e);case 3:a=n.sent,a&&1==a.code&&(t.$store.commit("system/set_loginForm",e),uni.navigateTo({url:"/pages/login/setPassword"})),console.log(a),n.next=10;break;case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},registerRequest:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$api.register(e);case 3:a=n.sent,a&&1==a.code&&(t.$store.commit("system/set_userinfo",a.data),uni.setStorageSync("token",a.data.token),uni.reLaunch({url:"/pages/index/index"})),console.log(a),n.next=10;break;case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},loginBySmsRequest:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,uni.showLoading({title:"加载中...",mask:!0}),n.next=4,t.$api.loginBySms(e);case 4:a=n.sent,uni.hideLoading(),a&&1==a.code&&(console.log(a),t.$store.commit("system/set_userinfo",a.data),uni.setStorageSync("token",a.data.token),uni.reLaunch({url:"/pages/index/index"})),console.log(a),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()},loginByPassRequest:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,uni.showLoading({title:"加载中...",mask:!0}),n.next=4,t.$api.loginByPass(e);case 4:a=n.sent,uni.hideLoading(),a&&1==a.code&&(console.log(a),t.$store.commit("system/set_userinfo",a.data),uni.setStorageSync("token",a.data.token),uni.reLaunch({url:"/pages/index/index"})),console.log(a),n.next=12;break;case 10:n.prev=10,n.t0=n["catch"](0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}};t.default=s},9009:function(e,t,n){"use strict";n.r(t);var a=n("00b6"),r=n("1891");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("fb45");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"7e6c3f39",null,!1,a["a"],o);t["default"]=c.exports},b3d1:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("8708")),i={mixins:[r.default],data:function(){return{phone:"",radioState:!1}},methods:{handleChangeRadioState:function(){this.radioState=!this.radioState},checkPhone:function(e){return/^1[34578]\d{9}$/.test(e)},handleToCheckCode:function(){this.phone?this.checkPhone(this.phone)?"register"!==this.loginType||this.radioState?this.sendSmsRequest({mobile:this.phone}):uni.showToast({title:"请勾选用户协议",icon:"none"}):uni.showToast({title:"请输入正确的手机号",icon:"none"}):uni.showToast({title:"请输入手机号",icon:"none"})}}};t.default=i},b764:function(e,t,n){var a=n("d00c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("c4ff09fe",a,!0,{sourceMap:!1,shadowMode:!1})},c108:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-button-gradient[data-v-7e6c3f39]{text-align:center;display:flex;align-items:center;justify-content:center;background:linear-gradient(140deg,#fb2d1a,#ff553f);color:#fff;font-size:%?32?%}.my-button-gradient.hover-class[data-v-7e6c3f39]{opacity:.8}',""]),e.exports=t},d00c:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-1d0dc14a]{background-color:#fff;box-sizing:border-box;padding:%?82?% %?48?% 0}.container .welcome[data-v-1d0dc14a]{font-size:%?60?%;font-weight:500;color:#333;margin-bottom:%?116?%}.container .title[data-v-1d0dc14a]{font-size:%?32?%;color:#333;line-height:%?44?%}.container .inp-wrapper[data-v-1d0dc14a]{display:flex;align-items:center;height:%?120?%;box-sizing:border-box;padding:%?42?% 0 %?34?%;border-bottom:%?2?% solid #eee}.container .inp-wrapper .prefix[data-v-1d0dc14a]{font-size:%?32?%;color:#333;line-height:%?44?%;margin-right:%?70?%;padding-left:%?6?%}.container .agreement-wrapper[data-v-1d0dc14a]{display:flex;align-items:flex-start;margin:%?56?% 0 %?52?%}.container .agreement-wrapper .argeement[data-v-1d0dc14a]{width:312px;height:40px;font-size:12px;font-weight:400;color:#909090;line-height:20px}.container .agreement-wrapper .argeement uni-text[data-v-1d0dc14a]{color:#7d91fe}.container .agreement-wrapper .radio[data-v-1d0dc14a]{margin-top:%?-2?%;-webkit-transform:scale(.5);transform:scale(.5)}',""]),e.exports=t},fb45:function(e,t,n){"use strict";var a=n("252e"),r=n.n(a);r.a}}]);