import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
import webpack from 'webpack'

module.exports = {
  //mode: 'spa', 
  render: {
    compressor: { threshold: 6 }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "temac",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "temac" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  css: [
    "~/assets/scss/style.scss"
  ],
  /*
  ** plugins
  */
  plugins: [ "~/plugins/casl"],
  /*
  ** modules
  */
  modules: [/*"@nuxtjs/pwa"*/, 'bootstrap-vue/nuxt'],
  /*
  ** Build configuration
  */

  build: {
    extractCSS: true,
    render: {
      gzip: {
        threshold: -1
      }
    },
    analyze: {
      analyzerMode: "static"
    },
    'html.minify': {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        //config.devtool = '#source-map'
      }
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          }),
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        )       
      }
    }//,
    //vendor: ["@casl/vue"]
  },
  /*
  ** Router configuration
  */
  router: {
    middleware: "check-auth"
  }

  
}
