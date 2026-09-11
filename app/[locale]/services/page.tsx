import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import { mergeCmsHero } from '@/lib/strapi/mappers/page-sections'
import {
  buildFooterResourceMetadata,
  loadFooterResourcePage,
} from '@/lib/strapi/load-footer-resource-page'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ServiceHero from './_components/ServiceHeroPage'
import MainServices from './_components/MainServices'
import ServiceProces from './_components/ServiceProces'
import Client from './_components/Client'

export const revalidate = 60

const PAGE_KEY = 'services' as const

const DEFAULT_HERO = {
  badgeTitle: 'Services',
  title: 'Everything Your Business Needs to',
  italicTitle: ' Grow',
  description:
    'From strategy and branding to software, AI, websites, marketing, and growth—we deliver connected solutions through one coordinated ecosystem.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildFooterResourceMetadata(PAGE_KEY, locale as Locale, { title: 'Services' })
}

const ServicesPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadFooterResourcePage(PAGE_KEY, locale as Locale)
  const hero = mergeCmsHero(DEFAULT_HERO, cms.hero)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <ServiceHero {...hero} scale />
        <MainServices />
        <ServiceProces />
        <Client />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default ServicesPage
