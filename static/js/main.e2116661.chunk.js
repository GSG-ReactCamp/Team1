(this.webpackJsonpantdesign=this.webpackJsonpantdesign||[]).push([[0],{120:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=(n(120),n(61)),o=n(18),j=n(153),l=n(157),u=(n(97),n(7));function h(){return Object(u.jsxs)(l.a,{theme:"dark",mode:"horizontal ",style:{margin:"0 auto",textAlign:"center",width:"fit-content"},children:[Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(i.b,{to:"/",children:"Home"})},"home"),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(i.b,{to:"/search",children:"Search"})},"search"),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)(i.b,{to:"/education",children:"Education"})},"education")]})}function b(){return Object(u.jsx)(u.Fragment,{children:"Im Education"})}var d=n(86),O=n(113),f=n(47),x=n(155),p=n(112),v=n(158),g=n(159),m=n(154),y=n(156);function C(){return fetch("https://api.quarantine.country/api/v1/summary/latest").then((function(e){return e.json()})).then((function(e){return e.data}))}var S=x.a.Option;function k(){var e=Object(c.useState)(null),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(f.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)([]),l=Object(f.a)(j,2),h=l[0],b=l[1],k=Object(c.useState)(null),E=Object(f.a)(k,2),I=E[0],_=E[1];return Object(c.useEffect)((function(){return C().then((function(e){o(Object(d.a)({},e))})).then((function(){return function(){var e=[];return fetch("https://api.quarantine.country/api/v1/regions").then((function(e){return e.json()})).then((function(t){return t.data.forEach((function(t){e[t.name]=t.key}))})).then((function(){return e.Palestine="palestine",e}))}()})).then((function(e){var t=function(e){var t=Object.entries(e);return Object(O.a)(t.map((function(e){return Object(u.jsx)(S,{value:e[1],children:e[0]},e[1])})))}(e);b(t),a(Object(d.a)({},e))})).catch((function(){p.a.open({message:"Error",description:"It seems that your connection is unstable. Try again later"})})),function(){}}),[]),Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsx)(x.a,{showSearch:!0,style:{width:200},placeholder:"Select a Country",optionFilterProp:"children",onChange:function(e){var t=i.regions[e]?i.regions[e]:null;_(Object(d.a)({},t))},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:h}),I&&Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Total Cases",value:I.total_cases})}),Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Active Cases",value:I.active_cases})})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Deaths",value:I.deaths})}),Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Recoverd",value:I.recovered})})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(y.a,{type:"circle",percent:Math.floor(1e3*I.death_ratio)/10,strokeColor:"#ff4f51"})}),Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(y.a,{type:"circle",percent:Math.floor(1e3*I.recovery_ratio)/10,strokeColor:"#52c41a"})})]})]})]})}function E(){var e=Object(c.useState)(null),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=[],t=[],n="CHN";return function(){var e=[];return fetch("https://api.quarantine.country/api/v1/regions").then((function(e){return e.json()})).then((function(t){return t.data.forEach((function(t){e[t.iso3166a2]=t.key}))})).then((function(){return e.PS="palestine",e}))}().then((function(t){e=t})),fetch("https://get.geojs.io/v1/ip/country.json").then((function(e){return e.json()})).then((function(e){return e.country})).then((function(e){return n=e,C()})).then((function(e){t=e})).then((function(){a(t.regions[e[n]])})).catch((function(){p.a.open({message:"Error",description:"It seems that your connection is unstable. Try Uses Search Page"})})),function(){}}),[]),n&&Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsxs)("h1",{children:["People of"," ",n.name]}),Object(u.jsx)("h1",{children:"You Are Welcome"}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Total Cases",value:n.total_cases})}),Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Active Cases",value:n.active_cases})})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Deaths",value:n.deaths})}),Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(m.a,{title:"Recoverd",value:n.recovered})})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(y.a,{type:"circle",percent:Math.floor(1e3*n.death_ratio)/10,strokeColor:"#ff4f51"})}),Object(u.jsx)(g.a,{span:12,children:Object(u.jsx)(y.a,{type:"circle",percent:Math.floor(1e3*n.recovery_ratio)/10,strokeColor:"#52c41a"})})]})]})}n(150);var I=j.a.Content;var _=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.a,{className:"layout",children:[Object(u.jsx)(I,{style:{padding:"50px 50px"},children:Object(u.jsx)("div",{className:"site-layout-content",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:E}),Object(u.jsx)(o.a,{path:"/search",component:k}),Object(u.jsx)(o.a,{path:"/education",component:b})]})})}),Object(u.jsx)(h,{style:{textAlign:"center"}})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),w()}},[[151,1,2]]]);
//# sourceMappingURL=main.e2116661.chunk.js.map