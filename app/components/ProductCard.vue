<template>
  <div class="product-card">
    <div class="image-wrapper">
      <img :src="product.image" :alt="product.name" loading="lazy">
    </div>
    <div class="content">
      <h3 class="title">{{ product.name }}</h3>
      <p class="description">{{ product.description.substring(0, 80) }}...</p>
      <NuxtLink :to="`/products/${product.slug}`" class="btn-link">
        Lihat Detail <span class="arrow">→</span>
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

<style scoped>
.product-card {
  background: #fff;
  border-radius: 4px; /* Sharper */
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.image-wrapper {
  aspect-ratio: 4/3;
  overflow: hidden;
  background-color: #f1f5f9;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .image-wrapper img {
  transform: scale(1.05);
}

.content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.description {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 0.95rem;
  flex: 1;
}

.btn-link {
  color: var(--color-secondary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.btn-link:hover {
  color: var(--color-accent);
}

.arrow {
  transition: transform 0.3s ease;
}

.btn-link:hover .arrow {
  transform: translateX(5px);
}
</style>
