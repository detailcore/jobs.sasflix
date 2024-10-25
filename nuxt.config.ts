import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  telemetry: false,

  css: ['~/assets/styles/index.scss'],

  modules: ['@pinia/nuxt'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/assets/styles/_vars.scss" as *;
            @use "@/assets/styles/_fonts.scss" as *;
            @use "@/assets/styles/_extends.scss" as *;
          `,
        },
      },
    },
    plugins: [svgLoader()],
  },
})
