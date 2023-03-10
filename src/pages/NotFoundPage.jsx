import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="grid h-[calc(100vh-11rem)] place-items-center px-6">
        <h1 className="w-full text-center text-[2.5rem] font-semibold leading-tight sm:max-w-[30rem]">
          The page you're looking for can't be found.
        </h1>
      </div>
    </Layout>
  )
}
