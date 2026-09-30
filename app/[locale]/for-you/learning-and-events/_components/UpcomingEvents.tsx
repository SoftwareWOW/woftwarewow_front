'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { resolveEventDetailsHref } from '@/lib/events/event-slug'
import type { CmsPageEventsSection } from '@/lib/strapi/mappers/page-sections'
import Image from 'next/image'
import Link from 'next/link'

/** Layout: GrowthStrategies — header + divided event list rows. */
const UpcomingEvents = ({
  eyebrow = "What's Happening",
  title = 'Learn something.',
  accentTitle = 'Meet someone.',
  description = 'Discover upcoming workshops, webinars and experiences from WOW and our community.',
  events,
}: Partial<CmsPageEventsSection> = {}) => {
  if (!events?.length) {
    return null
  }

  const titleLines = title?.includes('\n')
    ? title
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    : null

  const displayEvents = events.map((event, index) => ({
    id: index + 1,
    date: event.date ?? '',
    title: event.title,
    format: event.location ?? '',
    description: event.description ?? '',
    thumbnail: event.thumbnail ?? '',
    href: resolveEventDetailsHref(event.href, event.title, event.slug),
    alt: event.alt ?? event.title,
  }))

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
              {titleLines ? (
                <>
                  {titleLines[0]}
                  {titleLines[1] ? (
                    <>
                      <br />
                      <InstrumentText>{titleLines[1]}</InstrumentText>
                    </>
                  ) : null}
                  {titleLines[2] ? (
                    <>
                      <br />
                      {titleLines[2]}
                    </>
                  ) : null}
                </>
              ) : (
                <>
                  {title}
                  {accentTitle ? (
                    <>
                      <br />
                      <InstrumentText>{accentTitle}</InstrumentText>
                    </>
                  ) : null}
                </>
              )}
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
              {event.thumbnail ? (
                <Link
                  href={event.href}
                  className="relative block w-full shrink-0 overflow-hidden rounded-radius-sm border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none md:h-full md:w-auto md:self-stretch"
                >
                  <Image
                    src={event.thumbnail}
                    alt={event.alt}
                    width={340}
                    height={220}
                    className="aspect-[340/220] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:w-auto md:max-w-none"
                  />
                </Link>
              ) : null}

              <div className="flex flex-1 flex-col">
                <SectionLabel className="mb-3">{event.date}</SectionLabel>

                <Link href={event.href}>
                  <h3 className="mb-2 max-w-3xl text-[clamp(1.25rem,2.5vw,2rem)] font-normal uppercase leading-[1.25] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:hover:text-[#b794f4]">
                    {event.title}
                  </h3>
                </Link>

                {event.format ? (
                  <p className="mb-2 text-sm leading-relaxed text-[#808080] md:text-base">{event.format}</p>
                ) : null}

                {event.description ? (
                  <p className="mb-4 max-w-3xl text-sm leading-relaxed text-[#808080] transition-colors duration-300 md:text-base">
                    {event.description}
                  </p>
                ) : null}

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
