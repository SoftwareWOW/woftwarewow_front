import MarketingIndustriesCarousel from '@/app/[locale]/wowmarketing/_components/MarketingIndustriesCarousel'
import Faq from '@/components/wow/LandascapComponets/Faq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { data as defaultLogoData } from '@/data/logo/logo'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { DivisionLandingImageProvider } from '@/lib/strapi/division-landing/DivisionLandingImageContext'
import { mergeDivisionPortfolioImages } from '@/lib/strapi/division-landing/prepare-division-landing'
import { getDivisionLandingPage } from '@/lib/strapi/fetchers/division-landing'
import { getSuperagencyProjectsForPortfolio } from '@/lib/strapi/fetchers/superagency-projects'
import { mapDivisionLandingImages } from '@/lib/strapi/mappers/division-landing'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import WebsitesBuiltToPerformSection from './_components/WebsitesBuiltToPerformSection'
import WebsitesFrameworkSection from './_components/WebsitesFrameworkSection'
import WebsitesHero from './_components/WebsitesHero'
import WebsitesPlatformsIntro from './_components/WebsitesPlatformsIntro'
import WebsitesPortfolioSection from './_components/WebsitesPortfolioSection'
import WebsitesProblemSection from './_components/WebsitesProblemSection'
import WebsitesProcessSection from './_components/WebsitesProcessSection'
import WebsitesSolutionsSection from './_components/WebsitesSolutionsSection'
import WebsitesWhatWeBuildSection from './_components/WebsitesWhatWeBuildSection'
import WebsitesWhyWowSection from './_components/WebsitesWhyWowSection'
import { WEBSITES_CTA, WEBSITES_FAQS, WEBSITES_PORTFOLIO } from './_components/websites-content'

export const revalidate = 60
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/websites',
    'WOW Websites | WOW Superagency',
    'High-performing websites engineered for clarity, conversion, and continuous growth.',
  )
}

export default async function WowWebsitesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const [landing, cmsProjects] = await Promise.all([
    getDivisionLandingPage('wowWebsites', typedLocale),
    getSuperagencyProjectsForPortfolio(typedLocale),
  ])
  const imageMap = mapDivisionLandingImages(landing, 'wowWebsites')
  const portfolioProjects = mergeDivisionPortfolioImages(WEBSITES_PORTFOLIO.projects, cmsProjects)

  return (
    <DivisionLandingImageProvider imageMap={imageMap}>
    <div className="flex flex-col gap-12 bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <WebsitesHero />
       <WebsitesPortfolioSection projects={portfolioProjects} />
       <WowDivisionsMarquee />
      <WebsitesProblemSection />
      <WebsitesBuiltToPerformSection />
      <WebsitesWhatWeBuildSection />
      <WebsitesFrameworkSection />
      <WebsitesProcessSection />
      <WebsitesWhyWowSection />
      <MarketingIndustriesCarousel staticImagesOnly />
      <WebsitesPlatformsIntro logos={defaultLogoData} />
      <WebsitesSolutionsSection />
      <WowEcosystem ecosystem={dictionary.ecosystem} />
      <Faq faqs={[...WEBSITES_FAQS]} />
      <div className="mb-3">
        <WowGrowthCta
          accentText={WEBSITES_CTA.accentText}
          mainText={WEBSITES_CTA.mainText}
          ariaLabel={WEBSITES_CTA.ariaLabel}
        />
      </div>
    </div>
    </DivisionLandingImageProvider>
  )
}