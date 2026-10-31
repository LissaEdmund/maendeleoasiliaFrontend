import { Link } from 'react-router-dom'
export function HomePage() {
  return <section className="hero page-shell"><p className="eyebrow">Growing opportunity together</p><h1>From local production<br />to lasting progress.</h1><p>Discover the people, products and hubs building a more prosperous future.</p><Link className="button" to="/products">Explore products</Link></section>
}
