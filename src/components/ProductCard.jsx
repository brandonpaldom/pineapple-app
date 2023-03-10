import { Link } from 'react-router-dom'

export default function ProductCard({ slug, name, price }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img src={`/products/${slug}.jpg`} alt={name} />
      <div className="mt-8">
        <h2 className="truncate font-medium">{name}</h2>
        <p className="text-[0.875rem] text-neutral-500">From ${price}</p>
      </div>
    </Link>
  )
}
