(function(e){function t(t){for(var n,r,c=t[0],o=t[1],d=t[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,c=1;c<s.length;c++){var o=s[c];0!==a[o]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/AppStarter/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"358e":function(e,t,s){},"3c14":function(e,t,s){},"452c":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("358e");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"app-timer__wrapper"},[s("AddNewTimer",{on:{addNewTimerName:e.addNewTimer}}),s("table",{staticClass:"timers__table"},e._l(e.timersList,(function(t){return s("tr",{key:t.id,staticClass:"timer__item"},[s("Timer",{attrs:{id:t.id,timerName:t.name,timeArray:t.time,isActive:t.active},on:{removeTimer:e.deleteTimer}})],1)})),0)],1)])},i=[],r=(s("4de4"),s("4160"),s("fb6a"),s("b680"),s("159b"),s("3835")),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-timer__add"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newTimerName,expression:"newTimerName"}],staticClass:"timer-name__input",attrs:{type:"text",placeholder:"Timer name"},domProps:{value:e.newTimerName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTimer(t)},input:function(t){t.target.composing||(e.newTimerName=t.target.value)}}}),s("input",{staticClass:"add-new-timer__btn",attrs:{type:"button",value:"Create Timer"},on:{click:e.addTimer}}),s("div",{staticClass:"horizont-line"})])},o=[],d={name:"AddNewTimer",data:function(){return{newTimerName:""}},methods:{addTimer:function(){this.$emit("addNewTimerName",this.newTimerName),this.newTimerName=""}}},m=d,u=(s("9f3d"),s("2877")),f=Object(u["a"])(m,c,o,!1,null,"087ccf38",null),l=f.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"timer__container"},[s("td",{staticClass:"timer__colum"},[s("div",{staticClass:"timer-name"},[e._v(e._s(e.timerName))])]),s("td",{staticClass:"timer__colum"},[s("div",{staticClass:"timer__time",class:e.changeTimerClass},[e._v(e._s(e.time))])]),s("td",{staticClass:"timer__colum"},[s("button",{staticClass:"trigger",on:{click:function(t){e.isRun=!e.isRun}}},[e.isRun?s("div",{staticClass:"pause__btn"},[s("span",{staticClass:"mdi mdi-pause"})]):s("div",{staticClass:"run__btn"},[s("span",{staticClass:"mdi mdi-play"})])])]),s("td",{staticClass:"timer__colum"},[s("button",{staticClass:"trigger del__btn",on:{click:function(t){return e.onDelete(e.id)}}},[e._m(0)])])])},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"del__btn"},[s("span",{staticClass:"mdi mdi-delete"})])}],h=(s("99af"),{name:"Timer",props:["id","timeArray","isActive","timerName"],data:function(){return{seconds:0,minutes:0,hours:0,timer:null,isRun:!0,storage:function(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=JSON.parse(localStorage.getItem("timers"));n.forEach((function(n){n.id===e&&(t.length>0&&(n.time=t),n.active=s,n.currentDate=Date.now())}));var a=JSON.stringify(n);localStorage.setItem("timers",a)}}},mounted:function(){var e=Object(r["a"])(this.timeArray,3);this.hours=e[0],this.minutes=e[1],this.seconds=e[2],this.isRun=this.isActive,this.startTimer()},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.seconds++,e.storage(e.id,[e.hours,e.minutes,e.seconds],!0)}),1e3)},onDelete:function(e){this.$emit("removeTimer",e)}},computed:{time:function(){return"".concat(this.hours>9?this.hours:"0"+this.hours,":").concat(this.minutes>9?this.minutes:"0"+this.minutes,":").concat(this.seconds>9?this.seconds:"0"+this.seconds)},changeTimerClass:function(){return this.isRun?"active__timer":"disabled__timer"}},watch:{seconds:function(e){60===e&&(this.seconds=0,this.minutes++)},minutes:function(e){60===e&&(this.minutes=0,this.hours++)},isRun:function(e){e?this.startTimer():(clearInterval(this.timer),this.storage(this.id,[],!1))}}}),p=h,v=(s("65dd"),Object(u["a"])(p,j,b,!1,null,"24fa66c7",null)),g=v.exports,_={name:"App",components:{AddNewTimer:l,Timer:g},data:function(){return{timersList:[]}},mounted:function(){var e=this;if(localStorage.getItem("timers"))try{var t=JSON.parse(localStorage.getItem("timers")),s=Date.now();t.forEach((function(t){if(t.active){var n=Object(r["a"])(t.time,3),a=n[0],i=n[1],c=n[2],o=e.$moment(),d=e.$moment().add(c,"seconds"),m=e.$moment().add(i,"minutes"),u=e.$moment().add(a,"hours"),f=e.$moment.duration(s-t.currentDate+u.diff(o)).hours(),l=e.$moment.duration(s-t.currentDate+m.diff(o)).minutes(),j=e.$moment.duration(s-t.currentDate+d.diff(o)).seconds();t.time=[f,l,j]}})),this.timersList=t}catch(n){localStorage.removeItem("timers")}},methods:{deleteTimer:function(e){this.timersList=this.timersList.filter((function(t){return t.id!==e}))},addNewTimer:function(e){0===e.length&&(e=this.$moment().format("DD-MM-YYYY"));var t={id:Math.random().toFixed(5).slice(2),name:e,time:[0,0,0],active:!0,currentDate:Date.now()};this.timersList.push(t)}},watch:{timersList:function(e){var t=JSON.stringify(e);localStorage.setItem("timers",t)}}},y=_,w=(s("74ab"),s("b0a0"),Object(u["a"])(y,a,i,!1,null,"818d29a0",null)),k=w.exports,T=s("c1df"),C=s.n(T);s("5363");n["a"].prototype.$moment=C.a,n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"65dd":function(e,t,s){"use strict";var n=s("3c14"),a=s.n(n);a.a},"74ab":function(e,t,s){"use strict";var n=s("f523"),a=s.n(n);a.a},"9f3d":function(e,t,s){"use strict";var n=s("c490"),a=s.n(n);a.a},b0a0:function(e,t,s){"use strict";var n=s("452c"),a=s.n(n);a.a},c490:function(e,t,s){},f523:function(e,t,s){}});