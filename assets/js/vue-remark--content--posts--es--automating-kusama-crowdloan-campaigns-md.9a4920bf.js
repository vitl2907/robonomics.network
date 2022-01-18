(window.webpackJsonp=window.webpackJsonp||[]).push([[40,9,81,82],{"/8Jy":function(e,a,o){},"2efn":function(e,a,o){"use strict";o("UyGm")},"5vuX":function(e,a,o){"use strict";o.r(a);var s=o("KHd+"),n=o("6tRk"),t=o("wLAT"),r=o("UQSp"),i=o("Kw5r");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var l={Card:n.default,KusamaSlotBanner:t.a,VueRemarkRoot:r.a},d=function(e){var a=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===c(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?a[e]=l[e]:o[e]=function(){return l[e]}}))},u=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",m={excerpt:null,title:"Automatización de campañas de préstamos colectivos (crowdloan)",date:"2021-12-08T00:00:00.000Z",published:!0,locale:"es",cover_image:"./images/automating-kusama-crowdloan-campaigns/cover.jpg",description:"Las subastas iniciales de slots de parachain y sus préstamos colectivos asociados se vieron perjudicados por ser los primeros en llegar al mercado, lo que hizo que sus precios fueran difíciles de predecir y, a menudo, demasiado altos. Esta desventaja es común en cualquier mercado nuevo en el cual los precios todavía no están claros, especialmente mercados como las subastas de parachain, donde diferentes equipos lanzan productos diversos con necesidades diversas.",abstract:"Las subastas iniciales de slots de parachain y sus préstamos colectivos asociados se vieron perjudicados por ser los primeros en llegar al mercado, lo que hizo que sus precios fueran difíciles de predecir y, a menudo, demasiado altos. Esta desventaja es común en cualquier mercado nuevo en el cual los precios todavía no están claros, especialmente mercados como las subastas de parachain, donde diferentes equipos lanzan productos diversos con necesidades diversas."};var v=function(e){e.options[p]&&(e.options[p]=m),i.a.util.defineReactive(e.options,p,m),e.options.computed=u.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},f=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("VueRemarkRoot",[s("p",[e._v("La experiencia y los datos de la primera cohorte de equipos que obtuvo préstamos colectivos ahora puede proporcionar una base para que futuros equipos obtengan mejores precios y automaticen el proceso de préstamos colectivos y subastas ganadoras.")]),s("p",[e._v("Los desarrolladores centrales de Robonomic implementarán un oráculo automatizado a partir de la cuarta campaña de préstamos colectivos de parachain, con el objetivo de participar en futuras subastas de slots de parachain de Kusama. Este mecanismo permitirá al equipo de Robonomics automatizar el pago de cada arrendamiento futuro de slot de parachain en el momento de la renovación. El equipo de Robonomics espera que esta iniciativa sea una inspiración para que equipos futuros usen o implementen su propio proceso automatizado para optimizar y reducir los riesgos a la baja de los equipos del sistema general de subastas de slots.")]),s("h2",{attrs:{id:"parámetros-actualmente-determinados-de-forma-independiente-por-parachains"}},[s("a",{attrs:{href:"#par%C3%A1metros-actualmente-determinados-de-forma-independiente-por-parachains","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Parámetros actualmente determinados de forma independiente por Parachains")]),s("blockquote",[s("p",[e._v("Límite de contribución; Periodo de la campaña; Recompensas para los participantes; Fuente de recompensas; Distribución de Tokens.")])]),s("p",[e._v("Con el objetivo de mitigar el riesgo y la imprevisibilidad, tanto para los proyectos como para los participantes, y para que el costo de ganar estas subastas sea realista y esté en línea con el valor que ofrecen, proponemos que estos parámetros antes mencionados sean evaluados y posteriormente determinados no de forma independiente por Parachains, sino por un oráculo automatizado. Con el uso y a su debido tiempo, anticipamos que este oráculo podría integrarse como un bien común parachain en Kusama y eventualmente en Polkadot.")]),s("p",[e._v("Debido al entusiasmo que generan estos préstamos colectivos iniciales y sus generosos mecanismos de recompensa, suele pasarse por alto que los proyectos ganadores tienen una vida útil de 48 semanas como parachain operativa en Kusama, antes de que expire su contrato de arrendamiento y se les exija renovar su lugar.")]),s("p",[e._v("Con esto en mente, hemos presentado un resumen v1 de nuestro algoritmo de oráculo automatizado y las condiciones bajo las cuales podría ser relevante y efectivo en el contexto del protocolo de subasta de slots más grande.")]),s("h2",{attrs:{id:"oráculo-autónomo-de-las-campañas-de-préstamos-colectivos"}},[s("a",{attrs:{href:"#or%C3%A1culo-aut%C3%B3nomo-de-las-campa%C3%B1as-de-pr%C3%A9stamos-colectivos","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Oráculo autónomo de las campañas de préstamos colectivos")]),s("p",[e._v("Muy a menudo, quiere ser el primero, pero con el tiempo se da cuenta de que es más importante mantenerse en el juego. El ecosistema de Polkadot es el tipo de lugar donde no importa si es el primero o el último, lo que importa es que hay una “silla libre” para usted. Nos preguntamos si en su infancia jugaba al juego de las "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Musical_chairs",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("“sillas musicales”")]),e._v(", pero lo recordamos muy bien desde el jardín de infantes.")]),s("p",[e._v("Por supuesto, aquí también existe una especificidad importante: el arrendamiento de las ranuras de la parachain debe extenderse antes del final del arrendamiento actual; de lo contrario, puede haber una interrupción o complicación en sus servicios (la parachain cambiará "),s("a",{attrs:{href:"https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("a Parachains Pay-as-you-go")]),e._v(", también conocida como Parathread, desde hace un tiempo).")]),s("p",[s("g-image",{attrs:{src:o("WcKb"),alt:'"Polkadot ecosystem"'}})],1),s("p",[e._v("En general, es importante mantenerse en línea. A continuación, hablaremos de la primera versión del algoritmo propuesto para el cálculo autónomo de los principales parámetros del oráculo de la campaña de préstamo colectivo. Quizás deberíamos darle un nombre, pero hasta ahora no se nos ocurre nada interesante.")]),s("h3",{attrs:{id:"promedio-del-límite-de-contribución"}},[s("a",{attrs:{href:"#promedio-del-l%C3%ADmite-de-contribuci%C3%B3n","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Promedio del límite de contribución")]),s("p",[e._v("Dentro de este modelo, propondríamos que el oráculo automatizado calcule y promedie el costo medio en KSM requerido para ganar cada subasta del # 15 al # 29. Este costo promedio resultante se establecería como el límite de contribución de préstamo colectivo KSM para el slot n. ° 30.\t")]),s("h3",{attrs:{id:"duración-de-una-campaña-de-préstamos-colectivos"}},[s("a",{attrs:{href:"#duraci%C3%B3n-de-una-campa%C3%B1a-de-pr%C3%A9stamos-colectivos","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Duración de una campaña de préstamos colectivos")]),s("p",[e._v("Suponemos que una campaña de préstamos colectivos debe tener como objetivo cobrar durante 5 semanas. En caso de falla, el oráculo tendrá que cambiar la estimación de la muestra de las tarifas medias de un rango de [15-29] subastas a [20-34] y así sucesivamente, y así tener en cuenta los resultados de subastas anteriores. De esta forma, habrá una configuración automática hasta el punto de obtener con éxito una ranura.")]),s("h3",{attrs:{id:"evaluación-de-la-recompensa-por-cada-ksm-a-favor-de-la-campaña-de-préstamo-colectivo"}},[s("a",{attrs:{href:"#evaluaci%C3%B3n-de-la-recompensa-por-cada-ksm-a-favor-de-la-campa%C3%B1a-de-pr%C3%A9stamo-colectivo","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Evaluación de la recompensa por cada KSM a favor de la campaña de préstamo colectivo")]),s("p",[e._v("Esta es la parte más compleja del algoritmo del oráculo, que requiere la infraestructura de las parachains en ejecución. Mediante la predicción de la economía de repetición cíclica de las parachains que operan desde hace varios años, nos mantenemos fieles a la "),s("a",{attrs:{href:"https://robonomics.network/blog/robonomics-parachain-lease-offering/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("perspectiva de que la recompensa para los participantes de la campaña de préstamo colectivo es igual a la pérdida de ganancias por apostar en la Cadena de relé")]),e._v(".")]),s("p",[e._v("Lo más importante es que la recompensa por apostar puede estimarse de forma autónoma a través de un oráculo con un grado bastante alto de precisión. Por ejemplo, ahora podemos hablar de una pérdida de beneficios de 0,19 KSM por cada 1 KSM durante el año. Sin embargo, la métrica de ingresos perdidos por sí sola no es suficiente, ya que la recompensa en la parachain se ofrece en su token nativo. Es por esto que el esquema se complica un poco, pero no demasiado. Suponemos que los ecosistemas de Kusama y Polkadot siempre tendrán símbolos bursátiles de precios para los tokens de parachain nativos. Por ejemplo, el $KAR de Karura puede ser un símbolo bursátil ya este año en la red Kusama. Entendemos que el oráculo de forma independiente, sin ayuda de nadie externo, puede: (1) obtener datos sobre la tarifa de participación actual en la Cadena de relé, (2) obtener de forma autónoma datos sobre el precio de un token de la parachain nativo del segmento DeFi del símbolo bursátil del ecosistema y, basándose en esos datos, hacer una oferta similar a la participación de KSM.")]),s("p",[e._v("El titular de DOT y KSM dividirá su bolsa de tokens entre apostar en la Cadena de relé y respaldar varias (quizás varias docenas) de campañas de préstamos colectivos, basándose en el deseo de mantener la recompensa como sería si se apostaran todos los DOT/KSM, pero diversificando el riesgo del precio de un solo token. Sí, en este momento las recompensas en parachains se ven más como un porcentaje de todos los tokens nativos, y las cifras del 20 % del suministro total no parecen infladas en la comunidad. Aunque es difícil imaginar una imagen en la que cada año el 20 % de todos los tokens se ofrezcan solo para el arrendamiento de ranuras. Aún así, este es el estado de génesis en la etapa de las primeras subastas y, una vez más, una imagen normal al comienzo. Sin embargo, recibir recompensas actuales por la vida diaria durante una década no es una buena idea.")]),s("p",[e._v("El criterio principal para calcular la recompensa será el lucro cesante de la participación en la campaña de préstamos colectivos de cualquiera de los proyectos y la conversión de este valor en la cantidad de tokens nativos a la tasa actual. Esta tarea puede realizarse mediante un proceso autónomo.")]),s("h3",{attrs:{id:"fuente-de-recompensa-y-distribución-de-tokens-en-la-parachain"}},[s("a",{attrs:{href:"#fuente-de-recompensa-y-distribuci%C3%B3n-de-tokens-en-la-parachain","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Fuente de recompensa y distribución de tokens en la parachain")]),s("p",[e._v("Proponemos implementar un mecanismo para la emisión de nuevos tokens en la parachain a través del módulo de tesorería. A su vez, la tesorería de la parachain distribuirá sus nuevas monedas entre los participantes de la campaña de préstamo colectivo mensualmente durante el periodo de arrendamiento de ranuras actual.")]),s("h2",{attrs:{id:"cierre-del-ciclo"}},[s("a",{attrs:{href:"#cierre-del-ciclo","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Cierre del ciclo")]),s("p",[e._v("Anteriormente, brindamos una descripción generalizada de la primera versión del algoritmo del oráculo, cuyo objetivo es hacer que el protocolo de Robonomics sea más viable sin la participación directa del desarrollador. Sin embargo, es aún más importante comprender la conexión entre el arrendamiento de ranuras en el ecosistema y la función objetivo del proyecto. En el caso de Robonomics, es una tarifa para almacenar, actualizar e interactuar al usuario con el gemelo digital del sistema ciberfísico. Nuestro objetivo en perspectiva de 3 años es formar un segmento de Robonomics capaz de atender hasta 1 millón de gemelos digitales por mes a ~0,25 XRT.")]),s("p",[e._v("Si se alcanza la carga objetivo, tendremos más de $ 60 millones por año en demanda de compras de XRT en el mercado, que se consumirán cuando se active la suscripción.")]),s("p",[e._v("(Hablaré más sobre el ciclo de vida de la suscripción por separado cuando publique el próximo lanzamiento de Robonomics, dedicado al mecanismo de subasta de suscripción). Resulta que el valor de XRT no disminuirá si la cantidad de suscripciones vendidas para XRT durante el año supera de forma conjunta el valor que pagará la tesorería de la parachain según el oráculo de las campañas de préstamos colectivos.")]),s("p",[e._v("En general, mi equipo y yo estamos en vías de crear este esquema, que debería permitir cerrar la tokenómica de la parachain desde el momento en que se obtiene la ranura hasta el momento en que se renueva el contrato de arrendamiento. Queremos hacer que este proceso sea lo más autónomo posible de la voluntad humana, y dejar que solo los poseedores de tokens y los desarrolladores propongan mejoras al algoritmo a través del mecanismo de la democracia y el comité técnico de la parachain. Sin trabajo manual en perspectiva. Mientras tanto, como siempre ocurre con las hipótesis, seguiremos dando los primeros pasos de forma manual. A continuación se muestra cómo funcionaría el oráculo del futuro para la cuarta campaña de préstamos colectivos (aproximadamente).")]),s("h2",{attrs:{id:"los-parámetros-de-la-cuarta-campaña-de-préstamos-colectivos"}},[s("a",{attrs:{href:"#los-par%C3%A1metros-de-la-cuarta-campa%C3%B1a-de-pr%C3%A9stamos-colectivos","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Los parámetros de la cuarta campaña de préstamos colectivos")]),s("Card",[s("h3",{attrs:{id:"límite-de-colección-474255262-ksm"}},[s("a",{attrs:{href:"#l%C3%ADmite-de-colecci%C3%B3n-474255262-ksm","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Límite de colección "),s("strong",[e._v("47,425.5262 KSM")])]),s("p",[e._v("Basado en la evaluación de tarifas de la 15a subasta, Geshiro")])]),s("Card",[s("h3",{attrs:{id:"duración-5-semanas"}},[s("a",{attrs:{href:"#duraci%C3%B3n-5-semanas","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Duración "),s("strong",[e._v("5 semanas")])])]),s("Card",[s("h3",{attrs:{id:"remuneración-420-xrt"}},[s("a",{attrs:{href:"#remuneraci%C3%B3n-420-xrt","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Remuneración "),s("strong",[e._v("4.20 XRT")])]),s("p",[e._v("1 KSM ~ 370$ APR = 19%,"),s("br"),e._v("1XRT ~ 17$")])]),s("Card",[s("h3",{attrs:{id:"bonificación-extra"}},[s("a",{attrs:{href:"#bonificaci%C3%B3n-extra","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Bonificación extra")]),s("p",[e._v("Los titulares de tarjetas Pioneer NFT recibirán un 1XRT adicional por cada KSM")])]),s("Card",[s("h3",{attrs:{id:"recompensas-de-distribución-mensuales"}},[s("a",{attrs:{href:"#recompensas-de-distribuci%C3%B3n-mensuales","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),e._v("Recompensas de distribución "),s("strong",[e._v("Mensuales")])]),s("p",[e._v("Partes proporcionalmente iguales durante 12 meses. La tesorería funciona con la generación de nuevos tokens en la parachain.")])]),s("KusamaSlotBanner")],1)}),[],!1,null,null,null);"function"==typeof d&&d(f),"function"==typeof v&&v(f);a.default=f.exports},"6tRk":function(e,a,o){"use strict";o.r(a);var s=o("rePB"),n=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(7).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big","block"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(s.a)(e,"card",!0),Object(s.a)(e,"icon",this.icon),Object(s.a)(e,"image",this.image||this.imageLocal),Object(s.a)(e,"".concat(this.orientation),!0),Object(s.a)(e,"".concat(this.back),!0),Object(s.a)(e,"alignContent-".concat(this.alignContent),!0),Object(s.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(s.a)(e,"oldy","transparent"!=this.back),Object(s.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(s.a)(e,"pic",!0),Object(s.a)(e,"round",this.imageRound),Object(s.a)(e,"icon",this.icon),Object(s.a)(e,"image",this.image||this.imageLocal),Object(s.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(s.a)(e,"link",!0),Object(s.a)(e,"text",this.linkText),Object(s.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),t=(o("dVYI"),o("KHd+")),r=Object(t.a)(n,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?o("div",{class:e.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?o("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?o("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?o("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,"f2eea1cc",null);a.default=r.exports},UQSp:function(e,a,o){"use strict";a.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},UyGm:function(e,a,o){},WcKb:function(e,a){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/polkadot-ecosystem.940ff3d.8675ae85263d1acbc5c2e8853ef18f7a.jpg",size:{width:1204,height:605},sizes:"(max-width: 1204px) 100vw, 1204px",srcset:["/assets/static/polkadot-ecosystem.82a2fbd.8675ae85263d1acbc5c2e8853ef18f7a.jpg 480w","/assets/static/polkadot-ecosystem.940ff3d.8675ae85263d1acbc5c2e8853ef18f7a.jpg 1204w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1204 605' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-833cf7edfae588a62bd7a9936526dc9d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-833cf7edfae588a62bd7a9936526dc9d)' width='1204' height='605' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgAEADASIAAhEBAxEB/8QAGwAAAgMAAwAAAAAAAAAAAAAAAAUCBAYBAwj/xAAqEAABAwQBAwMEAwEAAAAAAAABAgMEAAURIRIGMVETQWEUIjKhFSRCkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1TRRRQFQdcLachC1nwnGf2aHHW2kqU4tKEpGSVEACltxT/Kwv6ElxJSv82XCjOMgjI7igZNuc05UhSDnsrGf1Se3RbszImqlXNp5tcgrZQWccG8aR7f8AaqO2qRlzjcJoyscAZatJ3nP6rpZsU5a3y/cpLyPqOTQDyhwb8E7ye29UGrTniMkE43iuaribHEgxy8hLw3wJwd715qxQU7qp5m2ynIi20PpbUWy7ngFY0T8VCyvSXbXGVPUwuXwHqlg5Ry%2bKv0AAdhigSvqauFwZ9BLamWlFa3uIIWsDASD/AKwTkkaBGMgjFKoPUclrqeXaH7dJMSIyFuTljikrO0pSD%2bQIzsdsfBIYXKwOSIT/ANNKDVw9J5uO%2bpKlJb5kkHBOcjI2CO3jVLLBbpEC2RoUl2TcXYLSWXHC4VKUo91Aq2cHOAfYDxQKuoOj7PfLq9dJ0F5L0jGVqlqbCuKQkYGQOwFNOmoMLpqGuHGt0llPNT7fKQVpcUQB%2bROs8R30K1kZsGM2HCpwaI9RP3Dxn5FV7lHcdOgtxOMBCSEgfJJ7nxQZzpy4y%2bqbPIkToT1teQpTC2HkaQ6kg5Soj7gCB9w9xjuK01umiUjg4PTlISC40e6c%2b48p74IyNHejWVbss%2bd1NBmt3JxuHEZcjSIqipSXAdpKRniCD7kdgBWriw/p5C1heUFtDaU71xKj5xvPgdvfWA//2Q==' /%3e%3c/svg%3e"}},dVYI:function(e,a,o){"use strict";o("/8Jy")},wLAT:function(e,a,o){"use strict";o("07d7"),o("PKPk"),o("3bBZ");var s={components:{Card:function(){return Promise.all([o.e(0),o.e(1),o.e(2),o.e(3),o.e(9)]).then(o.bind(null,"6tRk"))}}},n=(o("2efn"),o("KHd+")),t=Object(n.a)(s,(function(){var e=this.$createElement,a=this._self._c||e;return a("Card",{attrs:{icon:"/icons/icon-future.png"}},[a("h3",[this._v("Dotsama for robots program initiated")]),this._v("\n\nHead over to the "),a("g-link",{attrs:{to:"/kusama-slot/"}},[this._v("Robonomics Kusama slot page")]),this._v(" to know more! 🦾\n\n")],1)}),[],!1,null,"654960ac",null);a.a=t.exports}}]);