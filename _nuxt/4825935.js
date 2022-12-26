(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{528:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(208),o=window.ethereum,c=Object(r.c)("metamask",{state:function(){return{haveEventsStarted:!1}},actions:{startMetamaskEvents:function(){this.haveEventsStarted||(this.haveEventsStarted=!0,o.on("chainChanged",this.handleChainChanged),o.on("accountsChanged",this.handleAccountsChanged))},handleChainChanged:function(e){},handleAccountsChanged:function(e){}}})},629:function(e){e.exports=JSON.parse('[{"inputs":[],"name":"ContentMustNotEmpty","type":"error"},{"inputs":[],"name":"SpamMessage","type":"error"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"author","type":"address"},{"internalType":"uint96","name":"createdAt","type":"uint96"},{"internalType":"string","name":"content","type":"string"}],"indexed":false,"internalType":"struct IVisitorsBook.Message","name":"message","type":"tuple"}],"name":"MessageSent","type":"event"},{"inputs":[],"name":"getMessages","outputs":[{"components":[{"internalType":"address","name":"author","type":"address"},{"internalType":"uint96","name":"createdAt","type":"uint96"},{"internalType":"string","name":"content","type":"string"}],"internalType":"struct IVisitorsBook.Message[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"content","type":"string"}],"name":"sendMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},643:function(e,t,n){"use strict";n.r(t);var r=n(634),o=n(170),c=n(168),l=n(356),d=n(75),v=n(515),f=n(523),h=n(575),m=(n(8),n(72)),y=n(528),x=n(0),k=(n(11),n(9),n(4),n(16),n(12),n(17),n(43),n(59),n(39),n(21),n(56),n(61),n(40),n(20)),C=n(2),w=(n(32),n(46),n(55),n(65),n(66),n(562)),O=n.n(w),_=n(54),j=n(85),A=n(619),T=n(629);function S(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=Object(x.d)(D(D({},{layout:"footerless"}),{},{__name:"visitors-book",setup:function(e){Object(m.d)({title:"Visitor's Book | "});var t,n=Object(m.f)(),r=Object(y.a)(),o=Object(m.e)(),c=o.$toast,l=o.$moment,d=o.$config,v=Object(x.y)(null),f=Object(x.y)(null),h=Object(x.y)(0),C=d.public,w=C.visitorsBookContractAddress,M=C.visitorsBookContractChainId,R=C.visitorsBookContractChainName,D=window.ethereum,E=Boolean(D),I=Object(x.y)(E&&D.chainId===M),B=Object(x.y)(!1),address=Object(x.y)(""),P=Object(x.y)(!1),z=Object(x.y)(""),V=Object(x.y)([]),$=Object(x.y)(null),N=Object(x.y)(!1),H=Object(x.y)(!1),L=new O.a(D);Object(x.r)(Object(k.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,E){e.next=3;break}throw new Error("You have to install Metamask to access this page.");case 3:if(r.startMetamaskEvents(),e.t0=I.value,!e.t0){e.next=8;break}return e.next=8,U();case 8:return e.next=10,L.eth.getAccounts();case 10:if(t=e.sent,B.value=t.length>0,e.t1=B.value,!e.t1){e.next=16;break}return e.next=16,ne(t);case 16:e.next=21;break;case 18:e.prev=18,e.t2=e.catch(0),c.error(String((null===e.t2||void 0===e.t2?void 0:e.t2.message)||e.t2));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))),r.$onAction(function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.name,r=t.args,o=t.onError,e.t0=n,e.next="handleChainChanged"===e.t0?4:"handleAccountsChanged"===e.t0?7:10;break;case 4:return e.next=6,te(r[0]);case 6:return e.abrupt("break",10);case 7:return e.next=9,ne(r[0]);case 9:return e.abrupt("break",10);case 10:o((function(e){c.error(String((null==e?void 0:e.message)||e))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var F=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P.value=!0,e.next=4,L.eth.getAccounts();case 4:if(t=e.sent,B.value=t.length>0,!B.value){e.next=11;break}return e.next=9,ne(t);case 9:e.next=13;break;case 11:return e.next=13,L.eth.requestAccounts();case 13:P.value=!1,e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),P.value=!1,c.error(String((null===e.t0||void 0===e.t0?void 0:e.t0.message)||e.t0));case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.request({method:"wallet_switchEthereumChain",params:[{chainId:M}]});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c.error(String((null===e.t0||void 0===e.t0?void 0:e.t0.message)||e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new L.eth.Contract(T,w),e.next=4,t.methods.getMessages().call();case 4:n=e.sent,V.value=[],r=S(n);try{for(r.s();!(o=r.n()).done;)l=o.value,V.value.push({author:l.author,createdAt:l.createdAt,content:l.content})}catch(e){r.e(e)}finally{r.f()}N.value||(N.value=!0,t.events.MessageSent().on("data",re)),H.value||(H.value=!0,new ResizeObserver(ue).observe(null===(d=f.value)||void 0===d?void 0:d.$refs.input)),J(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),null!==e.t0&&void 0!==e.t0&&e.t0.message.includes("ResizeObserver")||c.error(String((null===e.t0||void 0===e.t0?void 0:e.t0.message)||e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.value.validate();case 3:if(e.sent){e.next=6;break}throw new Error(v.value.errors.message[0]);case 6:if(!P.value){e.next=8;break}throw new Error("Wait until the current tx is finished.");case 8:return e.next=10,t.methods.sendMessage(z.value).send({from:address.value}).once("sent",K).once("sending",Q).once("transactionHash",X).once("receipt",Z).on("error",ee);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0&&c.error(String((null===e.t0||void 0===e.t0?void 0:e.t0.message)||e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),J=function(){if(V.value.length){var e=0;if($.value)setTimeout((function(){var e,t;null===(e=$.value[0])||void 0===e||null===(t=e.$el)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"})}),250);else var t=setInterval((function(){if($.value&&(clearInterval(t),setTimeout((function(){var e,t;null===(e=$.value[0])||void 0===e||null===(t=e.$el)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"})}),250)),100===e||"/visitors-book"!==n.path)return clearInterval(t),void("/visitors-book"===n.path&&c.error("Cannot get to last message. Try refresh the page."));e++}),100)}},G=function(){B.value=!1,ie(),c.success("Disconnected.")},K=function(){P.value=!0,c.info("Transaction Status: Transaction sent to Metamask.")},Q=function(){c.info("Transaction Status: Waiting to user confirm.")},X=function(e){c.info("Transaction Status: Awaiting transaction confirmation.\n"+"Tx Hash: ".concat(e))},Z=function(){oe(),c.success("Thank you for your message! - @emretepedev")},ee=function(){P.value=!1,c.error("Transaction Status: Failed.")},te=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===M){e.next=5;break}I.value=!1,$.value=null,e.next=8;break;case 5:return I.value=!0,e.next=8,U();case 8:c.success("Chain has changed.");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.value=t.length>0,!B.value){e.next=6;break}return e.next=4,ae(t[0]);case 4:e.next=7;break;case 6:G();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(e){var t=e.returnValues[0];V.value.push({author:t.author,createdAt:t.createdAt,content:t.content}),t.author===address.value&&J(),c.success("New message received from ".concat(t.author,"."))},ae=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(address);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}e.t0=L.utils.toChecksumAddress(t),e.next=7;break;case 4:return e.next=6,L.eth.getAccounts();case 6:e.t0=e.sent[0];case 7:address.value=e.t0,c.success("Linked account changed to '".concat(address.value,"'"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){z.value="",P.value=!1,v.value.reset()},ie=function(){address.value=""},ce=function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(address){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(address);case 3:c.success("Address ".concat(address," copied.")),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(e){h.value=e[0].contentRect.height};return{__sfc:!0,route:n,metamaskStore:r,$toast:c,$moment:l,$config:d,observer:v,textField:f,rowPaddingBottom:h,visitorsBookContractAddress:w,visitorsBookContractChainId:M,visitorsBookContractChainName:R,visitorsBookContract:t,ethereum:D,hasMetamask:E,onValidNetwork:I,isConnected:B,address:address,spinner:P,messageContent:z,messages:V,lastMessageElement:$,contractMessageSentEventEmitter:N,textFieldResizeObserver:H,web3:L,onLongPressCallbackDirective:function(){B&&G()},connectWeb3:F,switchNetwork:W,getContractData:U,send:Y,scrollToLastMessage:J,disconnectWeb3:G,handleTxSent:K,handleTxSending:Q,handleTxHash:X,handleTxReceipt:Z,handleTxError:ee,handleChainChanged:te,handleAccountsChanged:ne,handleMessageSent:re,updateUserInfo:ae,updateUserAddress:se,resetInputs:oe,formatTimestampToDisplay:function(e){return l.unix(e).format("MM/DD/YY - HH:mm A")},resetUserDetails:ie,copyToAddress:ce,handleTextFieldResize:ue,mdiCloseCircle:_.i,mdiConnection:_.l,mdiMessage:_.w,mdiSend:_.H,ValidationObserver:j.a,ValidationProvider:j.b,vOnLongPress:A.a}}})),I=E,B=n(77),component=Object(B.a)(I,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",[t("div",{staticClass:"flex justify-center"},[t(c.b,{staticClass:"py-0"},[n.hasMetamask?t("div",[n.onValidNetwork?t("div",[t(c.b,{staticClass:"box-border h-screen overflow-y-scroll scrollbar-thin scrollbar-track-dark-gray scrollbar-thumb-black scrollbar-track-rounded-full scrollbar-thumb-rounded-full",class:e.$vuetify.breakpoint.mdAndDown?"pt-14":""},[t(c.c,{style:"padding-bottom: ".concat(n.rowPaddingBottom,"px"),attrs:{align:"end"}},[t(c.a,e._l(n.messages,(function(o,c){return t(r.a,{key:c,ref:c===n.messages.length-1?"lastMessageElement":"",refInFor:!0,class:["break-all p-0",o.author==n.address?"justify-end":""],attrs:{shaped:""}},[t("div",{staticClass:"flex"},[o.author==n.address?t("span",{staticClass:"relative flex flex-col items-end text-right"},[t("div",{staticClass:"flex"},[t("span",{class:"relative my-auto mr-3 max-w-screen-sm text-left ".concat(e.$vuetify.breakpoint.smAndDown?"text-sm":"")},[e._v(e._s(o.content))]),e._v(" "),t("div",{staticClass:"group"},[t(v.a,{staticClass:"rounded-full",attrs:{height:"36","lazy-src":"https://robohash.org/".concat(o.author,"?size=8x8"),src:"https://robohash.org/".concat(o.author,"?bgset=bg1"),width:"36"},on:{click:function(e){return n.copyToAddress(o.author)}}}),e._v(" "),t("div",{staticClass:"invisible absolute -top-8 right-0 flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100"},[t("span",{staticClass:"relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg"},[e._v("\n                              "+e._s(o.author)+"\n                            ")]),e._v(" "),t("div",{staticClass:"-mt-2 h-3 w-3 rotate-45 bg-black"})])],1)]),e._v(" "),t("span",{staticClass:"text-xs text-gray-400"},[e._v("("+e._s(n.formatTimestampToDisplay(o.createdAt))+")")])]):t("span",{staticClass:"relative flex max-w-screen-sm flex-col"},[t("div",{staticClass:"flex"},[t("div",{staticClass:"group"},[t(v.a,{staticClass:"rounded-full",attrs:{height:"36","lazy-src":"https://robohash.org/".concat(o.author,"?size=8x8"),src:"https://robohash.org/".concat(o.author,"?bgset=bg1"),width:"36"},on:{click:function(e){return n.copyToAddress(o.author)}}}),e._v(" "),t("div",{staticClass:"invisible absolute -top-8 flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100"},[t("span",{staticClass:"relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg"},[e._v("\n                              "+e._s(o.author)+"\n                            ")])])],1),e._v(" "),t("span",{class:"my-auto ml-3 ".concat(e.$vuetify.breakpoint.smAndDown?"text-sm":"")},[e._v(e._s(o.content))])]),e._v(" "),t("span",{staticClass:"text-right text-xs text-gray-400"},[e._v("\n                        ("+e._s(n.formatTimestampToDisplay(o.createdAt))+")\n                      ")])])])])})),1)],1)],1),e._v(" "),t(l.a,{staticClass:"fixed bottom-0 left-0 right-0 p-0"},[t(c.b,{staticClass:"px-2 py-1"},[t(c.c,{attrs:{"no-gutters":""}},[t(c.a,[t(n.ValidationObserver,{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(r){var c=r.invalid;return[t(n.ValidationProvider,{attrs:{name:"message",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){var l=r.errors;return[t("div",{staticClass:"align-center flex flex-row"},[t(f.a,{ref:"textField",staticClass:"mx-4",attrs:{"auto-grow":"","clear-icon":n.mdiCloseCircle,clearable:"",dense:"","error-messages":l,"hide-details":"",label:"Message*",maxlength:"1024",name:"message","no-resize":"",outlined:"",placeholder:n.isConnected?"Your message":"Connect to writing a message","prepend-inner-icon":n.mdiMessage,readonly:!n.isConnected,rounded:"",rows:"1",shaped:"",success:!Object.keys(l).length&&Boolean(n.messageContent)},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;n.isConnected&&!c&&n.send()}},model:{value:n.messageContent,callback:function(e){n.messageContent=e},expression:"messageContent"}}),e._v(" "),t(h.a,{attrs:{"content-class":"text-xs",top:""},scopedSlots:e._u([{key:"activator",fn:function(r){var c=r.on;return[n.isConnected?t(o.a,e._g({directives:[{name:"on-long-press",rawName:"v-on-long-press",value:[n.onLongPressCallbackDirective,{delay:1500,modifiers:{prevent:!0}}],expression:"[\n                                onLongPressCallbackDirective,\n                                {\n                                  delay: 1500,\n                                  modifiers: {\n                                    prevent: true,\n                                  },\n                                },\n                              ]"}],staticClass:"p-0",attrs:{disabled:n.spinner,"min-width":"36",outlined:"",rounded:"",shaped:""},on:{click:function(e){return n.send()},contextmenu:function(e){e.preventDefault()}}},c),[n.spinner?t("svg",{staticClass:"h-9 w-9 animate-spin text-white",attrs:{viewBox:"0 0 24 24"}},[t("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),t("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]):t(d.a,{staticClass:"pl-1"},[e._v(e._s(n.mdiSend))])],1):t(o.a,e._g({staticClass:"p-0",attrs:{disabled:n.spinner,"min-width":"36",outlined:"",rounded:"",shaped:""},on:{click:function(e){return n.connectWeb3()},contextmenu:function(e){e.preventDefault()}}},c),[n.spinner?t("svg",{staticClass:"h-9 w-9 animate-spin text-white",attrs:{viewBox:"0 0 24 24"}},[t("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),t("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]):t(d.a,[e._v(e._s(n.mdiConnection))])],1)]}}],null,!0)},[e._v(" "),n.isConnected?t("div",{staticClass:"text-center"},[t("div",[e._v("Click to Send")]),e._v(" "),t("div",[e._v("\n                              (Long touch or press Left/Right Click to\n                              Disconnect)\n                            ")])]):t("div",{staticClass:"text-center"},[t("div",[e._v("Click to Connect")])])])],1)]}}],null,!0)})]}}],null,!1,2284416793)})],1)],1)],1)],1)],1):t("div",{staticClass:"mt-20 flex items-center justify-center"},[t(o.a,{on:{click:function(e){return n.switchNetwork()}}},[e._v("Switch Network to "+e._s(n.visitorsBookContractChainName))])],1)]):t("div",{staticClass:"mt-20 flex items-center justify-center"},[t(o.a,{attrs:{href:"https://metamask.io/download/",target:"_blank"}},[e._v("\n          Install Metamask\n        ")])],1)])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);