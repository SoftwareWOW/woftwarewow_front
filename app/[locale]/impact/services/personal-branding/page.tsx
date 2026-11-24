import BrandExperience from '@/app/[locale]/design/services/brand-identity-strategy/_components/BrandExperience'
import BrandIdentityHero from '@/app/[locale]/design/services/brand-identity-strategy/_components/BrandIdentityHero'
import BrandIdentityWorkSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/BrandIdentityWorkSection'
import BiPredictiveDecisionsSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveDecisionsSection'
import BiPredictiveIntelligenceSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveIntelligenceSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONTENT, PERSONAL_BRANDING_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: PERSONAL_BRANDING_PAGE_METADATA.title,
    description: PERSONAL_BRANDING_PAGE_METADATA.description,
    openGraph: {
      title: PERSONAL_BRANDING_PAGE_METADATA.title,
      description: PERSONAL_BRANDING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/impact/services/personal-branding`,
    },
  }
}

export default async function PersonalBrandingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, whatWeBuild, presence, brandExperience, process, ourWork, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-19 HeroV19 (design BrandIdentityHero) */}
      <BrandIdentityHero {...hero} headingId="personal-branding-hero-heading" />

      {/* 2. What We Build — BiPredictiveIntelligenceSection (3+2 flip cards / hover invert) */}
      <BiPredictiveIntelligenceSection
        eyebrow={whatWeBuild.eyebrow}
        titleBefore={whatWeBuild.titleBefore}
        titleAccent={whatWeBuild.titleAccent}
        description={whatWeBuild.description}
        capabilityCards={[...whatWeBuild.capabilityCards]}
      />

      {/* 3. The Power of Your Presence — BiPredictiveDecisionsSection (list left + media right) */}
      <BiPredictiveDecisionsSection
        eyebrow={presence.eyebrow}
        title={presence.title}
        description={presence.description}
        benefits={[...presence.benefits]}
        image={presence.image}
      />

      {/* 4. The Brand Experience — Design brand-identity-strategy BrandExperience (§3 HubExploreSection) */}
      <BrandExperience {...brandExperience} />

      {/* 5. Our Branding Process — LandingPagesProcessSection (horizontal timeline) + ButtonComponent CTA */}
      <section>
        <LandingPagesProcessSection
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
          steps={[...process.steps]}
        />
        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href={process.ctaHref} variant="primary">
              {process.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </section>

      {/* 6. Personal Brands in Practice — design BrandIdentityWorkSection (MarketingPortfolioSection) */}
      <BrandIdentityWorkSection {...ourWork} />

      {/* 7. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
