if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const r=e=>s(e,f),c={module:{uri:f},exports:o,require:r};i[f]=Promise.all(n.map((e=>c[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-515713ca"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"c32347c8080ecf11796a505890a2bdf2"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"app~9af0ee1e.bundle.js",revision:"de8165941fe8eb50334e0e84dab3f953"},{url:"app~a51fa3f5.bundle.js",revision:"6fb0e8afe98870de92b3a215e4333575"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a8a73dfb.bundle.js",revision:"5171690ba7657122cda4f7fd2de83252"},{url:"app~a8a73dfb.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"data/RESTO.json",revision:"c764fe3169db0858e905f2be46708ab6"},{url:"favicon.png",revision:"4f4a611e981480e1c3b85adb930a0d4f"},{url:"images/heros/hero-image_4-large.jpg",revision:"6241b882870f6ed8f27e0a26e554b7be"},{url:"images/heros/hero-image_4-small.jpg",revision:"19fe841c9f096d9e79b538aeb1859bc0"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/icons/icon-128x128.png",revision:"0587ed602c22babbc016567b6bd947f6"},{url:"images/icons/icon-144x144.png",revision:"0ce5ba21510b0e7699565c320aa1461a"},{url:"images/icons/icon-152x152.png",revision:"7118ef05e599fff15f35bf4111350d05"},{url:"images/icons/icon-192x192.png",revision:"21e289cf1fbe7ff18528e7522bbf2876"},{url:"images/icons/icon-384x384.png",revision:"3ce7daf7ee496b7de3e9e928e8e7f224"},{url:"images/icons/icon-512x512.png",revision:"dfab5810e5195f72d1bce9eb17b50045"},{url:"images/icons/icon-72x72.png",revision:"0272cb6e8e40c0432b6428cc0f9c99fa"},{url:"images/icons/icon-96x96.png",revision:"c99cdfaf64e1593b6ecc5b086c5f3aed"},{url:"index.html",revision:"f66e77e0bca71da2da71d673e53fd2a2"},{url:"manifest.json",revision:"42fef16c481821bda387000f8bd71f1b"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"aftertaste-app",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/css2.*$/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*$/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:30})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
