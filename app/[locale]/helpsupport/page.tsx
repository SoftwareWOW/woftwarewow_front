import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HelpHero from './_components/HelpHero'
import SupportCategories from './_components/SupportCategories'
import SupportContact from './_components/SupportContact'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'helpsupport' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'HELP & SUPPORT',
  title: 'How Can We Help?',
  description: 'Build knowledge on your own time or join us for practical, interactive experiences.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Help & Support' })
}

export default async function HelpSupportPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <HelpHero {...hero} />
        <SupportCategories {...(sections.supportCategories ?? {})} />
        <SupportContact {...(sections.supportContact ?? {})} />
      </div>
    </LayoutOne>
  )
}
