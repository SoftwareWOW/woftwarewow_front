import Benefits from '@/components/careerpage/Benefits'
import CareerHero from '@/components/careerpage/CareerHero'
import CompanyGallery from '@/components/careerpage/CompanyGallery'
import Jobs from '@/components/careerpage/Jobs'
import Community from '@/components/shared/Community'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Faq from '@/components/wow/LandascapComponets/Faq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

export const metadata = {
  title: 'CareerPage',
}

const CareerPage = () => {
  return (
    <LayoutOne>
      <CareerHero />
      <CompanyGallery />
      <Benefits />
      <Jobs />
      <Community />
        <Faq />
    <WowGrowthCta />
    </LayoutOne>
  )
}

export default CareerPage
