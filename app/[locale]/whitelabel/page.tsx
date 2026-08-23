import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HowWePartner from './_components/HowWePartner'
import PartnerBenefits from './_components/PartnerBenefits'
import WhiteLabelCapabilities from './_components/WhiteLabelCapabilities'
import WhiteLabelHero from './_components/WhiteLabelHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'White-label | WOW Superagency',
    description:
      'Expand what you can offer with a trusted team behind the scenes—across technology, design, marketing, AI, and more.',
    keywords: ['white-label', 'white label partner', 'WOW Superagency', 'partner delivery'],
    openGraph: {
      title: 'White-label | WOW Superagency',
      description:
        'Expand what you can offer with a trusted team behind the scenes—across technology, design, marketing, AI, and more.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/whitelabel`,
    },
  }
}

export default async function WhiteLabelPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <WhiteLabelHero />
        <WhiteLabelCapabilities />
        <HowWePartner />
        <PartnerBenefits />
        <WowGrowthCta
          accentText="Ready to Deliver"
          mainText="More Together?"
          ariaLabel="Become a WOW white-label partner"
        />
      </div>
    </LayoutOne>
  )
}
