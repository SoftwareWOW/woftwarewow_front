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
    '/events',
    'WOW Events | WOW Superagency',
    'Experiences and events that bring brands, communities, and ideas together.',
  )
}

export default async function WowEventsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowEvents" />
}
