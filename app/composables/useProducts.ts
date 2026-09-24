import productsData from '~/data/products.json';

export interface Product {
  id: number | string;
  tokopediaId?: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  rawPrice?: number;
  description: string;
  image: string;
  images: string[];
  tokopediaLink?: string;
  specifications: string[];
  weight?: number;
  weightUnit?: string;
  condition?: string;
  stock?: string;
  rating?: number;
  reviewCount?: number;
  aliases?: string[];
}

export const useProducts = () => {
  const products = ref<Product[]>(productsData as Product[]);

  const getProductById = (id: number | string) => {
    return products.value.find(p => String(p.id) === String(id) || p.tokopediaId === String(id));
  };

  const getProductBySlug = (slug: string) => {
    return products.value.find(
      p =>
        p.slug === slug ||
        (p.aliases && p.aliases.includes(slug)) ||
        (slug === 'secchi-disk-sample' && (p.slug.includes('secchi') || p.slug.includes('secci')))
    );
  };

  return {
    products,
    getProductById,
    getProductBySlug,
  };
};
