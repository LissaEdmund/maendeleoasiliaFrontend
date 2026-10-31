import { Link } from 'react-router-dom'
import { routePaths } from '../../../routes/routePaths'

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Maendeleo Asilia Ltd</span>
      <Link to={routePaths.contacts}>Get in touch</Link>
    </footer>
  )
}
