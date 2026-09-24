<template>
  <div v-if="product">
    <section class="py-20 mt-12">
      <div class="container mx-auto px-4">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-muted">
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Beranda</NuxtLink></li>
            <li><span class="mx-1">/</span></li>
            <li><NuxtLink to="/products" class="hover:text-primary transition-colors">Alat Sampling</NuxtLink></li>
            <li><span class="mx-1">/</span></li>
            <li class="text-thunder font-medium">{{ product.name }}</li>
          </ol>
        </nav>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Image Gallery -->
          <div class="lg:sticky lg:top-[100px] self-start">
            <!-- Main Image -->
            <div class="bg-bg-soft rounded overflow-hidden mb-4">
              <img 
                :src="activeImage" 
                :alt="product.name" 
                class="w-full h-auto block transition-opacity duration-300"
              >
            </div>

            <!-- Thumbnail Grid -->
            <div v-if="galleryImages.length > 1" class="grid gap-3" :class="thumbnailGridClass">
              <button 
                v-for="(img, index) in galleryImages" 
                :key="index"
                @click="activeIndex = index"
                class="aspect-square rounded overflow-hidden border-2 transition-all duration-200 cursor-pointer"
                :class="activeIndex === index 
                  ? 'border-primary shadow-md ring-2 ring-primary/20' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-300'"
              >
                <img :src="img" :alt="`${product.name} - Gambar ${index + 1}`" class="w-full h-full object-cover">
              </button>
            </div>

            <!-- Image Counter -->
            <p v-if="galleryImages.length > 1" class="text-center text-sm text-muted mt-3">
              {{ activeIndex + 1 }} / {{ galleryImages.length }} gambar
            </p>
          </div>
          
          <!-- Product Info -->
          <div>
            <!-- Category Badge -->
            <div v-if="product.category" class="mb-3">
              <span class="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                {{ product.category }}
              </span>
            </div>

            <!-- text-thunder on bg = ~15:1 — WCAG AAA Passed -->
            <h1 class="text-3xl md:text-4xl font-bold text-thunder mb-3">{{ product.name }}</h1>
            <div class="flex items-center gap-3 mb-6">
              <span class="text-2xl font-bold text-primary">{{ product.price }}</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 font-medium px-2.5 py-0.5 rounded">
                Harga Langsung Produsen
              </span>
            </div>
            
            <!-- Description -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-thunder mb-4 pb-3 border-b-2 border-bg-soft">Deskripsi</h3>
              <p class="text-thunder leading-relaxed whitespace-pre-line">{{ product.description }}</p>
            </div>
            
            <!-- Specifications -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-thunder mb-4 pb-3 border-b-2 border-bg-soft">Spesifikasi</h3>
              <ul class="list-disc pl-5 space-y-2">
                <li v-for="(spec, index) in product.specifications" :key="index" class="text-thunder">
                  {{ spec }}
                </li>
              </ul>
            </div>
            
            <!-- Actions (WhatsApp Primary, Tokopedia Secondary) -->
            <div class="flex flex-col sm:flex-row gap-3 mt-8">
              <a 
                :href="whatsappLink" 
                target="_blank" 
                class="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-3.5 rounded-lg font-bold text-base shadow-lg hover:bg-[#20bd5a] hover:shadow-xl transition-all duration-200"
              >
                <i class="ri-whatsapp-line text-2xl"></i> Chat WhatsApp (Harga Pabrik & Custom)
              </a>
              <a 
                v-if="product.tokopediaLink"
                :href="product.tokopediaLink" 
                target="_blank" 
                class="inline-flex items-center justify-center gap-2 bg-white text-[#42b549] border-2 border-[#42b549] px-6 py-3.5 rounded-lg font-semibold hover:bg-[#42b549] hover:text-white transition-all duration-200"
              >
                <i class="ri-store-2-line text-xl"></i> Beli di Tokopedia
              </a>
            </div>

            <!-- WhatsApp Discount Banner -->
            <div class="mt-6 p-4 bg-[#25d366]/10 border border-[#25d366]/30 rounded-lg flex items-start gap-3">
              <i class="ri-shield-check-line text-[#25d366] text-2xl mt-0.5 shrink-0"></i>
              <div>
                <p class="text-thunder font-semibold text-sm">Keuntungan Pesan Langsung via WhatsApp</p>
                <p class="text-muted text-sm mt-1 leading-relaxed">
                  Dapatkan <strong class="text-emerald-700">harga tangan pertama</strong> tanpa biaya layanan marketplace, konsultasi gratis untuk kustomisasi ukuran/material, dan panduan teknis langsung dari perakit alat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Not Found State -->
  <div v-else class="container mx-auto px-4 py-24 text-center">
    <div class="max-w-md mx-auto">
      <i class="ri-error-warning-line text-6xl text-muted mb-4 block"></i>
      <h2 class="text-2xl font-bold text-thunder mb-4">Produk tidak ditemukan</h2>
      <p class="text-muted mb-8">Produk yang Anda cari tidak tersedia atau telah dihapus.</p>
      <NuxtLink to="/products" class="btn btn-primary">Kembali ke Katalog</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { getProductBySlug } = useProducts()

