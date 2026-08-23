import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { getThinkTankCalComUrl } from '@/lib/calcom/config'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BeforeWeMeet from './_components/BeforeWeMeet'
import ThinkTankBooking from './_components/ThinkTankBooking'
import ThinkTankFaq from './_components/ThinkTankFaq'
import ThinkTankHero from './_components/ThinkTankHero'
import ThinkTankSessionInfo from './_components/ThinkTankSessionInfo'
import WhyThinkTank from './_components/WhyThinkTank'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Think Tank | WOW Superagency',
    description:
      'Book a focused working session with our team to explore ideas, solve challenges, and move your project or initiative forward.',
    keywords: ['think tank', 'working session', 'strategy', 'WOW Superagency'],
    openGraph: {
      title: 'Think Tank | WOW Superagency',
      description:
        'Book a focused working session with our team to explore ideas, solve challenges, and move your project or initiative forward.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/thinktank`,
    },
  }
}

export default async function ThinkTankPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const calLink = getThinkTankCalComUrl() ?? undefined

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <ThinkTankHero />
        <WhyThinkTank />
        <ThinkTankSessionInfo />
        <ThinkTankBooking calLink={calLink} />
        <BeforeWeMeet />
        <ThinkTankFaq />
        <WowGrowthCta accentText="Ready to" mainText="Grow?" ariaLabel="Contact WOW Superagency" />
      </div>
    </LayoutOne>
  )
}
