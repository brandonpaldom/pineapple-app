import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Layout from '../components/Layout'
import { getProductBySlug } from '../helpers/getProductBySlug'

export default function ProductPage() {
  const { slug } = useParams()

  const product = useMemo(() => getProductBySlug(slug), [slug])

  if (!product) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Banner />
      <Layout>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <img
              src={`/products/${product.slug}.jpg`}
              alt={product.name}
              className="rounded-lg shadow-md md:rounded-none md:shadow-none"
            />
          </div>
          <div>
            <h1 className="text-[2rem] font-semibold">{product.name}</h1>
            <p className="text-[1.25rem] text-neutral-500">
              From ${product.price}
            </p>
            <p className="my-6 text-neutral-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              provident aspernatur pariatur placeat magni voluptatem, soluta
              veniam laudantium vel velit ipsa nulla dolor cumque facere. Natus
              ducimus unde facilis magnam.
            </p>
            <button className="btn btn-primary">
              Buy now for ${product.price}
            </button>
          </div>
        </div>
        <Features />
      </Layout>
    </>
  )
}
