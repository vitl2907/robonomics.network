(window.webpackJsonp=window.webpackJsonp||[]).push([[70,8,76,77],{"/8Jy":function(t,e,o){},"6tRk":function(t,e,o){"use strict";o.r(e);var a=o("rePB"),n=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(9).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","mid","big","block"].indexOf(t)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(t){return-1!==["gorizontal","vertical"].indexOf(t)}},back:{type:String,default:"white",validator:function(t){return-1!==["transparent","white","blue","gradient"].indexOf(t)}},alignContent:{type:String,default:"none",validator:function(t){return-1!==["left","center","right","none"].indexOf(t)}},alignContentV:{type:String,default:"top",validator:function(t){return-1!==["middle","top"].indexOf(t)}}},computed:{card_classes:function(){var t;return t={},Object(a.a)(t,"card",!0),Object(a.a)(t,"icon",this.icon),Object(a.a)(t,"image",this.image||this.imageLocal),Object(a.a)(t,"".concat(this.orientation),!0),Object(a.a)(t,"".concat(this.back),!0),Object(a.a)(t,"alignContent-".concat(this.alignContent),!0),Object(a.a)(t,"alignContentV-".concat(this.alignContentV),!0),Object(a.a)(t,"oldy","transparent"!=this.back),Object(a.a)(t,"oldy__link",this.link||this.popup),t},pic_classes:function(){var t;return t={},Object(a.a)(t,"pic",!0),Object(a.a)(t,"round",this.imageRound),Object(a.a)(t,"icon",this.icon),Object(a.a)(t,"image",this.image||this.imageLocal),Object(a.a)(t,"".concat(this.imageSize),!0),t},link_classes:function(){var t;return t={},Object(a.a)(t,"link",!0),Object(a.a)(t,"text",this.linkText),Object(a.a)(t,"overlap",this.overlap),t},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),r=(o("dVYI"),o("KHd+")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.card_classes},[t.icon||t.image||t.imageLocal?o("div",{class:t.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:t.pic_src}})],1):t._e(),t.hasDefaultSlot?o("div",{staticClass:"content"},[t._t("default")],2):t._e(),t.link&&!t.linkButton?o("g-link",{class:t.link_classes,attrs:{to:t.link}},[t.linkText?[t._v(t._s(t.linkText))]:t._e()],2):t._e(),t.link&&t.linkText&&t.linkButton?o("Button",{staticClass:"large",attrs:{link:t.link,label:t.linkText,button:"primary"}}):t._e()],1)}),[],!1,null,"f2eea1cc",null);e.default=i.exports},Knpa:function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),n=o("6tRk"),r=o("UQSp"),i=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var l={Card:n.default,VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===s(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:o[t]=function(){return l[t]}}))},u=i.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",p={excerpt:null,title:"Polkadot for the IoT market: Robonomics is ready for real world use cases on Kusama!",date:"2021-08-31T00:00:00.000Z",published:!0,locale:"zh",cover_image:"./images/polkadot-for-iot-with-robonomics/cover.jpg",description:"The Robonomics team wants to impact the Kusama network development with four scenarios from the real world. These use cases describe unique opportunities for the crypto audience and all participants of the IoT market.",abstract:"The Robonomics team wants to impact the Kusama network development with four scenarios from the real world. These use cases describe unique opportunities for the crypto audience and all participants of the IoT market. "};var d=function(t){t.options[h]&&(t.options[h]=p),i.a.util.defineReactive(t.options,h,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},f=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("p",[t._v("Our team already has various business cases that are ready to leverage the parachain technology. But before we can roll out these use cases we need to obtain a parachain in the "),o("a",{attrs:{href:"https://kusama.network/auctions/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Kusama Parachain Auctions")]),t._v(". So, let’s talk about each of these current use cases.")]),o("h2",{attrs:{id:"meet-spot-our-robodog"}},[o("a",{attrs:{href:"#meet-spot-our-robodog","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Meet Spot, our Robodog")]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/_xBLkszEwWk",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),o("p",[t._v("This summer, the first group of engineers learned to work with our own Spot as part of the "),o("a",{attrs:{href:"https://spot-sdk.education",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("spot-sdk.education")]),t._v(" course. By the end of September, anyone, anywhere in the world can take our course and get his hands on with the robodog from "),o("a",{attrs:{href:"https://www.bostondynamics.com/spot",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Boston Dynamics")]),t._v(". The course is developed by robotics specialists from the "),o("a",{attrs:{href:"https://en.itmo.ru/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("ITMO University")]),t._v(" in St. Petersburg and "),o("a",{attrs:{href:"https://merklebot.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Merklebot")]),t._v(" acting as the local operator in the San Francisco Bay Area lab, the home of our Spot. ")]),o("p",[t._v("Accessing Spot is organized through the use of two parachains - the Robonomics and Statemine parachains. Logs of the students passing the course will be recorded on the Robonomics Parachain where the "),o("a",{attrs:{href:"https://polkadot.network/statemine-upgrade-launches-new-phase-of-parachain-functionality/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Statemine parachain")]),t._v(" is being used to replace user accounts with unique access tokens that students will receive after payment of their course.")]),o("h2",{attrs:{id:"an-urban-sensor-network-on-the-volga-river"}},[o("a",{attrs:{href:"#an-urban-sensor-network-on-the-volga-river","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("An Urban Sensor Network on the Volga river")]),o("p",[t._v("One experiment that is leveraging the power of "),o("a",{attrs:{href:"https://ipfs.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("IPFS")]),t._v(" and "),o("a",{attrs:{href:"https://www.substrate.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Substrate")]),t._v(" based Blockchain technologies is currently taking place in Tolyatti. The focus here is creating an alarm network detecting high levels of air pollution without a commercial focus and being dependent on a government, but solely being supported by the citizens of Tolyatti and the Russian Airalab organization. The automatically collected information on exceeding the level of air pollution will be used for a quick response of the mobile laboratory, which is already capable of conducting a detailed analysis of particles in the air.")]),o("p",[t._v("All data collected by the Urban Sensor Network will be securely recorded in the Robonomics parachain to avoid any possibility of intervention in the measurement history and provide security from disabling the network during attacks of the main server. ")]),o("p",[t._v("It is an example of the social impact the Robonomics project can have in these times where "),o("a",{attrs:{href:"https://www.bloomberg.org/blog/accelerating-clean-air-action-one-data-point-at-a-time/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("90% of the world's population breathes dirty air")]),t._v(". Thus, with the help of Kusama we can have a trustable, immutable way of storing pollution data which can be used for science to create a better world for all "),o("a",{attrs:{href:"https://www.brookings.edu/blog/up-front/2020/06/05/corruption-is-a-threat-to-planet-earth/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("protected against corrupted actors on both corporate and government level")]),t._v(".")]),o("Card",[o("p",[t._v("Watch "),o("strong",[t._v("a step-by-step process")]),t._v(" of how to connect an SDS011 Air Quality Sensor to the Robonomics Decentalized Sensor Network from our Community member")]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/AQ7ZzgbN7jU",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])]),o("h2",{attrs:{id:"digital-twins-for-smart-leasing"}},[o("a",{attrs:{href:"#digital-twins-for-smart-leasing","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Digital Twins for Smart Leasing")]),o("p",[t._v("There is an interesting new use case in Robonomics. For four months already, an industrial manipulator has been operating in a manufacturing facility in the United States with an hourly wage. At the end of each shift, the manipulator updates its digital twin instance stored in the parachain. Based on the changes in the digital twin, an invoice is issued for the use of the manipulator structured as IoT-enabled leasing. ")]),o("p",[t._v("Thus, we can say that Kusama will be an example of a fintech solution from web3 for the new industry 4.0. "),o("a",{attrs:{href:"https://www2.deloitte.com/content/dam/Deloitte/us/Documents/manufacturing/us-supply-chain-of-the-autonomous-robots.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Someday the public will understand the significance of this use case")]),t._v(", and we will see a boom of DeFi for this modern industry!")]),o("h2",{attrs:{id:"digital-passports-for-iot-systems"}},[o("a",{attrs:{href:"#digital-passports-for-iot-systems","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Digital Passports for IoT systems")]),o("p",[t._v("Two projects — one is from New Zealand — are using parachains for recording data about production manufacturing. In one case, data about the content of substances in the ground on farms is collected, in the second — data about the final assembling of medical equipment. ")]),o("p",[t._v("Both scenarios would help the Kusama network to expose itself as a registry for global production distributors.")]),o("Card",[o("p",[o("strong",[t._v("Project 1")]),t._v(" New Zealand’s premier industry is considered to be Agriculture. Climate change and clean water in our rivers are also at the forefront of New Zealand’s concerns. Luckily, with the advances in precision agriculture and the efficiency of our world-leading practices, our sheep and beef farmers can claim to produce less Greenhouse Gas Emissions to get a piece of meat to a dinner table in London than the comparable farmers in Wales:")]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/vZGMeYKInAk",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])]),o("Card",[o("p",[o("strong",[t._v("Project 2")]),t._v(" Demonstration of the work of an automated workstation for video recording of the assembly process and testing of complex technical products.")]),o("div",{staticClass:"youtube-embed"},[o("div",{staticStyle:{width:"100%",margin:"0 auto"}},[o("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/wmeBIbNaBlQ",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])]),o("h2",{attrs:{id:"second-wave-of-kusama-crowdloans"}},[o("a",{attrs:{href:"#second-wave-of-kusama-crowdloans","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Second Wave of Kusama Crowdloans")]),o("p",[t._v("We would love to see your support for "),o("a",{attrs:{href:"https://robonomics.network/kusama-slot/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics during its crowdloan")]),t._v(" for the 6-10th parachain slot on the Kusama network so we can implement each use case as soon as possible!")]),o("p",[t._v("While these use cases are just scratching the surface of the potential that the Robonomics Network will bring to the industry 4.0 after obtaining a parachain slot on "),o("a",{attrs:{href:"https://kusama.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Kusama")]),t._v(", they demonstrate the numerous capabilities of Web3 that are not yet being explored or utilized. ")]),o("p",[o("em",[t._v("This is only the beginning of Robonomics' Web3 journey, and ultimately we plan to enable millions of interoperable IoT devices in the Polkadot ecosystem, including many of which have not yet been conceived, but are already possible with "),o("a",{attrs:{href:"https://blog.aira.life/a-brief-introduction-to-robonomics-9b7884172e77",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("the technology of Robonomics")]),t._v("!")])]),o("Card",{attrs:{icon:"/icons/icon-future.png"}},[o("h3",{attrs:{id:"want-to-be-a-part-of-the-future"}},[o("a",{attrs:{href:"#want-to-be-a-part-of-the-future","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Want to be a part of the future?")]),o("p",[t._v("Head over to the "),o("a",{attrs:{href:"https://robonomics.network/kusama-slot/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics Crowdloan page")]),t._v(" or the "),o("a",{attrs:{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Kusama Portal")]),t._v(" and support us building the infrastructure for the Smart Robotic grid of tomorrow!🦾")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof d&&d(f);e.default=f.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},dVYI:function(t,e,o){"use strict";o("/8Jy")}}]);