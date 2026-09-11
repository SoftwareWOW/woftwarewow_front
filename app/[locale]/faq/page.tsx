import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import {
  buildFooterResourceMetadata,
  loadFooterResourcePage,
} from '@/lib/strapi/load-footer-resource-page'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 60

const PAGE_KEY = 'faq' as const

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildFooterResourceMetadata(PAGE_KEY, locale as Locale, { title: 'Faq' })
}

const FAQPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  await loadFooterResourcePage(PAGE_KEY, locale as Locale)

  return (
    <LayoutOne>
      <FAQ bigTitleWithBadge={true} />
      <WowGrowthCta
        accentText="Ready to"
        mainText="Grow?"
        ariaLabel="Contact WOW Superagency"
      />
    </LayoutOne>
  )
}

export default FAQPage
