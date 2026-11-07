import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { routePaths } from '../../routes/routePaths'
import { HubCard } from './HubCard'
import { hubs } from './hubData'
import './hubs.css'

export function HubDetailsPage() {
  const { slug } = useParams()
  const hub = hubs.find((item) => item.slug === slug)

  if (!hub) {
    return (
      <div className="hub-details-page">
        <section className="hub-empty-state">
          <h1>Hub profile not found</h1>
          <p>This hub may have moved or is not available yet.</p>
          <Link className="hub-back-link" to={routePaths.hubs}>Browse all hubs</Link>
        </section>
      </div>
    )
  }

  return (
    <div className="hub-details-page">
      <Link className="hub-back-link" to={routePaths.hubs}>
        <ArrowLeft size={16} aria-hidden="true" /> All regional hubs
      </Link>
      <section className="hub-grid" aria-label={`${hub.name} details`}>
        <HubCard hub={hub} showDetailsLink={false} />
      </section>
    </div>
  )
}
