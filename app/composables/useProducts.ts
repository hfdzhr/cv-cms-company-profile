export const useProducts = () => {
  const products = ref([
    {
      id: 1,
      slug: 'water-sampler-horizontal',
      name: 'Water Sampler Horizontal',
      description: 'Alat pengambil sampel air horizontal standar profesional. Terbuat dari bahan PVC/Acrylic yang tahan lama. Ideal untuk sampling di perairan tenang.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400?text=Water+Sampler',
      specifications: [
        'Material: PVC/Acrylic',
        'Volume: 2.2 Liter',
        'Mechanism: Messenger Drop',
        'Includes: Line & Messenger'
      ]
    },
    {
      id: 2,
      slug: 'soil-auger-kit',
      name: 'Soil Auger Kit',
      description: 'Set lengkap bor tanah untuk pengambilan sampel tanah yang akurat. Terdiri dari berbagai jenis mata bor untuk berbagai kondisi tanah.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400?text=Soil+Auger',
      specifications: [
        'Material: Stainless Steel',
        'Depth: Up to 5 meters',
        'Includes: T-Handle, Extensions, 3 Heads',
        'Case: Canvas Bag'
      ]
    },
    {
      id: 3,
      slug: 'plankton-net',
      name: 'Plankton Net',
      description: 'Jaring plankton presisi tinggi untuk pengambilan sampel biologis di perairan. Tersedia dalam berbagai ukuran mesh.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400?text=Plankton+Net',
      specifications: [
        'Ring Diameter: 30 cm',
        'Mesh Size: 25 - 200 micron',
        'Material: Nylon Mesh',
        'Bottle: HDPE 250ml'
      ]
    },
    {
      id: 4,
      slug: 'sediment-grab-sampler',
      name: 'Sediment Grab Sampler',
      description: 'Alat pengambil sampel sedimen dasar laut/danau tipe Ekman Grab. Konstruksi kokoh stainless steel.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400?text=Sediment+Grab',
      specifications: [
        'Material: Stainless Steel 304',
        'Sample Area: 15 x 15 cm',
        'Operation: Messenger triggered',
        'Weight: 5 kg'
      ]
    },
    {
      id: 5,
      slug: 'air-sampler-impinger',
      name: 'Air Sampler Impinger',
      description: 'Perangkat sampling udara ambien untuk analisis gas polutan. Dilengkapi dengan pompa vakum dan glassware impinger.',
      price: 'Hubungi Kami',
      image: 'https://placehold.co/600x400?text=Air+Sampler',
      specifications: [
        'Pump: Diaphragm pump',
        'Flow Rate: 0 - 2 L/min adjustable',
        'Glassware: 5 pieces midget impinger',
        'Power: AC 220V'
      ]
    }
  ])

  const getProductById = (id: number) => {
    return products.value.find(p => p.id == id)
  }

  const getProductBySlug = (slug: string) => {
    return products.value.find(p => p.slug === slug)
  }

  return {
    products,
    getProductById,
    getProductBySlug
  }
}
