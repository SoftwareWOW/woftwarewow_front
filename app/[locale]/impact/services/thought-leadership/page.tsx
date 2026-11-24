import BrandIdentityWorkSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/BrandIdentityWorkSection'
import SalesJourneyGap from '@/app/[locale]/accelerate/services/sales-process-optimization/_components/SalesJourneyGap'
import CustomerServiceUseCaseExperienceSection from '@/app/[locale]/intelligence/use-cases/customer-service/_components/CustomerServiceUseCaseExperienceSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import MultilingualWebsitesHero from '@/app/[locale]/websites/services/multilingual-websites/_components/MultilingualWebsitesHero'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONTENT, THOUGHT_LEADERSHIP_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: THOUGHT_LEADERSHIP_PAGE_METADATA.title,
    description: THOUGHT_LEADERSHIP_PAGE_METADATA.description,
    openGraph: {
      title: THOUGHT_LEADERSHIP_PAGE_METADATA.title,
      description: THOUGHT_LEADERSHIP_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/impact/services/thought-leadership`,
    },
  }
}

export default async function ThoughtLeadershipPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, whatWeCreate, valueOfVoice, approach, ideasInAction, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-19 HeroV19 (websites MultilingualWebsitesHero) */}
      <MultilingualWebsitesHero
        {...hero}
        images={[...hero.images]}
        headingId="thought-leadership-hero-heading"
      />

      {/* 2. What We Create — Home-19 ElevateBrandV2 (accelerate SalesJourneyGap) */}
      <SalesJourneyGap
        eyebrow={whatWeCreate.eyebrow}
        title={whatWeCreate.title}
        body={whatWeCreate.body}
        stages={[...whatWeCreate.stages]}
      />

      {/* 3. The Value of Your Voice — Home-02 ProcessV2 (CustomerServiceUseCaseExperienceSection) */}
      <CustomerServiceUseCaseExperienceSection
        eyebrow={valueOfVoice.eyebrow}
        title={valueOfVoice.title}
        description={valueOfVoice.description}
        pillars={[...valueOfVoice.pillars]}
      />

      {/* 4. Our Approach — LandingPagesProcessSection (horizontal timeline) */}
      <LandingPagesProcessSection
        eyebrow={approach.eyebrow}
        title={approach.title}
        description={approach.description}
        steps={[...approach.steps]}
      />

      {/* 5. Ideas in Action — design BrandIdentityWorkSection (MarketingPortfolioSection) */}
      <BrandIdentityWorkSection {...ideasInAction} />

      {/* 6. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
