<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-[200px] pb-[140px] overflow-hidden">
      <!-- Background Image -->
      <img src="/image/image-hero-section.webp" alt="Background" class="absolute inset-0 w-full h-full object-cover z-0" />
      
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
        <h1 class="fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
          Alat Sampling <br><span class="text-primary">Laboratorium & Lingkungan</span>
        </h1>

        <p class="fade-in-up hero-text text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10" style="animation-delay: 0.2s">
          Harga tangan pertama langsung dari workshop perakitan. Kami melayani kebutuhan eceran, kustomisasi ukuran, dan spesifikasi sesuai standar pengujian lab.
        </p>

        <div class="fade-in-up flex flex-col md:flex-row gap-5 justify-center" style="animation-delay: 0.4s">
          <NuxtLink to="/products" class="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white bg-primary border-2 border-primary font-bold uppercase tracking-wider transition-all shadow-lg hover:bg-transparent hover:text-white hover:shadow-primary/60">
            Lihat Katalog Produk
          </NuxtLink>
          <a 
            href="https://wa.me/6281386336771?text=Halo%20CV%20Cipta%20Mandiri%20Sampling%2C%20saya%20tertarik%20dengan%20produk%20alat%20sampling%20dan%20ingin%20konsultasi" 
            target="_blank" 
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white bg-[#25d366] border-2 border-[#25d366] font-bold uppercase tracking-wider transition-all hover:bg-[#20bd5a] hover:border-[#20bd5a] shadow-lg"
          >
            <i class="ri-whatsapp-line text-xl"></i> Chat WhatsApp
          </a>
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
              <i class="ri-price-tag-3-line"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-thunder">Harga Langsung Produsen</h3>
            <p class="text-muted">Dapatkan harga tangan pertama langsung dari bengkel perakitan kami tanpa perantara atau markup toko.</p>
          </div>
          <!-- Feature 2 -->
          <div class="group p-10 rounded border border-border bg-white text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
            <div class="text-4xl mb-5 text-secondary transition-colors group-hover:text-accent">
              <i class="ri-settings-4-line"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-thunder">Bisa Custom Spesifikasi</h3>
            <p class="text-muted">Panjang tangkai, diameter tabung, hingga ukuran mesh dapat disesuaikan dengan kebutuhan penelitian lapangan Anda.</p>
          </div>
          <!-- Feature 3 -->
          <div class="group p-10 rounded border border-border bg-white text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
            <div class="text-4xl mb-5 text-secondary transition-colors group-hover:text-accent">
              <i class="ri-customer-service-2-line"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-thunder">Konsultasi Teknis Cepat</h3>
            <p class="text-muted">Konsultasi gratis via WhatsApp langsung dengan tim kami untuk rekomendasi alat sampling yang tepat guna.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Preview -->
    <section class="py-20 bg-bg-soft">
      <div class="container">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-thunder">Produk Unggulan</h2>
          <NuxtLink to="/products" class="text-primary-darker font-semibold hover:text-accent transition-colors">Lihat Semua →</NuxtLink>
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
  title: 'Beranda',
  meta: [
    { name: 'description', content: 'CV Cipta Mandiri Sampling - Produsen alat sampling laboratorium & lingkungan terpercaya di Indonesia. Jual water sampler, soil auger, plankton net, secchi disk harga langsung bengkel & bisa custom.' },
    // Open Graph
    { property: 'og:title', content: 'Produsen Alat Sampling Laboratorium & Lingkungan - CV Cipta Mandiri Sampling' },
    { property: 'og:description', content: 'Produsen alat sampling lingkungan & laboratorium terpercaya. Harga tangan pertama langsung dari bengkel perakitan & melayani custom spesifikasi.' },
    { property: 'og:url', content: 'https://cipta-sampling.vercel.app' },
    { property: 'og:image', content: 'https://cipta-sampling.vercel.app/image/cv-cipta-mandiri-sampling-logo.png' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Produsen Alat Sampling Laboratorium & Lingkungan - CV Cipta Mandiri Sampling' },
    { name: 'twitter:description', content: 'Produsen alat sampling lingkungan & laboratorium terpercaya di Indonesia. Harga pabrik langsung & melayani custom.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CV Cipta Mandiri Sampling',
        url: 'https://cipta-sampling.vercel.app',
        logo: 'https://cipta-sampling.vercel.app/image/cv-cipta-mandiri-sampling-logo.png',
        description: 'Supplier alat sampling lingkungan, laboratorium & industri terpercaya di Indonesia.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Cipining, Desa Sidaharja, Kec. Pamarican',
          addressLocality: 'Kab. Ciamis',
          addressRegion: 'Jawa Barat',
          postalCode: '46382',
          addressCountry: 'ID'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62-813-8633-6771',
          contactType: 'customer service',
          availableLanguage: 'Indonesian'
        },
        sameAs: []
      })
    }
  ]
})
</script>

