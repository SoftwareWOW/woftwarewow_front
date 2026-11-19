import OperationsUseCasePoweredSection from '@/app/[locale]/intelligence/use-cases/operations/_components/OperationsUseCasePoweredSection'
import ModernizationPath from '@/app/[locale]/packages/digital-transformation/_components/ModernizationPath'
import PaidSocialHero from '@/app/[locale]/social/services/paid-social-advertising-community-management/_components/PaidSocialHero'
import EcommerceWebsitesChallengeSection from './_components/EcommerceWebsitesChallengeSection'
import EcommerceWebsitesTechnologiesSection from './_components/EcommerceWebsitesTechnologiesSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import EcommerceWebsitesGrowthPiecesSection from './_components/EcommerceWebsitesGrowthPiecesSection'
import { CONTENT, ECOMMERCE_WEBSITES_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: ECOMMERCE_WEBSITES_PAGE_METADATA.title,
    description: ECOMMERCE_WEBSITES_PAGE_METADATA.description,
    openGraph: {
      title: ECOMMERCE_WEBSITES_PAGE_METADATA.title,
      description: ECOMMERCE_WEBSITES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/ecommerce-websites`,
    },
  }
}

export default async function EcommerceWebsitesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeBuild, growthPieces, modernizationPath, technologies, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — social/paid-social PaidSocialHero (Home-15 HeroV15) */}
      <PaidSocialHero
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        marqueeText={hero.marqueeText}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — IntelligentAutomationChallengeSection flip grid */}
      <EcommerceWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. What we build — intelligence/use-cases/operations OperationsUseCasePoweredSection */}
      <OperationsUseCasePoweredSection
        eyebrow={whatWeBuild.eyebrow}
        titleBefore={whatWeBuild.titleBefore}
        titleAccent={whatWeBuild.titleAccent}
        description={whatWeBuild.description}
        steps={[...whatWeBuild.steps]}
        image={whatWeBuild.image}
        sectionId={whatWeBuild.sectionId}
      />
      {/* 4. Advantage — packages/business-growth GrowthPieces (Home-04 ServicesV5) */}
      <EcommerceWebsitesGrowthPiecesSection
        eyebrow={growthPieces.eyebrow}
        title={growthPieces.title}
        description={growthPieces.description}
        items={[...growthPieces.items]}
        footerLine={growthPieces.footerLine}
        footerCtaLabel={growthPieces.footerCtaLabel}
        footerCtaHref={growthPieces.footerCtaHref}
      />
      {/* 5. Process — packages/digital-transformation ModernizationPath (LaunchPath / ServiceProces) */}
      <ModernizationPath title={modernizationPath.title} steps={[...modernizationPath.steps]} />
      {/* 6. Technologies — eCommerce centered logo row (simple-icons) */}
      <EcommerceWebsitesTechnologiesSection
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