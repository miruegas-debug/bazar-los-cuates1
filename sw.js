const CACHE_NAME = 'bazar-los-cuates-v1';

self.addEventListener('install', (event) => {
  console.log('SW Instalando');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW Activado');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
