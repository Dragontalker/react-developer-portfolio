(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(15),i=c.n(s),a=(c(22),c(1)),j=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:"The Dojo Blog"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)("a",{href:"/",children:"Home"}),Object(a.jsx)("a",{href:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Blog"})]})]})},o=function(e){var t=e.blogs;return Object(a.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(a.jsxs)("div",{className:"blog-preview",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("p",{children:["Written by ",e.author]})]},e.id)}))})},l=c(9),d=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),a=Object(l.a)(i,2),j=a[0],o=a[1],d=Object(n.useState)(null),b=Object(l.a)(d,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){setTimeout((function(){fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){o(!1),s(e),u(null)})).catch((function(e){o(!1),u(e.message)}))}),1e3)}),[e]),{data:r,isPending:j,error:h}},b=function(){var e=d("http://localhost:3000/blogs"),t=e.error,c=e.isPending,n=e.data;return Object(a.jsxs)("div",{className:"home",children:[t&&Object(a.jsx)("div",{children:t}),c&&Object(a.jsx)("div",{children:"Loading..."}),n&&Object(a.jsx)(o,{blogs:n})]})},h=c(16),u=c(2);var O=function(){return Object(a.jsx)(h.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(u.c,{children:Object(a.jsx)(u.a,{path:"/",children:Object(a.jsx)(b,{})})})})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9035aac4.chunk.js.map