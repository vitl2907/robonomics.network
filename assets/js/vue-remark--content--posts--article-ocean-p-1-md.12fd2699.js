(window.webpackJsonp=window.webpackJsonp||[]).push([[35,10,72,73],{"/8Jy":function(t,e,o){},"6tRk":function(t,e,o){"use strict";o.r(e);var n=o("rePB"),a=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(8).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","mid","big","block"].indexOf(t)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(t){return-1!==["gorizontal","vertical"].indexOf(t)}},back:{type:String,default:"white",validator:function(t){return-1!==["transparent","white","blue","gradient"].indexOf(t)}},alignContent:{type:String,default:"none",validator:function(t){return-1!==["left","center","right","none"].indexOf(t)}},alignContentV:{type:String,default:"top",validator:function(t){return-1!==["middle","top"].indexOf(t)}}},computed:{card_classes:function(){var t;return t={},Object(n.a)(t,"card",!0),Object(n.a)(t,"icon",this.icon),Object(n.a)(t,"image",this.image||this.imageLocal),Object(n.a)(t,"".concat(this.orientation),!0),Object(n.a)(t,"".concat(this.back),!0),Object(n.a)(t,"alignContent-".concat(this.alignContent),!0),Object(n.a)(t,"alignContentV-".concat(this.alignContentV),!0),Object(n.a)(t,"oldy","transparent"!=this.back),Object(n.a)(t,"oldy__link",this.link||this.popup),t},pic_classes:function(){var t;return t={},Object(n.a)(t,"pic",!0),Object(n.a)(t,"round",this.imageRound),Object(n.a)(t,"icon",this.icon),Object(n.a)(t,"image",this.image||this.imageLocal),Object(n.a)(t,"".concat(this.imageSize),!0),t},link_classes:function(){var t;return t={},Object(n.a)(t,"link",!0),Object(n.a)(t,"text",this.linkText),Object(n.a)(t,"overlap",this.overlap),t},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(o("dVYI"),o("KHd+")),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.card_classes},[t.icon||t.image||t.imageLocal?o("div",{class:t.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:t.pic_src}})],1):t._e(),t.hasDefaultSlot?o("div",{staticClass:"content"},[t._t("default")],2):t._e(),t.link&&!t.linkButton?o("g-link",{class:t.link_classes,attrs:{to:t.link}},[t.linkText?[t._v(t._s(t.linkText))]:t._e()],2):t._e(),t.link&&t.linkText&&t.linkButton?o("Button",{staticClass:"large",attrs:{link:t.link,label:t.linkText,button:"primary"}}):t._e()],1)}),[],!1,null,"f2eea1cc",null);e.default=r.exports},MUGl:function(t,e,o){"use strict";o.r(e);var n=o("KHd+"),a=o("6tRk"),i=o("UQSp"),r=o("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var s={Card:a.default,VueRemarkRoot:i.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===c(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:o[t]=function(){return s[t]}}))},u=r.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Robonomics Network x Ocean Protocol Collaboration p.1",date:"2021-01-12T00:00:00.000Z",published:!0,locale:"en",tags:["Collaborations"],cover_image:"./images/OCEAN-p1/Robonomics_Ocean_1.jpg",description:"Announcement of the collaboration between OCEAN Protocol and Robonomics Network"};var f=function(t){t.options[p]&&(t.options[p]=d),r.a.util.defineReactive(t.options,p,d),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},m=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("p",[t._v("We’re glad to announce that Robonomics Network enters into a partnership with OCEAN protocol.")]),o("blockquote",[o("p",[t._v("Robonomics.network - is a tool that allows developers and engineers to connect IoT & all ROS compatible devices to the digital economy.")])]),o("p",[t._v("With Robonomics, robots and IoT devices can become autonomous economic agents, meaning they can enter into legal obligations, own things, and do whatever humans can do on the open labor market and even more!")]),o("p",[t._v("Robots are producing a lot of data daily; some pieces of that data are quite valuable and could be monetized by a robot or its developer. Here comes the OCEAN protocol.")]),o("blockquote",[o("p",[t._v("OCEAN - is a protocol that allows monetizing any kind of data. Participants of the protocol can earn by selling and curating/staking on data.")])]),o("p",[t._v("The integration aims to create a sandbox for testing collaboration of both technologies for further development of pilot projects and products in 2021.")]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-lonshakov---software-architect-at-robonomicsnetwork--"}},[o("a",{attrs:{href:"#sergei-lonshakov---software-architect-at-robonomicsnetwork--","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Sergei Lonshakov - Software architect at Robonomics.Network -")]),o("p",[t._v('"Joint experiments of Robonomics and OCEAN teams on the crossing subjects, specifically launch of the cyber-physical-systems and processing produced data will allow merging teams knowledge and could lead to marvelous discoveries within 1 year."')])]),o("Card",{attrs:{image:"/avatars/Manan-Patel.jpg",back:"transparent"}},[o("h3",{attrs:{id:"manan-patel---growth-accelerator-at-ocean-protocol--"}},[o("a",{attrs:{href:"#manan-patel---growth-accelerator-at-ocean-protocol--","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Manan Patel - Growth Accelerator at Ocean Protocol -")]),o("p",[t._v('"With this collaboration Ocean Protocol will help Robonomics to leverage their technology and discover new use cases in securely monetising plethora of data generated by robots and helping robots and related IoT devices become revenue generating machines."')])]),o("p",[t._v("One of the first milestones for this collaboration will be creating a course.\nIt’ll explain how to launch a device on Robonomics Network then store and monetize data on OCEAN protocol in virtual environment.")]),o("p",[t._v("We’ll release 2nd part of this article to dive deeper into the possible use-cases of this integration.")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(m),"function"==typeof f&&f(m);e.default=m.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},dVYI:function(t,e,o){"use strict";o("/8Jy")}}]);