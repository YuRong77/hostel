(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a54ae1d0"],{"0480":function(t,e,a){},1276:function(t,e,a){"use strict";var i=a("d784"),n=a("44e7"),r=a("825a"),o=a("1d80"),s=a("4840"),c=a("8aa5"),l=a("50c4"),u=a("14c3"),d=a("9263"),f=a("d039"),h=[].push,v=Math.min,p=4294967295,m=!f((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(o(this)),r=void 0===a?p:a>>>0;if(0===r)return[];if(void 0===t)return[i];if(!n(t))return e.call(i,t,r);var s,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,m=new RegExp(t.source,f+"g");while(s=d.call(m,i)){if(c=m.lastIndex,c>v&&(u.push(i.slice(v,s.index)),s.length>1&&s.index<i.length&&h.apply(u,s.slice(1)),l=s[0].length,v=c,u.length>=r))break;m.lastIndex===s.index&&m.lastIndex++}return v===i.length?!l&&m.test("")||u.push(""):u.push(i.slice(v)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var n=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n,a):i.call(String(n),e,a)},function(t,n){var o=a(i,t,this,n,i!==e);if(o.done)return o.value;var d=r(t),f=String(this),h=s(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new h(m?d:"^(?:"+d.source+")",b),_=void 0===n?p:n>>>0;if(0===_)return[];if(0===f.length)return null===u(x,f)?[f]:[];var D=0,y=0,R=[];while(y<f.length){x.lastIndex=m?y:0;var k,S=u(x,m?f:f.slice(y));if(null===S||(k=v(l(x.lastIndex+(m?0:y)),f.length))===D)y=c(f,y,g);else{if(R.push(f.slice(D,y)),R.length===_)return R;for(var C=1;C<=S.length-1;C++)if(R.push(S[C]),R.length===_)return R;y=D=k}}return R.push(f.slice(D)),R}]}),!m)},"14c3":function(t,e,a){var i=a("c6b6"),n=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"3ab1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.RoomData.imageUrl?a("div",{staticClass:"roomImg"},[a("div",{staticClass:"item",style:{backgroundImage:"url("+t.RoomData.imageUrl[0]+")"},on:{click:function(e){return t.showImg(0)}}}),a("div",{staticClass:"item",style:{backgroundImage:"url("+t.RoomData.imageUrl[1]+")"},on:{click:function(e){return t.showImg(1)}}}),a("div",{staticClass:"item",style:{backgroundImage:"url("+t.RoomData.imageUrl[2]+")"},on:{click:function(e){return t.showImg(2)}}})]):t._e(),t.RoomData.imageUrl?a("VueEasyLightbox",{attrs:{escDisabled:"",moveDisabled:"",imgs:t.LboxImg,visible:t.visible},on:{hide:t.handleHide}}):t._e(),a("div",{staticClass:"container"},[t.RoomData.descriptionShort?a("div",{staticClass:"roomDetail"},[a("h2",[t._v(t._s(t.RoomData.name))]),a("ul",[a("li",[t._v(" 預約房客人數 : "+t._s(t.RoomData.descriptionShort.GuestMin)+"~"+t._s(t.RoomData.descriptionShort.GuestMax)+" 位 ")]),a("li",[t._v("床型 : "+t._s(t.RoomData.descriptionShort.Bed[0]))]),a("li",[t._v("衛浴數量 : "+t._s(t.RoomData.descriptionShort["Private-Bath"])+" 間")]),a("li",[t._v("房間大小 : "+t._s(t.RoomData.descriptionShort.Footage)+" 平方公尺")]),a("li",[t._v(t._s(t.RoomData.description))])]),a("div",{staticClass:"checkTime"},[a("div",{staticClass:"checkIn"},[a("span",[t._v("Check In")]),a("p",[t._v(" "+t._s(t.RoomData.checkInAndOut.checkInEarly)+" ~ "+t._s(t.RoomData.checkInAndOut.checkInLate)+" ")])]),a("div",{staticClass:"checkOut"},[a("span",[t._v("Check Out")]),a("p",[t._v(t._s(t.RoomData.checkInAndOut.checkOut))])])]),a("ul",{staticClass:"amenities"},[a("li",{style:{opacity:t.RoomData.amenities["Wi-Fi"]?1:.3}},[a("i",{staticClass:"fas fa-wifi"}),t._v(" Wi-Fi ")]),a("li",{style:{opacity:t.RoomData.amenities["Breakfast"]?1:.3}},[a("i",{staticClass:"fas fa-utensils"}),t._v(" 早餐 ")]),a("li",{style:{opacity:t.RoomData.amenities["Mini-Bar"]?1:.3}},[a("i",{staticClass:"fas fa-glass-martini-alt"}),t._v(" Mini Bar ")]),a("li",{style:{opacity:t.RoomData.amenities["Room-Service"]?1:.3}},[a("i",{staticClass:"fas fa-concierge-bell"}),t._v(" Service ")]),a("li",{style:{opacity:t.RoomData.amenities["Television"]?1:.3}},[a("i",{staticClass:"fas fa-tv"}),t._v(" 電視 ")]),a("li",{style:{opacity:t.RoomData.amenities["Air-Conditioner"]?1:.3}},[a("i",{staticClass:"fas fa-wind"}),t._v(" 空調 ")]),a("li",{style:{opacity:t.RoomData.amenities["Refrigerator"]?1:.3}},[a("i",{staticClass:"fas fa-temperature-low"}),t._v(" 冰箱 ")]),a("li",{style:{opacity:t.RoomData.amenities["Sofa"]?1:.3}},[a("i",{staticClass:"fas fa-couch"}),t._v(" 沙發 ")]),a("li",{style:{opacity:t.RoomData.amenities["Great-View"]?1:.3}},[a("i",{staticClass:"fas fa-mountain"}),t._v(" 漂亮的視野 ")]),a("li",{style:{opacity:t.RoomData.amenities["Smoke-Free"]?1:.3}},[a("i",{staticClass:"fas fa-smoking-ban"}),t._v(" 禁止吸煙 ")]),a("li",{style:{opacity:t.RoomData.amenities["Child-Friendly"]?1:.3}},[a("i",{staticClass:"fas fa-child"}),t._v(" 適合兒童 ")]),a("li",{style:{opacity:t.RoomData.amenities["Pet-Friendly"]?1:.3}},[a("i",{staticClass:"fas fa-paw"}),t._v(" 寵物攜帶 ")])])]):t._e(),a("div",{staticClass:"appointment"},[a("div",{staticClass:"roomPrice"},[a("p",[t._v("NT."+t._s(t.RoomData.normalDayPrice))]),a("span",[t._v("平日 ( 一 ~ 四 )")]),a("p",[t._v("NT."+t._s(t.RoomData.holidayPrice))]),a("span",[t._v("假日 ( 五 ~ 日 )")])]),a("div",{staticClass:"roomDate"},[a("div",{staticClass:"calendar"},[a("calendar",{attrs:{"min-date":new Date,"disabled-dates":[].concat(t.Booking)}})],1),a("button",{on:{click:function(e){t.showModel=!0}}},[t._v("預約日期")])])])]),t.showModel?a("div",{staticClass:"checkoutModel"},[a("div",{staticClass:"modelBg"}),a("div",{staticClass:"checkoutCard"},[t.checkSuccess||t.checkFail?t._e():a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.postRoom(e)}}},[a("h3",[t._v("預約資料")]),a("label",{attrs:{for:"username"}},[t._v("姓名")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userName,expression:"form.userName"}],attrs:{type:"text",id:"username",placeholder:"請輸入姓名",required:""},domProps:{value:t.form.userName},on:{input:function(e){e.target.composing||t.$set(t.form,"userName",e.target.value)}}}),a("span",{staticClass:"tips"},[t._v(t._s(i[0]))])]}}],null,!1,3058782292)}),a("label",{attrs:{for:"usertel"}},[t._v("電話")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userTel,expression:"form.userTel"}],attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話",required:""},domProps:{value:t.form.userTel},on:{input:function(e){e.target.composing||t.$set(t.form,"userTel",e.target.value)}}}),a("span",{staticClass:"tips"},[t._v(t._s(i[0]))])]}}],null,!1,3852790874)}),a("label",{attrs:{for:""}},[t._v("預約日期")]),a("date-picker",{attrs:{"min-date":new Date,"disabled-dates":[].concat(t.Booking),mode:"range"},model:{value:t.SelectedDate,callback:function(e){t.SelectedDate=e},expression:"SelectedDate"}}),a("span",{staticClass:"tips"},[t._v(t._s(t.DPtips))]),a("div",{staticClass:"btn"},[a("button",{attrs:{type:"reset"},on:{click:t.closeModel}},[t._v("取消")]),a("button",{class:{eventNone:t.isLoading},attrs:{type:"submit"}},[t.isLoading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 確認預約 ")])])],1),t.checkSuccess?a("div",{staticClass:"checkSuccess"},[a("i",{staticClass:"far fa-check-circle fa-4x"}),a("h3",[t._v("預約成功")]),a("button",{on:{click:t.goHome}},[t._v("回到首頁")])]):t._e(),t.checkFail?a("div",{staticClass:"checkFail"},[a("i",{staticClass:"far fa-times-circle fa-4x"}),a("h3",[t._v("預約失敗")]),a("p",[t._v("指定日期已被預約或不再90天以內")]),a("button",{on:{click:t.closeModel}},[t._v("返回")])]):t._e()])]):t._e()],1)},n=[],r=(a("99af"),a("4160"),a("a15b"),a("fb6a"),a("ac1f"),a("5319"),a("1276"),a("159b"),{components:{},data:function(){return{RoomData:{},SelectedDate:{},form:{userName:"",userTel:"",newBooking:[]},Booking:[],visible:!1,isLoading:!1,showModel:!1,checkSuccess:!1,checkFail:!1,LboxImg:""}},computed:{DPtips:function(){return this.SelectedDate?"":"請選擇日期"}},methods:{getRoom:function(){var t=this,e=t.$route.params.id,a="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/room/").concat(e);t.$bus.$emit("Loading",!0),t.axios.get(a,{headers:{Authorization:"Bearer ".concat("FMpMClM6ScYtKA1b2hA09tbN75X7wroUL076FLi8MrLuVb260qktrO1xOkjD"),accept:"application/json"}}).then((function(e){t.RoomData=e.data.room[0],t.Booking=e.data.booking,t.$bus.$emit("Loading",!1);var a=[];t.Booking.forEach((function(t){return a.push(new Date(t.date.split("-").join().replace(/\b(0+)/gi,"")))})),t.Booking=a}))},postRoom:function(){var t=this;if(""!=t.form.userName&&""!=t.form.userName&&null!=t.SelectedDate){var e=t.$route.params.id,a="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/room/").concat(e),i=new Date(t.SelectedDate.start.setDate(t.SelectedDate.start.getDate()+1)),n=i.toISOString().slice(0,10),r=new Date(t.SelectedDate.end.setDate(t.SelectedDate.end.getDate()+1)),o=r.toISOString().slice(0,10);t.getDate(n,o);var s={name:t.form.userName,tel:t.form.userTel,date:t.form.newBooking};t.isLoading=!0,t.axios.post(a,s,{headers:{Authorization:"Bearer ".concat("FMpMClM6ScYtKA1b2hA09tbN75X7wroUL076FLi8MrLuVb260qktrO1xOkjD"),accept:"application/json"}}).then((function(e){200===e.status&&(t.checkSuccess=!0,t.isLoading=!1,t.getRoom())})).catch((function(){t.checkFail=!0,t.isLoading=!1}))}},getDate:function(t,e){if(t==e)return this.form.newBooking=t;var a=[],i=t.split("-"),n=e.split("-"),r=new Date,o=new Array,s=0;r.setDate(i[2]),r.setMonth(i[1]-1),r.setFullYear(i[0]),a.push(t);while(0==s){var c=r.getTime()+864e5;r.setTime(c),o[2]=r.getDate(),o[1]=r.getMonth()+1,o[0]=r.getFullYear(),1==String(o[1]).length&&(o[1]="0"+o[1]),1==String(o[2]).length&&(o[2]="0"+o[2]),a.push(o[0]+"-"+o[1]+"-"+o[2]),o[0]==n[0]&&o[1]==n[1]&&o[2]==n[2]&&(s=1)}this.form.newBooking=a},closeModel:function(){this.SelectedDate=null,this.showModel=!1,this.checkFail=!1,this.form.userName="",this.form.userTel=""},goHome:function(){this.$router.push("./")},showImg:function(t){this.LboxImg=this.RoomData.imageUrl[t],this.visible=!0},handleHide:function(){this.visible=!1},delRoom:function(){var t=this,e=this,a="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/rooms");e.axios.delete(a,{headers:{Authorization:"Bearer ".concat("FMpMClM6ScYtKA1b2hA09tbN75X7wroUL076FLi8MrLuVb260qktrO1xOkjD"),accept:"application/json"}}).then((function(e){t.getRoom()}))}},created:function(){this.getRoom()}}),o=r,s=(a("f66f"),a("2877")),c=Object(s["a"])(o,i,n,!1,null,"d2d566e2",null);e["default"]=c.exports},"44e7":function(t,e,a){var i=a("861d"),n=a("c6b6"),r=a("b622"),o=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},5319:function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),r=a("7b0b"),o=a("50c4"),s=a("a691"),c=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,f=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,a,i){var g=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=i.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(a,i){var n=c(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n,i):e.call(String(n),a,i)},function(t,i){if(!g&&b||"string"===typeof i&&-1===i.indexOf(x)){var r=a(e,t,this,i);if(r.done)return r.value}var c=n(t),h=String(this),v="function"===typeof i;v||(i=String(i));var p=c.global;if(p){var D=c.unicode;c.lastIndex=0}var y=[];while(1){var R=u(c,h);if(null===R)break;if(y.push(R),!p)break;var k=String(R[0]);""===k&&(c.lastIndex=l(h,o(c.lastIndex),D))}for(var S="",C=0,E=0;E<y.length;E++){R=y[E];for(var w=String(R[0]),I=d(f(s(R.index),h.length),0),A=[],M=1;M<R.length;M++)A.push(m(R[M]));var T=R.groups;if(v){var L=[w].concat(A,I,h);void 0!==T&&L.push(T);var N=String(i.apply(void 0,L))}else N=_(w,h,I,A,T,i);I>=C&&(S+=h.slice(C,I)+N,C=I+w.length)}return S+h.slice(C)}];function _(t,a,i,n,o,s){var c=i+t.length,l=n.length,u=p;return void 0!==o&&(o=r(o),u=v),e.call(s,u,(function(e,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,i);case"'":return a.slice(c);case"<":s=o[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>l){var d=h(u/10);return 0===d?e:d<=l?void 0===n[d-1]?r.charAt(1):n[d-1]+r.charAt(1):e}s=n[u-1]}return void 0===s?"":s}))}}))},6547:function(t,e,a){var i=a("a691"),n=a("1d80"),r=function(t){return function(e,a){var r,o,s=String(n(e)),c=i(a),l=s.length;return c<0||c>=l?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):r:t?s.slice(c,c+2):o-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(t,e,a){"use strict";var i=a("6547").charAt;t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},9263:function(t,e,a){"use strict";var i=a("ad6d"),n=a("9f7f"),r=RegExp.prototype.exec,o=String.prototype.replace,s=r,c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,a,n,s,d=this,f=l&&d.sticky,h=i.call(d),v=d.source,p=0,m=t;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",m=" "+m,p++),a=new RegExp("^(?:"+v+")",h)),u&&(a=new RegExp("^"+v+"$(?!\\s)",h)),c&&(e=d.lastIndex),n=r.call(f?a:d,m),f?n?(n.input=n.input.slice(p),n[0]=n[0].slice(p),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:c&&n&&(d.lastIndex=d.global?n.index+n[0].length:e),u&&n&&n.length>1&&o.call(n[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(n[s]=void 0)})),n}),t.exports=s},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),r=a("e8b5"),o=a("861d"),s=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),h=a("2d00"),v=f("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",g=h>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=d("concat"),x=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},_=!g||!b;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,i,n,r,o=s(this),d=u(o,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?o:arguments[e],x(r)){if(n=c(r.length),f+n>p)throw TypeError(m);for(a=0;a<n;a++,f++)a in r&&l(d,f,r[a])}else{if(f>=p)throw TypeError(m);l(d,f++,r)}return d.length=f,d}})},"9f7f":function(t,e,a){"use strict";var i=a("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("44ad"),r=a("fc6a"),o=a("a640"),s=[].join,c=n!=Object,l=o("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},ac1f:function(t,e,a){"use strict";var i=a("23e7"),n=a("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,e,a){"use strict";var i=a("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,a){"use strict";a("ac1f");var i=a("6eeb"),n=a("d039"),r=a("b622"),o=a("9263"),s=a("9112"),c=r("species"),l=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var v=r(t),p=!n((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),m=p&&!n((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return e=!0,null},a[v](""),!e}));if(!p||!m||"replace"===t&&(!l||!u||f)||"split"===t&&!h){var g=/./[v],b=a(v,""[t],(function(t,e,a,i,n){return e.exec===o?p&&!n?{done:!0,value:g.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],_=b[1];i(String.prototype,t,x),i(RegExp.prototype,v,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&s(RegExp.prototype[v],"sham",!0)}},f66f:function(t,e,a){"use strict";var i=a("0480"),n=a.n(i);n.a},fb6a:function(t,e,a){"use strict";var i=a("23e7"),n=a("861d"),r=a("e8b5"),o=a("23cb"),s=a("50c4"),c=a("fc6a"),l=a("8418"),u=a("b622"),d=a("1dde"),f=a("ae40"),h=d("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),m=[].slice,g=Math.max;i({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,e){var a,i,u,d=c(this),f=s(d.length),h=o(t,f),v=o(void 0===e?f:e,f);if(r(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return m.call(d,h,v);for(i=new(void 0===a?Array:a)(g(v-h,0)),u=0;h<v;h++,u++)h in d&&l(i,u,d[h]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-a54ae1d0.b47e6940.js.map