(this["webpackJsonpcrud-firebase"]=this["webpackJsonpcrud-firebase"]||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(18),s=n.n(c),i=(n(24),n(19)),o=n(7),u=n.n(o),l=n(14),b=n(12),d=n(10),p=n(16);n(29);p.a.initializeApp({apiKey:"AIzaSyBtUTaZP6s5TYHEv9M6OVaVBrTg2Pl7YcI",authDomain:"udemy-firebase-3c134.firebaseapp.com",projectId:"udemy-firebase-3c134",storageBucket:"udemy-firebase-3c134.appspot.com",messagingSenderId:"945673753158",appId:"1:945673753158:web:e5795579edb03476c3b047"});var f=n(2);var j=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(d.a)(c,2),o=s[0],j=s[1],m=Object(a.useState)(!1),h=Object(d.a)(m,2),O=h[0],v=h[1],x=Object(a.useState)(""),g=Object(d.a)(x,2),k=g[0],w=g[1],y=Object(a.useState)(""),N=Object(d.a)(y,2),S=N[0],I=N[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=p.a.firestore(),e.next=4,t.collection("tareas").get();case 4:n=e.sent,a=n.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})),r(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o.trim()){e.next=4;break}return console.log("vacio"),e.abrupt("return");case 4:return e.prev=4,a=p.a.firestore(),c={name:o,fecha:Date.now()},e.next=9,a.collection("tareas").add(c);case 9:s=e.sent,r([].concat(Object(i.a)(n),[Object(l.a)(Object(l.a)({},c),{},{id:s.id})])),j(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:console.log(o);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=p.a.firestore(),e.next=4,a.collection("tareas").doc(t).delete();case 4:c=n.filter((function(e){return e.id!==t})),r(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.trim()){e.next=3;break}return v(!1),e.abrupt("return");case 3:return e.prev=3,t=p.a.firestore(),e.next=7,t.collection("tareas").doc(k).update({name:S});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:console.log("guardar tarea"),a=n.map((function(e){return e.id===k?{id:e.id,fecha:e.fecha,name:S}:e})),r(a),v(!1),w(""),I("");case 18:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"container mt-3",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-6",children:[Object(f.jsx)("h3",{children:"Lista tareas"}),Object(f.jsx)("ul",{className:"list-group",children:n.map((function(e){return Object(f.jsxs)("li",{className:"list-group-item",children:[O&&e.id===k?Object(f.jsx)("input",{type:"text",onChange:function(e){return function(e){I(e)}(e.target.value)},placeholder:e.name,value:S}):e.name,Object(f.jsx)("button",{className:"btn btn-danger btn-sm float-right",onClick:function(){return E(e.id)},children:"Eliminar"}),O&&e.id===k?Object(f.jsx)("button",{className:"btn btn-success mx-2 btn-sm float-right",onClick:function(){return T()},children:"Guardar"}):Object(f.jsx)("button",{className:"btn btn-warning mx-2 btn-sm float-right",onClick:function(t){return function(e){v(!0),w(e),console.log("modo ediccion")}(e.id)},children:"Editar"})]},e.id)}))})]}),Object(f.jsxs)("div",{className:"col-md-6",children:[Object(f.jsx)("h3",{children:"Agregar Tarea"}),Object(f.jsxs)("form",{onSubmit:C,children:[Object(f.jsx)("input",{type:"text",placeholder:"Ingrese tarea",className:"form-control mb-2",onChange:function(e){return j(e.target.value)},value:o}),Object(f.jsx)("button",{className:"btn btn-dark btn-block",type:"submit",children:"Agregar Tarea"})]})]})]})})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8542c4cd.chunk.js.map