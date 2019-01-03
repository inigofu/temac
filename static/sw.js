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
    "url": "/_nuxt/main.d9dc0946eade57ee4495.js",
    "revision": "b4e8c4e8a9f0f37152b8b170d7c321be"
  },
  {
    "url": "/_nuxt/pages_index_admin_fields__id.3b73e58df1ef9160ee3c.js",
    "revision": "9e0b40d5b7ab97ba04e4d05da3481039"
  },
  {
    "url": "/_nuxt/pages_index_admin_form__id.5e7dad48dfbb062412cb.js",
    "revision": "fb93106f007390528755b34255627d09"
  },
  {
    "url": "/_nuxt/pages_index_admin_roles__id.a0bd6be7e5dca904769d.js",
    "revision": "b20e36e6fd91419ebbf3ef97dd9c9e8e"
  },
  {
    "url": "/_nuxt/pages_index_admin_users__id.7950bc65e57496e5ea9b.js",
    "revision": "ca2bc03d8055937945cb8395da525b32"
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
    "url": "/_nuxt/pages_pages_Register.8786d0b3d60df54e6baa.js",
    "revision": "e4231cd72569365d5b18b478a744aff7"
  },
  {
    "url": "/_nuxt/vendors.main.d3bfad84dcab29836ba3.js",
    "revision": "5cbd62e35a5e6af5c39981d3919dfe72"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

