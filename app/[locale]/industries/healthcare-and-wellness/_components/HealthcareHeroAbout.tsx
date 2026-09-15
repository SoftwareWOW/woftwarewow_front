'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
type HealthcareHeroAboutProps = Partial<CmsHeroAboutSection>

const HealthcareHeroAbout = ({ body = 'Healthcare is built on trust. We help organizations create clearer, more connected experiences that make it easier for people to discover, choose, and engage with their care.' }: HealthcareHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>{body}</h3>
    </RevealWrapper>
  )
}

export default HealthcareHeroAbout
