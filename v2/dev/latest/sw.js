!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:broadcast-update:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";n.r(t);n(1);const s=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class a extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}function r(e){return new Promise(t=>setTimeout(t,e))}n(2);const c=["content-length","etag","last-modified"],o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function i(e){return{cacheName:e.cacheName,updatedURL:e.request.url}}class h{constructor({headersToCheck:e,generatePayload:t}={}){this._headersToCheck=e||c,this._generatePayload=t||i}async notifyIfUpdated(e){var t,n,s;if(e.oldResponse&&(t=e.oldResponse,n=e.newResponse,(s=this._headersToCheck).some(e=>t.headers.has(e)&&n.headers.has(e))&&!s.every(e=>{const s=t.headers.has(e)===n.headers.has(e),a=t.headers.get(e)===n.headers.get(e);return s&&a}))){0;const t={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this._generatePayload(e)};if("navigate"===e.request.mode){let t;e.event instanceof FetchEvent&&(t=e.event.resultingClientId);await async function(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const n=new Set(t.map(e=>e.id));let s;const a=performance.now();for(;performance.now()-a<2e3&&(t=await self.clients.matchAll({type:"window"}),s=t.find(t=>e?t.id===e:!n.has(t.id)),!s);)await r(100);return s}(t)&&!o||await r(3500)}const n=await self.clients.matchAll({type:"window"});for(const e of n)e.postMessage(t)}}}n(0);const l=[],u={get:()=>l,add(e){l.push(...e)}};const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},d=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),p=e=>e||d(f.precache),w=new Set;const y=(e,t)=>e.filter(e=>t in e),g=async({request:e,mode:t,plugins:n=[]})=>{const s=y(n,"cacheKeyWillBeUsed");let a=e;for(const e of s)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},m=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:a=[]})=>{const r=await self.caches.open(e),c=await g({plugins:a,request:t,mode:"read"});let o=await r.match(c,s);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;o=await a.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},v=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:c})=>{const o=await g({plugins:r,request:t,mode:"write"});if(!n)throw new a("cache-put-with-no-response",{url:(i=o.url,new URL(String(i),location.href).href.replace(new RegExp("^"+location.origin),""))});var i;const h=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let a=t,r=!1;for(const t of s)if("cacheWillUpdate"in t){r=!0;const s=t.cacheWillUpdate;if(a=await s.call(t,{request:e,response:a,event:n}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:s,plugins:r,response:n,request:o});if(!h)return void 0;const l=await self.caches.open(e),u=y(r,"cacheDidUpdate"),f=u.length>0?await m({cacheName:e,matchOptions:c,request:o}):null;try{await l.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:f,newResponse:h,request:o})},R=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=y(s,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,a=e.clone();e=await s.call(t,{request:a,event:n})}}catch(e){throw new a("plugin-error-request-will-fetch",{thrownError:e})}const o=e.clone();try{let a;a="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(a=await e.fetchDidSucceed.call(e,{event:n,request:o,response:a}));return a}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:o.clone()});throw e}};let _;async function U(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},a=t?t(s):s,r=function(){if(void 0===_){const e=new Response("");if("body"in e)try{new Response(e.body),_=!0}catch(e){_=!1}_=!1}return _}()?n.body:await n.blob();return new Response(r,a)}function T(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class L{constructor(e){this._cacheName=p(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=T(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],a=await self.caches.open(this._cacheName),r=await a.keys(),c=new Set(r.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const a=this._cacheKeysToIntegrities.get(n),r=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:r,event:e,integrity:a,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const a of t)n.has(a.url)||(await e.delete(a),s.push(a.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:c}){const o=new Request(t,{integrity:c,cache:n,credentials:"same-origin"});let i,h=await R({event:s,plugins:r,request:o});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:o,response:h}):h.status<400))throw new a("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=await U(h)),await v({event:s,plugins:r,response:h,request:e===t?o:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new a("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new a("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let q;const b=()=>(q||(q=new L),q);const K=(e,t)=>{const n=b().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const c=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(r,t);if(yield c.href,n&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=n,yield e.href}if(s){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let C=!1;function x(e){C||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const a=p();self.addEventListener("fetch",r=>{const c=K(r.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!c)return void 0;let o=self.caches.open(a).then(e=>e.match(c)).then(e=>e||fetch(c));r.respondWith(o)})})(e),C=!0)}const M=e=>{const t=b(),n=u.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},N=e=>{const t=b();e.waitUntil(t.activate())};const P=[{'revision':'87bd5ca40ace566e1403b9c3d86dcd43','url':'assets/atlas.json'},{'revision':'ace3ff9fe857fed5c87a0a2e26a54077','url':'assets/atlas.png'},{'revision':'006d25496b373c396909694fe3956394','url':'assets/audio/click.wav'},{'revision':'92b0ea37682ad19f9683e763b2d15390','url':'assets/audio/deny.wav'},{'revision':'fd7622980e2a0e7fdef57e63c6c5f80d','url':'assets/audio/drop.wav'},{'revision':'bc75df1278214b78d67aac456e963ad8','url':'assets/audio/grab.wav'},{'revision':'024e0f5c94b3124bbb8b965a630d76ce','url':'assets/audio/snap.wav'},{'revision':'b60f3e4cd0fa8d2de61c9adb35b320d2','url':'assets/fonts/debug.png'},{'revision':'902f15f70096b5d6867e9ea7651a0771','url':'assets/fonts/debug.xml'},{'revision':'2fb474285393b2e40b0f67de49205646','url':'assets/fonts/main.png'},{'revision':'f5b93f9e2d58f282084daa8d87e45cb3','url':'assets/fonts/main.xml'},{'revision':'e36aa9f003852178248d200c621b49f9','url':'assets/img/coin-animated.png'},{'revision':'b05a70037f5998140d836a93e99cc7c3','url':'icons/favicon-16x16.png'},{'revision':'bd95076aee2026defc031b4f87e68130','url':'icons/favicon-32x32.png'},{'revision':'c7a6f1065e29d45e0b799493fd8cf97f','url':'icons/icons-128x128.png'},{'revision':'e166001d3ab901fa6c809a162b1bb31b','url':'icons/icons-192x192.png'},{'revision':'db04c9812deeba26f3ef1218ccd815a1','url':'icons/icons-512x512.png'},{'revision':'543dd7aa550f335f8aa149d6fba433b5','url':'index.html'},{'revision':'7599b5d6b6a641fe90febad126e9f1d4','url':'main.09911b964cb01e463007.bundle.js'},{'revision':'857b5be59117402e19288e4756771681','url':'manifest.json'},{'revision':'30a1df48fd12b2075fdbf699a233330a','url':'vendors.989b43403d52e18d633c.bundle.js'}];var E,W;E=[new class{constructor(e){this.cacheDidUpdate=async e=>{this._broadcastUpdate.notifyIfUpdated(e).then(()=>{})},this._broadcastUpdate=new h(e)}}],u.add(E),function(e){b().addToCacheList(e),e.length>0&&(self.addEventListener("install",M),self.addEventListener("activate",N))}(P),x(W),self.addEventListener("message",e=>{if("skipWaiting"===e.data)return self.skipWaiting()})}]);