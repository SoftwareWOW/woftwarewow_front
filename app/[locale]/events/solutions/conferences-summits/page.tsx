import SalesJourneyGap from '@/app/[locale]/accelerate/services/sales-process-optimization/_components/SalesJourneyGap'
import SpeakingMediaPresenceHero from '@/app/[locale]/events/_components/SpeakingMediaPresenceHero'
import CustomerServiceUseCaseExperienceSection from '@/app/[locale]/intelligence/use-cases/customer-service/_components/CustomerServiceUseCaseExperienceSection'
import EcommerceWebsitesChallengeSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesChallengeSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONFERENCES_SUMMITS_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CONFERENCES_SUMMITS_PAGE_METADATA.title,
    description: CONFERENCES_SUMMITS_PAGE_METADATA.description,
    openGraph: {
      title: CONFERENCES_SUMMITS_PAGE_METADATA.title,
      description: CONFERENCES_SUMMITS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/events/solutions/conferences-summits`,
    },
  }
}

export default async function ConferencesSummitsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeCreate, eventImpact, process, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — events SpeakingMediaPresenceHero (EventsHero / HospitalityHero full-bleed) */}
      <SpeakingMediaPresenceHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        primaryCtaHref={hero.primaryCtaHref}
        secondaryCta={hero.secondaryCta}
        secondaryCtaHref={hero.secondaryCtaHref}
        image={hero.image}
        headingId="conferences-summits-hero-heading"
      />

      {/* 2. The Challenge — ecommerce EcommerceWebsitesChallengeSection (IntelligentAutomation 2×2 flip cards) */}
      <EcommerceWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />

      {/* 3. What We Create — accelerate SalesJourneyGap (Home-19 ElevateBrandV2) */}
      <SalesJourneyGap
        eyebrow={whatWeCreate.eyebrow}
        title={whatWeCreate.title}
        accentTitle={whatWeCreate.accentTitle}
        body={whatWeCreate.body}
        stages={[...whatWeCreate.stages]}
      />

      {/* 4. The Event Impact — CustomerServiceUseCaseExperienceSection (Home-02 ProcessV2 four columns) */}
      <CustomerServiceUseCaseExperienceSection
        eyebrow={eventImpact.eyebrow}
        title={eventImpact.title}
        description={eventImpact.description}
        pillars={[...eventImpact.pillars]}
      />

      {/* 5. Our Event Process — websites LandingPagesProcessSection (analytics ModernizationPath 4-step timeline) */}
      <LandingPagesProcessSection
        eyebrow={process.eyebrow}
        titleBefore={process.titleBefore}
        titleAccent={process.titleAccent}
        description={process.description}
        steps={[...process.steps]}
      />

      {/* 6. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
