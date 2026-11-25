import CreativeProcessSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/CreativeProcessSection'
import SalesJourneyGap from '@/app/[locale]/accelerate/services/sales-process-optimization/_components/SalesJourneyGap'
import VpsHostingAdvantageSection from '@/app/[locale]/host/services/vps-hosting/_components/VpsHostingAdvantageSection'
import VpsHostingChallengeSection from '@/app/[locale]/host/services/vps-hosting/_components/VpsHostingChallengeSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import DomainsDnsHero from './_components/DomainsDnsHero'
import DomainsSearchSection from './_components/DomainsSearchSection'
import { CONTENT, DIGITAL_IDENTITY_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: DIGITAL_IDENTITY_PAGE_METADATA.title,
    description: DIGITAL_IDENTITY_PAGE_METADATA.description,
    openGraph: {
      title: DIGITAL_IDENTITY_PAGE_METADATA.title,
      description: DIGITAL_IDENTITY_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/solutions/your-name-your-digital-identity`,
    },
  }
}

export default async function YourNameYourDigitalIdentityPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, domainSearch, challenge, whatWeProvide, advantage, gettingStarted, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — copy of locations LocationsHero (centered + landmark floats + dual CTAs) */}
      <DomainsDnsHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        images={[...hero.images]}
      />

      {/* 2. Domain Search — adapted from helpsupport HelpHero search form */}
      <DomainsSearchSection
        titleBefore={domainSearch.titleBefore}
        titleAccent={domainSearch.titleAccent}
        titleAfter={domainSearch.titleAfter}
        placeholder={domainSearch.placeholder}
        tlds={[...domainSearch.tlds]}
      />

      {/* 3. The Challenge — vps VpsHostingChallengeSection (MarketingUseCaseAdvantage numbered pillars) */}
      <VpsHostingChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        description={challenge.description}
        pillars={[...challenge.pillars]}
      />

      {/* 4. What We Provide — accelerate SalesJourneyGap (Home-19 ElevateBrandV2) */}
      <SalesJourneyGap
        eyebrow={whatWeProvide.eyebrow}
        title={whatWeProvide.title}
        body={whatWeProvide.body}
        stages={[...whatWeProvide.stages]}
      />

      {/* 5. The Domain Advantage — vps VpsHostingAdvantageSection (StartupJourney / BrandingProcess 2×2) */}
      <VpsHostingAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        accentTitle={advantage.accentTitle}
        description={advantage.description}
        items={[...advantage.items]}
      />

      {/* 6. Getting Started — design CreativeProcessSection (watermark 3-step process) */}
      <CreativeProcessSection
        eyebrow={gettingStarted.eyebrow}
        title={gettingStarted.title}
        description={gettingStarted.description}
        steps={[...gettingStarted.steps]}
      />

      {/* 7. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
