import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  telemetry: false,

  modules: ['@pinia/nuxt'],

  vite: {
    plugins: [svgLoader()],
  },
})
