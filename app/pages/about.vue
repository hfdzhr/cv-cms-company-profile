<template>
  <div class="page-wrapper">
    <!-- Header -->
    <section class="page-header text-center">
      <div class="container">
        <h1 class="fade-in-up">Tentang Kami</h1>
        <p class="subtitle fade-in-up">Mengenal lebih dekat CV Cipta Mandiri Sampling</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Sejarah Kami</h2>
            <p>Didirikan dengan semangat untuk mendukung kemajuan riset dan pemantauan lingkungan di Indonesia, CV Cipta Mandiri Sampling telah tumbuh menjadi penyedia terpercaya untuk berbagai alat sampling.</p>
            <p>Kami memahami betapa pentingnya akurasi dalam pengambilan sampel. Oleh karena itu, kami berkomitmen untuk menyediakan peralatan yang tidak hanya tahan lama, tetapi juga presisi dan memenuhi standar internasional.</p>
          </div>
          <div class="image-box">
             <!-- Placeholder for office/team image -->
             <div class="placeholder-img">CMS Office Tour</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Mission -->
    <section class="section bg-light">
      <div class="container">
        <div class="vm-grid">
          <div class="vm-card">
            <h3>Visi</h3>
            <p>Menjadi perusahaan penyedia peralatan sampling dan laboratorium terdepan di Indonesia yang dikenal akan kualitas, inovasi, ve da layanan purna jual yang unggul.</p>
          </div>
          <div class="vm-card">
            <h3>Misi</h3>
            <ul>
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

<style scoped>
.page-header {
  padding: 150px 0 80px;
  background: var(--color-primary);
  color: #fff;
}

.page-header h1 { color: #fff; }
.subtitle { color: #cbd5e1; font-size: 1.2rem; margin-top: 10px; }

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

.image-box {
  height: 400px;
  background: #cbd5e1;
  border-radius: 4px; /* Sharper */
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-img {
  font-weight: 700;
  color: #64748b;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.vm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.vm-card {
  background: #fff;
  padding: 40px;
  border-radius: 4px; /* Sharper */
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border-top: 4px solid var(--color-accent);
}

.vm-card h3 {
  margin-bottom: 20px;
  color: var(--color-primary);
}

.vm-card ul {
  list-style: disc;
  padding-left: 20px;
  color: var(--color-text);
}

.vm-card li { margin-bottom: 10px; }
</style>
