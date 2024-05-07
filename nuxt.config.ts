export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  runtimeConfig: {
    // Will be available in both client and server
    public: {
      tokenAPI: '',
      apiUrl: '',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", 'nuxt-icon'],
})