importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "e7e166c966085b5715ca2d1c87e1e111"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "02a070a93780bcff5bf5159f0bb9373c"
  },
  {
    "url": "/_nuxt/pages_index_admin_fields__id.js",
    "revision": "41ce5d5862b07a8fad9ca1f2d69bf471"
  },
  {
    "url": "/_nuxt/pages_index_admin_form__id.js",
    "revision": "bb142989cef49b6a8f14e0b58ad75b87"
  },
  {
    "url": "/_nuxt/pages_index_admin_roles__id.js",
    "revision": "ebd1e94acc4693b238883d82b2833e29"
  },
  {
    "url": "/_nuxt/pages_index_admin_users__id.js",
    "revision": "91d12da952152ee2ef781e3c28b241d9"
  },
  {
    "url": "/_nuxt/pages_index_Dashboard.js",
    "revision": "6ad8bf5775e3a09c7944f7ad65cee127"
  },
  {
    "url": "/_nuxt/pages_index.js",
    "revision": "3e55a9725eadda1c8cebe28108a8edf4"
  },
  {
    "url": "/_nuxt/pages_pages_Login.js",
    "revision": "853e7e08fe5a32506057dc2bb827da56"
  },
  {
    "url": "/_nuxt/pages_pages_Page404.js",
    "revision": "94dd1ad2ddb74c5c63c24416104e76c9"
  },
  {
    "url": "/_nuxt/pages_pages_Page500.js",
    "revision": "92f987fadb85905b4e99216a181bd0e5"
  },
  {
    "url": "/_nuxt/pages_pages_Register.js",
    "revision": "b92549f79efaf51b0ce813918a4770cc"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "17ed770c950e723ebd7e0ed5bf2f498d"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "cb140c662cf0412d757ff83912ad486c"
  }
], {
  "cacheId": "temac",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
