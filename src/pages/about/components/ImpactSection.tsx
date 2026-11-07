import { Factory, Handshake, TrendingUp, Users } from 'lucide-react'
import { aboutImages } from '../aboutImages'

const impacts = [
  {
    title: 'Farmer Partnerships',
    description: 'Making farmers partners in agricultural value creation.',
    Icon: Handshake,
    image: aboutImages.impact.farmerPartnerships,
  },
  {
    title: 'Youth Employment',
    description: 'Creating meaningful opportunities through manufacturing.',
    Icon: Users,
    image: aboutImages.impact.youthEmployment,
  },
  {
    title: 'Rural Industrialization',
    description: 'Bringing industries closer to agricultural communities.',
    Icon: Factory,
    image: aboutImages.impact.ruralIndustrialization,
  },
  {
    title: 'Value Addition',
    description: 'Capturing more agricultural value through local processing.',
    Icon: TrendingUp,
    image: aboutImages.impact.valueAddition,
  },
] as const

export function ImpactSection() {
  return (
    <section className="about-impact about-section" aria-labelledby="about-impact-heading">
      <div className="about-content">
        <header className="about-section-heading">
          <p className="eyebrow">Our impact</p>
          <h2 id="about-impact-heading">Beyond Processing We are Building Communities</h2>
          <p>
            Our ambition extends beyond producing finished goods. We want to create lasting
            economic opportunities throughout agricultural communities.
          </p>
        </header>

        <div className="about-impact-grid">
          {impacts.map(({ title, description, Icon, image }) => (
            <article className="about-impact-item" key={title}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <div className="about-impact-copy">
                <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
