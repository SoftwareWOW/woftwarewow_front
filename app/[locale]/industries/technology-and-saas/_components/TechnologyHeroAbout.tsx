'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
type TechnologyHeroAboutProps = Partial<CmsHeroAboutSection>

const TechnologyHeroAbout = ({ body = 'Great technology needs more than great code. We connect product, design, marketing, automation, and growth to help ambitious technology businesses move forward.' }: TechnologyHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef} className="text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.3]">{body}</h3>
    </RevealWrapper>
  )
}

export default TechnologyHeroAbout
