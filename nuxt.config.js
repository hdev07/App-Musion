import brand from "./static/text/brand.js";
import dotenv from "dotenv";
dotenv.config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Musion",
    title: "Musion",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: brand.musion.desc },
      { name: "msapplication-TileColor", content: "#FF4081" },
      // Facebook
      { property: "author", content: "musion" },
      { property: "og:site_name", content: "musion.day" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:type", content: "website" },
      // Twitter
      { property: "twitter:site", content: "musion.day" },
      { property: "twitter:domain", content: "musion.day" },
      { property: "twitter:creator", content: "musion" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:image:src", content: brand.musion.img },
      { property: "og:url", content: brand.musion.url },
      { property: "og:title", content: brand.musion.projectName },
      { property: "og:description", content: brand.musion.desc },
      { name: "twitter:site", content: brand.musion.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: brand.musion.img },
      { property: "og:image", content: brand.musion.img },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: {
    color: "#FF4081",
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/mixins/utilsMixins",
    "~/plugins/globalComponents",
    "~/plugins/vuesax",
    "~/plugins/helpers",
    { src: "~/plugins/device.js", ssr: false },
    { src: "~/plugins/vee-validate.js", ssr: false },
    { src: "~/plugins/axios.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/tailwindcss",
  ],

  store: {
    modules: [
      "~/store/auth.js", // Ruta al archivo de tu módulo Vuex
    ],
  },

  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#FF4081",
          secondary: "#1A1A1A",
          tertary: "#AEAEAE",
          acent: "#212120",
        },
        // dark: {
        //   primary: "#FF4081",
        // },
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  router: {
    middleware: ["auth"],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  manifest: {
    name: "Musion",
    lang: "es",
    display: "standalone",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: [/^vue2-google-maps($|\/)/],
  },
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  },
};
