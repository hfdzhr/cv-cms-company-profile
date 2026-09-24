import { defineEventHandler, getRouterParam, createError } from 'h3';
import productsData from '~/data/products.json';

export default defineEventHandler(event => {
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug parameter is required',
    });
  }

  const product = productsData.find(
    p =>
      p.slug === slug ||
      (p.aliases && p.aliases.includes(slug)) ||
      (slug === 'secchi-disk-sample' && (p.slug.includes('secchi') || p.slug.includes('secci')))
  );

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Produk tidak ditemukan',
    });
  }

  return {
    success: true,
    data: product,
  };
});
