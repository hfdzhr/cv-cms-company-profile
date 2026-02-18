<template>
  <div>
    <!-- Header -->
    <section class="pt-[150px] pb-20 bg-primary text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Hubungi Kami</h1>
        <p class="text-lg text-slate-200 mt-2">Kami siap membantu kebutuhan sampling Anda</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 flex justify-center">
        <div class="bg-white p-10 md:p-14 rounded shadow-lg w-full max-w-3xl">
          <!-- Card Header -->
          <div class="text-center mb-10">
            <h2 class="text-2xl font-bold text-thunder mb-3">Informasi Kontak</h2>
            <!-- text-muted (#6b7280) on white = ~5.7:1 — WCAG AA ✅ -->
            <p class="text-muted">Silahkan hubungi kami melalui WhatsApp untuk respon cepat atau kunjungi kantor kami.</p>
          </div>
          
          <!-- Info Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <!-- Address -->
            <div class="flex gap-4 items-start p-5 bg-bg rounded">
              <span class="text-2xl text-accent"><i class="ri-map-pin-2-line"></i></span>
              <div>
                <strong class="text-thunder block mb-1">Alamat</strong>
                <p class="text-muted text-sm leading-relaxed">Jl. Raya Sampling No. 123<br>Jakarta Selatan, DKI Jakarta 12345</p>
              </div>
            </div>
            
            <!-- Phone -->
            <div class="flex gap-4 items-start p-5 bg-bg rounded">
              <span class="text-2xl text-accent"><i class="ri-phone-line"></i></span>
              <div>
                <strong class="text-thunder block mb-1">Telepon</strong>
                <p class="text-muted text-sm">+62 812-3456-7890</p>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex gap-4 items-start p-5 bg-bg rounded">
              <span class="text-2xl text-accent"><i class="ri-mail-line"></i></span>
              <div>
                <strong class="text-thunder block mb-1">Email</strong>
                <p class="text-muted text-sm">info@blocksampling.com</p>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA -->
          <div class="text-center mb-10">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              class="inline-flex items-center gap-2.5 bg-[#25d366] text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
            >
              <i class="ri-whatsapp-line text-xl"></i>
              Chat via WhatsApp
            </a>
          </div>

          <!-- Map Placeholder -->
          <div class="w-full h-[300px] bg-bg-soft rounded border border-dashed border-slate-300 flex items-center justify-center text-muted">
            <div class="text-center">
              <i class="ri-map-2-line text-3xl mb-2 block"></i>
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
