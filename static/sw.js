importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "temac",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.dab0be791dcf2822424a.js",
    "revision": "a9aeb2d42ee0961b45aab4c7979d29ad"
  },
  {
    "url": "/_nuxt/layouts_default.59021b568b35ee9570a0.js",
    "revision": "dccde1b6f2f18abb0bcd46f09ff05bc7"
  },
  {
    "url": "/_nuxt/manifest.5201cd170030cc40912f.js",
    "revision": "bc7cfae3b682d42e74d1b1cb5aecc188"
  },
  {
    "url": "/_nuxt/pages_index_admin_fields__id.e4fd08202c8c04cc3299.js",
    "revision": "7db80fdb05f2e9aaf17c4928cab54289"
  },
  {
    "url": "/_nuxt/pages_index_admin_form__id.db206a34d10e6e2d9105.js",
    "revision": "fe7886d005dc5447594288af68641804"
  },
  {
    "url": "/_nuxt/pages_index_admin_roles__id.a1222fa2e2e2341ee548.js",
    "revision": "3eeff6a75493cbd7ac574dcd1729b918"
  },
  {
    "url": "/_nuxt/pages_index_admin_users__id.c18a2d2ebe8d6c5441f5.js",
    "revision": "66e549f2b45460e3e7ec298f9d6f44ef"
  },
  {
    "url": "/_nuxt/pages_index_Dashboard.d29126dce129b1a65197.js",
    "revision": "f505f1265944960c4c1af1947ea838ae"
  },
  {
    "url": "/_nuxt/pages_index.3cfaa281db27e6d70626.js",
    "revision": "88ae55bf1e8cb88a9eaad084eafb77cd"
  },
  {
    "url": "/_nuxt/pages_pages_Login.afb27bfb0fcdb5294563.js",
    "revision": "240cd91ab1dca641f43b0acf49c3a4d3"
  },
  {
    "url": "/_nuxt/pages_pages_Page404.309eaa1dab800a61269e.js",
    "revision": "fffc33839fef5bdfe6bae671f19887b5"
  },
  {
    "url": "/_nuxt/pages_pages_Page500.47f48714d0c5950fb4d5.js",
    "revision": "3e997d9ddf75fc9888e7d80c5eccee02"
  },
  {
    "url": "/_nuxt/pages_pages_Register.ff2a914d35fa47633b10.js",
    "revision": "91b18198f2ff58def8a283b93b0c46cf"
  },
  {
    "url": "/_nuxt/vendor.f07a065aff08d18b85f9.js",
    "revision": "9919fd569ac04630ddbbe684111739c6"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

