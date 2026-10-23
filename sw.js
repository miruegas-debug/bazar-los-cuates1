self.addEventListener('install', e=>{self.skipWaiting(); e.waitUntil(caches.keys().then(k=>Promise.all(k.map(c=>caches.delete(c)))));});
self.addEventListener('activate', e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch', e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
