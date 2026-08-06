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
          title="Everything Your Business Needs to"
          italicTitle=" Grow"
          scale
          description="From strategy and branding to software, AI, websites, marketing, and growth—we deliver connected solutions through one coordinated ecosystem."
        />
        <MainServices />
        <ServiceProces />
        <Client />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default ServicesPage
