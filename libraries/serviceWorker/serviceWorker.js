const CACHE_NAME = 'resources-cache-v1';

function getResourceList() {
  const resources = new URL(window.location).searchParams.get('resources');
  return resources.split();
}

window.self.addEventListener('install', event => {
  const preLoaded = caches.open(CACHE_NAME).then(cache => cache.addAll(getResourceList()));
  event.waitUntil(preLoaded);
});

window.self.addEventListener('fetch', event => {
  const response = caches.match(event.request).then(match => match || fetch(event.request));
  event.respondWith(response);
});
