import { NavLink, useNavigate } from 'react-router-dom'
import NavItem from './NavItem'

const navItems = [
  { to: '/', label: 'Shop' },
  { to: '/mac', label: 'Mac' },
  { to: '/iphone', label: 'iPhone' },
  { to: '/search', label: 'Search' },
]

export default function Navbar() {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login', { replace: true })
  }

  return (
    <header>
      <nav className="mx-auto flex h-16 items-center justify-between px-6">
        <NavLink to="/" className="font-semibold">
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
          <p className="text-[0.875rem]">
            Hi, <span>Brandon</span>
          </p>
          <button onClick={onLogout} className="btn-sm btn-secondary">
            Logout
          </button>
        </div>
      </nav>
    </header>
  )
}
