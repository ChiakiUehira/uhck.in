importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4189a34a4e1e1da83103.js",
    "revision": "ad278663134ab9ab13e0aca55f3465cd"
  },
  {
    "url": "/_nuxt/67d1e14aa19fb6c7f374.js",
    "revision": "932fb511a5e8d6c4095721222bcbbe3c"
  },
  {
    "url": "/_nuxt/79269d564a29eadcddb1.js",
    "revision": "48f51a0f89a3b0debfe38682ca7e07f4"
  },
  {
    "url": "/_nuxt/836890184cd9c7f6db35.js",
    "revision": "4091559ba8725e1cfe5ae24ec26405d6"
  },
  {
    "url": "/_nuxt/b4e3397bb70e371b8662.js",
    "revision": "3508a66ed68567cf1f535726035dfc52"
  }
], {
  "cacheId": "uhck.in",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
