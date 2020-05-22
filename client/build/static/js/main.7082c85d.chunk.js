(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),u=(a(23),a(24),a(3)),o=a(1),i=a(4),m=a.n(i),s=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),s=i[0],p=i[1];Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pirates/").then((function(e){r(e.data),p(!0)}))}),[]);return s?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Pirate Crew"),l.a.createElement("button",{type:"button",onClick:function(e){return Object(u.c)("/pirate/new")}},"Add Pirate")),a.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("img",{src:e.image,alt:e.name,width:"250",height:"400"}),l.a.createElement("h2",null,e.name),l.a.createElement("button",{type:"button",onClick:function(){return Object(u.c)("/pirate/"+e._id)}},"View Pirate"),l.a.createElement("button",{type:"button",onClick:function(){return t=e._id,void m.a.delete("http://localhost:8000/api/pirate/"+t).then((function(){return r(a.filter((function(e){return e._id!==t})))}));var t}},"Walk the Plank"))}))):l.a.createElement("h1",null,"Loading...")},p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],p=i[1],E=Object(n.useState)(0),h=Object(o.a)(E,2),b=h[0],d=h[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),v=g[0],j=g[1],O=Object(n.useState)(""),k=Object(o.a)(O,2),C=k[0],w=k[1],y=Object(n.useState)(!0),P=Object(o.a)(y,2),S=P[0],M=P[1],B=Object(n.useState)(!0),H=Object(o.a)(B,2),L=H[0],A=H[1],N=Object(n.useState)(!0),x=Object(o.a)(N,2),F=x[0],_=x[1],W=Object(n.useState)([]),Y=Object(o.a)(W,2),I=Y[0],J=Y[1],Q=!1;return Q=!a||(!s||(!v||!C)),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Add Pirate"),l.a.createElement("button",{type:"button",onClick:function(){return Object(u.c)("/pirates")}},"Crew Board")),I.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),J([]),m.a.post("http://localhost:8000/api/pirate",{name:a,image:s,chests:b,phrase:v,position:C,pegLeg:S,eyePatch:L,hookHand:F}).then((function(){return Object(u.c)("/pirates")})).catch((function(e){var t=[],a=e.response.data.errors;for(var n in a)t.push(a[n].message);J(t)}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Pirate Name:"),l.a.createElement("input",{name:"name",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Image Url:"),l.a.createElement("input",{name:"image",value:s,onChange:function(e){return p(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"# of Treasure Chests:"),l.a.createElement("input",{type:"number",name:"name",value:b,onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Pirate Catch Phrase:"),l.a.createElement("input",{name:"phrase",value:v,onChange:function(e){return j(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Crew Position:"),l.a.createElement("select",{name:"position",value:C,onChange:function(e){return w(e.target.value)}},l.a.createElement("option",{value:"Captain",defaultValue:!0},"Captain"),l.a.createElement("option",{value:"First Mate"},"First Mate"),l.a.createElement("option",{value:"Quarter Master"},"Quarter Master"),l.a.createElement("option",{value:"Boatswain"},"Boatswain"),l.a.createElement("option",{value:"Powder Monkey"},"Powder Monkey"))),l.a.createElement("div",null,l.a.createElement("label",null,"Peg Leg"),l.a.createElement("input",{type:"checkbox",checked:S,onChange:function(e){return M(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Eye Patch"),l.a.createElement("input",{type:"checkbox",checked:L,onChange:function(e){return A(e.target.checked)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Hook Hand"),l.a.createElement("input",{type:"checkbox",checked:F,onChange:function(e){return _(e.target.checked)}})),l.a.createElement("button",{disabled:Q},"Add Pirate")))},E=function(e){var t=e.id,a=Object(n.useState)(null),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pirate/"+t).then((function(e){return i(e.data)}))}),[t]),null===c?"Loading...":l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:function(){return Object(u.c)("/pirates")}},"Crew Board"),l.a.createElement("h1",null,c.name),l.a.createElement("img",{src:c.image,alt:c.name}),l.a.createElement("h2",null,c.phrase),l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"Position: ",c.position),l.a.createElement("p",null,"Treasures: ",c.chests),l.a.createElement("p",null,"Peg Leg: ",c.pegLeg?"Yes":"No"," "),l.a.createElement("p",null,"Eye Patch: ",c.eyePatch?"Yes":"No"," "),l.a.createElement("p",null,"Hook Hand: ",c.hookHand?"Yes":"No"," "))};var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.b,null,l.a.createElement(u.a,{from:"/",to:"/pirates"}),l.a.createElement(s,{path:"/pirates"}),l.a.createElement(p,{path:"/pirate/new"}),l.a.createElement(E,{path:"/pirate/:id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7082c85d.chunk.js.map