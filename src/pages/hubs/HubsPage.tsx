import { useState } from 'react'
import { Building2, MapPin } from 'lucide-react'
import { HubCard } from './HubCard'
import { hubRegions, hubs } from './hubData'
import { FilterBar } from '../../components/shared/FilterBar/FilterBar'
import './hubs.css'

export function HubsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>(hubRegions[0].name)
  const [search, setSearch] = useState('')
  const normalizedSearch = search.trim().toLowerCase()
  const filteredHubs = hubs.filter((hub) => {
    const matchesRegion = hub.region === selectedRegion
    const searchableText = [
      hub.name,
      hub.region,
      hub.corridor,
      hub.description,
      hub.lead,
      ...hub.rawInputs,
      ...hub.finishedGoods,
    ].join(' ').toLowerCase()

    return matchesRegion && (!normalizedSearch || searchableText.includes(normalizedSearch))
  })

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

      <FilterBar
        className="hub-region-filter-bar"
        ariaLabel="Filter hubs by region"
        search={{
          label: 'Search hubs',
          value: search,
          placeholder: 'Search hubs, crops, or products...',
          onChange: setSearch,
        }}
        selects={[
          {
            id: 'hub-region',
            label: 'Filter hubs by region',
            value: selectedRegion,
            icon: <MapPin size={16} aria-hidden="true" />,
            options: hubRegions.map((region) => ({
              label: `${region.name} · ${region.jobs}`,
              value: region.name,
            })),
            onChange: setSelectedRegion,
          },
        ]}
      />

      {filteredHubs.length > 0 ? (
        <section className="hub-grid" aria-label={`${selectedRegion} hubs`}>
          {filteredHubs.map((hub) => <HubCard key={hub.slug} hub={hub} />)}
        </section>
      ) : (
        <section className="hub-empty-state" aria-live="polite">
          <MapPin size={24} aria-hidden="true" />
          {normalizedSearch ? (
            <>
              <h2>No matching hubs found</h2>
              <p>No hubs in {selectedRegion} match “{search.trim()}”.</p>
              <button type="button" onClick={() => setSearch('')}>
                Clear search
              </button>
            </>
          ) : (
            <>
              <h2>More hubs are on the way</h2>
              <p>Hub profiles for {selectedRegion} are not available yet.</p>
              <button type="button" onClick={() => setSelectedRegion(hubRegions[0].name)}>
                View Dodoma hub
              </button>
            </>
          )}
        </section>
      )}
    </div>
  )
}
