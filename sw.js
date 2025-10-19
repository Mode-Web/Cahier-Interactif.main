// ✅ Service Worker - Cahier Interactif
const CACHE_NAME = "cahier-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./assets/style.css",
  "./assets/script.js",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

// عند التثبيت (Install)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("📦 Caching app files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// عند الطلب (Fetch)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// تحديث الكاش عند إصدار جديد
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("🗑️ Deleting old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});
