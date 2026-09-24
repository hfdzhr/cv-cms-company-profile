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
            <li class="text-white font-medium">Hubungi Kami</li>
          </ol>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Hubungi Kami</h1>
        <p class="text-lg text-white mt-2">Kami siap membantu kebutuhan alat sampling Anda</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 flex justify-center">
        <div class="bg-white p-6 sm:p-8 md:p-8 lg:p-12 rounded-2xl shadow-lg w-full max-w-4xl">
          <!-- Card Header -->
          <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-thunder mb-3">Informasi Kontak</h2>
            <!-- text-muted (#6b7280) on white = ~5.7:1 — WCAG AA Passed -->
            <p class="text-muted text-sm sm:text-base max-w-md mx-auto">Silahkan hubungi kami melalui WhatsApp untuk respon cepat atau kunjungi kantor kami.</p>
          </div>
          
          <!-- Info Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-6 mb-10">
            <!-- Address -->
            <div class="flex gap-3 items-start p-4 lg:p-5 bg-bg rounded-xl border border-slate-100 transition-all hover:border-primary/30 hover:shadow-sm">
              <span class="text-2xl text-accent shrink-0 mt-0.5"><i class="ri-map-pin-2-line"></i></span>
              <div class="min-w-0 flex-1">
                <strong class="text-thunder block mb-1 font-semibold">Alamat</strong>
                <p class="text-muted text-sm leading-relaxed">Jl. Cipining, Desa Sidaharja, Kec. Pamarican, Kab. Ciamis, Jawa Barat 46382</p>
              </div>
            </div>
            
            <!-- Phone -->
            <div class="flex gap-3 items-start p-4 lg:p-5 bg-bg rounded-xl border border-slate-100 transition-all hover:border-primary/30 hover:shadow-sm">
              <span class="text-2xl text-accent shrink-0 mt-0.5"><i class="ri-phone-line"></i></span>
              <div class="min-w-0 flex-1">
                <strong class="text-thunder block mb-1 font-semibold">Telepon</strong>
                <a href="tel:+6281386336771" class="text-muted text-sm hover:text-primary transition-colors block font-medium">+62 813-8633-6771</a>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex gap-3 items-start p-4 lg:p-5 bg-bg rounded-xl border border-slate-100 transition-all hover:border-primary/30 hover:shadow-sm">
              <span class="text-2xl text-accent shrink-0 mt-0.5"><i class="ri-mail-line"></i></span>
              <div class="min-w-0 flex-1">
                <strong class="text-thunder block mb-1 font-semibold">Email</strong>
                <a 
                  href="mailto:ciptamandirisampling@gmail.com" 
                  class="text-muted text-sm hover:text-primary transition-colors block [overflow-wrap:anywhere] font-medium leading-snug"
                  title="ciptamandirisampling@gmail.com"
                >
                  ciptamandirisampling<wbr>@gmail.com
                </a>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA -->
          <div class="text-center mb-10">
            <a 
              href="https://wa.me/6281386336771?text=Halo%20CV%20Cipta%20Mandiri%20Sampling%2C%20saya%20ingin%20konsultasi%20dan%20informasi%20alat%20sampling" 
              target="_blank" 
              class="inline-flex items-center gap-2.5 bg-[#25d366] text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
            >
              <i class="ri-whatsapp-line text-xl"></i>
              Chat via WhatsApp (Respon Cepat)
            </a>
          </div>

          <div class="w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1372699338453!2d108.57973317431!3d-7.4500617925611206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6589223ebb8535%3A0xdd811983dc262591!2sCipta%20mandiri%20sampling(CMS)!5e0!3m2!1sen!2sid!4v1771494818612!5m2!1sen!2sid"
              class="w-full h-full border-0"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Hubungi Kami',
  meta: [
    { name: 'description', content: 'Hubungi CV Cipta Mandiri Sampling via WhatsApp untuk penawaran harga terbaik alat sampling lingkungan & laboratorium.' },
    { property: 'og:title', content: 'Hubungi Kami - CV Cipta Mandiri Sampling' },
    { property: 'og:description', content: 'Chat via WhatsApp untuk penawaran harga alat sampling terbaik.' },
    { property: 'og:url', content: 'https://cipta-sampling.vercel.app/contact' },
  ]
})
</script>
