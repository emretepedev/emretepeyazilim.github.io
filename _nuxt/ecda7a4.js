(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{537:function(e,n,t){e.exports={}},568:function(e,n){},571:function(e,n){},574:function(e,n){},578:function(e,n){},602:function(e,n){},604:function(e,n){},613:function(e,n){},615:function(e,n){},625:function(e,n){},627:function(e,n){},736:function(e,n){},738:function(e,n){},745:function(e,n){},746:function(e,n){},841:function(e,n,t){"use strict";t(537)},896:function(e,n,t){"use strict";t.r(n);var r=t(14),o=(t(55),t(24)),c=t(554),l=t.n(c),f=t(840),d=t.n(f),v=t(22),m=t(53),x=Object(o.a)({components:{ValidationProvider:m.b,ValidationObserver:m.a},setup:function(e,n){var t=n.root;Object(o.h)({title:"Coffee With Crypto | "});var c=t.$vToastify,f=Object(o.e)(null),m=null,x=Object(o.e)(null),h=Object(o.e)(!1),address=Object(o.e)(null),w=Object(o.e)(0),k=Object(o.e)(""),y=Object(o.e)(null),C=Object(o.e)(null),_=Object(o.e)(null),j=Object(o.e)(null),O=Object(o.e)(!1);Object(o.d)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:x.value&&(m=new l.a(x.value));case 3:case"end":return e.stop()}}),e)}))));var R=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.value){e.next=3;break}return c.error("No web3 provider detected."),e.abrupt("return");case 3:return e.prev=3,e.next=6,m.eth.requestAccounts();case 6:return e.next=8,S();case 8:return e.next=10,m.eth.net.isListening();case 10:h.value=e.sent,B(),c.success("Connected."),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),c.error(String(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.value.validate();case 3:if(e.sent){e.next=6;break}throw new Error("Validation Error.");case 6:return m.eth.transactionConfirmationBlocks=5,j.value=m.eth.transactionConfirmationBlocks,e.next=10,m.eth.sendTransaction({from:address.value.toLowerCase(),to:"0x93C4C1e86434eA4E831d8A13e64aC288C49B7b76".toLowerCase(),value:m.utils.toWei(k.value,"ether")}).on("transactionHash",V).on("receipt",D).on("confirmation",L).on("error",W);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0&&c.error(String(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.eth.getCoinbase();case 2:return address.value=e.sent,e.t0=m.utils,e.next=6,m.eth.getBalance(address.value);case 6:e.t1=e.sent,w.value=e.t0.fromWei.call(e.t0,e.t1,"ether");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){x.value.on("chainChanged",H),x.value.on("accountsChanged",F),x.value.on("disconnect",M)},A=function(){x.value.removeListener("chainChanged",H),x.value.removeListener("accountsChanged",F)},V=function(e){_.value=e,y.value="Awaiting transaction confirmation.",c.info("Transaction Status: Awaiting transaction confirmation."),O.value=!0,$()},D=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:y.value="Awaiting block confirmation.",c.success("Transaction Status: Awaiting block confirmation."),c.info("Thank You For Your Support! - @emretepedev");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){e>0&&e<=j.value&&(C.value=e,c.info("Confirmation Status: New block found.")),e>=j.value&&(y.value="Confirmed.",E(),c.success("Transaction Status: Confirmed."))},W=function(){y.value="Failed.",E(),c.error("Transaction Status: Failed.")},F=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=6;break}return e.next=3,S();case 3:c.success("Linked account changed to '".concat(n[0],"'")),e.next=8;break;case 6:c.warning("Linked account not found. Page will be reloaded."),location.reload();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:c.success("Chain has changed.");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){location.reload()},$=function(){f.value.reset(),k.value=""},E=function(){y.value=null,_.value=null,j.value=null,C.value=null,O.value=!1},N=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({mustBeMetaMask:!0,silent:!0,timeout:3e3});case 2:x.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(text){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(text);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",null);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}();return{provider:x,isConnected:h,amount:k,address:address,balance:w,observer:f,txStatus:y,confirmationCount:C,txHash:_,totalConfirmationCount:j,spinner:O,copyText:P,connectWeb3:R,disconnectWeb3:function(){c.success("Disconnected."),h.value=!1,address.value=null,w.value=null,$(),E(),A(),location.reload()},formatBalanceToDisplay:function(e){return(+e).toFixed(6)},formatAddressToDisplay:function(address){return address.substring(0,6)+"..."+address.substring(address.length-4)},send:T,mdiCurrencyUsdOff:v.l}},head:{}}),h=x,w=(t(841),t(48)),k=t(65),y=t.n(k),C=t(191),_=t(354),j=t(538),O=t(445),R=t(886),T=t(848),S=t.n(T),B=t(81),component=Object(w.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"flex justify-center mt-12"},[t("v-container",[e.provider?t("div",[e.isConnected?t("div",[t("v-row",{class:"my-5 "+(e.$vuetify.breakpoint.xsOnly?"space-x-0 grid grid-cols-1 gap-y-5 mx-2":"space-x-6"),attrs:{justify:"center",align:"center"}},[t("v-tooltip",{attrs:{bottom:"","content-class":"text-xs"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("span",e._g(e._b({directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"\n                    p-3\n                    text-center\n                    my-auto\n                    cursor-pointer\n                    text-gray-100\n                    border-2 border-transparent border-solid\n                    rounded-md\n                    shadow-xl\n                    app-title\n                    border-gradient-br-blue-green-gray-900\n                  ",on:{click:function(n){return e.copyText(e.address)}}},"span",o,!1),r),[e._v("\n                  Address: "+e._s(e.formatAddressToDisplay(e.address))+"\n                ")])]}}],null,!1,3787724510)},[e._v(" "),t("span",[e._v("\n                "+e._s(e.address)+"\n              ")])]),e._v(" "),t("span",{staticClass:"\n                p-3\n                my-auto\n                text-center text-gray-100\n                border-2 border-transparent border-solid\n                rounded-md\n                app-title\n                border-gradient-br-blue-green-gray-900\n              "},[e._v("\n              Balance: "+e._s(e.formatBalanceToDisplay(e.balance))+"\n            ")])],1),e._v(" "),t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.invalid;return[t("v-row",[t("validation-provider",{staticClass:"flex justify-center",attrs:{name:"amount",rules:{required:!0,decimal:!0,min:1,max:8,min_value:1e-6,max_value:e.formatBalanceToDisplay(e.balance)}},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("v-text-field",{staticClass:"max-w-sm mx-4 mt-4",attrs:{counter:8,"error-messages":r,success:!Boolean(Object.keys(r).length)&&Boolean(e.amount),label:"Amount",placeholder:"Your amount",hint:Boolean(e.amount)?"":"For example, `0.01`",name:"amount","prepend-inner-icon":e.mdiCurrencyUsdOff,outlined:"",rounded:"",dense:"",shaped:""},model:{value:e.amount,callback:function(n){e.amount=n},expression:"amount"}})]}}],null,!0)})],1),e._v(" "),t("v-row",{class:e.$vuetify.breakpoint.xsOnly?"space-x-0 space-y-1 px-5 grid grid-cols-1 gap-y-2 my-4":"space-x-6",attrs:{justify:"center",align:"center"}},[t("v-btn",{class:e.$vuetify.breakpoint.xsOnly?"w-full":"",attrs:{disabled:r||e.spinner},on:{click:e.send}},[e.spinner?t("svg",{staticClass:"animate-spin h-5 w-5 mr-3 text-white",attrs:{viewBox:"0 0 24 24"}},[t("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),e._v(" "),t("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):e._e(),e._v(" "),t("span",[e._v("Send")])]),e._v(" "),t("v-btn",{on:{click:e.disconnectWeb3}},[e._v("Disconnect to Metamask")])],1)]}}],null,!1,1331546057)}),e._v(" "),t("div",{staticClass:"text-center text-sm mt-5"},[e._v("\n            Note: All chains are supported. (Including Testnets for testing\n            this feature.)\n          ")]),e._v(" "),t("div",{staticClass:"\n              mt-5\n              flex flex-col\n              items-center\n              text-center text-sm\n              space-y-1\n            "},[e.txHash?t("div",{staticClass:"break-words"},[e._v("\n              Transaction Hash: "+e._s(e.txHash)+"\n            ")]):e._e(),e._v(" "),e.txStatus?t("div",[e._v("Status: "+e._s(e.txStatus))]):e._e(),e._v(" "),e.confirmationCount?t("div",[e._v("\n              Confirmation Progress:\n              "+e._s(e.confirmationCount)+"/"+e._s(e.totalConfirmationCount)+"\n            ")]):e._e()])],1):t("div",{staticClass:"flex justify-center items-center"},[t("v-btn",{on:{click:e.connectWeb3}},[e._v("Connect to Metamask")])],1)]):t("div",{staticClass:"flex justify-center items-center"},[t("v-btn",{attrs:{target:"_blank",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}},[e._v("\n          Install Metamask\n        ")])],1)])],1)])}),[],!1,null,null,null);n.default=component.exports;y()(component,{VBtn:C.a,VContainer:_.a,VRow:j.a,VTextField:O.a,VTooltip:R.a}),S()(component,{Ripple:B.a})}}]);