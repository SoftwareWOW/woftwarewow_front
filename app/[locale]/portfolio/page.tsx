import LayoutOne from '@/components/shared/LayoutOne'

const PAGE_SLUG = 'portfolio' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'OUR PORTFOLIO',
  title: 'Work built to',
  italicTitle: 'make an impact.',
  description: 'Explore the ideas, experiences, and solutions we\'ve created across technology, marketing, design, and growth.',
}

import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ExploreWork from './_components/ExploreWork'
import ExpertiseBehindWork from './_components/ExpertiseBehindWork'
import FeaturedWork from './_components/FeaturedWork'
import HowWeCreateImpact from './_components/HowWeCreateImpact'
import PortfolioCta from './_components/PortfolioCta'
import PortfolioHero from './_components/PortfolioHero'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Portfolio' })
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — case-study/CaseStudyHero */}
        <PortfolioHero {...hero} images={hero.images} />
        {/* 2. Featured Work — case-study/Projects (alternating layout) */}
        <FeaturedWork {...(sections.featuredWork ?? {})} />
        {/* 3. Explore Our Work — case-study/Projects card hover + new filter grid */}
        <ExploreWork {...(sections.exploreWork ?? {})} />
        {/* 4. How We Create Impact — packages/business-growth/HowItWorks (4-col, no CTA) */}
        <HowWeCreateImpact {...(sections.howWeCreateImpact ?? {})} />
        {/* 5. Expertise Behind the Work — technology-and-saas/ConnectedExpertise (Home-19 ElevateBrandV2, compact grid) */}
        <ExpertiseBehindWork {...(sections.expertiseBehindWork ?? {})} />
        {/* 6. CTA — local compact section (not WowGrowthCta) */}
        <PortfolioCta {...(sections.portfolioCta ?? {})} />
      </div>
    </LayoutOne>
  )
}
