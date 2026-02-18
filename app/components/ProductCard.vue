<template>
  <div class="group bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
    <!-- Image -->
    <div class="aspect-[4/3] overflow-hidden bg-bg-soft">
      <img 
        :src="product.image" 
        :alt="product.name" 
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
    </div>

    <!-- Content -->
    <div class="p-5 flex-1 flex flex-col">
      <!-- title: text-thunder on white = contrast ~16:1 — WCAG AAA ✅ -->
      <h3 class="text-lg font-bold mb-2 text-thunder">{{ product.name }}</h3>

      <!-- description: text-muted (#6b7280) on white = contrast ~5.7:1 — WCAG AA ✅ for normal text -->
      <p class="text-muted text-sm mb-5 flex-1 leading-relaxed">{{ product.description.substring(0, 80) }}...</p>

      <NuxtLink 
        :to="`/products/${product.slug}`" 
        class="inline-flex items-center gap-1.5 text-secondary font-semibold hover:text-accent transition-colors"
      >
        Lihat Detail <span class="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
