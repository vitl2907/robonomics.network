(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"6tRk":function(t,i,n){"use strict";n.r(i);var e=n("rePB"),a=(n("07d7"),n("PKPk"),n("3bBZ"),n("yXV3"),n("mRH6"),{components:{Button:function(){return n.e(8).then(n.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","mid","big"].indexOf(t)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(t){return-1!==["gorizontal","vertical"].indexOf(t)}},back:{type:String,default:"white",validator:function(t){return-1!==["transparent","white","blue","gradient"].indexOf(t)}},alignContent:{type:String,default:"none",validator:function(t){return-1!==["left","center","right","none"].indexOf(t)}}},computed:{card_classes:function(){var t;return t={},Object(e.a)(t,"card",!0),Object(e.a)(t,"icon",this.icon),Object(e.a)(t,"image",this.image||this.imageLocal),Object(e.a)(t,"".concat(this.orientation),!0),Object(e.a)(t,"".concat(this.back),!0),Object(e.a)(t,"alignContent-".concat(this.alignContent),!0),Object(e.a)(t,"oldy","transparent"!=this.back),Object(e.a)(t,"oldy__link",this.link||this.popup),t},pic_classes:function(){var t;return t={},Object(e.a)(t,"pic",!0),Object(e.a)(t,"round",this.imageRound),Object(e.a)(t,"icon",this.icon),Object(e.a)(t,"image",this.image||this.imageLocal),Object(e.a)(t,"".concat(this.imageSize),!0),t},link_classes:function(){var t;return t={},Object(e.a)(t,"link",!0),Object(e.a)(t,"text",this.linkText),Object(e.a)(t,"overlap",this.overlap),t},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?n("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),c=(n("E4Hk"),n("KHd+")),l=Object(c.a)(a,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{class:t.card_classes},[t.icon||t.image||t.imageLocal?n("div",{class:t.pic_classes},[n("g-image",{attrs:{"aria-hidden":"true",src:t.pic_src}})],1):t._e(),t.hasDefaultSlot?n("div",{staticClass:"content"},[t._t("default")],2):t._e(),t.link&&!t.linkButton?n("g-link",{class:t.link_classes,attrs:{to:t.link}},[t.linkText?[t._v(t._s(t.linkText))]:t._e()],2):t._e(),t.link&&t.linkText&&t.linkButton?n("Button",{staticClass:"large",attrs:{link:t.link,label:t.linkText,button:"primary"}}):t._e()],1)}),[],!1,null,null,null);i.default=l.exports},E4Hk:function(t,i,n){"use strict";n("F22k")},F22k:function(t,i,n){}}]);