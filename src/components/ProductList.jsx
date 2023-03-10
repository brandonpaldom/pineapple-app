import { useMemo } from 'react'
import { getProductsByCategory } from '../helpers/getProductsByCategory'
import ProductCard from './ProductCard'

export default function ProductList({ category }) {
  const products = useMemo(() => getProductsByCategory(category), [category])

  if (!products.length)
    return <p className="mt-6 text-neutral-500">No products found</p>

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} {...product} />
      ))}
    </div>
  )
}
