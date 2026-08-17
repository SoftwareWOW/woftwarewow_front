'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const RetailHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Retail is no longer just about selling products. We help brands connect commerce, marketing, technology, and
        customer experience to drive stronger growth.
      </h3>
    </RevealWrapper>
  )
}

export default RetailHeroAbout
