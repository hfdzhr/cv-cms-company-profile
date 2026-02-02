<template>
  <div class="page-wrapper">
    <section class="page-header text-center">
      <div class="container">
        <h1>Katalog Produk</h1>
        <p class="subtitle">Temukan alat sampling berkualitas sesuai kebutuhan Anda</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Search bar/Filter could go here -->
        
        <div class="grid-products">
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

<style scoped>
.page-header {
  padding: 150px 0 80px;
  background: var(--color-primary);
  color: #fff;
}

.page-header h1 { color: #fff; }
.subtitle { color: #cbd5e1; font-size: 1.2rem; margin-top: 10px; }

.grid-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
</style>
