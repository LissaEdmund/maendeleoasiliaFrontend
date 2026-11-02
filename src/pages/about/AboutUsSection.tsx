import { aboutImages } from './aboutImages'

type AboutUsSectionProps = {
  headingLevel?: 'h1' | 'h2'
  asPage?: boolean
}

export function AboutUsSection({ headingLevel = 'h2', asPage = false }: AboutUsSectionProps) {
  const MainHeading = headingLevel
  const Subheading = headingLevel === 'h1' ? 'h2' : 'h3'

  return (
    <section
      className={`about-section about-intro${asPage ? ' about-page' : ''}`}
      aria-labelledby="about-us-heading"
    >
      <div className="about-content">
        <header className="about-intro-heading">
          <p className="eyebrow">About Maendeleo Asilia</p>
          <MainHeading className="about-main-heading" id="about-us-heading">
            Who We Are
          </MainHeading>
          <Subheading className="about-subheading">
            Decentralizing Industrial Processing to Empower Tanzanian Growers
          </Subheading>
        </header>
        <div className="about-intro-body">
          <p>
            Maendeleo Asilia is an impact-driven agro-industrial ecosystem building decentralized,
            region-specific manufacturing hubs across Tanzania. We process locally harvested food
            and cash crops into high-value finished goods directly at the source turning rural
            communities into thriving industrial engines.
          </p>
          <img
            className="about-intro-image"
            src={aboutImages.introduction.src}
            alt={aboutImages.introduction.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
