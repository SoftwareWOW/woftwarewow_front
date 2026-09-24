import LayoutOne from '@/components/shared/LayoutOne'

const PAGE_SLUG = 'portfolio-recent' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'RECENT WORK',
  title: 'See what we\'ve been working on.',
  description: 'Explore our latest work across technology, marketing, design, and growth.',
}

import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import RecentWorkCta from './_components/RecentWorkCta'
import RecentWorkExplorer from './_components/RecentWorkExplorer'
import RecentWorkHero from './_components/RecentWorkHero'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Recent Work' })
}

export default async function RecentWorkPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — case-study/CaseStudyHero (compact variant) */}
        <RecentWorkHero {...hero} images={hero.images} />
        {/* 2. Latest Projects + 3. Explore by Expertise — portfolio/ExploreWork + case-study/Projects */}
        <RecentWorkExplorer />
        {/* 4. Start Your Project — shared WowGrowthCta */}
        <RecentWorkCta {...(sections.recentWorkCta ?? {})} />
      </div>
    </LayoutOne>
  )
}
