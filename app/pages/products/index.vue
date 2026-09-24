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
            <li class="text-white font-medium">Katalog Alat Sampling</li>
          </ol>
        </nav>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Katalog Alat Sampling Laboratorium & Lingkungan</h1>
        <p class="text-lg text-white/90 mt-2 max-w-2xl mx-auto">
          Peralatan sampling berkualitas standar pengujian laboratorium. Dibuat langsung oleh produsen dengan opsi kustomisasi spesifikasi dan harga tangan pertama.
        </p>

        <!-- Search Bar in Header -->
        <div class="max-w-xl mx-auto mt-8">
          <div class="relative">
            <i class="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Cari alat sampling (contoh: water sampler, secchi disk, ekman, jis scoop)..."
              class="w-full pl-11 pr-10 py-3.5 rounded-full bg-white text-slate-800 placeholder-slate-400 shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            >
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-lg"
              title="Hapus pencarian"
            >
              <i class="ri-close-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter & Products Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
          <button 
            v-for="cat in categoriesWithCount" 
            :key="cat.name"
            @click="selectedCategory = cat.name"
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2"
            :class="selectedCategory === cat.name 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
          >
            <span>{{ cat.name }}</span>
            <span 
              class="text-xs px-2 py-0.5 rounded-full"
              :class="selectedCategory === cat.name ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'"
            >
              {{ cat.count }}
            </span>
          </button>
        </div>

        <!-- Controls: Total count & Sorting -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <p class="text-sm text-muted">
            Menampilkan <span class="font-bold text-thunder">{{ displayedProducts.length }}</span> dari <span class="font-bold text-thunder">{{ filteredProducts.length }}</span> produk
            <span v-if="selectedCategory !== 'Semua Kategori'"> dalam kategori <strong class="text-primary">{{ selectedCategory }}</strong></span>
            <span v-if="searchQuery"> untuk kata kunci "<strong>{{ searchQuery }}</strong>"</span>
          </p>

          <div class="flex items-center gap-2">
            <label for="sort-select" class="text-xs text-muted font-medium whitespace-nowrap">Urutkan:</label>
            <select 
              id="sort-select"
              v-model="sortBy"
              class="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-thunder focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="default">Default (Rekomendasi)</option>
              <option value="price-asc">Harga Terendah</option>
              <option value="price-desc">Harga Tertinggi</option>
              <option value="name-asc">Nama (A - Z)</option>
            </select>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="py-16 text-center">
          <i class="ri-search-eye-line text-5xl text-slate-300 mb-3 block"></i>
          <h3 class="text-xl font-bold text-thunder mb-2">Produk Tidak Ditemukan</h3>
          <p class="text-muted text-sm max-w-md mx-auto mb-6">
            Tidak ada produk yang cocok dengan kata kunci "{{ searchQuery }}". Anda dapat mereset pencarian atau berkonsultasi via WhatsApp untuk pembuatan alat sampling kustom.
          </p>
          <div class="flex justify-center gap-3">
            <button 
              @click="resetFilters"
              class="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-all"
            >
              Reset Filter
            </button>
            <a 
              href="https://wa.me/6281386336771?text=Halo%20CV%20Cipta%20Mandiri%20Sampling%2C%20saya%20mencari%20alat%20sampling%20khusus"
              target="_blank"
              class="px-5 py-2.5 rounded-full bg-[#25d366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-all flex items-center gap-1.5"
            >
              <i class="ri-whatsapp-line"></i> Tanya Kustom via WA
            </a>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in displayedProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>

        <!-- Load More Button if more products available -->
        <div v-if="hasMore" class="mt-12 text-center">
          <button 
            @click="loadMore"
            class="px-8 py-3 rounded-full bg-white border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Tampilkan Lebih Banyak ({{ remainingCount }} produk lagi)
          </button>
        </div>

        <!-- Custom Request Box -->
        <div class="mt-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span class="inline-block px-3 py-1 bg-primary/20 border border-primary/40 text-sky-300 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              Layanan Fabrikasi Langsung
            </span>
            <h3 class="text-2xl font-bold mb-2 text-white">Butuh Alat Sampling dengan Ukuran atau Spesifikasi Khusus?</h3>
            <p class="text-slate-300 text-sm max-w-xl">
              Sebagai produsen langsung, kami dapat memodifikasi panjang tangkai, ukuran mesh, diameter tabung, hingga material stainless steel sesuai kebutuhan riset atau metode uji laboratorium Anda.
            </p>
          </div>
          <a 
            href="https://wa.me/6281386336771?text=Halo%20CV%20Cipta%20Mandiri%20Sampling%2C%20saya%20ingin%20konsultasi%20pembuatan%20alat%20sampling%20kustom" 
            target="_blank"
            class="whitespace-nowrap inline-flex items-center gap-2 bg-[#25d366] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all"
          >
            <i class="ri-whatsapp-line text-xl"></i>
            Konsultasi Kustom via WA
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { products } = useProducts()

