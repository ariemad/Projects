(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(81),o=n.n(a),r=n(645),c=n.n(r)()(o());c.push([e.id,"*{padding:0;margin:0;box-sizing:border-box}.pd-top-30{padding-top:30px}.grid--3-cols{display:grid;grid-template-columns:repeat(3, 1fr)}.mrg-right{margin-right:auto !important}h1,.restaurant-name{font-size:64px;margin-bottom:30px;text-align:center}.restaurant-name{margin:0;padding:0;padding-left:36px;font-weight:bold}nav{height:100px;background-color:#66d9e8}footer{height:100px;background-color:#66d9e8}#content{min-height:calc(100vh - 200px);width:100vw;display:flex;justify-content:center}#content-container{width:1200px;background-color:#dee2e6}nav{display:flex;align-items:center;justify-content:center}nav a{font-size:36px;margin:0 48px;cursor:pointer}footer{display:flex;align-items:center;justify-content:center}.hero{margin:30px;display:flex;padding:30px}.hero-img-container{width:50%;display:grid;grid-template-columns:1fr 1fr;padding:50px;gap:25px}.hero-img{width:250px;height:250px}.hero-text{width:50%;text-align:center;padding:40px 12px 0px}.hero-text>p{padding-top:10px;font-size:20px;line-height:1.5}.hero-text{width:50%;text-align:center;padding:0 12px}.hero-text h1{margin-bottom:20px;font-size:64px}.hero-text img{width:450px;height:450px;margin-top:20px}.menu{padding:50px}.menu h2{font-size:40px;margin-bottom:36px}.menu h3{font-size:30px}.sushi-grid,.grilled-grid,.wine-grid{column-gap:50px;row-gap:24px;justify-items:center;text-align:center;padding-bottom:64px}.sushi-grid img,.grilled-grid img,.wine-grid img{width:100%;height:100%}.contact{padding:50px}.person-container{display:grid;grid-template-columns:repeat(2, 1fr)}.person-container div{text-align:center}.person-container img{padding:20px 20px 40px;width:400px;height:400px}.person-container h2{font-size:36px;margin-top:48px;padding-bottom:12px}.person-container p{font-size:20px;padding-bottom:8px}",""]);const p=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var p=0;p<this.length;p++){var d=this[p][0];null!=d&&(c[d]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);a&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],p=0;p<e.length;p++){var d=e[p],i=a.base?d[0]+a.base:d[0],s=r[i]||0,m="".concat(i," ").concat(s);r[i]=s+1;var l=n(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)t[l].references++,t[l].updater(u);else{var g=o(u,a);a.byIndex=p,t.splice(p,0,{identifier:m,updater:g,references:1})}c.push(m)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var p=n(r[c]);t[p].references--}for(var d=a(e,o),i=0;i<r.length;i++){var s=n(r[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),c=n.n(r),p=n(565),d=n.n(p),i=n(216),s=n.n(i),m=n(589),l=n.n(m),u=n(192),g={};g.styleTagTransform=l(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),t()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const h=n.p+"bbaa0ebf2795fb3407a3.jpg",f=n.p+"70798e10478fe357a2da.jpg",x=n.p+"e6bf586df1ccfc11bb6e.jpg",v=n.p+"11086f2550d77c15da2e.jpg",E=n.p+"c02e19056ea26e22d70e.jpg",b=n.p+"750f2f6e339270820627.jpg",C=n.p+"d9506af094fdcb5b440e.jpg",y=n.p+"91a637cf68ffde01dcc9.jpg",w=n.p+"3f2160d07d11480d5d8b.jpg",I=n.p+"9031964f2725c305b1a6.jpg",S=n.p+"c2a3a88beaea37da2f88.jpg",L=n.p+"6206ec3ada32ec69155c.png",j=n.p+"04ac760cf016536bd3cc.png",T=n.p+"4fc5fcbdb8f5961258d3.png",M=n.p+"157f088b56f86d22066e.png";function z(e){const t=document.getElementById("content-container");for(;t.firstChild;)t.removeChild(t.firstChild);t.append(e())}function k(){const e=document.createElement("div");e.classList.add("hero");const t=document.createElement("div");t.classList.add("hero-img-container");const n=new Image;n.src=v,n.classList.add("hero-img"),t.append(n);const a=new Image;a.src=f,a.classList.add("hero-img"),t.append(a);const o=new Image;o.src=x,o.classList.add("hero-img"),t.append(o);const r=new Image;r.src=h,r.classList.add("hero-img"),t.append(r);const c=document.createElement("div");c.classList.add("hero-text");const p=document.createElement("h1");p.textContent="Salmon Delight",c.append(p);const d=document.createElement("h2");d.textContent="Japanese Restaurant for Sushi Lovers",c.append(d);const i=document.createElement("p");i.textContent="",c.append(i);const s=document.createElement("p");s.textContent="Salmon Delight opened in 2016 on Gulf shore beach as a bar for surfers and tourists.\n Raising in popularity after winning the `Best Sushi of Gulf` and `Best SeaFood of Alabama` awards in 2018. The restaurant opened in 2019 on Orange Beach.",c.append(s);const m=document.createElement("h2");m.classList.add("pd-top-30"),m.textContent="Location",c.append(m);const l=new Image;return l.src=E,l.classList.add("location-image"),c.append(l),e.append(c),e.append(t),e}function A(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h1");t.textContent="Menu",e.append(t);const n=document.createElement("h2");n.textContent="Sushi",e.append(n);const a=document.createElement("div");a.classList.add("sushi-grid","grid--3-cols");const o=document.createElement("h3");o.textContent="Chirashi",a.append(o);const r=document.createElement("h3");r.textContent="California Rolls",a.append(r);const c=document.createElement("h3");c.textContent="Tamagoyaki",a.append(c);const p=new Image;p.src=b,a.append(p);const d=new Image;d.src=C,a.append(d);const i=new Image;i.src=y,a.append(i),e.append(a);const s=document.createElement("h2");s.textContent="Grilled Fish",e.append(s);const m=document.createElement("div");m.classList.add("grilled-grid","grid--3-cols");const l=document.createElement("h3");l.textContent="Grilled Branzino",m.append(l);const u=document.createElement("h3");u.textContent="Fish Tacos",m.append(u);const g=document.createElement("h3");g.textContent="Cedar Plank Salmon",m.append(g);const h=new Image;h.src=w,m.append(h);const f=new Image;f.src=I,m.append(f);const x=new Image;x.src=S,m.append(x),e.append(m);const v=document.createElement("h2");v.textContent="Wine",e.append(v);const E=document.createElement("div");E.classList.add("wine-grid","grid--3-cols");const M=document.createElement("h3");M.textContent="Caymus Cabernet Sauvignon 2019",E.append(M);const z=document.createElement("h3");z.textContent="Bread & Butter Chardonnay 2020",E.append(z);const k=document.createElement("h3");k.textContent="DAOU Cabernet Sauvignon 2018",E.append(k);const A=new Image;A.src=L,E.append(A);const P=new Image;P.src=j,E.append(P);const B=new Image;return B.src=T,E.append(B),e.append(E),e}function P(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.classList.add("person-container");const n=document.createElement("h1");n.textContent="Contacts",e.append(n);const a=document.createElement("div"),o=document.createElement("h2");o.textContent="John Smith",a.append(o);const r=document.createElement("p");r.textContent="Restaurant Manager",a.append(r);const c=document.createElement("p");c.textContent="Phone: 1111-1111-1111",a.append(c);const p=new Image;p.src=M,a.append(p),t.append(a);const d=document.createElement("div"),i=document.createElement("h2");i.textContent="Alexa Morley",d.append(i);const s=document.createElement("p");s.textContent="Restaurant Vice-Manager",d.append(s);const m=document.createElement("p");m.textContent="Phone: 2222-2222-2222",d.append(m);const l=new Image;l.src=M,d.append(l),t.append(d);const u=document.createElement("div"),g=document.createElement("h2");g.textContent="Sam Wynn",u.append(g);const h=document.createElement("p");h.textContent="Night Events Organizer",u.append(h);const f=document.createElement("p");f.textContent="Phone: 3333-3333-3333",u.append(f);const x=new Image;x.src=M,u.append(x),t.append(u);const v=document.createElement("div"),E=document.createElement("h2");E.textContent="Ariadne Choi",v.append(E);const b=document.createElement("p");b.textContent="Events Organizer",v.append(b);const C=document.createElement("p");C.textContent="Phone: 4444-4444-4444",v.append(C);const y=new Image;return y.src=M,v.append(y),t.append(v),e.append(t),e}!function(){const e=document.querySelector("nav"),t=document.createElement("span");t.textContent="Salmon Delight",t.classList.add("restaurant-name","mrg-right"),e.append(t);const n=document.createElement("a");n.textContent="Home",e.append(n),n.addEventListener("click",(e=>{z(k)}));const a=document.createElement("a");a.textContent="Menu",e.append(a),a.addEventListener("click",(e=>{z(A)}));const o=document.createElement("a");o.textContent="Contacts",e.append(o),o.addEventListener("click",(e=>{z(P)}))}(),z(k),function(){const e=document.querySelector("footer"),t=document.createElement("p");t.textContent="Images by: Ivan Sankov, Nicole Densmoon and Maria Bulczka",e.append(t)}()})()})();