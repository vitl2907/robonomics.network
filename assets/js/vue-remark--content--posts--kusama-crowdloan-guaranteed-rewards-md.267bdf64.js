(window.webpackJsonp=window.webpackJsonp||[]).push([[43,8,9,76,77],{"/8Jy":function(t,n,e){},"6tRk":function(t,n,e){"use strict";e.r(n);var o=e("rePB"),a=(e("07d7"),e("PKPk"),e("3bBZ"),e("yXV3"),e("mRH6"),{components:{Button:function(){return e.e(9).then(e.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","mid","big","block"].indexOf(t)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(t){return-1!==["gorizontal","vertical"].indexOf(t)}},back:{type:String,default:"white",validator:function(t){return-1!==["transparent","white","blue","gradient"].indexOf(t)}},alignContent:{type:String,default:"none",validator:function(t){return-1!==["left","center","right","none"].indexOf(t)}},alignContentV:{type:String,default:"top",validator:function(t){return-1!==["middle","top"].indexOf(t)}}},computed:{card_classes:function(){var t;return t={},Object(o.a)(t,"card",!0),Object(o.a)(t,"icon",this.icon),Object(o.a)(t,"image",this.image||this.imageLocal),Object(o.a)(t,"".concat(this.orientation),!0),Object(o.a)(t,"".concat(this.back),!0),Object(o.a)(t,"alignContent-".concat(this.alignContent),!0),Object(o.a)(t,"alignContentV-".concat(this.alignContentV),!0),Object(o.a)(t,"oldy","transparent"!=this.back),Object(o.a)(t,"oldy__link",this.link||this.popup),t},pic_classes:function(){var t;return t={},Object(o.a)(t,"pic",!0),Object(o.a)(t,"round",this.imageRound),Object(o.a)(t,"icon",this.icon),Object(o.a)(t,"image",this.image||this.imageLocal),Object(o.a)(t,"".concat(this.imageSize),!0),t},link_classes:function(){var t;return t={},Object(o.a)(t,"link",!0),Object(o.a)(t,"text",this.linkText),Object(o.a)(t,"overlap",this.overlap),t},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?e("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(e("dVYI"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.card_classes},[t.icon||t.image||t.imageLocal?e("div",{class:t.pic_classes},[e("g-image",{attrs:{"aria-hidden":"true",src:t.pic_src}})],1):t._e(),t.hasDefaultSlot?e("div",{staticClass:"content"},[t._t("default")],2):t._e(),t.link&&!t.linkButton?e("g-link",{class:t.link_classes,attrs:{to:t.link}},[t.linkText?[t._v(t._s(t.linkText))]:t._e()],2):t._e(),t.link&&t.linkText&&t.linkButton?e("Button",{staticClass:"large",attrs:{link:t.link,label:t.linkText,button:"primary"}}):t._e()],1)}),[],!1,null,"f2eea1cc",null);n.default=r.exports},Kn2e:function(t,n,e){"use strict";e.r(n);var o=e("rePB"),a={props:{link:{type:String},label:{type:String},button:{type:String,default:"border"},scale:{type:String,default:"1"},disabled:{type:Boolean,default:!1},click:{type:Function}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"button",!0),Object(o.a)(t,"".concat(this.button),!0),t}}},i=e("KHd+"),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.link?e("g-link",{class:t.classes,style:{transform:"scale("+t.scale+")"},attrs:{to:t.link}},[t._v(t._s(t.label))]):e("button",{class:t.classes,style:{transform:"scale("+t.scale+")"},attrs:{type:"submit",disabled:t.disabled},on:{click:function(n){return t.$emit("click")}}},[t.label?[t._v(t._s(t.label))]:[t._t("default")]],2)}),[],!1,null,null,null);n.default=r.exports},UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},dVYI:function(t,n,e){"use strict";e("/8Jy")},h97E:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),a=e("6tRk"),i=e("Kn2e"),r=e("UQSp"),s=e("Kw5r");function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={Card:a.default,Button:i.default,VueRemarkRoot:r.a},u=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===l(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},d=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",f={excerpt:null,title:"Robonomics Crowdloan unveils plan B to win with plan A",date:"2021-07-02T00:00:00.000Z",published:!0,locale:"en",tags:["Tokens","Robonomics parachain","Kusama"],cover_image:"./images/kusama-crowdloan-guaranteed-rewards/Crowdloan_plan_A_B_blog.jpg",description:"Risk-free contribution in Robonomics Crowdloan announcement. Each participant of the summer crowdloan campaign will get 3.5 XRT and an NFT Robonomics Pioneer card.",abstract:"<i>“Happiness for everybody, free, and no one will go away unsatisfied!”</i> <p>Roadside picnic, Arkady and Boris Strugatsky</p>",related:["Robonomics Crowdloan final parameters and 48 weeks roadmap","Letter from Robonomics co-founder"]};var m=function(t){t.options[p]&&(t.options[p]=f),s.a.util.defineReactive(t.options,p,f),t.options.computed=d.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VueRemarkRoot",[e("p",[t._v("Robonomics team greatly values the support from the community. We understand that the main problem which stands before you right now is the fear of ending up being contributors of a project that will not get a slot. No slot, no reward. As a result, the community supports the first and doubts to support those who are fighting for the 4th and 5th slots.")]),e("p",[t._v("Of course, we could take a step back now and just wait for Autumn, when auctions for the next slots should start. Observing the current crowdfunding process, it is safe to say that Robonomics will get a Kusama parachain slot this year. Nonetheless, we would like to fight for the 4th and 5th slots. And that is why we are publishing plan B.")]),e("p",[t._v("Plan B guarantees rewards for all of the 2021 crowdloan campaign participants and the launch of staking on the Robonomics frontier network. Which will last until we obtain a Kusama network slot. This is an excellent opportunity to cool your nerves and collectively move forward with the project roadmap regardless of the results of this summer’s parachain auctions.")]),e("h2",{attrs:{id:"robonomics-crowdloan-campaign-plan-b"}},[e("a",{attrs:{href:"#robonomics-crowdloan-campaign-plan-b","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Robonomics Crowdloan Campaign Plan “B”")]),e("Card",[e("p",[t._v("For every 1 KSM all summer crowdloan campaign "),e("strong",[t._v("all participants will get 3.5 XRT")]),t._v(" on the Robonomics frontier network.")])]),e("Card",[e("p",[t._v("Within a month following the conclusion of the first 5 auctions, staking on the frontier network will be activated with an APR of 50% until a Kusama network slot is obtained.")])]),e("Card",[e("p",[t._v("Every participant of the summer crowdloan campaign will receive an "),e("strong",[t._v("NFT Robonomics Pioneer card")]),t._v(", which will provide additional bonuses, details will be shared closer to the next wave of auctions.")])]),e("Card",{attrs:{orientation:"vertical",link:"/kusama-slot",imageLocal:"Robonomics-PolkaPet-w-Kusama.png",imageSize:"big",imageRound:!1}},[e("Button",{staticClass:"large",attrs:{link:"/kusama-slot",label:"Enter the Robonomics Crowdloan Campaign",button:"primary"}})],1)],1)}),[],!1,null,null,null);"function"==typeof u&&u(h),"function"==typeof m&&m(h);n.default=h.exports}}]);