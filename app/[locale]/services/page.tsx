import ClientsV2 from '@/components/homepage-05/ClientsV2'
import ServicesV14 from '@/components/homepage-16/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
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
      <ServiceHero
        badgeTitle="Services"
        title="Services "
        italicTitle=""
        scale
        description="Explore our innovative cutting-edge no-code websites designed to captivate and engage your visitors effortlessly"
        spacing="max-md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
     <MainServices/>
      <ServiceProces />
      <Client/>
      <WowGrowthCta />
    </LayoutOne>
  )
}

export default ServicesPage
