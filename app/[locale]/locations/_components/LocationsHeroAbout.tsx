'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout / TechnologyHeroAbout — word color on scroll. */
type LocationsHeroAboutProps = Partial<CmsHeroAboutSection>

const LocationsHeroAbout = ({ body = 'We work across borders with a digital-first model that keeps strategy, technology, design, and growth connected wherever our clients are.' }: LocationsHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef} className="text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.3]">{body}</h3>
    </RevealWrapper>
  )
}

export default LocationsHeroAbout
