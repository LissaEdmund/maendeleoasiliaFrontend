import { NavLink } from 'react-router-dom'
import { routePaths } from '../../../routes/routePaths'

const navigationItems = [
  { label: 'Home', to: routePaths.home, end: true },
  { label: 'About us', to: routePaths.aboutUs },
  { label: 'Products', to: routePaths.products },
  { label: 'Hubs', to: routePaths.hubs },
  { label: 'Jobs & Farmer Desk', to: routePaths.jobs },
  { label: 'Contacts', to: routePaths.contacts },
] as const

type NavbarProps = {
  isOpen: boolean
  onNavigate: () => void
}

export function Navbar({ isOpen, onNavigate }: NavbarProps) {
  return (
    <nav
      id="main-navigation"
      className={`primary-nav${isOpen ? ' is-open' : ''}`}
      aria-label="Main navigation"
    >
      {navigationItems.map(({ label, to, ...linkProps }) => (
        <NavLink key={to} to={to} {...linkProps} onClick={onNavigate}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
