'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const TechnologyHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef} className="text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.3]">
        Great technology needs more than great code. We connect product, design, marketing, automation, and growth to
        help ambitious technology businesses move forward.
      </h3>
    </RevealWrapper>
  )
}

export default TechnologyHeroAbout
