(this.webpackJsonpprzepisy=this.webpackJsonpprzepisy||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),i=(n(82),n(6)),j=function(e){var t=e.text;return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:t})})},o=n(36),u=n.n(o),b=n(50),d=n(52),h=(n(84),n(130)),l=n(49),O=function(){var e=[],t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!0),j=Object(d.a)(s,2),o=j[0],O=j[1],x=Object(c.useState)(!1),p=Object(d.a)(x,2),f=p[0],m=p[1];Object(c.useEffect)((function(){v()}),[]);var v=function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/cakes.json").then(function(){var t=Object(b.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!1),t.t0=Object,t.next=4,n.json();case 4:t.t1=t.sent,e=t.t0.keys.call(t.t0,t.t1),a(e);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){m(!0),console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();switch(!0){case o:return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"\u0141adowanie"})});case f:return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"B\u0142\u0105d!"})});default:return Object(i.jsx)("div",{children:Object(i.jsx)(h.b,{bordered:!0,dataSource:r.map((function(e){return Object(i.jsx)(l.b,{to:{pathname:e},children:e})})),renderItem:function(e){return Object(i.jsx)(h.b.Item,{children:e})}})})}},x=n(18),p=n(132),f=n(131),m=n(133),v=n(104),w=n(136),k=n(135),z=function(e){var t=e.data;return Object(i.jsx)(h.b,{dataSource:t.map((function(e){return Object(i.jsx)(k.a,{children:e})})),renderItem:function(e){return Object(i.jsx)(h.b.Item,{children:e})}})},g=p.a.Panel,y=["nijakie \ud83d\ude15","zwyk\u0142e \ud83d\ude44","smaczne \ud83d\udc4d","dobre \ud83d\ude03","Glamour! \ud83d\ude0a"],S=function(){var e=decodeURI(Object(x.f)().pathname).replace("/",""),t=Object(c.useState)({name:"",source:"",rating:2,ingredients:[""],tools:[""],actions:[""]}),n=Object(d.a)(t,2),r=n[0],a=n[1],s=function(){var t=Object(b.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/naumowicz/przepisy/main/recipes/cakes.json");case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,Object.keys(c).forEach(function(){var t=Object(b.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==e){t.next=9;break}return t.next=3,fetch(c[n]);case 3:return r=t.sent,t.t0=a,t.next=7,r.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(i.jsxs)("div",{className:"recipe",children:[Object(i.jsx)(l.b,{to:"/",children:Object(i.jsx)(f.a,{size:"large",block:!0,children:"Powr\xf3t"})}),Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:r.name})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"\u0179r\xf3d\u0142o:"}),Object(i.jsx)("a",{href:r.source,target:"_blank",rel:"noreferrer",children:r.source})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Ocena"}),Object(i.jsxs)("span",{children:[Object(i.jsx)(m.a,{tooltips:y,disabled:!0,value:r.rating}),r.rating?Object(i.jsx)("span",{className:"ant-rate-text",children:y[r.rating-1]}):Object(i.jsx)("span",{className:"ant-rate-text",children:y[1]}),Object(i.jsx)("span",{children:Object(i.jsx)(v.a,{title:"Oceny wystawiane s\u0105 surowo. 5 gwiazdek oznacza przepis za milion dolar\xf3w, natomiast zwyk\u0142e mo\u017cna ocenia\u0107 tak jak schabowe na obiad.",children:Object(i.jsx)(w.a,{})})})]})]}),Object(i.jsxs)(p.a,{defaultActiveKey:["1","2","3"],children:[Object(i.jsx)(g,{header:"Sk\u0142adniki",children:Object(i.jsx)(z,{data:r.ingredients})},"1"),Object(i.jsx)(g,{header:"Narz\u0119dzia",children:Object(i.jsx)(z,{data:r.tools})},"2"),Object(i.jsx)(g,{header:"Przepis",children:Object(i.jsx)(z,{data:r.actions})},"3")]})]})},I=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{text:"Lista przepis\xf3w"}),Object(i.jsx)(l.a,{children:Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/",children:Object(i.jsx)(O,{})}),Object(i.jsx)(x.a,{exact:!0,path:"/przepisy",children:Object(i.jsx)(O,{})}),Object(i.jsx)(x.a,{path:"/*",children:Object(i.jsx)(S,{})})]})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),F()},82:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.c199e73f.chunk.js.map