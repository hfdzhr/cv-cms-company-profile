<template>
  <footer class="bg-slate-900 text-white pt-16 mt-auto">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      <!-- Brand -->
      <div>
        <NuxtLink to="/" class="inline-block mb-5">
          <img 
            src="/image/cv-cipta-mandiri-sampling-logo-background-remove.png" 
            alt="Cipta Mandiri Sampling Logo" 
            class="h-[60px] w-auto object-contain bg-white/90 p-1.5 rounded-lg" 
          />
        </NuxtLink>
        <!-- text-slate-300 on bg-slate-900 = contrast ~9.7:1 — WCAG AAA ✅ -->
        <p class="text-slate-300 leading-relaxed">Mitra terpercaya Anda untuk solusi alat sampling lingkungan berkualitas tinggi.</p>
      </div>
      
      <!-- Navigation -->
      <div>
        <h4 class="text-white font-semibold text-lg mb-5">Navigasi</h4>
        <ul class="flex flex-col gap-2.5">
          <li><NuxtLink to="/" class="text-slate-300 hover:text-primary hover:pl-1.5 transition-all duration-200">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-slate-300 hover:text-primary hover:pl-1.5 transition-all duration-200">About Us</NuxtLink></li>
          <li><NuxtLink to="/products" class="text-slate-300 hover:text-primary hover:pl-1.5 transition-all duration-200">Products</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-slate-300 hover:text-primary hover:pl-1.5 transition-all duration-200">Contact</NuxtLink></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="text-white font-semibold text-lg mb-5">Kontak</h4>
        <ul class="flex flex-col gap-2.5">
          <!-- text-slate-300 on slate-900: ~9.7:1 contrast — WCAG AAA ✅ -->
          <li class="text-slate-300"><strong class="text-white">Phone:</strong> +62 812-3456-7890</li>
          <li class="text-slate-300"><strong class="text-white">Email:</strong> info@blocksampling.com</li>
          <li class="text-slate-300"><strong class="text-white">Address:</strong> Jl. Raya Sampling No. 123, Jakarta</li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10 py-5 text-center text-white text-sm">
      <p>&copy; {{ new Date().getFullYear() }} CV Cipta Mandiri Sampling. All rights reserved.</p>
    </div>
  </footer>
</template>
