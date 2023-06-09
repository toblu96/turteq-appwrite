// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    'nuxt-appwrite'
  ],
  ssr: false,
  typescript: {
    shim: false
  },
  routeRules: {
    '/': { redirect: '/projects' }
  },
  appwrite: {
    project: '644cf709ad88661c8222',
    endpoint: 'http://localhost/v1'
  }
})
