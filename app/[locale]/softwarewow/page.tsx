

import SoftwareWowHero from '@/components/wow/softwarewow/SoftwareWowHero'

import WowEcosystem from '@/components/wow/WowEcosystem'

import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

import { getDictionary } from '@/i18n/dictionary'

import type { Locale } from '@/i18n/config'

import { DivisionLandingImageProvider } from '@/lib/strapi/division-landing/DivisionLandingImageContext'

import { mergeDivisionPortfolioImages } from '@/lib/strapi/division-landing/prepare-division-landing'

import { getSuperagencyProjectsForPortfolio } from '@/lib/strapi/fetchers/superagency-projects'

import {
  mergeIndustrySlides,
  mergeServiceItemsWithAlt,
} from '@/lib/strapi/division-landing/merge-landing-content'
import { loadDivisionLandingBundles } from '@/lib/strapi/division-landing/prepare-division-landing'
import {
  landingContentCards,
} from '@/lib/strapi/mappers/division-landing'

import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'

import { setRequestLocale } from 'next-intl/server'

import SoftwareWowFrameworkSection from './_components/SoftwareWowFrameworkSection'

import SoftwareWowIndustriesCarousel from './_components/SoftwareWowIndustriesCarousel'

import SoftwareWowOutcomesSection from './_components/SoftwareWowOutcomesSection'

import SoftwareWowPlatformsIntro from './_components/SoftwareWowPlatformsIntro'

import SoftwareWowPortfolioSection from './_components/SoftwareWowPortfolioSection'

import SoftwareWowProblemSection from './_components/SoftwareWowProblemSection'

import SoftwareWowProcessSection from './_components/SoftwareWowProcessSection'

import SoftwareWowServicesSection from './_components/SoftwareWowServicesSection'

import SoftwareWowSolutionsSection from './_components/SoftwareWowSolutionsSection'

import SoftwareWowTestimonialsSection from './_components/SoftwareWowTestimonialsSection'

import SoftwareWowWhySection from './_components/SoftwareWowWhySection'

import {
  SOFTWAREWOW_CTA,
  SOFTWAREWOW_INDUSTRIES,
  SOFTWAREWOW_PORTFOLIO,
  SOFTWAREWOW_SERVICES,
} from './_components/softwarewow-content'

import SoftwareRfq from '@/components/wow/softwarewow/SoftwareRfq'

import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'



export const revalidate = 60



type Props = {

  params: Promise<{ locale: string }>

}



export async function generateMetadata({ params }: Props) {

  const { locale } = await params

  return divisionPageMetadata(

    locale,

    '/software',

    'SoftwareWOW! | Custom Software, Apps & Digital Products',

    'Custom software, mobile apps, and digital products built to scale with your business — not against it.',

  )

}



export default async function SoftwareWowPage({ params }: Props) {

  const { locale } = await params

  setRequestLocale(locale as Locale)



  const typedLocale = locale as Locale

  const dictionary = await getDictionary(typedLocale)

  const [{ imageMap, content }, cmsProjects] = await Promise.all([
    loadDivisionLandingBundles('softwareWow', typedLocale),
    getSuperagencyProjectsForPortfolio(typedLocale),
  ])

  const portfolioProjects = mergeDivisionPortfolioImages(SOFTWAREWOW_PORTFOLIO.projects, cmsProjects)
  const serviceItems = mergeServiceItemsWithAlt(
    SOFTWAREWOW_SERVICES.items,
    landingContentCards(content, 'services'),
  )
  const industrySlides = mergeIndustrySlides(
    SOFTWAREWOW_INDUSTRIES.slides,
    landingContentCards(content, 'industries'),
  )



  return (

    <DivisionLandingImageProvider imageMap={imageMap}>

    <div className="flex flex-col gap-12 bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">

      <SoftwareWowHero />

      <SoftwareWowPortfolioSection projects={portfolioProjects} />

      <WowDivisionsMarquee />

      <SoftwareWowProblemSection />

      <SoftwareWowServicesSection items={serviceItems} />

      <SoftwareWowOutcomesSection />

      <SoftwareWowFrameworkSection />

      <SoftwareWowProcessSection />

      <SoftwareWowWhySection />

      <SoftwareWowIndustriesCarousel slides={industrySlides} />

      <SoftwareWowTestimonialsSection superAgencyClient={dictionary.superAgencyClient} />

      <SoftwareWowPlatformsIntro />

      <SoftwareWowSolutionsSection />

      <WowEcosystem ecosystem={dictionary.ecosystem} />

       <SoftwareRfq/>

      <div className="mb-3">

        <WowGrowthCta

          accentText={SOFTWAREWOW_CTA.accentText}

          mainText={SOFTWAREWOW_CTA.mainText}

          ariaLabel={SOFTWAREWOW_CTA.ariaLabel}

        />

      </div>

    </div>

    </DivisionLandingImageProvider>

  )

}
