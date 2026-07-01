import WowLayout from '@/components/wow/WowLayout'
import WowHero from '@/components/wow/sections/WowHero'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import Stats from '@/components/wow/LandascapComponets/Stats'
import DevisionOverview from '@/components/wow/LandascapComponets/DevisionOverview'
import SolutionToChallengesSection from '@/components/wow/LandascapComponets/SolutionToChallenchSection'
import WowProjects from '@/components/wow/LandascapComponets/WowProjects'
import HumanTuch from '@/components/wow/LandascapComponets/HumanTuch'
import Faq from '@/components/wow/LandascapComponets/Faq'
import GrowthStrategies from '@/components/wow/LandascapComponets/GrowthStrategies'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale as Locale)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  }
}

const Home = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const dictionary = await getDictionary(locale as Locale)

  return (
    <WowLayout>
      <div className="flex flex-col gap-[72px] pb-[72px] sm:gap-[96px] sm:pb-[96px] md:gap-[128px] md:pb-[128px] lg:gap-[160px] lg:pb-[160px] xl:gap-[200px] xl:pb-[200px]">
        <WowHero hero={dictionary.hero} />
        <WowEcosystem ecosystem={dictionary.ecosystem} />
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
        <Stats />
        <DevisionOverview />
        <SolutionToChallengesSection />
        <WowProjects />
        <HumanTuch />
        <Faq />
        <GrowthStrategies />
        <WowGrowthCta />
      </div>
    </WowLayout>
  )
}

export default Home
