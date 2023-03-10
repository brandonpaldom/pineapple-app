import { products } from '../data/products'

export const getProductsByCategory = (category) => {
  if (!category) {
    return products
  }

  return products.filter((product) => product.category === category)
}
