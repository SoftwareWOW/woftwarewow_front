'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsPageEventsSection } from '@/lib/strapi/mappers/page-sections'
import Image from 'next/image'
import Link from 'next/link'

const DEFAULT_EVENTS = [
  {
    id: 1,
    date: 'AUG 24, 2026',
    title: 'AI for Small Business',
    format: 'Workshop • Online',
    description: 'Practical ways to introduce AI into everyday business workflows...',
    thumbnail: '/images/wow/Hero/devision/Events.jpg',
    href: '/wowevents',
  },
  {
    id: 2,
    date: 'SEP 08, 2026',
    title: 'Building a Brand That Stands Out',
    format: 'Webinar • Online',
    description: 'Brand strategy for growing businesses that want clarity and presence...',
    thumbnail: '/images/wow/Hero/devision/Education.jpg',
    href: '/wowevents',
  },
  {
    id: 3,
    date: 'OCT 15, 2026',
    title: 'WOW Business Growth Event',
    format: 'In Person • Location',
    description: 'Insights, conversations and connections to help your business move forward...',
    thumbnail: '/images/wow/Hero/devision/Impact.jpg',
    href: '/wowevents',
  },
]

function mergeEvents<T extends { id: number; date: string; title: string; format: string; description: string; thumbnail: string; href: string }>(
  defaults: T[],
  cmsEvents?: CmsPageEventsSection['events'] | null,
): T[] {
  if (!cmsEvents?.length) return defaults

  return defaults.map((event, index) => {
    const cms = cmsEvents[index]
    if (!cms) return event

    return {
      ...event,
      date: cms.date ?? event.date,
      title: cms.title || event.title,
      format: cms.location ?? event.format,
      href: cms.href ?? event.href,
    }
  })
}

/** Layout: GrowthStrategies — header + divided event list rows. */
const UpcomingEvents = ({
  eyebrow = "What's Happening",
  title = 'Learn something.',
  accentTitle = 'Meet someone.',
  description = 'Discover upcoming workshops, webinars and experiences from WOW and our community.',
  events,
}: Partial<CmsPageEventsSection> = {}) => {
  const displayEvents = mergeEvents(DEFAULT_EVENTS, events)

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper>
          <SectionLabel className="mb-5">{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <RevealWrapper>
            <h2 className="max-w-[640px] font-normal leading-[1.15] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              {title}
              <br />
              <InstrumentText>{accentTitle}</InstrumentText>
              <br />
              Take something away.
            </h2>
          </RevealWrapper>
          <RevealWrapper className="max-w-[420px] lg:text-right">
            <p className="text-base leading-relaxed text-[#808080] transition-colors duration-300">{description}</p>
            <div className="mt-6 flex justify-start md:mt-8 lg:justify-end">
              <ButtonComponent href="/wowevents" variant="secondary">
                View All Events
              </ButtonComponent>
            </div>
          </RevealWrapper>
        </div>

        <div className="divide-y divide-[#e5e5e5] dark:divide-white/10">
          {displayEvents.map((event) => (
            <RevealWrapper
              key={event.id}
              className="group grid grid-cols-1 gap-6 border-b border-[#1515151A] py-8 transition-all duration-300 first:pt-0 last:pb-0 md:grid-cols-[auto_1fr] md:items-stretch md:gap-10 lg:gap-14"
            >
              <Link
                href={event.href}
                className="relative block w-full shrink-0 overflow-hidden rounded-radius-sm border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none md:h-full md:w-auto md:self-stretch"
              >
                <Image
                  src={event.thumbnail}
                  alt=""
                  width={340}
                  height={220}
                  className="aspect-[340/220] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:w-auto md:max-w-none"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <SectionLabel className="mb-3">{event.date}</SectionLabel>

                <Link href={event.href}>
                  <h3 className="mb-2 max-w-3xl text-[clamp(1.25rem,2.5vw,2rem)] font-normal uppercase leading-[1.25] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:hover:text-[#b794f4]">
                    {event.title}
                  </h3>
                </Link>

                <p className="mb-2 text-sm leading-relaxed text-[#808080] md:text-base">{event.format}</p>

                <p className="mb-4 max-w-3xl text-sm leading-relaxed text-[#808080] transition-colors duration-300 md:text-base">
                  {event.description}
                </p>

                <div className="flex justify-start">
                  <ButtonComponent href={event.href} variant="white">
                    View Event
                  </ButtonComponent>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