const product = computed(() => getProductBySlug(route.params.slug))

// Image gallery state
const activeIndex = ref(0)

const galleryImages = computed(() => {
  if (!product.value) return []
  // Use the images array if available, otherwise fallback to single image
  return product.value.images && product.value.images.length > 0 
    ? product.value.images 
    : [product.value.image]
})

const activeImage = computed(() => {
  return galleryImages.value[activeIndex.value] || ''
})

// Responsive thumbnail grid class
const thumbnailGridClass = computed(() => {
  const count = galleryImages.value.length
  if (count <= 3) return 'grid-cols-3'
  if (count <= 4) return 'grid-cols-4'
  return 'grid-cols-5'
})

// Reset active index when product changes
watch(product, () => {
  activeIndex.value = 0
})

// Dynamic SEO
useHead(() => ({
  title: product.value ? `${product.value.name} - Harga & Spesifikasi` : 'Produk Tidak Ditemukan',
  meta: [
    { name: 'description', content: product.value ? `${product.value.name}. ${product.value.description.substring(0, 150)}... Beli di CV Cipta Mandiri Sampling.` : 'Detail produk alat sampling' },
    { property: 'og:title', content: product.value ? `${product.value.name} - CV Cipta Mandiri Sampling` : 'Produk Tidak Ditemukan' },
    { property: 'og:description', content: product.value ? product.value.description.substring(0, 160) : '' },
    { property: 'og:url', content: `https://cipta-sampling.vercel.app/products/${route.params.slug}` },
    { property: 'og:image', content: product.value ? `https://cipta-sampling.vercel.app${product.value.image}` : '' },
    { property: 'og:type', content: 'product' },
  ],
  script: product.value ? [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Beranda',
            item: 'https://cipta-sampling.vercel.app'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Alat Sampling',
            item: 'https://cipta-sampling.vercel.app/products'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.value.name,
            item: `https://cipta-sampling.vercel.app/products/${route.params.slug}`
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.value.name,
        description: product.value.description,
        image: product.value.images.map(img => img.startsWith('http') ? img : `https://cipta-sampling.vercel.app${img}`),
        brand: {
          '@type': 'Brand',
          name: 'CV Cipta Mandiri Sampling'
        },
        offers: {
          '@type': 'Offer',
          url: `https://cipta-sampling.vercel.app/products/${route.params.slug}`,
          priceCurrency: 'IDR',
          price: product.value.price.replace(/[^0-9]/g, '') || '0',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'CV Cipta Mandiri Sampling'
          }
        }
      })
    }
  ] : []
}))

const whatsappLink = computed(() => {
  if (!product.value) return '#'
  const text = `Halo CV Cipta Mandiri Sampling, saya tertarik dengan produk ${product.value.name}. Bisa info harga langsung produsen dan opsi kustomisasinya?`
  return `https://wa.me/6281386336771?text=${encodeURIComponent(text)}`
})
</script>
