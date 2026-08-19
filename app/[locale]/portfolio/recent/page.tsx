import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MoreFromPortfolio from './_components/MoreFromPortfolio'
import RecentWorkCta from './_components/RecentWorkCta'
import RecentWorkExplorer from './_components/RecentWorkExplorer'
import RecentWorkHero from './_components/RecentWorkHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Recent Work | WOW Superagency',
    description: 'See our latest completed projects across technology, marketing, design, and growth.',
    keywords: [
      'recent work',
      'latest projects',
      'portfolio',
      'case studies',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Recent Work | WOW Superagency',
      description: 'See our latest completed projects across technology, marketing, design, and growth.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/portfolio/recent`,
    },
  }
}

export default async function RecentWorkPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — case-study/CaseStudyHero (compact variant) */}
        <RecentWorkHero />
        {/* 2. Latest Projects + 3. Explore by Expertise — portfolio/ExploreWork + case-study/Projects */}
        <RecentWorkExplorer />
        {/* 4. More From Our Portfolio — local bridge CTA */}
        <MoreFromPortfolio />
        {/* 5. Start Your Project — WowGrowthCta-inspired local CTA */}
        <RecentWorkCta />
      </div>
    </LayoutOne>
  )
}
