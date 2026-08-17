'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const HealthcareHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Healthcare is built on trust. We help organizations create clearer, more connected experiences that make it
        easier for people to discover, choose, and engage with their care.
      </h3>
    </RevealWrapper>
  )
}

export default HealthcareHeroAbout
