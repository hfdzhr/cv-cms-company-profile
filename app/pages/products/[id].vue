<template>
  <div v-if="product" class="page-wrapper">
    <section class="section product-detail-section">
      <div class="container margin-top-header">
        <NuxtLink to="/products" class="back-link">← Kembali ke Katalog</NuxtLink>
        
        <div class="product-grid">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          
          <div class="product-info">
            <h1>{{ product.name }}</h1>
            <div class="price-tag">{{ product.price }}</div>
            
            <div class="description">
              <h3>Deskripsi</h3>
              <p>{{ product.description }}</p>
            </div>
            
            <div class="specifications">
              <h3>Spesifikasi</h3>
              <ul>
                <li v-for="(spec, index) in product.specifications" :key="index">
                  {{ spec }}
                </li>
              </ul>
            </div>
            
            <div class="actions">
              <NuxtLink to="/contact" class="btn btn-primary">Minta Penawaran</NuxtLink>
              <a :href="whatsappLink" target="_blank" class="btn btn-whatsapp">
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container not-found">
    <h2>Produk tidak ditemukan</h2>
    <NuxtLink to="/products" class="btn btn-primary">Kembali</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { getProductById } = useProducts()

const product = computed(() => getProductById(Number(route.params.id)))

// Dynamic SEO
useHead(() => ({
  title: product.value ? product.value.name : 'Produk Tidak Ditemukan',
  meta: [
    { name: 'description', content: product.value ? product.value.description : 'Detail produk alat sampling' }
  ]
}))

const whatsappLink = computed(() => {
  if (!product.value) return '#'
  const text = `Halo, saya tertarik dengan produk ${product.value.name}`
  return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`
})
</script>

<style scoped>
.margin-top-header { margin-top: 50px; }

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--color-text-light);
  font-weight: 500;
}

.back-link:hover { color: var(--color-secondary); }

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

.product-image {
  background: #f1f5f9;
  border-radius: 20px;
  overflow: hidden;
  position: sticky;
  top: 100px;
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.product-info h1 {
  margin-bottom: 10px;
}

.price-tag {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 30px;
}

.description, .specifications {
  margin-bottom: 30px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
}

.specifications ul {
  list-style: disc;
  padding-left: 20px;
}

.specifications li {
  margin-bottom: 8px;
}

.actions {
  display: flex;
  gap: 15px;
  margin-top: 40px;
}

.btn-whatsapp {
  border: 2px solid #25d366;
  color: #25d366;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}

.btn-whatsapp:hover {
  background: #25d366;
  color: #fff;
}

.not-found {
  padding: 100px 0;
  text-align: center;
}
</style>
