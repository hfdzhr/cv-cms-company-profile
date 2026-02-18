<template>
  <nav class="fixed top-0 w-full z-[1000] flex items-center transition-all duration-300 glass" style="height: var(--header-height);">
    <div class="container mx-auto px-4 flex justify-between items-center w-full">
      <NuxtLink to="/" class="flex items-center">
        <img src="/image/cv-cipta-mandiri-sampling-logo-background-remove.png" alt="Cipta Mandiri Sampling Logo" class="h-[50px] w-auto object-contain" />
      </NuxtLink>
      
      <!-- Mobile Toggle -->
      <div class="md:hidden flex flex-col gap-1.5 cursor-pointer" @click="isOpen = !isOpen">
        <span class="w-[25px] h-[3px] bg-primary rounded-sm transition-all duration-300"></span>
        <span class="w-[25px] h-[3px] bg-primary rounded-sm transition-all duration-300"></span>
        <span class="w-[25px] h-[3px] bg-primary rounded-sm transition-all duration-300"></span>
      </div>

      <!-- Navigation Links -->
      <ul 
        :class="[
          'flex gap-7 items-center',
          'max-md:absolute max-md:left-0 max-md:w-full max-md:bg-white max-md:flex-col max-md:py-5 max-md:shadow-lg max-md:transition-all max-md:duration-300 max-md:-z-10',
          isOpen ? 'max-md:translate-y-0 max-md:opacity-100' : 'max-md:-translate-y-full max-md:opacity-0'
        ]"
        :style="{ top: 'var(--header-height)' }"
      >
        <li><NuxtLink to="/" @click="isOpen = false" class="font-medium text-thunder hover:text-accent transition-colors">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="isOpen = false" class="font-medium text-thunder hover:text-accent transition-colors">About</NuxtLink></li>
        <li><NuxtLink to="/products" @click="isOpen = false" class="font-medium text-thunder hover:text-accent transition-colors">Products</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="isOpen = false" class="btn btn-primary !text-white">Contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)
</script>
