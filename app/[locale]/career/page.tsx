import CompanyGallery from '@/components/careerpage/CompanyGallery'
import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Metadata } from 'next'
import BenefitsCareer from './_components/BenefitsCareer'
import CareerHeroPage from './_components/CareerHero'
import CareerRfq from './_components/CareerRfq'
import Communities from './_components/Comunities'
import Jobs from './_components/Jobs'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join WOW Superagency. Explore open roles, benefits, and a collaborative culture where designers, developers, and marketers build digital products that grow businesses.',
  keywords: [
    'WOW Superagency careers',
    'agency jobs',
    'design jobs',
    'developer jobs',
    'marketing careers',
    'join our team',
    'creative agency careers',
  ],
  openGraph: {
    title: 'Careers | WOW Superagency',
    description:
      'Explore open positions and grow your career at WOW Superagency — a collaborative team of designers, developers, and marketers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | WOW Superagency',
    description:
      'Explore open roles, benefits, and culture at WOW Superagency. Start building your future with us.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const CareerPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <CareerHeroPage />
        <CompanyGallery />
        <BenefitsCareer />
        <Jobs />
        <Communities />
        <CareerRfq />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default CareerPage
