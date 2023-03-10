import { products } from '../data/products'

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug)
}
