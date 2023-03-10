import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

export default function IPhonePage() {
  return (
    <Layout>
      <h1 className="text-[1.5rem] font-semibold">iPhone</h1>
      <ProductList category="iphone" />
    </Layout>
  )
}
