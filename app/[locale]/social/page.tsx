import SocialGallery from '@/app/[locale]/for-you/social-and-community/_components/SocialGallery'

import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'

import SocialHero from '@/components/wow/wowsocial/SocialHero'

import WowEcosystem from '@/components/wow/WowEcosystem'

import { getDictionary } from '@/i18n/dictionary'

import type { Locale } from '@/i18n/config'

import { DivisionLandingImageProvider } from '@/lib/strapi/division-landing/DivisionLandingImageContext'

import { mergeServiceItemsWithAlt } from '@/lib/strapi/division-landing/merge-landing-content'
import { loadDivisionLandingBundles, mergeDivisionPortfolioImages } from '@/lib/strapi/division-landing/prepare-division-landing'

import { getSuperagencyProjectsForPortfolio } from '@/lib/strapi/fetchers/superagency-projects'

import { landingContentCards, landingContentWork } from '@/lib/strapi/mappers/division-landing'

import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'

import { loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'

import { setRequestLocale } from 'next-intl/server'

import SocialApproachSection from './_components/SocialApproachSection'

import SocialChallengeSection from './_components/SocialChallengeSection'

import SocialClientResultsSection from './_components/SocialClientResultsSection'

import SocialCreativeToolsSection from './_components/SocialCreativeToolsSection'

import SocialFaqSection from './_components/SocialFaqSection'

import SocialFlexibleStartSection from './_components/SocialFlexibleStartSection'

import SocialPortfolioSection from './_components/SocialPortfolioSection'

import SocialProcessSection from './_components/SocialProcessSection'

import SocialServicesSection from './_components/SocialServicesSection'

import { SOCIAL_CTA, SOCIAL_PORTFOLIO, SOCIAL_SERVICES } from './_components/social-content'

import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'



export const revalidate = 60



type Props = {

  params: Promise<{ locale: string }>

}



export async function generateMetadata({ params }: Props) {

  const { locale } = await params

  return divisionPageMetadata(

    locale,

    '/social',

    'WOW Social | Social Media Strategy & Community Growth',

    'Create social strategies, ads, and influencer campaigns that convert engagement into sales.',

  )

}



export default async function WowSocialPage({ params }: Props) {

  const { locale } = await params

  setRequestLocale(locale as Locale)



  const typedLocale = locale as Locale

  const dictionary = await getDictionary(typedLocale)

  const [{ imageMap, content }, cmsProjects, socialAndCommunityPage] = await Promise.all([
    loadDivisionLandingBundles('wowSocial', typedLocale),
    getSuperagencyProjectsForPortfolio(typedLocale),
    loadSuperagencyPage('social-and-community', typedLocale),
  ])
  const socialAndCommunitySections = resolvePageSections(socialAndCommunityPage, 'social-and-community')

  const workExplorer = landingContentWork(content, 'work')
  const portfolioProjects = workExplorer
    ? undefined
    : mergeDivisionPortfolioImages(SOCIAL_PORTFOLIO.projects, cmsProjects)
  const serviceItems = mergeServiceItemsWithAlt(
    SOCIAL_SERVICES.items,
    landingContentCards(content, 'services'),
  )

  return (

    <DivisionLandingImageProvider imageMap={imageMap}>

    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">

      <SocialHero />

      <SocialPortfolioSection workExplorer={workExplorer} projects={portfolioProjects} />

      <WowDivisionsMarquee />

      <SocialChallengeSection />

      <SocialGallery {...(socialAndCommunitySections.socialGallery ?? {})} />

      <SocialServicesSection items={serviceItems} />

      <SocialApproachSection />

      <SocialProcessSection />

      <SocialClientResultsSection />

      <div className="-mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">

        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />

      </div>

      <SocialFlexibleStartSection />

      <SocialCreativeToolsSection />

      <WowEcosystem ecosystem={dictionary.ecosystem} />

      <SocialFaqSection />

      <div className="mb-3">

        <WowGrowthCta

          accentText={SOCIAL_CTA.accentText}

          mainText={SOCIAL_CTA.mainText}

          ariaLabel={SOCIAL_CTA.ariaLabel}

        />

      </div>

    </div>

    </DivisionLandingImageProvider>

  )

}
