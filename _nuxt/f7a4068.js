(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,t,r){"use strict";var n=r(135),o=r.n(n);t.default=o.a},135:function(e,t){},181:function(e,t,r){"use strict";r(6),r(5),r(7),r(8),r(9);var n=r(2),o=r(72),c=r(73);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(o.c)("required",d(d({},c.g),{},{message:"The {_field_} field is required."})),Object(o.c)("email",d(d({},c.a),{},{message:"The {_field_} must be a valid email address."})),Object(o.c)("max",d(d({},c.d),{},{message:"The {_field_} must not be greater than {length} characters."})),Object(o.c)("min",d(d({},c.e),{},{message:"The {_field_} must be at least {length} characters."})),Object(o.c)("oneOf",d(d({},c.f),{},{message:"The {_field_} must be included in the list of values."})),Object(o.c)("is_not",d(d({},c.c),{},{message:"The {_field_} must not be included in the given list of values. `{other}`"})),Object(o.c)("integer",d(d({},c.b),{},{message:"The {_field_} must be numbers only."}))},182:function(e,t,r){"use strict";var n=r(0),o=r(237);t.a=function(e){var t=e.app;n.default.use(o.a,{enabled:!0,bootstrap:!0,pageTrackerEnabled:!0,config:{id:t.$config.googleAnalytics4Id,params:{send_page_view:!0}},deferScriptLoad:!0})}},183:function(e,t,r){"use strict";var n=r(0),o=r(238),c=r.n(o);n.default.use(c.a,{customNotifications:{clientError:{canTimeout:!1,errorDuration:!1,theme:"~/assets/css/custom-toastify.scss"}}})},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",{staticClass:"bg-dark-gray h-full"},[r("Header"),e._v(" "),r("Nuxt"),e._v(" "),r("Footer")],1)])},o=[]},218:function(e,t,r){e.exports={}},234:function(e,t,r){"use strict";var n=r(184),o=r(134),c=r(49),l=r(59),d=r.n(l),v=r(345),component=Object(c.a)(o.default,n.a,n.b,!1,null,null,null);t.default=component.exports,d()(component,{Header:r(343).default,Footer:r(344).default}),d()(component,{VApp:v.a})},249:function(e,t,r){r(250),r(251),e.exports=r(254)},288:function(e,t,r){"use strict";r(218)},304:function(e,t,r){e.exports={}},305:function(e,t,r){e.exports={}},323:function(e,t){},343:function(e,t,r){"use strict";r.r(t);var n=r(44),o=r(22),c=Object(n.a)({setup:function(){return{drawer:Object(n.e)(null),pages:[{title:"Home",to:"/",icon:o.E},{title:"Projects",to:"/projects",icon:o.B},{title:"Resume",to:"/resume",icon:o.o},{title:"Contact",to:"/contact",icon:o.e},{title:"Coffee",to:"/coffee-with-crypto",icon:o.j}],mdiClose:o.h}}}),l=r(49),d=r(59),v=r.n(d),f=r(360),m=r(358),_=r(347),h=r(171),w=r(172),x=r(112),O=r(80),j=r(97),k=r(361),y=r(192),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.$vuetify.breakpoint.mdAndDown?r("v-app-bar",{staticClass:"h-12",attrs:{app:"","clipped-left":""}},[r("v-toolbar-title",{staticClass:"flex justify-between items-center"},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),r("span",[e._v("\n        "+e._s(e.$config.spaName)+"\n      ")])],1)],1):e._e(),e._v(" "),r("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:!e.$vuetify.breakpoint.mdAndDown,"expand-on-hover":!e.$vuetify.breakpoint.mdAndDown},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[e.$vuetify.breakpoint.mdAndDown?r("v-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("\n            "+e._s(e.mdiClose)+"\n          ")]):e._e(),e._v(" "),e.$vuetify.breakpoint.mdAndDown?e._e():r("span",[e._v("\n            "+e._s(e.$config.spaName)+"\n          ")])],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list",{attrs:{nav:"",dense:"","active-class":"text--red"}},e._l(e.pages,(function(t){return r("nuxt-link",{key:t.title,attrs:{to:t.to}},[r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),r("v-list-item-title",[e._v("\n            "+e._s(t.title)+"\n          ")])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VAppBar:f.a,VAppBarNavIcon:m.a,VDivider:_.a,VIcon:h.a,VList:w.a,VListItem:x.a,VListItemContent:O.a,VListItemIcon:j.a,VListItemTitle:O.b,VNavigationDrawer:k.a,VToolbarTitle:y.a})},344:function(e,t,r){"use strict";r.r(t);var n=r(44),o=r(22),c=Object(n.a)({setup:function(){var e=Object(n.h)().$config.lastModifiedAt;return{socials:[{href:"https://github.com/emretepedev",image:o.r,color:"#181717"},{href:"https://gitlab.com/emretepedev",image:o.s,color:"#FCA121"},{href:"https://linkedin.com/in/emretepedev",image:o.v,color:"#0A66C2"},{href:"https://twitter.com/emretepedev",image:o.C,color:"#1DA1F2"},{href:"https://instagram.com/emretepedev",image:o.t,color:"#E4405F"},{href:"https://facebook.com/emretepedev",image:o.n,color:"#1877F2"},{href:"https://telegram.me/emretepedev",image:o.z,color:"#26A5E4"},{href:"https://api.whatsapp.com/send?phone=905522801804&text=Hi%20@emretepedev.",image:o.D,color:"#25D366"},{href:"https://discordapp.com/users/365827212890341378",image:o.l,color:"#5865F2"},{href:"skype:live:.cid.ebf04f9e644e1570",image:o.A,color:"#00AFF0"},{href:"mailto:emretepedev@gmail.com",image:o.m,color:"#FFFFFF"},{href:"tel:+905522801804",image:o.x,color:"#FFFFFF"}],lastModifiedAt:e}}}),l=r(49),d=r(59),v=r.n(d),f=r(193),m=r(176),_=r(99),h=r(362),w=r(347),x=r(359),O=r(171),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-divider"),e._v(" "),r("v-footer",{attrs:{padless:""}},[r("v-card",{staticClass:"white--text text-center w-full",attrs:{flat:"",tile:"",ripple:""}},[r("v-card-text",e._l(e.socials,(function(t){return r("v-btn",{key:t.href,staticClass:"mx-4 white--text",attrs:{icon:"",href:t.href,target:"_blank"}},[r("v-icon",{attrs:{"x-large":!e.$vuetify.breakpoint.mdAndDown,color:t.color}},[e._v("\n            "+e._s(t.image)+"\n          ")])],1)})),1),e._v(" "),r("v-card-text",{staticClass:"white--text pt-0"},[e._v("\n        This website made with "),r("strong",[e._v("Vue")]),e._v(" (JavaScript Framework),\n        "),r("strong",[e._v("Tailwind")]),e._v(" (CSS Framework),\n        "),r("strong",[e._v("Vuetify")]),e._v(" (UI Framework), "),r("strong",[e._v("Nuxt")]),e._v(" (Meta\n        Framework based on Vue) and\n        "),r("strong",[e._v("Material Design Icons")]),e._v(" (Icon Pack) on\n        "),r("strong",[e._v("GH Pages")]),e._v(".\n      ")]),e._v(" "),r("v-card-subtitle",[e._v("\n        Last Modified At: "+e._s(e.lastModifiedAt)+"\n      ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"white--text"},[e._v("\n        "+e._s((new Date).getFullYear())+" —\n        "),r("strong",[e._v(e._s(e.$config.spaName))])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:f.a,VCard:m.a,VCardSubtitle:_.a,VCardText:_.b,VContainer:h.a,VDivider:w.a,VFooter:x.a,VIcon:O.a})},70:function(e,t,r){"use strict";var n=r(44),o=r(22),c=Object(n.a)({setup:function(){return Object(n.i)({title:"Page not found | "}),{mdiArrowRightThin:o.c}},head:{}}),l=(r(288),r(49)),d=r(59),v=r.n(d),f=r(193),m=r(171),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center h-screen"},[r("div",{staticClass:"mx-5"},[e._m(0),e._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("span",{staticClass:"text-logo-green hover:text-dark-logo-green"},[e._v("Go back home")]),e._v(" "),r("v-btn",{attrs:{text:"",icon:"",color:"green darken-2"}},[r("v-icon",[e._v(e._s(e.mdiArrowRightThin))])],1)],1)],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-40 mb-10 md:flex"},[r("div",{staticClass:"flex items-center font-black text-center error-text"},[e._v("\n        404\n      ")]),e._v(" "),r("h2",{staticClass:"hidden mx-5 border-l-4 md:block border-logo-green"}),e._v(" "),r("div",[r("div",{staticClass:"flex items-center error-text"},[e._v("Page not found")]),e._v(" "),r("div",{staticClass:"flex items-center text-xl"},[e._v("\n          Please check the URL in the address bar and try again.\n        ")])])])}],!1,null,"ac65ce80",null);t.a=component.exports;v()(component,{VBtn:f.a,VIcon:m.a})}},[[249,8,2,9]]]);