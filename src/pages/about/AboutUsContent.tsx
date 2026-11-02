import { AboutUsSection } from './AboutUsSection'
import { CoreBeliefSection } from './components/CoreBeliefSection'
import { ImpactSection } from './components/ImpactSection'
import { ProblemSection } from './components/ProblemSection'
import { ValueCreationSection } from './components/ValueCreationSection'
import { VisionMissionSection } from './components/VisionMissionSection'

type AboutUsContentProps = {
  headingLevel: 'h1' | 'h2'
  asPage?: boolean
}

export function AboutUsContent({ headingLevel, asPage = false }: AboutUsContentProps) {
  return (
    <>
      <AboutUsSection headingLevel={headingLevel} asPage={asPage} />
      <CoreBeliefSection />
      <ProblemSection />
      <ValueCreationSection />
      <VisionMissionSection />
      <ImpactSection />
    </>
  )
}
