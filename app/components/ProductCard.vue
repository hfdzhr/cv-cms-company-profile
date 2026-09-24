<template>
  <div class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-slate-100">
    <!-- Image -->
    <div class="relative aspect-[4/3] overflow-hidden bg-bg-soft">
      <img 
        :src="product.image" 
        :alt="product.name" 
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
      <span 
        v-if="product.category" 
        class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium"
      >
        {{ product.category }}
      </span>
    </div>

    <!-- Content -->
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="text-base font-bold mb-2 text-thunder line-clamp-2 hover:text-primary transition-colors">
          <NuxtLink :to="`/products/${product.slug}`">{{ product.name }}</NuxtLink>
        </h3>
        <p class="text-muted text-sm mb-4 leading-relaxed line-clamp-2">
          {{ product.description }}
        </p>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div>
          <span class="text-[11px] text-muted block uppercase tracking-wider">Harga Produsen</span>
          <span class="text-primary font-bold text-base">{{ product.price }}</span>
        </div>
        <NuxtLink 
          :to="`/products/${product.slug}`" 
          class="inline-flex items-center gap-1 text-secondary font-semibold hover:text-accent transition-colors text-sm"
        >
          Lihat Detail <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
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
