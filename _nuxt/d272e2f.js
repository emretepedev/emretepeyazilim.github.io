(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{650:function(e,r,t){"use strict";t.r(r);var n=t(645),o=t(170),c=t(643),l=t(168),d=t(646),m=t(527),f=t(533),v=(t(32),t(8),t(84)),h=t(0),y=t(20),x=(t(65),t(66),t(54)),j=t(85),k={subjects:["Hire","Suggestion","Proposal","Donate","Request to Test ETH","Other"]},C=Object(h.d)({__name:"contact",setup:function(e){Object(v.d)({link:[{href:"https://s.pageclip.co/v1/pageclip.css",media:"screen",rel:"stylesheet"}],script:[{vmid:"extscript",body:!0,callback:function(){F()},charset:"utf-8",defer:!0,src:"https://s.pageclip.co/v1/pageclip.js"}],title:"Contact | "});var r=Object(v.e)(),t=r.$recaptcha,n=r.$toast,o=r.$config,c=Object(h.y)(null),l=o.public,d=l.googleRecaptchaV2Size,m=l.googleRecaptchaV2SiteKey,f=Object(h.y)(""),C=Object(h.y)(""),O=Object(h.y)(""),S=Object(h.y)(""),_=Object(h.y)(!1),P=Object(h.y)(""),w=Object(h.y)(!1),V=Object(h.y)(0),A=Object(h.y)(null);Object(h.r)(Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:B();case 3:case"end":return e.stop()}}),e)}))));var T=function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.value.validate();case 3:if(e.sent){e.next=6;break}throw new Error("Form Validation: Failed.");case 6:return e.next=8,t.getResponse(V.value).catch((function(){throw new Error("reCAPTCHA v2 Verification: Token not found.")}));case 8:return e.next=10,t.execute("login").catch((function(){throw new Error("reCAPTCHA v3 Verification: Token not found.")}));case 10:return e.next=12,t.reset(V.value);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),n.error(String(e.t0)),r.preventDefault();case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(r){return e.apply(this,arguments)}}(),R=function(){f.value="",C.value="",P.value="",O.value="",S.value="",_.value=!1,c.value.reset()},B=function(){var e=0,r=setInterval((function(){A.value&&(clearInterval(r),V.value=t.render(d,{sitekey:m}),E()),40!==e?e++:n.error("reCAPTCHA Verification: Server Error. Try again later.")}),250)},F=function(){var form=document.querySelector(".pageclip-form");Pageclip.form(form,{onResponse:function(e,r){e?n.error("Mail didn't send because of `Form has errors`."):"ok"===r.data?(R(),n.success("Mail sent successfully.")):n.error("Mail didn't send because of `Server Error`. Try again later.")},successTemplate:"I`ll reply to you ASAP. - @emretepedev"})},E=function(){A.value.$el.style.display="flex",A.value.$el.style.justifyContent="center"};return{__sfc:!0,$recaptcha:t,$toast:n,$config:o,observer:c,googleRecaptchaV2Size:d,googleRecaptchaV2SiteKey:m,name:f,phone:C,subject:O,message:S,asap:_,email:P,passRecaptcha:w,widgetId:V,recaptcha:A,submit:T,resetForm:R,onError:function(){n.error("reCAPTCHA Verification: Error."),w.value=!1},onSuccess:function(){n.success("reCAPTCHA Verification: Success.",{pauseOnFocusLoss:!1}),w.value=!0},onExpired:function(){n.warning("reCAPTCHA Verification: Expired."),w.value=!1},renderToRecaptcha:B,styleToPageclip:F,styleToRecaptcha:E,mdiAt:x.d,mdiCheckboxBlankCircleOutline:x.f,mdiCheckboxMarkedCircle:x.g,mdiCloseCircle:x.i,mdiFormSelect:x.p,mdiFormTextbox:x.q,mdiMessage:x.w,mdiPhone:x.F,ValidationObserver:j.a,ValidationProvider:j.b,data:k}}}),O=C,S=t(76),component=Object(S.a)(O,(function(){var e=this,r=e._self._c,t=e._self._setupProxy;return r("div",[r("div",{staticClass:"mt-12 flex justify-center"},[r(l.b,{staticClass:"flex justify-center"},[r(t.ValidationObserver,{ref:"observer",staticClass:"w-full sm:w-3/4",scopedSlots:e._u([{key:"default",fn:function(l){var v=l.invalid;return[r(d.a,{staticClass:"pageclip-form",attrs:{action:t.$config.public.pageclipActionUrl,method:"POST"}},[r(t.ValidationProvider,{attrs:{name:"name",rules:"required|min:2|max:30"},scopedSlots:e._u([{key:"default",fn:function(e){var n=e.errors;return[r(m.a,{attrs:{counter:30,dense:"","error-messages":n,hint:Boolean(t.name)?"":"For example, `John Doe`",label:"Name*",name:"name",outlined:"",placeholder:"Your name","prepend-inner-icon":t.mdiFormTextbox,rounded:"",shaped:"",success:!Boolean(Object.keys(n).length)&&Boolean(t.name)},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})]}}],null,!0)}),e._v(" "),r(t.ValidationProvider,{attrs:{name:"email",rules:{required:!0,email:!0,min:5,max:30,is_not:"emretepedev@gmail.com"}},scopedSlots:e._u([{key:"default",fn:function(e){var n=e.errors;return[r(m.a,{attrs:{counter:30,dense:"","error-messages":n,hint:Boolean(t.email)?"":"For example, `mail@example.com`",label:"E-mail*",name:"email",outlined:"",placeholder:"Your mail address","prepend-inner-icon":t.mdiAt,rounded:"",shaped:"",success:!Boolean(Object.keys(n).length)&&Boolean(t.email)},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})]}}],null,!0)}),e._v(" "),r(t.ValidationProvider,{attrs:{name:"subject",rules:"required|oneOf:".concat(t.data.subjects)},scopedSlots:e._u([{key:"default",fn:function(e){var o=e.errors;return[r(n.a,{attrs:{dense:"","error-messages":o,hint:Boolean(t.subject)?"":"For example, `Proposal`",items:t.data.subjects,label:"Subject*",name:"subject",outlined:"",placeholder:"Your subject","prepend-inner-icon":t.mdiFormSelect,rounded:"",shaped:"",success:!Boolean(Object.keys(o).length)&&Boolean(t.subject)},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})]}}],null,!0)}),e._v(" "),r(t.ValidationProvider,{attrs:{name:"phone",rules:"integer|min:7|max:20"},scopedSlots:e._u([{key:"default",fn:function(e){var n=e.errors;return[r(m.a,{attrs:{counter:20,dense:"","error-messages":n,hint:Boolean(t.phone)?"":"For example, `123456789`",label:"Phone",name:"phone",outlined:"",placeholder:"Your phone","prepend-inner-icon":t.mdiPhone,rounded:"",shaped:"",success:!Boolean(Object.keys(n).length)&&Boolean(t.phone)},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})]}}],null,!0)}),e._v(" "),r(t.ValidationProvider,{attrs:{name:"message",rules:"required|min:10|max:1000"},scopedSlots:e._u([{key:"default",fn:function(e){var n=e.errors;return[r(f.a,{attrs:{"auto-grow":"","clear-icon":t.mdiCloseCircle,clearable:"",counter:1e3,dense:"","error-messages":n,hint:Boolean(t.message)?"":"For example, `Hi @emretepedev!`",label:"Message*",maxlength:"1000",name:"message",outlined:"",placeholder:"Your message","prepend-inner-icon":t.mdiMessage,rounded:"",shaped:"",success:!Boolean(Object.keys(n).length)&&Boolean(t.message)},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})]}}],null,!0)}),e._v(" "),r(c.a,{attrs:{dense:"","input-value":t.asap,label:"ASAP: ".concat(t.asap?"yes":"no"),name:"asap","off-icon":t.mdiCheckboxBlankCircleOutline,"on-icon":t.mdiCheckboxMarkedCircle,shaped:"",value:t.asap},on:{change:function(e){t.asap=!t.asap}}}),e._v(" "),r("Recaptcha",{ref:"recaptcha",attrs:{id:t.$config.public.googleRecaptchaV2Size,"site-key":t.$config.public.googleRecaptchaV2SiteKey},on:{error:t.onError,expired:t.onExpired,success:t.onSuccess}}),e._v(" "),r("div",{staticClass:"mt-5 text-center"},[r(o.a,{staticClass:"pageclip-form__submit pageclip-form__submit--dark-loader",attrs:{disabled:v||!t.passRecaptcha,type:"submit"},on:{click:function(e){return t.submit(e)}}},[e._v("\n              Submit\n            ")])],1)],1)]}}])})],1)],1)])}),[],!1,null,null,null);r.default=component.exports}}]);