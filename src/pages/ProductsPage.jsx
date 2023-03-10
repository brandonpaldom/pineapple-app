import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

export default function ProductsPage() {
  return (
    <Layout>
      <h1 className="text-[1.5rem] font-semibold">All products</h1>
      <ProductList />
    </Layout>
  )
}
