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
    '/host',
    'WOW Host | WOW Superagency',
    'Reliable hosting, infrastructure, and support for modern digital products and platforms.',
  )
}

export default async function WowHostPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowHost" />
}
