<template>
  <div class="page-wrapper">
    <section class="page-header text-center">
      <div class="container">
        <h1>Hubungi Kami</h1>
        <p class="subtitle">Kami siap membantu kebutuhan sampling Anda</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-container">
        <div class="contact-info-card">
          <div class="card-header">
            <h2>Informasi Kontak</h2>
            <p>Silahkan hubungi kami melalui WhatsApp untuk respon cepat atau kunjungi kantor kami.</p>
          </div>
          
          <div class="info-grid">
            <div class="info-item">
              <span class="icon"><i class="ri-map-pin-2-line"></i></span>
              <div>
                <strong>Alamat</strong>
                <p>Jl. Raya Sampling No. 123<br>Jakarta Selatan, DKI Jakarta 12345</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="icon"><i class="ri-phone-line"></i></span>
              <div>
                <strong>Telepon</strong>
                <p>+62 812-3456-7890</p>
              </div>
            </div>
            
            <div class="info-item">
              <span class="icon"><i class="ri-mail-line"></i></span>
              <div>
                <strong>Email</strong>
                <p>info@blocksampling.com</p>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA Button -->
          <div class="cta-wrapper">
             <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-whatsapp">
                <i class="ri-whatsapp-line" style="font-size: 1.2rem;"></i>
                Chat via WhatsApp
             </a>
          </div>

          <div class="map-placeholder">
            <!-- Google Maps Embed would go here -->
            <div class="map-content">
              <i class="ri-map-2-line" style="font-size: 2rem; margin-bottom: 10px;"></i>
              <p>Lokasi Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us',
  meta: [
    { name: 'description', content: 'Hubungi CV Cipta Mandiri Sampling via WhatsApp untuk penawaran harga terbaik alat sampling.' }
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

.contact-container {
  display: flex;
  justify-content: center;
}

.contact-info-card {
  background: #fff;
  padding: 50px;
  border-radius: 4px; /* Sharper */
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 800px;
}

.card-header {
  text-align: center;
  margin-bottom: 40px;
}

.card-header h2 { margin-bottom: 10px; }

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  padding: 20px;
  background: #f8fafc;
  border-radius: 4px;
}

.icon {
  font-size: 1.5rem;
  color: var(--color-accent);
}

.cta-wrapper {
  text-align: center;
  margin-bottom: 40px;
}

.btn-whatsapp {
  background-color: #25d366;
  color: #fff;
  font-size: 1.1rem;
  padding: 15px 40px;
  border-radius: 50px; /* Keep pill shape for CTA button */
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
}

.map-placeholder {
  width: 100%;
  height: 300px;
  background: #f1f5f9;
  border-radius: 4px;
  border: 1px dashed #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
}

.map-content {
  text-align: center;
}
</style>
