"use strict";(self.webpackChunkreact_empty=self.webpackChunkreact_empty||[]).push([[529],{6529:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(9439),s=r(2791),c=r(9740),l=r(9434),a=r(184),o=(0,s.memo)((function(e){var n=e.displayedProducts,r=(0,l.v9)((function(e){return e.orders.orders}));return(0,a.jsx)(a.Fragment,{children:n.map((function(e){var n=r.find((function(n){return n.id===e.order})),t=n?n.title:"\u0437\u0430\u043a\u0430\u0437 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d";return(0,a.jsxs)(c.Z,{horizontal:!0,className:"Product m-3",children:[(0,a.jsxs)(c.Z.Item,{className:"Product__block",children:[(0,a.jsx)("span",{children:e.title}),(0,a.jsx)("span",{children:e.serialNumber})]}),(0,a.jsxs)(c.Z.Item,{className:"Product__block",children:[(0,a.jsx)("span",{children:"\u0441 ".concat(e.guarantee.start)}),(0,a.jsx)("span",{children:"\u043f\u043e ".concat(e.guarantee.end)})]}),(0,a.jsx)(c.Z.Item,{className:"Product__block",children:e.price.map((function(e){return(0,a.jsxs)("span",{children:[e.value," ",e.symbol]},e.value)}))}),(0,a.jsx)(c.Z.Item,{className:"Product__item",children:t})]},e.id)}))})})),i=r(3053),d=r(3090),u=(0,s.memo)((function(e){var n=e.handleChange,r=e.displayedProducts,t=e.query;return(0,a.jsxs)("div",{className:"SelectBlock",children:[(0,a.jsxs)("h2",{className:"m-3",children:["\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b/ ",r.length]}),(0,a.jsx)(i.Z,{controlId:"floatingSelect",label:"\u0422\u0438\u043f:",children:(0,a.jsxs)(d.Z.Select,{className:"SelectBlock__select",value:t,onChange:n,"aria-label":"type",children:[(0,a.jsx)("option",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f"}),(0,a.jsx)("option",{value:"Monitors",children:"Monitors"}),(0,a.jsx)("option",{value:"Tablet",children:"Tablet"}),(0,a.jsx)("option",{value:"Phone",children:"Phone"})]})})]})})),h=r(7022),m=(0,s.memo)((function(){var e=(0,l.v9)((function(e){return e.products.products})),n=(0,s.useState)(""),r=(0,t.Z)(n,2),c=r[0],i=r[1],d=(0,s.useCallback)((function(e){i(e.target.value)}),[i]),m=e;return c&&(m=e.filter((function(e){return e.type===c}))),(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(u,{handleChange:d,displayedProducts:m,query:c}),(0,a.jsx)(o,{displayedProducts:m})]})}))}}]);
//# sourceMappingURL=529.b48ed165.chunk.js.map