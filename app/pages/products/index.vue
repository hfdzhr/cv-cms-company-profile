<template>
  <div>
    <!-- Header -->
    <section class="pt-[150px] pb-20 bg-primary text-center">
      <div class="container mx-auto px-4">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="mb-6">
          <ol class="flex items-center justify-center gap-2 text-sm text-white/80">
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink></li>
            <li><span class="mx-1">/</span></li>
            <li class="text-white font-medium">Katalog Alat Sampling</li>
          </ol>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Katalog Alat Sampling</h1>
        <p class="text-lg text-white mt-2">Temukan alat sampling berkualitas sesuai kebutuhan Anda</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { products } = useProducts()

useHead({
  title: 'Katalog Alat Sampling',
  meta: [
    { name: 'description', content: 'Katalog lengkap alat sampling lingkungan & laboratorium. Water sampler, soil auger, plankton net, secchi disk, sediment grab - harga terbaik di Indonesia.' },
    { property: 'og:title', content: 'Katalog Alat Sampling - CV Cipta Mandiri Sampling' },
    { property: 'og:description', content: 'Temukan berbagai alat sampling berkualitas untuk lingkungan, laboratorium & industri. Harga kompetitif, pengiriman ke seluruh Indonesia.' },
    { property: 'og:url', content: 'https://cipta-sampling.vercel.app/products' },
  ]
})
</script>
