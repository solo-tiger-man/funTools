(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/huilv/huilv"],{"01fa":function(e,n,t){"use strict";t.r(n);var o=t("7960"),a=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a},6325:function(e,n,t){},7960:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){var e=["美元","欧元","港币","日元","英镑","澳大利元","新加坡元","瑞士法郎","丹麦克朗","澳门元","马来西亚林吉特","挪威克朗","新西兰元","菲律宾比索","卢布","瑞典克朗","新台币","巴西雷亚尔","韩国元","南非兰特"];return{placeholderA:"输入",index1:"0",index2:"0",src:"",dst:"",value1:"",value2:"",pri:{},CurrencyPick:e}},methods:{PickerChange1:function(e){console.log(e.detail.value),this.index1=e.detail.value},PickerChange2:function(e){console.log(e.detail.value),this.index2=e.detail.value},exchange:function(n){var t=this;this.value1=n.detail.value,console.log(this.value1),e.showLoading({title:"兑换中",success:function(){e.request({method:"POST",header:{"Content-Type":"application/json"},url:"http://web.juhe.cn:8080/finance/exchange/rmbquot?key=ccb02207097d84ac2bfdd45f73233184",data:{},success:function(e){if(console.log(e),0===e.data.error_code){var n=[],o=e.data.result[0];for(var a in o)n.push(Object.values(o[a]));console.log(n[0][0]),console.log(n),t.value2=t.value1*(n[t.index1][0]/100)/(n[t.index2][0]/100),console.log(t.index1),console.log(t.index2),console.log(t.value1)}},fail:function(e){console.log("出错")}})},complete:function(){console.log("complete"),e.hideLoading()}})}}};n.default=t}).call(this,t("543d")["default"])},a723:function(e,n,t){"use strict";t.r(n);var o=t("d591"),a=t("01fa");for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("fad4");var u,l=t("f0c5"),i=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"32c7be0f",null,!1,o["a"],u);n["default"]=i.exports},c291:function(e,n,t){"use strict";(function(e){t("06f0"),t("921b");o(t("66fd"));var n=o(t("a723"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},d591:function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return o}))},fad4:function(e,n,t){"use strict";var o=t("6325"),a=t.n(o);a.a}},[["c291","common/runtime","common/vendor"]]]);