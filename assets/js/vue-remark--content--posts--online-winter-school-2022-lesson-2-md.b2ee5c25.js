(window.webpackJsonp=window.webpackJsonp||[]).push([[55,6,9,95,96],{"/8Jy":function(e,t,n){},"6tRk":function(e,t,n){"use strict";n.r(t);var o=n("rePB"),i=(n("07d7"),n("PKPk"),n("3bBZ"),n("yXV3"),n("mRH6"),{components:{Button:function(){return n.e(6).then(n.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big","block"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(o.a)(e,"card",!0),Object(o.a)(e,"icon",this.icon),Object(o.a)(e,"image",this.image||this.imageLocal),Object(o.a)(e,"".concat(this.orientation),!0),Object(o.a)(e,"".concat(this.back),!0),Object(o.a)(e,"alignContent-".concat(this.alignContent),!0),Object(o.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(o.a)(e,"oldy","transparent"!=this.back),Object(o.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(o.a)(e,"pic",!0),Object(o.a)(e,"round",this.imageRound),Object(o.a)(e,"icon",this.icon),Object(o.a)(e,"image",this.image||this.imageLocal),Object(o.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(o.a)(e,"link",!0),Object(o.a)(e,"text",this.linkText),Object(o.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?n("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),a=(n("dVYI"),n("KHd+")),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?n("div",{class:e.pic_classes},[n("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?n("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?n("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?n("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,"f2eea1cc",null);t.default=s.exports},B2e2:function(e,t,n){"use strict";n("07d7"),n("PKPk"),n("3bBZ"),n("R5XZ");var o={components:{VueRecaptcha:function(){return n.e(14).then(n.bind(null,"4JY7"))}},metaInfo:{script:[{src:"https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",body:!0}]},props:{comment:""},data:function(){return{email:null,status:"none",recaptchaSitekey:"6LeWbWQUAAAAAPkpf_6AokhGBcvnOexOpbARwk6Z"}},methods:{onSubmit:function(){this.$refs.invisibleRecaptcha.execute()},onVerify:function(e){if(e){this.status="wait";var t="";if(this.email&&(t="email="+encodeURIComponent(this.email)+"&locale="+encodeURIComponent(this.$locale)+"&comment="+encodeURIComponent(this.comment)),this.$PostGoogleSheets(t)){var n=this;setTimeout((function(){n.status="ok"}),1500)}else this.status="error"}}}},i=(n("jP48"),n("KHd+")),a=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form",class:"status-"+e.status},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[n("label",{staticClass:"label"},[n("span",[e._v(e._s(e.$ts("Your email"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("label",[n("input",{attrs:{type:"checkbox",name:"agreement",required:""}}),e._v(" "+e._s(e.$ts("I agree to receive emails")))]),n("vue-recaptcha",{ref:"invisibleRecaptcha",attrs:{size:"invisible",sitekey:e.recaptchaSitekey},on:{verify:e.onVerify}}),n("div",[n("button",[e._v(e._s(e.$ts("Send")))])])],1),n("div",{staticClass:"form-message"},[e._v(e._s(e.$ts("Thanks, your application has been sent!")))])])}),[],!1,null,"6494aafb",null);t.a=a.exports},Kn2e:function(e,t,n){"use strict";n.r(t);var o=n("rePB"),i={props:{link:{type:String},label:{type:String},button:{type:String,default:"border"},scale:{type:String,default:"1"},disabled:{type:Boolean,default:!1},click:{type:Function}},computed:{classes:function(){var e;return e={},Object(o.a)(e,"button",!0),Object(o.a)(e,"".concat(this.button),!0),e}}},a=n("KHd+"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.link?n("g-link",{class:e.classes,style:{transform:"scale("+e.scale+")"},attrs:{to:e.link}},[e._v(e._s(e.label))]):n("button",{class:e.classes,style:{transform:"scale("+e.scale+")"},attrs:{type:"submit",disabled:e.disabled},on:{click:function(t){return e.$emit("click")}}},[e.label?[e._v(e._s(e.label))]:[e._t("default")]],2)}),[],!1,null,null,null);t.default=s.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},dVYI:function(e,t,n){"use strict";n("/8Jy")},jP48:function(e,t,n){"use strict";n("tIkw")},p55g:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),i=n("6tRk"),a=n("B2e2"),s=n("Kn2e"),r=n("UQSp"),c=n("Kw5r");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}c.a.config.optionMergeStrategies;var u={Card:i.default,UserForm:a.a,Button:s.default,VueRemarkRoot:r.a},d=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(u).forEach((function(e){"object"===l(u[e])&&"function"==typeof u[e].render||"function"==typeof u[e]&&"function"==typeof u[e].options.render?t[e]=u[e]:n[e]=function(){return u[e]}}))},p=c.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",f={excerpt:null,title:"February 23 / Lesson 2 / The Robonomics Whitepaper 2022. Chapter 1. At the junction cybernetics and economics",date:"2022-02-23T00:00:00.000Z",published:!0,locale:"en",cover_image:"./images/online-winter-school-2022-lesson-2/cover.jpg",description:"We are glad that you were able to pass through the black mirror and not drown in the digital world. But now a much deeper dive awaits you... the dive into the theory of the latest web3 technologies at the intersection of Cybernetics and Economics, which are designed to help IoT systems function safely and efficiently in our homes and cities.",abstract:"Hello to all participants!"};var m=function(e){e.options[h]&&(e.options[h]=f),c.a.util.defineReactive(e.options,h,f),e.options.computed=p.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},b=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("p",[e._v("We are glad that you were able to pass through the black mirror and not drown in the digital world. But now a much deeper dive awaits you... the dive into the theory of the latest web3 technologies at the intersection of Cybernetics and Economics, which are designed to help IoT systems function safely and efficiently in our homes and cities.")]),n("h2",{attrs:{id:"welcome-to-the-second-lesson-of-winter-school-of-robonomics-2022"}},[n("a",{attrs:{href:"#welcome-to-the-second-lesson-of-winter-school-of-robonomics-2022","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Welcome to the second lesson of Winter School of Robonomics 2022!")]),n("p",[e._v("In this lesson, we want to introduce you to the first chapter of the updated Robonomics Whitepaper 2022, which our team has been developing for almost a year now. The ideas presented in this document have been nurtured in our heads and hearts for a long time, constantly supplemented after various experiments and proof-of-concepts. We do our best "),n("a",{attrs:{href:"https://robonomics.network/papers/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("to report at conferences and publish in scientific journals")]),e._v(" some of the strongest results and materials. And for everyone's understanding and convenience, we have collected and compressed it all together as separate whitepaper chapters.")]),n("p",[e._v('The first chapter is called "At the Intersection of Cybernetics and Economics", and it will introduce you to the rationale for the concept of the '),n("em",[e._v("robot economy")]),e._v(" - an economic system in which devices act as independent agents capable of performing key economic activities previously unique to humans.")]),n("Card",[n("p",[e._v("We will show you:")]),n("ul",[n("li",[e._v("how the new challenges of the ongoing fourth industrial revolution affect the use of robotics and IoT systems;")]),n("li",[e._v("what will be the future of fully autonomous cyber-physical processes;")]),n("li",[e._v("why the answers to these challenges should be sought in the field of institutional economics, which seems to be far from robotics;")]),n("li",[e._v("and what about cryptocurrency, Bitcoin, Ethereum and Polkadot here.")])])]),n("Card",[n("p",[e._v("You can read the chapter in the original in different languages at the links:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://ipfs.io/ipfs/QmaxrVWRkNJ9FZmcetE1gBfG3YUKHZifQP9tjmtPGFB3zi",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("The first White Paper 2022 chapter - English")])]),n("li",[n("a",{attrs:{href:"https://ipfs.io/ipfs/QmcAm42dMHQxBCyDzsEEezjPrGR9uNdUjAtoQwKr9dayxW",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("The first White Paper 2022 chapter - Русский")])])]),n("p",[e._v("After reading the chapter, be sure to pass the test for the second lesson in order to participate in the prize draw. You will be asked 17 questions, and we hope they will inspire you to think deeper about our ideas. To pass the test, you need to score 10 correct answers out of 17 (60%, the standard value in academic practice).  Correct answers and a list of those who successfully completed the lesson will be published on the final day of the school.")]),n("Button",{attrs:{link:"https://lesson2.robonomics.academy/",label:"Take the Quiz",button:"primary block"}})],1),n("Card",[n("h2",{attrs:{id:"stay-tuned"}},[n("a",{attrs:{href:"#stay-tuned","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Stay tuned!")]),n("p",[e._v("If you'd like to receive email notifications about lessons start and some helpful materials, feel free to subscribe:")]),n("UserForm",{attrs:{comment:"robonomics.network lesson 1"}})],1)],1)}),[],!1,null,null,null);"function"==typeof d&&d(b),"function"==typeof m&&m(b);t.default=b.exports},tIkw:function(e,t,n){}}]);