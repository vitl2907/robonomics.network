(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{F6QW:function(e,t,s){"use strict";s.r(t);var a={data:function(){return{selected:0}},props:["asset"],methods:{selectInButton:function(e){"SELECT"!==e.target.tagName&&"OPTION"!==e.target.tagName||e.preventDefault()}}},n=(s("mB20"),s("KHd+")),i={components:{ShareItem:Object(n.a)(a,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("g-link",{staticClass:"share__link oldy oldy__link",attrs:{to:e.asset.options[e.selected].link},on:{click:e.selectInButton}},[e.asset.img?a("div",{staticClass:"share__col share__img"},[a("g-image",{attrs:{src:s("GSoK")("./"+e.asset.img)}})],1):e._e(),a("div",{staticClass:"share__col share__info"},[a("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"share__title",domProps:{innerHTML:e._s(e.asset.title)}}),a("small",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"share__description",domProps:{innerHTML:e._s(e.asset.description)}})]),a("div",{staticClass:"share__col share__buttons"},[a("button",{staticClass:"button primary select button__icon"},[e.asset.options.length>1?a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?s:s[0]}}},e._l(e.asset.options,(function(t,s){return a("option",{attrs:{name:t.link},domProps:{value:s}},[e._v("\n              "+e._s(t.text)+"\n          ")])})),0):e._e(),1===e.asset.options.length?a("small",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.asset.options[0].text)}}):e._e(),e.asset.buttonicon?a("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"icon",domProps:{innerHTML:e._s(e.asset.buttonicon)}}):e._e()])])])}),[],!1,null,"9e166af8",null).exports},props:{assets:{type:Array,default:function(){return[]}},classes:""}},r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"ul-nostyle"},e._l(e.assets,(function(t,a){return e.assets?s("li",{key:a,staticClass:"share",class:e.classes},[s("ShareItem",{attrs:{asset:t}})],1):e._e()})),0)}),[],!1,null,null,null);t.default=r.exports},mB20:function(e,t,s){"use strict";s("zT0X")},zT0X:function(e,t,s){}}]);