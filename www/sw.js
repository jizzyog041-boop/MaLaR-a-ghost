const C='malar-v1',PRE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','lib/three.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n&&(n.ok||n.type==='opaque'))caches.open(C).then(c=>c.put(e.request,n.clone()));return n}).catch(()=>r)))});
