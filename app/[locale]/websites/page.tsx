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
    '/websites',
    'WOW Websites | WOW Superagency',
    'High-performing websites engineered for clarity, conversion, and continuous growth.',
  )
}

export default async function WowWebsitesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowWebsites" />
}
