import { Link } from 'react-router-dom'
import { AboutUsSection } from '../about/AboutUsSection'

export function HomePage() {
  return (
    <>
      <section className="hero page-shell">
        <p className="eyebrow">Decentralized Agro-Industrial Ecosystem</p>
        <h1>Transforming African Soil into Industrial Wealth</h1>
        <p>
          Empowering rural Tanzania through decentralized agro-industrial hubs
          and value addition. We transform local harvests into premium consumer
          goods right at the farm gate.
        </p>
        <Link className="button" to="/products">Explore products</Link>
      </section>
      <AboutUsSection />
    </>
  )
}
