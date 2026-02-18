<template>
  <div v-if="product">
    <section class="py-20 mt-12">
      <div class="container mx-auto px-4">
        <!-- Back Link -->
        <NuxtLink to="/products" class="inline-flex items-center gap-2 mb-8 text-muted font-medium hover:text-primary transition-colors">
          <i class="ri-arrow-left-line"></i> Kembali ke Katalog
        </NuxtLink>
        
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
            <!-- text-thunder on bg = ~15:1 — WCAG AAA ✅ -->
            <h1 class="text-3xl md:text-4xl font-bold text-thunder mb-3">{{ product.name }}</h1>
            <div class="text-2xl font-bold text-primary mb-8">{{ product.price }}</div>
            
            <!-- Description -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-thunder mb-4 pb-3 border-b-2 border-bg-soft">Deskripsi</h3>
              <p class="text-thunder leading-relaxed">{{ product.description }}</p>
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
            
            <!-- Actions -->
            <div class="flex flex-wrap gap-4 mt-10">
              <a 
                :href="product.tokopediaLink" 
                target="_blank" 
                class="btn bg-[#42b549] text-white border border-[#42b549] hover:bg-[#37a33e] hover:-translate-y-0.5 hover:shadow-lg"
              >
                <i class="ri-store-2-line mr-2"></i> Beli di Tokopedia
              </a>
              <a 
                :href="whatsappLink" 
                target="_blank" 
                class="inline-flex items-center justify-center px-8 py-3 rounded border-2 border-[#25d366] text-[#25d366] font-semibold transition-all duration-200 hover:bg-[#25d366] hover:text-white"
              >
                <i class="ri-whatsapp-line mr-2"></i> Chat WhatsApp
              </a>
            </div>

            <!-- WhatsApp Discount Banner -->
            <div class="mt-6 p-4 bg-[#25d366]/10 border border-[#25d366]/30 rounded-lg flex items-start gap-3">
              <i class="ri-whatsapp-line text-[#25d366] text-2xl mt-0.5 shrink-0"></i>
              <div>
                <p class="text-thunder font-semibold text-sm">Dapatkan Harga Lebih Murah via WhatsApp!</p>
                <p class="text-muted text-sm mt-1 leading-relaxed">
                  Hubungi kami langsung melalui WhatsApp untuk mendapatkan <strong class="text-[#25d366]">harga spesial</strong> 
                  dan penawaran eksklusif yang tidak tersedia di marketplace. Konsultasi gratis!
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
  title: product.value ? product.value.name : 'Produk Tidak Ditemukan',
  meta: [
    { name: 'description', content: product.value ? product.value.description : 'Detail produk alat sampling' }
  ]
}))

const whatsappLink = computed(() => {
  if (!product.value) return '#'
  const text = `Halo, saya tertarik dengan produk ${product.value.name}`
  return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`
})
</script>
