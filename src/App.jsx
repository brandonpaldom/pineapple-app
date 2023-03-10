import AuthProvider from './context/AuthProvider'
import Router from './router/Router'
import Footer from './components/Footer'

export default function App() {
  return (
    <AuthProvider>
      <Router />
      <Footer />
    </AuthProvider>
  )
}
