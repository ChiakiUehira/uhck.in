const app = require('./configs/app')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  meta: {
    lang: app.lang,
    name: app.name,
    author: app.author,
    description: app.description,
    theme_color: app.theme_color,
    mobileAppIOS: true,
    viewport: 'width=device-width,initial-scale=1,user-scalable=no',
    ogType: 'website',
    ogSiteName: app.name,
    ogTitle: app.name,
    ogDescription: app.description,
    ogHost: app.host,
    ogImage: {
      path: 'card.jpg'
    },
    ogUrl: app.url,
    twitterCard: 'summary_large_image',
    nativeUI: true,
  },
  manifest: {
    name: app.name,
    short_name: 'uhck.in',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: app.description
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-132755635-1'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
