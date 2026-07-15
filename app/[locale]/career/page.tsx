import Benefits from '@/components/careerpage/Benefits'
import CompanyGallery from '@/components/careerpage/CompanyGallery'
import Community from '@/components/shared/Community'
import LayoutOne from '@/components/shared/LayoutOne'
import Faq from '@/components/wow/LandascapComponets/Faq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import CareerHeroPage from './_components/CareerHero'
import BenefitsCareer from './_components/BenefitsCareer'
import Jobs from './_components/Jobs'
import Communities from './_components/Comunities'
import CareerRfq from './_components/CareerRfq'

export const metadata = {
  title: 'CareerPage',
}

const CareerPage = () => {
  return (
    <LayoutOne>
      <CareerHeroPage />
      <CompanyGallery />
      <BenefitsCareer/>
      <Jobs />
      <Communities />
        <CareerRfq />
    <WowGrowthCta />
    </LayoutOne>
  )
}

export default CareerPage
