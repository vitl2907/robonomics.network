(window.webpackJsonp=window.webpackJsonp||[]).push([[36,8,76,77],{"/8Jy":function(e,t,a){},"2HWQ":function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/polkadot-ecosystem.940ff3d.8675ae85263d1acbc5c2e8853ef18f7a.jpg",size:{width:1204,height:605},sizes:"(max-width: 1204px) 100vw, 1204px",srcset:["/assets/static/polkadot-ecosystem.82a2fbd.8675ae85263d1acbc5c2e8853ef18f7a.jpg 480w","/assets/static/polkadot-ecosystem.940ff3d.8675ae85263d1acbc5c2e8853ef18f7a.jpg 1204w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1204 605' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-833cf7edfae588a62bd7a9936526dc9d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-833cf7edfae588a62bd7a9936526dc9d)' width='1204' height='605' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgAEADASIAAhEBAxEB/8QAGwAAAgMAAwAAAAAAAAAAAAAAAAUCBAYBAwj/xAAqEAABAwQBAwMEAwEAAAAAAAABAgMEAAURIRIGMVETQWEUIjKhFSRCkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1TRRRQFQdcLachC1nwnGf2aHHW2kqU4tKEpGSVEACltxT/Kwv6ElxJSv82XCjOMgjI7igZNuc05UhSDnsrGf1Se3RbszImqlXNp5tcgrZQWccG8aR7f8AaqO2qRlzjcJoyscAZatJ3nP6rpZsU5a3y/cpLyPqOTQDyhwb8E7ye29UGrTniMkE43iuaribHEgxy8hLw3wJwd715qxQU7qp5m2ynIi20PpbUWy7ngFY0T8VCyvSXbXGVPUwuXwHqlg5Ry%2bKv0AAdhigSvqauFwZ9BLamWlFa3uIIWsDASD/AKwTkkaBGMgjFKoPUclrqeXaH7dJMSIyFuTljikrO0pSD%2bQIzsdsfBIYXKwOSIT/ANNKDVw9J5uO%2bpKlJb5kkHBOcjI2CO3jVLLBbpEC2RoUl2TcXYLSWXHC4VKUo91Aq2cHOAfYDxQKuoOj7PfLq9dJ0F5L0jGVqlqbCuKQkYGQOwFNOmoMLpqGuHGt0llPNT7fKQVpcUQB%2bROs8R30K1kZsGM2HCpwaI9RP3Dxn5FV7lHcdOgtxOMBCSEgfJJ7nxQZzpy4y%2bqbPIkToT1teQpTC2HkaQ6kg5Soj7gCB9w9xjuK01umiUjg4PTlISC40e6c%2b48p74IyNHejWVbss%2bd1NBmt3JxuHEZcjSIqipSXAdpKRniCD7kdgBWriw/p5C1heUFtDaU71xKj5xvPgdvfWA//2Q==' /%3e%3c/svg%3e"}},"6tRk":function(e,t,a){"use strict";a.r(t);var o=a("rePB"),n=(a("07d7"),a("PKPk"),a("3bBZ"),a("yXV3"),a("mRH6"),{components:{Button:function(){return a.e(9).then(a.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big","block"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(o.a)(e,"card",!0),Object(o.a)(e,"icon",this.icon),Object(o.a)(e,"image",this.image||this.imageLocal),Object(o.a)(e,"".concat(this.orientation),!0),Object(o.a)(e,"".concat(this.back),!0),Object(o.a)(e,"alignContent-".concat(this.alignContent),!0),Object(o.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(o.a)(e,"oldy","transparent"!=this.back),Object(o.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(o.a)(e,"pic",!0),Object(o.a)(e,"round",this.imageRound),Object(o.a)(e,"icon",this.icon),Object(o.a)(e,"image",this.image||this.imageLocal),Object(o.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(o.a)(e,"link",!0),Object(o.a)(e,"text",this.linkText),Object(o.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?a("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(a("dVYI"),a("KHd+")),r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?a("div",{class:e.pic_classes},[a("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?a("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?a("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?a("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,"f2eea1cc",null);t.default=r.exports},NNnf:function(e,t,a){"use strict";a.r(t);var o=a("KHd+"),n=a("6tRk"),i=a("wLAT"),r=a("UQSp"),s=a("Kw5r");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var l={Card:n.default,KusamaSlotBanner:i.a,VueRemarkRoot:r.a},h=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===c(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:a[e]=function(){return l[e]}}))},d=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"Automating Crowdloan Campaigns",date:"2021-12-08T00:00:00.000Z",published:!0,locale:"en",tags:["Tokens","Robonomics parachain","Kusama"],cover_image:"./images/automating-kusama-crowdloan-campaigns/cover.jpg",description:"The experience and data from the first cohort of teams who have secured crowdloans can now provide a foundation that future teams can build from to better price, and automate the process of securing crowdloans and winning auctions.",abstract:"The experience and data from the first cohort of teams who have secured crowdloans can now provide a foundation that future teams can build from to better price, and automate the process of securing crowdloans and winning auctions."};var m=function(e){e.options[u]&&(e.options[u]=p),s.a.util.defineReactive(e.options,u,p),e.options.computed=d.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("The initial parachain slot auctions and their associated crowdloans suffered from a first mover disadvantage that caused their prices to be difficult to predict and often too high.  This disadvantage is common in any new market undergoing price discovery, especially markets like the parachain auctions where teams are launching diverse products with diverse needs.")]),o("p",[e._v("The experience and data from the first cohort of teams who have secured crowdloans can now provide a foundation that future teams can build from to better price, and automate the process of securing crowdloans and winning auctions.")]),o("p",[e._v("The Robonomic core developers will implement an automated oracle beginning with the 4th parachain crowdloan campaign in order to participate in future Kusama parachain slot auctions. This mechanism will allow the robonomics team to automate payment of each future parachain slot lease at renewal.  The robonomics team hopes that this effort will inspire other future teams to use or implement their own automated process to better streamline and reduce the downside risks for teams of the overall slot auction system.")]),o("h2",{attrs:{id:"parameters-currently-independently-determined-by-parachains"}},[o("a",{attrs:{href:"#parameters-currently-independently-determined-by-parachains","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Parameters currently independently determined by Parachains")]),o("blockquote",[o("p",[e._v("Contribution Cap; Campaign Period; Participant Rewards; Source of Rewards; Distribution of Tokens.")])]),o("p",[e._v("To mitigate risk and unpredictability for both projects and participants, and to help keep the cost of winning these auctions realistic and in line with their value proposition, we would propose that these aforementioned parameters are evaluated and subsequently determined not independently by Parachains, but by an automated oracle. With application and in due time, we anticipate this oracle could be integrated as a common good parachain on Kusama and eventually Polkadot. ")]),o("p",[e._v("Often overlooked in the excitement of these initial Crowdloans and their generous rewards mechanisms, is the reality that winning projects have a 48 week lifespan as a working operating parachain on Kusama before their lease expires and they are required to renew their position. ")]),o("p",[e._v("With this in mind, we’ve laid out a v1 summary of our automated oracle algorithm and the conditions under which it could be relevant and effective in the context of the larger slot auction protocol. ")]),o("h2",{attrs:{id:"autonomous-oracle-of-crowdloan-campaigns"}},[o("a",{attrs:{href:"#autonomous-oracle-of-crowdloan-campaigns","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Autonomous oracle of crowdloan campaigns")]),o("p",[e._v("So often, you want to be first, but over time you realize that it's more important to stay in the game. The Polkadot ecosystem is just the kind of place where it doesn't matter whether you are the first or the last, what matters is that there is a \"free chair\" for you. We wonder if in your childhood you played the game "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Musical_chairs",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("“musical chairs”")]),e._v(", but we remember it very well from kindergarten.")]),o("p",[e._v("Of course, there is an important specificity here as well: the parachain slot lease must be extended before the end of the current lease, otherwise, there may be an interruption or complication in parachain services (the parachain will switch to "),o("a",{attrs:{href:"https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Pay-as-you-go Parachains")]),e._v(",  also known as a parathread, for some time).")]),o("p",[o("g-image",{attrs:{src:a("2HWQ"),alt:'"Polkadot ecosystem"'}})],1),o("p",[e._v("In general, it's important to stay in line. Below we will talk about the first version of our proposed algorithm for autonomous calculation of the main parameters of crowdloan campaign oracle. Perhaps we should give it a name, but so far nothing interesting comes to mind.")]),o("h3",{attrs:{id:"contribution-cap-averaging"}},[o("a",{attrs:{href:"#contribution-cap-averaging","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Contribution Cap Averaging")]),o("p",[e._v("Within this model we would propose that the automated oracle calculates and averages the median cost in KSM required to win each auction from #15 - #29. This resulting averaged cost would be set as the KSM Crowdloan contribution cap for slot #30. \t\t")]),o("h3",{attrs:{id:"lifespan-of-a-crowdloan-campaign"}},[o("a",{attrs:{href:"#lifespan-of-a-crowdloan-campaign","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Lifespan of a crowdloan campaign")]),o("p",[e._v("We assume that one Crowdloan Campaign should aim to collect for 5 weeks. In case of failure, the oracle will have to shift the sample estimate of the median fees from a range of [15-29] auctions to [20-34] and so on, to account for the results of previous auctions. In this way, there will be an automatic setup up to the point of successfully obtaining a slot.")]),o("h3",{attrs:{id:"evaluation-of-the-reward-for-each-ksm-in-favour-of-the-crowdloan-campaign"}},[o("a",{attrs:{href:"#evaluation-of-the-reward-for-each-ksm-in-favour-of-the-crowdloan-campaign","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Evaluation of the reward for each KSM in favour of the crowdloan campaign")]),o("p",[e._v("This is the most complex part of the oracle algorithm, requiring the infrastructure of the running parachains. Predicting the cyclically repeating economy of parachains operating for several years now, we remain true to the view that "),o("a",{attrs:{href:"https://robonomics.network/blog/robonomics-parachain-lease-offering/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("the reward for crowdloan campaign participants is equal to the lost profit from staking in the Relay chain")]),e._v(".")]),o("p",[e._v("Most importantly, the reward from staking can be autonomously estimated by an oracle with a fairly high degree of accuracy. For example, we can now talk about a lost profit of 0.19 KSM for every 1 KSM during the year. However, the lost revenue metric alone is not enough, since the reward in parachain is offered in the parachain native token. It is due to this that the scheme gets a little more complicated, but not by too much. We assume that the Kusama and Polkadot ecosystems will always have price tickers for native parachain tokens. For example, Karura’s $KAR may be such a ticker already this year in the Kusama network. We get that the oracle independently, without help from anyone outside, can: (1) obtain data about the current staking fee in the Relay chain, (2) autonomously obtain data about the price of a native parachain token from the DeFi segment of the ecosystem ticker and, based on that data, make an offer similar to the KSM staking.")]),o("p",[e._v("The DOT and KSM holder will split their bag of tokens between staking in the Relay chain and supporting several (maybe several dozen) crowdloan campaigns, based on a desire to keep the reward as it would be if all DOT/KSM were staked, but diversifying the risk of a single token price. Yes, right now the rewards in parachains are more viewed as a percentage of all native tokens, and figures of 20% of total supply don't seem inflated in the community. Although it's hard to imagine a picture where every year 20% of all tokens will be offered just for slot rentals. Still, this is the genesis state at the stage of the first auctions and, again, a normal picture at the start. However, taking current rewards for everyday life for a decade is not a good idea.")]),o("p",[e._v("The main criterion for calculating the reward will be the lost profit from staking in the crowdloan campaign of any of the projects and the conversion of this value into the number of native tokens at the current rate. This task can be performed by an autonomous process.")]),o("h3",{attrs:{id:"reward-source-and-token-distribution-in-parachain"}},[o("a",{attrs:{href:"#reward-source-and-token-distribution-in-parachain","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Reward source and token distribution in parachain")]),o("p",[e._v("We propose to implement a mechanism for issuing new tokens in the parachain through the treasury module. In turn, the parachain treasury will distribute new parachain coins among the crowdloan campaign participants on a monthly basis throughout the current slot lease term.")]),o("h2",{attrs:{id:"closing-the-loop"}},[o("a",{attrs:{href:"#closing-the-loop","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Closing the loop")]),o("p",[e._v("Above, we gave a generalized description of the first version of the oracle algorithm, which is intended to make the Robonomics protocol more viable without direct developer involvement. However, it is even more important to understand the connection between the slot lease in the ecosystem and the target function of the project. In the case of Robonomics, it is a fee to store, update and interact the user with the digital twin of the cyber-physical system. Our goal on the horizon of 3 years is to form a Robonomics segment capable of serving up to 1 million digital twins per month at ~0.25 XRT.")]),o("p",[e._v("If the target load is reached, we will have more than $60 million per year in demand for XRT purchases in the marketplace, which will be burned off when the subscription is activated.")]),o("p",[e._v("(I’ll talk more about the subscription life cycle separately when I publish the next release of Robonomics, dedicated to the subscription auction mechanism). It turns out that the value of XRT will not decline if the number of subscriptions sold for XRT during the year cumulatively exceeds the value that the treasury of parachain will pay according to the oracle of crowdloan campaigns.")]),o("p",[e._v("In general, my team and I are on a course to create this scheme, which should make it possible to close the tokenomics of the parachain from the moment the slot is obtained to the moment the lease is renewed. We want to make this process as autonomous of human will as possible, and leave only the token holders and developers to propose improvements to the algorithm through the mechanism of democracy and the parachain technical committee. No handwork in perspective. In the meantime, as always happens with hypotheses, we will still take the first steps manually. Below is how the oracle of the future would work for the 4th crowdloan campaign (roughly).")]),o("h2",{attrs:{id:"the-parameters-of-the-fourth-crowdloan-campaign"}},[o("a",{attrs:{href:"#the-parameters-of-the-fourth-crowdloan-campaign","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("The parameters of the fourth crowdloan campaign")]),o("Card",[o("h3",{attrs:{id:"collection-limit-474255262-ksm"}},[o("a",{attrs:{href:"#collection-limit-474255262-ksm","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Collection limit "),o("strong",[e._v("47,425.5262 KSM")])]),o("p",[e._v("Based on fees assessment of the 15th auction, Geshiro")])]),o("Card",[o("h3",{attrs:{id:"duration-5-weeks"}},[o("a",{attrs:{href:"#duration-5-weeks","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Duration "),o("strong",[e._v("5 weeks")])])]),o("Card",[o("h3",{attrs:{id:"remuneration-420-xrt"}},[o("a",{attrs:{href:"#remuneration-420-xrt","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Remuneration "),o("strong",[e._v("4.20 XRT")])]),o("p",[e._v("1 KSM ~ 370$ APR = 19%,"),o("br"),e._v("1XRT ~ 17$")])]),o("Card",[o("h3",{attrs:{id:"bonus"}},[o("a",{attrs:{href:"#bonus","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Bonus")]),o("p",[e._v("Pioneer NFT cardholders will receive an extra 1XRT for each KSM")])]),o("Card",[o("h3",{attrs:{id:"distribution-rewards-monthly"}},[o("a",{attrs:{href:"#distribution-rewards-monthly","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Distribution rewards "),o("strong",[e._v("Monthly")])]),o("p",[e._v("Proportionally equal shares for 12 months. The treasury performs by generating new tokens in the parachain")])]),o("KusamaSlotBanner")],1)}),[],!1,null,null,null);"function"==typeof h&&h(f),"function"==typeof m&&m(f);t.default=f.exports},OvGc:function(e,t,a){"use strict";a("nXhz")},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},dVYI:function(e,t,a){"use strict";a("/8Jy")},nXhz:function(e,t,a){},wLAT:function(e,t,a){"use strict";a("07d7"),a("PKPk"),a("3bBZ");var o={components:{Card:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(8)]).then(a.bind(null,"6tRk"))}}},n=(a("OvGc"),a("KHd+")),i=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",{attrs:{icon:"/icons/icon-future.png"}},[a("h3",[e._v(e._s(e.$ts("Want to be a part of the future?")))]),"en"==e.$locale?[e._v("\n  Head over to the "),a("g-link",{attrs:{to:"/kusama-slot/"}},[e._v("Robonomics Crowdloan page")]),e._v(" or the "),a("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"}},[e._v("Kusama Portal")]),e._v(" and support us building the infrastructure for the Smart Robotic grid of tomorrow! 🦾\n")]:e._e(),"ru"==e.$locale?[e._v("\n  Воспользуйтесь "),a("g-link",{attrs:{to:"/kusama-slot/"}},[e._v("страницей краудлоан кампании")]),e._v(" или "),a("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"}},[e._v("порталом Kusama")]),e._v(" и поддержите построение умной инфраструктуры для роботов! 🦾\n")]:e._e(),"zh"==e.$locale?[e._v("\n  请前往 "),a("g-link",{attrs:{to:"/kusama-slot/"}},[e._v("Robonomics众贷页面")]),e._v(" 或 "),a("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"}},[e._v("Kusama门户网站")]),e._v(" ，支持我们为未来的智能机器人电网建设基础设施！🦾\n")]:e._e(),"es"==e.$locale?[e._v("\n  Diríjase a la "),a("g-link",{attrs:{to:"/kusama-slot/"}},[e._v("página de Préstamos colectivos de Robonomics")]),e._v(" o al "),a("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"}},[e._v("Portal de Kusama")]),e._v(" y ayúdenos a construir la infraestructura para la red robótica inteligente del mañana. 🦾\n")]:e._e(),"ko"==e.$locale?[a("g-link",{attrs:{to:"/kusama-slot/"}},[e._v("Robonomics 크라우드론 페이지")]),e._v(" 또는 "),a("g-link",{attrs:{to:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"}},[e._v("Kusama 포털")]),e._v(" 로 이동하여 미래의 스마트 로봇 그리드를 위한 인프라 구축을 지원해주세요! 🦾\n")]:e._e()],2)}),[],!1,null,"4d45bb7a",null);t.a=i.exports}}]);