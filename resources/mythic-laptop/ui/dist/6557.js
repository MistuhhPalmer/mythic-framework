"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[6557],{56557:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var r=t(89526),a=(t(92070),t(16743)),o=t(25385),c=t(30919),l=t(50563),i=t(72215),s=t(91153),u=t(77548),d=t(63411),p=t(21722),m=t(71529),f=t(57170),Z=t(21447),v=t(87961);function g(e,n,t,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void t(e)}l.done?n(i):Promise.resolve(i).then(r,a)}var y=(0,m.Z)((function(e){return n={item:{background:e.palette.secondary.dark},positive:{color:e.palette.success.main,fontWeight:"bold"}},t="positive",r={color:e.palette.error.main,fontWeight:"bold"},t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n;var n,t,r}));const b=function(e){var n=e.property,t=e.expanded,m=e.onClick,b=e.onSell,h=y(),w=(0,v.VY)(),k=(0,v.Gt)(),E=((0,v.vM)(),function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.send("Dyn8:MarkProperty",n._id);case 3:return e.next=5,e.sent.json();case 5:t=e.sent,w(t?"GPS Marked":"Unable to Mark GPS"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),w("Unable to Mark GPS");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function c(e){g(o,r,a,c,l,"next",e)}function l(e){g(o,r,a,c,l,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}());return r.createElement(a.Z,{className:h.item,expanded:t,onChange:m},r.createElement(o.Z,{expandIcon:r.createElement(f.G,{icon:["fas","chevron-down"]})},r.createElement(c.Z,{className:h.heading},n.label)),r.createElement(l.Z,null,r.createElement(i.Z,null,r.createElement(s.ZP,null,r.createElement(u.Z,{primary:"Address",secondary:n.label})),r.createElement(s.ZP,null,r.createElement(u.Z,{primary:"Sold",secondary:n.sold?"Yes":"No"})),r.createElement(s.ZP,null,r.createElement(u.Z,{primary:"Home Owner",secondary:Boolean(n.owner)?"".concat(n.owner.First," ").concat(n.owner.Last):"No Owner"})))),r.createElement(d.Z,null,!n.sold&&r.createElement(p.Z,{onClick:E},"Mark Property"),!n.sold&&k("JOB_SELL","realestate")&&r.createElement(p.Z,{onClick:function(){return b(n)}},"Sell Property")))}},63411:(e,n,t)=>{t.d(n,{Z:()=>Z});var r=t(71972),a=t(17692),o=t(89526),c=t(23060),l=t(82082),i=t(47671),s=t(26966),u=t(24989);function d(e){return(0,u.Z)("MuiAccordionActions",e)}(0,t(36787).Z)("MuiAccordionActions",["root","spacing"]);var p=t(67557);const m=["className","disableSpacing"],f=(0,i.ZP)("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})((({ownerState:e})=>(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}))),Z=o.forwardRef((function(e,n){const t=(0,s.Z)({props:e,name:"MuiAccordionActions"}),{className:o,disableSpacing:i=!1}=t,u=(0,r.Z)(t,m),Z=(0,a.Z)({},t,{disableSpacing:i}),v=(e=>{const{classes:n,disableSpacing:t}=e,r={root:["root",!t&&"spacing"]};return(0,l.Z)(r,d,n)})(Z);return(0,p.jsx)(f,(0,a.Z)({className:(0,c.Z)(v.root,o),ref:n,ownerState:Z},u))}))}}]);