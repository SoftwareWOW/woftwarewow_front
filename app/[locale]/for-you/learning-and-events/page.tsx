
const PAGE_SLUG = 'learning-and-events' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Learning & Events',
  title: 'Learn. Connect. Grow.',
  description:
    'Practical learning, expert insights and live experiences designed to help business owners and teams build skills, discover new ideas and move forward.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import EventUpdatesCta from './_components/EventUpdatesCta'
import LearningEventsHero from './_components/LearningEventsHero'
import LearningTopics from './_components/LearningTopics'
import LearnYourWay from './_components/LearnYourWay'
import UpcomingEvents from './_components/UpcomingEvents'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Learning & Events' })
}

export default async function LearningAndEventsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-05 HeroV5 */}
        <LearningEventsHero {...hero} images={hero.images} />
        {/* 2. Learn your way — HostingThatFits */}
        <LearnYourWay {...(sections.learnYourWay ?? {})} />
        {/* 3. Learning topics — EverythingToGrow grid */}
        <LearningTopics {...(sections.learningTopics ?? {})} />
        {/* 4. Upcoming events — GrowthStrategies list */}
        <UpcomingEvents {...(sections.upcomingEvents ?? {})} />
        {/* 5. Event updates mid CTA */}
        <EventUpdatesCta {...(sections.eventUpdatesCta ?? {})} />
        {/* 6. General CTA */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="learn & connect?"
          ariaLabel="Talk about Learning & Events at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
