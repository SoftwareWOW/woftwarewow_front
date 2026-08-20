import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HowItWorks from './_components/HowItWorks'
import QuotationForm from './_components/QuotationForm'
import QuotationHero from './_components/QuotationHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Request a Quote | WOW Superagency',
    description:
      "Tell us what you're building. Share a few details about your project and we'll help define the right scope, team, and next steps.",
    keywords: [
      'quotation request',
      'project quote',
      'WOW Superagency',
      'request a quote',
    ],
    openGraph: {
      title: 'Request a Quote | WOW Superagency',
      description:
        "Tell us what you're building. Share a few details about your project and we'll help define the right scope, team, and next steps.",
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/quotation`,
    },
  }
}

export default async function QuotationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <QuotationHero />
        <QuotationForm />
        <HowItWorks />
        <WowGrowthCta
          accentText="Having an idea?"
          mainText="Let's get it launched"
          ariaLabel="Contact WOW Superagency — let's get your idea launched"
        />
      </div>
    </LayoutOne>
  )
}
