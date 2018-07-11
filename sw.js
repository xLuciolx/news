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

