import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import { mapFooterResourceHeroForCaseStudy } from '@/lib/strapi/mappers/footer-resource-page'
import {
  buildFooterResourceMetadata,
  loadFooterResourcePage,
} from '@/lib/strapi/load-footer-resource-page'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { loadCaseStudyList } from '@/lib/strapi/load-case-study-list'
import CaseStudyHero from './_components/CaseStudyHero'
import Projects from './_components/Projects'

export const revalidate = 60

const PAGE_KEY = 'case-study' as const

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildFooterResourceMetadata(PAGE_KEY, locale as Locale, { title: 'Case Study' })
}

const CaseStudyPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const typedLocale = locale as Locale
  const cms = await loadFooterResourcePage(PAGE_KEY, typedLocale)
  const hero = mapFooterResourceHeroForCaseStudy(cms.raw) ?? {}
  const projects = await loadCaseStudyList(typedLocale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <CaseStudyHero {...hero} />
        <Projects projects={projects.length ? projects : undefined} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default CaseStudyPage
