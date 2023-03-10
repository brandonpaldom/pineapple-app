import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LoginPage from '../pages/LoginPage'
import MacPage from '../pages/MacPage'
import ProductPage from '../pages/ProductPage'
import ProductsPage from '../pages/ProductsPage'
import SearchPage from '../pages/SearchPage'
import IPhonePage from '../pages/IPhonePage'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import NotFoundPage from '../pages/NotFoundPage'

export default function Router() {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Navbar />
              <Outlet />
            </PrivateRoutes>
          }
        >
          <Route path="/" element={<ProductsPage />} />
          <Route path="mac" element={<MacPage />} />
          <Route path="iphone" element={<IPhonePage />} />
          <Route path="product/:slug" element={<ProductPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
