
import LayoutOne from '@/components/shared/LayoutOne'
import IndustriesHero from './_components/IndustriesHero'
import OurIndustries from './_components/OurIndustries'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import IndustriesProcess from './_components/IndustiesProces'
import ChallengeSolution from './_components/ChallengeSolution'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

export const metadata = {
  title: 'Industries',
}


const IndustriesPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
     <IndustriesHero/>
     <OurIndustries/>
    <Marquess />
    <IndustriesProcess/>
    <ChallengeSolution/>
    <WowGrowthCta />
      </div>
    </LayoutOne>
  )
}

export default IndustriesPage
