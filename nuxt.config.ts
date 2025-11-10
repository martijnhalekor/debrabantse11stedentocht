export default defineNuxtConfig({
  app: {
    head: {
      title: 'De Brabantse 11 Stedentocht',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
      htmlAttrs: {
        lang: 'nl',
        style: 'background-color: #000;',
      },
    },
  },

  site: {
    name: 'De Brabantse 11 Stedentocht',
    url: 'https://www.debrabantse11stedentocht.nl',
  },

  routeRules: {
    '/**': { prerender: true },
  },

  fonts: {
    families: [{ name: 'Moderniz', provider: 'local', src: '/Moderniz.otf' }],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-site-config',
  ],

  css: ['~/assets/css/main.css'],

  pages: true,

  compatibilityDate: '2025-11-09',
});
