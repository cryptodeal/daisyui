(window.webpackJsonp=window.webpackJsonp||[]).push([[58,9,11,44],{406:function(t,e,n){var o=n(18),l="["+n(407)+"]",c=RegExp("^"+l+l+"*"),r=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},407:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},409:function(t,e,n){"use strict";var o=n(10),l=n(4),c=n(82),r=n(14),d=n(12),f=n(36),v=n(163),h=n(61),m=n(5),_=n(63),x=n(62).f,w=n(26).f,y=n(13).f,C=n(406).trim,S="Number",T=l.Number,E=T.prototype,D=f(_(E))==S,N=function(t){var e,n,o,l,c,r,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+f}for(r=(c=f.slice(2)).length,d=0;d<r;d++)if((code=c.charCodeAt(d))<48||code>l)return NaN;return parseInt(c,o)}return+f};if(c(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var O,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(D?m((function(){E.valueOf.call(n)})):f(n)!=S)?v(new T(N(e)),n,A):N(e)},k=o?x(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)d(T,O=k[I])&&!d(A,O)&&y(A,O,w(T,O));A.prototype=E,E.constructor=A,r(l,S,A)}},410:function(t,e,n){"use strict";n.r(e);n(40),n(409),n(22),n(39),n(64),n(114),n(37),n(38),n(164),n(48),n(162),n(83),n(49);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,n){n(412)},412:function(t,e,n){"use strict";var o=n(2),l=n(18),c=n(84),r=n(85),d=n(165),f=n(3),v=n(23),h=f("replace"),m=RegExp.prototype,_=Math.max,x=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,f,w,y,C,S,T,E=l(this),D=0,N=0,O="";if(null!=t){if((n=c(t))&&!~String(l("flags"in m?t.flags:r.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[h]))return o.call(t,E,e);if(v&&n)return String(E).replace(t,e)}for(f=String(E),w=String(t),(y="function"==typeof e)||(e=String(e)),C=w.length,S=_(1,C),D=x(f,w,0);-1!==D;)T=y?String(e(w,D,f)):d(w,f,D,[],void 0,e),O+=f.slice(N,D)+T,N=D+C,D=x(f,w,D+S);return N<f.length&&(O+=f.slice(N)),O}})},413:function(t,e,n){"use strict";var o=n(2),l=n(406).trim;o({target:"String",proto:!0,forced:n(414)("trim")},{trim:function(){return l(this)}})},414:function(t,e,n){var o=n(5),l=n(407);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},415:function(t,e,n){"use strict";n.r(e);n(411),n(413),n(114);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+c),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",color:"#abb2bf",background:"#282c34"}})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(410).default})},416:function(t,e,n){"use strict";n.r(e);var o={props:["data"]},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mt-6 overflow-x-auto"},[n("table",{staticClass:"table w-full table-compact"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-success"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-info"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"mt-6 text-xl font-bold"},[t._v("Examples")]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden mt-2 mb-10 text-center xl:block"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"728px",height:"90px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"1141251424"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-10 text-center xl:hidden"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"300px",height:"100px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"6427020085"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])}],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);n(37);var o={data:function(){return{countDown:60}},watch:{countDown:{handler:function(t){var e=this;t>0&&setTimeout((function(){e.countDown--}),1e3)},immediate:!0}},head:function(){return{title:"daisyUI — Tailwind CSS countdown component",meta:[{hid:"description",name:"description",content:"Tailwind CSS countdown component - Tailwind CSS countdown examples"}]}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"countdown",desc:"Container element"}]}}}),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"mb-4 text-base-content text-opacity-60"},[t._v("\n    set your number value in "),n("span",{staticClass:"badge badge-outline"},[t._v("--value")]),t._v("\n    variable (max value:99) "),n("br"),t._v("and whenever you change the number, it changes with swipe\n    effect like this:\n    "),n("span",{staticClass:"countdown"},[n("span",{style:{"--value":t.countDown}})])]),t._v(" "),n("Wrapper",{attrs:{title:"simple text"}},[n("span",{staticClass:"countdown"},[n("span",{style:{"--value":t.countDown}})])]),t._v(" "),n("Wrapper",{attrs:{title:"large text"}},[n("span",{staticClass:"font-mono text-6xl countdown"},[n("span",{style:{"--value":t.countDown}})])]),t._v(" "),n("Wrapper",{attrs:{title:"clock countdown"}},[n("span",{staticClass:"font-mono text-2xl countdown"},[n("span",{staticStyle:{"--value":"10"}}),t._v("h\n      "),n("span",{staticStyle:{"--value":"24"}}),t._v("m\n      "),n("span",{style:{"--value":t.countDown}}),t._v("s\n    ")])]),t._v(" "),n("Wrapper",{attrs:{title:"clock countdown with colons"}},[n("span",{staticClass:"font-mono text-2xl countdown"},[n("span",{staticStyle:{"--value":"10"}}),t._v(": "),n("span",{staticStyle:{"--value":"24"}}),t._v(":\n      "),n("span",{style:{"--value":t.countDown}})])]),t._v(" "),n("Wrapper",{attrs:{title:"large text with labels"}},[n("div",{staticClass:"grid grid-flow-col gap-5 place-items-end auto-cols-max"},[n("div",[n("span",{staticClass:"font-mono text-4xl countdown"},[n("span",{staticStyle:{"--value":"15"}})]),t._v("\n        days\n      ")]),t._v(" "),n("div",[n("span",{staticClass:"font-mono text-4xl countdown"},[n("span",{staticStyle:{"--value":"10"}})]),t._v("\n        hours\n      ")]),t._v(" "),n("div",[n("span",{staticClass:"font-mono text-4xl countdown"},[n("span",{staticStyle:{"--value":"24"}})]),t._v("\n        min\n      ")]),t._v(" "),n("div",[n("span",{staticClass:"font-mono text-4xl countdown"},[n("span",{style:{"--value":t.countDown}})]),t._v("\n        sec\n      ")])])]),t._v(" "),n("Wrapper",{attrs:{title:"large text with labels under"}},[n("div",{staticClass:"grid grid-flow-col gap-5 text-center auto-cols-max"},[n("div",{staticClass:"flex flex-col"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{staticStyle:{"--value":"15"}})]),t._v("\n        days\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{staticStyle:{"--value":"10"}})]),t._v("\n        hours\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{staticStyle:{"--value":"24"}})]),t._v("\n        min\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{style:{"--value":t.countDown}})]),t._v("\n        sec\n      ")])])]),t._v(" "),n("Wrapper",{attrs:{title:"box with labels under"}},[n("div",{staticClass:"grid grid-flow-col gap-5 text-center auto-cols-max"},[n("div",{staticClass:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{staticStyle:{"--value":"15"}})]),t._v("\n        days\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{staticStyle:{"--value":"10"}})]),t._v("\n        hours\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{staticStyle:{"--value":"24"}})]),t._v("\n        min\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content"},[n("span",{staticClass:"font-mono text-5xl countdown"},[n("span",{style:{"--value":t.countDown}})]),t._v("\n        sec\n      ")])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"my-4 text-base-content text-opacity-60"},[t._v("\n    This countdown component just gives you a transition effect of changing\n    numbers.\n    "),n("br"),t._v("You still need to handle the values using JavaScript.\n  ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(416).default,Wrapper:n(415).default})}}]);