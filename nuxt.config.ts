// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  build: {
    extractCSS: false,
    transpile: ["vuetify"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: ["@/assets/css/main.css", "@/assets/scss/style.scss"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
