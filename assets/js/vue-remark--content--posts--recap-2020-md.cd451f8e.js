(window.webpackJsonp=window.webpackJsonp||[]).push([[51,8,76,77],{"/8Jy":function(t,e,o){},"1V1Y":function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/00_2_rococo.950dd76.d344f41c1e8e2c5e9c8553858a983f63.jpg",size:{width:1194,height:734},sizes:"(max-width: 1194px) 100vw, 1194px",srcset:["/assets/static/00_2_rococo.82a2fbd.d344f41c1e8e2c5e9c8553858a983f63.jpg 480w","/assets/static/00_2_rococo.950dd76.d344f41c1e8e2c5e9c8553858a983f63.jpg 1194w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1194 734' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-2a030692c5abd92853d5cf71ca062b33'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-2a030692c5abd92853d5cf71ca062b33)' width='1194' height='734' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAnAEADASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAIDBAUGAQj/xAAtEAACAQMEAgECBAcAAAAAAAABAgMABBEFEiExE0FRYXEVIzKRIkJygbHBw//EABgBAAMBAQAAAAAAAAAAAAAAAAECAwQA/8QAIhEAAgEDAwUBAAAAAAAAAAAAAQIAAxEhBBIxExQiMkEj/9oADAMBAAIRAxEAPwDzeAfJzuzuGDkbdvsEfNbp/wAPZgRbaWDxkeCEf9f9ViB3Udr%2b8ycyPwc9mtftIgMeJr5LSxlLOWgjDDdtiSHjnHGZOPtTFzDp8bsoYF14wI4ypP3D4rLjULnAJmb47NPRXN7PIRBI5G3I3N39PvTCnm05lYC%2bJfrb6aIyS8/LHnwR8DP9fxShotiFVjfOV3DgNDnbxn%2bfvv1VQkmpzpBAl2Wy2BGZCFTnvk491DuLy8gleKWZg6MVOGyDj4%2bn1ovRK4YWircnBBl9q%2bkW9nd3K21wZ4EmdIyjpIzKCcMQp6wO%2bqpyVBYJyp6LDmmIdXv7WRXtrqWN9pUMjEEAjBH2IJFMQ3DtKqttweOqQqRiP02GTJg7rqQAuVk98Vwd0pLlJZSy579io1GYDxmzRKjE75zUdLa3HlhiLwhQxYtxn2Md/FN6e5SNgGV%2bGPjDMCp4w3WPeP8APqtDHKk8HjmRWQ8EdZrM2kdw9xItvDLJxgxpndg9cDk%2bqOgrkt%2bnyLWp3wPslRyyQtDKFm/MZhvIIEvIyM/SomoySTXLGVgzDI285QAnjoVc3Wk6ilhbTPZXTqCxCLG%2bRz7GP4fv7qlCSC%2bdbpWLAncCc4PYya3ah7EgG4kRRZPJlsY9a2a7S0ykHORzSZI4knTb%2brNSS%2bIzwKg5zdJnOc1mpV7ggiRUMx3GS6Q1tFG2Y5GJz0OKKKSEEjiWNpdrC6O3iKjtHViD%2bxzz9KeOtXbjxpKLWD1Hbjxr%2bw76HeaKKAULwJZdTVT1a0TPqsxggijdPywTvQMr5PYJzzS5NYuHiVLzxXqFcgXClih56b9Q7%2bcUUUeYe6rWtuMrGw8b5wCcYA7/ALUwsCK4bLEj5NFFcMcSO48T/9k=' /%3e%3c/svg%3e"}},"6tRk":function(t,e,o){"use strict";o.r(e);var a=o("rePB"),i=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(9).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","mid","big","block"].indexOf(t)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(t){return-1!==["gorizontal","vertical"].indexOf(t)}},back:{type:String,default:"white",validator:function(t){return-1!==["transparent","white","blue","gradient"].indexOf(t)}},alignContent:{type:String,default:"none",validator:function(t){return-1!==["left","center","right","none"].indexOf(t)}},alignContentV:{type:String,default:"top",validator:function(t){return-1!==["middle","top"].indexOf(t)}}},computed:{card_classes:function(){var t;return t={},Object(a.a)(t,"card",!0),Object(a.a)(t,"icon",this.icon),Object(a.a)(t,"image",this.image||this.imageLocal),Object(a.a)(t,"".concat(this.orientation),!0),Object(a.a)(t,"".concat(this.back),!0),Object(a.a)(t,"alignContent-".concat(this.alignContent),!0),Object(a.a)(t,"alignContentV-".concat(this.alignContentV),!0),Object(a.a)(t,"oldy","transparent"!=this.back),Object(a.a)(t,"oldy__link",this.link||this.popup),t},pic_classes:function(){var t;return t={},Object(a.a)(t,"pic",!0),Object(a.a)(t,"round",this.imageRound),Object(a.a)(t,"icon",this.icon),Object(a.a)(t,"image",this.image||this.imageLocal),Object(a.a)(t,"".concat(this.imageSize),!0),t},link_classes:function(){var t;return t={},Object(a.a)(t,"link",!0),Object(a.a)(t,"text",this.linkText),Object(a.a)(t,"overlap",this.overlap),t},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),r=(o("dVYI"),o("KHd+")),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.card_classes},[t.icon||t.image||t.imageLocal?o("div",{class:t.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:t.pic_src}})],1):t._e(),t.hasDefaultSlot?o("div",{staticClass:"content"},[t._t("default")],2):t._e(),t.link&&!t.linkButton?o("g-link",{class:t.link_classes,attrs:{to:t.link}},[t.linkText?[t._v(t._s(t.linkText))]:t._e()],2):t._e(),t.link&&t.linkText&&t.linkButton?o("Button",{staticClass:"large",attrs:{link:t.link,label:t.linkText,button:"primary"}}):t._e()],1)}),[],!1,null,"f2eea1cc",null);e.default=n.exports},"D/fw":function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),i=o("6tRk"),r=o("UQSp"),n=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var c={Card:i.default,VueRemarkRoot:r.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===s(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:o[t]=function(){return c[t]}}))},d=n.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",h={excerpt:null,title:"Robonomics Network 2020 Recap",date:"2020-12-30T00:00:00.000Z",published:!0,locale:"en",cover_image:"./images/Recap-2020/00_newyear.jpg",description:"Recap of the 2020 year in Robonomics: Blockchain development, Robonomics Web Services, Robotics, Sensors, Academia incentive program. ",abstract:"We decided to write a summing up article to highlight the important events in 2020 & feature the most active community members."};var u=function(t){t.options[p]&&(t.options[p]=h),n.a.util.defineReactive(t.options,p,h),t.options.computed=d.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},m=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("p",[t._v("It'd be tough for developers to answer newcomers' repeated questions without a reduction in productivity. We reached those results together as a team! Thank you for following us within 2020!")]),a("h2",{attrs:{id:"research--development"}},[a("a",{attrs:{href:"#research--development","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Research & Development")]),a("h3",{attrs:{id:"blockchain-development"}},[a("a",{attrs:{href:"#blockchain-development","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Blockchain development")]),a("p",[a("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics/status/1296834125073125379?s=20",target:"_blank",rel:"nofollow noopener noreferrer"}},[a("g-image",{attrs:{src:o("1V1Y"),alt:'"Robonomics Parachain on Kusama first"'}})],1)]),a("ul",[a("li",[a("p",[t._v("3rd in Rococo v0 – on August 21 the core Robonomics development team managed to join the 1st Rococo party. Robonomics Network joined Rococo 3rd, after Plasm & Acala networks.")])]),a("li",[a("p",[t._v("Core Robonomics developers forked Polkadot's Relay chain and registered there Robonomics parachain.")])]),a("li",[a("p",[t._v("Ready for Rococo v1 – Robonomics developers will register Robonomics Parachain on Rococo v1 on 4th January 2021.")])])]),a("Card",{attrs:{link:"https://github.com/airalab/robonomics",icon:"/icons/icon-github.png"}},[a("h4",{attrs:{id:"the-main-repository-of-the-substrate-based-version-of-robonomics-network"}},[a("a",{attrs:{href:"#the-main-repository-of-the-substrate-based-version-of-robonomics-network","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("The main repository of the Substrate-based version of Robonomics Network")])]),a("ul",[a("li",[t._v("DAO IPCI – a standalone substrate-based blockchain, the core "),a("a",{attrs:{href:"https://github.com/DAO-IPCI/DAO-IPCI",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics team has been maintaining")]),t._v(" it for six months. When the Robonomics parachain becomes Polkadot's relay chain, DAO IPCI will join the Robonomics Network as its parachain. Recently, another Web3 grant receiver – "),a("a",{attrs:{href:"https://evercity.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Evercity")]),t._v(' joined the DAO IPCI development process. They\'ll make a contribution to the "Green bonds" feature.')])]),a("h3",{attrs:{id:"robonomics-web-services"}},[a("a",{attrs:{href:"#robonomics-web-services","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Robonomics Web Services")]),a("p",[t._v("Robonomics' goal is to make "),a("a",{attrs:{href:"https://blog.aira.life/the-first-in-the-economy-of-robots-6f4bb115643b",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("robots part of the economy")]),t._v(" but first, we need to teach the user on how everything works and set up.")]),a("p",[t._v("Decentralized analogue ("),a("a",{attrs:{href:"https://blog.aira.life/robonomics-web-services-and-rws-token-intro-d730ab50ad42",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics Web Services")]),t._v(") of Amazon Web Services with an option to get access via a subscription model. It's designed to provide IoT & Robotics industries with an opportunity to build apps and services in a secure and cost-effective environment.")]),a("p",[t._v("The smooth connection process via "),a("a",{attrs:{href:"https://dapp.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Dapp.robonomics.network")]),t._v(" will allow developers, engineers and end-users to quickly connect IoT devices to Robonomics Parachain.")]),a("p",[a("a",{attrs:{href:"https://dapp.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Dapp")]),t._v(" serves as a bulletproof way to establish a peer-to-peer (direct) communication for all network participants.")]),a("p",[t._v("Regardless of the external circumstances, the market will never fail.  ")]),a("Card",{attrs:{link:"https://blog.aira.life/the-ultimate-guide-to-robonomics-rws-and-robonomics-parachain-on-polkadot-6d00b9b71248",icon:"/icons/icon-article.png"}},[a("h4",{attrs:{id:"the-ultimate-guide-to-robonomics-rws-and-robonomics-parachain-on-polkadot"}},[a("a",{attrs:{href:"#the-ultimate-guide-to-robonomics-rws-and-robonomics-parachain-on-polkadot","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("The ultimate guide to Robonomics, RWS and Robonomics parachain on Polkadot")])]),a("h3",{attrs:{id:"robotics"}},[a("a",{attrs:{href:"#robotics","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Robotics")]),a("h4",{attrs:{id:"robotics-use-cases"}},[a("a",{attrs:{href:"#robotics-use-cases","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Robotics use cases:")]),a("ol",[a("li",[a("p",[a("strong",[t._v("Veracity protocol – MerkeBot – Robonomics Network")])]),a("p",[t._v("Robonomics technologies can already solve the challenges that Industry 4.0 faces and they are already applied to real-world scenarios in the industrial environment.")]),a("p",[t._v("A large number of AI companies are building solutions to optimize the processes on the factory floor, allowing plants to produce more with less cost. However, most plants are hesitant to connect their infrastructure to the cloud directly since this results in potential cybersecurity risks, which could lead to million-dollar losses and even the loss of human life.")]),a("p",[a("a",{attrs:{href:"https://merklebot.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("MerkleBot")]),t._v(" has used "),a("a",{attrs:{href:"https://robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics Network")]),t._v(" to build a solution for industrial clients to connect their factory to the cloud-based AI in a secure way.")]),a("div",{staticClass:"youtube-embed"},[a("div",{staticStyle:{width:"100%",margin:"0 auto"}},[a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/8AL70LFVX5w",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[a("strong",[t._v("An architecture impossible without Kusama")])]),a("p",[t._v("During the Hakusama hackathon core Robonomics developers came up with a futuristic case. We wanted to play with the conquest of the space concept.")]),a("p",[t._v("Thus, we created an economical blockchain-based infrastructure for robotics on another planet, connected with Earth.")]),a("p",[t._v("We went to a desert to make a short movie about how the Mars Curiosity Rover could be launched on Mars from Earth through the Robonomics Parachain.")]),a("Card",{attrs:{link:"https://blog.aira.life/an-architecture-impossible-without-kusama-b306d8352677",icon:"/icons/icon-article.png"}},[a("h5",{attrs:{id:"explore-more"}},[a("a",{attrs:{href:"#explore-more","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Explore more")]),a("h5",{attrs:{id:"about"}},[a("a",{attrs:{href:"#about","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("about")]),a("h3",{attrs:{id:"our-hakusama-concept"}},[a("a",{attrs:{href:"#our-hakusama-concept","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("our Hakusama concept")])]),a("div",{staticClass:"youtube-embed"},[a("div",{staticStyle:{width:"100%",margin:"0 auto"}},[a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/31zXeUq3htE",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])],1)]),a("h4",{attrs:{id:"robotics-development"}},[a("a",{attrs:{href:"#robotics-development","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Robotics development:")]),a("p",[t._v("We created a framework & "),a("a",{attrs:{href:"https://wiki.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics Wiki")]),t._v(" for developers, and engineers for connecting all ROS-compatible robots under Robonomics Parachain control.")]),a("p",[t._v("The framework provides access to the most important features:")]),a("ul",[a("li",[t._v("Launch of the robot through blockchain transaction;")]),a("li",[t._v("Store a log of service, provided by a robot in the blockchain.")])]),a("Card",{attrs:{link:"https://blog.aira.life/robots-under-robonomics-control-overview-39337ac9fbbb",icon:"/icons/icon-article.png"}},[a("h4",{attrs:{id:"find-out-more-about-robots-under-robonomics-parachain-control"}},[a("a",{attrs:{href:"#find-out-more-about-robots-under-robonomics-parachain-control","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Find out more about robots under Robonomics parachain control")])]),a("div",{staticClass:"youtube-embed"},[a("div",{staticStyle:{width:"100%",margin:"0 auto"}},[a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/FpogdoXOnPA",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),a("hr"),a("div",{staticClass:"youtube-embed"},[a("div",{staticStyle:{width:"100%",margin:"0 auto"}},[a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/E8R6VbZvf9w",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),a("h3",{attrs:{id:"sensors"}},[a("a",{attrs:{href:"#sensors","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Sensors")]),a("h4",{attrs:{id:"sensors-use-cases"}},[a("a",{attrs:{href:"#sensors-use-cases","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Sensors use cases:")]),a("p",[t._v("In May 2020, Robonomics research team was featured on "),a("a",{attrs:{href:"https://www.frontiersin.org/articles/10.3389/frobt.2020.00070/full",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Frontiersin")]),t._v(" in \"Robotics & AI\" section. It's the leading academic journal for scientists and experts from various industries. After publication, the team made a proof-of-concept case in Saint's Petersburg river canals.")]),a("p",[t._v("In September 2020 we finished constructing the first fully equipped, Robonomics Parachain and IPFS featured water drone for trustable environmental monitoring.")]),a("p",[t._v("The project is based on the idea of a decentralized network, where sensor-equipped devices collect data and send it to a distributed ledger for safe storage. In other words, it is a combination of blockchain and collective intelligence of a decentralized self-managed drone infrastructure that acts as a multi-level solution to the problem. It is a swarm of drones that perform joint monitoring and cross verify each other's results in a bid to eliminate false alarms and provide authentic and precise data. "),a("a",{attrs:{href:"https://blog.aira.life/water-drone-2-0-first-stage-of-development-db8ad6c81d3c",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Read more about this case")])]),a("div",{staticClass:"youtube-embed"},[a("div",{staticStyle:{width:"100%",margin:"0 auto"}},[a("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[a("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/-B7WX4pGtRM",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),a("Card",{attrs:{link:"https://wiki.robonomics.network/docs/get-weather-on-fuji-mountain/",icon:"/icons/icon-article.png"}},[a("h4",{attrs:{id:"explore-more-about"}},[a("a",{attrs:{href:"#explore-more-about","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Explore more about")]),a("h4",{attrs:{id:"the-robonomics-parachain-architecture"}},[a("a",{attrs:{href:"#the-robonomics-parachain-architecture","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("the Robonomics parachain architecture")])]),a("h4",{attrs:{id:"sensors-development"}},[a("a",{attrs:{href:"#sensors-development","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Sensors Development:")]),a("p",[t._v("With the latest "),a("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics/status/1335955941653704706?s=20",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("release")]),t._v(", everyone can connect their sensors to Robonomics parachain.")]),a("p",[t._v("Supported humidity, temperature, pollution, GPS sensors. We merged opendata-stuttgart firmware by Luftdaten.")]),a("p",[t._v("To drive the adoption of an open-source sensors network based on Robonomics Web Services, the team decided to reward the first 15 participants with $300, In the form of native Robonomics token - XRT.")]),a("Card",{attrs:{link:"/blog/rewards-for-researchers-developers-and-engineers/",icon:"/icons/icon-article.png"}},[a("h4",{attrs:{id:"read-more-about"}},[a("a",{attrs:{href:"#read-more-about","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Read more about")]),a("h4",{attrs:{id:"the-incentive-program"}},[a("a",{attrs:{href:"#the-incentive-program","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("the incentive program")])]),a("h3",{attrs:{id:"academia-incentive-program"}},[a("a",{attrs:{href:"#academia-incentive-program","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Academia incentive program")]),a("p",[t._v("In order to attract early adopters and researchers from the different universities, Robonomics DAO came up with an Academia incentive program.")]),a("p",[a("strong",[t._v("Fast funding instead standard grants")])]),a("ul",[a("li",[a("p",[t._v("If you are a student and want to participate in the project, then contact your supervisor, discuss the conditions and contact us together.")])]),a("li",[a("p",[t._v("If you are a representative of the academic community and are interested in a project, then we need help finding contacts at universities.")])]),a("li",[a("p",[t._v("If you are a Kusama enthusiast and you are interested in the project, then help us convey our ideas to the Kusama community and councillors.")])])]),a("p",[a("a",{attrs:{href:"https://scholar.google.com/citations?user=J3HFpjoAAAAJ",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Alexander Kapitonov")]),t._v(" (dean in ITMO university, joined Robonomics back in 2015) and "),a("a",{attrs:{href:"http://www.heronrobots.com/about/people-info/15-fabio-bonsignorio",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Fabio Bonsignorio")]),t._v(" (founder and CEO of Heron Robots, who has been a visiting professor at the Scuola Superiore Sant'Anna until 2019) will lead the Academia incentive program.")]),a("Card",{attrs:{link:"/land/support-academia/",icon:"/icons/icon-article.png"}},[a("h4",{attrs:{id:"read-more-about-1"}},[a("a",{attrs:{href:"#read-more-about-1","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Read more about")]),a("h4",{attrs:{id:"the-academia-incentive-program"}},[a("a",{attrs:{href:"#the-academia-incentive-program","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("the Academia incentive program")])]),a("h2",{attrs:{id:"robonomics-community-hall-of-fame-2020"}},[a("a",{attrs:{href:"#robonomics-community-hall-of-fame-2020","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Robonomics community hall of fame 2020")]),a("p",[t._v("We'd love to reward the most active & engaged community members within 2020 with XRT for contributing to the growth of the Robonomics Telegram community.")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Payout amount in XRT")])])]),a("tbody",[a("tr",[a("td",[t._v("Pietro")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("samsara")]),a("td",[t._v("20")])]),a("tr",[a("td",[t._v("Jimmy Tudesky - stakenode.dev")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("Junte")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("Jack")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("Mahalleinir")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("POST HUMAN")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("Blademaster")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("Kev")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("HSVGTS - Baghunters.com")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("Agent_K")]),a("td",[t._v("20")])])])]),a("h2",{attrs:{id:"summary"}},[a("a",{attrs:{href:"#summary","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Summary")]),a("p",[t._v("Despite the Covid-19, 2020 was an exceptionally productive year for the core Robonomics Network development team.")]),a("ul",[a("li",[a("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics/status/1344662180260679684?s=20",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics Network is ready to register the Robonomics parachain on Rococo v1")])]),a("li",[a("a",{attrs:{href:"https://robots.ros.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("100+ popular & demanded robots could be connected to Robonomics parachain")])]),a("li",[a("a",{attrs:{href:"http://wiki.ros.org/Sensors",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("50+ ROS compatible sensors & cameras supported by Robonomics parachain")])]),a("li",[a("a",{attrs:{href:"https://wiki.robonomics.network/docs/create-account-in-dapp/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("5+ Detailed tutorials added to Wiki.Robonomics.Network")])]),a("li",[a("a",{attrs:{href:"https://dapp.robonomics.network/#/services",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("9 Use cases are available for the community")])])]),a("p",[t._v("We'll release a marketing recap in the mid-January, where we'll highlight results and share plans regarding the further growth of Robonomics Network.")]),a("h2",{attrs:{id:"happy-new-year"}},[a("a",{attrs:{href:"#happy-new-year","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Happy new year!")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(m),"function"==typeof u&&u(m);e.default=m.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},dVYI:function(t,e,o){"use strict";o("/8Jy")}}]);