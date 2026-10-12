import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsOfServiceBody from '@/components/shared/TermsOfServiceBody'
import type { Locale } from '@/i18n/config'
import { buildLegalPageMetadata, loadLegalPage } from '@/lib/strapi/load-legal-page'
import getMarkDownData from '@/utils/GetMarkDownData'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 60

export interface TermsDataType {
  slug: string
  content: string
  lastUpdated?: string
  [key: string]: unknown
}

const fallbackTermsPages: TermsDataType[] = getMarkDownData('data/terms')

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildLegalPageMetadata('terms', locale as Locale, {
    title: 'Terms of Service | WOW Superagency',
    description: 'Clear expectations for using WOW Superagency websites and working with our team.',
  })
}

const legalFooterLinks = [
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Cookie Settings', href: '/policy' },
] as const

const TermsPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  await loadLegalPage('terms', locale as Locale)

  const markdownPage = fallbackTermsPages[0]
  const content = markdownPage?.content ?? ''
  const lastUpdated =
    typeof markdownPage?.lastUpdated === 'string' ? markdownPage.lastUpdated : 'October 12, 2026'

  return (
    <LayoutOne>
      <PageHero
        title="Terms of "
        italicTitle="Service."
        badgeTitle="Legal / Terms"
        description="Clear expectations. Better partnerships."
        scale
      />
      <TermsOfServiceBody
        content={content}
        lastUpdated={lastUpdated}
        footerLinks={[...legalFooterLinks]}
      />
    </LayoutOne>
  )
}

export default TermsPage
