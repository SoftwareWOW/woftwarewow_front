import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HelpHero from './_components/HelpHero'
import SupportCategories from './_components/SupportCategories'
import SupportContact from './_components/SupportContact'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Help & Support | WOW Superagency',
    description:
      'Find answers for projects, billing, hosting, and your client portal—or contact the WOW team for support.',
    keywords: ['help', 'support', 'knowledge base', 'client portal', 'WOW Superagency'],
    openGraph: {
      title: 'Help & Support | WOW Superagency',
      description:
        'Find answers for projects, billing, hosting, and your client portal—or contact the WOW team for support.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/helpsupport`,
    },
  }
}

export default async function HelpSupportPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <HelpHero />
        <SupportCategories />
        <SupportContact />
      </div>
    </LayoutOne>
  )
}
