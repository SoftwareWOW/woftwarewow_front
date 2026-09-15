'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
type EducationHeroAboutProps = Partial<CmsHeroAboutSection>

const EducationHeroAbout = ({ body = 'Learning has moved far beyond the classroom. We help organizations connect education, technology, communication, and growth to create experiences people want to join and continue.' }: EducationHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef} className="text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.3]">{body}</h3>
    </RevealWrapper>
  )
}

export default EducationHeroAbout
