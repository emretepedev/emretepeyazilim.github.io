(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{839:function(t,e,n){"use strict";var r=n(2),o=(n(60),n(42),n(7),n(43),n(238),n(34),n(16),n(31),n(5),n(6),n(8),n(9),n(240),n(0)),c=n(76),l=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],y=["start","end","center"];function v(t,e){return f.reduce((function(n,r){return n[t+Object(l.E)(r)]=e(),n}),{})}var m=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},O=v("align",(function(){return{type:String,default:null,validator:m}})),x=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},C=v("justify",(function(){return{type:String,default:null,validator:x}})),w=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},j=v("alignContent",(function(){return{type:String,default:null,validator:w}})),S={align:Object.keys(O),justify:Object.keys(C),alignContent:Object.keys(j)},D={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=D[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:x}},C),{},{alignContent:{type:String,default:null,validator:w}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var h in n)l+=String(n[h]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},862:function(t,e,n){"use strict";n(239);var r=n(1);e.a=Object(r.i)("spacer","div","v-spacer")},864:function(t){t.exports=JSON.parse('{"data":{"user":{"contributionsCollection":{"contributionCalendar":{"weeks":[{"contributionDays":[{"contributionCount":3},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":2},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":5},{"contributionCount":1},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":2},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1},{"contributionCount":1}]},{"contributionDays":[{"contributionCount":0}]}]}}}}}')},865:function(t,e,n){t.exports={}},886:function(t,e,n){"use strict";n.r(e);var r=n(28),o={sparkline:{gradients:["#f72047","#ffd200","#1feaea"]}},c=n(864),l=n(33),h=Object(r.a)({props:{graphData:{type:Array,default:function(){return[]},required:!0},gradients:{type:Array,default:function(){return[]},required:!0}},setup:function(){return{mdiPoll:l.E}}}),d=n(49),f=n(66),y=n.n(f),v=n(171),m=n(101),O=n(170),x=n(47),C=n(862),w=n(2),j=n(13),S=(n(18),n(42),n(30),n(244),n(16),n(61),n(62),n(29),n(7),n(5),n(6),n(8),n(9),n(27)),D=n(11),_=n(63);function k(t,e){var n=e.minX,r=e.maxX,o=e.minY,c=e.maxY,l=t.length,h=Math.max.apply(Math,Object(_.a)(t)),d=Math.min.apply(Math,Object(_.a)(t)),f=(r-n)/(l-1),y=(c-o)/(h-d||1);return t.map((function(t,e){return{x:n+e*f,y:c-(t-d)*y,value:t}}))}function $(t,e){var n=e.minX,r=e.maxX,o=e.minY,c=e.maxY,l=t.length,h=Math.max.apply(Math,Object(_.a)(t)),d=Math.min.apply(Math,Object(_.a)(t));d>0&&(d=0),h<0&&(h=0);var f=r/l,y=(c-o)/(h-d||1),v=c-Math.abs(d*y);return t.map((function(t,e){var r=Math.abs(y*t);return{x:n+e*f,y:v-r+ +(t<0)*r,height:r,value:t}}))}function E(t){return parseInt(t,10)}function P(t,e,n){return E(t.x+n.x)===E(2*e.x)&&E(t.y+n.y)===E(2*e.y)}function L(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function B(t,e,n){var r=t.x-e.x,o=t.y-e.y,c=Math.sqrt(r*r+o*o),l=r/c,h=o/c;return{x:e.x+l*n,y:e.y+h*n}}function M(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),c=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var c=t[r+1],l=t[r-1]||o,h=c&&P(c,n,l);if(!c||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(L(l,n),L(c,n)),f=d/2<e?d/2:e,y=B(l,n,f),v=B(c,n,f);return"L".concat(y.x," ").concat(y.y,"S").concat(n.x," ").concat(n.y," ").concat(v.x," ").concat(v.y)})).join("")+(n?"L".concat(c.x," ").concat(r-o.x+2," Z"):"")}function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function W(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=Object(D.a)(S.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(j.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?k(this.normalizedValues,this.boundary):$(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=k(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:M(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=$(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,c="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:c,ry:c}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:W(W({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"overflow-y-auto",attrs:{outlined:"",ripple:""}},[n("v-card-title",[t.$vuetify.breakpoint.mdAndDown?n("v-spacer"):t._e(),t._v(" "),n("v-icon",[t._v("\n      "+t._s(t.mdiPoll)+"\n    ")])],1),t._v(" "),n("v-card-subtitle",{staticClass:"text-center"},[n("div",{staticClass:"text-caption grey--text text-uppercase"},[n("strong",[t._v("GitHub")]),t._v(" contributions in the last\n      "),n("strong",[t._v("30 days")]),t._v(" ("),n("strong",[t._v("exclude")]),t._v("\n      GitLab etc.)\n    ")])]),t._v(" "),n("v-sheet",{attrs:{color:"transparent"}},[n("v-sparkline",{attrs:{"auto-draw":"","auto-draw-duration":5e3,"auto-line-width":!1,fill:!1,gradient:t.gradients,"gradient-direction":"top","line-width":1,padding:8,"show-labels":!0,smooth:10,"stroke-linecap":"round",type:"trend",value:t.graphData}})],1)],1)}),[],!1,null,null,null),I=component.exports;y()(component,{VCard:v.a,VCardSubtitle:m.a,VCardTitle:m.c,VIcon:O.a,VSheet:x.a,VSpacer:C.a,VSparkline:z});var A=Object(r.a)({components:{Sparkline:I},setup:function(){var t=Object(r.f)([]),e=new Date,n=new Date;return e.setDate(n.getDate()-30),c.data.user.contributionsCollection.contributionCalendar.weeks.forEach((function(e){e.contributionDays.forEach((function(e){t.value.push(e.contributionCount)}))})),{data:o,graphData:t}},head:{}}),N=(n(865),n(90)),Y=n(143),G=n(75),H=n(113),T=n(167),X=n(57),J=n(1);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function U(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var F=Object(D.a)(N.a,T.a,X.a).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return U(U({},N.a.options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=U({},N.a.options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(J.h)(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var content;if(this.hasIcon)return content=this.icon?this.$createElement(G.a,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(Y.a,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[content])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,e=Object(J.s)(this,"actions",{dismiss:function(){return t.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){var data={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return t(H.a,[t("div",this.outlined?data:this.setBackgroundColor(this.color,data),[this.genWrapper()])])}}),Z=n(354),K=n(839),Q=Object(d.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mt-12 flex justify-center"},[n("v-container",{staticClass:"space-y-5"},[n("div",{staticClass:"flex flex-col items-center text-center"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-card",{staticClass:"overflow-y-auto",attrs:{"max-height":"400",outlined:"",ripple:""}},[n("v-banner",{staticClass:"text-h5 font-weight-light justify-center",attrs:{sticky:""}},[n("nuxt-img",{staticClass:"inline rounded-full",attrs:{alt:"@emretepedev",height:"150",provider:"static",src:"/images/avatar.png",title:"@emretepedev",width:"150"}})],1),t._v(" "),n("v-card-text",[n("div",[t._v("\n                I’m a young ambitious Web and Blockchain developer who\n                seriously cares discipline. On the other hand, I’m an\n                open-minded person to learn new stuffs about technology and\n                software. In addition to the technical matters that I care, I\n                personally take account of everything about the notion\n                “esteem”.\n              ")])])],1)],1)],1),t._v(" "),n("div",[n("Sparkline",{attrs:{gradients:t.data.sparkline.gradients,"graph-data":t.graphData}})],1)])],1)])}),[],!1,null,null,null);e.default=Q.exports;y()(Q,{VBanner:F,VCard:v.a,VCardText:m.b,VContainer:Z.a,VRow:K.a})}}]);