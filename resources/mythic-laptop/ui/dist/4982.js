"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[4982],{64982:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(89526),c=n(92070),o=n(65092),r=n(16743),l=n(72757),s=n(25385),i=n(14710),m=n(32165),u=n(50563),p=n(68621),d=n(71529),h=n(57170),v=n(21447);function x(e,t,n,a,c,o,r){try{var l=e[o](r),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,c)}var f=(0,p.Z)({root:{border:"1px solid rgba(0, 0, 0, .25)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(r.Z),b=(0,d.Z)((function(e){return{contact:{background:e.palette.secondary.dark,"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},paper:{background:e.palette.secondary.dark},expandoContainer:{textAlign:"center",fontSize:30},expandoItem:{"&:hover":{color:e.palette.primary.main,transition:"color ease-in 0.15s"}},avatar:{color:"#fff",height:45,width:45},avatarFav:{color:"#fff",height:45,width:45,border:"2px solid gold"},contactName:{fontSize:18,color:e.palette.text.light},contactNumber:{fontSize:16,color:e.palette.text.main},expanded:{margin:0}}}));const E=function(e){var t=b(),n=(0,o.k6)(),r=(0,c.v9)((function(e){return e.call.call})),p=function(){var t,a=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=r){t.next=14;break}return t.prev=1,t.next=4,v.Z.send("CreateCall",{number:e.contact.number,isAnon:!1});case 4:return t.next=6,t.sent.json();case 6:t.sent?n.push("/apps/phone/call/".concat(e.contact.number)):showAlert("Unable To Start Call"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),showAlert("Unable To Start Call");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})),function(){var e=this,n=arguments;return new Promise((function(a,c){var o=t.apply(e,n);function r(e){x(o,a,c,r,l,"next",e)}function l(e){x(o,a,c,r,l,"throw",e)}r(void 0)}))});return function(){return a.apply(this,arguments)}}();return a.createElement(l.Z,{className:t.paper},a.createElement(f,{className:t.contact,expanded:e.expanded==e.index,onChange:e.onClick},a.createElement(s.Z,{expandIcon:a.createElement(h.G,{icon:["fas","chevron-down"]}),style:{padding:"0 12px"}},a.createElement(i.ZP,{container:!0},a.createElement(i.ZP,{item:!0,xs:2},null!=e.contact.avatar&&""!==e.contact.avatar?a.createElement(m.Z,{className:e.contact.favorite?t.avatarFav:t.avatar,src:e.contact.avatar,alt:e.contact.name.charAt(0)}):a.createElement(m.Z,{className:e.contact.favorite?t.avatarFav:t.avatar,style:{background:e.contact.color}},e.contact.name.charAt(0))),a.createElement(i.ZP,{item:!0,xs:10},a.createElement("div",{className:t.contactName},e.contact.name),a.createElement("div",{className:t.contactNumber},e.contact.number)))),a.createElement(u.Z,null,a.createElement(i.ZP,{container:!0,className:t.expandoContainer},a.createElement(i.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:p},a.createElement(h.G,{icon:"phone"})),a.createElement(i.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){n.push("/apps/messages/convo/".concat(e.contact.number))}},a.createElement(h.G,{icon:"message-sms"})),a.createElement(i.ZP,{item:!0,xs:null!=e.onDelete?3:4,className:t.expandoItem,onClick:function(){n.push("/apps/contacts/edit/".concat(e.contact._id))}},a.createElement(h.G,{icon:"user-pen"})),null!=e.onDelete?a.createElement(i.ZP,{item:!0,xs:3,className:t.expandoItem,onClick:e.onDelete},a.createElement(h.G,{icon:"user-minus"})):null))))}}}]);