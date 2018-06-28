const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'temac',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'temac' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** plugins
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/casl'
  ],
  /*
  ** modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  
  build: {
     
   analyze: { 
    analyzerMode: 'static'
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
        config.module.rules.push({
          'loader': 'babel-loader',
          'test': /\.js$/,
          'exclude': /node_modules/,
          'query': {
            'plugins': ['lodash'],
            'presets': [['@babel/env', { 'targets': { 'node': 6 } }]]
          }
        })        
      }
    },
    vendor: ['@casl/vue']
  },
   /*
  ** Router configuration
  */
  router: {
    middleware: 'check-auth'
  },
}
