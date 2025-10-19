// ✅ Cahier Interactif - Service Worker
const CACHE_NAME = 'cahier-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './dashboard.html',
  './style.css',
  './main.js',
  './manifest.json',
  './assets/logo.png',
  './assets/logo.jpeg',
  './assets/photo1.jpeg',
  './assets/photo5.jpeg',
  './assets/photo6.jpeg',
  './assets/photo7.jpeg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://api.iconify.design/mdi/account-question-outline.svg',
  'https://api.iconify.design/mdi/account-tie-outline.svg'
];

// 🔹 عند التثبيت (install)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Caching app files...');
      return cache.addAll(urlsToCache);
    })
  );
});

// 🔹 عند الطلب (fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // إن وجد الملف في الكاش، استخدمه، وإلا حمّله من الإنترنت
      return response || fetch(event.request);
    })
  );
});

// 🔹 عند التحديث (activate)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
