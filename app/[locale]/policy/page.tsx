import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import PrivacyPolicyBody from '@/components/shared/PrivacyPolicyBody'
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

const fallbackPrivacyPages: TermsDataType[] = getMarkDownData('data/policy')

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildLegalPageMetadata('privacy', locale as Locale, {
    title: 'Privacy Policy | WOW Superagency',
    description:
      'Clear information about how WOW Superagency collects, uses, and protects your personal information.',
  })
}

const PolicyPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  await loadLegalPage('privacy', locale as Locale)

  const markdownPage = fallbackPrivacyPages[0]
  const content = markdownPage?.content ?? ''
  const lastUpdated =
    typeof markdownPage?.lastUpdated === 'string' ? markdownPage.lastUpdated : 'October 12, 2026'

  return (
    <LayoutOne>
      <PageHero
        title="Privacy "
        italicTitle="Policy."
        badgeTitle="Legal / Privacy"
        description="Clear information about how we collect, use, and protect your data."
        scale
      />
      <PrivacyPolicyBody
        content={content}
        lastUpdated={lastUpdated}
        footerLinks={[
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Cookie Settings', href: '/policy' },
        ]}
      />
    </LayoutOne>
  )
}

export default PolicyPage
