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
    '/design',
    'WOW Design | WOW Superagency',
    'Product, brand, and experience design that makes digital feel premium and human.',
  )
}

export default async function WowDesignPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <DivisionPlaceholderPage divisionId="wowDesign" />
}
