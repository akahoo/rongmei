(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-notice-index"],{"021a":function(e,t,n){"use strict";n.r(t);var i=n("56a5"),r=n("86ec");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("f654");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"36cd5df2",null,!1,i["a"],o);t["default"]=s.exports},"12b9":function(e,t,n){"use strict";var i=n("db13"),r=n.n(i);r.a},2763:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"my-image",style:{width:e.width,height:e.height,borderRadius:e.radius},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlePreview.apply(void 0,arguments)}}},[n("v-uni-image",{style:{width:"100%",height:"100%",borderRadius:e.radius},attrs:{src:e.url,mode:e.mode}})],1)},a=[]},3845:function(e,t,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("1da1")),a=i(n("df2a")),o={mixins:[a.default],data:function(){return{records:[],upOtion:{page:{num:0,size:20,time:null}}}},onShow:function(){var e;null===(e=this.mescroll)||void 0===e||e.resetUpScroll()},methods:{listArticleRequest:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var i,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$api.listArticle({pageNo:e.num,pageSize:e.size});case 3:i=n.sent,i&&i.code&&(r=i.data.records,a=i.data.total,t.mescroll.endBySize(r.length,a),1==e.num&&(t.records=[]),t.records=t.records.concat(r)),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),t.mescroll.endErr();case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},handleToNoticeDetail:function(e){uni.navigateTo({url:"/pages/home/notice/noticeDetail/index?id=".concat(e)})}}};t.default=o},"56a5":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={mescrollBody:n("e254").default,myImage:n("c48f").default,mescrollEmpty:n("29be").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("mescroll-body",{ref:"mescrollRef",staticClass:"scroll-wrapper",attrs:{up:e.upOtion},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.listArticleRequest.apply(void 0,arguments)}}},[e.records.length?[n("v-uni-view",{staticClass:"notice-wrapper"},[n("v-uni-view",{staticStyle:{padding:"26rpx 0 0 24rpx"}},e._l(e.records,(function(t,i){return n("v-uni-view",{key:i,staticClass:"notice-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleToNoticeDetail(t.id)}}},[n("v-uni-view",{staticClass:"notice-info"},[n("v-uni-view",{staticClass:"notice-title"},[e._v(e._s(t.title))]),n("v-uni-view",{staticClass:"notice-date"},[e._v(e._s(t.createTime))])],1),n("my-image",{attrs:{width:"110rpx",height:"110rpx",src:t.imgUrl}})],1)})),1)],1)]:e._e(),[n("mescroll-empty")]],2)],1)},a=[]},"81a0":function(e,t,n){var i=n("e6b9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("9d0de2a0",i,!0,{sourceMap:!1,shadowMode:!1})},8406:function(e,t,n){"use strict";n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"my-image",props:{src:{type:String,default:""},width:{type:String,default:"180rpx"},height:{type:String,default:"180rpx"},mode:{type:String,default:"aspectFill"},radius:{type:String,default:""},preview:{type:Boolean,default:!1}},computed:{url:function(){var e="";return e=this.src?this.src.indexOf("http")>-1?this.src:this.$imgUrl+this.src:"",e}},methods:{handlePreview:function(){this.preview&&uni.previewImage({urls:[this.url]})}}};t.default=i},"86ec":function(e,t,n){"use strict";n.r(t);var i=n("3845"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},a345:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-image[data-v-020fed4a]{display:flex;align-items:center;justify-content:center;overflow:hidden}',""]),e.exports=t},c48f:function(e,t,n){"use strict";n.r(t);var i=n("2763"),r=n("dc68");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("12b9");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"020fed4a",null,!1,i["a"],o);t["default"]=s.exports},db13:function(e,t,n){var i=n("a345");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("48b54526",i,!0,{sourceMap:!1,shadowMode:!1})},dc68:function(e,t,n){"use strict";n.r(t);var i=n("8406"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},e6b9:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-36cd5df2]{background-color:#fff;height:auto}.container .notice-wrapper .notice-item[data-v-36cd5df2]{display:flex;border-bottom:%?2?% solid #e4e4e4;padding:%?16?% %?24?% %?10?% 0}.container .notice-wrapper .notice-item .notice-info[data-v-36cd5df2]{flex:1;margin-right:%?58?%}.container .notice-wrapper .notice-item .notice-info .notice-title[data-v-36cd5df2]{height:%?80?%;line-height:%?40?%;font-size:%?28?%;color:#333;margin-bottom:%?22?%;text-align:left;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis}.container .notice-wrapper .notice-item .notice-info .notice-date[data-v-36cd5df2]{height:%?34?%;font-size:%?24?%;line-height:%?34?%;color:#999}',""]),e.exports=t},f654:function(e,t,n){"use strict";var i=n("81a0"),r=n.n(i);r.a}}]);