import { Link } from 'react-router-dom'
import { routePaths } from '../../../routes/routePaths'
import { Navbar } from '../Navbar/Navbar'

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to={routePaths.home} aria-label="Maendeleo Asilia home">
        Maendeleo <span>Asilia</span>
      </Link>
      <Navbar />
      <Link className="cart-link" to={routePaths.cart} aria-label="Shopping cart">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
        <span className="sr-only">Cart</span>
      </Link>
    </header>
  )
}
