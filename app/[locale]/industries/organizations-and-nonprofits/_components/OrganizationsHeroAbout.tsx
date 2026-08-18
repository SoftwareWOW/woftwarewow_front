'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const OrganizationsHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        A strong mission needs the right systems behind it. We help organizations connect people, technology,
        communication, and strategy to turn purpose into meaningful action.
      </h3>
    </RevealWrapper>
  )
}

export default OrganizationsHeroAbout
