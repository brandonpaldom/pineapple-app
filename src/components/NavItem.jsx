import { NavLink } from 'react-router-dom'

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-link${isActive ? ' nav-link-active' : ''}`
      }
    >
      {children}
    </NavLink>
  )
}
