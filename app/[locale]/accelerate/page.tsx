import DivisionPlaceholderPage from '@/components/wow/divisions/DivisionPlaceholderPage'
import type { Locale } from '@/i18n/config'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/accelerate',
    'WOW Accelerate | WOW Superagency',
    'Launch and growth systems that help startups and teams move from idea to market faster.',
  )
}

export default async function WowAcceleratePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowAccelerate" />
}
