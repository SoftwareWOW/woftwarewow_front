import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientPortalHero from './_components/ClientPortalHero'
import ClientPortalSupport from './_components/ClientPortalSupport'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Client Portal | WOW Superagency',
    description:
      'Access your projects, files, updates, billing, and communication with the WOW team.',
    keywords: ['client portal', 'WOW Superagency', 'project dashboard'],
    openGraph: {
      title: 'Client Portal | WOW Superagency',
      description:
        'Access your projects, files, updates, billing, and communication with the WOW team.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/clientportal`,
    },
  }
}

export default async function ClientPortalPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <ClientPortalHero />
        <ClientPortalSupport />
        <WowGrowthCta
          accentText="Need help?"
          mainText="Get support"
          ariaLabel="Contact WOW Superagency for client portal support"
        />
      </div>
    </LayoutOne>
  )
}
