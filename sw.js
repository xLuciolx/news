importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');

const staticAssets = [
    './',
    './style.css',
    './app.js',
    './fallback.json',
    './images/fetch-dog.jpg',

];

workbox.precaching.precacheAndRoute(staticAssets);

workbox.routing.registerRoute( /(?:https:\/\/newsapi.org\/.*)/ , workbox.strategies.networkFirst());

workbox.routing.registerRoute( /.*\.(gif|jpg|jpeg|tiff|png)$/i, workbox.strategies.cacheFirst({
    cacheName: 'news-image',
    plugins: [
        new workbox.expiration.Plugin({
            maxEntries: 20,
            maxAgeSeconds: 12 * 60 * 60
        }),
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
        })
    ]
}));