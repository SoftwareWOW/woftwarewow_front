import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/wow/shared/Marquee'
import PageHero from './_components/PageHero'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import SkewMarquee from '@/components/shared/SkewMarquee'
import TechStack from './_components/TechStack'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SolutionToChallenges from '@/components/wow/LandascapComponets/SolutionToChallench'
import Team from '@/components/aboutpage/Team'
import type { Locale } from '@/i18n/config'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'
import type {
  StrapiHeroAbout,
  StrapiPageTeamMembers,
  StrapiPageTechnologies,
} from '@/lib/strapi/types/pages'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

const PAGE_SLUG = 'about' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'About',
  title: 'WOW',
  italicTitle: 'Superagency',
  description:
    'Get to know the team, vision, and ecosystem helping businesses grow through technology, design, marketing, and AI.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'About' })
}

const AboutPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)

  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const heroAbout = cms.field<StrapiHeroAbout>('heroAbout')
  const techStackItems = cms.technologies(
    cms.field<StrapiPageTechnologies>('techStack'),
  )
  const solutionCategories =
    cms.technologies(cms.field<StrapiPageTechnologies>('solutionToChallenges')) ??
    techStackItems

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <PageHero {...hero} />
        <HeroAbout
          body={heroAbout?.body ?? cms.heroAbout('heroAbout')?.body ?? undefined}
        />
        <SkewMarquee className="!pb-0 !pt-0 lg:!pb-0" />
        <TechStack {...(sections.techStack ?? {})} />
        <Team members={cms.teamMembers(cms.field<StrapiPageTeamMembers>('team')) ?? undefined} />
        <Marquee />
        <SolutionToChallenges
          {...(sections.solutionToChallenges ?? {})}
          categories={
            solutionCategories?.length ?
              solutionCategories.map((item, index) => ({
                id: index + 1,
                title: item.title,
                subtitle: item.description ?? '',
                items: [],
              }))
            : undefined
          }
        />
        <div className="mb-3">
          <WowGrowthCta
            accentText="Ready to"
            mainText="Grow?"
            ariaLabel="Contact WOW Superagency"
          />
        </div>
      </div>
    </LayoutOne>
  )
}

export default AboutPage
