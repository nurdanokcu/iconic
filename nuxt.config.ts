// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/robots',
    'nuxt-seo-utils',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@formkit/auto-animate/nuxt',
    'nuxt-viewport',
  ],
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'icon', href: '/icon-light.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', href: '/icon-dark.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
  css: ['~/assets/css/fonts.css', '~/assets/css/global.css'],
  site: {
    url: process.env.APP_DOMAIN_URL,
    name: 'Iconic Modeling Agency',
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      domain: process.env.APP_DOMAIN_URL,
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  pwa: {
    manifest: {
      name: 'Iconic Modeling Agency',
      short_name: 'Iconic',
      theme_color: '#b79a6f',
      background_color: '#b79a6f',
      display: 'standalone',
      start_url: '/',
      description: 'Website Description',
      lang: 'en',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: undefined,
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
        },
      ],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  sitemap: {
    sources: ['/api/sitemap'],
  },
});
