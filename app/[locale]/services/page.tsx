import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import ServiceHero from './_components/ServiceHeroPage'
import MainServices from './_components/MainServices'
import ServiceProces from './_components/ServiceProces'
import Client from './_components/Client'

export const metadata = {
  title: 'Services ',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <ServiceHero
          badgeTitle="Services"
          title="Services "
          italicTitle=""
          scale
          description="Explore our innovative cutting-edge no-code websites designed to captivate and engage your visitors effortlessly"
        />
        <MainServices />
        <ServiceProces />
        <Client />
        <WowGrowthCta />
      </div>
    </LayoutOne>
  )
}

export default ServicesPage
