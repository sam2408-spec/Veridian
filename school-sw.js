// Saves the school on the phone the first time it opens, so it works with no internet afterwards.
// Quran surahs are kept in a separate cache ("zaytoun-quran") by the page itself, and are never deleted here.
var CACHE = "zaytoun-v8";
var KEEP = [CACHE, "zaytoun-quran"];
var FILES = ["/school", "/school/firstaid", "/school/teach", "/school/help", "/school/nav.js", "/school/manifest.webmanifest", "/img/icon-512.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return KEEP.indexOf(k) < 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
function save(req, res) {
  if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
  return res;
}
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // Quran service and video rooms go straight to the network
  // The class timetable changes, so always try the network first for it
  if (url.pathname === "/school/classes.json") {
    e.respondWith(fetch(e.request).then(function (res) { return save(e.request, res); }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    var net = fetch(e.request).then(function (res) { return save(e.request, res); })
      .catch(function () { return hit || caches.match("/school"); });
    return hit || net;
  }));
});
