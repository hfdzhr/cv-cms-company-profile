<template>
  <div>
    <!-- Header -->
    <section class="pt-[150px] pb-20 bg-primary text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Katalog Produk</h1>
        <p class="text-lg text-slate-200 mt-2">Temukan alat sampling berkualitas sesuai kebutuhan Anda</p>
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
  title: 'Katalog Produk',
  meta: [
    { name: 'description', content: 'Katalog lengkap alat sampling CV Cipta Mandiri Sampling. Water sampler, Soil auger, Plankton net, dan berbagai peralatan laboratorium lainnya.' }
  ]
})
</script>
