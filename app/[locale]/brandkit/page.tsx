import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BrandKitHero from './_components/BrandKitHero'
import BrandSystem from './_components/BrandSystem'
import BrandUsageGuidelines from './_components/BrandUsageGuidelines'
import BrandVisualStyle from './_components/BrandVisualStyle'
import BrandKitLogos from './_components/BrandKitLogo'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'brandkit' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Brand Kit',
  title: 'The WOW Brand, Ready to Use.',
  description:
    'Access official logos, colors, typography, and brand resources for approved WOW Superagency communications.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Brand Kit' })
}

export default async function BrandKitPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const brandVisualStyle = sections.brandVisualStyle as CmsProcessSection | undefined

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <BrandKitHero {...hero} />
        <BrandKitLogos {...(sections.brandKitLogos ?? {})} />
        <BrandSystem {...(sections.brandSystem ?? {})} />
        <BrandVisualStyle
          eyebrow={brandVisualStyle?.eyebrow}
          title={brandVisualStyle?.title}
          accentTitle={brandVisualStyle?.accentTitle}
          description={brandVisualStyle?.description}
          image={brandVisualStyle?.image}
          items={brandVisualStyle?.steps?.map((step) => ({
            title: step.title,
            description: step.description,
          }))}
        />
        <BrandUsageGuidelines {...(sections.brandUsageGuidelines ?? {})} />
        <WowGrowthCta
          accentText="Need something"
          mainText="not included here?"
          ariaLabel="Contact WOW Superagency about brand assets"
        />
      </div>
    </LayoutOne>
  )
}
