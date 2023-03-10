import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

export default function MenPage() {
  return (
    <Layout>
      <h1 className="text-[1.5rem] font-semibold">Mac</h1>
      <ProductList category="mac" />
    </Layout>
  )
}
