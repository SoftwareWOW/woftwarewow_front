import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import { loadLearningEventBySlug, loadLearningEventSlugs } from '@/lib/events/load-event-detail'
import { resolveTeamSection } from '@/lib/strapi/fetchers/team-members'
import { loadSuperagencyPage } from '@/lib/strapi/superagency-page-loader'
import type { StrapiPageTeamMembers } from '@/lib/strapi/types/pages'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import EventAgenda from './_components/EventAgenda'
import EventDetailsHero from './_components/EventDetailsHero'
import EventSpeaker from './_components/EventSpeaker'

export const revalidate = 60
export const dynamicParams = true

type PageProps = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await loadLearningEventSlugs('en-US')
    return slugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const event = await loadLearningEventBySlug(slug, locale as Locale)
  if (!event) return { title: 'Event' }

  return {
    title: `${event.title} | Events`,
    description: event.description,
  }
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const event = await loadLearningEventBySlug(slug, typedLocale)
  if (!event) notFound()

  const teamCms = await loadSuperagencyPage('team', typedLocale)
  const teamSection = await resolveTeamSection(
    teamCms.field<StrapiPageTeamMembers>('teamMembers'),
    typedLocale,
  )

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <EventDetailsHero event={event} />
        <EventAgenda eyebrow={event.agendaEyebrow} title={event.agendaTitle} items={event.agenda} />
        <EventSpeaker featuredMember={teamSection?.featuredMember} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="learn & connect?"
          ariaLabel="Talk about Learning & Events at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
