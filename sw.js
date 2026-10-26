const CACHE_NAME = 'bazar-los-cuates-v21';

const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './869268815_1422434703341051_8980595446836735717_n.jpg',
  './869571887_1545214670744097_5139767720367970231_n.jpg'
];

self.addEventListener('install', (event) => {
  console.log('SW Instalando v21');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW Activado v21');
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request).then(fetchRes => {
        return fetchRes;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
