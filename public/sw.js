if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ContactDecor.svg",revision:"9dc19c7e515b6d13a63bf8f2f29054a4"},{url:"/_next/static/IIoeQpH8f9SEMMrawSYHv/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/IIoeQpH8f9SEMMrawSYHv/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/IIoeQpH8f9SEMMrawSYHv/pages/_app.js",revision:"33642f186e428350d5f75bd9e9dbd189"},{url:"/_next/static/IIoeQpH8f9SEMMrawSYHv/pages/_error.js",revision:"ec96a21c4ff799806538a977cb28cdab"},{url:"/_next/static/IIoeQpH8f9SEMMrawSYHv/pages/index.js",revision:"1409a98943cc388d98793ffb0ee5af28"},{url:"/_next/static/chunks/8292e2d72fc489879a207b0995a6ce3db713d9e9.2cc49c7b609ad2bfb7c6.js",revision:"0f146842b6a4e79ad4245bc62ed7d0f5"},{url:"/_next/static/chunks/b48509cb9b3e95dba3d7ad2685cd2dde3b851bdc.df2d5cb20c8bea1ec165.js",revision:"7b964e53389e8ad11ba8a4f197098647"},{url:"/_next/static/chunks/commons.b262b3c42f9f3573057c.js",revision:"1f43290590b4e47a2b57a90ef620bfaf"},{url:"/_next/static/chunks/framework.126679bf45d7d49475d8.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/_next/static/css/01fd7aab8955cdd96eca.css",revision:"ca107e68978b55ea68e58f0e9d1ccd85"},{url:"/_next/static/runtime/main-eb04fd170c3dd0b55655.js",revision:"a48415d85004cb899b475d5f4e865519"},{url:"/_next/static/runtime/polyfills-d6eb965fcdbd5a6e6622.js",revision:"e953c2dc3821c317f6845cac24a2dbdb"},{url:"/_next/static/runtime/webpack-1c5199ff66550d26e499.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/aboutMeDecor.svg",revision:"291f70375b299864106d3dd738a33208"},{url:"/burgerBuilder.jpg",revision:"a9849c6797159d49db7324c336d3fc5a"},{url:"/favicon copy.png",revision:"273d40a8e5145f522fbbcc4192a94d02"},{url:"/favicon.png",revision:"a636d2c2168e3094f32aedee99aabb9c"},{url:"/footer.svg",revision:"f2da45aa02e327864cd5c2e576e737d5"},{url:"/footerBackup.svg",revision:"48a87ae02ae02d8f231ec419fd612f00"},{url:"/footerSmall.svg",revision:"14eb950b4de8cb9a341ecb60e4f97fbf"},{url:"/heroBackground.svg",revision:"6ddbd07e615794ae75dce9bcffcabc2f"},{url:"/images/icons/icon-128x128.png",revision:"41af12b7ebb8e7db4df09df450195e98"},{url:"/images/icons/icon-144x144.png",revision:"579029b31930a27d1370c1a759643310"},{url:"/images/icons/icon-152x152.png",revision:"8560bfeff496b1f611d52a61615e9370"},{url:"/images/icons/icon-192x192.png",revision:"57a3028cd77aeb60eafc1743ab63c173"},{url:"/images/icons/icon-384x384.png",revision:"d8e7bbf435912cad0e298d1f6c90943b"},{url:"/images/icons/icon-512x512.png",revision:"3812746f4c1c72808c2c792c39317825"},{url:"/images/icons/icon-72x72.png",revision:"57c39a8d3cee300660677ed9202c1075"},{url:"/images/icons/icon-96x96.png",revision:"4d09fd24e2b64a67cf8c7797093fc6cf"},{url:"/lms.jpg",revision:"ce5252871901f912d009b004141d4f56"},{url:"/logoGithub.svg",revision:"e739cf50f999955cd3aa5fc262f12897"},{url:"/manifest.json",revision:"c227889a9d3a7b3b900bc88c9d075f93"},{url:"/myPortfolio.jpg",revision:"f766d09c8735c532624ce559be4a8ee8"},{url:"/navMenuToggle.svg",revision:"0038e50ecf0c9f203f49e359a3b6adc6"},{url:"/portrait.svg",revision:"e1524b61cc01dd8a1a4b446a10d45df8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
