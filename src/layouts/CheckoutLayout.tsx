import { Link, Outlet } from 'react-router-dom'
import { routePaths } from '../routes/routePaths'

export function CheckoutLayout() {
  return (
    <div className="checkout-shell">
      <header className="checkout-header">
        <Link className="brand" to={routePaths.home}>Maendeleo <span>Asilia</span></Link>
        <span>Secure checkout</span>
        <Link to={routePaths.cart}>Back to cart</Link>
      </header>
      <main><Outlet /></main>
    </div>
  )
}
