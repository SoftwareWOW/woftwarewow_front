import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientPortalHero from './_components/ClientPortalHero'
import ClientPortalSupport from './_components/ClientPortalSupport'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'clientportal' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'CLIENT PORTAL',
  title: 'Everything in',
  italicTitle: 'Place.',
  description: 'Access your projects, files, updates, billing, and communication with the WOW team.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Client Portal' })
}

export default async function ClientPortalPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <ClientPortalHero {...hero} />
        <ClientPortalSupport {...(sections.clientPortalSupport ?? {})} />
        <WowGrowthCta
          accentText="Need help?"
          mainText="Get support"
          ariaLabel="Contact WOW Superagency for client portal support"
        />
      </div>
    </LayoutOne>
  )
}
