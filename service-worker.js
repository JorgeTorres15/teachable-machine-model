self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('my-cache').then((cache) => {
          return cache.addAll([
              '/', // La raíz de la PWA
              '/index.html', // Archivo HTML
              '/app.js', // Script de la aplicación
              'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs', // Cargar TensorFlow.js desde CDN
              'https://jorgetorres15.github.io/teachable-machine-model/model.json', // El modelo de Teachable Machine
              'https://jorgetorres15.github.io/teachable-machine-model/group1-shard1of1.bin', // Binarios del modelo
              '/icons/icon-192x192.png', // Icono de la PWA
              '/icons/icon-512x512.png'  // Icono de la PWA
          ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
          return response || fetch(event.request);
      })
  );
});
