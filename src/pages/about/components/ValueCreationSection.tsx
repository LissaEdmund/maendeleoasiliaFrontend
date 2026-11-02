import { Factory, PackageCheck, Sprout } from 'lucide-react'
import { aboutImages } from '../aboutImages'

const stages = [
  {
    number: '01',
    title: 'Source',
    description: 'Partner with local growers and source agricultural crops.',
    Icon: Sprout,
  },
  {
    number: '02',
    title: 'Process',
    description: 'Transform crops through regional manufacturing hubs.',
    Icon: Factory,
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Supply finished, high-value products to the market.',
    Icon: PackageCheck,
  },
] as const

export function ValueCreationSection() {
  return (
    <section className="about-value" aria-labelledby="about-value-heading">
      <div className="about-content">
        <header className="about-section-heading">
          <p className="eyebrow">Our model</p>
          <h2 id="about-value-heading">How We Create Value</h2>
          <p>
            We connect agricultural production to local manufacturing through a decentralized
            network of regional processing hubs.
          </p>
        </header>

        <img
          className="about-value-image"
          src={aboutImages.valueCreation.src}
          alt={aboutImages.valueCreation.alt}
          loading="lazy"
          decoding="async"
        />

        <ol className="about-stages">
          {stages.map(({ number, title, description, Icon }) => (
            <li className="about-stage" key={number}>
              <span className="about-stage-icon"><Icon aria-hidden="true" size={30} /></span>
              <p className="about-stage-number">{number}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
