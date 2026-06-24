import Portfolio from '@/components/homepage-01/Portfolio'
import Testimonial from '@/components/homepage-01/Testimonial'
import CTA from '@/components/shared/CTA'
import ClientsV3 from '@/components/shared/ClientsV3'
import Community from '@/components/shared/Community'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import ServicesV8 from '@/components/shared/ServicesV8'
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
import PersonalProjects from '@/components/homepage-09/PersonalProjects'
import WowProjects from '@/components/wow/LandascapComponets/WowProjects'
import HeroV9 from '@/components/homepage-09/HeroV9'
import HumanTuch from '@/components/wow/LandascapComponets/HumanTuch'
import FaqV2 from '@/components/shared/FaqV2'
import Faq from '@/components/wow/LandascapComponets/Faq'

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
       
      <WowHero hero={dictionary.hero} />
      <WowEcosystem ecosystem={dictionary.ecosystem} />
      <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
      <Stats/>
      <DevisionOverview />
      <SolutionToChallengesSection />
      <WowProjects/>
      <HumanTuch/>
       <Faq/>
      <CTA buttonText={dictionary.home.cta.button}>
        {dictionary.home.cta.heading}
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        {dictionary.home.cta.closing}
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          {dictionary.home.cta.headingItalic}
        </i>
      </CTA>
    </WowLayout>
  )
}

export default Home
