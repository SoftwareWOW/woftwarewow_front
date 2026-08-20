import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LocationsHero from './_components/LocationsHero'
import LocationsHeroAbout from './_components/LocationsHeroAbout'
import LocationsPresence from './_components/LocationsPresence'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Locations | WOW Superagency',
    description:
      'Find WOW around the world — a connected Superagency working across markets, industries, and time zones.',
    keywords: [
      'WOW locations',
      'WOW offices',
      'Mississauga',
      'global presence',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Locations | WOW Superagency',
      description:
        'Find WOW around the world — a connected Superagency working across markets, industries, and time zones.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/locations`,
    },
  }
}

export default async function LocationsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <div>
          <LocationsHero />
          <LocationsHeroAbout />
        </div>
        <LocationsPresence />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Connect?"
          ariaLabel="Contact WOW Superagency — connect with our team"
        />
      </div>
    </LayoutOne>
  )
}
