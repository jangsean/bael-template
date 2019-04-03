importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0bea130c1f5dd19974f8.js",
    "revision": "a46ee8546809aa655817788da2619f36"
  },
  {
    "url": "/_nuxt/23c761e5dc52ecad639c.js",
    "revision": "724fce6adfd8b9d05635c1ce7a2bab53"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/48db9d1d1ccf864c6d0f.js",
    "revision": "eb78b46c71f0b6bab9505226c802f3af"
  },
  {
    "url": "/_nuxt/53866a969fd98365e889.js",
    "revision": "86d8675a7e78eb967b59de8d2f98a776"
  },
  {
    "url": "/_nuxt/7096d7187161adc64bb4.js",
    "revision": "db061cbec97790f725993061dac23f10"
  },
  {
    "url": "/_nuxt/9ac37747fa988431ba42.js",
    "revision": "6753e813eafadfe00807c8e1669a0278"
  },
  {
    "url": "/_nuxt/adf3ab23b391d542a5e3.css",
    "revision": "4c34b4427ff6b205eafc84cbbd982c86"
  },
  {
    "url": "/_nuxt/bfaedc9adbf9726b43cf.js",
    "revision": "24cec2139b34440f1e5f2c2ebf0a43b7"
  },
  {
    "url": "/_nuxt/c81bc1d13a624cbc25c8.css",
    "revision": "bee7f259c15a65f07cba2f47d3354ebc"
  },
  {
    "url": "/_nuxt/ef84be62403b00741f9e.js",
    "revision": "bd4effa567c445f346190aea49b05c8a"
  },
  {
    "url": "/_nuxt/f88270d547dadce1dd1b.js",
    "revision": "8a955e40b3d6c808f20e959a8544548d"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
