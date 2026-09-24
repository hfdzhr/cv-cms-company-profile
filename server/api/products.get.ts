import { defineEventHandler, getQuery } from 'h3';
import productsData from '~/data/products.json';

export default defineEventHandler(event => {
  const query = getQuery(event);
  let list = [...productsData];

  // Filter by category
  if (query.category && typeof query.category === 'string') {
    list = list.filter(p => p.category.toLowerCase() === query.category.toLowerCase());
  }

  // Filter by search query
  if (query.search && typeof query.search === 'string') {
    const q = query.search.toLowerCase().trim();
    list = list.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.specifications && p.specifications.some((s: string) => s.toLowerCase().includes(q)))
    );
  }

  // Limit
  if (query.limit) {
    const limit = parseInt(String(query.limit), 10);
    if (!isNaN(limit) && limit > 0) {
      list = list.slice(0, limit);
    }
  }

  return {
    success: true,
    total: list.length,
    data: list,
  };
});
