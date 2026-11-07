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
        </header>

        <div className="about-value-overview">
          <div className="about-value-copy">
            <p>
              At Maendeleo Asilia, we believe that the true economic potential of agriculture lies
              not only in what the land produces, but also in what we create from it. Our approach
              is built around bringing agricultural production and manufacturing closer together,
              ensuring that value is created within the communities where agricultural resources
              originate.
            </p>
            <p>
              We establish decentralized, region-specific agro-industrial hubs strategically
              located near agricultural production areas. Through these hubs, we source locally
              harvested food and cash crops, transform them into high-value finished products, and
              connect those products to wider markets.
            </p>
            <p>
              Our model brings farmers, manufacturing, and markets into one connected ecosystem.
              Rather than leaving farmers as suppliers of raw materials, we seek to transform them
              into empowered partners in a value chain where they are not merely producing wealth
              for others, but actively participating in creating, capturing, and sharing it because
              Africa&apos;s agricultural future should not be defined by what it exports, but by what
              it manufactures.
            </p>
          </div>
          <img
            className="about-value-image"
            src={aboutImages.valueCreation.src}
            alt={aboutImages.valueCreation.alt}
            loading="lazy"
            decoding="async"
          />
        </div>

        <h3 className="about-process-heading">From local harvest to wider markets</h3>
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
