import DesignApproachSection from './_components/DesignApproachSection'

import DesignChallengeSection from './_components/DesignChallengeSection'

import DesignCreativeToolsSection from './_components/DesignCreativeToolsSection'

import DesignFaqSection from './_components/DesignFaqSection'

import DesignFlexibleStartSection from './_components/DesignFlexibleStartSection'

import DesignHero from './_components/DesignHero'

import DesignHowWeWorkSection from './_components/DesignHowWeWorkSection'

import DesignPortfolioSection from './_components/DesignPortfolioSection'

import DesignServicesSection from './_components/DesignServicesSection'

import { DESIGN_CTA, DESIGN_PORTFOLIO, DESIGN_SERVICES } from './_components/design-content'

import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'

import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'

import WowEcosystem from '@/components/wow/WowEcosystem'

import { getDictionary } from '@/i18n/dictionary'

import type { Locale } from '@/i18n/config'

import { DivisionLandingImageProvider } from '@/lib/strapi/division-landing/DivisionLandingImageContext'

import { mergeServiceItemsWithAlt } from '@/lib/strapi/division-landing/merge-landing-content'
import { loadDivisionLandingBundles, mergeDivisionPortfolioImages } from '@/lib/strapi/division-landing/prepare-division-landing'

import { getSuperagencyProjectsForPortfolio } from '@/lib/strapi/fetchers/superagency-projects'

import { landingContentCards } from '@/lib/strapi/mappers/division-landing'

import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'

import { setRequestLocale } from 'next-intl/server'



export const revalidate = 60



type Props = {

  params: Promise<{ locale: string }>

}



export async function generateMetadata({ params }: Props) {

  const { locale } = await params

  return divisionPageMetadata(

    locale,

    '/design',

    'WOW Design | WOW Superagency',

    'Product, brand, and experience design that makes digital feel premium and human.',

  )

}



export default async function WowDesignPage({ params }: Props) {

  const { locale } = await params

  setRequestLocale(locale as Locale)



  const typedLocale = locale as Locale

  const dictionary = await getDictionary(typedLocale)

  const [{ imageMap, content }, cmsProjects] = await Promise.all([
    loadDivisionLandingBundles('wowDesign', typedLocale),
    getSuperagencyProjectsForPortfolio(typedLocale),
  ])

  const portfolioProjects = mergeDivisionPortfolioImages(DESIGN_PORTFOLIO.projects, cmsProjects)
  const serviceItems = mergeServiceItemsWithAlt(
    DESIGN_SERVICES.items,
    landingContentCards(content, 'services'),
  )



  return (

    <DivisionLandingImageProvider imageMap={imageMap}>

    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">

      <DesignHero />

      <DesignPortfolioSection projects={portfolioProjects} />

      <WowDivisionsMarquee />

      <DesignChallengeSection />

      <DesignServicesSection items={serviceItems} />

      <DesignApproachSection />

      <DesignHowWeWorkSection />

      <div className="-mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">

        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />

      </div>

      <DesignFlexibleStartSection />

      <DesignCreativeToolsSection />

      <WowEcosystem ecosystem={dictionary.ecosystem} />

      <DesignFaqSection />

      <div className="mb-3">

        <WowGrowthCta

          accentText={DESIGN_CTA.accentText}

          mainText={DESIGN_CTA.mainText}

          ariaLabel={DESIGN_CTA.ariaLabel}

        />

      </div>

    </div>

    </DivisionLandingImageProvider>

  )

}
