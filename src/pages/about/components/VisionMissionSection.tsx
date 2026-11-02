import { Eye, Target } from 'lucide-react'

const values = [
  {
    label: 'The future we envision',
    title: 'Our Vision',
    headline: 'An Africa that manufactures its own future.',
    description:
      'Where rural communities own the value of their soil, and agriculture becomes an engine of industrial wealth.',
    Icon: Eye,
    theme: 'vision',
  },
  {
    label: 'What we are building',
    title: 'Our Mission',
    headline: 'Decentralizing agricultural manufacturing.',
    description:
      'Establishing regional processing hubs across Tanzania that transform locally grown crops into high-value finished goods, shift youth mindsets toward manufacturing, and make farmers true partners in shared prosperity.',
    Icon: Target,
    theme: 'mission',
  },
] as const

export function VisionMissionSection() {
  return (
    <section className="about-vision-mission about-section" aria-labelledby="about-values-heading">
      <div className="about-content">
        <header className="about-section-heading">
          <p className="eyebrow">Our direction</p>
          <h2 id="about-values-heading">Our Vision &amp; Mission</h2>
        </header>

        <div className="about-value-cards">
          {values.map(({ label, title, headline, description, Icon, theme }) => (
            <article className={`about-value-card about-value-card--${theme}`} key={title}>
              <header className="about-value-card-header">
                <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                <div>
                  <p>{label}</p>
                  <h3>{title}</h3>
                </div>
              </header>
              <div className="about-value-card-body">
                <h4>{headline}</h4>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
