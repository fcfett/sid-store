(this["webpackJsonpsid-store"]=this["webpackJsonpsid-store"]||[]).push([[0],{27:function(e,t,n){e.exports=n(62)},32:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),l=n.n(c),o=(n(32),n(33),n(3)),i=n(1),u=n(12),s=n.n(u),d=n(13),f=n.n(d),m=function(){return"\u2013"},v=function(e){return JSON.parse(JSON.stringify(e))},h=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},p=function(e,t){return e>t?1:e<t?-1:0},g=function(e,t){return e<t?1:e>t?-1:0},b=function(e){return Math.max.apply(Math,e)},y=function(e){return e.slice().sort((function(t,n){return e.filter((function(e){return e===t})).length-e.filter((function(e){return e===n})).length})).pop()},O=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Array.isArray(e)?e.sort((function(e,a){return(n?p:g)(e[t],a[t])})):e},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=f.a.get(e);if(!n)return null;if(0===t.length)return n;var a={},r=!0,c=!1,l=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u=o.value;a[u]=n[u]}}catch(s){c=!0,l=s}finally{try{r||null==i.return||i.return()}finally{if(c)throw l}}return a},j=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=E(e),a=n||{},r=0,c=Object.entries(t);r<c.length;r++){var l=c[r],o=Object(i.a)(l,2),u=o[0],s=o[1];a[u]=s}return f.a.set(e,a),a},S=function(e,t){var n,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({loaded:!1}),r.next=4,s.a.awrap(e());case 4:n=r.sent,a=n.data,t({data:a}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0);case 12:return r.prev=12,t({loaded:!0}),r.finish(12);case 15:case"end":return r.stop()}}),null,null,[[0,9,12,15]])},k=h,w=m,C={visible:!1,title:"Aten\xe7\xe3o",message:null,content:null,confirm:{label:"Confirmar",action:null},cancel:{label:"Cancelar",action:null}},T=function(){return v(C)},N=Object(a.createContext)(),x=function(e){var t=e.children,n=Object(a.useState)(C),c=Object(i.a)(n,2),l=c[0],u=c[1],s={state:l,setState:function(e){return u((function(t){return Object(o.a)({},t,{},e)}))}};return r.a.createElement(N.Provider,{value:s},t)},z=n(26),D=n.n(z).a.create({baseURL:"http://www.mocky.io/v2/"}),M=function(e){return D.get("/5de67e9f370000540009242b")},I=function(e){return D.get("/5de687643700005f00092463")},P={data:[],loaded:!0},R=Object(a.createContext)(),$=function(e){var t=e.children,n=Object(a.useState)(function(){var e=E("sid-store-clients");return e||P}()),c=Object(i.a)(n,2),l=c[0],u=c[1],s=function(e){return u((function(t){return Object(o.a)({},t,{},e)}))},d={state:l,setState:s};return Object(a.useEffect)((function(){!function(e){j("sid-store-clients",e)}(l)}),[l]),Object(a.useEffect)((function(){0===l.data.length&&S(M,s)}),[]),r.a.createElement(R.Provider,{value:d},t)},A={data:[],loaded:!0},F=Object(a.createContext)(),V=function(e){var t=e.children,n=Object(a.useState)(function(){var e=E("sid-store-history");return e||A}()),c=Object(i.a)(n,2),l=c[0],u=c[1],s=function(e){return u((function(t){return Object(o.a)({},t,{},e)}))},d={state:l,setState:s};return Object(a.useEffect)((function(){!function(e){j("sid-store-history",e)}(l)}),[l]),Object(a.useEffect)((function(){0===l.data.length&&S(I,s)}),[]),r.a.createElement(F.Provider,{value:d},t)},B={data:[],loaded:!0},J=Object(a.createContext)(),L=function(e){var t=e.children,n=Object(a.useState)(function(){var e=E("sid-store-data");return e||B}()),c=Object(i.a)(n,2),l=c[0],u=c[1],s=function(e){return u((function(t){return Object(o.a)({},t,{},e)}))},d={state:l,setState:s};Object(a.useEffect)((function(){!function(e){j("sid-store-data",e)}(l)}),[l]);var f=Object(a.useContext)(R).state,m=Object(a.useContext)(F).state,v=l.loaded&&l.data.length>0,h=f.loaded&&f.data.length>0,p=m.loaded&&m.data.length>0;Object(a.useEffect)((function(){v||s({loaded:!1})}),[]);return Object(a.useEffect)((function(){if(!v&&h&&p){var e=function(e){var t=e.reduce((function(e,t){return e.maiorCompra2019Valor>t.maiorCompra2019Valor?e:t})),n=e.reduce((function(e,t){return e.maiorCompra2019Volume>t.maiorCompra2019Volume?e:t}));return e.forEach((function(e){e.id===t.id&&(e.maiorValor=!0),e.id===n.id&&(e.maiorVolume=!0)})),e}(function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,i=function(){var e=l.value,a=t.data.filter((function(t){return+t.cliente.replace(/\./g,"")===e.id})),r=a.reduce((function(e,t){return e+t.valorTotal}),0),c=a.filter((function(e){return e.data.includes("2018")})),i=a.filter((function(e){return e.data.includes("2019")})),u=c.length,s=b(i.map((function(e){return e.valorTotal}))),d=b(i.map((function(e){return e.itens.length}))),f=y(a.flatMap((function(e){return e.itens.map((function(e){return e.produto}))})));n.push(Object(o.a)({},e,{historico:a,valorTotal:r,quantidadeCompras2018:u,maiorCompra2019Valor:s,maiorCompra2019Volume:d,recomendacao:f}))},u=e.data[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)i()}catch(s){r=!0,c=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw c}}return n}(f,m));s({loaded:!0,data:e})}}),[f,m]),r.a.createElement(J.Provider,{value:d},t)},G=function(e){var t=e.children;return r.a.createElement($,null,r.a.createElement(V,null,r.a.createElement(L,null,r.a.createElement(x,null,t))))};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.a.createElement("path",{d:"M22.82 0c-1.4 0-2.77.12-4.11.35-1.28.23-2.45.58-3.5 1.05-.99.4-1.8.96-2.45 1.66a3.6 3.6 0 00-.87 2.36c0 .64.2 1.14.61 1.49.41.29.82.43 1.23.43.4 0 .87-.11 1.4-.35l2-1.13c.82-.41 1.55-.67 2.2-.79.7-.17 1.45-.26 2.27-.26 1.04 0 2.41.29 4.1.87 1.75.59 3.62 1.78 5.6 3.59a26.05 26.05 0 00-4.46 6.64 17.48 17.48 0 00-1.66 7.43c0 1.34.03 2.5.09 3.5.05 1 .14 1.92.26 2.8a41.72 41.72 0 00-9.53 3.5 36.9 36.9 0 00-8.13 5.68 28.08 28.08 0 00-5.77 7.43A18.78 18.78 0 000 54.91c0 1.74.38 3.29 1.14 4.63a9.52 9.52 0 003.14 3.32c1.4.88 3.03 1.55 4.9 2.01 1.92.47 4.02.7 6.3.7 4.25 0 8.16-.79 11.71-2.36a32.7 32.7 0 009.36-6.03c2.62-2.5 4.66-5.3 6.12-8.4a21.43 21.43 0 002.27-9.35c0-.82-.06-1.6-.18-2.36-.11-.82-.47-3-1.26-5.16-1.29-3.5-2.12-5.56-2.58-6.73a9.44 9.44 0 01-.7-3.32c0-.94.06-1.84.17-2.71.12-.94.32-1.81.61-2.63a17 17 0 007.52 1.58c1.46 0 2.92-.26 4.37-.79a12.42 12.42 0 006.91-5.86 10.45 10.45 0 001.14-4.9c0-2.15-.85-3.78-2.54-4.89C56.77.56 54.61 0 51.93 0c-2.8 0-5.56.4-8.3 1.22a26.45 26.45 0 00-7.6 3.76 22.67 22.67 0 00-6.22-3.76 18.72 18.72 0 00-7-1.22zM51.5 6.56c.81 0 1.42.23 1.83.7.47.46.7 1.02.7 1.66 0 .4-.17.84-.52 1.3-.3.42-.67.8-1.14 1.15-.47.35-1 .64-1.57.87-.59.23-1.17.35-1.75.35-.93 0-1.84-.12-2.71-.35-.82-.3-1.63-.67-2.45-1.14 1.05-1.4 2.24-2.5 3.58-3.32a7.68 7.68 0 014.03-1.22zm19.24 15.36l-3.97 8.83a3.3 3.3 0 00-1.53-.32c-1.01 0-2.03.41-3.04 1.24-1.02.82-1.97 2.18-2.84 4.1l-.46.98a9.6 9.6 0 00-.61 1.72c-.13.5-.2.92-.2 1.28 0 .75.23 1.3.68 1.66.46.34 1 .5 1.63.5.4 0 .74 0 1.05-.04a4.55 4.55 0 001.47-.43c.21-.1.42-.24.61-.4.13.25.28.46.46.64.2.16 1.87.39 2.59-1.36 2.09-5.12 7.67-18.4 7.67-18.4zm-11.48.7a4.8 4.8 0 00-2.58.79c-.36.24-.65.52-.88.85-.22.3-.33.62-.33.94 0 .4.2.73.6.97.43.22.9.33 1.43.33a5.43 5.43 0 002.46-.67c.38-.22.7-.48.94-.78.26-.33.4-.68.4-1.06 0-.43-.22-.76-.64-1-.4-.25-.87-.37-1.4-.37zm.37 5.08l-5.6.36-5.78 12.57h-1.38l-.83 1.85h1.42l-5.24 11.36c-.13.26-.23.54-.3.82-.04.27-.06.5-.06.7 0 .63.2 1.18.63 1.64.44.47 1.03.7 1.77.7.88 0 1.84-.18 2.87-.53a16.4 16.4 0 002.97-1.35c.52-.32 1-.65 1.46-1l-.01.24c0 .81.32 1.46.95 1.94.64.47 1.76.7 3.37.7 1 0 1.94-.1 2.8-.27.85-.2 1.66-.59 2.4-1.18.77-.6 1.5-1.46 2.21-2.6.7-1.15 1.43-2.68 2.18-4.59a7.74 7.74 0 001.74.17c1 0 1.8-.2 2.4-.6a4.39 4.39 0 001.59-1.87l1.05.62c.22.13.38.23.47.3.1.04.16.1.16.2a3 3 0 01-.2.72c-.13.35-.43.96-.89 1.81l-.69 1.36-.63 1.38c-.17.44-.33.87-.46 1.28-.1.4-.16.74-.16 1.03 0 .7.2 1.25.6 1.64.39.4.98.6 1.77.6.88 0 1.84-.18 2.87-.53a15.2 15.2 0 004.75-2.59l-.02.35c0 .61.12 1.1.36 1.48.24.35.6.63 1.06.83.46.2 1.02.31 1.68.36.68.06 1.46.1 2.34.1 1.62 0 3.06-.23 4.31-.7 1.26-.46 2.5-1.14 3.76-2.04a9.84 9.84 0 001.75-1.48c.48-.53.84-1.05 1.09-1.55l-1.03-1.29c-.37.66-.9 1.28-1.58 1.85a12.32 12.32 0 01-7.74 2.87c-.82 0-1.22-.3-1.22-.9 0-.26.06-.59.2-.98.15-.42.36-.91.62-1.48a23.85 23.85 0 004.22-.56c.73-.18 1.38-.41 1.98-.7.61-.3 1.1-.69 1.45-1.15.5-.66.83-1.34.99-2.04.17-.7.26-1.33.26-1.88 0-.33-.07-.63-.2-.9a1.39 1.39 0 00-.62-.65c-.31-.18-.75-.3-1.32-.4-.55-.1-1.25-.16-2.11-.16-1.12 0-2.1.09-2.93.26a6 6 0 00-3.79 2.4c-.46.62-.9 1.38-1.29 2.28l-1.1 2.47c-.17.26-.39.54-.66.83-.4.4-.85.77-1.36 1.12-.48.35-.97.65-1.48.89-.48.22-.91.33-1.28.33-.36 0-.53-.16-.53-.46 0-.36.1-.77.3-1.26.2-.5.41-1 .65-1.48.27-.5.5-.97.7-1.38.2-.44.3-.8.3-1.06 0-.17-.08-.37-.24-.6a1.83 1.83 0 00-.69-.65l-6.72-4.05-.56 1.22c-.2.4-.43.75-.7 1.08-.26.33-.54.6-.85.83-.31.2-.64.3-.99.3h-.3a6.06 6.06 0 00-.3-.07c.4-.86.6-1.6.6-2.21 0-.57-.18-1.01-.53-1.32-.35-.3-.9-.46-1.65-.46-1.16 0-2.14.36-2.93 1.09a8.35 8.35 0 00-1.35-.1 5.42 5.42 0 00-3.53 1.15c-.52.4-1.04.94-1.54 1.62-.49.68-.96 1.51-1.42 2.5l-1.1 2.4a7.2 7.2 0 01-.52.6 10.03 10.03 0 01-2.93 2.08c-.5.24-.96.36-1.35.36-.22 0-.33-.09-.33-.26 0-.14.05-.31.16-.53l5.1-11h1.5l.82-1.85h-1.49zm5.94 4.55c.21 0 .37.08.45.22l-3.05 6.8c-.25.55-.57.83-.96.83-.22 0-.32-.13-.32-.38 0-.16.07-.38.21-.67l2.62-5.97c.15-.32.3-.53.46-.64a1 1 0 01.59-.19zm-38.12 4.47c.35 1.17.64 2.19.88 3.06.23.82.4 1.57.52 2.27.18.7.26 1.34.26 1.93.06.58.1 1.16.1 1.75 0 1.22-.27 2.62-.8 4.2a15.66 15.66 0 01-2.36 4.45 14.1 14.1 0 01-4.02 3.58c-1.57.94-3.44 1.4-5.6 1.4a4.32 4.32 0 01-3.58-1.66 6.52 6.52 0 01-1.31-4.02c0-2.16.44-4.1 1.31-5.86a16.7 16.7 0 013.5-4.8 25.71 25.71 0 015.16-3.68 38.42 38.42 0 015.94-2.62zm36.62 7.83c.2 0 .33.08.4.23.09.13.13.3.13.53 0 .17-.03.35-.1.52-.04.18-.1.32-.16.43-.7 0-1.06-.32-1.06-.95 0-.5.26-.76.8-.76zm24.87 1.32c.42 0 .62.14.62.42a4.13 4.13 0 01-.98 2.7c-.31.36-.68.64-1.12.86-.42.22-.87.36-1.35.4l1.44-3.1c.25-.53.47-.87.66-1.02.22-.18.47-.26.73-.26zm-28.43.03a2.59 2.59 0 00.1 1.28c.11.25.28.43.5.56l-3.07 6.92c-.13.31-.33.55-.6.73a1.3 1.3 0 01-.68.23c-.38 0-.56-.2-.56-.63 0-.2.05-.41.16-.65l3.03-6.92c.2-.49.36-.83.5-1.03.15-.22.36-.38.62-.49z"}),H=function(e){var t=e.svgRef,n=e.title,a=W(e,["svgRef","title"]);return r.a.createElement("svg",U({viewBox:"0 0 96.16 65.57",ref:t},a),n?r.a.createElement("title",null,n):null,_)},q=r.a.forwardRef((function(e,t){return r.a.createElement(H,U({svgRef:t},e))}));n.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var K=r.a.createElement("path",{d:"M11 0c-.67 0-1.24.56-1.24 1.23v8.53H1.23C.55 9.76 0 10.33 0 11s.56 1.24 1.23 1.24h8.53v8.53c0 .68.57 1.23 1.24 1.23s1.24-.56 1.24-1.23v-8.53h8.53c.68 0 1.23-.57 1.23-1.24s-.56-1.24-1.23-1.24h-8.53V1.23C12.24.55 11.67 0 11 0z"}),X=function(e){var t=e.svgRef,n=e.title,a=Z(e,["svgRef","title"]);return r.a.createElement("svg",Q({viewBox:"0 0 22 22",ref:t},a),n?r.a.createElement("title",null,n):null,K)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(X,Q({svgRef:t},e))}));n.p;function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ne=r.a.createElement("path",{d:"M8.17 0A8.18 8.18 0 0 0 0 8.17c0 4.5 3.67 8.17 8.17 8.17 2.07 0 3.96-.8 5.4-2.08l1.28 1.28c-.54.86-.45 2.03.3 2.78l3.03 3.03c.86.87 2.3.87 3.16 0h.01c.87-.87.87-2.3 0-3.18l-3.03-3.02a2.26 2.26 0 0 0-2.8-.3l-1.26-1.27a8.13 8.13 0 0 0 2.07-5.41c0-4.5-3.67-8.17-8.16-8.17zm0 1.92a6.23 6.23 0 0 1 6.24 6.25 6.23 6.23 0 0 1-6.24 6.25 6.23 6.23 0 0 1-6.25-6.25 6.23 6.23 0 0 1 6.25-6.25zm0 .96a5.3 5.3 0 0 0-5.29 5.29.48.48 0 1 0 .96 0c0-2.4 1.93-4.33 4.33-4.33a.48.48 0 1 0 0-.96zm8.58 13.53c.07 0 .15.03.22.1l3.02 3.02a.3.3 0 0 1 0 .45V20a.3.3 0 0 1-.46 0l-3.02-3.03c-.13-.13-.13-.3 0-.44a.34.34 0 0 1 .23-.11z"}),ae=function(e){var t=e.svgRef,n=e.title,a=te(e,["svgRef","title"]);return r.a.createElement("svg",ee({viewBox:"0 0 22 22",ref:t},a),n?r.a.createElement("title",null,n):null,ne)},re=r.a.forwardRef((function(e,t){return r.a.createElement(ae,ee({svgRef:t},e))}));n.p;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var oe=r.a.createElement("path",{d:"M3.26 9.32c0 .32.12.64.36.87l6.5 6.45c.24.23.55.36.87.36H11c.33 0 .64-.14.87-.35l6.52-6.46c.48-.47.47-1.26 0-1.74a1.25 1.25 0 0 0-1.75 0C14.77 10.31 11 14 11 14L5.36 8.45a1.25 1.25 0 0 0-1.74 0c-.24.23-.37.54-.36.87z"}),ie=function(e){var t=e.svgRef,n=e.title,a=le(e,["svgRef","title"]);return r.a.createElement("svg",ce({viewBox:"0 0 22 22",ref:t},a),n?r.a.createElement("title",null,n):null,oe)},ue=r.a.forwardRef((function(e,t){return r.a.createElement(ie,ce({svgRef:t},e))})),se=(n.p,function(e){return r.a.createElement("svg",{id:"svg-defs"},r.a.createElement("symbol",{id:"svg-icon-logo"},r.a.createElement(q,null)),r.a.createElement("symbol",{id:"svg-icon-close"},r.a.createElement(Y,null)),r.a.createElement("symbol",{id:"svg-icon-down"},r.a.createElement(ue,null)),r.a.createElement("symbol",{id:"svg-icon-next"},r.a.createElement(ue,null)),r.a.createElement("symbol",{id:"svg-icon-prev"},r.a.createElement(ue,null)),r.a.createElement("symbol",{id:"svg-icon-magnify"},r.a.createElement(re,null)))}),de=(n(54),function(e){var t=function(e){return{name:e.name?"#svg-icon-".concat(e.name):null,height:e.height||32,width:e.width||32,className:e.className}}(e),n=t.className,a=t.name,c=t.height,l=t.width;return a&&r.a.createElement("svg",{className:"icon ".concat(e.name," ").concat(n||""),height:c,width:l},r.a.createElement("use",{xlinkHref:a}))}),fe=function(){return r.a.createElement("header",null,r.a.createElement(de,{name:"logo",height:38,width:68}))},me=(n(55),n(5)),ve={isoDate:/^(.+)T.+$/,wordBreaker:/[\u200B]/g,wordBoundry:/(?!^\w|\w*$)\b([\w\u00C0-\u00FF]+)\b/gi,formatCPF:/(\d{3})(\d{3})(\d{3})(\d{2})/,formatDate:/(\d{4}).(\d{0,2}).(\d{0,2}).+/,formatTime:/.+T(\d{2}).(\d{2}).(\d{2}).*/,formatPhone:/(0?\d{2})(\d{4,5})(\d{4})/,timeString:/^(\d{2}):(\d{2})(?::(\d{2}))?$/,formatNumber:/(?=(\d{3})+(?!\d))/g,validUrl:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,urlLastState:/^(.*\/)(.+)$/},he=function(e){return null===e},pe=function(e){return void 0===e},ge=pe,be=function(e){return he(e)||pe(e)},ye=function(e){return"object"===typeof e},Oe=function(e){return"string"===typeof e},Ee=function(e){return ve.timeString.test(e)},je=function(e){return ve.validUrl.test(e)},Se={active:"Ativo",inactive:"Inativo"},ke={monday:"Segunda",tuesday:"Ter\xe7a",wednesday:"Quarta",thursday:"Quinta",friday:"Sexta",saturday:"S\xe1bado",sunday:"Domingo"},we=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Ce={nextMonth:"Pr\xf3ximo m\xeas",previousMonth:"M\xeas anterior"},Te={ASC:1,DESC:-1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return(e=e.filter((function(e){return e}))).reduce((function(r,c,l){var o=l===e.length-1,i="".concat(a).concat(c).concat(a);return r+(l>0?"".concat(o?n:t).concat(i):"".concat(i))}),"")},xe=function(e,t,n){var a=+e||0,r=+t||0,c=+n||0,l=[];return a>0&&l.push("".concat(a," hora").concat(a>1?"s":"")),r>0&&l.push("".concat(r," minuto").concat(r>1?"s":"")),c>0&&l.push("".concat(c," segundo").concat(c>1?"s":"")),Ne(l,", "," e ")},ze=function(e,t,n){return 3600*(+e||0)+60*(+t||0)+(+n||0)},De=function(e){if(!be(e))return e.toString().replace(ve.formatNumber,".").replace(/^\./g,"")},Me=function(e,t){return e>t?1:e<t?-1:0},Ie={AddWordBreakers:function(e){if(!Oe(e))return e;return e.replace(ve.wordBoundry,"".concat("\u200b","$1").concat("\u200b"))},RemoveCopiedWordBreakers:function(e){var t=e.nativeEvent;if(t){var n=t.type,a=t.target,r=t.clipboardData;if(r&&(t.preventDefault(),/cut|copy/.test(n))){var c=a.textContent.replace(ve.wordBreaker,"");r.setData("text",c)}}},FormatNumber:De,FormatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"R$";if(!be(e)){var n=e.toFixed(2).split(".");return"".concat(t," ").concat(De(n[0]),",").concat(n[1])}},FormatDate:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!be(e)){var n=new Date(e).toISOString();return n?n.replace(ve.formatDate,"$3/$2".concat(t?"/$1":"")):null}},FormatTime:function(e){if(!be(e)){var t=new Date(e).toISOString();return t?t.replace(ve.formatTime,"$1:$2"):null}},FormatDateTime:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!be(e)){var n=new Date(e).toISOString(),a=n?n.replace(ve.formatDate,"$3/$2".concat(t?"/$1":"")):null,r=n?n.replace(ve.formatTime,"$1:$2"):null;return a&&r&&"".concat(a," ").concat(r)}},FormatTimeString:function(e){if(!be(e))return e.toString().replace(ve.timeString,"$1:$2")},FormatCPF:function(e){return e?e.replace(ve.formatCPF,"$1.$2.$3-$4"):e},FormatPhone:function(e){return e?e.replace(ve.formatPhone,"($1) $2-$3"):e},DescribeTime:xe,DescribeTimeString:function(e){var t=Ee(e)?e.split(":"):[];return xe.apply(void 0,Object(me.a)(t))},TimeToSeconds:ze,TimeStringToSeconds:function(e){var t=Ee(e)?e.split(":"):[];return ze.apply(void 0,Object(me.a)(t))},SecondsToTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!be(e)){var n=parseInt(e,10),a=Math.floor(n/3600),r=Math.floor((n-3600*a)/60),c=n-3600*a-60*r;return a<10&&(a="0".concat(a)),r<10&&(r="0".concat(r)),c<10&&(c="0".concat(c)),"".concat(a,":").concat(r).concat(t?":".concat(c):"")}},Order:Te,TotalizerType:{SUM:1,AVERAGE:0},CustomJoin:Ne,SortByValue:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Te.ASC;if(0===e.length)return e;var r=e.sort((function(e,a){var r=n?[n(e[t]),n(a[t])]:[e[t],a[t]];return Me.apply(void 0,r)}));return a===Te.ASC?r:r.reverse()},UrlToHref:function(e){var t=je(e),n=t?e:null;return r.a.createElement("a",{className:"img-href",href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(de,{name:"".concat(t?"":"no-","image")}))},GetDate:function(e){return e?new Date(e):new Date},GetIsoDate:function(e){return(e?new Date(e):new Date).toISOString().replace(ve.isoDate,"$1")},TranslateDayOfTheWeek:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e&&"string"===typeof e){var a=e.toLowerCase(),r=ke[a],c=r;return n||/^(sat|sun)/i.test(a)||(c+="-feira"),t||(c=c[0].toLowerCase()+c.slice(1)),c}},GetTranslatedCalendarWeekdaysArray:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object.values(ke).map((function(t){return e?t.slice(0,1):t}))},GetTranslatedCalendarMonthArray:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return we.map((function(t){return e?t.slice(0,3):t}))},GetTranslatedCalendarLabels:function(){return Ce},GetTranslatedStatus:function(e){return Se[e]||e}},Pe=(n(56),function(e){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader-dot"}))}),Re=n(6),$e=n(7),Ae=n(9),Fe=n(8),Ve=n(4),Be=n(11),Je=(n(57),n(10)),Le=function(e){function t(){return Object(Re.a)(this,t),Object(Ae.a)(this,Object(Fe.a)(t).apply(this,arguments))}return Object(Be.a)(t,e),Object($e.a)(t,[{key:"componentDidMount",value:function(){this.inputToggleElement=document.getElementById(this.props.toggleId)}},{key:"handleOnClick",value:function(e,t){"undefined"!==typeof t&&(e.preventDefault(),this.inputToggleElement.checked=t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.toggle,c=t.toggleId,l=Object(Je.a)(t,["children","toggle","toggleId"]);return r.a.createElement("label",Object.assign({onClick:function(t){return e.handleOnClick(t,a)},htmlFor:c},l),n)}}]),t}(a.Component),Ge={selected:[],changed:!1},Ue=function(e){function t(e){var n;return Object(Re.a)(this,t),(n=Object(Ae.a)(this,Object(Fe.a)(t).call(this,e))).state=Ge,n.toggleRef=Object(a.createRef)(),n.setToggle=n.setToggle.bind(Object(Ve.a)(n)),n.bindOptions=n.bindOptions.bind(Object(Ve.a)(n)),n.getSelected=n.getSelectionLabel.bind(Object(Ve.a)(n)),n.setSelected=n.setSelected.bind(Object(Ve.a)(n)),n.setInitalValue=n.setInitalValue.bind(Object(Ve.a)(n)),n.hasChanged=n.hasChanged.bind(Object(Ve.a)(n)),n.getOptionIndex.bind(Object(Ve.a)(n)),n}return Object(Be.a)(t,e),Object($e.a)(t,[{key:"componentDidMount",value:function(){ge(this.props.selected)||(this.hasInitialized=!1,this.setInitalValue())}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.onChange;if(n&&n(this),!ge(this.props.selected)){var a=this.props.data;if(!k(a,e.data)&&a&&this.setInitalValue(),this.hasInitialized&&n){var r=this.state.selected;k(r,t.selected)||n(r)}this.hasInitialized=!0}}},{key:"hasChanged",value:function(){return this.state.changed||!1}},{key:"setInitalValue",value:function(){var e=this.props.data||[];if(e.length>0){var t=this.props.selected;if(t){var n=Object.entries(t),a=e.filter((function(e){return n.every((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];return e[a]===r}))}))||e;this.setSelected(a.slice().shift())}else this.setSelected(e.slice().shift())}}},{key:"setToggle",value:function(e){var t=this.toggleRef.current,n=ge(e)?!t.checked:e;t.checked=n}},{key:"getOptionIndex",value:function(e){var t=Object(me.a)(this.state.selected),n=Object.values(this.props.model.value).shift();for(var a in t)if(t[a][n]===e[n])return a;return-1}},{key:"setSelected",value:function(e){if(this.props.multiple){var t=Object(me.a)(this.state.selected),n=this.getOptionIndex(e);n>=0?t.splice(n,1):t.push(e),this.setState({selected:t,changed:!0})}else{var a=this.toggleRef;a&&(a.current.checked=!1),this.setState({selected:[Object(o.a)({},e)],changed:!0})}}},{key:"toggleAllSelected",value:function(){var e=this.props.data,t=this.state.selected,n=e.length===t.length?[]:e;this.setState({selected:n,changed:!0})}},{key:"getSelectionLabel",value:function(){var e=this.state.selected,t=this.props,n=t.data,a=t.multiple,r=t.model.key;if(!n||0===n.length)return"Sem op\xe7\xf5es";if(!e||0===e.length)return"Selecione";if(a&&e.length===n.length)return"Todos";var c=e[0];return c&&c[r]?"".concat(c[r]):w()}},{key:"isSelected",value:function(e){return this.getOptionIndex(e)>=0}},{key:"bindOptionValue",value:function(e,t){if("object"===typeof t.value){for(var n={},a=0,r=Object.entries(t.value);a<r.length;a++){var c=r[a],l=Object(i.a)(c,2),o=l[0],u=l[1];n[o]=e[u]}return n}return e[t]}},{key:"bindOptions",value:function(e,t,n){var a=this;return t.map((function(t,c){var l=t[n.key];return r.a.createElement("li",{key:"".concat(e,"-option-").concat(c),title:l,className:"dropdown-item ".concat(a.isSelected(t)?"selected":""),onClick:function(){return a.setSelected(t)}},l)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.multiple,c=t.className,l=this.state,o=l.selected,i=l.changed,u=this.props.data||[],s=this.props.model||{},d=this.bindOptions(n,u,s),f=o.length>0,m=o.length===u.length,v=u.length>0,h=this.getSelectionLabel(),p=o.length>1&&"+ ".concat(o.length-1);return r.a.createElement("div",{className:"dropdown ".concat(a?"multiple":""," ").concat(c||""," ").concat(i?"changed":"")},r.a.createElement("input",{type:"checkbox",className:"toggle-dropdown hidden",id:n,ref:this.toggleRef,disabled:!v}),r.a.createElement(Le,{htmlFor:n,className:"btn-trigger-dropdown",title:"".concat(h," ").concat(p||"")},r.a.createElement("span",null,h,!m&&p&&r.a.createElement("strong",{className:"others"},p)),r.a.createElement(de,{name:"down",height:18,width:18})),r.a.createElement("div",{className:"dropdown-options"},r.a.createElement("ul",{className:"dropdown-list"},a&&r.a.createElement("li",{key:"".concat(n,"-option-all"),title:"Todos",className:"dropdown-item ".concat(f?m?"selected":"partial":""),onClick:function(){return e.toggleAllSelected()}},"Todos"),d)))}}]),t}(a.Component),We=(n(58),function(e,t,n){var a=[],r=!0,c=!1,l=void 0;try{for(var o,u=function(){var e=o.value,r={};(function(e,t){var n=Object.keys(t),a=Object.entries(e);return n.length>0?a.filter((function(e){var t=Object(i.a)(e,1)[0];return n.includes(t)})):a})(e,t).map((function(e){var t=Object(i.a)(e,2),a=t[0],c=t[1];return r[a]=function(e,t,n){if(Object.keys(n).includes(e)){var a=n[e],r=a.handler,c=a.restParams||[];return r.apply(void 0,[t].concat(Object(me.a)(c)))}return t}(a,c,n)})),a.push(r)},s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)u()}catch(d){c=!0,l=d}finally{try{r||null==s.return||s.return()}finally{if(c)throw l}}return a}),_e=function(e){return isNaN(e)?function(e){return Ee(e)?Ie.TimeStringToSeconds(e):0}(e):+e},He=function(e,t,n,c,l,o,u){return n.map((function(n,s){var d="".concat(e,"-tr-").concat(s),f=l.length,m=function(e,t){for(var n=[],a=0,r=Object.entries(t);a<r.length;a++){var c=r[a],l=Object(i.a)(c,2),o=l[0];(0,l[1])(e)&&n.push(o)}return n}(t[s],u).join(" "),v=Object(a.useState)(!1),h=Object(i.a)(v,2),p=h[0],g=h[1];return setTimeout((function(){return g(!0)}),350*(s+1)),r.a.createElement("tr",{key:d,className:"".concat(f>0?"actions-count-".concat(f):""," ").concat(m,"\n        ").concat(p?"animated":"")},qe(d,o,n,c),f>0&&Qe(d,t[s],l))}))},qe=function(e,t,n,a){return Object.entries(n).map((function(n){var c,l=Object(i.a)(n,2),o=l[0],u=l[1],s=ye(u),d=a[o],f="".concat(d).concat(u&&!s?": ".concat(u):""),m=s?r.a.createElement("span",null,u||"\u2013"):(c=u,r.a.createElement("span",{onCopy:Ie.RemoveCopiedWordBreakers,dangerouslySetInnerHTML:{__html:Ie.AddWordBreakers(c)||"\u2013"}}));return r.a.createElement("td",{key:"".concat(e,"-td-").concat(o),"data-header":d,title:f,style:{width:t}},m)}))},Qe=function(e,t,n){var a="".concat(e,"-td-actions");return r.a.createElement("td",{key:a,className:"actions"},n.map((function(e){var n=e.action,c=n.name,l=n.icon,o=e.handler;return r.a.createElement("button",{key:"".concat(a,"-").concat(l),className:"action",title:c,onClick:function(){return o(t)}},r.a.createElement(de,{name:l}))})))},Ze=function(e,t,n,a,r){var c=Object.keys(t),l=Object.keys(a);if(l.some((function(e){return c.includes(e)})))return c.map((function(c){var o=l.includes(c),i=o?function(e,t,n){if(e&&0!==e.length){var a=e[0][t],r=e.reduce((function(e,n){return e+_e(n[t])}),0)/(n===Ie.TotalizerType.AVERAGE?e.length:1);return Ee(a)?Ie.SecondsToTime(r):r}}(e,c,a[c]):"",u=(o&&n[c]?n[c].handler:function(e){return e})(i),s=a[c]===Ie.TotalizerType.SUM?"Somat\xf3rio":"M\xe9dia",d="".concat(t[c]," (").concat(s,")");return Ke(c,u,d,r)}))},Ke=function(e,t,n,a){var c=t?"".concat(n,": ").concat(t):"";return r.a.createElement("td",{key:"td-totalizer-".concat(e),className:"td-totalizer ".concat(e," ").concat(t?"":"empty"),"data-header":n,title:c,style:{width:a}},t?r.a.createElement("span",null,t):"")},Xe=Object(a.forwardRef)((function(e,t){var n=e.id,a=e.loaded,c=e.data||[],l=e.dataClasses||{},o=e.columns||{},i=e.mutations||{},u=e.actions||{},s=e.totalizers||{},d=t?{ref:t}:null,f=function(e,t){var n=e[0]||{},a=Object.values(t);return a.length>0?a:Object.keys(n)}(c,o),m=100/(Object.keys(o).length||1)+"%",v=We(c,o,i),h=v.length>0,p=h&&Object.keys(u).length>0,g=h&&Object.keys(s).length>0,b="table-".concat(n||100*Math.random()),y=h?"":"no-results",O=p?"actions":"";return r.a.createElement("div",{id:b,className:"app-table ".concat(y," ").concat(O)},r.a.createElement("table",{className:"thead"},r.a.createElement("thead",null,r.a.createElement("tr",{key:"header"},function(e,t,n){return t.map((function(t){return r.a.createElement("th",{key:"".concat(e,"-th-").concat(t),title:t,style:{width:n}},r.a.createElement("span",null,t))}))}(b,f,m)))),r.a.createElement("table",{className:"tbody"},r.a.createElement("tbody",d,a&&h&&r.a.createElement(r.a.Fragment,null,He(b,c,v,o,u,m,l)),(!a||a&&!h)&&r.a.createElement("tr",null,r.a.createElement("td",null,!a&&r.a.createElement(Pe,null),a&&r.a.createElement("span",null,"Sem resultados."))))),h&&r.a.createElement("table",{className:"tfoot"},r.a.createElement("tfoot",null,r.a.createElement("tr",{key:"totalizer",className:"tr-totalizer","data-length":"Total: ".concat(c.length," registro").concat(c.length>1?"s":"")},!g&&r.a.createElement("td",null,"\xa0"),g&&Ze(c,o,i,s,m)))))})),Ye=(n(59),function(e){var t=e.nome,n=e.cpf,a=e.quantidadeCompras2018,c=e.maiorCompra2019Valor,l=e.maiorCompra2019Volume,o=e.recomendacao;return r.a.createElement("ul",{className:"client-info"},r.a.createElement("li",null,"Nome ",r.a.createElement("strong",null,t)),r.a.createElement("li",null,"CPF ",r.a.createElement("strong",null,n)),r.a.createElement("li",null,"Quantidade de compras em 2018 ",r.a.createElement("strong",null,a)),r.a.createElement("li",null,"Maior total \xfanico em 2019 ",r.a.createElement("strong",null,Ie.FormatMoney(c))),r.a.createElement("li",null,"Maior volume \xfanico em 2019 ",r.a.createElement("strong",null,l)),r.a.createElement("li",null,"Produto recomendado ",r.a.createElement("strong",null,o)))}),et={detail:{name:"Detalhes",icon:"magnify"}},tt=function(){var e=Object(a.useContext)(J),t=e.state,n=e.setState,c=Object(a.useContext)(N).setState,l=t.data,o=t.loaded,i={valorTotal:{handler:Ie.FormatMoney}},u={valorTotal:Ie.TotalizerType.SUM},s=[{action:et.detail,handler:function(e){var t=r.a.createElement(Ye,e);c({visible:!0,content:t,title:"Dados do Cliente"})}}],d=Object(a.createRef)(),f=[{name:"Menor valor total",value:{key:"valorTotal",order:"ASC"}},{name:"Maior n\xfamero de compras em 2018",value:{key:"quantidadeCompras2018",order:"DESC"}}];return r.a.createElement("main",null,r.a.createElement("section",{className:"card"},r.a.createElement("header",null,r.a.createElement("h1",null,"Clientes"),t.loaded&&r.a.createElement("aside",null,r.a.createElement(Ue,{id:"filters-dropdown",ref:d,data:f,model:{key:"name",value:"value"},selected:f[0],onChange:function e(){var t=d.current;if(t){var a=(t.state.selected[0]||{}).value,r=a.key,c=a.order,o=O(l.slice(),r,"ASC"===c);h(l,e)||(n({data:[]}),setTimeout((function(){n({data:o})})))}}}))),!t.loaded&&r.a.createElement(Pe,null)||r.a.createElement(Xe,{id:"client-list",data:l,dataClasses:{"maior-valor":function(e){return e.hasOwnProperty("maiorValor")},"maior-volume":function(e){return e.hasOwnProperty("maiorVolume")}},loaded:o,columns:{nome:"Cliente",cpf:"CPF",valorTotal:"Total em Compras"},mutations:i,actions:s,totalizers:u})))},nt=function(){return r.a.createElement("footer",null,r.a.createElement("small",null,"Developed by\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/in/fcfett/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("strong",null,"@fcfett"))))},at=(n(60),n(61),function(e){e.renderOn;var t=e.children,n=Object(Je.a)(e,["renderOn","children"]);return r.a.createElement("button",n,t)}),rt=function(){var e=Object(a.useContext)(N),t=e.state,n=e.setState,c=t.visible,l=t.title,o=t.message,i=t.confirm,u=t.content,s=t.cancel,d=i&&i.action,f=function(){var e=T();n({visible:!1}),setTimeout((function(){n(e)}),600)},m=function(){var e=(s||{}).action;e&&e(),f()};return r.a.createElement("article",{id:"app-modal",className:"".concat(c?"visible":"")},r.a.createElement("div",{className:"backdrop",onClick:m}),r.a.createElement("section",{className:"modal"},r.a.createElement("header",null,r.a.createElement("h1",null,l),r.a.createElement(at,{className:"btn round btn-close",type:"button",onClick:f},r.a.createElement(de,{name:"close",width:26,height:26}))),u&&r.a.createElement("main",null,u),!u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("p",null,o)),r.a.createElement("footer",null,d&&r.a.createElement(at,{className:"btn",type:"button",onClick:function(){var e=(i||{}).action;e&&e(),f()}},i.label),r.a.createElement(at,{className:"btn primary",type:"button",onClick:m},d&&s.label||"Ok")))))};l.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"app"},r.a.createElement(G,null,r.a.createElement(se,null),r.a.createElement(fe,null),r.a.createElement(tt,null),r.a.createElement(nt,null),r.a.createElement(rt,null)))}),null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3940a71b.chunk.js.map