import { useLayoutEffect } from 'react'
import { AboutUsContent } from './AboutUsContent'

export function AboutUsPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AboutUsContent headingLevel="h1" asPage />
  )
}
