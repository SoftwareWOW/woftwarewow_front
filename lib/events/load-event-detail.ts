import type { Locale } from '@/i18n/config'
import { getStaticEventBySlug, getStaticEventSlugs, type EventDetail } from '@/lib/events/static-events'

/** Static events for now — swap implementation for Strapi when ready. */
export async function loadLearningEventBySlug(
  slug: string,
  _locale?: Locale,
): Promise<EventDetail | null> {
  return getStaticEventBySlug(slug)
}

export async function loadLearningEventSlugs(_locale?: Locale): Promise<string[]> {
  return getStaticEventSlugs()
}
