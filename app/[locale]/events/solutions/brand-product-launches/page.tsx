import SpeakingMediaPresenceHero from '@/app/[locale]/events/_components/SpeakingMediaPresenceHero'
import CustomerServiceUseCaseExperienceSection from '@/app/[locale]/intelligence/use-cases/customer-service/_components/CustomerServiceUseCaseExperienceSection'
import OperationsUseCasePoweredSection from '@/app/[locale]/intelligence/use-cases/operations/_components/OperationsUseCasePoweredSection'
import EcommerceWebsitesChallengeSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesChallengeSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { BRAND_PRODUCT_LAUNCHES_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: BRAND_PRODUCT_LAUNCHES_PAGE_METADATA.title,
    description: BRAND_PRODUCT_LAUNCHES_PAGE_METADATA.description,
    openGraph: {
      title: BRAND_PRODUCT_LAUNCHES_PAGE_METADATA.title,
      description: BRAND_PRODUCT_LAUNCHES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/events/solutions/brand-product-launches`,
    },
  }
}

export default async function BrandProductLaunchesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeCreate, launchImpact, process, cta } = CONTENT

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
        headingId="brand-product-launches-hero-heading"
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

      {/* 3. What We Create — operations OperationsUseCasePoweredSection (image + vertical numbered steps) */}
      <OperationsUseCasePoweredSection
        eyebrow={whatWeCreate.eyebrow}
        titleBefore={whatWeCreate.titleBefore}
        titleAccent={whatWeCreate.titleAccent}
        description={whatWeCreate.description}
        steps={[...whatWeCreate.steps]}
        image={whatWeCreate.image}
        sectionId={whatWeCreate.sectionId}
      />

      {/* 4. The Launch Impact — CustomerServiceUseCaseExperienceSection (Home-02 ProcessV2 four columns) */}
      <CustomerServiceUseCaseExperienceSection
        eyebrow={launchImpact.eyebrow}
        title={launchImpact.title}
        description={launchImpact.description}
        pillars={[...launchImpact.pillars]}
      />

      {/* 5. Our Launch Process — websites LandingPagesProcessSection (analytics ModernizationPath 4-step timeline) */}
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
