'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const FinanceHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Trust drives every financial and property decision. We help businesses strengthen that trust through better
        brands, digital experiences, marketing, and technology.
      </h3>
    </RevealWrapper>
  )
}

export default FinanceHeroAbout
