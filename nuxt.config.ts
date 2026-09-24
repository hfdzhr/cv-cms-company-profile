import fs from 'node:fs';
import path from 'node:path';

function getSitemapUrls() {
  const baseUrls = ['/', '/about', '/products', '/contact'];
  try {
    const productsFile = path.resolve(process.cwd(), 'app/data/products.json');
    if (fs.existsSync(productsFile)) {
      const products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
      const productUrls = products.map(p => `/products/${p.slug}`);
      return [...baseUrls, ...productUrls];
    }
  } catch (err) {
    console.warn('Could not read products.json for sitemap:', err.message);
  }
  return baseUrls;
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
  css: ["~/assets/css/main.css"],

  site: {
    url: "https://cipta-sampling.vercel.app",
    name: "CV Cipta Mandiri Sampling",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s | Produsen Alat Sampling Laboratorium & Lingkungan - CV Cipta Mandiri Sampling",
      meta: [
        {
          name: "description",
          content:
            "CV Cipta Mandiri Sampling - Produsen alat sampling lingkungan dan laboratorium terpercaya di Indonesia. Sedia water sampler, soil auger, plankton net, sediment grab sampler harga langsung pabrik & melayani custom spesifikasi.",
        },
        { name: "theme-color", content: "#0f172a" },
        // Google Verification
        { name: "google-site-verification", content: "DSEXWP4LUnMHKsM8AUYTpskHB11VeRfDZfJAgag6AYc" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "CV Cipta Mandiri Sampling" },
        { property: "og:locale", content: "id_ID" },
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
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
  ],

  sitemap: {
    urls: getSitemapUrls(),
  },
});