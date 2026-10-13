import DivisionPlaceholderPage from '@/components/wow/divisions/DivisionPlaceholderPage'
import type { Locale } from '@/i18n/config'
import { localizedAlternates } from '@/lib/seo/localized-alternates'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'WOW Hub | WOW Superagency',
    description: 'The connected workspace for clients, partners, and teams across the WOW ecosystem.',
    alternates: localizedAlternates(locale, '/hub'),
  }
}

export default async function WowHubPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowHub" />
}
