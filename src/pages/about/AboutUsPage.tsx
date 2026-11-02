import { AboutUsSection } from './AboutUsSection'
import { CoreBeliefSection } from './components/CoreBeliefSection'
import { ImpactSection } from './components/ImpactSection'
import { ProblemSection } from './components/ProblemSection'
import { ValueCreationSection } from './components/ValueCreationSection'
import { VisionMissionSection } from './components/VisionMissionSection'

export function AboutUsPage() {
  return (
    <>
      <AboutUsSection headingLevel="h1" asPage />
      <CoreBeliefSection />
      <ProblemSection />
      <ValueCreationSection />
      <VisionMissionSection />
      <ImpactSection />
    </>
  )
}
