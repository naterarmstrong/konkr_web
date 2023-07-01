(()=>{"use strict";var e={294:()=>{try{self["workbox:broadcast-update:5.1.4"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}function t(e){return new Promise((t=>setTimeout(t,e)))}s(294);const n=["content-length","etag","last-modified"],r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function a(e){return{cacheName:e.cacheName,updatedURL:e.request.url}}class o{constructor({headersToCheck:e,generatePayload:t}={}){this._headersToCheck=e||n,this._generatePayload=t||a}async notifyIfUpdated(e){var s,n,a;if(e.oldResponse&&(s=e.oldResponse,n=e.newResponse,(a=this._headersToCheck).some((e=>s.headers.has(e)&&n.headers.has(e)))&&!a.every((e=>{const t=s.headers.has(e)===n.headers.has(e),r=s.headers.get(e)===n.headers.get(e);return t&&r})))){const s={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this._generatePayload(e)};if("navigate"===e.request.mode){let s;e.event instanceof FetchEvent&&(s=e.event.resultingClientId);const n=await async function(e){if(!e)return;let s=await self.clients.matchAll({type:"window"});const n=new Set(s.map((e=>e.id)));let r;const a=performance.now();for(;performance.now()-a<2e3&&(s=await self.clients.matchAll({type:"window"}),r=s.find((t=>e?t.id===e:!n.has(t.id))),!r);)await t(100);return r}(s);n&&!r||await t(3500)}const n=await self.clients.matchAll({type:"window"});for(const e of n)e.postMessage(s)}}}s(977);const i=[],c={get:()=>i,add(e){i.push(...e)}},h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[h.prefix,e,h.suffix].filter((e=>e&&e.length>0)).join("-"),u=e=>e||l(h.precache),d=new Set,f=(e,t)=>e.filter((e=>t in e)),p=async({request:e,mode:t,plugins:s=[]})=>{const n=f(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},g=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const a=await self.caches.open(e),o=await p({plugins:r,request:t,mode:"read"});let i=await a.match(o,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;i=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:i,request:o})}return i},w=async({cacheName:t,request:s,response:n,event:r,plugins:a=[],matchOptions:o})=>{const i=await p({plugins:a,request:s,mode:"write"});if(!n)throw new e("cache-put-with-no-response",{url:(c=i.url,new URL(String(c),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var c;const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:r,plugins:a,response:n,request:i});if(!h)return;const l=await self.caches.open(t),u=f(a,"cacheDidUpdate"),w=u.length>0?await g({cacheName:t,matchOptions:o,request:i}):null;try{await l.put(i,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of d)await e()}(),e}for(const e of u)await e.cacheDidUpdate.call(e,{cacheName:t,event:r,oldResponse:w,newResponse:h,request:i})},y=g,m=async({request:t,fetchOptions:s,event:n,plugins:r=[]})=>{if("string"==typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=f(r,"fetchDidFail"),o=a.length>0?t.clone():null;try{for(const e of r)if("requestWillFetch"in e){const s=e.requestWillFetch,r=t.clone();t=await s.call(e,{request:r,event:n})}}catch(t){throw new e("plugin-error-request-will-fetch",{thrownError:t})}const i=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,s);for(const t of r)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:n,request:i,response:e}));return e}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:o.clone(),request:i.clone()});throw e}};let _,v;function R(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),a=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",s),{cacheKey:r.href,url:a.href}}class q{constructor(e){this._cacheName=u(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:r}=R(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(r,t),this._urlsToCacheModes.set(r,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],r=await self.caches.open(this._cacheName),a=await r.keys(),o=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)o.has(t)?n.push(e):s.push({cacheKey:t,url:e});const i=s.map((({cacheKey:s,url:n})=>{const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:a,event:e,integrity:r,plugins:t,url:n})}));return await Promise.all(i),{updatedURLs:s.map((e=>e.url)),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:t,url:s,cacheMode:n,event:r,plugins:a,integrity:o}){const i=new Request(s,{integrity:o,cache:n,credentials:"same-origin"});let c,h=await m({event:r,plugins:a,request:i});for(const e of a||[])"cacheWillUpdate"in e&&(c=e);if(!(c?await c.cacheWillUpdate({event:r,request:i,response:h}):h.status<400))throw new e("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await async function(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=t?t(n):n,a=function(){if(void 0===_){const e=new Response("");if("body"in e)try{new Response(e.body),_=!0}catch(e){_=!1}_=!1}return _}()?s.body:await s.blob();return new Response(a,r)}(h)),await w({event:r,plugins:a,response:h,request:t===s?i:new Request(t),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this._cacheName)).match(s)}createHandler(t=!0){return async({request:s})=>{try{const t=await this.matchPrecache(s);if(t)return t;throw new e("missing-precache-entry",{cacheName:this._cacheName,url:s instanceof Request?s.url:s})}catch(e){if(t)return fetch(s);throw e}}}createHandlerBoundToURL(t,s=!0){if(!this.getCacheKeyForURL(t))throw new e("non-precached-url",{url:t});const n=this.createHandler(s),r=new Request(t);return()=>n({request:r})}}const U=()=>(v||(v=new q),v);let T=!1;const L=e=>{const t=U(),s=c.get();e.waitUntil(t.install({event:e,plugins:s}).catch((e=>{throw e})))},b=e=>{const t=U();e.waitUntil(t.activate())};s(80);const C=e=>e&&"object"==typeof e?e:{handle:e};class K{constructor(e,t,s="GET"){this.handler=C(t),this.match=e,this.method=s}}class x extends K{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class N{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let a,o=r&&r.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),o){try{a=o.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this._catchHandler&&(a=a.catch((n=>this._catchHandler.handle({url:s,request:e,event:t})))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const a=r.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=C(e)}setCatchHandler(e){this._catchHandler=C(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let E;s(873);const k={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class P{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let s=!1;setTimeout((()=>{s=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:r,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",((o,i)=>{const c=o.objectStore(e),h=t?c.index(t):c,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(a?e:e.value),r&&l.length>=r?i(l):e.continue()):i(l)}}))}async transaction(e,t,s){return await this.open(),await new Promise(((n,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>n(),s(a,(e=>n(e)))}))}async _call(e,t,s,...n){return await this.transaction([t],s,((s,r)=>{const a=s.objectStore(t),o=a[e].apply(a,n);o.onsuccess=()=>r(o.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}P.prototype.OPEN_TIMEOUT=2e3;const M={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(M))for(const s of t)s in IDBObjectStore.prototype&&(P.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});const O=[{'revision':'deb5d53ba9a74bbc4adae10443b67f96','url':'assets/atlas.json'},{'revision':'3007c50e8125543d526a4e65565512d6','url':'assets/atlas.png'},{'revision':'acd9b9d0a9f94ebe4339a39df8a57bbc','url':'assets/audio/button-down.wav'},{'revision':'f4d62a7a2711df8e8b7215214e648af2','url':'assets/audio/button-up.wav'},{'revision':'b577f8ea1ade1bab7817ec2e9f3778ff','url':'assets/audio/defeat.mp3'},{'revision':'92b0ea37682ad19f9683e763b2d15390','url':'assets/audio/deny.wav'},{'revision':'fd7622980e2a0e7fdef57e63c6c5f80d','url':'assets/audio/drop.wav'},{'revision':'c920f48b3d09efe5978417a86c6d005e','url':'assets/audio/glitter.mp3'},{'revision':'bc75df1278214b78d67aac456e963ad8','url':'assets/audio/grab.wav'},{'revision':'e337c20a5bf1f7f4c6705cc25b5d8596','url':'assets/audio/rewind.mp3'},{'revision':'89b38c135910b216d270050df8d48672','url':'assets/audio/shutter-click.wav'},{'revision':'ab90bfa89c8bdec223572c2b0b85d6b9','url':'assets/audio/twinkle-chimes.mp3'},{'revision':'186bd6b74d68dd2ee2dccb9cd33ba75c','url':'assets/audio/typewriter.mp3'},{'revision':'ea4bbe14d283aa3203cad35e2c318237','url':'assets/audio/victory.mp3'},{'revision':'36bf9295625d6fa520bac41aed20189a','url':'assets/fonts/debug.png'},{'revision':'c6b1c2cd43d1527aae11acdcbaba09f2','url':'assets/fonts/debug.xml'},{'revision':'9e22c9ef056d62720c81b11e0a8476b7','url':'assets/fonts/main.png'},{'revision':'227f16f3297ee338765390c4ecf4fe7e','url':'assets/fonts/main.xml'},{'revision':'489393b92d65b552b728bf58359c4389','url':'assets/fonts/mini-bold.png'},{'revision':'1edd1a31988d27ca654947730faf116b','url':'assets/fonts/mini-bold.xml'},{'revision':'817d2d46d6a18bcb7e5f6afc01f85988','url':'assets/fonts/mini.png'},{'revision':'45790fc9fda6f5dc753eafddbd43106d','url':'assets/fonts/mini.xml'},{'revision':'489393b92d65b552b728bf58359c4389','url':'assets/fonts/small-bold.png'},{'revision':'1edd1a31988d27ca654947730faf116b','url':'assets/fonts/small-bold.xml'},{'revision':'ef73ad4a63a449529c50b03ade6c4ce9','url':'assets/fonts/small.png'},{'revision':'53b830cb03f9cc8b150c54eef0a0b774','url':'assets/fonts/small.xml'},{'revision':'995fe534221103f9f3e0ef96de579b0a','url':'assets/gameOverAtlas.json'},{'revision':'733446dcac5da939b5dd336a446a006f','url':'assets/gameOverAtlas.png'},{'revision':'5fa6f8e1585b924d9f2b22faa7f60c94','url':'assets/html/help/help.css'},{'revision':'b61120a82d5469b5b9fc3d7810f87ed8','url':'assets/html/help/how-to-play.html'},{'revision':'6670cc5ea14e00033a7a3cfecff74873','url':'assets/html/help/img/bandits.gif'},{'revision':'8888f38fd735be9844bf96ae7daef71d','url':'assets/html/help/img/icons/bandit-camp.png'},{'revision':'04a8576811503da2e984290ab0a972a9','url':'assets/html/help/img/icons/bandit.png'},{'revision':'16b2a1a9f6e751b902d9432d71be2198','url':'assets/html/help/img/icons/castle.png'},{'revision':'661ee58b24c5f5bbe29e40c7c0cfb4f8','url':'assets/html/help/img/icons/coin.png'},{'revision':'c1b607dbf384301d399a9a9e1a5d2b52','url':'assets/html/help/img/icons/coins.png'},{'revision':'7039cc4f6a1934d6f3559a1b87f8e9b4','url':'assets/html/help/img/icons/deficit.png'},{'revision':'e7d3cc4cae7124c256ae66a1f01dee29','url':'assets/html/help/img/icons/face.png'},{'revision':'2a2ea1d38f39a079540952bfcdbe6faa','url':'assets/html/help/img/icons/surplus.png'},{'revision':'3bc167e38626b3e01b3e7fd94a08bea2','url':'assets/html/help/img/icons/town.png'},{'revision':'1403b27132b4e5eab11cece18bd8741c','url':'assets/html/help/img/icons/treasury.png'},{'revision':'fba6d2400c8b7592717a65db7c50f24c','url':'assets/html/help/img/icons/upkeep.png'},{'revision':'0fe000a40979307e5aa97c39305ef6db','url':'assets/html/help/img/icons/villager.png'},{'revision':'3981f50d55155ed380e75c0242c9f2fc','url':'assets/html/help/img/illustration1.png'},{'revision':'14a3444aed4fc97d0e66c8c52b826cac','url':'assets/html/help/img/illustration2.png'},{'revision':'4356fa2d7a156959f19cc6ce0d199105','url':'assets/html/help/img/illustration3.png'},{'revision':'3b950c96b0a1b8912fa6bb630289ad85','url':'assets/html/help/img/illustration4.png'},{'revision':'18c89ff7ed683c57511762af5739e1c9','url':'assets/html/help/img/illustration5.png'},{'revision':'f2179f7a723f198ef5099dbba40e7537','url':'assets/html/help/img/illustration6.png'},{'revision':'13157d3a3dcfa33d4b49db7ebc1194ca','url':'assets/html/help/img/strategy.gif'},{'revision':'b9a5aa8b4c4c451f9fa89ea3211901a6','url':'assets/html/help/types.ts'},{'revision':'5ccc57f4978076e2e2529805ab3e0285','url':'assets/html/login-buttons.html'},{'revision':'37ae79ae822b465ad8f74ae9c463c9fc','url':'assets/img/coin-animated-hd.png'},{'revision':'f21643871541c1203f905d12f2d72e36','url':'assets/img/coin-animated.png'},{'revision':'fa72c0174670d9e7819358873a1709a2','url':'assets/img/flag-animated.png'},{'revision':'3cde600d6f8b12654b64bcd7071629c4','url':'assets/maps.json'},{'revision':'518256aae7c735d64f979eadf99c3b16','url':'assets/test-maps.json'},{'revision':'6c5e705a8dff1927f54bbb26cba46641','url':'icons/maskable-192.png'},{'revision':'1b32bc6963797753cdd911b9a488f8cc','url':'icons/maskable-512.png'},{'revision':'aef0539ae7ab90bb25a6226a19120be4','url':'icons/maskable.svg'},{'revision':'348537b2ca6762071abf2bc1529f13e4','url':'icons/regular-16.png'},{'revision':'02802706d6abba5f87bcdcd285f6e17d','url':'icons/regular-192.png'},{'revision':'f146a9c1c3709b9b4099080a644e60b1','url':'icons/regular-32.png'},{'revision':'ea9ce9e34ec7e73823d7d307d9d9879b','url':'icons/regular-512.png'},{'revision':'afa77dfc779075bc03e03c1702f38ac7','url':'icons/regular.svg'},{'revision':null,'url':'main.82efe0f233c7a70c560f.bundle.js'},{'revision':'3c65356b3c728042e1b39875a88752e5','url':'manifest.json'},{'revision':null,'url':'vendors.dcc7cb9dd81eef5a46d5.bundle.js'},{'revision':'2ec96b7223fe34964c8137c721b2719a','url':'vendors.dcc7cb9dd81eef5a46d5.bundle.js.LICENSE.txt'}];var W,A;console.log("SW_BUILD_NUMBER","2.13.1-build-5429544769"),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),W=[new class{constructor(e){this.cacheDidUpdate=async e=>{this._broadcastUpdate.notifyIfUpdated(e).then((()=>{}))},this._broadcastUpdate=new o(e)}}],c.add(W),A=O,U().addToCacheList(A),A.length>0&&(self.addEventListener("install",L),self.addEventListener("activate",b)),function(e){T||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=u();self.addEventListener("fetch",(a=>{const o=((e,t)=>{const s=U().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const o=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(a,t);if(yield o.href,s&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=s,yield e.href}if(n){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}})(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!o)return;let i=self.caches.open(r).then((e=>e.match(o))).then((e=>e||fetch(o)));a.respondWith(i)}))})(e),T=!0)}(undefined),function(e,t,s){let n;n=e instanceof RegExp?new x(e,t,s):new K(e,t,s),(E||(E=new N,E.addFetchListener(),E.addCacheListener()),E).registerRoute(n)}((({url:e})=>"/"===e.pathname),new class{constructor(e={}){if(this._cacheName=e.cacheName||l(h.runtime),e.plugins){const t=e.plugins.some((e=>!!e.cacheWillUpdate));this._plugins=t?e.plugins:[k,...e.plugins]}else this._plugins=[k];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:t,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const r=[];let a;if(this._networkTimeoutSeconds){const{id:e,promise:o}=this._getTimeoutPromise({request:s,event:t,logs:n});a=e,r.push(o)}const o=this._getNetworkPromise({timeoutId:a,request:s,event:t,logs:n});r.push(o);let i=await Promise.race(r);if(i||(i=await o),!i)throw new e("no-response",{url:s.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await this._respondFromCache({request:e,event:s}))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let r,a;try{a=await m({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){r=e}if(e&&clearTimeout(e),r||!a)a=await this._respondFromCache({request:t,event:n});else{const e=a.clone(),s=w({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){}}return a}_respondFromCache({event:e,request:t}){return y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}),self.addEventListener("message",(e=>{if("skipWaiting"===e.data)return self.skipWaiting()}))})()})();
//# sourceMappingURL=sw.js.map