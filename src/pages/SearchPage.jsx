import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getProductsByName } from '../helpers/getProductsByName'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import queryString from 'query-string'

export default function SearchPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const products = getProductsByName(q)

  const { search, handleInputChange } = useForm({
    search: q,
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // if (search.trim().length < 2) return

    navigate(`?q=${search.toLowerCase().trim()}`)
  }

  return (
    <Layout>
      <h1 className="text-[1.5rem] font-semibold">Search</h1>
      <div className="mt-6 flex flex-col gap-6">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="search"
            name="search"
            placeholder="Search"
            autoComplete="off"
            value={search}
            onChange={handleInputChange}
            className="block w-full rounded-l-lg border-transparent bg-neutral-100 focus:border-neutral-500 focus:bg-white focus:ring-0 sm:w-[20rem]"
          />
          <button className="rounded-r-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
      {!products.length && q && (
        <p className="mt-6 text-neutral-500">
          No results found for: <span className="font-semibold">{q}</span>
        </p>
      )}
    </Layout>
  )
}