const selectedCategory = ref('Semua Kategori')
const searchQuery = ref('')
const sortBy = ref('default')
const pageSize = 24
const displayLimit = ref(pageSize)

// Dynamic categories with live count
const categoriesWithCount = computed(() => {
  const map = {}
  for (const p of products.value) {
    if (p.category) {
      map[p.category] = (map[p.category] || 0) + 1
    }
  }

  const list = [
    { name: 'Semua Kategori', count: products.value.length }
  ]

  const order = [
    'Sampling Air & Hidrologi',
    'Sampling Tanah & Geoteknik',
    'Sampling Sedimen & Udara',
    'Sampling Biologi & Plankton',
    'Perlengkapan & Aksesoris Lab'
  ]

  for (const name of order) {
    if (map[name]) {
      list.push({ name, count: map[name] })
    }
  }

  // Any other uncategorized
  for (const [name, count] of Object.entries(map)) {
    if (!order.includes(name)) {
      list.push({ name, count })
    }
  }

  return list
})

// Filter and sort products
const filteredProducts = computed(() => {
  let list = products.value

  // Category filter
  if (selectedCategory.value !== 'Semua Kategori') {
    list = list.filter(p => p.category === selectedCategory.value)
  }

  // Search filter
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.specifications && p.specifications.some(s => s.toLowerCase().includes(q)))
    )
  }

  // Sorting
  const sorted = [...list]
  if (sortBy.value === 'price-asc') {
    sorted.sort((a, b) => (a.rawPrice || 0) - (b.rawPrice || 0))
  } else if (sortBy.value === 'price-desc') {
    sorted.sort((a, b) => (b.rawPrice || 0) - (a.rawPrice || 0))
  } else if (sortBy.value === 'name-asc') {
    sorted.sort((a, b) => a.name.localeCompare(b.name))
  }

  return sorted
})

// Paginated / displayed products
const displayedProducts = computed(() => {
  return filteredProducts.value.slice(0, displayLimit.value)
})

const hasMore = computed(() => {
  return displayLimit.value < filteredProducts.value.length
})

const remainingCount = computed(() => {
  return Math.max(0, filteredProducts.value.length - displayLimit.value)
})

function loadMore() {
  displayLimit.value += pageSize
}

function resetFilters() {
  selectedCategory.value = 'Semua Kategori'
  searchQuery.value = ''
  sortBy.value = 'default'
  displayLimit.value = pageSize
}

// Reset limit when filters change
watch([selectedCategory, searchQuery, sortBy], () => {
  displayLimit.value = pageSize
})

useHead({
  title: 'Katalog Alat Sampling Laboratorium & Lingkungan',
  meta: [
    { name: 'description', content: 'Katalog lengkap 70+ alat sampling lingkungan dan laboratorium langsung dari workshop CV Cipta Mandiri Sampling: water sampler, secchi disk, soil auger, scoop JIS, plankton net, ekman grab sampler. Harga tangan pertama & melayani kustom spesifikasi.' },
    { property: 'og:title', content: 'Katalog Alat Sampling Laboratorium & Lingkungan - CV Cipta Mandiri Sampling' },
    { property: 'og:description', content: 'Katalog 70+ alat sampling lingkungan dan laboratorium berkualitas standar riset dengan harga produsen langsung dan opsi custom.' },
    { property: 'og:url', content: 'https://cipta-sampling.vercel.app/products' },
  ]
})
</script>
