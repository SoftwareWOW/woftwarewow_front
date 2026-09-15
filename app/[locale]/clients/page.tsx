import LayoutOne from '@/components/shared/LayoutOne'

const PAGE_SLUG = 'clients' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'OUR CLIENTS',
  title: 'Great work starts with great partnerships.',
  description: 'We work with ambitious businesses to solve meaningful challenges and create stronger foundations for growth.',
}

import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientStories from './_components/ClientStories'
import ClientsCta from './_components/ClientsCta'
import ClientsHero from './_components/ClientsHero'
import ClientsMarquee from './_components/ClientsMarquee'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Clients' })
}

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — industries/technology-and-saas/TechnologyHero */}
        <ClientsHero {...hero} images={hero.images} />
        {/* 2. Our Clients — wow/shared/Marquee (home page) */}
        <ClientsMarquee {...(sections.clientsMarquee ?? {})} />
        {/* 3. Client Stories — portfolio/FeaturedWork alternating layout */}
        <ClientStories {...(sections.clientStories ?? {})} />
        {/* 4. Global CTA — WowGrowthCta defaults */}
        <ClientsCta {...(sections.clientsCta ?? {})} />
      </div>
    </LayoutOne>
  )
}
