import dynamic from 'next/dynamic'
import LayoutOne from '@/components/shared/LayoutOne'
import BusinessProblems from '@/components/wow/wowintelligence/BusinessProblems'
import IntelligenceFlowHero from '@/components/wow/wowintelligence/IntelligenceFlowHero'
import type { Locale } from '@/i18n/config'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'

const OrderProcess = dynamic(() => import('@/components/wow/wowintelligence/OrderProcess'))
const IntelligenceProcess = dynamic(() => import('@/components/wow/wowintelligence/IntelligenceProcess'))
const IntelligenceClients = dynamic(() => import('@/components/wow/wowintelligence/IntelligenceClients'))
const IntelligenceRfq = dynamic(() => import('@/components/wow/wowintelligence/IntelligenceRfq'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/intelligence',
    'WOW Intelligence | AI Solutions & Automation',
    'AI assistants, predictive analytics, and workflow automation that sharpen decisions, reduce manual work, and accelerate results.',
  )
}

export default async function WowIntelligencePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <IntelligenceFlowHero />
        <BusinessProblems />
        <OrderProcess />
        <IntelligenceProcess />
        <IntelligenceClients />
        <IntelligenceRfq />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>    </LayoutOne>
  )
}
