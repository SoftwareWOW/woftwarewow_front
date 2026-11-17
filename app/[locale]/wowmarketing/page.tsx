import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { DivisionLandingImageProvider } from '@/lib/strapi/division-landing/DivisionLandingImageContext'
import { mergeIndustrySlides } from '@/lib/strapi/division-landing/merge-landing-content'
import { loadDivisionLandingBundles, mergeDivisionPortfolioImages } from '@/lib/strapi/division-landing/prepare-division-landing'
import { getSuperagencyProjectsForPortfolio } from '@/lib/strapi/fetchers/superagency-projects'
import { landingContentCards } from '@/lib/strapi/mappers/division-landing'
import { localizedAlternates } from '@/lib/seo/localized-alternates'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MarketingHero from './_components/MarketingHero'
import MarketingPlatformsIntro from './_components/MarketingPlatformsIntro'
import MarketingPortfolioSection from './_components/MarketingPortfolioSection'
import { SOFTWAREWOW_INDUSTRIES } from '@/app/[locale]/softwarewow/_components/softwarewow-content'
import SoftwareWowIndustriesCarousel from '@/app/[locale]/softwarewow/_components/SoftwareWowIndustriesCarousel'
import { MARKETING_CTA, MARKETING_FAQS, MARKETING_PORTFOLIO } from './_components/marketing-content'



import MarketingHoldbackSection from './_components/MarketingHoldbackSection'
import MarketingApproachGrid from './_components/MarketingApproachGrid'
import MarketingServicesGrid from './_components/MarketingServicesGrid'
import MarketingFrameworkSection from './_components/MarketingFrameworkSection'
import MarketingProcessSection from './_components/MarketingProcessSection'
import MarketingGrowthPartnerSection from './_components/MarketingGrowthPartnerSection'
import Faq from '@/components/wow/LandascapComponets/Faq'
import WowEcosystem from '@/components/wow/WowEcosystem'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'
export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'WOW Marketing | WOW Superagency',
    description:
      'Data-driven marketing, SEO, paid ads, and automation that help small businesses attract customers and grow revenue.',
    alternates: localizedAlternates(locale, '/marketing'),
  }
}

export default async function WowMarketingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const [{ imageMap }, softwareWowLanding, cmsProjects] = await Promise.all([
    loadDivisionLandingBundles('wowMarketing', typedLocale),
    loadDivisionLandingBundles('softwareWow', typedLocale),
    getSuperagencyProjectsForPortfolio(typedLocale),
  ])
  const industrySlides = mergeIndustrySlides(
    SOFTWAREWOW_INDUSTRIES.slides,
    landingContentCards(softwareWowLanding.content, 'industries'),
  )
  const portfolioMerged = mergeDivisionPortfolioImages(
    [MARKETING_PORTFOLIO.featured, ...MARKETING_PORTFOLIO.projects],
    cmsProjects,
  )
  return (
    <DivisionLandingImageProvider imageMap={imageMap}>
    <div className="flex flex-col gap-12 bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <MarketingHero />
      <MarketingPlatformsIntro />
      <MarketingPortfolioSection
        featured={portfolioMerged[0]}
        projects={portfolioMerged.slice(1)}
      />
      <WowDivisionsMarquee />
      <MarketingHoldbackSection />
      <MarketingApproachGrid />
      <MarketingServicesGrid />
      <MarketingFrameworkSection />
      <MarketingProcessSection />
      <MarketingGrowthPartnerSection />
      <SoftwareWowIndustriesCarousel slides={industrySlides} />
      <WowEcosystem ecosystem={dictionary.ecosystem} />
      <Faq faqs={[...MARKETING_FAQS]} />
      <div className="mb-3">
        <WowGrowthCta
          accentText={MARKETING_CTA.accentText}
          mainText={MARKETING_CTA.mainText}
          ariaLabel={MARKETING_CTA.ariaLabel}
        />
      </div>
    </div>
    </DivisionLandingImageProvider>
  )
}