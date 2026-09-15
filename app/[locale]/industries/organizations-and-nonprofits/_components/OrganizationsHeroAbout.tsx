'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
type OrganizationsHeroAboutProps = Partial<CmsHeroAboutSection>

const OrganizationsHeroAbout = ({ body = 'A strong mission needs the right systems behind it. We help organizations connect people, technology, communication, and strategy to turn purpose into meaningful action.' }: OrganizationsHeroAboutProps = {}) => {


  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>{body}</h3>
    </RevealWrapper>
  )
}

export default OrganizationsHeroAbout
