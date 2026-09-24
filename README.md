# CV Cipta Mandiri Sampling - Digital Catalog & Company Profile

Katalog produk digital dan profil perusahaan untuk **CV Cipta Mandiri Sampling**, produsen instrumen mekanikal pengambilan sampel (*sampling*) lingkungan dan laboratorium di Ciamis, Jawa Barat.

## Fitur Utama

- **Katalog Produk Terintegrasi**: 70+ produk alat sampling (Air, Tanah, Sedimen, Biologi & Plankton, Perlengkapan Lab).
- **Tokopedia Scraper Otomatis**: Scraper mandiri berbasis Node.js untuk mengekstrak data produk, harga, deskripsi, spesifikasi, dan galeri foto langsung dari toko resmi Tokopedia CV Cipta Mandiri Sampling (`alat-samplinglingkungan`).
- **Pencarian & Filter Interaktif**: Filter kategori dinamis dengan penghitung jumlah produk, pencarian real-time, dan pengurutan harga/nama.
- **Optimasi Gambar Mandiri**: Gambar produk diunduh langsung ke lokal (`public/image/products/`) untuk performa maksimal dan menghindari kedaluwarsa URL CDN pihak ketiga.
- **REST API Internal**: Menyediakan endpoint `/api/products` dan `/api/products/:slug`.
- **SEO & Structured Data**: Meta tags lengkap, sitemap dinamis (`@nuxtjs/sitemap`), serta Schema.org JSON-LD (Product, BreadcrumbList, Organization).

---

## Tokopedia Scraper

Scraper ini dirancang khusus untuk mengambil data katalog langsung dari etalase Tokopedia tanpa memerlukan dependensi pihak ketiga yang berat (Puppeteer/Selenium), memanfaatkan ekstraksi state SSR Tokopedia (`window.__cache`) secara instan dan andal.

### Perintah Scraper

```bash
# 1. Scrape lengkap dengan detail produk & spesifikasi
pnpm run scrape

# 2. Scrape lengkap dan otomatis unduh seluruh gambar produk ke public/image/products/
pnpm run scrape:images

# 3. Scrape cepat (hanya daftar etalase produk)
pnpm run scrape:quick
```

### Opsi CLI Lanjutan

Anda dapat menjalankan script scraper secara langsung dengan berbagai parameter:

```bash
node scripts/scraper.js [options]
```

| Opsi | Default | Keterangan |
|------|---------|------------|
| `--shop <domain>` | `alat-samplinglingkungan` | Domain toko Tokopedia yang ditargetkan |
| `--download-images` | `false` | Unduh file gambar ke `public/image/products/<slug>/` |
| `--quick` | `false` | Hanya scrape daftar toko tanpa membuka tiap halaman PDP |
| `--limit <n>` | `null` (semua) | Batasi jumlah produk yang di-scrape (cocok untuk testing) |
| `--delay <ms>` | `250` | Jeda waktu antar permintaan untuk keamanan akses |
| `--concurrency <n>`| `3` | Jumlah request konkuren saat mengambil detail produk |
| `--output <path>` | `app/data/products.json` | Lokasi file JSON hasil scraping |

---

## Setup & Instalasi Proyek

### 1. Instal Dependensi

```bash
pnpm install
```

### 2. Jalankan Server Pengembangan

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 3. Build Produksi

```bash
pnpm build
pnpm preview
```

---

## Struktur Data Produk (`products.json`)

Setiap produk memiliki struktur data sebagai berikut:

```json
{
  "id": 1,
  "tokopediaId": "103105864528",
  "slug": "water-sampler-vertikal-5-liter",
  "name": "Water Sampler Vertikal 5 Liter",
  "category": "Sampling Air & Hidrologi",
  "price": "Rp9.500.000",
  "rawPrice": 9500000,
  "description": "Deskripsi lengkap...",
  "image": "/image/products/water-sampler-vertikal-5-liter/image-0.jpg",
  "images": [
    "/image/products/water-sampler-vertikal-5-liter/image-0.jpg",
    "/image/products/water-sampler-vertikal-5-liter/image-1.jpg"
  ],
  "tokopediaLink": "https://www.tokopedia.com/alat-samplinglingkungan/water-sampler-vertikal-5-liter",
  "specifications": [
    "Bahan akrilik tabung",
    "Diameter 110/120 mm",
    "Panjang 750mm/75cm",
    "Berat: 12 kg",
    "Kondisi: Baru"
  ],
  "weight": 12,
  "weightUnit": "kilogram",
  "condition": "Baru",
  "stock": "1",
  "rating": 5,
  "reviewCount": 0
}
```

---

## Taksonomi Kategori Produk

- **Sampling Air & Hidrologi**: Water Sampler (vertikal/horizontal/Niskin), Secchi Disk, Sampling Bailer, Well Sampler.
- **Sampling Tanah & Geoteknik**: Soil Auger Kit, Scoop JIS Stainless (berbagai ukuran D), Seed Trier.
- **Sampling Sedimen & Udara**: Ekman Grab Sampler, Petersen Grab, Core Sampler, Bacon Bomb Sampler, Air Impinger.
- **Sampling Biologi & Plankton**: Plankton Net, Folsom Plankton Splitter, Bogorov Chamber, Aspirator Nyamuk.
- **Perlengkapan & Aksesoris Lab**: Rak Corong Pisah, Drying Rak Glasware Lab, Thermometer Storage Rack.
