import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import NavItem from './NavItem'

const navItems = [
  { to: '/', label: 'Shop' },
  { to: '/mac', label: 'Mac' },
  { to: '/iphone', label: 'iPhone' },
  { to: '/ipad', label: 'iPad' },
  { to: '/search', label: 'Search' },
]

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header>
      <nav className="mx-auto flex h-16 items-center justify-between px-6">
        <NavLink to="/" className="text-[1.125rem] font-semibold">
          Pineapple
        </NavLink>
        <div className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <NavItem key={item.label} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[0.875rem]">{user?.name}</p>
          <button onClick={onLogout} className="btn-sm btn-secondary">
            Logout
          </button>
        </div>
      </nav>
    </header>
  )
}
