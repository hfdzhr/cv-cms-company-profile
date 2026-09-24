#!/usr/bin/env node

/**
 * Tokopedia Scraper for CV Cipta Mandiri Sampling
 *
 * Scrapes product catalog data directly from Tokopedia store.
 * Extracts:
 * - Product ID, clean slugs, and canonical URLs
 * - Title, price (formatted & numeric), and stock
 * - Full sanitized descriptions
 * - Extracted technical specifications
 * - Intelligent categorization according to CV Cipta Mandiri Sampling taxonomy
 * - Multi-image gallery URLs (with optional local download to /public/image/products/)
 * - Ratings, review counts, weights, and conditions
 *
 * Usage:
 *   node scripts/scraper.js
 *   node scripts/scraper.js --download-images
 *   node scripts/scraper.js --quick
 *   node scripts/scraper.js --limit 5
 *   node scripts/scraper.js --shop alat-samplinglingkungan
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// ==========================================
// CLI Arguments Parsing
// ==========================================
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    shop: 'alat-samplinglingkungan',
    output: path.join(ROOT_DIR, 'app', 'data', 'products.json'),
    imagesDir: path.join(ROOT_DIR, 'public', 'image', 'products'),
    downloadImages: false,
    quick: false,
    limit: null,
    delay: 250,
    concurrency: 3,
    verbose: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--shop' && args[i + 1]) {
      options.shop = args[++i];
    } else if (arg === '--output' && args[i + 1]) {
      options.output = path.resolve(args[++i]);
    } else if (arg === '--download-images' || arg === '--images') {
      options.downloadImages = true;
    } else if (arg === '--quick' || arg === '--no-deep') {
      options.quick = true;
    } else if (arg === '--limit' && args[i + 1]) {
      options.limit = parseInt(args[++i], 10);
    } else if (arg === '--delay' && args[i + 1]) {
      options.delay = parseInt(args[++i], 10);
    } else if (arg === '--concurrency' && args[i + 1]) {
      options.concurrency = parseInt(args[++i], 10);
    } else if (arg === '--verbose' || arg === '-v') {
      options.verbose = true;
    }
  }

  return options;
}

function showHelp() {
  console.log(`
Tokopedia Product Scraper for CV Cipta Mandiri Sampling

Usage:
  node scripts/scraper.js [options]

Options:
  --shop <domain>        Tokopedia shop domain (default: "alat-samplinglingkungan")
  --output <path>        Path to output products.json (default: "app/data/products.json")
  --download-images      Download product images locally into public/image/products/
  --quick                Quick mode: scrape shop listing only without fetching each PDP
  --limit <num>          Limit scraping to first N products (for testing)
  --delay <ms>           Delay between requests in ms (default: 250)
  --concurrency <num>    Concurrent PDP requests (default: 3)
  --verbose, -v          Verbose output logging
  --help, -h             Show this help guide
  `);
}

// ==========================================
// Network Helpers
// ==========================================
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function fetchWithRetry(url, options = {}, retries = 3) {
  const headers = {
    'User-Agent': USER_AGENT,
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'id,en-US;q=0.9,en;q=0.8',
    ...(options.headers || {}),
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      const res = await fetch(url, { ...options, headers, signal: controller.signal });
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      return await res.text();
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}

async function downloadBinary(url, destPath) {
  if (fs.existsSync(destPath)) {
    const stats = fs.statSync(destPath);
    if (stats.size > 1000) {
      return true; // Already downloaded
    }
  }

  const res = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
  return true;
}

// Extract window.__cache object from Tokopedia SSR HTML
function extractCache(html) {
  const idx = html.indexOf('window.__cache=');
  if (idx === -1) return null;

  const sub = html.substring(idx + 'window.__cache='.length);
  const scriptEnd = sub.indexOf('</script>');
  if (scriptEnd === -1) return null;

  const jsonStr = sub.substring(0, scriptEnd).trim().replace(/;$/, '');
  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Error parsing JSON cache:', err.message);
    return null;
  }
}

// Concurrency pool helper
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const executing = new Set();
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    if (executing.size >= poolLimit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}

// ==========================================
// Category Classifier & Normalization
// ==========================================
function categorizeProduct(name) {
  const n = name.toLowerCase();

  // Biologi & Plankton
  if (
    n.includes('plankton') ||
    n.includes('plangton') ||
    n.includes('bogorov') ||
    n.includes('aspirator') ||
    n.includes('folsom')
  ) {
    return 'Sampling Biologi & Plankton';
  }

  // Tanah & Geoteknik
  if (
    n.includes('scoop') ||
    n.includes('jis') ||
    n.includes('auger') ||
    n.includes('tanah') ||
    n.includes('biji') ||
    n.includes('seed trier') ||
    n.includes('fraksi batu') ||
    n.includes('thief')
  ) {
    return 'Sampling Tanah & Geoteknik';
  }

  // Sedimen & Udara
  if (
    n.includes('grab') ||
    n.includes('ekman') ||
    n.includes('sediment') ||
    n.includes('sendiment') ||
    n.includes('core') ||
    n.includes('petersan') ||
    n.includes('petersen') ||
    n.includes('bacon bomb') ||
    n.includes('tank bottom') ||
    n.includes('zona sampler') ||
    n.includes('impinger') ||
    n.includes('pembarat') ||
    n.includes('pemukul')
  ) {
    return 'Sampling Sedimen & Udara';
  }

  // Perlengkapan & Aksesoris Lab
  if (
    n.includes('rak') ||
    n.includes('drying') ||
    n.includes('draying') ||
    n.includes('corong') ||
    n.includes('storage rack') ||
    n.includes('thermometer')
  ) {
    return 'Perlengkapan & Aksesoris Lab';
  }

  // Air & Hidrologi (Water Sampler, Secchi Disk, Bailer, Niskin, etc.)
  if (
    n.includes('water') ||
    n.includes('secchi') ||
    n.includes('secci') ||
    n.includes('seccidisk') ||
    n.includes('bailer') ||
    n.includes('niskin') ||
    n.includes('swing') ||
    n.includes('well sampler')
  ) {
    return 'Sampling Air & Hidrologi';
  }

  return 'Sampling Air & Hidrologi';
}

function cleanTitle(rawName) {
  let title = rawName.trim();

  // Normalize common typo patterns in seller titles
  title = title.replace(/\batou\b/gi, 'atau');
  title = title.replace(/\bstanlis\b|\bstenlis\b|\bstaenlis\b/gi, 'Stainless');
  title = title.replace(/\bsendiment\b/gi, 'Sediment');
  title = title.replace(/\bplangtonet\b/gi, 'Plankton Net');
  title = title.replace(/\bjaring plangtonet\b/gi, 'Jaring Plankton Net');
  title = title.replace(/\bherizontal\b/gi, 'Horizontal');
  title = title.replace(/\bpantou\b/gi, 'Pantau');
  title = title.replace(/\bjumblah\b/gi, 'Jumlah');
  title = title.replace(/\bpags\b/gi, 'Pegs');
  title = title.replace(/\bpembarat\b/gi, 'Pemberat');
  title = title.replace(/\bbinih\b/gi, 'Benih');
  title = title.replace(/\bcastum\b/gi, 'Custom');
  title = title.replace(/\bfuul\b/gi, 'Full');

  // If title has redundant repeated half (e.g., "SCOOP JIS 0.25 D STANLIS jis scoop stanlis 0.25 d")
  const parts = title.split(/\s+/);
  if (parts.length >= 8) {
    const half = Math.floor(parts.length / 2);
    const p1 = parts.slice(0, half).join(' ').toLowerCase();
    const p2 = parts.slice(half).join(' ').toLowerCase();
    if (p1 === p2) {
      title = parts.slice(0, half).join(' ');
    }
  }

  // Normalize spacing and casing
  title = title.replace(/\s+/g, ' ').trim();
  return title;
}

function generateCleanSlug(url, name) {
  let part = url.split('?')[0].replace(/^https?:\/\/[^/]+\/[^/]+\//, '').trim();
  // Strip trailing Tokopedia numeric ID (e.g. -1734686307329213622)
  part = part.replace(/-\d{15,}$/, '');
  if (!part) {
    part = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  return part.toLowerCase();
}

function cleanDescription(rawDesc, productName, category) {
  if (!rawDesc || rawDesc.trim().length < 20) {
    return `${productName} merupakan peralatan sampling dan pengujian standar laboratorium yang diproduksi langsung oleh CV Cipta Mandiri Sampling di Ciamis, Jawa Barat. Dibuat dengan material berkualitas tinggi dan presisi untuk mendukung keandalan riset serta pemantauan lingkungan. Kami melayani kebutuhan eceran maupun kustomisasi spesifikasi sesuai kebutuhan teknis lapangan Anda.`;
  }

  let desc = rawDesc.replace(/\r\n/g, '\n').replace(/\u00a0/g, ' ');

  // Cut off search keyword stuffing blocks
  const spamKeywords = [
    'Features:',
    'features:',
    'alat yang digunakan',
    'apa satuan yang digunakan',
    'rumus ',
    'current meter adalah',
    '#alatsampling',
    'tags:',
    'tag:'
  ];

  const lines = desc.split('\n');
  const keptLines = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (spamKeywords.some(spam => trimmed.toLowerCase().startsWith(spam.toLowerCase()))) {
      break;
    }
    keptLines.push(line);
  }

  desc = keptLines.join('\n').trim();
  desc = desc.replace(/\n{3,}/g, '\n\n');
  return desc;
}

function extractSpecifications(desc, productName, rawSpecs = {}) {
  const specs = [];
  const lines = desc.split('\n').map(l => l.trim()).filter(Boolean);

  const specKeywords = /^(bahan|material|diameter|panjang|panjng|tinggi|lebar|tebal|ketebalan|kapasitas|volume|ukuran|kelengkapan|origin|tipe|type|box size|berat|tali|penutup|pemberat|matrial)/i;

  for (const line of lines) {
    const isKeywordLine = specKeywords.test(line);
    const hasColon = line.includes(':') && line.indexOf(':') < 30;
    if ((isKeywordLine || hasColon) && !line.toLowerCase().startsWith('deskripsi') && !line.toLowerCase().startsWith('features')) {
      const cleanedSpec = line.replace(/^[-*•]\s*/, '').trim();
      if (cleanedSpec.length >= 4 && cleanedSpec.length <= 150) {
        specs.push(cleanedSpec);
      }
    }
  }

  // Synthesize standard specs if fewer than 3 extracted
  if (specs.length < 3) {
    if (rawSpecs.weight) {
      specs.push(`Berat: ${rawSpecs.weight} ${rawSpecs.weightUnit || 'kg'}`);
    }
    if (rawSpecs.condition) {
      specs.push(`Kondisi: ${rawSpecs.condition === 'NEW' ? 'Baru' : rawSpecs.condition}`);
    }
    specs.push(`Kategori: ${rawSpecs.category || 'Alat Sampling'}`);
    specs.push('Produsen: CV Cipta Mandiri Sampling (Lokal, Ciamis)');
    specs.push('Layanan: Bisa Kustomisasi Spesifikasi & Konsultasi Teknis');
  }

  return [...new Set(specs)];
}

