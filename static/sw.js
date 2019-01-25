importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "temac",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/commons.d0d2f763ecc557c57f21.js",
    "revision": "6d31cd5f6d2f200e042e17b5b22cea73"
  },
  {
    "url": "/_nuxt/main.d60e8a29af5e585c2828.js",
    "revision": "bf1876566c9ff9a2d3dbb21b6d0fd265"
  },
  {
    "url": "/_nuxt/pages_index_admin_fields__id.b8b0fd77908fde01102d.js",
    "revision": "d7745e74987fb796bba754ad05f93fb8"
  },
  {
    "url": "/_nuxt/pages_index_admin_form__id.10c712f62b221044044b.js",
    "revision": "1d4e982ad6bd7aef3fa28434ef84e732"
  },
  {
    "url": "/_nuxt/pages_index_admin_roles__id.3be15161e769957b2fec.js",
    "revision": "5ac27801dc61bdd90f1f0e076361e713"
  },
  {
    "url": "/_nuxt/pages_index_admin_users__id.fb55efde98acc202bb8f.js",
    "revision": "7830ce3d981622f5aee39428d1359f57"
  },
  {
    "url": "/_nuxt/pages_index_Dashboard.97739bebc7490a8deb15.js",
    "revision": "9638dc5be4e2e169208904de797f36a3"
  },
  {
    "url": "/_nuxt/pages_index.1e9543ed6c80de3da365.js",
    "revision": "3ba629c90d3a33f327c97d52536255bd"
  },
  {
    "url": "/_nuxt/pages_pages_Login.795d4b59d7491e662fa9.js",
    "revision": "996b8ef3991a4373e99df9d515950dd0"
  },
  {
    "url": "/_nuxt/pages_pages_Page404.185884e8602c6cd55fd8.js",
    "revision": "200cd25e8764336d490b34175fa37e5e"
  },
  {
    "url": "/_nuxt/pages_pages_Page500.862d1836d18b6dc82836.js",
    "revision": "8c739f1882b024077fe26725b076fd27"
  },
  {
    "url": "/_nuxt/pages_pages_Register.07bbe7b699c1e57533bf.js",
    "revision": "293c1b7b2effcfa18230b5d2931831e5"
  },
  {
    "url": "/_nuxt/vendors.main.d3bfad84dcab29836ba3.js",
    "revision": "5cbd62e35a5e6af5c39981d3919dfe72"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

