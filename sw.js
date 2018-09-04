self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("static").then(function(cache) {
      cache.addAll([
        "/",
        "./js/main.js",
        "./css/style.css",
        "./index.html",
        "./data.json",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      ]);
    })
  );
});
self.addEventListener("activate", function() {
  console.log("activated");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) {
        return res;
      } else {
        return fectch(event.request);
      }
    })
  );
});
