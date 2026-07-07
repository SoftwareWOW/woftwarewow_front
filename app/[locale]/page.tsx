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
import Marquee from '@/components/wow/shared/Marquee'



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
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* <WowHero hero={dictionary.hero} />
     <div className="flex flex-col gap-0 lg:contents">
         <WowEcosystem ecosystem={dictionary.ecosystem} />
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
     </div>
        <Stats />
        <DevisionOverview />
        <SolutionToChallengesSection /> */}
        <WowProjects />
           <Marquee />
        <HumanTuch />
        <Faq />
        <GrowthStrategies />
        <div className="mb-3">
          <WowGrowthCta />
        </div>
      </div>
    </WowLayout>
  )
}

export default Home
