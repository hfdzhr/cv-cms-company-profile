<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-[200px] pb-[140px] overflow-hidden">
      <!-- Background Image -->
      <img src="/image/sampling-2.jpg" alt="Background" class="absolute inset-0 w-full h-full object-cover z-0" />
      
      <!-- Overlay -->
      <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900/85 to-slate-800/90 z-10"></div>
      
      <!-- Tech Lines -->
      <div class="absolute inset-0 pointer-events-none z-20">
        <div class="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent left-[10%]"></div>
        <div class="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent left-[30%]"></div>
        <div class="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent left-[70%]"></div>
        <div class="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent left-[90%]"></div>
      </div>

      <!-- Corner Accents -->
      <div class="absolute w-[60px] h-[60px] border-2 border-primary/50 z-20 top-10 left-10 border-r-0 border-b-0"></div>
      <div class="absolute w-[60px] h-[60px] border-2 border-primary/50 z-20 top-10 right-10 border-l-0 border-b-0"></div>
      <div class="absolute w-[60px] h-[60px] border-2 border-primary/50 z-20 bottom-10 left-10 border-r-0 border-t-0"></div>
      <div class="absolute w-[60px] h-[60px] border-2 border-primary/50 z-20 bottom-10 right-10 border-l-0 border-t-0"></div>

      <div class="container relative z-30 text-center">
        <h1 class="fade-in-up text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
          Solusi Alat Sampling <br><span class="text-primary">Terlengkap & Terpercaya</span>
        </h1>

        <p class="fade-in-up hero-text text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10" style="animation-delay: 0.2s">
          CV Cipta Mandiri Sampling menyediakan berbagai macam alat sampling lingkungan, laboratorium, dan industri dengan standar kualitas terbaik.
        </p>

        <div class="fade-in-up flex flex-col md:flex-row gap-5 justify-center" style="animation-delay: 0.4s">
          <NuxtLink to="/products" class="inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-primary border-2 border-primary font-bold uppercase tracking-wider transition-all shadow-lg hover:bg-transparent hover:text-white hover:shadow-primary/60">
            Lihat Produk
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-transparent border-2 border-white font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-primary hover:border-white">
            Hubungi Kami
          </NuxtLink>
        </div>

        <!-- Tech Stats -->
        <div class="fade-in-up mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20" style="animation-delay: 0.6s">
          <div class="text-center">
            <span class="block text-3xl font-bold text-white leading-none">10+</span>
            <span class="block text-sm text-slate-400 mt-1">Tahun Pengalaman</span>
          </div>
          <div class="hidden md:block w-px h-10 bg-white/20"></div>
          <div class="text-center">
            <span class="block text-3xl font-bold text-white leading-none">30+</span>
            <span class="block text-sm text-slate-400 mt-1">Produk Tersedia</span>
          </div>
          <div class="hidden md:block w-px h-10 bg-white/20"></div>
          <div class="text-center">
            <span class="block text-3xl font-bold text-white leading-none">1000+</span>
            <span class="block text-sm text-slate-400 mt-1">Klien Puas</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold text-center text-thunder mb-12">Mengapa Memilih Kami?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="group p-10 rounded border border-border bg-white text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
            <div class="text-4xl mb-5 text-secondary transition-colors group-hover:text-accent">
              <i class="ri-medal-line"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-thunder">Kualitas Terbaik</h3>
            <p class="text-muted">Produk kami terbuat dari bahan berkualitas tinggi dan memenuhi standar industri.</p>
          </div>
          <!-- Feature 2 -->
          <div class="group p-10 rounded border border-border bg-white text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
            <div class="text-4xl mb-5 text-secondary transition-colors group-hover:text-accent">
              <i class="ri-truck-line"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-thunder">Pengiriman Cepat</h3>
            <p class="text-muted">Kami menjamin pengiriman yang aman dan tepat waktu ke seluruh Indonesia.</p>
          </div>
          <!-- Feature 3 -->
          <div class="group p-10 rounded border border-border bg-white text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
            <div class="text-4xl mb-5 text-secondary transition-colors group-hover:text-accent">
              <i class="ri-customer-service-2-line"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-thunder">Layanan Sempurna</h3>
            <p class="text-muted">Tim support kami siap membantu Anda dengan konsultasi teknis dan purna jual.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Preview -->
    <section class="py-20 bg-bg-soft">
      <div class="container">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-thunder">Produk Unggulan</h2>
          <NuxtLink to="/products" class="text-primary font-semibold hover:text-accent transition-colors">Lihat Semua →</NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      <div class="container text-center relative z-10">
        <h2 class="text-3xl font-bold mb-4 text-white">Butuh Penawaran Khusus?</h2>
        <p class="text-slate-300 mb-8 max-w-2xl mx-auto">Hubungi tim kami untuk mendapatkan penawaran harga terbaik sesuai kebutuhan proyek Anda.</p>
        <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-white/10 border border-white backdrop-blur-sm font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-primary">
          Minta Penawaran
        </NuxtLink>
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
/* Utility animations */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
