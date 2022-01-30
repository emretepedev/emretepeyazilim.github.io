(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){"use strict";var r=n(134),o=n.n(r);t.default=o.a},134:function(e,t){},181:function(e,t,n){"use strict";n(6),n(5),n(7),n(8),n(9);var r=n(2),o=n(61),c=n(73);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(o.d)("aggressive"),Object(o.c)("required",v(v({},c.g),{},{message:"The {_field_} field is required."})),Object(o.c)("email",v(v({},c.a),{},{message:"The {_field_} must be a valid email address."})),Object(o.c)("max",v(v({},c.d),{},{message:"The {_field_} must not be greater than {length} characters."})),Object(o.c)("min",v(v({},c.e),{},{message:"The {_field_} must be at least {length} characters."})),Object(o.c)("oneOf",v(v({},c.f),{},{message:"The {_field_} must be included in the list of values."})),Object(o.c)("is_not",v(v({},c.c),{},{message:"The {_field_} must not be included in the given list of values. `{other}`"})),Object(o.c)("integer",v(v({},c.b),{},{message:"The {_field_} must be numbers only."}))},182:function(e,t,n){"use strict";var r=n(0),o=n(235),c=n.n(o);r.default.use(c.a,{customNotifications:{clientError:{canTimeout:!1,errorDuration:!1,theme:"~/assets/css/custom-toastify.scss"}}})},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{staticClass:"bg-dark-gray h-full"},[n("Header"),e._v(" "),n("Nuxt"),e._v(" "),n("Footer")],1)])},o=[]},214:function(e,t,n){e.exports={}},231:function(e,t,n){"use strict";var r=n(183),o=n(133),c=n(48),l=n(58),v=n.n(l),d=n(343),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports,v()(component,{Header:n(341).default,Footer:n(342).default}),v()(component,{VApp:d.a})},247:function(e,t,n){n(248),n(249),e.exports=n(261)},286:function(e,t,n){"use strict";n(214)},302:function(e,t,n){e.exports={}},303:function(e,t,n){e.exports={}},321:function(e,t){},341:function(e,t,n){"use strict";n.r(t);var r=n(49),o=n(24),c=Object(r.a)({setup:function(){return{drawer:Object(r.e)(null),pages:[{title:"Home",to:"/",icon:o.z},{title:"Projects",to:"/projects",icon:o.w},{title:"CV",to:"/cv",icon:o.m},{title:"Contact",to:"/contact",icon:o.c},{title:"Coffee",to:"/coffee-with-crypto",icon:o.h}],mdiClose:o.f}}}),l=n(48),v=n(58),d=n.n(v),f=n(358),m=n(356),_=n(345),h=n(169),w=n(170),x=n(111),O=n(80),j=n(97),k=n(359),y=n(232),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$vuetify.breakpoint.mdAndDown?n("v-app-bar",{staticClass:"h-12",attrs:{app:"","clipped-left":""}},[n("v-toolbar-title",{staticClass:"flex justify-between items-center"},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),n("span",[e._v("\n        "+e._s(e.$config.spaName)+"\n      ")])],1)],1):e._e(),e._v(" "),n("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:!e.$vuetify.breakpoint.mdAndDown,"expand-on-hover":!e.$vuetify.breakpoint.mdAndDown},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[e.$vuetify.breakpoint.mdAndDown?n("v-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("\n            "+e._s(e.mdiClose)+"\n          ")]):e._e(),e._v(" "),e.$vuetify.breakpoint.mdAndDown?e._e():n("span",[e._v("\n            "+e._s(e.$config.spaName)+"\n          ")])],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-list",{attrs:{nav:"",dense:"","active-class":"text--red"}},e._l(e.pages,(function(t){return n("nuxt-link",{key:t.title,attrs:{to:t.to}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-title",[e._v("\n            "+e._s(t.title)+"\n          ")])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAppBar:f.a,VAppBarNavIcon:m.a,VDivider:_.a,VIcon:h.a,VList:w.a,VListItem:x.a,VListItemContent:O.a,VListItemIcon:j.a,VListItemTitle:O.b,VNavigationDrawer:k.a,VToolbarTitle:y.a})},342:function(e,t,n){"use strict";n.r(t);var r=n(49),o=n(24),c=Object(r.a)({setup:function(){return{icons:[{href:"https://github.com/emretepedev",image:o.p},{href:"https://linkedin.com/in/emretepedev",image:o.r},{href:"https://twitter.com/emretepedev",image:o.x},{href:"https://instagram.com/emretepedev",image:o.q},{href:"https://facebook.com/emretepedev",image:o.l},{href:"https://telegram.me/emretepedev",image:o.u},{href:"https://discordapp.com/users/365827212890341378",image:o.j},{href:"https://api.whatsapp.com/send?phone=905522801804&text=Hi%20@emretepedev.",image:o.y},{href:"skype:live:.cid.ebf04f9e644e1570",image:o.v},{href:"mailto:emretepedev@gmail.com",image:o.k},{href:"tel:+905522801804",image:o.s}]}}}),l=n(48),v=n(58),d=n.n(v),f=n(238),m=n(175),_=n(143),h=n(360),w=n(345),x=n(357),O=n(169),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-divider"),e._v(" "),n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"white--text text-center w-full",attrs:{flat:"",tile:"",ripple:""}},[n("v-card-text",e._l(e.icons,(function(t){return n("v-btn",{key:t.href,staticClass:"mx-4 white--text",attrs:{icon:"",href:t.href,target:"_blank"}},[n("v-icon",{attrs:{"x-large":!e.$vuetify.breakpoint.mdAndDown}},[e._v("\n            "+e._s(t.image)+"\n          ")])],1)})),1),e._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[e._v("\n        This website made with "),n("strong",[e._v("Vue")]),e._v(" (JavaScript Framework),\n        "),n("strong",[e._v("Tailwind")]),e._v(" (CSS Framework),\n        "),n("strong",[e._v("Vuetify")]),e._v(" (UI Framework), "),n("strong",[e._v("Nuxt")]),e._v(" (Meta\n        Framework based on Vue) and\n        "),n("strong",[e._v("Material Design Icons")]),e._v(" (Icon Pack) on\n        "),n("strong",[e._v("GH Pages")]),e._v(".\n      ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"white--text"},[e._v("\n        "+e._s((new Date).getFullYear())+" —\n        "),n("strong",[e._v(e._s(e.$config.spaName))])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:f.a,VCard:m.a,VCardText:_.b,VContainer:h.a,VDivider:w.a,VFooter:x.a,VIcon:O.a})},71:function(e,t,n){"use strict";var r=n(49),o=n(24),c=Object(r.a)({setup:function(){return Object(r.i)({title:"Page not found | "}),{mdiArrowRightThin:o.a}},head:{}}),l=(n(286),n(48)),v=n(58),d=n.n(v),f=n(238),m=n(169),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center h-screen"},[n("div",{staticClass:"mx-5"},[e._m(0),e._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("span",{staticClass:"text-logo-green hover:text-dark-logo-green"},[e._v("Go back home")]),e._v(" "),n("v-btn",{attrs:{text:"",icon:"",color:"green darken-2"}},[n("v-icon",[e._v(e._s(e.mdiArrowRightThin))])],1)],1)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-40 mb-10 md:flex"},[n("div",{staticClass:"flex items-center font-black text-center error-text"},[e._v("\n        404\n      ")]),e._v(" "),n("h2",{staticClass:"hidden mx-5 border-l-4 md:block border-logo-green"}),e._v(" "),n("div",[n("div",{staticClass:"flex items-center error-text"},[e._v("Page not found")]),e._v(" "),n("div",{staticClass:"flex items-center text-xl"},[e._v("\n          Please check the URL in the address bar and try again.\n        ")])])])}],!1,null,"ac65ce80",null);t.a=component.exports;d()(component,{VBtn:f.a,VIcon:m.a})}},[[247,6,1,7]]]);