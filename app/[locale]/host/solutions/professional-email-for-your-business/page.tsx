import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import SharedHostingIncludedSection from '@/app/[locale]/host/services/shared-web-hosting/_components/SharedHostingIncludedSection'
import VpsHostingChallengeSection from '@/app/[locale]/host/services/vps-hosting/_components/VpsHostingChallengeSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BusinessEmailAdvantageSection from './_components/BusinessEmailAdvantageSection'
import { CONTENT, PROFESSIONAL_EMAIL_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: PROFESSIONAL_EMAIL_PAGE_METADATA.title,
    description: PROFESSIONAL_EMAIL_PAGE_METADATA.description,
    openGraph: {
      title: PROFESSIONAL_EMAIL_PAGE_METADATA.title,
      description: PROFESSIONAL_EMAIL_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/solutions/professional-email-for-your-business`,
    },
  }
}

export default async function ProfessionalEmailForYourBusinessPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeProvide, advantage, gettingStarted, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — intelligence IntelligentAutomationHero (Home-19 HeroV19) */}
      <IntelligentAutomationHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId="professional-email-hero-heading"
        breakBeforeItalic={false}
      />

      {/* 2. The Challenge — vps VpsHostingChallengeSection (MarketingUseCaseAdvantage numbered pillars) */}
      <VpsHostingChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        description={challenge.description}
        pillars={[...challenge.pillars]}
      />

      {/* 3. What We Provide — shared-web-hosting SharedHostingIncludedSection (BiPredictive 3×2 flip cards) */}
      <SharedHostingIncludedSection
        eyebrow={whatWeProvide.eyebrow}
        titleBefore={whatWeProvide.titleBefore}
        titleAccent={whatWeProvide.titleAccent}
        description={whatWeProvide.description}
        capabilityCards={[...whatWeProvide.capabilityCards]}
      />

      {/* 4. Advantage — ecommerce EcommerceWebsitesGrowthPiecesSection (Home-04 ServicesV5) */}
      <BusinessEmailAdvantageSection
        eyebrow={advantage.eyebrow}
        titleBefore={advantage.titleBefore}
        titleAccent={advantage.titleAccent}
        description={advantage.description}
        items={[...advantage.items]}
        footerLine={advantage.footerLine}
        footerAccent={advantage.footerAccent}
        footerCtaLabel={advantage.footerCtaLabel}
        footerCtaHref={advantage.footerCtaHref}
      />

      {/* 5. Getting Started — websites LandingPagesProcessSection (analytics ModernizationPath 4-step timeline) */}
      <LandingPagesProcessSection
        eyebrow={gettingStarted.eyebrow}
        titleBefore={gettingStarted.titleBefore}
        titleAccent={gettingStarted.titleAccent}
        description={gettingStarted.description}
        steps={[...gettingStarted.steps]}
      />

      {/* 6. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
