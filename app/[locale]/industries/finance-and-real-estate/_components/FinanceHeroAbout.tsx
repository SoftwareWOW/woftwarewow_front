'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
type FinanceHeroAboutProps = Partial<CmsHeroAboutSection>

const FinanceHeroAbout = ({ body = 'Trust drives every financial and property decision. We help businesses strengthen that trust through better brands, digital experiences, marketing, and technology.' }: FinanceHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>{body}</h3>
    </RevealWrapper>
  )
}

export default FinanceHeroAbout
