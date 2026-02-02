<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-content text-center">
        <h1 class="fade-in-up">Solusi Alat Sampling <br><span class="text-accent">Terlengkap & Terpercaya</span></h1>
        <p class="hero-text fade-in-up" style="animation-delay: 0.2s">
          CV Cipta Mandiri Sampling menyediakan berbagai macam alat sampling lingkungan, laboratorium, dan industri dengan standar kualitas terbaik.
        </p>
        <div class="hero-buttons fade-in-up" style="animation-delay: 0.4s">
          <NuxtLink to="/products" class="btn btn-primary">Lihat Produk</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-accent">Hubungi Kami</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <h2 class="text-center">Mengapa Memilih Kami?</h2>
        <div class="grid-features">
          <div class="feature-card">
            <div class="icon-box"><i class="ri-medal-line"></i></div>
            <h3>Kualitas Terbaik</h3>
            <p>Produk kami terbuat dari bahan berkualitas tinggi dan memenuhi standar industri.</p>
          </div>
          <div class="feature-card">
            <div class="icon-box"><i class="ri-truck-line"></i></div>
            <h3>Pengiriman Cepat</h3>
            <p>Kami menjamin pengiriman yang aman dan tepat waktu ke seluruh Indonesia.</p>
          </div>
          <div class="feature-card">
            <div class="icon-box"><i class="ri-customer-service-2-line"></i></div>
            <h3>Layanan Sempurna</h3>
            <p>Tim support kami siap membantu Anda dengan konsultasi teknis dan purna jual.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Preview -->
    <section class="section bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Produk Unggulan</h2>
          <NuxtLink to="/products" class="btn-link">Lihat Semua →</NuxtLink>
        </div>
        <div class="grid-products">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container text-center">
        <h2>Butuh Penawaran Khusus?</h2>
        <p>Hubungi tim kami untuk mendapatkan penawaran harga terbaik sesuai kebutuhan proyek Anda.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Minta Penawaran</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { products } = useProducts()
const featuredProducts = computed(() => products.value.slice(0, 3))

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'CV Cipta Mandiri Sampling - Penyedia alat sampling lingkungan terpercaya dan berkualitas di Indonesia. Temukan produk water sampler, soil auger, dan lainnya.' }
  ]
})
</script>

<style scoped>
.hero {
  padding: 180px 0 100px;
  background: radial-gradient(circle at center, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-text {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 20px auto 40px;
  color: var(--color-text-light);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Features */
.features-section {
  background: #fff;
}

.grid-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.feature-card {
  padding: 40px;
  border-radius: 4px; /* Sharper */
  border: 1px solid #e2e8f0;
  background: #fff;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.icon-box {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--color-secondary);
}

/* Products Preview */
.bg-light { background-color: #f1f5f9; }

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.grid-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* CTA */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
}

.cta-section h2 { color: #fff; }
.cta-section p { color: #cbd5e1; margin-bottom: 30px; }
.cta-section .btn-primary { 
  background: #fff; 
  color: var(--color-primary); 
}
</style>
