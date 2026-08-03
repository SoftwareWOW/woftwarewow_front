import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SoftwareRfq from '@/components/wow/softwarewow/SoftwareRfq'
import BusinessProblems from '@/components/wow/wowintelligence/BusinessProblems'
import IntelligenceFlowHero from '@/components/wow/wowintelligence/IntelligenceFlowHero'
import IntelligenceClients from '@/components/wow/wowintelligence/IntelligenceClients'
import IntelligenceProcess from '@/components/wow/wowintelligence/IntelligenceProcess'
import OrderProcess from '@/components/wow/wowintelligence/OrderProcess'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'WOW Intelligence | AI Solutions & Automation',
    description:
      'AI assistants, predictive analytics, and workflow automation that sharpen decisions, reduce manual work, and accelerate results.',
    alternates: {
      canonical: `/${locale}/wowintelligence`,
    },
  }
}

export default async function WowIntelligencePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <IntelligenceFlowHero />
        <BusinessProblems />
        <OrderProcess />
        <IntelligenceProcess />
        <IntelligenceClients />
        <SoftwareRfq />
        <div className="mb-3">
          <WowGrowthCta />
        </div>
      </div>
    </LayoutOne>
  )
}
