import AccessibleWebAdvantageSection from '@/app/[locale]/websites/services/accessible-web-experiences/_components/AccessibleWebAdvantageSection'
import BusinessWebsitesChallengeSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesChallengeSection'
import BusinessWebsitesTechnologiesSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesTechnologiesSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import CustomerServiceUseCasePoweredSection from '@/app/[locale]/intelligence/use-cases/customer-service/_components/CustomerServiceUseCasePoweredSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MultilingualWebsitesHero from './_components/MultilingualWebsitesHero'
import { CONTENT, MULTILINGUAL_WEBSITES_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: MULTILINGUAL_WEBSITES_PAGE_METADATA.title,
    description: MULTILINGUAL_WEBSITES_PAGE_METADATA.description,
    openGraph: {
      title: MULTILINGUAL_WEBSITES_PAGE_METADATA.title,
      description: MULTILINGUAL_WEBSITES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/multilingual-websites`,
    },
  }
}

export default async function MultilingualWebsitesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeImprove, advantage, process, technologies, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 overflow-x-clip sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-19 HeroV19 (packages/business-growth BusinessGrowthHero) */}
      <MultilingualWebsitesHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — business-websites §2 BusinessWebsitesChallengeSection */}
      <BusinessWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
        containedGrid
      />
      {/* 3. What we improve — intelligence/use-cases/customer-service §3 CustomerServiceUseCasePoweredSection (MarketingFrameworkSection) */}
      <CustomerServiceUseCasePoweredSection
        eyebrow={whatWeImprove.eyebrow}
        titleBefore={whatWeImprove.titleBefore}
        titleAccent={whatWeImprove.titleAccent}
        description={whatWeImprove.description}
        steps={[...whatWeImprove.steps]}
        image={whatWeImprove.image}
        sectionId={whatWeImprove.sectionId}
      />
      {/* 4. Advantage — accessible-web AccessibleWebAdvantageSection (Home-19 OurExpertiseV2) */}
      <AccessibleWebAdvantageSection
        eyebrow={advantage.eyebrow}
        titleBefore={advantage.titleBefore}
        titleAccent={advantage.titleAccent}
        description={advantage.description}
        items={[...advantage.items]}
      />
      {/* 5. Process — landing-pages LandingPagesProcessSection (analytics ModernizationPath) */}
      <LandingPagesProcessSection
        eyebrow={process.eyebrow}
        titleBefore={process.titleBefore}
        titleAccent={process.titleAccent}
        description={process.description}
        steps={[...process.steps]}
      />
      {/* 6. Technologies — business-websites BusinessWebsitesTechnologiesSection */}
      <BusinessWebsitesTechnologiesSection
        eyebrow={technologies.eyebrow}
        headlineBefore={technologies.headlineBefore}
        headlineAccent={technologies.headlineAccent}
        description={technologies.description}
        tools={[...technologies.tools]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}