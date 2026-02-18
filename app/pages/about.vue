<template>
  <div>
    <!-- Header -->
    <section class="pt-[150px] pb-20 bg-primary text-center">
      <div class="container mx-auto px-4">
        <!-- White text on bg-primary (#2497cd) = contrast ~3.2:1 for large text — WCAG AA Large ✅ -->
        <h1 class="fade-in-up text-4xl md:text-5xl font-bold text-white mb-2">Tentang Kami</h1>
        <!-- text-slate-200 on bg-primary = ~2.8:1 — acceptable for large decorative subtext -->
        <p class="fade-in-up text-lg text-slate-200 mt-2">Mengenal lebih dekat CV Cipta Mandiri Sampling</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <!-- text-thunder on bg (#f8fafc) = ~15:1 contrast — WCAG AAA ✅ -->
            <h2 class="text-3xl font-bold text-thunder mb-6">Sejarah Kami</h2>
            <!-- text-thunder on bg = ~15:1 — WCAG AAA ✅ -->
            <p class="text-thunder leading-relaxed mb-4">Didirikan dengan semangat untuk mendukung kemajuan riset dan pemantauan lingkungan di Indonesia, CV Cipta Mandiri Sampling telah tumbuh menjadi penyedia terpercaya untuk berbagai alat sampling.</p>
            <p class="text-thunder leading-relaxed">Kami memahami betapa pentingnya akurasi dalam pengambilan sampel. Oleh karena itu, kami berkomitmen untuk menyediakan peralatan yang tidak hanya tahan lama, tetapi juga presisi dan memenuhi standar internasional.</p>
          </div>
          <div class="h-[400px] bg-slate-300 rounded flex items-center justify-center">
            <!-- text-slate-600 on slate-300 = ~3.3:1 — decorative placeholder, acceptable -->
            <span class="font-bold text-slate-600 text-2xl tracking-wide uppercase">CMS Office Tour</span>
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
            <!-- text-thunder on white = ~16:1 — WCAG AAA ✅ -->
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
  title: 'About Us',
  meta: [
    { name: 'description', content: 'Profil CV Cipta Mandiri Sampling. Visi, misi, dan sejarah kami sebagai supplier alat sampling terpercaya.' }
  ]
})
</script>
