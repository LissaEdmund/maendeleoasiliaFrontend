import { Link, NavLink, Outlet } from 'react-router-dom'
const links = [['Home', '/'], ['Products', '/products'], ['Hubs', '/hubs'], ['Jobs', '/jobs'], ['Contacts', '/contacts']]
export function MainLayout() {
  return <><header className="site-header"><Link className="brand" to="/">Maendeleo <span>Asilia</span></Link><nav aria-label="Main navigation">{links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav><Link className="cart-link" to="/cart" aria-label="Shopping cart">Cart</Link></header><main><Outlet /></main><footer className="site-footer"><span>© {new Date().getFullYear()} Maendeleo Asilia Ltd</span><Link to="/contacts">Get in touch</Link></footer></>
}
