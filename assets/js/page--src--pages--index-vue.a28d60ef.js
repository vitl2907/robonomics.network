(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9N2j":function(t,e,a){"use strict";a("pOEY");var i=a("KHd+"),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"menu oldy",attrs:{itemscope:"",itemtype:"http://www.schema.org/SiteNavigationElement"}},[a("div",[a("g-link",{attrs:{to:"/community",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("Enter the Robonomics")])]),a("p",[t._v("All you need to know is here: white paper, roadmap, token, assets, chat and other social links.")])],1),a("div",[a("g-link",{attrs:{to:"https://github.com/airalab/robonomics/releases",target:"_blank",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("Github Releases")])]),a("p",[t._v("Build technical && economic transactions in Polkadot/Ethereum blockchain with robots using opensource Robonomics framework.")])],1),a("div",[a("g-link",{attrs:{to:"https://wiki.robonomics.network",target:"_blank",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("WIKI for devs")])]),a("p",[t._v("Robonomics network quick start: installation and setting up guides, examples, glossary.")])],1),a("div",[a("g-link",{attrs:{to:"https://dapp.robonomics.network",target:"_blank",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("DApp tools")])]),a("p",[t._v("Decentralized application with variety of Robonomics tools: swapping tokens, telemetry, working services, parachain etc.")])],1)])}),[],!1,null,null,null);e.a=r.exports},"BWX/":function(t,e,a){"use strict";a("v8ht")},EUja:function(t,e,a){"use strict";var i=a("ppGB"),r=a("HYAF");t.exports="".repeat||function(t){var e=String(r(this)),a="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},QIpd:function(t,e,a){var i=a("xrYK");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"as+z":function(t,e,a){},iyQ6:function(t,e,a){"use strict";a.r(e);a("toAj");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}).apply(this,arguments)}var r=Object.prototype.hasOwnProperty;var s,o,n,c=(s=!1,o=[],n={resolved:function(){return s},resolve:function(t){if(!s){s=!0;for(var e=0,a=o.length;e<a;e++)o[e](t)}},promise:{then:function(t){s?t():o.push(t)}}},{notify:function(){n.resolve()},wait:function(){return n.promise},render:function(t,e,a){this.wait().then((function(){a(window.grecaptcha.render(t,e))}))},reset:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(t)})))},execute:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(t)})))},checkRecaptchaLoad:function(){r.call(window,"grecaptcha")&&r.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!n.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=c.notify);var l={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;c.checkRecaptchaLoad();var e=i({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots.default?this.$el.children[0]:this.$el;c.render(a,e,(function(e){t.$widgetId=e,t.$emit("render",e)}))},methods:{reset:function(){c.reset(this.$widgetId)},execute:function(){c.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots.default)}},d=a("9N2j"),p=a("9qaU"),_={components:{Navigation:d.a,MetaInfo:p.default,VueRecaptcha:l},data:function(){return{entrance:!0,recaptchaSitekey:"6LeoN0UaAAAAAJCf2ki8hF1-hOqdwmTTgd6cKsXk"}},mounted:function(){this.cookieEntrance()},updated:function(){this.scale(),window.addEventListener("load",this.scale),window.addEventListener("resize",this.scale)},beforeDestroy:function(){window.removeEventListener("load",this.scale),window.removeEventListener("resize",this.scale)},methods:{scale:function(){this.scaleRatio(".roboHands__move.left",".roboHands__left"),this.scaleRatio(".roboHands__move.right",".roboHands__right")},scaleRatio:function(t,e){var a=.9*(document.querySelector(t).offsetWidth/document.querySelector(e).offsetWidth).toFixed(2);document.querySelector(e).style.transform="scale("+a+")"},onVerifyCaptcha:function(t){this.entrance=!1,this.hcaptcha_token=t,this.verified=!0},cookieEntrance:function(){this.$cookies.get("EntranceShowed")?this.entrance=!1:(this.$cookies.config(2592e3,""),this.$cookies.set("EntranceShowed","1"))}}},u=(a("BWX/"),a("KHd+")),h=a("Kw5r"),f=h.a.config.optionMergeStrategies.computed,g={metadata:{siteName:"Robonomics Network",siteDescription:"Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control."}},m=function(t){var e=t.options;e.__staticData?e.__staticData.data=g:(e.__staticData=h.a.observable({data:g}),e.computed=f({$static:function(){return e.__staticData.data}},e.computed))},v=Object(u.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout",[i("MetaInfo",{attrs:{pageTitle:"Home",pageDescription:t.$static.metadata.siteDescription}}),t.entrance?i("div",{staticClass:"homepage-entrance"},[i("h1",{staticClass:"clean"},[i("span",[t._v("Hello Human")]),i("span",[t._v("Connect robotics")]),i("span",[t._v("on top of Polkadot or Ethereum")]),i("span",{staticClass:"buttonwrap"},[i("vue-recaptcha",{attrs:{sitekey:t.recaptchaSitekey},on:{verify:t.onVerifyCaptcha}})],1)])]):t._e(),i("div",{staticClass:"homepage"},[i("div",{staticClass:"layout__title"},[i("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{itemprop:"name"},domProps:{innerHTML:t._s(t.$static.metadata.siteName)}})]),i("section",{staticClass:"homepage__description"},[i("div",{staticClass:"layout__content"},[i("Navigation")],1),i("div",{staticClass:"roboHands",class:[t.entrance?" ":"in-viewport"]},[i("div",{staticClass:"roboHands__move left"},[i("div",{staticClass:"roboHands__left"},[i("g-image",{staticClass:"roboHands__left__1",attrs:{src:a("q721")}}),i("g-image",{staticClass:"roboHands__left__2",attrs:{src:a("zf7x")}}),i("g-image",{staticClass:"roboHands__left__3",attrs:{src:a("TNFr")}}),i("g-image",{staticClass:"roboHands__left__4",attrs:{src:a("kxUY")}}),i("g-image",{staticClass:"roboHands__left__5",attrs:{src:a("6txv")}}),i("g-image",{staticClass:"roboHands__left__6",attrs:{src:a("eQ4B")}}),i("g-image",{staticClass:"roboHands__left__7",attrs:{src:a("0fEB")}}),i("g-image",{staticClass:"roboHands__left__8",attrs:{src:a("lL92")}}),i("g-image",{staticClass:"roboHands__left__9",attrs:{src:a("CoD9")}}),i("g-image",{staticClass:"roboHands__left__10",attrs:{src:a("Ehed")}}),i("g-image",{staticClass:"roboHands__left__11",attrs:{src:a("EtMq")}})],1)]),i("div",{staticClass:"roboHands__move right"},[i("div",{staticClass:"roboHands__right"},[i("g-image",{staticClass:"roboHands__right__1",attrs:{src:a("LPIO")}}),i("g-image",{staticClass:"roboHands__right__2",attrs:{src:a("GYpJ")}}),i("g-image",{staticClass:"roboHands__right__3",attrs:{src:a("ksDP")}}),i("g-image",{staticClass:"roboHands__right__4",attrs:{src:a("P8y9")}}),i("g-image",{staticClass:"roboHands__right__5",attrs:{src:a("CopK")}}),i("g-image",{staticClass:"roboHands__right__6",attrs:{src:a("s0l/")}}),i("g-image",{staticClass:"roboHands__right__7",attrs:{src:a("iRCU")}}),i("g-image",{staticClass:"roboHands__right__8",attrs:{src:a("0nWH")}}),i("g-image",{staticClass:"roboHands__right__9",attrs:{src:a("4D0A")}}),i("g-image",{staticClass:"roboHands__right__10",attrs:{src:a("CYdh")}}),i("g-image",{staticClass:"roboHands__right__11",attrs:{src:a("7G98")}}),i("g-image",{staticClass:"roboHands__right__12",attrs:{src:a("tI3r")}}),i("g-image",{staticClass:"roboHands__right__13",attrs:{src:a("la6G")}}),i("g-image",{staticClass:"roboHands__right__14",attrs:{src:a("zL5t")}}),i("g-image",{staticClass:"roboHands__right__15",attrs:{src:a("3j3o")}})],1)])])])])],1)}),[],!1,null,null,null);"function"==typeof m&&m(v);e.default=v.exports},pOEY:function(t,e,a){"use strict";a("as+z")},toAj:function(t,e,a){"use strict";var i=a("I+eb"),r=a("ppGB"),s=a("QIpd"),o=a("EUja"),n=a("0Dky"),c=1..toFixed,l=Math.floor,d=function(t,e,a){return 0===e?a:e%2==1?d(t,e-1,a*t):d(t*t,e/2,a)};i({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}))},{toFixed:function(t){var e,a,i,n,c=s(this),p=r(t),_=[0,0,0,0,0,0],u="",h="0",f=function(t,e){for(var a=-1,i=e;++a<6;)i+=t*_[a],_[a]=i%1e7,i=l(i/1e7)},g=function(t){for(var e=6,a=0;--e>=0;)a+=_[e],_[e]=l(a/t),a=a%t*1e7},m=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==_[t]){var a=String(_[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(u="-",c=-c),c>1e-21)if(a=(e=function(t){for(var e=0,a=t;a>=4096;)e+=12,a/=4096;for(;a>=2;)e+=1,a/=2;return e}(c*d(2,69,1))-69)<0?c*d(2,-e,1):c/d(2,e,1),a*=4503599627370496,(e=52-e)>0){for(f(0,a),i=p;i>=7;)f(1e7,0),i-=7;for(f(d(10,i,1),0),i=e-1;i>=23;)g(1<<23),i-=23;g(1<<i),f(1,1),g(2),h=m()}else f(0,a),f(1<<-e,0),h=m()+o.call("0",p);return h=p>0?u+((n=h.length)<=p?"0."+o.call("0",p-n)+h:h.slice(0,n-p)+"."+h.slice(n-p)):u+h}})},v8ht:function(t,e,a){}}]);