(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platformList-index"],{"241d":function(t,n,a){"use strict";var e=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("5530")),r=a("26cb"),o={data:function(){return{type:null}},computed:(0,i.default)({},(0,r.mapState)("platform",["platformList"])),onLoad:function(t){getApp().getPlatformListRequest(),this.type=t.type,uni.setNavigationBarTitle({title:"添加账号"})},methods:{handleClick:function(t){if("add"===this.type){var n={url:t.h5AuthUrl,data:{}};this.$store.commit("system/set_webviewParams",n),uni.navigateTo({url:"/pages/webview/index"})}else"select"===this.type&&(this.$store.commit("platform/set_platform",t),uni.navigateBack())}}};n.default=o},"71b4":function(t,n,a){"use strict";a.r(n);var e=a("cf581"),i=a("877e");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);a("76fa");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"2a279f50",null,!1,e["a"],o);n["default"]=c.exports},"76fa":function(t,n,a){"use strict";var e=a("db5d"),i=a.n(e);i.a},"877e":function(t,n,a){"use strict";a.r(n);var e=a("241d"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},9480:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-2a279f50]{background-color:#fff;padding:%?44?% %?24?%;box-sizing:border-box;overflow:auto}.container .content[data-v-2a279f50]{display:flex;flex-wrap:wrap}.container .content .platform-item[data-v-2a279f50]{display:flex;flex-direction:column;align-items:center;margin-right:%?86?%;width:%?110?%;margin-bottom:%?44?%}.container .content .platform-item[data-v-2a279f50]:nth-child(4n){margin-right:0}.container .content .platform-item .img[data-v-2a279f50]{width:%?90?%;height:%?90?%;border-radius:50%;margin-bottom:%?8?%}.container .content .platform-item .name[data-v-2a279f50]{font-size:%?24?%;color:#2f2f2f}',""]),t.exports=n},cf581:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"content"},t._l(t.platformList,(function(n){return a("v-uni-view",{key:n.id,staticClass:"platform-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick(n)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:n.imgUrl}}),a("v-uni-text",{staticClass:"name line-1"},[t._v(t._s(n.title))])],1)})),1)],1)},r=[]},db5d:function(t,n,a){var e=a("9480");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("4f8a2375",e,!0,{sourceMap:!1,shadowMode:!1})}}]);