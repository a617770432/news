(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a06":function(t,e,n){"use strict";var o=n("c532"),r=n("30b5"),i=n("f6b4"),a=n("5270"),s=n("4a7b");function u(t){this.defaults=t,this.interceptors={request:new i,response:new i}}u.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=s(this.defaults,t),r(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(t){u.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),o.forEach(["post","put","patch"],(function(t){u.prototype[t]=function(e,n,o){return this.request(s(o||{},{method:t,url:e,data:n}))}})),t.exports=u},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},1095:function(t,e,n){"use strict";n("653a")},"10a1":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("goodslistCompoent",{directives:[{name:"show",rawName:"v-show",value:0==t.comIndex,expression:"comIndex == 0"}]}),n("shopcarCompoent",{directives:[{name:"show",rawName:"v-show",value:1==t.comIndex,expression:"comIndex == 1"}]}),n("orderCompoent",{directives:[{name:"show",rawName:"v-show",value:2==t.comIndex,expression:"comIndex == 2"}]}),n("van-tabbar",{on:{change:t.onChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"search"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{icon:"friends-o"}},[t._v("订单")])],1)],1)},r=[],i=n("bc3a"),a=n.n(i),s=n("4360"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-carousel",{attrs:{height:"150px"}},t._l(t.bannerList,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.imgUrl}})])})),1),n("el-container",[n("el-aside",{attrs:{width:"20%"}},[n("ul",{staticStyle:{margin:"0 auto",display:"table",padding:"0","text-align":"center"}},t._l(t.goodsTitleList,(function(e,o){return n("li",{key:o},[n("p",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.seriesName))])])})),0)]),n("el-container",[n("el-main",{staticStyle:{padding:"0px"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsTitleList[0].goodsDetailsList,(function(e,o){return n("van-cell",{key:o,scopedSlots:t._u([{key:"title",fn:function(){return[n("img",{staticStyle:{width:"40px",float:"left"},attrs:{src:e.goodsImgUrl}}),n("span",{staticStyle:{"font-size":"10px",float:"left","line-height":"40px","margin-left":"10px"}},[t._v(t._s(e.goodsName))]),n("el-input-number",{staticStyle:{width:"100px",float:"right"},attrs:{size:"mini",value:e.num,min:0,max:999,label:""},on:{change:t.handleChange},model:{value:e.num,callback:function(n){t.$set(e,"num",n)},expression:"item.num"}})]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1)},c=[],l=(n("99af"),{created:function(){var t=this;a()({method:"get",url:"https://test.kwwdqd.com/api/order/cBanner/getList"}).then((function(e){t.bannerList=e.data.data,console.log(t.bannerList)})),this.httpRequest()},data:function(){return{test:"123456",bannerList:[],selectTitleIndex:0,goodsTitleList:[],active:0,loading:!1,finished:!1,page:0}},methods:{httpRequest:function(){var t=this,e="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwiZFVzZXJpZCI6IjIxNjYiLCJpc3MiOiJLV1ctU0VSVklDRSIsImV4cCI6MTc3ODk4MDE3NSwiaWF0IjoxNjA2MTgwMTc1LCJqdGkiOiIwMDEiLCJ1c2VybmFtZSI6bnVsbH0.nxJTJ31LwvXMC47k4MeES3clGfQahJv758j31k0KNyA";a()({method:"get",headers:{Authorization:e},url:"https://test.kwwdqd.com/api/order/dOrder/getDShopGoodsDetailsList"}).then((function(e){console.log("json:"+JSON.stringify(e.data.data[0].goodsDetailsList)),t.goodsTitleList=e.data.data,t.goodsTitleList[0].goodsDetailsList.concat(e.data.data[0].goodsDetailsList),s["a"].state.goodsTitleList=e.data.data,t.loading=!1}))},onLoad:function(){},handleChange:function(t){console.log(JSON.stringify(this.goodsTitleList)+"     "+t)},onChange:function(t){0==t&&this.$router.push("goodslist"),1==t&&this.$router.push("shopcar"),2==t&&this.$router.push("order")}}}),f=l,d=(n("1095"),n("2877")),p=Object(d["a"])(f,u,c,!1,null,null,null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabs",{on:{change:t.onChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"待确定"}},[t._m(0),n("title3",{ref:"title3",attrs:{name:t.barName,likes:t.likes,msg:"内容..."},on:{msgClick:t.msgClick,inputChanged:t.inputChanged}}),n("button",{on:{click:t.getTitle3Instance}},[t._v("获得title3组件的实例")])],1),n("van-tab",{attrs:{title:"待送达"}},[t._v("0 "),n("h1",{domProps:{innerHTML:t._s(t.url)}}),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.searchText,expression:"searchText",modifiers:{lazy:!0}}],attrs:{placeholder:"请输入文字"},domProps:{value:t.searchText},on:{input:t.inputChange,change:function(e){t.searchText=e.target.value}}}),n("h2",[t._v(t._s(t.searchText))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sex,expression:"sex"}],attrs:{type:"radio",id:"male",value:"男",name:"sex"},domProps:{checked:t._q(t.sex,"男")},on:{change:function(e){t.sex="男"}}}),t._v("男 "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sex,expression:"sex"}],attrs:{type:"radio",id:"female",value:"女",name:"sex"},domProps:{checked:t._q(t.sex,"女")},on:{change:function(e){t.sex="女"}}}),t._v("女 "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.score,expression:"score"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.score=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"A"}},[t._v("A")]),n("option",{attrs:{value:"B"}},[t._v("B")]),n("option",{attrs:{value:"C"}},[t._v("C")])]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputNum,expression:"inputNum",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.inputNum},on:{input:function(e){e.target.composing||(t.inputNum=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("h2",[t._v(t._s(typeof t.inputNum))]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputString,expression:"inputString",modifiers:{trim:!0}}],domProps:{value:t.inputString},on:{input:function(e){e.target.composing||(t.inputString=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("h2",[t._v(t._s(t.inputString))])]),n("van-tab",{attrs:{title:"待接单"}},[n("h1",{domProps:{textContent:t._s(t.label)}}),n("table",[n("tr",[n("th"),n("th",[t._v("名称")]),n("th",[t._v("出版时间")]),n("th",[t._v("价格")]),n("th",[t._v("数量")]),n("th")]),t._l(t.books,(function(e,o){return n("tr",{key:e},[n("th",[t._v(t._s(o))]),n("th",[t._v(t._s(e.name))]),n("th",[t._v(t._s(e.date))]),n("th",[t._v(t._s(e.price.toFixed(2)))]),n("th",[n("button",{on:{click:function(e){return t.addBookNum(o,1)}}},[t._v("+")]),t._v(t._s(e.num)),n("button",{on:{click:function(e){return t.addBookNum(o,-1)}}},[t._v("-")])]),n("th",[n("button",{on:{click:function(e){return t.removeBook(o)}}},[t._v("移除")])])])}))],2),n("h2",[t._v("总价"+t._s(t.getBooksPrice()))]),n("button",{on:{click:t.test2}},[t._v("高阶函数")])]),n("van-tab",{attrs:{title:"已完成"}},[n("TopBar",[n("span",[t._v("插入内容1")])]),n("TopBar",[n("button",[t._v("插入内容2")])]),n("TopBar",{scopedSlots:t._u([{key:"center",fn:function(e){return n("button",{},[t._v("中间"+t._s(e.data[1]))])}}])}),n("button",{on:{click:t.getModule}},[t._v("获取module")])],1),n("van-tab",{attrs:{title:"全部"}},[n("button",{class:t.getButtonCls(),on:{click:t.buttonClick}},[t._v("按钮")]),n("h1",[t._v(t._s(t.label2))]),n("button",{on:{click:t.setComputed}},[t._v("计算属性set")]),n("button",{on:{click:function(e){return t.eventButton("xyk",e)}}},[t._v("获取event")]),n("input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keyupEnter(e)}}}),n("h1",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]},[t._v("helloworld")]),t._v("//样式display:none "),t._e(),t._v("//不存在于dom中 "),n("ul",[n("li",{directives:[{name:"for-key",rawName:"v-for-key",value:(t.value,t.key in t.info),expression:"(value,key) in info"}]},[t._v(t._s(t.key)+"--"+t._s(t.value))])]),n("ul",t._l(t.movies,(function(e){return n("li",{key:e,staticStyle:{height:"20px"}},[t._v(t._s(e))])})),0),n("button",{on:{click:t.pushMovie}},[t._v("Push")])])],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(t._s(t.label))])}],g=(n("4de4"),n("d81d"),n("13d5"),n("a434"),n("2b0e")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.name))]),n("h2",[t._v(t._s(t.likes))]),n("h2",{on:{click:t.msgClick}},[t._v(t._s(t.msg))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("button",{on:{click:t.getFatherCompoent}},[t._v("访问父组件")])])},y=[],x={props:{name:String,likes:Array,msg:{type:String,default:"缺省值...",required:!0}},methods:{getInputText:function(){return this.inputText},msgClick:function(){console.log("msgClick-child"),this.$emit("msgClick","HelloWorld")},inputChanged:function(t){this.inputText=t.target.value,this.$emit("inputChanged",this.inputText)},getFatherCompoent:function(){console.log(this.$parent),console.log(this.$root)}},data:function(){return{inputText:"德玛西亚万岁"}},watch:{inputText:function(t){this.inputText=t,this.$emit("inputChanged",this.inputText)}}},w=x,_=Object(d["a"])(w,b,y,!1,null,null,null),k=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("topbar组件")]),t._t("default",[n("h1",[t._v("默认值")])]),n("div",[t._t("left",[n("span",[t._v("左")])]),t._t("center",[n("span",[t._v("中")])],{data:t.langugue}),t._t("right",[n("span",[t._v("右")])])],2)],2)},T=[],S={data:function(){return{langugue:["java","javascript","c#","go","swift"]}}},N=S,L=Object(d["a"])(N,C,T,!1,null,null,null),E=L.exports;function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e,n){return e&&A(t.prototype,e),n&&A(t,n),t}var I=!0;function B(t,e){return t+e}var R=100,U=function(){function t(e){j(this,t)}return O(t,[{key:"say",value:function(){console.log("hello world")}}]),t}(),P={components:{title3:k,TopBar:E},created:function(){},data:function(){return{barName:"自定义标题栏",likes:["篮球"],inputString:"",inputNum:0,sex:"女",score:"A",buttonStatus:0,active:0,label:"hello",url:'<a href="www.baidu.com">百度一下你就知道</a>',info:{name:"xyk",age:18},movies:["星际穿越","盗梦空间","敦刻尔克","信条"],books:[{name:"算法导论",date:"2006-9",price:85,num:0},{name:"UNIX编程艺术",date:"2016-5",price:95.5,num:0},{name:"编程珠玑",date:"2008-1",price:15,num:0},{name:"代码大全",date:"2005-1",price:150,num:0}],totalPrice:0,searchText:""}},computed:{label2:{set:function(t){this.label=t},get:function(){return"这是计算属性2"+this.label}},labell:function(){return"这是计算属性"+this.label}},methods:{test:function(){},setComputed:function(){this.label2="world"},onChange:function(t){console.log(t)},buttonClick:function(){0===this.buttonStatus?this.buttonStatus=1:this.buttonStatus=0},getButtonCls:function(){return{button_blue:0===this.buttonStatus,button_red:1===this.buttonStatus}},eventButton:function(t,e){console.log(e)},keyupEnter:function(){console.log("keyupenter!")},sum:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.log(e)},pushMovie:function(){g["default"].set(this.movies,0,"齐天大亨")},addBookNum:function(t,e){this.books[t].num>=0&&this.books[t].num<99&&(this.books[t].num+=e)},removeBook:function(t){this.books.splice(t,1)},getBooksPrice:function(){return this.books.reduce((function(t,e){return t+e.price*e.price}),0)},test2:function(){var t=[1,4,6,87,100,151,4548],e=t.filter((function(t){return t>2})).map((function(t){return 2*t})).reduce((function(t,e){return t+e}));console.log(e)},inputChange:function(t){console.log(t)},msgClick:function(t){console.log("msgClick-father "+t)},inputChanged:function(t){this.barName=t},getTitle3Instance:function(){console.log(this.$refs.title3.getInputText())},getModule:function(){var t=new U("123");t.say(),console.log("获得calu模块的flag属性"+I+" -》"+R+" "+B(1,3))}},filters:{}},J=P,q=(n("b7ce"),Object(d["a"])(J,m,v,!1,null,null,null)),D=q.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsTitleList[0].goodsDetailsList,(function(e,o){return n("van-cell",{key:o,scopedSlots:t._u([{key:"title",fn:function(){return[n("img",{staticStyle:{width:"40px",float:"left"},attrs:{src:e.goodsImgUrl}}),n("span",{staticStyle:{"font-size":"10px",float:"left","line-height":"40px","margin-left":"10px"}},[t._v(t._s(e.goodsName))]),n("el-input-number",{staticStyle:{width:"100px",float:"right"},attrs:{size:"mini",value:e.num,min:0,max:999,label:""},on:{change:t.handleChange},model:{value:e.num,callback:function(n){t.$set(e,"num",n)},expression:"item.num"}})]},proxy:!0}],null,!0)})})),1)],1)},$=[],z={data:function(){return{goodsTitleList:s["a"].state.goodsTitleList,loading:!0,finished:!0}},methods:{}},V=z,F=Object(d["a"])(V,M,$,!1,null,null,null),H=F.exports,X={created:function(){var t=this;a()({method:"get",url:"https://test.kwwdqd.com/api/order/cBanner/getList"}).then((function(e){t.bannerList=e.data.data,console.log(t.bannerList)})),this.httpRequest()},data:function(){return{test:"123456",bannerList:[],selectTitleIndex:0,goodsTitleList:[],active:0,comName:"goodslistCompoent",comIndex:0}},methods:{httpRequest:function(){var t=this,e="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwiZFVzZXJpZCI6IjIxNjYiLCJpc3MiOiJLV1ctU0VSVklDRSIsImV4cCI6MTc3ODk4MDE3NSwiaWF0IjoxNjA2MTgwMTc1LCJqdGkiOiIwMDEiLCJ1c2VybmFtZSI6bnVsbH0.nxJTJ31LwvXMC47k4MeES3clGfQahJv758j31k0KNyA";a()({method:"get",headers:{Authorization:e},url:"https://test.kwwdqd.com/api/order/dOrder/getDShopGoodsDetailsList"}).then((function(e){t.goodsTitleList=e.data.data,s["a"].state.goodsTitleList=e.data.data}))},handleChange:function(t){console.log(JSON.stringify(this.goodsTitleList)+"     "+t)},onChange:function(t){0==t&&(this.comName="goodslistCompoent",this.comIndex=0),1==t&&(this.comName="shopcarCompoent",this.comIndex=1),2==t&&(this.comName="orderCompoent",this.comIndex=2)}},components:{goodslistCompoent:h,orderCompoent:D,shopcarCompoent:H}},G=X,Z=(n("b3db"),Object(d["a"])(G,o,r,!1,null,null,null));e["default"]=Z.exports},"13d5":function(t,e,n){"use strict";var o=n("23e7"),r=n("d58f").left,i=n("a640"),a=n("ae40"),s=n("2d00"),u=n("605d"),c=i("reduce"),l=a("reduce",{1:0}),f=!u&&s>79&&s<83;o({target:"Array",proto:!0,forced:!c||!l||f},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return t.apply(e,n)}}},2444:function(t,e,n){"use strict";(function(e){var o=n("c532"),r=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}var u={adapter:s(),transformRequest:[function(t,e){return r(e,"Accept"),r(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),o.forEach(["post","put","patch"],(function(t){u.headers[t]=o.merge(i)})),t.exports=u}).call(this,n("4362"))},"2d83":function(t,e,n){"use strict";var o=n("387f");t.exports=function(t,e,n,r,i){var a=new Error(t);return o(a,e,n,r,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var o=n("c532");function r(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,(function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,o,r){return t.config=e,n&&(t.code=n),t.request=o,t.response=r,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var o=n("c532");t.exports=o.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var o=t;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=o.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,o="/";e.cwd=function(){return o},e.chdir=function(e){t||(t=n("df7c")),o=t.resolve(e,o)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(t,e,n){"use strict";var o=n("2d83");t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(o("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4a7b":function(t,e,n){"use strict";var o=n("c532");t.exports=function(t,e){e=e||{};var n={},r=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function u(t,e){return o.isPlainObject(t)&&o.isPlainObject(e)?o.merge(t,e):o.isPlainObject(e)?o.merge({},e):o.isArray(e)?e.slice():e}function c(r){o.isUndefined(e[r])?o.isUndefined(t[r])||(n[r]=u(void 0,t[r])):n[r]=u(t[r],e[r])}o.forEach(r,(function(t){o.isUndefined(e[t])||(n[t]=u(void 0,e[t]))})),o.forEach(i,c),o.forEach(a,(function(r){o.isUndefined(e[r])?o.isUndefined(t[r])||(n[r]=u(void 0,t[r])):n[r]=u(void 0,e[r])})),o.forEach(s,(function(o){o in e?n[o]=u(t[o],e[o]):o in t&&(n[o]=u(void 0,t[o]))}));var l=r.concat(i).concat(a).concat(s),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return o.forEach(f,c),n}},"4de4":function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").filter,i=n("1dde"),a=n("ae40"),s=i("filter"),u=a("filter");o({target:"Array",proto:!0,forced:!s||!u},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5270:function(t,e,n){"use strict";var o=n("c532"),r=n("c401"),i=n("2e67"),a=n("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=r(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||a.adapter;return e(t).then((function(e){return s(t),e.data=r(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"653a":function(t,e,n){},"7a77":function(t,e,n){"use strict";function o(t){this.message=t}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,t.exports=o},"7aac":function(t,e,n){"use strict";var o=n("c532");t.exports=o.isStandardBrowserEnv()?function(){return{write:function(t,e,n,r,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(r)&&s.push("path="+r),o.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(t,e,n){"use strict";var o=n("d925"),r=n("e683");t.exports=function(t,e){return t&&!o(e)?r(t,e):e}},"8df4":function(t,e,n){"use strict";var o=n("7a77");function r(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new o(t),e(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r((function(e){t=e}));return{token:e,cancel:t}},t.exports=r},"99af":function(t,e,n){"use strict";var o=n("23e7"),r=n("d039"),i=n("e8b5"),a=n("861d"),s=n("7b0b"),u=n("50c4"),c=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),p=n("2d00"),h=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},x=!g||!b;o({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,o,r,i,a=s(this),f=l(a,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?a:arguments[e],y(i)){if(r=u(i.length),d+r>m)throw TypeError(v);for(n=0;n<r;n++,d++)n in i&&c(f,d,i[n])}else{if(d>=m)throw TypeError(v);c(f,d++,i)}return f.length=d,f}})},a420:function(t,e,n){},b3db:function(t,e,n){"use strict";n("a420")},b50d:function(t,e,n){"use strict";var o=n("c532"),r=n("467f"),i=n("7aac"),a=n("30b5"),s=n("83b9"),u=n("c345"),c=n("3934"),l=n("2d83");t.exports=function(t){return new Promise((function(e,n){var f=t.data,d=t.headers;o.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(t.baseURL,t.url);if(p.open(t.method.toUpperCase(),a(v,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var o="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,i=t.responseType&&"text"!==t.responseType?p.response:p.responseText,a={data:i,status:p.status,statusText:p.statusText,headers:o,config:t,request:p};r(e,n,a),p=null}},p.onabort=function(){p&&(n(l("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,"ECONNABORTED",p)),p=null},o.isStandardBrowserEnv()){var g=(t.withCredentials||c(v))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;g&&(d[t.xsrfHeaderName]=g)}if("setRequestHeader"in p&&o.forEach(d,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)})),o.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),t.responseType)try{p.responseType=t.responseType}catch(b){if("json"!==t.responseType)throw b}"function"===typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){p&&(p.abort(),n(t),p=null)})),f||(f=null),p.send(f)}))}},b7ce:function(t,e,n){"use strict";n("c010")},bc3a:function(t,e,n){t.exports=n("cee4")},c010:function(t,e,n){},c345:function(t,e,n){"use strict";var o=n("c532"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(o.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=o.trim(t.substr(0,i)).toLowerCase(),n=o.trim(t.substr(i+1)),e){if(a[e]&&r.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}})),a):a}},c401:function(t,e,n){"use strict";var o=n("c532");t.exports=function(t,e,n){return o.forEach(n,(function(n){t=n(t,e)})),t}},c532:function(t,e,n){"use strict";var o=n("1d2b"),r=Object.prototype.toString;function i(t){return"[object Array]"===r.call(t)}function a(t){return"undefined"===typeof t}function s(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function u(t){return"[object ArrayBuffer]"===r.call(t)}function c(t){return"undefined"!==typeof FormData&&t instanceof FormData}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function d(t){return"number"===typeof t}function p(t){return null!==t&&"object"===typeof t}function h(t){if("[object Object]"!==r.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===r.call(t)}function v(t){return"[object File]"===r.call(t)}function g(t){return"[object Blob]"===r.call(t)}function b(t){return"[object Function]"===r.call(t)}function y(t){return p(t)&&b(t.pipe)}function x(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}function C(){var t={};function e(e,n){h(t[n])&&h(e)?t[n]=C(t[n],e):h(e)?t[n]=C({},e):i(e)?t[n]=e.slice():t[n]=e}for(var n=0,o=arguments.length;n<o;n++)k(arguments[n],e);return t}function T(t,e,n){return k(e,(function(e,r){t[r]=n&&"function"===typeof e?o(e,n):e})),t}function S(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:u,isBuffer:s,isFormData:c,isArrayBufferView:l,isString:f,isNumber:d,isObject:p,isPlainObject:h,isUndefined:a,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:y,isURLSearchParams:x,isStandardBrowserEnv:_,forEach:k,merge:C,extend:T,trim:w,stripBOM:S}},c8af:function(t,e,n){"use strict";var o=n("c532");t.exports=function(t,e){o.forEach(t,(function(n,o){o!==e&&o.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[o])}))}},cee4:function(t,e,n){"use strict";var o=n("c532"),r=n("1d2b"),i=n("0a06"),a=n("4a7b"),s=n("2444");function u(t){var e=new i(t),n=r(i.prototype.request,e);return o.extend(n,i.prototype,e),o.extend(n,e),n}var c=u(s);c.Axios=i,c.create=function(t){return u(a(c.defaults,t))},c.Cancel=n("7a77"),c.CancelToken=n("8df4"),c.isCancel=n("2e67"),c.all=function(t){return Promise.all(t)},c.spread=n("0df6"),t.exports=c,t.exports.default=c},d58f:function(t,e,n){var o=n("1c0b"),r=n("7b0b"),i=n("44ad"),a=n("50c4"),s=function(t){return function(e,n,s,u){o(n);var c=r(e),l=i(c),f=a(c.length),d=t?f-1:0,p=t?-1:1;if(s<2)while(1){if(d in l){u=l[d],d+=p;break}if(d+=p,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=p)d in l&&(u=n(u,l[d],d,c));return u}};t.exports={left:s(!1),right:s(!0)}},d81d:function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").map,i=n("1dde"),a=n("ae40"),s=i("map"),u=a("map");o({target:"Array",proto:!0,forced:!s||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,o=t.length-1;o>=0;o--){var r=t[o];"."===r?t.splice(o,1):".."===r?(t.splice(o,1),n++):n&&(t.splice(o,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function o(t){"string"!==typeof t&&(t+="");var e,n=0,o=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===o&&(r=!1,o=e+1);return-1===o?"":t.slice(n,o)}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],o=0;o<t.length;o++)e(t[o],o,t)&&n.push(t[o]);return n}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,o="/"===a.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var o=e.isAbsolute(t),a="/"===i(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!o).join("/"),t||o||(t="."),t&&a&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function o(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=o(t.split("/")),i=o(n.split("/")),a=Math.min(r.length,i.length),s=a,u=0;u<a;u++)if(r[u]!==i[u]){s=u;break}var c=[];for(u=s;u<r.length;u++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,o=-1,r=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!r){o=i;break}}else r=!1;return-1===o?n?"/":".":n&&1===o?"/":t.slice(0,o)},e.basename=function(t,e){var n=o(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,o=-1,r=!0,i=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===o&&(r=!1,o=a+1),46===s?-1===e?e=a:1!==i&&(i=1):-1!==e&&(i=-1);else if(!r){n=a+1;break}}return-1===e||-1===o||0===i||1===i&&e===o-1&&e===n+1?"":t.slice(e,o)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,n){"use strict";var o=n("c532");function r(){this.handlers=[]}r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=r},f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("router-link",{attrs:{to:{name:"news"}}},[n("button",[t._v("新闻")])]),n("router-link",{attrs:{to:{name:"mine"}}},[n("button",[t._v("我的")])]),n("router-view")],1)},r=[],i={data:function(){return{path:"/about/mine"}},created:function(){console.log("about created")},destroyed:function(){console.log("about destroyed")},activated:function(){console.log("about activated"),this.$router.push(this.path)},beforeRouteLeave:function(t,e,n){console.log("about beforeRouteLeave"),this.path=this.$route.path,console.log(this.path),n()}},a=i,s=n("2877"),u=Object(s["a"])(a,o,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.7a2fdc0c.js.map