export const useProducts = () => {
  const products = ref([
    {
      id: 1,
      slug: 'secchi-disk-sample',
      name: 'Secchi Disk Pengukur Kejernihan Air 20cm',
      description:
        'Secchi Disk adalah alat sederhana dan efektif untuk mengukur tingkat kejernihan air pada danau, waduk, sungai, tambak, maupun perairan laut. Metode pengukuran dilakukan dengan menurunkan piringan (disk) ke dalam air menggunakan tali ukur hingga piringan tidak lagi terlihat dari permukaan. Kedalaman saat piringan menghilang tersebut dicatat sebagai kedalaman Secchi (Secchi Depth) yang menunjukkan tingkat transparansi atau kejernihan perairan.',
      price: 'Rp350.000',
      image: '/image/products/seccidisk/seccidisk_main.webp',
      images: [
        '/image/products/seccidisk/seccidisk_main.webp',
        '/image/products/seccidisk/seccidisk_second.webp',
        '/image/products/seccidisk/seccidisk_third.webp',
        '/image/products/seccidisk/seccidisk_box.webp',
      ],
      tokopediaLink: 'https://www.tokopedia.com/alat-samplinglingkungan/seccidisk-pengukur-kejernihan-air-20cm',
      specifications: [
        'Nama Produk: Secchi Disk (Piringan Secchi)',
        'Fungsi: Mengukur tingkat kejernihan / transparansi air',
        'Diameter Piringan: 20 cm (8 inci / 200 mm)',
        'Material Piringan: PVC / Acrylic',
        'Warna Piringan: Hitam Putih (alternatif warna tersedia)',
        'Pemberat: Stainless Steel anti karat untuk stabilitas',
        'Tali Ukur: Polyester dengan pengukur kedalaman hingga 20 meter',
      ],
    },
    {
      id: 2,
      slug: 'soil-auger-kit',
      name: 'Soil Auger Kit',
      description: 'Set lengkap bor tanah untuk pengambilan sampel tanah yang akurat. Terdiri dari berbagai jenis mata bor untuk berbagai kondisi tanah.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400/0f172a/9b7055?text=Soil+Auger',
      images: [
        'https://placehold.co/800x600/0f172a/9b7055?text=Soil+Auger+Full+Set',
        'https://placehold.co/800x600/1e293b/9b7055?text=Soil+Auger+Head',
        'https://placehold.co/800x600/334155/9b7055?text=Soil+Auger+Extensions',
      ],
      tokopediaLink: 'https://www.tokopedia.com/ciptamandirisampling/soil-auger-kit',
      specifications: ['Material: Stainless Steel', 'Depth: Up to 5 meters', 'Includes: T-Handle, Extensions, 3 Heads', 'Case: Canvas Bag'],
    },
    {
      id: 3,
      slug: 'plankton-net',
      name: 'Plankton Net',
      description: 'Jaring plankton presisi tinggi untuk pengambilan sampel biologis di perairan. Tersedia dalam berbagai ukuran mesh.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400/0f172a/2497cd?text=Plankton+Net',
      images: [
        'https://placehold.co/800x600/0f172a/2497cd?text=Plankton+Net+Full',
        'https://placehold.co/800x600/1e293b/2497cd?text=Plankton+Net+Ring',
        'https://placehold.co/800x600/334155/2497cd?text=Plankton+Net+Mesh',
      ],
      tokopediaLink: 'https://www.tokopedia.com/ciptamandirisampling/plankton-net',
      specifications: ['Ring Diameter: 30 cm', 'Mesh Size: 25 - 200 micron', 'Material: Nylon Mesh', 'Bottle: HDPE 250ml'],
    },
    {
      id: 4,
      slug: 'sediment-grab-sampler',
      name: 'Sediment Grab Sampler',
      description: 'Alat pengambil sampel sedimen dasar laut/danau tipe Ekman Grab. Konstruksi kokoh stainless steel.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400/0f172a/773a28?text=Sediment+Grab',
      images: [
        'https://placehold.co/800x600/0f172a/773a28?text=Sediment+Grab+Open',
        'https://placehold.co/800x600/1e293b/773a28?text=Sediment+Grab+Closed',
        'https://placehold.co/800x600/334155/773a28?text=Sediment+Grab+Inside',
      ],
      tokopediaLink: 'https://www.tokopedia.com/ciptamandirisampling/sediment-grab-sampler',
      specifications: ['Material: Stainless Steel 304', 'Sample Area: 15 x 15 cm', 'Operation: Messenger triggered', 'Weight: 5 kg'],
    },
    {
      id: 5,
      slug: 'air-sampler-impinger',
      name: 'Air Sampler Impinger',
      description: 'Perangkat sampling udara ambien untuk analisis gas polutan. Dilengkapi dengan pompa vakum dan glassware impinger.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400/0f172a/9b7055?text=Air+Sampler',
      images: [
        'https://placehold.co/800x600/0f172a/9b7055?text=Air+Sampler+Unit',
        'https://placehold.co/800x600/1e293b/9b7055?text=Air+Sampler+Pump',
        'https://placehold.co/800x600/334155/9b7055?text=Air+Sampler+Glassware',
        'https://placehold.co/800x600/475569/9b7055?text=Air+Sampler+Setup',
      ],
      tokopediaLink: 'https://www.tokopedia.com/ciptamandirisampling/air-sampler-impinger',
      specifications: ['Pump: Diaphragm pump', 'Flow Rate: 0 - 2 L/min adjustable', 'Glassware: 5 pieces midget impinger', 'Power: AC 220V'],
    },
  ]);

  const getProductById = (id: number) => {
    return products.value.find(p => p.id == id);
  };

  const getProductBySlug = (slug: string) => {
    return products.value.find(p => p.slug === slug);
  };

  return {
    products,
    getProductById,
    getProductBySlug,
  };
};
