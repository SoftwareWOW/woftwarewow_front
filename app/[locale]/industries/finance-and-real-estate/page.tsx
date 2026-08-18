import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import ExclusiveTravelDeals from './_components/ExclusiveTravelDeals'
import ExperiencePillars from './_components/ExperiencePillars'
import FinanceHero from './_components/FinanceHero'
import FinanceHeroAbout from './_components/FinanceHeroAbout'
import GuestSolutions from './_components/GuestSolutions'
import LeadToCustomer from './_components/LeadToCustomer'
import SocialGallery from './_components/SocialGallery'
import TravelBlogs from './_components/TravelBlogs'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Finance & Real Estate | WOW Superagency',
    description: 'Digital growth for finance and real estate businesses.',
    keywords: [
      'finance',
      'real estate',
      'lead generation',
      'brand authority',
      'website growth',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Finance & Real Estate | WOW Superagency',
      description: 'Digital growth for finance and real estate businesses.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/finance-and-real-estate`,
    },
  }
}

export default async function FinanceAndRealEstatePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
       <div>
         <FinanceHero />
        <FinanceHeroAbout />
       </div>
        <ExperiencePillars />
        <SocialGallery />
        <GuestSolutions />
        <ClientJourney />
        <LeadToCustomer />
        <ExclusiveTravelDeals />
        <TravelBlogs />
        <WowGrowthCta
          accentText="Ready to Create"
          mainText="More Opportunity?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
