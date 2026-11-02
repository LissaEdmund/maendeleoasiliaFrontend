import { Factory, Wheat } from 'lucide-react'
import { aboutImages } from '../aboutImages'

const challenges = [
  {
    title: 'Raw-material Dependency',
    description: 'Rural producers often capture only a limited share of the value generated from their crops.',
    Icon: Wheat,
  },
  {
    title: 'Limited Local Processing',
    description: 'Manufacturing opportunities remain disconnected from many agricultural production areas.',
    Icon: Factory,
  },
] as const

export function ProblemSection() {
  return (
    <section className="about-problem about-section" aria-labelledby="about-problem-heading">
      <div className="about-content">
        <header className="about-section-heading">
          <p className="eyebrow">The challenge</p>
          <h2 id="about-problem-heading">The Problem We Are Solving</h2>
          <p>
            For generations, African agriculture has been shaped by a post-colonial model that
            treats rural communities as mere suppliers of low-value raw materials. Farmers pour
            their labor into the land, only for middlemen and urban processors to capture the true
            wealth while exporting finished goods back at a premium.
          </p>
        </header>

        <img
          className="about-problem-image"
          src={aboutImages.problem.src}
          alt={aboutImages.problem.alt}
          loading="lazy"
          decoding="async"
        />

        <div className="about-challenges">
          {challenges.map(({ title, description, Icon }) => (
            <article className="about-challenge-card" key={title}>
              <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <aside className="about-opportunity">
          <h3>The Opportunity Is Clear.</h3>
          <p>
            Bring processing closer to agricultural production, empower farmers as business
            partners, and build industries where agricultural value originates.
          </p>
        </aside>
      </div>
    </section>
  )
}
