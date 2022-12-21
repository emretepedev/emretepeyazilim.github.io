(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{224:function(e,t,n){"use strict";var r=n(177);t.a=r.a},338:function(e,t,n){e.exports={}},395:function(e,t,n){"use strict";n(5),n(4),n(6),n(10),n(11);var r=n(2),o=(n(14),n(338),n(329)),c=n(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d=Object(c.a)(o.a);t.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},403:function(e,t,n){e.exports={}},404:function(e){e.exports=JSON.parse('[{"inputs":[],"name":"ContentMustNotEmpty","type":"error"},{"inputs":[],"name":"SpamMessage","type":"error"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"author","type":"address"},{"internalType":"uint96","name":"createdAt","type":"uint96"},{"internalType":"string","name":"content","type":"string"}],"indexed":false,"internalType":"struct IVisitorsBook.Message","name":"message","type":"tuple"}],"name":"MessageSent","type":"event"},{"inputs":[],"name":"getMessages","outputs":[{"components":[{"internalType":"address","name":"author","type":"address"},{"internalType":"uint96","name":"createdAt","type":"uint96"},{"internalType":"string","name":"content","type":"string"}],"internalType":"struct IVisitorsBook.Message[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"content","type":"string"}],"name":"sendMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},420:function(e,t,n){"use strict";n.r(t);n(5),n(4),n(6),n(10),n(11);var r=n(2),o=(n(41),n(403),n(84)),c=n(224),l=n(69),d=n(51),h=n(22),f=n(0),v=f.c.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=n(7),y=n(8);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(m.a)(o.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"==typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(r.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(c.a,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(l.a,{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(l.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(y.a)("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}}),k=n(177),O=(n(14),n(44),n(225),n(42),n(18),n(36),n(56),n(226),n(71)),j=n(1);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var T=["sm","md","lg","xl"],B=T.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),A=T.reduce((function(e,t){return e["offset"+Object(j.D)(t)]={type:[String,Number],default:null},e}),{}),I=T.reduce((function(e,t){return e["order"+Object(j.D)(t)]={type:[String,Number],default:null},e}),{}),$={col:Object.keys(B),offset:Object.keys(A),order:Object.keys(I)};function R(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var D=new Map,P=f.c.extend({name:"v-col",functional:!0,props:S(S(S(S({cols:{type:[Boolean,String,Number],default:!1}},B),{},{offset:{type:[String,Number],default:null}},A),{},{order:{type:[String,Number],default:null}},I),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var l in n)c+=String(n[l]);var d=D.get(c);return d||function(){var e,t;for(t in d=[],$)$[t].forEach((function(e){var r=n[e],o=R(t,e,r);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),D.set(c,d)}(),e(n.tag,Object(O.a)(data,{class:d}),o)}}),M=n(317),E=n(314),N=n(161),z=n(135),H=n(365),V=n(395),W=n(415),F=(n(32),n(21),n(43),n(15)),L=(n(49),n(60),n(27)),G=n(345),J=n.n(G),U=n(28),Y=n(47),K=n(404);function Q(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var Z=Object(L.b)({layout:"footerless",head:{}}),ee=Object.assign(Z,{__name:"visitors-book",setup:function(e){Object(L.j)({title:"Visitor's Book | "});var t,n=Object(L.i)(),r=n.$config,o=n.$moment,c=Object(L.d)().proxy.$vToastify,l=Object(L.g)(null),d=Object(L.g)(null),h=Object(L.g)(0),f=r.visitorsBookContractAddress,v=r.visitorsBookContractChainId,m=r.visitorsBookContractChainName,y=Boolean(window.ethereum),w=Object(L.g)(!1),x=Object(L.g)(!1),address=Object(L.g)(null),C=Object(L.g)(!1),k=Object(L.g)(""),O=Object(L.g)([]),j=Object(L.g)(null),_=Object(L.g)(null),S=Object(L.g)(null),T=new J.a(window.ethereum);Object(L.f)(Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=12;break}return M(),e.next=4,T.eth.getAccounts();case 4:if(!(e.sent.length>0)){e.next=8;break}return e.next=8,$();case 8:if(w.value=T.currentProvider.chainId===v,!w.value){e.next=12;break}return e.next=12,I();case 12:case"end":return e.stop()}}),e)}))));var B=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C.value=!0,e.next=4,T.eth.requestAccounts();case 4:return e.next=6,$();case 6:C.value=!1,c.success("Connected."),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),C.value=!1,c.error(String(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:v}]});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c.error(String(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w.value=!0,t=new T.eth.Contract(K,f),e.next=5,t.methods.getMessages().call();case 5:n=e.sent,O.value=[],r=Q(n);try{for(r.s();!(o=r.n()).done;)l=o.value,O.value.push({author:l.author,createdAt:l.createdAt,content:l.content})}catch(e){r.e(e)}finally{r.f()}_.value||(_.value=t.events.MessageSent().on("data",Z)),S.value||(S.value=new ResizeObserver(ae).observe(null===(h=d.value)||void 0===h?void 0:h.$refs.input)),D(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),null!==e.t0&&void 0!==e.t0&&e.t0.message.includes("ResizeObserver")||c.error(String(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.eth.net.isListening();case 2:if(e.t0=e.sent,!e.t0){e.next=5;break}e.t0=window.ethereum.isConnected();case 5:if(x.value=e.t0,x.value){e.next=8;break}throw new Error("Connection Error.");case 8:return e.next=10,ee();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.value.validate();case 3:if(e.sent){e.next=6;break}throw new Error(l.value.errors.message[0]);case 6:if(!C.value){e.next=8;break}throw new Error("Wait until the current tx is finished.");case 8:return e.next=10,t.methods.sendMessage(k.value).send({from:address.value}).once("sent",E).once("sending",N).once("transactionHash",z).once("receipt",H).on("error",V);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0&&c.error(String(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),D=function(){if(O.value.length){var e=0;if(j.value)setTimeout((function(){var e,t;null===(e=j.value[0])||void 0===e||null===(t=e.$el)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"})}),250);else var t=setInterval((function(){if(Boolean(j.value)||100===e){if(clearInterval(t),100===e)return void c.error("Something went wrong.");setTimeout((function(){var e,t;null===(e=j.value[0])||void 0===e||null===(t=e.$el)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"})}),250)}e++}),100)}},P=function(){C.value=!0,address.value=null,x.value=!1,c.success("Disconnected."),C.value=!1},M=function(){window.ethereum.on("chainChanged",W),window.ethereum.on("accountsChanged",G),window.ethereum.on("disconnect",X)},E=function(){C.value=!0,c.info("Transaction Status: Transaction sent to Metamask.")},N=function(){c.info("Transaction Status: Waiting to user confirm.")},z=function(e){c.info("Transaction Status: Awaiting transaction confirmation.\n"+"Tx Hash: ".concat(e))},H=function(){ne(),c.success("Thank you for your message! - @emretepedev")},V=function(){C.value=!1,c.error("Transaction Status: Failed.")},W=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===v){e.next=5;break}w.value=!1,j.value=null,e.next=7;break;case 5:return e.next=7,I();case 7:c.success("Chain has changed.");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=6;break}return e.next=3,ee(t[0]);case 3:c.success("Linked account changed to '".concat(t[0],"'")),e.next=8;break;case 6:return e.next=8,P();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(e){var t=e.returnValues[0];O.value.push({author:t.author,createdAt:t.createdAt,content:t.content}),t.author===address.value&&D(),c.success("New message received from ".concat(t.author,"."))},ee=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){var address,t=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return address=t.length>0&&void 0!==t[0]?t[0]:null,e.next=3,te(address);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.length>0&&void 0!==n[0]?n[0]:null)){e.next=5;break}e.t0=T.utils.toChecksumAddress(t),e.next=8;break;case 5:return e.next=7,T.eth.getAccounts();case 7:e.t0=e.sent[0];case 8:address.value=e.t0;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){k.value="",C.value=!1,l.value.reset()},re=function(){var e=Object(F.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(address);case 3:c.success("Address ".concat(address," copied.")),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){h.value=e[0].contentRect.height};return{__sfc:!0,$config:r,$moment:o,$vToastify:c,observer:l,textField:d,rowPaddingBottom:h,visitorsBookContractAddress:f,visitorsBookContractChainId:v,visitorsBookContractChainName:m,visitorsBookContract:t,hasMetamask:y,onValidNetwork:w,isConnected:x,address:address,spinner:C,messageContent:k,messages:O,lastMessageElement:j,contractMessageSentEventEmitter:_,textFieldResizeObserver:S,web3:T,connectWeb3:B,switchNetwork:A,getContractData:I,connect:$,send:R,scrollToLastMessage:D,disconnectWeb3:P,startEthEvents:M,handleTxSent:E,handleTxSending:N,handleTxHash:z,handleTxReceipt:H,handleTxError:V,handleChainChanged:W,handleAccountsChanged:G,handleDisconnect:X,handleMessageSent:Z,updateUserInfo:ee,updateUserAddress:te,resetInputs:ne,formatTimestampToDisplay:function(e){return o.unix(e).format("MM/DD/YY - HH:mm A")},copyToAddress:re,handleTextFieldResize:ae,mdiCloseCircle:U.i,mdiConnection:U.l,mdiMessage:U.w,mdiSend:U.H,ValidationObserver:Y.a,ValidationProvider:Y.b}}}),te=ee,ne=n(50),component=Object(ne.a)(te,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",[t("div",{staticClass:"flex justify-center"},[t(M.a,{staticClass:"py-0"},[n.hasMetamask?t("div",[n.onValidNetwork?t("div",[t(M.a,{staticClass:"box-border h-screen overflow-y-scroll scrollbar-thin scrollbar-track-dark-gray scrollbar-thumb-black scrollbar-track-rounded-full scrollbar-thumb-rounded-full",class:e.$vuetify.breakpoint.mdAndDown?"pt-14":""},[t(H.a,{style:"padding-bottom: ".concat(n.rowPaddingBottom,"px"),attrs:{align:"end"}},[t(P,e._l(n.messages,(function(r,o){return t(C,{key:o,ref:o===n.messages.length-1?"lastMessageElement":"",refInFor:!0,class:["break-all p-0",r.author==n.address?"justify-end":""],attrs:{shaped:""}},[t("div",{staticClass:"flex"},[r.author==n.address?t("span",{staticClass:"relative flex flex-col items-end text-right"},[t("div",{staticClass:"flex"},[t("span",{class:"relative my-auto mr-3 max-w-screen-sm text-left ".concat(e.$vuetify.breakpoint.smAndDown?"text-sm":"")},[e._v(e._s(r.content))]),e._v(" "),t("div",{staticClass:"group"},[t(z.a,{staticClass:"rounded-full",attrs:{height:"36","lazy-src":"https://robohash.org/".concat(r.author,"?size=8x8"),src:"https://robohash.org/".concat(r.author,"?bgset=bg1"),width:"36"},on:{click:function(e){return n.copyToAddress(r.author)}}}),e._v(" "),t("div",{staticClass:"invisible absolute -top-8 right-0 flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100"},[t("span",{staticClass:"relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg"},[e._v("\n                              "+e._s(r.author)+"\n                            ")]),e._v(" "),t("div",{staticClass:"-mt-2 h-3 w-3 rotate-45 bg-black"})])],1)]),e._v(" "),t("span",{staticClass:"text-xs text-gray-400"},[e._v("("+e._s(n.formatTimestampToDisplay(r.createdAt))+")")])]):t("span",{staticClass:"relative flex max-w-screen-sm flex-col"},[t("div",{staticClass:"flex"},[t("div",{staticClass:"group"},[t(z.a,{staticClass:"rounded-full",attrs:{height:"36","lazy-src":"https://robohash.org/".concat(r.author,"?size=8x8"),src:"https://robohash.org/".concat(r.author,"?bgset=bg1"),width:"36"},on:{click:function(e){return n.copyToAddress(r.author)}}}),e._v(" "),t("div",{staticClass:"invisible absolute -top-8 flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100"},[t("span",{staticClass:"relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg"},[e._v("\n                              "+e._s(r.author)+"\n                            ")])])],1),e._v(" "),t("span",{class:"my-auto ml-3 ".concat(e.$vuetify.breakpoint.smAndDown?"text-sm":"")},[e._v(e._s(r.content))])]),e._v(" "),t("span",{staticClass:"text-right text-xs text-gray-400"},[e._v("\n                        ("+e._s(n.formatTimestampToDisplay(r.createdAt))+")\n                      ")])])])])})),1)],1)],1),e._v(" "),t(E.a,{staticClass:"fixed bottom-0 left-0 right-0 p-0"},[t(M.a,{staticClass:"px-2 py-1"},[t(H.a,{attrs:{"no-gutters":""}},[t(P,[t(n.ValidationObserver,{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(r){var o=r.invalid;return[t(n.ValidationProvider,{attrs:{name:"message",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){var c=r.errors;return[t("div",{staticClass:"align-center flex flex-row"},[t(V.a,{ref:"textField",staticClass:"mx-4",attrs:{"auto-grow":"","clear-icon":n.mdiCloseCircle,clearable:"",dense:"","error-messages":c,"hide-details":"",label:"Message*",maxlength:"1024",name:"message","no-resize":"",outlined:"",placeholder:n.isConnected?"Your message":"Connect to writing a message","prepend-inner-icon":n.mdiMessage,readonly:!n.isConnected,rounded:"",rows:"1",shaped:"",success:!Object.keys(c).length&&Boolean(n.messageContent)},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;n.isConnected&&!o&&n.send()}},model:{value:n.messageContent,callback:function(e){n.messageContent=e},expression:"messageContent"}}),e._v(" "),t(W.a,{attrs:{"content-class":"text-xs",top:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[n.isConnected?t(k.a,e._g({directives:[{name:"longclick",rawName:"v-longclick",value:function(){return n.isConnected&&n.disconnectWeb3()},expression:"\n                                () => isConnected && disconnectWeb3()\n                              "}],staticClass:"p-0",attrs:{disabled:n.spinner,"min-width":"36",outlined:"",rounded:"",shaped:""},on:{click:function(e){return n.send()},contextmenu:function(e){e.preventDefault()}}},o),[n.spinner?t("svg",{staticClass:"h-9 w-9 animate-spin text-white",attrs:{viewBox:"0 0 24 24"}},[t("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),t("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]):t(N.a,{staticClass:"pl-1"},[e._v(e._s(n.mdiSend))])],1):t(k.a,e._g({staticClass:"p-0",attrs:{disabled:n.spinner,"min-width":"36",outlined:"",rounded:"",shaped:""},on:{click:function(e){return n.connectWeb3()},contextmenu:function(e){e.preventDefault()}}},o),[n.spinner?t("svg",{staticClass:"h-9 w-9 animate-spin text-white",attrs:{viewBox:"0 0 24 24"}},[t("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),t("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]):t(N.a,[e._v(e._s(n.mdiConnection))])],1)]}}],null,!0)},[e._v(" "),n.isConnected?t("div",{staticClass:"text-center"},[t("div",[e._v("Click to Send")]),e._v(" "),t("div",[e._v("\n                              (Long touch or press Left/Right Click to\n                              Disconnect)\n                            ")])]):t("div",{staticClass:"text-center"},[t("div",[e._v("Click to Connect")])])])],1)]}}],null,!0)})]}}],null,!1,950994745)})],1)],1)],1)],1)],1):t("div",{staticClass:"mt-20 flex items-center justify-center"},[t(k.a,{on:{click:function(e){return n.switchNetwork()}}},[e._v("Switch Network to "+e._s(n.visitorsBookContractChainName))])],1)]):t("div",{staticClass:"mt-20 flex items-center justify-center"},[t(k.a,{attrs:{href:"https://metamask.io/download/",target:"_blank"}},[e._v("\n          Install Metamask\n        ")])],1)])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);