// ==========================================
// Main Scraper Implementation
// ==========================================
async function scrapeTokopedia(options) {
  console.log(`\n======================================================`);
  console.log(`  CV Cipta Mandiri Sampling - Tokopedia Scraper`);
  console.log(`======================================================`);
  console.log(`  Target Shop    : ${options.shop}`);
  console.log(`  Mode           : ${options.quick ? 'Quick (List only)' : 'Deep (PDP Details)'}`);
  console.log(`  Download Images: ${options.downloadImages ? 'Yes' : 'No'}`);
  console.log(`  Output Path    : ${options.output}`);
  console.log(`======================================================\n`);

  const shopUrl = `https://www.tokopedia.com/${options.shop}/product`;
  console.log(`[1/3] Fetching shop catalog from: ${shopUrl}`);

  let shopHtml;
  try {
    shopHtml = await fetchWithRetry(shopUrl);
  } catch (err) {
    console.error(`Failed to fetch shop page: ${err.message}`);
    process.exit(1);
  }

  const shopCache = extractCache(shopHtml);
  if (!shopCache) {
    console.error(`Failed to extract cache from shop page HTML.`);
    process.exit(1);
  }

  const rootQuery = shopCache['ROOT_QUERY'] || {};
  const shopProdKey = Object.keys(rootQuery).find(k => k.startsWith('GetShopProduct'));
  if (!shopProdKey) {
    console.error(`Could not find GetShopProduct in shop cache.`);
    process.exit(1);
  }

  const shopProdRef = rootQuery[shopProdKey];
  const shopProdObj = shopCache[shopProdRef?.id];
  if (!shopProdObj || !Array.isArray(shopProdObj.data)) {
    console.error(`Invalid shop product data structure.`);
    process.exit(1);
  }

  let rawList = shopProdObj.data.map(itemRef => shopCache[itemRef.id]).filter(Boolean);
  console.log(`Found ${rawList.length} active products in store.`);

  if (options.limit && options.limit > 0) {
    rawList = rawList.slice(0, options.limit);
    console.log(`Limiting to first ${options.limit} products as requested.`);
  }

  console.log(`\n[2/3] Processing product details...`);

  const seenSlugs = new Set();
  const products = [];
  let processedCount = 0;
  let downloadedImagesCount = 0;

  // Function to process a single product
  async function processProduct(item, index) {
    const rawName = item.name || '';
    const cleanName = cleanTitle(rawName);
    const category = categorizeProduct(cleanName);
    const cleanUrl = (item.product_url || '').split('?')[0];

    // Primary image from shop list
    const primaryImgObj = shopCache[item.primary_image?.id];
    const primaryImgUrl = primaryImgObj?.original || primaryImgObj?.thumbnail || '';

    // Price from shop list
    const priceObj = shopCache[item.price?.id];
    let priceText = priceObj?.text_idr || 'Hubungi Kami';
    let rawPrice = parseInt(priceText.replace(/[^0-9]/g, ''), 10) || 0;

    // Slug calculation
    let baseSlug = generateCleanSlug(cleanUrl, cleanName);
    let uniqueSlug = baseSlug;
    if (seenSlugs.has(uniqueSlug)) {
      let counter = 2;
      while (seenSlugs.has(`${baseSlug}-${counter}`)) counter++;
      uniqueSlug = `${baseSlug}-${counter}`;
    }
    seenSlugs.add(uniqueSlug);

    // Initial product structure
    const productData = {
      id: index + 1,
      tokopediaId: String(item.product_id || ''),
      slug: uniqueSlug,
      name: cleanName,
      category,
      price: priceText,
      rawPrice,
      description: '',
      image: primaryImgUrl,
      images: primaryImgUrl ? [primaryImgUrl] : [],
      tokopediaLink: cleanUrl,
      specifications: [],
      weight: 1,
      weightUnit: 'kg',
      condition: 'Baru',
      stock: 'Tersedia',
      rating: 5,
      reviewCount: 0,
      aliases: [],
    };

    // Add legacy aliases for backwards compatibility
    if (uniqueSlug.includes('seccidisk') || uniqueSlug.includes('secchi-disk')) {
      if (!productData.aliases.includes('secchi-disk-sample')) {
        productData.aliases.push('secchi-disk-sample');
      }
    }
    if (uniqueSlug.includes('plangtonet') || uniqueSlug.includes('plankton')) {
      if (!productData.aliases.includes('plankton-net')) {
        productData.aliases.push('plankton-net');
      }
    }
    if (uniqueSlug === 'ekman-grab-sampler-standard' || uniqueSlug.includes('bottom-grab-sampler-ekmandredge')) {
      if (!productData.aliases.includes('sediment-grab-sampler')) {
        productData.aliases.push('sediment-grab-sampler');
      }
    }

    // If deep mode, fetch PDP for rich info
    if (!options.quick && cleanUrl) {
      try {
        await new Promise(r => setTimeout(r, options.delay));
        const pdpHtml = await fetchWithRetry(cleanUrl);
        const pdpCache = extractCache(pdpHtml);

        if (pdpCache) {
          // Find basic info
          let basicInfo = null;
          for (const [k, v] of Object.entries(pdpCache)) {
            if (k.startsWith('pdpBasicInfo') && v?.productID) {
              basicInfo = v;
              break;
            }
          }

          if (basicInfo) {
            if (basicInfo.weight) productData.weight = basicInfo.weight;
            if (basicInfo.weightUnit) productData.weightUnit = basicInfo.weightUnit.toLowerCase();
            if (basicInfo.condition) productData.condition = basicInfo.condition === 'NEW' ? 'Baru' : basicInfo.condition;
          }

          // Extract content, price, description, images, stats
          for (const [k, v] of Object.entries(pdpCache)) {
            if (v && v.__typename === 'pdpDataProductContent') {
              const pdpPriceObj = pdpCache[v.price?.id];
              if (pdpPriceObj?.priceFmt) {
                productData.price = pdpPriceObj.priceFmt;
                productData.rawPrice = pdpPriceObj.value || productData.rawPrice;
              }
              const stockObj = pdpCache[v.stock?.id];
              if (stockObj?.value) {
                productData.stock = stockObj.value;
              }
            }

            if (v && v.__typename === 'pdpDataProductDetailDescription') {
              productData.description = v.content || '';
            }

            if (v && v.__typename === 'pdpDataProductMedia' && Array.isArray(v.media)) {
              const mediaUrls = v.media
                .map(mRef => {
                  const m = pdpCache[mRef.id];
                  return m?.URLOriginal || m?.URLMaxRes || m?.URLThumbnail || '';
                })
                .filter(Boolean);
              if (mediaUrls.length > 0) {
                productData.images = mediaUrls;
                productData.image = mediaUrls[0];
              }
            }
          }

          // Extract ratings & reviews
          for (const [k, v] of Object.entries(pdpCache)) {
            if (k.startsWith('$ROOT_QUERY.productrevGetProductRatingAndTopics') && v?.rating) {
              const ratingObj = pdpCache[v.rating.id];
              if (ratingObj) {
                productData.rating = parseFloat(ratingObj.ratingScore) || 5;
                productData.reviewCount = ratingObj.totalRating || 0;
              }
            }
          }
        }
      } catch (err) {
        if (options.verbose) {
          console.warn(`  Warning: Could not fetch PDP for "${cleanName}": ${err.message}`);
        }
      }
    }

    // Clean description and extract specifications
    productData.description = cleanDescription(productData.description, cleanName, category);
    productData.specifications = extractSpecifications(productData.description, cleanName, {
      category,
      weight: productData.weight,
      weightUnit: productData.weightUnit,
      condition: productData.condition,
    });

    // Handle Image Downloading if flag is active
    if (options.downloadImages && productData.images.length > 0) {
      const localImages = [];
      const productDir = path.join(options.imagesDir, uniqueSlug);

      for (let imgIdx = 0; imgIdx < productData.images.length; imgIdx++) {
        const remoteUrl = productData.images[imgIdx];
        const ext = remoteUrl.includes('.webp') ? 'webp' : 'jpg';
        const fileName = `image-${imgIdx}.${ext}`;
        const filePath = path.join(productDir, fileName);
        const webPath = `/image/products/${uniqueSlug}/${fileName}`;

        try {
          await downloadBinary(remoteUrl, filePath);
          localImages.push(webPath);
          downloadedImagesCount++;
        } catch (err) {
          if (options.verbose) {
            console.warn(`  Failed to download image ${imgIdx} for ${uniqueSlug}: ${err.message}`);
          }
          localImages.push(remoteUrl); // fallback to remote
        }
      }

      if (localImages.length > 0) {
        productData.images = localImages;
        productData.image = localImages[0];
      }
    }

    processedCount++;
    if (processedCount % 10 === 0 || processedCount === rawList.length) {
      console.log(`  Processed ${processedCount}/${rawList.length} products...`);
    }

    return productData;
  }

  // Execute processing with concurrency
  const results = await asyncPool(
    options.quick ? 10 : options.concurrency,
    rawList.map((item, idx) => ({ item, idx })),
    async ({ item, idx }) => processProduct(item, idx)
  );

  // Preserve consistent order
  results.sort((a, b) => a.id - b.id);

  // Merge custom products if file exists
  const customProductsPath = path.join(__dirname, 'custom-products.json');
  if (fs.existsSync(customProductsPath)) {
    try {
      const customProducts = JSON.parse(fs.readFileSync(customProductsPath, 'utf8'));
      if (Array.isArray(customProducts) && customProducts.length > 0) {
        console.log(`Merging ${customProducts.length} custom workshop products from custom-products.json...`);
        let nextId = results.length + 1;
        for (const cp of customProducts) {
          if (!seenSlugs.has(cp.slug)) {
            cp.id = nextId++;
            seenSlugs.add(cp.slug);
            results.push(cp);
          }
        }
      }
    } catch (err) {
      console.warn('Could not read custom-products.json:', err.message);
    }
  }

  console.log(`\n[3/3] Saving catalog to ${options.output}...`);
  fs.mkdirSync(path.dirname(options.output), { recursive: true });
  fs.writeFileSync(options.output, JSON.stringify(results, null, 2), 'utf8');

  // Summary Report
  const catSummary = {};
  for (const p of results) {
    catSummary[p.category] = (catSummary[p.category] || 0) + 1;
  }

  console.log(`\n======================================================`);
  console.log(`  Scraping Completed Successfully!`);
  console.log(`======================================================`);
  console.log(`  Total Products Scraped : ${results.length}`);
  if (options.downloadImages) {
    console.log(`  Images Downloaded      : ${downloadedImagesCount}`);
  }
  console.log(`  Output File            : ${options.output}`);
  console.log(`\n  Breakdown by Category:`);
  for (const [cat, count] of Object.entries(catSummary)) {
    console.log(`    - ${cat.padEnd(30)}: ${count} products`);
  }
  console.log(`======================================================\n`);
}

// Run
const options = parseArgs();
if (options.help) {
  showHelp();
} else {
  scrapeTokopedia(options).catch(err => {
    console.error('Fatal error during scraping:', err);
    process.exit(1);
  });
}
