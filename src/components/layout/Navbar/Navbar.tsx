import { NavLink } from 'react-router-dom'
import { routePaths } from '../../../routes/routePaths'

const navigationItems = [
  { label: 'Home', to: routePaths.home, end: true },
  { label: 'Products', to: routePaths.products },
  { label: 'Hubs', to: routePaths.hubs },
  { label: 'Jobs', to: routePaths.jobs },
  { label: 'Contacts', to: routePaths.contacts },
] as const

export function Navbar() {
  return (
    <nav aria-label="Main navigation">
      {navigationItems.map(({ label, to, ...linkProps }) => (
        <NavLink key={to} to={to} {...linkProps}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
