// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - CV Cipta Mandiri Sampling",
      meta: [
        {
          name: "description",
          content:
            "Supplier terpercaya untuk alat-alat sampling lingkungan dan laboratorium di Indonesia.",
        },
        { name: "theme-color", content: "#0f172a" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" }
      ],
    },
  },
});
