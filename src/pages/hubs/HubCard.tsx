import { ArrowRight, CheckCircle2, Factory, MapPin, Sprout, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../routes/routePaths'
import type { Hub } from './hubData'

type HubCardProps = {
  hub: Hub
  showDetailsLink?: boolean
}

export function HubCard({ hub, showDetailsLink = true }: HubCardProps) {
  return (
    <article className="hub-card">
      <div className="hub-card-image-wrap">
        <img className="hub-card-image" src={hub.image} alt={hub.imageAlt} />
        <span className="hub-status"><span aria-hidden="true" /> Operational</span>
        <div className="hub-card-image-caption">
          <p>{hub.corridor} · {hub.region}</p>
          {showDetailsLink ? (
            <h2><Link to={`${routePaths.hubs}/${hub.slug}`}>{hub.name}</Link></h2>
          ) : (
            <h2>{hub.name}</h2>
          )}
        </div>
      </div>

      <div className="hub-card-content">
        <p className="hub-description">{hub.description}</p>

        <section className="hub-transformation" aria-label="Hub value addition">
          <h3><Factory size={15} aria-hidden="true" /> Value addition transformation</h3>
          <div className="hub-transformation-columns">
            <div className="hub-inputs">
              <h4>Raw crops ingested</h4>
              <ul>
                {hub.rawInputs.map((input) => <li key={input}>{input}</li>)}
              </ul>
            </div>
            <div className="hub-outputs">
              <h4>Manufactured finished goods</h4>
              <ul>
                {hub.finishedGoods.map((good) => (
                  <li key={good}><CheckCircle2 size={13} aria-hidden="true" />{good}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <dl className="hub-metrics">
          <div>
            <dt><Users size={13} aria-hidden="true" /> Farmers</dt>
            <dd>{hub.farmers}</dd>
          </div>
          <div>
            <dt><Sprout size={13} aria-hidden="true" /> Youth jobs</dt>
            <dd>{hub.youthJobs}</dd>
          </div>
          <div>
            <dt><Zap size={13} aria-hidden="true" /> Capacity</dt>
            <dd>{hub.capacity}</dd>
          </div>
        </dl>

        <footer className="hub-card-footer">
          <p><MapPin size={14} aria-hidden="true" /><span><strong>Lead:</strong> {hub.lead}</span></p>
          <Link className="hub-shop-link" to={routePaths.products}>
            Shop products from this hub <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </footer>
      </div>
    </article>
  )
}
