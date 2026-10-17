
import dynamic from 'next/dynamic'
import SoftwareServices from '@/components/wow/softwarewow/SoftwareServices'

import SoftwareWowHero from '@/components/wow/softwarewow/SoftwareWowHero'

import type { Locale } from '@/i18n/config'
import { localizedAlternates } from '@/lib/seo/localized-alternates'
import { setRequestLocale } from 'next-intl/server'


const WhyChoiceUs = dynamic(() => import('@/components/wow/softwarewow/WhyChoiceUs'))
const SoftwareWoWProjects = dynamic(() => import('@/components/wow/softwarewow/SoftwareWoWProjects'))
const WoWProces = dynamic(() => import('@/components/wow/softwarewow/WoWProces'))
const SoftwareWoWIndustry = dynamic(() => import('@/components/wow/softwarewow/SoftwareWoWIndustry'))
const Technologies = dynamic(() => import('@/components/wow/softwarewow/Technologies'))
const SoftwareRfq = dynamic(() => import('@/components/wow/softwarewow/SoftwareRfq'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

export const revalidate = 60
type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params

  return {
    title: 'SoftwareWOW! | Custom Software, Apps & Digital Products',
    description:
      'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
    alternates: localizedAlternates(locale, '/software'),
  }
}

export default async function SoftwareWowPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <SoftwareWowHero />
      {/* <TrustedTechnologies /> */}
      <SoftwareServices />
      <WhyChoiceUs />
      <SoftwareWoWProjects />
      <WoWProces />
      <SoftwareWoWIndustry />
      <Technologies/>
      <SoftwareRfq/>
      <div className="mb-3">
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact SoftwareWOW"
        />
      </div>
    </div>
  )
}
