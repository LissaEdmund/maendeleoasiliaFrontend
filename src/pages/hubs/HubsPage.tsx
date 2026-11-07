import { useState } from 'react'
import { Building2, MapPin } from 'lucide-react'
import { HubCard } from './HubCard'
import { hubRegions, hubs } from './hubData'
import './hubs.css'

export function HubsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>(hubRegions[0].name)
  const filteredHubs = hubs.filter((hub) => hub.region === selectedRegion)

  return (
    <div className="hubs-page">
      <header className="hubs-heading">
        <p className="hubs-eyebrow"><Building2 size={14} aria-hidden="true" /> Decentralized infrastructure</p>
        <h1>Tanzania Regional Manufacturing Hubs</h1>
        <p>
          Manufacturing at the source: transforming raw harvests into certified,
          high-value consumer goods right in rural districts.
        </p>
      </header>

      <nav className="hub-region-filters" aria-label="Filter hubs by region">
        {hubRegions.map((region) => (
          <button
            key={region.name}
            className={`hub-region-filter${selectedRegion === region.name ? ' is-selected' : ''}`}
            type="button"
            aria-pressed={selectedRegion === region.name}
            onClick={() => setSelectedRegion(region.name)}
          >
            <MapPin size={14} aria-hidden="true" />
            <span>{region.name}</span>
            <small>{region.jobs}</small>
          </button>
        ))}
      </nav>

      {filteredHubs.length > 0 ? (
        <section className="hub-grid" aria-label={`${selectedRegion} hubs`}>
          {filteredHubs.map((hub) => <HubCard key={hub.slug} hub={hub} />)}
        </section>
      ) : (
        <section className="hub-empty-state" aria-live="polite">
          <MapPin size={24} aria-hidden="true" />
          <h2>More hubs are on the way</h2>
          <p>Hub profiles for {selectedRegion} are not available yet.</p>
          <button type="button" onClick={() => setSelectedRegion(hubRegions[0].name)}>
            View Dodoma hub
          </button>
        </section>
      )}
    </div>
  )
}
