// Dynamic product URLs for sitemap
export default defineEventHandler(() => {
  const products = [
    'secchi-disk-sample',
    'soil-auger-kit',
    'plankton-net',
    'sediment-grab-sampler',
    'air-sampler-impinger',
  ]

  return products.map(slug => ({
    loc: `https://cipta-sampling.vercel.app/products/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }))
})
