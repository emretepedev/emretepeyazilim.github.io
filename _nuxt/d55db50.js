(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{446:function(t,n,e){"use strict";var o=e(29),r=Object(o.a)({props:{projects:{type:Array,default:function(){return[]},required:!0}}}),c=e(49),l=e(66),d=e.n(l),v=e(193),C=e(171),h=e(101),f=e(861),m=e(102),y=e(862),_=e(142),w=e(174),x=e(540),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",t._l(t.projects,(function(n){return e("v-col",{key:n.name},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[e("v-card",{staticClass:"mx-auto",attrs:{height:"275","max-width":"344",outlined:"",shaped:""}},[e("v-img",{attrs:{alt:n.name,height:"128",src:n.image,title:n.name}}),t._v(" "),e("v-card-title",{staticClass:"pb-1"},[t._v("\n            "+t._s(n.name)+"\n          ")]),t._v(" "),e("v-card-text",[t._v("\n            "+t._s(n.description)+"\n          ")]),t._v(" "),e("v-fade-transition",[r?e("v-overlay",{attrs:{absolute:"",color:"teal"}},[e("v-btn",{attrs:{href:n.href,target:"_blank"}},[t._v("\n                Open in new tab\n              ")])],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)}),[],!1,null,null,null);n.a=component.exports;d()(component,{VBtn:v.a,VCard:C.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VFadeTransition:m.c,VHover:y.a,VImg:_.a,VOverlay:w.a,VRow:x.a})},871:function(t){t.exports=JSON.parse('{"data":{"user":{"contributionsCollection":{"contributionCalendar":{"weeks":[{"contributionDays":[{"contributionCount":27}]},{"contributionDays":[{"contributionCount":12},{"contributionCount":38},{"contributionCount":7},{"contributionCount":1},{"contributionCount":25},{"contributionCount":34},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":8},{"contributionCount":8},{"contributionCount":10},{"contributionCount":21},{"contributionCount":15},{"contributionCount":5},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":4},{"contributionCount":6},{"contributionCount":10},{"contributionCount":1},{"contributionCount":1},{"contributionCount":3},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":0}]}]}}}}}')},895:function(t,n,e){"use strict";e.r(n);var o=e(29),r={projects:[{name:"LandIndex",description:"LandIndex provides digital land prices and analytics. Land investing basics, guides and resources. Check out Metaverse land prices.",href:"https://landindex.io",image:"https://landindex.io/images/logoWithText.svg"},{name:"/dev/null",description:"/dev/random",href:"#",image:"/images/dev-null.png"}],sparkline:{gradients:["#f72047","#ffd200","#1feaea"]}},c=e(871),l=e(21),d=Object(o.a)({props:{graphData:{type:Array,default:function(){return[]},required:!0},gradients:{type:Array,default:function(){return[]},required:!0}},setup:function(){return{mdiPoll:l.G}}}),v=e(49),C=e(66),h=e.n(C),f=e(171),m=e(101),y=e(170),_=e(47),w=e(869),x=e(900),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"overflow-y-auto",attrs:{outlined:"",ripple:""}},[e("v-card-title",[t.$vuetify.breakpoint.mdAndDown?e("v-spacer"):t._e(),t._v(" "),e("v-icon",[t._v("\n      "+t._s(t.mdiPoll)+"\n    ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"text-center"},[e("div",{staticClass:"text-caption grey--text text-uppercase"},[e("strong",[t._v("GitHub")]),t._v(" contributions in the last\n      "),e("strong",[t._v("30 days")]),t._v(" ("),e("strong",[t._v("exclude")]),t._v("\n      GitLab etc.)\n    ")])]),t._v(" "),e("v-sheet",{attrs:{color:"transparent"}},[e("v-sparkline",{attrs:{"auto-draw":"","auto-draw-duration":5e3,"auto-line-width":!1,fill:!1,gradient:t.gradients,"gradient-direction":"top","line-width":1,padding:8,"show-labels":!0,smooth:10,"stroke-linecap":"round",type:"trend",value:t.graphData}})],1)],1)}),[],!1,null,null,null),V=component.exports;h()(component,{VCard:f.a,VCardSubtitle:m.a,VCardTitle:m.c,VIcon:y.a,VSheet:_.a,VSpacer:w.a,VSparkline:x.a});var k=e(446),j=Object(o.a)({components:{Sparkline:V,Project:k.a},setup:function(){var t=Object(o.f)([]),n=new Date,e=new Date;return n.setDate(e.getDate()-30),c.data.user.contributionsCollection.contributionCalendar.weeks.forEach((function(n){n.contributionDays.forEach((function(n){t.value.push(n.contributionCount)}))})),{data:r,graphData:t}},head:{}}),D=e(891),O=e(356),I=e(540),S=Object(v.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"flex justify-center mt-12"},[e("v-container",{staticClass:"space-y-5"},[e("div",{staticClass:"flex flex-col items-center text-center"},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-card",{staticClass:"overflow-y-auto",attrs:{"max-height":"400",outlined:"",ripple:""}},[e("v-banner",{staticClass:"justify-center text-h5 font-weight-light",attrs:{sticky:""}},[e("nuxt-img",{staticClass:"inline rounded-full",attrs:{alt:"@emretepedev",height:"150",provider:"static",src:"/images/avatar.jpg",title:"@emretepedev",width:"150"}})],1),t._v(" "),e("v-card-text",[e("div",[t._v("\n                I’m a young ambitious Web and Blockchain developer who\n                seriously cares discipline. On the other hand, I’m an\n                open-minded person to learn new stuffs about technology and\n                software. In addition to the technical matters that I care, I\n                personally take account of everything about the notion\n                “esteem”.\n              ")])])],1)],1)],1),t._v(" "),e("div",[e("Sparkline",{attrs:{gradients:t.data.sparkline.gradients,"graph-data":t.graphData}})],1),t._v(" "),e("div",[e("Project",{attrs:{projects:t.data.projects}})],1)])],1)])}),[],!1,null,null,null);n.default=S.exports;h()(S,{VBanner:D.a,VCard:f.a,VCardText:m.b,VContainer:O.a,VRow:I.a})}}]);