(this.webpackJsonpdisboard=this.webpackJsonpdisboard||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(3),a=r.n(s),i=(r(11),r(12),r(6)),u=r(4),j=r.n(u),o=r(5),d=r.n(o),b=r(0);function l(){var e=Object(c.useState)("start"),t=Object(i.a)(e,2),r=t[0],n=t[1],s=Object(c.useRef)(null);Object(c.useEffect)((function(){s.current=new d.a}),[]);return Object(b.jsxs)("div",{className:"Game",children:[Object(b.jsx)("header",{className:"Game-header",children:s.current&&s.current.game_over()?Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("h1",{children:"Game Over"}),Object(b.jsx)("button",{onClick:function(){s.current.clear(),s.current.reset(),n("start")},children:"Play Again"})," "]}):Object(b.jsx)("span",{})}),Object(b.jsx)(j.a,{position:r,onDrop:function(e){var t=e.sourceSquare,r=e.targetSquare;null!==s.current.move({from:t,to:r})&&n(s.current.fen())}})]})}var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(l,{})})})};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c97bfdaf.chunk.js.map