import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

import WowEcosystem from '@/components/wow/WowEcosystem'

import { getDictionary } from '@/i18n/dictionary'

import type { Locale } from '@/i18n/config'

import { DivisionLandingImageProvider } from '@/lib/strapi/division-landing/DivisionLandingImageContext'

import { mergeExploreTopics } from '@/lib/strapi/division-landing/merge-landing-content'
import { loadDivisionLandingBundles } from '@/lib/strapi/division-landing/prepare-division-landing'
import { landingContentCards } from '@/lib/strapi/mappers/division-landing'

import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'

import { setRequestLocale } from 'next-intl/server'

import HubChallengeSection from './_components/HubChallengeSection'

import HubCommunitySection from './_components/HubCommunitySection'

import HubExploreSection from './_components/HubExploreSection'

import HubFaqSection from './_components/HubFaqSection'

import HubHero from './_components/HubHero'

import HubHowItWorksSection from './_components/HubHowItWorksSection'

import HubLearningOptionsSection from './_components/HubLearningOptionsSection'

import HubLearningPathwaysSection from './_components/HubLearningPathwaysSection'

import HubProgramsSection from './_components/HubProgramsSection'

import { HUB_CTA, HUB_EXPLORE } from './_components/hub-content'

import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'



export const revalidate = 60



type Props = {

  params: Promise<{ locale: string }>

}



export async function generateMetadata({ params }: Props) {

  const { locale } = await params

  return divisionPageMetadata(

    locale,

    '/hub',

    'WOW Hub | WOW Superagency',

    'Learn more, grow smarter, and achieve bigger with courses, workshops, resources, and a community built for practical skill development.',

  )

}



export default async function WowHubPage({ params }: Props) {

  const { locale } = await params

  setRequestLocale(locale as Locale)



  const typedLocale = locale as Locale

  const dictionary = await getDictionary(typedLocale)

  const { imageMap, content } = await loadDivisionLandingBundles('wowHub', typedLocale)
  const exploreTopics = mergeExploreTopics(
    HUB_EXPLORE.topics,
    landingContentCards(content, 'explore'),
  )
  const exploreFromCms = Boolean(landingContentCards(content, 'explore')?.length)



  return (

    <DivisionLandingImageProvider imageMap={imageMap}>

    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">

      <HubHero />

      <HubExploreSection
        section={{ ...HUB_EXPLORE, topics: exploreTopics }}
        useCmsTopics={exploreFromCms}
      />

      <WowDivisionsMarquee />

      <HubChallengeSection />

      <HubProgramsSection />

      <HubLearningPathwaysSection />

      <HubHowItWorksSection />

      <HubLearningOptionsSection />

      <HubCommunitySection />

      <WowEcosystem ecosystem={dictionary.ecosystem} />

      <HubFaqSection />

      <div className="mb-3">

        <WowGrowthCta

          accentText={HUB_CTA.accentText}

          mainText={HUB_CTA.mainText}

          ariaLabel={HUB_CTA.ariaLabel}

        />

      </div>

    </div>

    </DivisionLandingImageProvider>

  )

}
