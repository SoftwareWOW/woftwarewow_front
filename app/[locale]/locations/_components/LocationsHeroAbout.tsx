'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout / TechnologyHeroAbout — word color on scroll. */
const LocationsHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef} className="text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.3]">
        We work across borders with a digital-first model that keeps strategy, technology, design, and growth connected
        wherever our clients are.
      </h3>
    </RevealWrapper>
  )
}

export default LocationsHeroAbout
