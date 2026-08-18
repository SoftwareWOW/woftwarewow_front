'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const EducationHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Learning has moved far beyond the classroom. We help organizations connect education, technology, communication,
        and growth to create experiences people want to join and continue.
      </h3>
    </RevealWrapper>
  )
}

export default EducationHeroAbout
