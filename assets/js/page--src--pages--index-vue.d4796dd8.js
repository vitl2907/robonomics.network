(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5q55":function(t,e,a){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=[],r=!0,i=!1,s=void 0;try{for(var o,n=t[Symbol.iterator]();!(r=(o=n.next()).done)&&(a.push(o.value),!e||a.length!==e);r=!0);}catch(t){i=!0,s=t}finally{try{r||null==n.return||n.return()}finally{if(i)throw s}}return a}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.enable=e.disable=void 0;var s,o,n,c,l,b,d,g,u,f=[].slice;s=0,c={},n=!1;e.disable=function(){return n=!0};e.enable=function(){var t,e,a;for(t in n=!1,a=[],c)e=c[t],a.push(u(e));return a},g=function(t,e){var a,r,i;if(!((null!=e&&null!=(i=e.value)?i.disabled:void 0)||o.defaults.disabled||n))return r={observer:l(t,e)},a="i"+s++,t.setAttribute("data-in-viewport",a),c[a]=r;t.classList.add.apply(t.classList,["in-viewport"])},l=function(t,e){var a,s,n,c=e.value,l=void 0===c?{}:c,b=e.modifiers;return n=l.root||o.defaults.root,n=function(){switch(i(n)){case"function":return n();case"string":return document.querySelector(n);case"object":return n}}(),a="string"==typeof l?l:l.margin||o.defaults.margin,(s=new IntersectionObserver((function(e){var a;return a=r(f.call(e,-1),1)[0],u({el:t,entry:a,modifiers:b})}),{root:n,rootMargin:a,threshold:[0,1]})).observe(t),s},u=function(t){var e,a,r,i=t.el,s=t.entry,o=t.modifiers;if(r=s.boundingClientRect,a=s.rootBounds,e=s.isIntersecting,a||(a={top:0,bottom:window.innerHeight}),i.classList.toggle("in-viewport",e),i.classList.toggle("above-viewport",r.top<a.top),i.classList.toggle("below-viewport",r.bottom>a.bottom+1),o.once&&e)return d(i)},b=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},d=function(t){var e,a,r;if(e=t.getAttribute("data-in-viewport"),a=c[e])return null!=(r=a.observer)&&r.disconnect(),delete c[e]};var m=o={defaults:{root:void 0,margin:"0px 0px -1px 0px",disabled:!1},inserted:function(t,e){return g(t,e)},componentUpdated:function(t,e){if(!b(e.value,e.oldValue))return d(t),g(t,e)},unbind:function(t){return d(t)}};e.default=m},"9N2j":function(t,e,a){"use strict";a("pOEY");var r=a("KHd+"),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"menu oldy",attrs:{itemscope:"",itemtype:"http://www.schema.org/SiteNavigationElement"}},[a("div",[a("g-link",{attrs:{to:"/community",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("Enter the Robonomics")])]),a("p",[t._v("All you need to know is here: white paper, roadmap, token, assets, chat and other social links.")])],1),a("div",[a("g-link",{attrs:{to:"https://github.com/airalab/robonomics/releases",target:"_blank",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("Github Releases")])]),a("p",[t._v("Build technical && economic transactions in Polkadot/Ethereum blockchain with robots using opensource Robonomics framework.")])],1),a("div",[a("g-link",{attrs:{to:"https://wiki.robonomics.network",target:"_blank",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("WIKI for devs")])]),a("p",[t._v("Robonomics network quick start: installation and setting up guides, examples, glossary.")])],1),a("div",[a("g-link",{attrs:{to:"https://dapp.robonomics.network",target:"_blank",itemprop:"url"}},[a("span",{attrs:{itemprop:"name"}},[t._v("DApp tools")])]),a("p",[t._v("Decentralized application with variety of Robonomics tools: swapping tokens, telemetry, working services, parachain etc.")])],1)])}),[],!1,null,null,null);e.a=i.exports},"BWX/":function(t,e,a){"use strict";a("v8ht")},EUja:function(t,e,a){"use strict";var r=a("ppGB"),i=a("HYAF");t.exports="".repeat||function(t){var e=String(i(this)),a="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},QIpd:function(t,e,a){var r=a("xrYK");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"as+z":function(t,e,a){},iyQ6:function(t,e,a){"use strict";a.r(e);a("toAj");var r=a("Kw5r"),i=a("5q55"),s=a.n(i),o=a("9N2j"),n=a("9qaU");r.a.directive("in-viewport",s.a);var c={components:{Navigation:o.a,MetaInfo:n.a},mounted:function(){this.scale(),window.addEventListener("load",this.scale),window.addEventListener("resize",this.scale)},beforeDestroy:function(){window.removeEventListener("load",this.scale),window.removeEventListener("resize",this.scale)},methods:{scale:function(){this.scaleRatio(".roboHands__move.left",".roboHands__left"),this.scaleRatio(".roboHands__move.right",".roboHands__right")},scaleRatio:function(t,e){var a=(document.querySelector(t).offsetWidth/document.querySelector(e).offsetWidth).toFixed(2);document.querySelector(e).style.transform="scale("+a+")"}}},l=(a("BWX/"),a("KHd+")),b=r.a.config.optionMergeStrategies.computed,d={metadata:{siteName:"Robonomics Network",siteDescription:"Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control."}},g=function(t){var e=t.options;e.__staticData?e.__staticData.data=d:(e.__staticData=r.a.observable({data:d}),e.computed=b({$static:function(){return e.__staticData.data}},e.computed))},u=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout-index",[e("MetaInfo",{attrs:{pageTitle:"Home",pageDescription:this.$static.metadata.siteDescription}}),e("g-image",{staticClass:"logo",attrs:{itemprop:"logo",alt:this.$static.metadata.siteName+" logotype",src:a("xQcN")}}),e("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{itemprop:"name"},domProps:{innerHTML:this._s(this.$static.metadata.siteName)}}),e("div",{staticClass:"homepage__description"},[e("div",{staticClass:"layout__content"},[e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{itemprop:"description"},domProps:{innerHTML:this._s(this.$static.metadata.siteDescription)}}),e("Navigation")],1),e("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport.once",modifiers:{once:!0}}],staticClass:"roboHands"},[e("div",{staticClass:"roboHands__move left"},[e("div",{staticClass:"roboHands__left"},[e("g-image",{staticClass:"roboHands__left__1",attrs:{src:a("q721")}}),e("g-image",{staticClass:"roboHands__left__2",attrs:{src:a("zf7x")}}),e("g-image",{staticClass:"roboHands__left__3",attrs:{src:a("TNFr")}}),e("g-image",{staticClass:"roboHands__left__4",attrs:{src:a("kxUY")}}),e("g-image",{staticClass:"roboHands__left__5",attrs:{src:a("6txv")}}),e("g-image",{staticClass:"roboHands__left__6",attrs:{src:a("eQ4B")}}),e("g-image",{staticClass:"roboHands__left__7",attrs:{src:a("0fEB")}}),e("g-image",{staticClass:"roboHands__left__8",attrs:{src:a("lL92")}}),e("g-image",{staticClass:"roboHands__left__9",attrs:{src:a("CoD9")}}),e("g-image",{staticClass:"roboHands__left__10",attrs:{src:a("Ehed")}}),e("g-image",{staticClass:"roboHands__left__11",attrs:{src:a("EtMq")}})],1)]),e("div",{staticClass:"roboHands__move right"},[e("div",{staticClass:"roboHands__right"},[e("g-image",{staticClass:"roboHands__right__1",attrs:{src:a("LPIO")}}),e("g-image",{staticClass:"roboHands__right__2",attrs:{src:a("GYpJ")}}),e("g-image",{staticClass:"roboHands__right__3",attrs:{src:a("ksDP")}}),e("g-image",{staticClass:"roboHands__right__4",attrs:{src:a("P8y9")}}),e("g-image",{staticClass:"roboHands__right__5",attrs:{src:a("CopK")}}),e("g-image",{staticClass:"roboHands__right__6",attrs:{src:a("s0l/")}}),e("g-image",{staticClass:"roboHands__right__7",attrs:{src:a("iRCU")}}),e("g-image",{staticClass:"roboHands__right__8",attrs:{src:a("0nWH")}}),e("g-image",{staticClass:"roboHands__right__9",attrs:{src:a("4D0A")}}),e("g-image",{staticClass:"roboHands__right__10",attrs:{src:a("CYdh")}}),e("g-image",{staticClass:"roboHands__right__11",attrs:{src:a("7G98")}}),e("g-image",{staticClass:"roboHands__right__12",attrs:{src:a("tI3r")}}),e("g-image",{staticClass:"roboHands__right__13",attrs:{src:a("la6G")}}),e("g-image",{staticClass:"roboHands__right__14",attrs:{src:a("zL5t")}}),e("g-image",{staticClass:"roboHands__right__15",attrs:{src:a("3j3o")}})],1)])])])],1)}),[],!1,null,null,null);"function"==typeof g&&g(u);e.default=u.exports},pOEY:function(t,e,a){"use strict";a("as+z")},toAj:function(t,e,a){"use strict";var r=a("I+eb"),i=a("ppGB"),s=a("QIpd"),o=a("EUja"),n=a("0Dky"),c=1..toFixed,l=Math.floor,b=function(t,e,a){return 0===e?a:e%2==1?b(t,e-1,a*t):b(t*t,e/2,a)};r({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}))},{toFixed:function(t){var e,a,r,n,c=s(this),d=i(t),g=[0,0,0,0,0,0],u="",f="0",m=function(t,e){for(var a=-1,r=e;++a<6;)r+=t*g[a],g[a]=r%1e7,r=l(r/1e7)},p=function(t){for(var e=6,a=0;--e>=0;)a+=g[e],g[e]=l(a/t),a=a%t*1e7},v=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==g[t]){var a=String(g[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(u="-",c=-c),c>1e-21)if(a=(e=function(t){for(var e=0,a=t;a>=4096;)e+=12,a/=4096;for(;a>=2;)e+=1,a/=2;return e}(c*b(2,69,1))-69)<0?c*b(2,-e,1):c/b(2,e,1),a*=4503599627370496,(e=52-e)>0){for(m(0,a),r=d;r>=7;)m(1e7,0),r-=7;for(m(b(10,r,1),0),r=e-1;r>=23;)p(1<<23),r-=23;p(1<<r),m(1,1),p(2),f=v()}else m(0,a),m(1<<-e,0),f=v()+o.call("0",d);return f=d>0?u+((n=f.length)<=d?"0."+o.call("0",d-n)+f:f.slice(0,n-d)+"."+f.slice(n-d)):u+f}})},v8ht:function(t,e,a){},xQcN:function(t,e){t.exports={type:"image",mimeType:"image/svg+xml",src:"/assets/static/robonomics-logo.4520fc0.674fd3b96847876764f360539d019573.svg",size:{width:138,height:121},sizes:"(max-width: 138px) 100vw, 138px",srcset:["/assets/static/robonomics-logo.4520fc0.674fd3b96847876764f360539d019573.svg 138w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 138 121' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-c9d8f6d04cc4b4502e4f0b5817cdcd49'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-c9d8f6d04cc4b4502e4f0b5817cdcd49)' width='138' height='121' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAACXBIWXMAAAsTAAALEwEAmpwYAAANqElEQVRo3t1bC3BU1Rk%2b97EJ2qpFbUctLba1HR2t1nbaYvHRx9CWKhaTACGMvBQ7amCAEDrWSsZnpSqICKIIJLt7d5MFiUk2IArZzfIUEGm1HexjrFaE7N7Hbh6EZB%2bn/zn3nPvYoPXBI5ud%2befevXt3c//vf3z//58ThE7zS1RUkR1HiX71XZA%2bkEp2TfCsSaAh%2bxL8tnKg9F%2bkxjSWAgaWFB3D%2b6vYdXFIKi8FdBDVPA8misHa70j1KVBe6xMBBNGfuIEDwO8bWtavN7jlZXZcIjXlsPRyFkt%2bNUrvCaUEuS6OBK8x9ACQvR0QAioPhXMBgBjIGPCEm%2bC4HeQiBoxQHDqMRJ8%2bhKzvU/Ot/xTInx2J8T54v4aGh5KQ2LUhov3zOeRMbqDY5XC%2bD%2bL8LDMfaOJllz1HPt8N8mMnU6DnceHrLyqQ%2baccRrKiSgyIDSB3UuX9qiTZ10tBXjHPE4KkpOC78QLX3nZ9pqQ2Fs7bqPI%2bVRBJtgdFJX9CZPe1gExmXiCZuUMrUOVDOeQhvO/X0AXKEQ5EDKz%2b03y%2b5%2bfw2ffg/HXkN0zAAEAhBACECjAURJbxJTvx3QuimInOtC58BkqaFnaEwiq4/gDzAvO7vgKrDmVFQx6gPUJpTClCe29AbH%2bDUx3GGEn1ABIch70Ut%2b9VEhfC%2bQFR0b7K7yVHj7%2bAQkH0DbD%2bUrDmY85rnBrpq9ZNk%2bANC%2bB8ndszCgQAgT2oI66vILQHuWAY/Rz4XSIKr3vXkS/epyEjKK5eYSd8d5TztwSlAECQWMMj8a7PpL2ZnPbotaB6oi4xjzHU20C2mN/rEAR/kv62JzCIK0SuhGTT3m9AiW0W7YGVpY%2bxokg%2bg7wA93LwmkGmuH5zMCdEUr%2bL3qPoXANza24ntb6zuhN8HR9TMh91V41%2b9RqQvWLwQ5ZL4oO3RBaZ6zvq/dkgftP6Zn3P88OVjYz6GjRUFuYu/QZqaU9aMwNHAl0BUuP67cAg9IJib6eD9vTzKO0p6kjm2vS67Gel7TqmwNIONLvREA7tTtG3m6JJoFCDM4nAjheYtKiOYDQpDMLYZxb1a9xqy0AeYXlAdmZwsY5Z/Al3KPxtjwlCOJK02maHN1WB1LK/Mci6ReVoPu1dSWkvaBRb4PBR2IsJMg1CZ/GHfyE%2bvLxZfxTjPqpUa7uBWqMptKkNwCDx7tfdtKioo13dom8QNEuyAg/pN4jiPHE1gkx3UprMM7%2b3w8USaG2i6q62HH5vd2oiBSCapNebX%2buCys/Ip8VbQV41KVYTiJd4FLOSPPOJT7Hc8hZ4yNdYwSMQxWlVGALFX80gZ2k7IqiPRF5VvaNFz%2b6Ipf41vVmlhVIrhEBrVEdNEcP%2b/YAFbhPI7W6qPVMJMXCUurfkiEV4uB0Awg0uKmOFi%2bjlBZJOH7xYgZhefxzPbNHjbx7EuLEtSRugcDRJ474VwkAI9rLf1TgAVxNalP1HikwQIEwCnWcmFGT2Rx2Jai6Ij1nFdH2WzDwBLd%2bdRxfVpzB4QP%2bMFj25c2cPbooku1oixqUsEVKFG97GSPbq%2bd9dDiA/6OodTrcX0IwepC4qmO/jwwntST7t68xiJlU1pKyZIKkCi4JJay5QtLGPAHAcPKCzPZbKbN2HMSjuY14g7lyNUXgb3O89AnXEEcIMAhuyDDc7S/VrVkg1dIMnaKcTACv2ufWfAXnIVcAoOuLNT54Fp0ov9eEiRcsAAGnwgM5YrBM3R5LZLTuOAQipm5gX0PvDbUn4rQEj9XkgdQxsVmTBM52OAsljub41xroKXHKfqKSKuOIyy/YeJeFKfJAQv0iWw6SGLgJA1gTA6Nq%2bvZOEQHrbnjQBYBe59x8H30PNkRTaDNVh8/7DSIAc4myJCS2CXO/MN/LpqA1okdK0B9xS5wC8DDLNZWXL%2bpq7OVLUR6TGDFkN6i8KaDgPgBzUAOnI3hwJhTsGeMHAPEIYZytVPKALqO6oVUCdQtfvOBE3U9qTAglB9BqWlUQrTKxx%2bLdBeqWATlaCsuABBIAMhEA3ByBshUHyA6DC8xgIwr63E0CPKVoYiYR9bFZozAdfqD2FjCD5DNqRuWjPr41mJapZCTLaE6AzFEJx6zrc2yBtTGO4Pw0egE8EAHgADkdT/dH9NCEuNgFIUcWaYinSVOV1i9pV5rAlXsRbZZkl3pNf9AR4MtOcicibN/ZmnsKpS%2bOeMkZs6Caun4XzHNQOORsAw/aAaIp4QW5TeycBoC8cMa7grECPkA/EgX0C6TseZhWifGr6hND7SF6rW8kMaO180qFJDioqalbNOZ%2bSpJYSfM6Epe2X1h8jS%2bAZYn3wCguA6U4AmBc4csFG2iVuM8T1r/fQXEB/r7bDolr4zS9RWvRpI50Jl9DnyYt9Prr2Wag/C/Kgu29nCg%2bcC9xNXB%2bsngbaxGAdlwcAAD3OEGglXhCF80gq%2b9quPgiJ5FhnQtwS6bWrSzsXzbGKMB%2bfHJ2k0RkvdeHheTKj5SiwgIfP/2UlYVZ7IYy%2br2DbU/wa6eWPSPWdxPpZbn0AzQagWe/ZHrM9gHsBHDNbd/eT45uNm48InA3C0CegoErXFAj3X9KMebIl06cbnc8qfe4h6qrDZrNBB5J2QyKxhsTKvDwufXyaY8X%2bUkJ78ED9pvIqVR7eAwAqRnUJAkBvrD1lJ0EnCBAKUbNCnMO8QDZzQqc1XbKbIvVmPn/0BFVB8GqmV36uUMhb24M/9lveksr%2bOLSkhtnvr8LO9pV7yndBMmz7C1ecgiD7EjlPfRKjYFdmejiV3LMHXD3WjVvaDGceIIpnX9neQ47xcNT4MqdFetyEqReg%2bi6ncTaCzHAb53N4AWlmhICaX339hMWau/pSSOIzyPo%2bS05ai7SxnyicdipO6gAU6iHvu7718Ctq6axHk39aEu5o2qp1E5ff1N7lAgJoMM1ocTlrlyU%2bOUK81vDxqjRB1yCEYLKYsxEZw8mK/lkS34DVnSprtYa7XZ3q7g3sHv1WmvWh3jfdHhQnMQ%2bKCwGj59LHI/Ffz3woWV5WmSudNA/fXHJvZsqMRfoTz27tAMWOESBagQrdQFCavNbZLbZGDXsVyu5LloI86l6F%2brQ9AiSZ2RgTZAU21TUHk35thItqIjlzHdCnW/yMvJoE529J1MqJjKl4N7h7qnfEk7vUMbMeNyaVVWYnls/Ht1VU49LJC3JlFQtxSXkVvgWAmDbrYW3Z6h1x8IReCgQoD0D0t%2b3NEm/YTBWP6UK4rRN6BagL2nKoOKANGMiC8pcyY5jPGjQ%2bTcWXyE8w9mja50ZV8A4YiFYR15dBeWhTMcRo70VP74//7O6nQPHZmYlg8RJQvAQULy2vygEARPkcB%2bI2%2bPyWksr%2bO%2b9ZrK6s3ZvYHOvuo3TYZlBahBAoye8TBKtCTPBnqAQJuFaiP6kXCOv0/MUJc82%2boUM2J0EakuvMnuDslf82lffGKcrFa/97EcS5gTb0YlD%2b%2bAXPvpW4sXK5OnHCnP5JE%2bcyxaup4iXlC3ImCAuo8kScQIyH%2b8eVVPb9bs5TidXKQRV6hOPtkAta2vRDS1e1UQpu2aahxSu3ojW%2bA6AglOgQ61%2bp%2b481cxDz9iIIaz5BLiB79EilJSnagOUpK7M2JO0v/B2TMtkccjb0rEKNWXzeqnc%2bHDXvhfiEiXN7QHlQtDoD0g8Kp0smV6XN44J0qUPIdeu8nJxX95dVVGduLZuTHVc2u2t29YoPvRveORw7gDGEw0IKAPMCMw8l84ujsZwWZagaSU77v/sPrZVde7PCeIv2vBBLIcPVk5%2bz4hAatu4Dkw28Hb8Y/twhPGr%2b6vQksPTtUxbi8mkP4EnT/ojLp97/mWUyfL9i%2bgPYDI/5eN59q3Nrg293vfxq4nLyd%2btb3hOIB7jrEMt7X%2bL7kRzAfIT2NZhWfYJ7yLmL7Ol1t7V2LF247E103fzV1P1HPh755c1TF9VMHXdHDbj3g%2bMrfk%2bONeDu9Gief3oBb6DHCRULa8omVz80ZuzMmvLb/7Bo8TNbfkj%2b7sIarwUAYiM3wapaNbIjbb9Ya%2b5II4xBa4eaE4zSBWtqa9X21fDltc5J7ketz1/89L4zsly1Yt3rwkd5sSMpLwFdHsuj9LxveXXkCekOKqE1/AH4sUusbq8hNyCGLlx2EF19f4iej3hip3jTPU/LEPcyWJtK6SmQ8RPmyrMqn5SXrIzQZ1302AZIgm84cliCZnzeLUIjdw7xAlD%2bm%2b5uscO5rG1Zn8fJcyLfqGShVjgblQTeLSpWT0I2aAWdOtLqkO8%2bI7HvmLJcS2mv9rC18iKS2XxDAW1SejFBZ4gk8w9b38XzWTvIz11Lc7xSIpMbyUYrbG1WtIeZqNBeoi%2b/PFd/JbJd6WRt0Vpgda/1Obarki0tQbLjo3C3q9JOdXmXzWB%2b1Qdylw0S5APBGz%2bb7t5WtBAc/wrI/YDHPhlokuGCVKBC//kClIejx5pN%2btVjpD6AMLiOW/0FqRVjaWMfGVqS3v07aIi%2byD9mSFCmk3/UAD2Pij7tfOImh6RgilzoJP/DQ6c4fu1qQO5GOI4ufFGvB8P%2bCI7jzJmkRlrzY7Rd96nX0PE2Xa0x/3UlTvf1KVoTXfFRtKEhpJ9RtPWE3aQNx7HUgsn6BHRRHSKyl5m0hRLbyztUXxfP%2bCfRtQJkFhRIXyDX/gdnElO/mMZqNQAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}}}]);