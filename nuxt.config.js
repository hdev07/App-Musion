require("dotenv").config();

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
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#FF4081" },
      {
        hid: "description",
        name: "description",
        content: "Ven a descubrir todos los museos que tiene CDMX para ti",
      },
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

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: "#F48FB1",
        },
        // dark: {
        //   primary: "#FF4081",
        // },
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/pwa", "@nuxtjs/dotenv", "@nuxtjs/axios"],

  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:5000/api/v1",
  },

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
  },
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  },
};
