(this.webpackJsonpprzepisy=this.webpackJsonpprzepisy||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),i=(n(82),n(6)),j=function(e){var t=e.text;return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:t})})},o=n(36),u=n.n(o),d=n(50),b=n(52),h=(n(84),n(130)),l=n(49),O=["https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/",".json"],x=function(e){var t=e.recipeType,n=[],r=Object(c.useState)([]),a=Object(b.a)(r,2),s=a[0],j=a[1],o=Object(c.useState)(!0),x=Object(b.a)(o,2),p=x[0],f=x[1],m=Object(c.useState)(!1),v=Object(b.a)(m,2),w=v[0],k=v[1];Object(c.useEffect)((function(){z()}),[]);var z=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(O[0]).concat(t).concat(O[1])).then(function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),e.t0=Object,e.next=4,t.json();case 4:e.t1=e.sent,n=e.t0.keys.call(e.t0,e.t1),j(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){k(!0),console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(!0){case p:return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"\u0141adowanie"})});case w:return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"B\u0142\u0105d!"})});default:return Object(i.jsx)("div",{children:Object(i.jsx)(h.b,{bordered:!0,dataSource:s.map((function(e){return Object(i.jsx)(l.b,{to:{pathname:e},children:e})})),renderItem:function(e){return Object(i.jsx)(h.b.Item,{children:e})}})})}},p=["cakes","desserts"],f=["Ciasta","Desery"],m=function(){return Object(i.jsx)("div",{children:p.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:f[t]}),Object(i.jsx)(x,{recipeType:e})]})}))})},v=n(18),w=n(132),k=n(131),z=n(133),y=n(104),g=n(136),S=n(135),I=function(e){var t=e.data;return Object(i.jsx)(h.b,{dataSource:t.map((function(e){return Object(i.jsx)(S.a,{children:e})})),renderItem:function(e){return Object(i.jsx)(h.b.Item,{children:e})}})},F=w.a.Panel,P=["nijakie \ud83d\ude15","zwyk\u0142e \ud83d\ude44","smaczne \ud83d\udc4d","dobre \ud83d\ude03","Glamour! \ud83d\ude0a"],C=function(){var e=decodeURI(Object(v.f)().pathname).replace("/przepisy/","").replace("/",""),t=Object(c.useState)({name:"",source:"",rating:2,ingredients:[""],tools:[""],actions:[""]}),n=Object(b.a)(t,2),r=n[0],a=n[1],s=function(){var t=Object(d.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/cakes.json");case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,Object.keys(c).forEach(function(){var t=Object(d.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==e){t.next=9;break}return t.next=3,fetch(c[n]);case 3:return r=t.sent,t.t0=a,t.next=7,r.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(i.jsxs)("div",{className:"recipe",children:[Object(i.jsx)(l.b,{to:"/",children:Object(i.jsx)(k.a,{size:"large",block:!0,children:"Powr\xf3t"})}),Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:r.name})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"\u0179r\xf3d\u0142o: "}),Object(i.jsx)("a",{href:r.source,target:"_blank",rel:"noreferrer",children:r.source})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:"Ocena: "}),Object(i.jsx)(z.a,{tooltips:P,disabled:!0,value:r.rating}),r.rating?Object(i.jsx)("span",{className:"ant-rate-text",children:P[r.rating-1]}):Object(i.jsx)("span",{className:"ant-rate-text",children:P[1]}),Object(i.jsx)("span",{children:Object(i.jsx)(y.a,{title:"Oceny wystawiane s\u0105 surowo. 5 gwiazdek oznacza przepis za milion dolar\xf3w, natomiast 2 gwiazdki (zwyk\u0142e) mo\u017cna ocenia\u0107 tak jak schabowe na obiad.",children:Object(i.jsx)(g.a,{})})})]})}),Object(i.jsxs)(w.a,{defaultActiveKey:["1","2","3"],children:[Object(i.jsx)(F,{header:"Sk\u0142adniki",children:Object(i.jsx)(I,{data:r.ingredients})},"1"),Object(i.jsx)(F,{header:"Narz\u0119dzia",children:Object(i.jsx)(I,{data:r.tools})},"2"),Object(i.jsx)(F,{header:"Przepis",children:Object(i.jsx)(I,{data:r.actions})},"3")]})]})},E=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{text:"Lista przepis\xf3w"}),Object(i.jsx)(l.a,{children:Object(i.jsxs)(v.c,{children:[Object(i.jsx)(v.a,{exact:!0,path:"/",children:Object(i.jsx)(m,{})}),Object(i.jsx)(v.a,{exact:!0,path:"/przepisy",children:Object(i.jsx)(m,{})}),Object(i.jsx)(v.a,{path:"/*",children:Object(i.jsx)(C,{})})]})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),N()},82:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.fa7cbd12.chunk.js.map