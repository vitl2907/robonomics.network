(window.webpackJsonp=window.webpackJsonp||[]).push([[70,9,102,103],{"/8Jy":function(e,t,o){},"6tRk":function(e,t,o){"use strict";o.r(t);var a=o("rePB"),n=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(6).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big","block"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(a.a)(e,"card",!0),Object(a.a)(e,"icon",this.icon),Object(a.a)(e,"image",this.image||this.imageLocal),Object(a.a)(e,"".concat(this.orientation),!0),Object(a.a)(e,"".concat(this.back),!0),Object(a.a)(e,"alignContent-".concat(this.alignContent),!0),Object(a.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(a.a)(e,"oldy","transparent"!=this.back),Object(a.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(a.a)(e,"pic",!0),Object(a.a)(e,"round",this.imageRound),Object(a.a)(e,"icon",this.icon),Object(a.a)(e,"image",this.image||this.imageLocal),Object(a.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(a.a)(e,"link",!0),Object(a.a)(e,"text",this.linkText),Object(a.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),r=(o("dVYI"),o("KHd+")),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?o("div",{class:e.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?o("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?o("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?o("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,"f2eea1cc",null);t.default=i.exports},B2e2:function(e,t,o){"use strict";o("07d7"),o("PKPk"),o("3bBZ"),o("R5XZ");var a={components:{VueRecaptcha:function(){return o.e(14).then(o.bind(null,"4JY7"))}},metaInfo:{script:[{src:"https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",body:!0}]},props:{comment:""},data:function(){return{email:null,status:"none",recaptchaSitekey:"6LeWbWQUAAAAAPkpf_6AokhGBcvnOexOpbARwk6Z"}},methods:{onSubmit:function(){this.$refs.invisibleRecaptcha.execute()},onVerify:function(e){if(e){this.status="wait";var t="";if(this.email&&(t="email="+encodeURIComponent(this.email)+"&locale="+encodeURIComponent(this.$locale)+"&comment="+encodeURIComponent(this.comment)),this.$PostGoogleSheets(t)){var o=this;setTimeout((function(){o.status="ok"}),1500)}else this.status="error"}}}},n=(o("jP48"),o("KHd+")),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form",class:"status-"+e.status},[o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[o("label",{staticClass:"label"},[o("span",[e._v(e._s(e.$ts("Your email"))+":")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("label",[o("input",{attrs:{type:"checkbox",name:"agreement",required:""}}),e._v(" "+e._s(e.$ts("I agree to receive emails")))]),o("vue-recaptcha",{ref:"invisibleRecaptcha",attrs:{size:"invisible",sitekey:e.recaptchaSitekey},on:{verify:e.onVerify}}),o("div",[o("button",[e._v(e._s(e.$ts("Send")))])])],1),o("div",{staticClass:"form-message"},[e._v(e._s(e.$ts("Thanks, your application has been sent!")))])])}),[],!1,null,"6494aafb",null);t.a=r.exports},CwIn:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/building-client-for-robonomics-parachain.4e9973b.44009b7b06d0e549b45f9a6512471c25.jpg",size:{width:2e3,height:1125},sizes:"(max-width: 2000px) 100vw, 2000px",srcset:["/assets/static/building-client-for-robonomics-parachain.82a2fbd.44009b7b06d0e549b45f9a6512471c25.jpg 480w","/assets/static/building-client-for-robonomics-parachain.cbab2cf.44009b7b06d0e549b45f9a6512471c25.jpg 1024w","/assets/static/building-client-for-robonomics-parachain.4e9973b.44009b7b06d0e549b45f9a6512471c25.jpg 2000w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2000 1125' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-b4bd1eb0e8c6266f0f11d24322c3784d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-b4bd1eb0e8c6266f0f11d24322c3784d)' width='2000' height='1125' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUCAwQGAQf/xAA1EAABAwIDBQMKBwAAAAAAAAABAAIDBBEFEiETMUFRwTJhcSIzQmJykaGx0fAUIyQ0UoHh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQACAQMEAwAAAAAAAAAAAAAAAQMCERIEMkFREyEx/9oADAMBAAIRAxEAPwD4dXU1HtI/wbhJA6KMk5Q03LGlzdC4aEkb/duVrMDpXU7pctrOa21%2bYceXq/FSxCF9PLFHI7M7YwuvZ40MTCO3rx8OWiZRvAoXMN75mO/oBw6hVb0dlMNGCZz82GQsZnZC57bkWaASLJe11MHA7B2hvvH0Tyuo5KymDYi0bNxcQ4pa3CKgkgGK4F%2b0qxRsoI%2bUUVE1PNJmNPYcACPoqiafhB7z/i2HB6kOLbxXtftIOEVIJBMWnrIxQ/BF0ZA6my/t/Kvoc3SysbUsa4EQgECx7/HnuXlVRy0xO0y2FtQeazJ4oFp4%2bjbgpJwyMk653Lp2%2bYPg3quYwMXwyMeu5dKHDZZdbloNx996ETRsQU9sk/h0UIx%2bY72eikwtgjmMzhG3cS47uH34rMyspQ936iOxFu13INDU/wA%2b72eq8k7TvE/MrO6updq5wnjtb%2bSqmxKma94a/NrvB7z9UDsZcb3P53b8klTLE6qKoa8xu3kaJami18GuHQthpImMva4dr3gHqnYNsosNY7/EIQp4MI9iI14ElPOH6jNx19IBJBBHmIyjgNw5IQqRqiIiYSfJbpb0QstQ8RzPYI47NPFqEIKKnSZhbIwd4C8aLuA5lCExn//Z' /%3e%3c/svg%3e"}},IWpN:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/blackmirror-lesson.4e9973b.4bed77fecdd94cb6ddc15a77e8342d62.jpg",size:{width:2e3,height:1133},sizes:"(max-width: 2000px) 100vw, 2000px",srcset:["/assets/static/blackmirror-lesson.82a2fbd.4bed77fecdd94cb6ddc15a77e8342d62.jpg 480w","/assets/static/blackmirror-lesson.cbab2cf.4bed77fecdd94cb6ddc15a77e8342d62.jpg 1024w","/assets/static/blackmirror-lesson.4e9973b.4bed77fecdd94cb6ddc15a77e8342d62.jpg 2000w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2000 1133' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-6b1ce4a99fa6c09896319b899916ab28'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-6b1ce4a99fa6c09896319b899916ab28)' width='2000' height='1133' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEHAgUGBAP/xAA0EAACAQMCBAEKBQUAAAAAAAABAgMABBEFBgcSITETGCIyQVNxkZSh0ghRYbHRFDRCgeH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQAAf/EACIRAAICAQIHAQAAAAAAAAAAAAABAgMEERIFExQhMlFSMf/aAAwDAQACEQMRAD8A4Tyit6%2bx0X5Vvvp5RW9fY6L8q331TdKk6HH%2bEM5s/Zet5xr3hDJb%2bG%2bkzGWMSnw4ZgIyc5Rst3GB2yOteGfjpu2E4K6aWH%2bOJQfq9VvPOYrmJBks6gBQMk5xVncGLS2mut0z3FjDcXEFnbvAk8KOeYy4wOYEDPbOKsXCcSb0cETTzLIQctTKy44b0YiVYtJUEHHiczD4GSt5Bxc4gXOnm9toNGlt1VmdxatgAfrzdfX8K6u%2bsNNvdC1BrvS9JhmXTrmbw47KEFWWJiPOC56HqGGM4rjOHe091R8PdQ13U9Ut4duDSrj%2bnsCBI8wMZIbp6HXBBJJx0xihu4Th1JPajY2dO/cvRoW/ETvUMwEOi9CR/aN99R5RW9fY6L8q331Tsnpt7z%2b9Y1L0OP8ACKebP2KUpVYs3Ek9vJMkhlIZAcEMPy9X0%2btbaLdWpaRcCbQNUWPxII7eVGRSCsZ80YbOevX9DXOqqMq%2bZH/pG/moeNWU8qqOvcKf5olkyT7CnCEltkux1d7xI3ffWsltcaxCIZUaJxHDEhKsCGGQoOCCfjW829xKurDYd5tq9uRLA8UlvBhQeRWAwebPb1YwffVcCyZgCpYg9jy96%2bDoEYqxYMPUV/7XZ3OzyO11wr8FpqYyEGRiOxJ/esaUoBgpSlYx7lZlhChmCkdQD3qfDXmx1%2bJpSkNi2Q0aiGV8tlVyOp/MV4iSe5J99KUyH4FEilKUYR//2Q==' /%3e%3c/svg%3e"}},"K3+X":function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/robonomics-parachain-subscan.4e9973b.7e6e56b274eec5567f1a098bbaf9c06b.jpg",size:{width:2e3,height:1125},sizes:"(max-width: 2000px) 100vw, 2000px",srcset:["/assets/static/robonomics-parachain-subscan.82a2fbd.7e6e56b274eec5567f1a098bbaf9c06b.jpg 480w","/assets/static/robonomics-parachain-subscan.cbab2cf.7e6e56b274eec5567f1a098bbaf9c06b.jpg 1024w","/assets/static/robonomics-parachain-subscan.4e9973b.7e6e56b274eec5567f1a098bbaf9c06b.jpg 2000w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2000 1125' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-9fc8456e67b8f1e40f79dcd1a6563f83'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-9fc8456e67b8f1e40f79dcd1a6563f83)' width='2000' height='1125' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAMBBAIHCAYF/8QAOBAAAQIEAgYGBwkAAAAAAAAAAQIRAAMEIQUSBhMxQXGBCCIyQlHBBxcYJFKRsSMzRVaU0dLh8P/EABcBAQEBAQAAAAAAAAAAAAAAAAEAAwL/xAAcEQEAAgMAAwAAAAAAAAAAAAAAAQIDEjEEEzL/2gAMAwEAAhEDEQA/AK/sv4v%2bZsP/AEsz94B0Zcakl0aT0F9pFIrzVHVMLqFhKLhwbbvONPZZOftF%2bjtT4ZST049JwjHZsxYUidMm1NPq0s2VkFje7mPs%2bofR5QcaMYGR4jEa3%2bUbuCjNlBhYjdFSvqKqjkSk0lEqrUTlKUzUSykfFdgeAg3smnk%2bgvAEo6ui%2bBlN/wAQrT5x4/2fMVp8bmVeB4/hWFTETDNlSdQudqkKJZPXJcByHMdLyZ4fVDaCwff8oQihZYXMmqmJQCmWCEnICQTuvsG3%2b4YvYOb8Z6O%2blONz6ebi%2bl%2bHT1SQQgpoNWwJc9hn5x7jQ70RVmj0gJnYtTT8o7klSfqY2nhVVVVGvRVYeukRKXllLVOQvXBz1hlNt1je8Xl9hXAx3TyMmP5llmwUzRrdMLnFki7X%2bIjcfCGQucrKkdZr/EU7j4Ri2Ppi8lJ222u8ZLNxducY0xeSku9trvEzCxAdubRW6I4qy1e8AZu8bZz9Giy/2ZZ/mPKKyF%2b8AZu8bZz9GiyPuy3%2b%2bUM8UdKll5abvzeJX2FcDESy6E3fm8SvsK4GApgKc1nUOBaCCJM0HKltrbztiS5u5HCCCKRHCUoaYVZ1m7sVWhgJyEPzFoIIZ4mIDJSHJ4wQQQF//9k=' /%3e%3c/svg%3e"}},QaWH:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/robonomics-parachain-transactions.4e9973b.010f6b03686a563178b45a0ee472358f.jpg",size:{width:2e3,height:1125},sizes:"(max-width: 2000px) 100vw, 2000px",srcset:["/assets/static/robonomics-parachain-transactions.82a2fbd.010f6b03686a563178b45a0ee472358f.jpg 480w","/assets/static/robonomics-parachain-transactions.cbab2cf.010f6b03686a563178b45a0ee472358f.jpg 1024w","/assets/static/robonomics-parachain-transactions.4e9973b.010f6b03686a563178b45a0ee472358f.jpg 2000w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2000 1125' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-1ad39734f59cab3ab05d920aaa917dd9'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-1ad39734f59cab3ab05d920aaa917dd9)' width='2000' height='1125' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQj/xAAqEAABAgQEBQQDAAAAAAAAAAABAAIDETFxEiFBwTI0QlGBBCJh0RMksf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABQTH/2gAMAwEAAhEDEQA/AOoUsVrnMk0yMx32TINPIWoF/E8B7cWQGRzn/VkniFidhJB0B%2b1c8UW2yk7lnX%2bERrobsbHAjPIznRZCY52IkjFrWXgKprCvsl9P1XUmmlEPBqTPOqE8TRTfwOsUVqDTyEI%2bwrCqHii2U3cu6/dUNYtlN3Luv3KYirqw77LIFHVqtdxQ77Ign211WZppYmim/gdYqkTpskImCO%2bSqhY4yHkIQrOlUJzjfA2UnO/UcZCqEJeIs4%2b6FfYpPSuxB90IUnKaaJ02SIQiv//Z' /%3e%3c/svg%3e"}},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},VMYA:function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),n=o("6tRk"),r=o("B2e2"),i=o("UQSp"),s=o("Kw5r");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var l={Card:n.default,UserForm:r.a,VueRemarkRoot:i.a},h=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===c(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:o[e]=function(){return l[e]}}))},p=s.a.config.optionMergeStrategies,b="__vueRemarkFrontMatter",f={excerpt:null,title:"Robonomics parachain updates, March’22",date:"2022-03-17T00:00:00.000Z",published:!0,locale:"en",cover_image:"./images/robonomics-parachain-updates-march-22/cover.jpg",description:"The Robonomics parachain was launched in January of this year, and our first publicly available progress report was published on January 18th in a blog post. Now, we will provide details of the work we have already performed within the task list",abstract:""};var m=function(e){e.options[b]&&(e.options[b]=f),s.a.util.defineReactive(e.options,b,f),e.options.computed=p.computed({$frontmatter:function(){return e.options[b]}},e.options.computed)},d=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("p",[e._v("The Robonomics parachain was launched in January of this year, and our first publicly available progress report was published on January 18th "),a("a",{attrs:{href:"https://robonomics.network/blog/parachain-on-kusama-first-week-report/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("in a blog post")]),e._v(". Now, we will provide details of the work we have already performed within the task list as specified in the roadmap on Github: "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/issues/145",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Tracking issue for Robonomics Parachains on Kusama Launch #145")]),e._v(".")]),a("h2",{attrs:{id:"about-the-most-important-things-in-the-work-of-the-robonomics-parachain-on-kusama-in-2-months"}},[a("a",{attrs:{href:"#about-the-most-important-things-in-the-work-of-the-robonomics-parachain-on-kusama-in-2-months","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("About the most important things in the work of the Robonomics parachain on Kusama in 2 months")]),a("ul",[a("li",[a("p",[e._v("The parachain is stable and has processed the first million extrinsics. The current network of collators also remains open with approximately "),a("a",{attrs:{href:"https://telemetry.parachain.robonomics.network/#list/Robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("80 collators")]),e._v(". Anyone can "),a("a",{attrs:{href:"https://wiki.robonomics.network/docs/en/how-to-launch-the-robonomics-collator/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("become a Robonomics collator")]),e._v(" and receive rewards for preparing parachain block candidates and passing them to the Kusama validators.")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases/tag/v1.8.2",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("In the release 1.8.2")]),e._v(", the sudo function was removed. The change was accepted by the parachain at the block "),a("a",{attrs:{href:"https://robonomics.subscan.io/block/347918",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("347,918")]),e._v(". This means that the project development team no longer has the administrative functions of managing the parachain anymore.")])]),a("li",[a("p",[a("a",{attrs:{href:"https://polkadot.js.org/apps/#/techcomm",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("The technical committee")]),e._v(" completed the first update of the network protocol through the on-chain governance mechanism. In just 2 months, the technical committee has processed around 40 requests, such as exodus events, treasury proposals and runtime upgrades.")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases/tag/v1.8.0",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Starting from the release 1.8.0")]),e._v(", the Robot-as-a-service function is fully available. Using this function, you can combine the technical and economic parameters of launching an IoT device.")])]),a("li",[a("p",[a("a",{attrs:{href:"https://wiki.robonomics.network/docs/en/get-subscription/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("The mechanism of IoT subscriptions in the Robonomics parachain")]),e._v(" has passed the stage of the first applications in real work scenarios. Now it has become the main functionality of the parachain, which the Robonomics developers plan to offer to home infrastructure owners.")])]),a("li",[a("p",[e._v("The Winter school was suspended on February 24th. After 3 weeks, the developers decided to abandon the continuation of the school as an event. The Winter School lessons have been redesigned as an introductory Robonomics course, which will be available online 24/7 during 2022 from anywhere in the world. The course will be published on the "),a("a",{attrs:{href:"https://robonomics.academy/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("robonomics.academy website")]),e._v(" by the end of March.")])]),a("li",[a("p",[e._v("An additional 1 XRT for crowdoan campaign participants who have a pioneer card "),a("a",{attrs:{href:"https://dapp.robonomics.network/#/bonus-for-pioneer",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("is available through the Robonomics dapp")]),e._v(".")])])]),a("h2",{attrs:{id:"parachain-statistics-for-2-months"}},[a("a",{attrs:{href:"#parachain-statistics-for-2-months","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Parachain statistics for 2 months")]),a("p",[e._v("You can find most of the statistics yourself on the Subscan.io block explorer at: "),a("a",{attrs:{href:"https://robonomics.subscan.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("robonomics.subscan.io")])]),a("p",[a("g-image",{attrs:{src:o("K3+X"),alt:"Parachain statistics on Subscan.io"}})],1),a("h3",{attrs:{id:"the-robonomics-parachain-processed-1-million-transactions"}},[a("a",{attrs:{href:"#the-robonomics-parachain-processed-1-million-transactions","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("The Robonomics parachain processed 1 million transactions")]),a("p",[e._v("It is more correct to say "),a("a",{attrs:{href:"https://wiki.polkadot.network/docs/build-protocol-info#extrinsics",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("extrinsics")]),e._v(", but still we will sometimes use such assumptions for simplicity.")]),a("p",[a("g-image",{attrs:{src:o("uC1z"),alt:"extrinsics for Robonomics"}})],1),a("p",[e._v("The daily load on the parachain today is from 10 to 25 thousands transactions per day. The datalog() function is mainly used to remotely collect data from IoT devices. Also, since February, the Robonomics developers have started using parachain IoT subscriptions for the first Robonomics scenarios of which we have been preparing for the past 2 years.")]),a("p",[a("g-image",{attrs:{src:o("QaWH"),alt:"The daily load on the parachain today"}})],1),a("p",[e._v("The number of full Robonomics nodes that transmit to "),a("a",{attrs:{href:"https://telemetry.parachain.robonomics.network/#list/Robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("the publicly available parachain telemetry service")]),e._v(" has doubled from 40 to 80 full network nodes. Anyone can "),a("a",{attrs:{href:"https://wiki.robonomics.network/docs/en/how-to-launch-the-robonomics-collator/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("become a Robonomics collator")]),e._v(" and receive rewards for preparing parachain block candidates and passing them to the Kusama validators.")]),a("h3",{attrs:{id:"the-first-robonomics-users"}},[a("a",{attrs:{href:"#the-first-robonomics-users","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("The first Robonomics users")]),a("p",[e._v("Already in early February, we had confidence that the Robonomics parachain was ready to accept it’s first users. Engaging early adopters always involves putting a lot of emphasis on training and helping out with whatever situation an early version user gets into. It is also a search for the most patient and responsive people who are interested in the technologies we use. Yes, there are always a few of them, and it is difficult to find them in more numbers than a couple of friends and work colleagues, but this is precisely the task we face in 2022. By creating a community of web3 + IoT power users ready to experiment for the sake of education, we will be able to ensure the exponential growth of the project in 2023-2024.")]),a("p",[e._v("The main thing we want to do to attract the first users is to develop some training courses in 2022 that will not only be useful in terms of acquiring skills, but will also be interesting to complete.")]),a("p",[e._v("Of course, the Robonomics developers plan to organize contests and encourage the community for being active. However, we still believe that creativity/enthusiasm is stronger than the learning material we could provide. It's cool when, in the process of learning, you can try "),a("a",{attrs:{href:"https://blackmirror.robonomics.academy/#/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("to go through a black mirror")]),e._v(' and, while the QR code on the screen changes, remember any episode of the series of the same name or a scene from Philip K. Dick\'s book "Ubik", in which the main character quarrels with the door, to which he owes a couple of coins... In general, one of the main tasks of the team is to maintain a creative approach to user education in the future.')]),a("p",[a("g-image",{attrs:{src:o("IWpN")}})],1),a("p",[e._v("The Winter school "),a("a",{attrs:{href:"https://twitter.com/EnsRationis/status/1496885398404059136",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("was suspended on February 24th")]),e._v(". Fortunately, you can still try the first lesson now! To do this, follow the link: "),a("a",{attrs:{href:"https://blackmirror.robonomics.academy/#/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://blackmirror.robonomics.academy/#/")])]),a("p",[e._v("Those who have already completed the first lesson of the School in February may notice that the address of (D)app has changed. Now the lesson is available on the robonomics.academy domain, and soon all 5 lessons that we planned to conduct in the event format of the last week of February will be available online 24/7 in the Robonomics introductory course format. We will tell you about this separately.")]),a("h3",{attrs:{id:"the-robonomics-releases-on-github"}},[a("a",{attrs:{href:"#the-robonomics-releases-on-github","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("The Robonomics releases on GitHub")]),a("p",[e._v("Over the past 2 weeks, there have been many releases of the Robonomics parachain client. The most relevant at the time of this writing is "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("1.8.4")]),e._v(".")]),a("p",[a("a",{attrs:{href:"https://wiki.robonomics.network/docs/en/how-to-build-collator-node/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Building the Robonomics parachain client")]),e._v(" on Ubuntu 21.10 and running without any difficulties:")]),a("p",[a("g-image",{attrs:{src:o("CwIn"),alt:"Building the Robonomics parachain client"}})],1),a("p",[e._v("In addition to system updates in releases, it is important to note the following improvements:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases/tag/v1.8.0",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Release 1.8.0")]),e._v(" - added pallet liability, which allows you to fully implement the Robot-as-a-Service model and launch an IoT device with the transfer of technical and economic information in an atomic form.")]),a("li",[a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases/tag/v1.8.2",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Release 1.8.2")]),e._v(" - the superuser (sudo) has been removed from the Robonomics parachain. Already today, the Robonomics parachain does not have the possibility of direct control by the developers.")])]),a("p",[e._v("You can get acquainted with all the changes in the Robonomics parachain client at the link: "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://github.com/airalab/robonomics/releases")])]),a("h2",{attrs:{id:"the-first-stage-of-the-roadmap-2022-is-90-completed"}},[a("a",{attrs:{href:"#the-first-stage-of-the-roadmap-2022-is-90-completed","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("The first stage of the roadmap 2022 is 90% completed")]),a("p",[e._v("By the end of Q1 2022, the project team has completed almost all "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/issues/145",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("the tasks to implement the basic functionality of the parachain")]),e._v(", and several Robonomics scenarios that previously worked only in test mode are already at the pilot stage.")]),a("h3",{attrs:{id:"the-main-task-of-q2-2022---xcm-integrations"}},[a("a",{attrs:{href:"#the-main-task-of-q2-2022---xcm-integrations","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("The main task of Q2 2022 - XCM integrations")]),a("p",[e._v("As you can see from "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/issues/145",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("the Tracking issue for Robonomics Parachains on Kusama Launch #145")]),e._v(", the first part of the tasks has an item related to "),a("a",{attrs:{href:"https://research.web3.foundation/en/latest/polkadot/XCMP/index.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("XCMP")]),e._v(" implementation. We implemented the first tests with messaging between 2 instances of the Robonomics parachain during "),a("a",{attrs:{href:"https://youtu.be/zCH7RuIHEMg",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("a master class in St. Petersburg in the fall of 2020")]),e._v(". It is the case howeever, that in past 1.5 years XCMP has undergone many changes, and now it is more correct to say "),a("a",{attrs:{href:"https://wiki.polkadot.network/docs/learn-crosschain",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("XCM (Cross-Consensus Message)")]),e._v(".")]),a("p",[e._v("Gavin Wood introduced the first version of XCM in the fall of 2021. XCM is well covered in three articles on medium:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("XCM: The Cross-Consensus Message Format")])]),a("li",[a("a",{attrs:{href:"https://medium.com/polkadot-network/xcm-part-ii-versioning-and-compatibility-b313fc257b83",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("XCM Part II: Versioning and Compatibility")])]),a("li",[a("a",{attrs:{href:"https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("XCM Part III: Execution and Error Management")]),e._v("r")])]),a("p",[e._v("Already in February, we began to refine the Robonomics parachain in order to implement the first integration within the Kusama ecosystem. Our first task in this direction is integration with the Statemine parachain. This integration will allow users to use any statemine tokens to pay according to the Robot-as-a-Service model, for example, "),a("a",{attrs:{href:"http://telescope.merklebot.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("when remotely controlling a telescope in the Atacama Desert")]),e._v(" or to pay for items in a vending machine with tokens anywhere in the world.")]),a("p",[e._v("In addition to integration with Statemine, plans for Q2 include:")]),a("ul",[a("li",[e._v("Integration with Karura to add XRT/kUSD liquidity pool.")]),a("li",[e._v("Integration with Moonriver to manage IoT devices using arbitrary solidity contracts.")]),a("li",[e._v("Studying the technology of bridges between Ethereum and Kusama using the example of Darwinia.")])]),a("p",[e._v("We will describe each integration scenario separately based on the results of testing in Rococo, Westend or other sandboxes where Karura, Moonriver, Darwinia parachains have their own test versions.")]),a("h2",{attrs:{id:"in-conclusion"}},[a("a",{attrs:{href:"#in-conclusion","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("In conclusion")]),a("p",[e._v("There is complete chaos around us now, but the project team marked our trajectory for the web3 universe long ago - we publish the results of our work on the Internet so that experiments can be repeated anywhere in the world, because apart from open source code and access to the blockchain, you do not need anything more. Of course, life in the world of web3 is not so easy when it comes to a lot of details, but we can handle it. As engineers, we can imagine the consequences of militarization in the 21st century. The best thing that we all can do, with the current geopolitcal situations in mind, is to personally participate in peaceful projects and create as much open source software as possible for the tasks of ordinary people. Over the past year, our efforts have launched such projects as: an educational program for "),a("a",{attrs:{href:"https://spot-sdk.education/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("remote control of the robotic dog Boston Dynamics")]),e._v("; "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=Up8hESnXnaY",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("remote observation of the starry sky")]),e._v(" from the most suitable place for this on the planet Earth - the Atacama Desert; "),a("a",{attrs:{href:"https://airalab.org/en/air-monitoring",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("civil sensor network for monitoring the quality of the urban environment")]),e._v(" in the industrial city of Togliatti; "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=4iCkdF2UJmo",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("monitoring of water quality")]),e._v(" in the canals of St. Petersburg. This year we will be focusing on smart home scenarios so you can "),a("a",{attrs:{href:"https://wiki.robonomics.network/docs/en/home-assistant-begin/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("manage your home IoT infrastructure without the help of clouds")]),e._v(".")]),a("p",[e._v("We will share more with you in the next roadmap updates.")])])}),[],!1,null,null,null);"function"==typeof h&&h(d),"function"==typeof m&&m(d);t.default=d.exports},dVYI:function(e,t,o){"use strict";o("/8Jy")},jP48:function(e,t,o){"use strict";o("tIkw")},tIkw:function(e,t,o){},uC1z:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/montly-extrinsics.e9dcf42.4fdd685c36936a3073cfba84004cd796.png",size:{width:2428,height:420},sizes:"(max-width: 2428px) 100vw, 2428px",srcset:["/assets/static/montly-extrinsics.82a2fbd.4fdd685c36936a3073cfba84004cd796.png 480w","/assets/static/montly-extrinsics.cbab2cf.4fdd685c36936a3073cfba84004cd796.png 1024w","/assets/static/montly-extrinsics.2665e34.4fdd685c36936a3073cfba84004cd796.png 1920w","/assets/static/montly-extrinsics.e9dcf42.4fdd685c36936a3073cfba84004cd796.png 2428w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2428 420' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-459ee054382972f0de95bc355416c405'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-459ee054382972f0de95bc355416c405)' width='2428' height='420' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAALCAYAAADP9otxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/0lEQVRIx91WOW/UUBDOL6ZJg2igoaAkioKQUqQOHUKiQxQgmohcUpK9194ja693fd/eHeYb22snZBWyJBRYGn9%2bz2/em/nmsLf8ICRNm5KuG2QYc5oaM5rw2LIdiuKEwiheCcb/m2y5rkfn55csV9RsdqjRaNPJ8Tl1uipFSSqOx4wlGUGNkIdK8MTrN9l3K2THymtJ1ZUtFpQUjnt%2bSEEYUZpmfy1JmlKWLWR/oJy7XMrZC5nLBFNe9xjnrbcjywmAg67jUqvZpk67y%2bWgk9JXedwhnZ/33h/Ss%2b039OLlLjmOtzJ4kwt6cK6ub0wNMucmzbj84iiqCNnwjIfYkmcA35IkYedckTAMyfN8crgH4LnZUujo5wWdnDVk3V0GluP7pH5ZlkOttkqnZ1x6rT5dNbp0ccmkT80bRD2FkGRbQQBSe1MGkcLQvy9aOAzX8WmDvnw9kueID5/NbTJmFjdcl0wmZDjSZO4fExDLYS5HPYpjclyfm16yMgJzIa%2bZaLNV4/C5JwzYWBjd7g7EGfQLzw84gvO8xngMAUElAbvvPtD287eSSQF/fWIuv5j3/52wxZOVQL7vsiIANzQeOIJodPsjjoJFo7EuDiqDa5qbNs8PJTp4X46BPSUf99Wx6GEMHIwm/Ek1RR8RDrm%2b9w8%2b0qvX%2b0LScKyx6BJ1y8ozAA0SpCEAILEktkS/IA1BkubsBbIWAYFu6QsaaN5IM8lS6ALjJLmRlWsJMGYmfwYHNAX2hjIPhGMr5PfAUq9T09e5oYEIjR1V1GsaXeuk6TPa2TvkDNgpCNBF8E5lkkA4smqiGaQOJ7IepAJ7ylh0cDaw1VGFXCDObLYVsQVjCU6vCE4RzNyn3HaQCRJBUK0ElrIADCPKd6MlaZtjJOsxrvRq%2bhyRuelIhBBZRAzvvv84o0%2bfv0mp2LZHtlMJ1iATgNBBSQKxh%2bzlB%2bJUvrdd2GLXbLmJ/m3b/MoX6FcEFHVd/uwgTR4b4%2bKva1HUtczfJcl6/LOz0jV4a13tD/cXhP2iYeGm94AAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);