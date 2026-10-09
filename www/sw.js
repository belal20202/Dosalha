const C='dsl-v8',F=['./','index.html','manifest.json','icon-192.png','icon-512.png','privacy-policy.html','js/core.js','js/cars.js','js/city.js','js/audio.js','js/game.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
