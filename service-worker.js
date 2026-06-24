/* Pet Health Tracker — service worker
 * Enables offline use and "install as an app".
 * RELEASE PROCESS: bump CACHE (e.g. v1.0.1) whenever any app file changes,
 * and bump the version shown in dog-health-tracker.html to match.
 */
const CACHE = "pht-cache-v1.0.1";
const ASSETS = [
  "./",
  "./index.html",
  "./dog-health-tracker.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Let the page trigger an immediate update when the user taps "Update".
self.addEventListener("message", e => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

// Cache-first: instant loads + works offline. New versions arrive via SW update.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).catch(() => cached)
    )
  );
});
