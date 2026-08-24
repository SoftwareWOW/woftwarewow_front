import DivisionPlaceholderPage from '@/components/wow/divisions/DivisionPlaceholderPage'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'WOW Accelerate | WOW Superagency',
    description: 'Launch and growth systems that help startups and teams move from idea to market faster.',
    alternates: { canonical: `/${locale}/wowaccelerate` },
  }
}

export default async function WowAcceleratePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowAccelerate" />
}
