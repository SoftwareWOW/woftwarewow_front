export type EventAgendaItem = {
  time: string
  title: string
  description?: string
}

export type EventDetail = {
  slug: string
  date?: string
  title: string
  location?: string
  href?: string
  description?: string
  thumbnail?: string
  alt?: string
  format?: string
  time?: string
  duration?: string
  /** ISO datetime for countdown */
  startsAt?: string
  agendaEyebrow?: string
  agendaTitle?: string
  agenda?: EventAgendaItem[]
  registerLabel?: string
  registerHref?: string
}

/** Shared details page for all upcoming list items until per-event CMS/static entries exist. */
export const DEFAULT_STATIC_EVENT_SLUG = 'ai-for-small-business-from-hype-to-practical-use'

export function staticEventDetailsPath(slug: string = DEFAULT_STATIC_EVENT_SLUG): string {
  return `/event/${slug}`
}

/**
 * Static event details (replace with Strapi when ready).
 */
export const STATIC_EVENT_DETAILS: Record<string, EventDetail> = {
  [DEFAULT_STATIC_EVENT_SLUG]: {
    slug: DEFAULT_STATIC_EVENT_SLUG,
    date: '24 OCT 2026',
    title: 'AI for Small Business: From Hype to Practical Use',
    location: 'Online',
    description:
      'A practical session for business owners and teams looking to understand where AI can actually save time, improve operations and create value.',
    thumbnail: '/images/wow/nav/cards/Intelligent.png',
    alt: 'AI for small business workshop',
    format: 'WORKSHOP',
    time: '10:00 AM – 1:00 PM',
    duration: '3 Hours',
    startsAt: '2026-10-24T10:00:00.000Z',
    agendaEyebrow: 'AGENDA',
    agendaTitle: "What's happening.",
    agenda: [
      { time: '10:00', title: 'WELCOME & INTRODUCTION', description: "Setting the scene and what we'll cover." },
      {
        time: '10:15',
        title: 'WHERE AI ACTUALLY FITS',
        description: 'Understanding practical business applications.',
      },
      {
        time: '11:00',
        title: 'AI & AUTOMATION IN ACTION',
        description: 'Examples, workflows and demonstrations.',
      },
      { time: '11:45', title: 'BREAK', description: '' },
      {
        time: '12:00',
        title: 'FROM IDEA TO IMPLEMENTATION',
        description: 'How to identify and prioritize opportunities.',
      },
      { time: '12:40', title: 'Q&A + DISCUSSION', description: '' },
      { time: '13:00', title: 'CLOSE', description: '' },
    ],
    registerLabel: 'REGISTER FOR THIS EVENT',
    registerHref: '/contact',
  },
}

export function getStaticEventBySlug(slug: string): EventDetail | null {
  return (
    STATIC_EVENT_DETAILS[slug] ??
    STATIC_EVENT_DETAILS[DEFAULT_STATIC_EVENT_SLUG] ??
    null
  )
}

export function getStaticEventSlugs(): string[] {
  return Object.keys(STATIC_EVENT_DETAILS)
}
