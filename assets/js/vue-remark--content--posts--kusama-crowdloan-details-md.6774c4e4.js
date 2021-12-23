(window.webpackJsonp=window.webpackJsonp||[]).push([[42,8,76,77],{"/8Jy":function(t,e,o){},"6tRk":function(t,e,o){"use strict";o.r(e);var a=o("rePB"),n=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(9).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","mid","big","block"].indexOf(t)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(t){return-1!==["gorizontal","vertical"].indexOf(t)}},back:{type:String,default:"white",validator:function(t){return-1!==["transparent","white","blue","gradient"].indexOf(t)}},alignContent:{type:String,default:"none",validator:function(t){return-1!==["left","center","right","none"].indexOf(t)}},alignContentV:{type:String,default:"top",validator:function(t){return-1!==["middle","top"].indexOf(t)}}},computed:{card_classes:function(){var t;return t={},Object(a.a)(t,"card",!0),Object(a.a)(t,"icon",this.icon),Object(a.a)(t,"image",this.image||this.imageLocal),Object(a.a)(t,"".concat(this.orientation),!0),Object(a.a)(t,"".concat(this.back),!0),Object(a.a)(t,"alignContent-".concat(this.alignContent),!0),Object(a.a)(t,"alignContentV-".concat(this.alignContentV),!0),Object(a.a)(t,"oldy","transparent"!=this.back),Object(a.a)(t,"oldy__link",this.link||this.popup),t},pic_classes:function(){var t;return t={},Object(a.a)(t,"pic",!0),Object(a.a)(t,"round",this.imageRound),Object(a.a)(t,"icon",this.icon),Object(a.a)(t,"image",this.image||this.imageLocal),Object(a.a)(t,"".concat(this.imageSize),!0),t},link_classes:function(){var t;return t={},Object(a.a)(t,"link",!0),Object(a.a)(t,"text",this.linkText),Object(a.a)(t,"overlap",this.overlap),t},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(o("dVYI"),o("KHd+")),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.card_classes},[t.icon||t.image||t.imageLocal?o("div",{class:t.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:t.pic_src}})],1):t._e(),t.hasDefaultSlot?o("div",{staticClass:"content"},[t._t("default")],2):t._e(),t.link&&!t.linkButton?o("g-link",{class:t.link_classes,attrs:{to:t.link}},[t.linkText?[t._v(t._s(t.linkText))]:t._e()],2):t._e(),t.link&&t.linkText&&t.linkButton?o("Button",{staticClass:"large",attrs:{link:t.link,label:t.linkText,button:"primary"}}):t._e()],1)}),[],!1,null,"f2eea1cc",null);e.default=r.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},bw5u:function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),n=o("6tRk"),i=o("UQSp"),r=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var l={Card:n.default,VueRemarkRoot:i.a},c=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===s(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:o[t]=function(){return l[t]}}))},h=r.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",u={excerpt:null,title:"Robonomics Crowdloan and further steps, June 2021",date:"2021-06-11T00:00:00.000Z",published:!0,locale:"en",tags:["Tokens","Robonomics parachain","Kusama"],cover_image:"./images/kusama-crowdloan-details/robonomics-crowdloan-on-kusama.jpg",description:"Take a look at the Cowdloan module in details, parachain update plan after launching, and FAQ regarding auction",abstract:"Take a look at the Cowdloan module in details, parachain update plan after launching and FAQ regarding auction",related:["Kusama Parachain Lease Offering, April 2021","Trajectory of Robonomics Development 2021, Part 1","Robobank. Accept any Polkadot token in automation services","The ultimate guide to Robonomics, RWS and Robonomics parachain on Polkadot"]};var p=function(t){t.options[d]&&(t.options[d]=u),r.a.util.defineReactive(t.options,d,u),t.options.computed=h.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},f=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("p",[t._v("During the summer of 2021, we’ll see the first five auctions that will allow projects to rent Kusama network slots for a period of 48 weeks (or 1 year). Becoming one of Kusama's parachains is a good way to provide access to your Substrate project within the Polkadot ecosystem, implement currently unavailable Blockchain network security to small projects, as well as initiate the integration process with other ecosystem projects as soon as possible. The goal of Robonomics for 2022 is to become a fully functioning conductor of IoT projects to the Polkadot ecosystem. This is why all of the aforementioned benefits of launching a Kusama network are important to us. And in general, our strategy has "),a("a",{attrs:{href:"/blog/robonomics-parachain-lease-offering/"}},[t._v("already been published")]),t._v(' a long time ago - "Kusama first, while Polkadot is a vision". In this post, we’ll dissect the use of the Cowdloan module in detail and take a look at the parachain update plan after launching. ')]),a("h2",{attrs:{id:"kusama-crowdloans-have-started"}},[a("a",{attrs:{href:"#kusama-crowdloans-have-started","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Kusama crowdloans have started!")]),a("p",[a("em",[t._v("Dr. Gavin Wood, June 8, 2021, "),a("a",{attrs:{href:"https://polkadot.network/kusama-parachain-auctions/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Kusama Parachain Auctions")]),t._v(":")])]),a("blockquote",[a("p",[t._v("The following is the case assuming that no significant and unexpected issues are found with the relay-chain logic. (In such a case, all options should remain on the table for network governance, including pausing or postponing any scheduled or ongoing auctions.)")])]),a("p",[a("strong",[t._v("Preliminary schedule of auctions:")])]),a("ul",[a("li",[a("p",[t._v("2021/06/15, 12:00 GMT: First Kusama Parachain Slot auction commences. Bids may be placed.")])]),a("li",[a("p",[t._v("2021/06/22, 12:00 GMT: Second Kusama Parachain Slot auction commences.")])]),a("li",[a("p",[t._v("2021/06/29, 12:00 GMT: Third Kusama Parachain Slot auction commences.")])]),a("li",[a("p",[t._v("2021/07/06, 12:00 GMT: Fourth Kusama Parachain Slot auction commences.")])]),a("li",[a("p",[t._v("2021/07/13, 12:00 GMT: Fifth Kusama Parachain Slot auction commences.")])])]),a("p",[t._v("Polkadot allows parachains to source tokens for their parachain bids in a decentralized "),a("a",{attrs:{href:"https://wiki.polkadot.network/docs/en/learn-crowdloans",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("crowdloan")]),t._v(". Once a crowdloan campaign is open, anyone can participate by sending a special transaction that references the campaign's index. Tokens used to participate must be transferable — that is, not locked for any reason, including staking, vesting, and governance — because they will be moved into a module-controlled account that was generated uniquely for this campaign.")]),a("p",[t._v("Four projects who launched their KSM crowdloan campaigns (Kurara up to 1,5 mln KSM, Shiden up to 1 mln KSM, Crust up to 1 mln KSM, Moonriver up to 1 mln KSM)  to collect resources for leasing the parachain slot on Kusama during the parachain lease offering auctions. ")]),a("p",[t._v("Robonomics Dev DAO aims to bid an exact amount of KSM needed for securing a third-fifth parachain slot. Thus, the crowdloan module will be launched right after the end of the auction for 2nd slot on Kusama.")]),a("h2",{attrs:{id:"estimated-time-of-the-robonomics-crowdloan-launch-is-28-june"}},[a("a",{attrs:{href:"#estimated-time-of-the-robonomics-crowdloan-launch-is-28-june","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Estimated time of the Robonomics crowdloan launch is 28 June")]),a("p",[t._v("You’ll be able to participate in the Robonomics crowdloan through the "),a("a",{attrs:{href:"/kusama-slot"}},[t._v("dedicated page")]),t._v(".")]),a("p",[a("strong",[t._v("Before participating in the crowdloan, double-check that the campaign is live "),a("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("on Twitter")]),t._v(".")])]),a("h2",{attrs:{id:"how-to-participate-in-the-robonomics-crowdloan"}},[a("a",{attrs:{href:"#how-to-participate-in-the-robonomics-crowdloan","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("How to participate in the Robonomics Crowdloan")]),a("p",[t._v("By default, Polkadot developers provided a native interface in the "),a("a",{attrs:{href:"https://polkadot.js.org/apps/#/parachains/crowdloan",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Substrate portal")])]),a("p",[a("g-image",{attrs:{src:o("fO33"),alt:"Crowdloan on Polkadot portal"}}),a("em",[t._v("Example of the Crowdloan page on June 11th, 2021")])],1),a("p",[t._v("At the start of April, Robonomics practised participating in auctions by using the Crowdloan module on the Rococo network. You can check out this Twitter thread to familiarize yourself with the standard interface for community participation in "),a("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics/status/1377653645827833860",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Polkadot auctions")])]),a("p",[t._v("Also, it’s worth mentioning that on the official "),a("a",{attrs:{href:"/kusama-slot"}},[t._v("Robonomics site")]),t._v(", functionality for interacting with the Crowdloan module will be made available.")]),a("p",[t._v("This is what Crowdloan participation will look like on the Robonomics site after June 28th. ")]),a("p",[t._v("Instructions on how to use the Crowdloan interface module through the Robonomics website will be published closer to the start of the third auction. ")]),a("h2",{attrs:{id:"popular-questions-amongst-the-community"}},[a("a",{attrs:{href:"#popular-questions-amongst-the-community","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Popular questions amongst the community")]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"why-does-robonomics-participation-start-only-from-the-third-round"}},[a("a",{attrs:{href:"#why-does-robonomics-participation-start-only-from-the-third-round","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Why does Robonomics participation start only from the third round?")]),a("p",[t._v("Developers could publish the Crowdloan module today, but then we would have to implement limits. As can be noticed, the first 4 projects that published their Crowdloan modules established a 1 million KSM token limit. ")]),a("p",[t._v("We’re placing our bets on 100,000 KSM being enough to win one of the Kusama network auctions, but are also reserving space for ourselves to quickly adjust the limit if we come to understand that more KSM tokens will need to be collected by the conclusion of the first and second rounds. In general, we’re trying to manoeuvre in search of an optimal rental cost for a slot.")])]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"what-will-happen-if-robonomics-doesnt-win-the-5th-auction"}},[a("a",{attrs:{href:"#what-will-happen-if-robonomics-doesnt-win-the-5th-auction","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("What will happen if Robonomics doesn’t win the 5th auction?")]),a("p",[t._v("To be honest, we don’t have a plan B. "),a("a",{attrs:{href:"https://youtu.be/Ri-M_Vo3w5A",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("We'll be like Schwarzenegger")]),t._v(".")])]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"will-it-be-possible-to-participate-in-the-robonomics-crowdloan-through-exchanges"}},[a("a",{attrs:{href:"#will-it-be-possible-to-participate-in-the-robonomics-crowdloan-through-exchanges","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Will it be possible to participate in the Robonomics crowdloan through exchanges?")]),a("p",[t._v("Some well-known exchanges like Kraken and Okex are already providing crowdloan support for their users. A list of relevant exchanges that support interaction with the Crowdloan module will be provided on the Robonomics website at the start of the 3rd auction.")])]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"what-will-happen-in-48"}},[a("a",{attrs:{href:"#what-will-happen-in-48","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("What will happen in 48?")]),a("p",[t._v("If after 48 weeks the project will once again be unsuccessful in winning an auction, then the parachain will turn into a "),a("a",{attrs:{href:"https://wiki.polkadot.network/docs/en/learn-parathreads#docsNav",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("parathread")]),t._v(". However, developers have already published preparation plans for future slot auctions: here’s a publication from October 26th, 2020, "),a("a",{attrs:{href:"/blog/robonomics-parachain-lease-offering/"}},[t._v("Robonomics Parachain Lease Offering, On-chain Governance Strategy")]),t._v(". But, we also have a secret plan concerning the development of an algorithm to be built into the Robonomics protocol, which will autonomously generate beneficial bonding terms for KSM/DOT holders that will also benefit Robonomics. In general, we contemplate over medium-term issues in advance and continue to think about important matters such as maintaining Robobomics in the state of a parachain today.")])]),a("h2",{attrs:{id:"life-after-auctions"}},[a("a",{attrs:{href:"#life-after-auctions","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Life after auctions")]),a("p",[t._v("A parachain comes to life inseparably from the moment auction results are concluded. But for a project, this doesn’t indicate that work is over. Remember how the Polkadot Relay Chain launched? The Robonomics team is contemplating over an analogous launch form, increasing functionality accessible to a user in steps. ")]),a("h2",{attrs:{id:"robonomics-will-start-its-existence-with-the-following-possibilities"}},[a("a",{attrs:{href:"#robonomics-will-start-its-existence-with-the-following-possibilities","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Robonomics will start its existence with the following possibilities:")]),a("ul",[a("li",[a("p",[t._v("XRT transfers between balances")])]),a("li",[a("p",[t._v("Launch of IoT devices using XRT for paying transaction fees ")])]),a("li",[a("p",[t._v("Sending IoT device telemetry using XRT for paying transaction fees ")])]),a("li",[a("p",[t._v("Sudo")])]),a("li",[a("p",[t._v("A technical committee")])])]),a("h2",{attrs:{id:"further-update-plan"}},[a("a",{attrs:{href:"#further-update-plan","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("Further update plan")]),a("ul",[a("li",[a("p",[t._v("Genesis state: Core functionality (0 week). Launch of the above set of functions.")])]),a("li",[a("p",[t._v("Update 0.1: Staking (1 - 3 week). Will allow you to stake your XRT with a 10% APY for token holders and 125% for Crowdloan participants. ")])]),a("li",[a("p",[t._v("Update 0.2: Treasury (4 - 6 week). Will allow transferring a share of the DAO funds from Ethereum to the parachain. ")])]),a("li",[a("p",[t._v("Update 0.3: RWS (7 - 8 week). Will allow using IoT management functions with not only commission payments but a monthly subscription as well. ")])]),a("li",[a("p",[t._v("Update 0.4: Robot-as-a-service (9 - 10 week). Will allow to implement a control process for the provision of automated services and use payments within transactions to launch devices. ")])]),a("li",[a("p",[t._v("Update 0.5: Robobank (11 - 12 week). You can read about Robonomics in this article:\n"),a("a",{attrs:{href:"https://robonomics.network/blog/robobank-introduction/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://robonomics.network/blog/robobank-introduction/")])])]),a("li",[a("p",[t._v("Update 0.6: Remove Sudo (13 - 14 week). Developers won’t have the ability to interfere with the operations of the network without the involvement of the technical committee. ")])]),a("li",[a("p",[t._v("Ecosystem integration updates (before the end of the year). Further, we will focus attention on integrations with other parachains to expand the capabilities of IoT projects that are interested in what Polkadot can do. ")])])]),a("p",[t._v("Stay tuned and follow our updates "),a("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("on Twitter")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof p&&p(f);e.default=f.exports},dVYI:function(t,e,o){"use strict";o("/8Jy")},fO33:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/crowdloan-on-polkadot-portal.9468208.c3657a5d0a2fae90c8ea6ef9dc12b258.png",size:{width:1897,height:914},sizes:"(max-width: 1897px) 100vw, 1897px",srcset:["/assets/static/crowdloan-on-polkadot-portal.82a2fbd.c3657a5d0a2fae90c8ea6ef9dc12b258.png 480w","/assets/static/crowdloan-on-polkadot-portal.cbab2cf.c3657a5d0a2fae90c8ea6ef9dc12b258.png 1024w","/assets/static/crowdloan-on-polkadot-portal.9468208.c3657a5d0a2fae90c8ea6ef9dc12b258.png 1897w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1897 914' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-2f3bde68f69f62756425ce559f02f3dd'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-2f3bde68f69f62756425ce559f02f3dd)' width='1897' height='914' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAACXBIWXMAAAsSAAALEgHS3X78AAAIt0lEQVRYw9VZyY4U2xEtJObJrBALxAokZliAmd5jBd49Vs/fwxfwGd7YsuWlBWsWFhL2k6zH2E11zUNm5TxXdjhOZEZWVlVXA91lWy4plDfvFHHjxj1xblaj0WgQ5MCBA3Ty5Ek6dOgQXb1yhS5cuCD1Bw8epFOnTkn5/Pnz9ObNG3r16hW9e/eOnj9/LvVnzpyh48eOkc515MgROn36NJ04caKqwxwnjh%2bX59GjR%2blYrf/XBOOOs6B89uxZOnz48DeP/Q3bce7cObp06RJdvHhRbJvrc%2b3aNbrCC/7t3bt0//59evr0Kf3%2b55/p6ZMndPnyZbp75w49fvyYrl%2b/zm1P6PXr1/Ty5Ut6%2b/YtvXjxQsb%2b%2bMMPMvb27dvS7969e/To0SO6z89bt24RdDx8%2bJAePHggT7Q/5PLVq1elbZWg/caNG9If89%2b8eZNt%2bZHusE27jasL7Pkdr%2bnZs2f07KefZJ2wWdsbVP5s2yHDMKnb69FoPKYsyyhJEtre3ibTNCmOY5pOp9RqtUT6/QEFYUiO44jkeU6e59FgMCCb3zEOdfqbchnv%2bqy3fe2X57O5YAPm/t7fdIXORhJHBInCgOIo5KcvZdSFgU9prQ11aVL0z9KYJSnbAq6PyXNs6nba5HuOvOvcRf%2bkHBNLm0q9z7eI6l8thZ1ZUtcze1/s3/AciyC%2ba9PEGJFjmRRwWev06btWrVxK7V3n0T5BWY%2bna09oMh7K/Kpj0OtQr9OigJ1VH7sXWdZnksn6IJY5Fn1bXzbInhhLtjZgAHYs8N1qUMhl33XEuO8VjLVZYb/bpm57i0aDHg37XWpvNUW2mpvS1t76Qp3W1p50LMpo2BdnQp8xGpbzN6nFuqCn3%2b3Ql43P4vzFtRUOgOfWYIjOA8/C2xB4HxGAOjxRp0/IXvX7NZ3QMdM3qfShHqL2qJ66vka9clH24wx4GrJT/fcudNHGVfpW1cEpuhmL88xFQBx6c4bv5JT/hRRha89F2vJmLTtJz7tGXOEAW47AkgOA/sPhgDzX5bTGjZwBppwKszTllLggZZ20Z%2bl/TKYsKadi2JRyFgmDQGQ6zSjndIgnbEA5ZkQvbE45fcfk%2b57YifZKuH8UePNHYOaAgHrMAVz2jmPbzAvsMlNuS95V0V%2bR57P5pLo933e/gl/Ki3DZATAeXET5SBRF0pbJwop39MO4qTgk3nE%2brHMHB1iSIzGJZVni8b/98U/UmThkhcn8BNxnPDYo5Ihpf/mVyY8rBAhkCErVOetYPIgYSBc2BnMHvPuQiDnJaDQSvSGTMdgEAtbpdGQs%2bhiGIY6AgxBFEdehDM6yYwTAAZUBYEzY4bldnxkHRlU3dvF9PQ7YFoOxOCxedaxikJkcx6yKAIhsWJpRx/KoabiUTPPVDkBoYBdN06AJR8Ffme%2bPJjYZbkBD2yMvjORMwbuIksBHBGxJtGgERLwbCEvs3DoE5xq73%2b/3RR/0uIIHKRlM1xEFdnlcUUa0YJweGzgPEiLsGROkvAoD0MnzfFkIuPzff/knjSyHxo5PA4tROAiFzvpsCO4GMMjkMIMizy/GwTmF4fG%2bBfNgbix%2bOByKXnWA9lFn64IR9hoxjlM4wGObeqZFrRHzAV7DSgcI18dZ4SdCSQAI5yctQivEwpICdKAwZbR1gbRl6EkdUFfReV9SnF2EOxYOx%2br8sBH1qMPOA/lR1ihUUEzLDBBxf5OjeOR4lHAdst0KEEwEUCaTCTuDPWylZPoR9Z2QnzH1HD4icSrpSG6HjBlNpp8YAyOxAzBunT/sIMK62%2b2WmxOJLr0VahSgDLtxXBSz0E9un9yWlGvDjXAlBuBmVAe1fBugAzDMS1AsnrkCZAlGdQBUhXkJQnsVHV/Mncu7lEtduijd7aXx%2bbQC85CjtjNxGQQ5S3E0xztHQAGC6kXP9cgyQmobNvU4FSZxkSLr5xLfD3759V8yBjJmUNIoWBcGIKw/fvxIGxsbEt4AX0QfbGm324INOAZow/uHDx%2bqcYiaAvQ4dfJRxVUdOBfuRoTUeByHXBcCT6cF%2b0P4S10JNFE6v9ikNHxdgrDV3L/oHI02xaC4tkkoY6ywSM5eW2ObNkd8bUZWWOUA%2bQDCncECfcaAT96UxowBYzcULDA8NiYpHCFIzJN1Pn8uiEkYFRmgZF957avPXkVDHekN0aUYgF3Ur1TIQoWDfIlCRKaORV8FZyVR4qhwFyKEzgiZhDsOU6IgnZKfMJLyM%2bAniASMEkDhPs7YrOiogNF3fOb6lh8Mx%2bKxWN1pBdoliluyWH0vMtk2pWwzNm/E6Txj%2b5JVIIg0qN5C6KQMFgj/gKMBEVGgbVbtRCwXDqsKSc2/9ZS4V8lqKbWe87WMdpx93FvqxwTRoXPoXSHi/hPmN0PmMlEMSrwLCMKDw%2bFIJjbGAxoxA%2byaNrXGFjl%2bII5B%2bA8GQ7kxNj//owIhhCDAZx0gqGcZc79//54%2bffpUEDR%2blzSNRfET9rqsEykPoId%2buhEKlh7bbeKD74QxIPgKCNZJDXa7uE6m1bW42iF5RwrKy3JZl6X73v10QY%2bmtqxWpxE3o8xxRZzmbGR7EME93v2WydGyOgKsguaWPB%2be/suf/0DdiUcDN5TzXz%2bXAJ%2bQlTQHhmCGX1JhvQ2u64eFgAjhlqdABl1YnKZAzRAAy2azWY0Ddojz9DYYBsWR2u02ONtNZlZ8D5AJKlTO58kOACXNqvcZcdku%2b%2b5DynnSMqfrolXX4ncJvTrDGUKcyn4gbCA/PYsvbkyGEl7XyiyAs4FUiA6QLJmVo5rEdYmWy9EaRYCZ7cB/E3VdRbtf/YeBZ1L%2bb7FoI96RJj3cBlFe%2bLzWKD4R2/InyObmZnklNiWE4NG5Lz1KR/MZLV6s2/fuL0RCvpOeHfrm9Uhd6jtLmdEqKgwSg3DTc1bcwvySfITVB4Z1f/j4b8oun8QKHgB257MT8JlL%2bDNHB8q%2b58rHiYISJ//Hki6lwX8DdlHmyeZ5vckAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);