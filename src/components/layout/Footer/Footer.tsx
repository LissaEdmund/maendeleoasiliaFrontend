import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../../assets/logos/logo.png'
import { routePaths } from '../../../routes/routePaths'

const quickLinks = [
  { label: 'Home', to: routePaths.home },
  { label: 'Products', to: routePaths.products },
  { label: 'Hubs', to: routePaths.hubs },
  { label: 'Jobs', to: routePaths.jobs },
  { label: 'Contacts', to: routePaths.contacts },
] as const

const legalLinks = [
  { label: 'Privacy Policy', to: routePaths.privacyPolicy },
  { label: 'Terms & Conditions', to: routePaths.termsAndConditions },
  { label: 'Admin Login', to: routePaths.adminLogin },
] as const

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <section className="footer-about" aria-label="About Maendeleo Asilia">
          <Link className="footer-brand" to={routePaths.home}>
            <img src={logo} alt="" />
            <span>
              <strong>Maendeleo Asilia</strong>
              <small>Tanzania agro-industrial ecosystem</small>
            </span>
          </Link>
          <p>
            Transforming Tanzania’s harvests into local industrial strength. We
            construct decentralized processing hubs at the source so value,
            jobs, and prosperity remain in rural communities.
          </p>
          <address className="footer-contact-list">
            <span>
              <MapPin aria-hidden="true" size={15} />
              <span>Kilimo Complex, Victoria Area, New Bagamoyo Road, Dar es Salaam, Tanzania</span>
            </span>
            <a href="tel:+255754892341">
              <Phone aria-hidden="true" size={15} />
              <span>+255 754 892 341</span>
            </a>
            <a href="mailto:habari@maendeleoasilia.co.tz">
              <Mail aria-hidden="true" size={15} />
              <span>habari@maendeleoasilia.co.tz</span>
            </a>
          </address>
        </section>

        <nav className="footer-column" aria-label="Footer quick navigation">
          <h2>Quick navigation</h2>
          <ul>
            {quickLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-column footer-hubs">
          <h2>Regional hubs</h2>
          <p>Discover our regional processing hubs and the work happening across Tanzania.</p>
          <Link to={routePaths.hubs}>Explore hubs</Link>
        </section>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maendeleo Asilia Ltd. All rights reserved.</span>
        <nav className="footer-legal-links" aria-label="Legal and administration links">
          {legalLinks.map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
