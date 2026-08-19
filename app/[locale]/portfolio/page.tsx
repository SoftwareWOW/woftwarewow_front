import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ExploreWork from './_components/ExploreWork'
import ExpertiseBehindWork from './_components/ExpertiseBehindWork'
import FeaturedWork from './_components/FeaturedWork'
import HowWeCreateImpact from './_components/HowWeCreateImpact'
import PortfolioCta from './_components/PortfolioCta'
import PortfolioHero from './_components/PortfolioHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Portfolio | WOW Superagency',
    description:
      'Explore selected work across technology, marketing, design, and growth from WOW Superagency.',
    keywords: [
      'portfolio',
      'case studies',
      'websites',
      'software',
      'branding',
      'marketing',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Portfolio | WOW Superagency',
      description:
        'Explore selected work across technology, marketing, design, and growth from WOW Superagency.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/portfolio`,
    },
  }
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — case-study/CaseStudyHero */}
        <PortfolioHero />
        {/* 2. Featured Work — case-study/Projects (alternating layout) */}
        <FeaturedWork />
        {/* 3. Explore Our Work — case-study/Projects card hover + new filter grid */}
        <ExploreWork />
        {/* 4. How We Create Impact — packages/business-growth/HowItWorks (4-col, no CTA) */}
        <HowWeCreateImpact />
        {/* 5. Expertise Behind the Work — technology-and-saas/ConnectedExpertise (Home-19 ElevateBrandV2, compact grid) */}
        <ExpertiseBehindWork />
        {/* 6. CTA — local compact section (not WowGrowthCta) */}
        <PortfolioCta />
      </div>
    </LayoutOne>
  )
}
