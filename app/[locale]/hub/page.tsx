import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem } from '@/lib/strapi/mappers/superagency'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import HubChallengeSection from './_components/HubChallengeSection'
import HubCommunitySection from './_components/HubCommunitySection'
import HubExploreSection from './_components/HubExploreSection'
import HubFaqSection from './_components/HubFaqSection'
import HubHero from './_components/HubHero'
import HubProgramsSection from './_components/HubProgramsSection'
import { HUB_CTA } from './_components/hub-content'

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
  const cms = await getSuperagencyHomepage(typedLocale)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)

  return (
    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <HubHero />
      <HubExploreSection />
      <HubChallengeSection />
      <HubProgramsSection />
      <HubCommunitySection />
      <WowEcosystem ecosystem={ecosystem} />
      <HubFaqSection />
      <div className="-mb-5 sm:-mb-10 md:-mb-15 lg:-mb-20">
        <WowGrowthCta accentText={HUB_CTA.accentText} mainText={HUB_CTA.mainText} ariaLabel={HUB_CTA.ariaLabel} />
      </div>
    </div>
  )
}
