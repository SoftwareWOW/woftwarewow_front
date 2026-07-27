
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SoftwareServices from '@/components/wow/softwarewow/SoftwareServices'

import SoftwareWowHero from '@/components/wow/softwarewow/SoftwareWowHero'
import SoftwareWoWIndustry from '@/components/wow/softwarewow/SoftwareWoWIndustry'

import WhyChoiceUs from '@/components/wow/softwarewow/WhyChoiceUs'
import WoWProces from '@/components/wow/softwarewow/WoWProces'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SoftwareWoWProjects from '@/components/wow/softwarewow/SoftwareWoWProjects'
import Technologies from '@/components/wow/softwarewow/Technologies'
import SoftwareRfq from '@/components/wow/softwarewow/SoftwareRfq'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'SoftwareWOW! | Custom Software, Apps & Digital Products',
    description:
      'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
    alternates: {
      canonical: `/${locale}/softwarewow`,
    },
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
        <WowGrowthCta />
      </div>
    </div>
  )
}
