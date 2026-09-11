import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import type { Locale } from '@/i18n/config'
import { buildLegalPageMetadata, loadLegalPage } from '@/lib/strapi/load-legal-page'
import getMarkDownData from '@/utils/GetMarkDownData'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 60

export interface TermsDataType {
  slug: string
  content: string
  [key: string]: unknown
}

const fallbackTermsData: TermsDataType[] = getMarkDownData('data/terms')

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildLegalPageMetadata('privacy', locale as Locale, { title: 'Privacy & Policy' })
}

const PolicyPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const legal = await loadLegalPage('privacy', locale as Locale)

  const termsData: TermsDataType[] =
    legal?.body ?
      [{ slug: 'privacy', content: legal.body }]
    : fallbackTermsData

  return (
    <LayoutOne>
      <PageHero
        title={legal?.title?.replace(/\s+\S+$/, '') ?? 'Privacy & '}
        italicTitle={legal?.title?.split(/\s+/).pop() ?? 'Policy'}
        badgeTitle="Policy"
        scale
      />
      <TermsPolicyBody termsData={termsData} heading={true} />
      <CTA>
        Let&apos;s chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
            { id: '2', img: '/images/agent/04.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default PolicyPage
