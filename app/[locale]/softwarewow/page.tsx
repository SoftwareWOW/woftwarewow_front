
import SoftwareServices from '@/components/wow/softwarewow/SoftwareServices'
import SoftwareWowHero from '@/components/wow/softwarewow/SoftwareWowHero'
import TrustedTechnologies from '@/components/wow/softwarewow/TrustedTechnologies'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

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

  return ( <div>
      <SoftwareWowHero />
          {/* <TrustedTechnologies /> */}
          <SoftwareServices/>
  </div>
  )
  

}
