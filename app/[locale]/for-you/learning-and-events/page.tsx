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

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Learning & Events | WOW Superagency',
    description:
      'Practical learning, expert insights and live experiences designed to help business owners and teams build skills, discover new ideas and move forward.',
    keywords: [
      'learning and events',
      'workshops',
      'webinars',
      'WOW Hub',
      'WOW Events',
      'business training',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Learning & Events | WOW Superagency',
      description:
        'Learn at your own pace with WOW Hub or join workshops, webinars and experiences from WOW Events.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/learning-and-events`,
    },
  }
}

export default async function LearningAndEventsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-05 HeroV5 */}
        <LearningEventsHero />
        {/* 2. Learn your way — HostingThatFits */}
        <LearnYourWay />
        {/* 3. Learning topics — EverythingToGrow grid */}
        <LearningTopics />
        {/* 4. Upcoming events — GrowthStrategies list */}
        <UpcomingEvents />
        {/* 5. Event updates mid CTA */}
        <EventUpdatesCta />
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
