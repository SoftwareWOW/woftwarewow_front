'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
type RetailHeroAboutProps = Partial<CmsHeroAboutSection>

const RetailHeroAbout = ({ body = 'Retail is no longer just about selling products. We help brands connect commerce, marketing, technology, and customer experience to drive stronger growth.' }: RetailHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>{body}</h3>
    </RevealWrapper>
  )
}

export default RetailHeroAbout
