importScripts("/_nuxt/workbox.4c4f5ca6.js")

workbox.precaching.precacheAndRoute(
  [
    {
      url: "/_nuxt/477584af1cffd2843bab.css",
      revision: "811a758e08027cc3a92d05844315d248"
    },
    {
      url: "/_nuxt/app.js",
      revision: "d5c8eee6272892d95dc74d0178be3526"
    },
    {
      url: "/_nuxt/commons.app.js",
      revision: "97c0cb67dba8a820c8dd43310feb4108"
    },
    {
      url: "/_nuxt/f161fbabc17fd24f5468.css",
      revision: "d36adae50bc71f8f9d66a0d1d31b53e5"
    },
    {
      url: "/_nuxt/f311b681ef23eac54f3c.css",
      revision: "73bfb7cf5f338f214b762e87499a043b"
    },
    {
      url: "/_nuxt/pages_admin_fields__id.js",
      revision: "d0cd7db04c8e3a06e9e7b9c60b0af92a"
    },
    {
      url:
        "/_nuxt/pages_admin_fields__id.pages_admin_form__id.pages_admin_roles__id.pages_admin_users__id.js",
      revision: "25807157a1cf1fe43a5ecd3f1003590b"
    },
    {
      url: "/_nuxt/pages_admin_form__id.js",
      revision: "c3a798acab0478b221379a16e6b09b81"
    },
    {
      url: "/_nuxt/pages_admin_roles__id.js",
      revision: "c11131f06270979309f7ea102d81b64a"
    },
    {
      url: "/_nuxt/pages_admin_users__id.js",
      revision: "cabb70d58710842463443847678cc3cf"
    },
    {
      url: "/_nuxt/pages_Dashboard.js",
      revision: "bf9d695f7f0e4545678e19c7622fdfb7"
    },
    {
      url: "/_nuxt/pages_index.js",
      revision: "cc4f8a0a3542b5435f685aca1e11716c"
    },
    {
      url: "/_nuxt/pages_pages_Login.js",
      revision: "c00a2cd432ed23b9422246129b1aba14"
    },
    {
      url: "/_nuxt/pages_pages_Page404.js",
      revision: "2281a30ba5884d7576c786fda63f7d65"
    },
    {
      url: "/_nuxt/pages_pages_Page500.js",
      revision: "025251ba542e71a58ef9bbf85588563c"
    },
    {
      url: "/_nuxt/pages_pages_Register.js",
      revision: "35e8e24ab78ff091727b103c73af963f"
    },
    {
      url: "/_nuxt/runtime.js",
      revision: "6537921e174b62a8c4d5ee1f675bb416"
    },
    {
      url: "/_nuxt/vendors.app.js",
      revision: "70979b5b1f3ee1fedbad6dee2c344191"
    },
    {
      url:
        "/_nuxt/vendors.pages_admin_fields__id.pages_admin_form__id.pages_admin_roles__id.pages_admin_users__id.js",
      revision: "2fb2aa37d37fd31fc148fc98acaae73f"
    }
  ],
  {
    cacheId: "temac",
    directoryIndex: "/",
    cleanUrls: false
  }
)

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(
  new RegExp("/_nuxt/.*"),
  workbox.strategies.cacheFirst({}),
  "GET"
)

workbox.routing.registerRoute(
  new RegExp("/.*"),
  workbox.strategies.networkFirst({}),
  "GET"
)
