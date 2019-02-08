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
    /* Import Font Awesome Icons Set */
    //'~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],
   /*
  ** Style resources configuration
  */
 styleResources: {
  scss: './assets/scss/style.scss'
},
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
