// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s - Nuxt3',
      meta: [
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1, maximum-scale=5'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  modules: [
    ['@nuxtjs/robots', 
      { 
        UserAgent: "*",
        Disallow: "",
        Sitemap: "http://a69702.sitemaphosting.com/3927666/sitemap.xml"
      }
    ]
  ],
  
})
