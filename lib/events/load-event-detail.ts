import type { Locale } from '@/i18n/config'
import type { CmsEventCard, CmsPageEventsSection } from '@/lib/strapi/mappers/page-sections'
import { loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { resolveEventSlug } from '@/lib/events/event-slug'
import {
  getStaticEventBySlug,
  getStaticEventSlugs,
  type EventDetail,
} from '@/lib/events/static-events'

function cmsEventToDetail(event: CmsEventCard, slug: string): EventDetail {
  return {
    slug,
    date: event.date,
    title: event.title,
    location: event.location,
    href: event.href,
    description: event.description,
    thumbnail: event.thumbnail,
    alt: event.alt,
    format: event.format,
    time: event.time,
    duration: event.duration,
    startsAt: event.startsAt,
    agendaEyebrow: event.agendaEyebrow,
    agendaTitle: event.agendaTitle,
    agenda: event.agenda,
    registerLabel: event.registerLabel,
    registerHref: event.registerHref ?? '/contact',
  }
}

async function loadCmsEventCards(locale: Locale): Promise<CmsEventCard[]> {
  const cms = await loadSuperagencyPage('learning-and-events', locale)
  const sections = resolvePageSections(cms, 'learning-and-events')
  const upcoming = sections.upcomingEvents as CmsPageEventsSection | undefined
  return upcoming?.events ?? []
}

export async function loadLearningEventBySlug(
  slug: string,
  locale: Locale = 'en-US',
): Promise<EventDetail | null> {
  const events = await loadCmsEventCards(locale)
  for (const event of events) {
    if (resolveEventSlug(event) === slug) {
      return cmsEventToDetail(event, slug)
    }
  }

  return getStaticEventBySlug(slug)
}

export async function loadLearningEventSlugs(locale: Locale = 'en-US'): Promise<string[]> {
  const slugs = new Set<string>(getStaticEventSlugs())
  const events = await loadCmsEventCards(locale)
  for (const event of events) {
    slugs.add(resolveEventSlug(event))
  }
  return [...slugs]
}
