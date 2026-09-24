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
            <li class="text-white font-medium">Tentang Kami</li>
          </ol>
        </nav>
        <h1 class="fade-in-up text-4xl md:text-5xl font-bold text-white mb-2">Tentang Kami</h1>
        <p class="fade-in-up text-lg text-white mt-2">Mengenal lebih dekat CV Cipta Mandiri Sampling - Produsen Alat Sampling Laboratorium & Lingkungan</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <!-- text-thunder on bg (#f8fafc) = ~15:1 contrast — WCAG AAA Passed -->
            <h2 class="text-3xl font-bold text-thunder mb-6">Tentang & Sejarah Kami</h2>
            <!-- text-thunder on bg = ~15:1 — WCAG AAA Passed -->
            <p class="text-thunder leading-relaxed mb-4">
              Didirikan dengan semangat untuk mendukung riset ilmiah, praktisi lingkungan, dan analis laboratorium di Indonesia, <strong>CV Cipta Mandiri Sampling</strong> hadir sebagai produsen langsung peralatan sampling lapangan dan laboratorium yang berpusat di Ciamis, Jawa Barat.
            </p>
            <p class="text-thunder leading-relaxed mb-4">
              Kami memfokuskan diri pada fabrikasi mandiri berbagai instrumen mekanikal sampling—mulai dari alat pengambil sedimen, bor tanah, jaring plankton, hingga pengukur kualitas air. Karena diproduksi langsung dari workshop kami, kami mampu menghadirkan produk dengan harga tangan pertama yang terjangkau serta fleksibel melayani pesanan kustom spesifikasi teknis sesuai metode uji yang diinginkan.
            </p>
            <p class="text-thunder leading-relaxed">
              Kami berkomitmen untuk terus menyediakan peralatan yang tidak hanya kokoh dan tahan lama, tetapi juga memiliki tingkat kepresisian tinggi demi menjaga integritas setiap sampel penelitian Anda.
            </p>
          </div>
          <div class="h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-white shadow-xl relative overflow-hidden">
            <div class="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sky-300 text-3xl mb-4">
              <i class="ri-community-line"></i>
            </div>
            <h3 class="font-bold text-xl mb-2 text-white">Workshop Fabrikasi CMS</h3>
            <p class="text-slate-300 text-sm max-w-sm">
              Pusat produksi dan perakitan alat sampling laboratorium & lingkungan di Ciamis, Jawa Barat.
            </p>
            <span class="mt-4 inline-block text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-slate-300">
              Pengiriman ke Seluruh Indonesia
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Mission -->
    <section class="py-20 bg-bg-soft">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Visi Card -->
          <div class="bg-white p-10 rounded shadow-sm border-t-4 border-accent">
            <h3 class="text-xl font-bold text-primary mb-5">Visi</h3>
            <!-- text-thunder on white = ~16:1 — WCAG AAA Passed -->
            <p class="text-thunder leading-relaxed">Menjadi perusahaan penyedia peralatan sampling dan laboratorium terdepan di Indonesia yang dikenal akan kualitas, inovasi, dan layanan purna jual yang unggul.</p>
          </div>
          <!-- Misi Card -->
          <div class="bg-white p-10 rounded shadow-sm border-t-4 border-accent">
            <h3 class="text-xl font-bold text-primary mb-5">Misi</h3>
            <ul class="list-disc pl-5 text-thunder space-y-2.5 leading-relaxed">
              <li>Menyediakan produk berkualitas tinggi dengan harga yang kompetitif.</li>
              <li>Memberikan solusi teknis yang tepat guna bagi kebutuhan pelanggan.</li>
              <li>Membangun hubungan jangka panjang yang saling menguntungkan dengan mitra dan klien.</li>
              <li>Terus berinovasi dalam pengembangan produk lokal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Tentang Kami',
  meta: [
    { name: 'description', content: 'Profil CV Cipta Mandiri Sampling - Produsen alat sampling laboratorium dan lingkungan di Ciamis, Jawa Barat. Harga tangan pertama dan melayani custom spesifikasi.' },
    { property: 'og:title', content: 'Tentang Kami - CV Cipta Mandiri Sampling' },
    { property: 'og:description', content: 'Sejarah, visi, dan komitmen CV Cipta Mandiri Sampling sebagai produsen alat sampling terpercaya di Indonesia.' },
    { property: 'og:url', content: 'https://cipta-sampling.vercel.app/about' },
  ]
})
</script>
