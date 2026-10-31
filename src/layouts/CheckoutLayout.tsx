import { Link, Outlet } from 'react-router-dom'
export function CheckoutLayout() { return <div className="checkout-shell"><header className="checkout-header"><Link className="brand" to="/">Maendeleo <span>Asilia</span></Link><span>Secure checkout</span><Link to="/cart">Back to cart</Link></header><main><Outlet /></main></div> }
