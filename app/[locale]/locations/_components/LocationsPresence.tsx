'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { renderWowInTitle } from '@/components/wow/shared/WowText'
import { useMemo, useState } from 'react'
import { officeLocations } from '../_data/locations'

function mapsEmbedUrl(mapQuery: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`
}

function mapsSearchUrl(mapQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
}

/** Layout: partners/WhyPartnerWithWow — header + two-column details/media + CTA. */
const LocationsPresence = () => {
  const [activeId, setActiveId] = useState(officeLocations[0]?.id ?? '')

  const active = useMemo(
    () => officeLocations.find((office) => office.id === activeId) ?? officeLocations[0],
    [activeId],
  )

  if (!active) return null

  const openMaps = () => {
    window.open(mapsSearchUrl(active.mapQuery), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="locations">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <RevealWrapper className="reveal-me mb-4 flex justify-center md:mb-5">
            <SectionLabel>WHERE WE ARE</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">{renderWowInTitle('Find WOW Around the World.')}</h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
              We help strengthen the moments that influence how guests discover, choose, experience, and remember your
              brand.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mb-8 md:mb-10">
          <div
            role="tablist"
            aria-label="Office locations"
            className="flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-4 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
          >
            {officeLocations.map((office) => {
              const isActive = office.id === active.id
              return (
                <button
                  key={office.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`location-panel-${office.id}`}
                  id={`location-tab-${office.id}`}
                  onClick={() => setActiveId(office.id)}
                  className={
                    isActive
                      ? 'shrink-0 snap-start rounded-radius-sm bg-[#15151533] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#0D0D0D] dark:bg-[#EDF0F533] dark:text-[#F2F2F2] sm:text-[11px] xl:text-[12px]'
                      : 'shrink-0 snap-start rounded-radius-sm border border-black/10 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#808080] transition-colors hover:text-secondary dark:border-white/10 dark:hover:text-[#F2F2F2] sm:text-[11px] xl:text-[12px]'
                  }
                >
                  {office.city}
                </button>
              )
            })}
          </div>
        </RevealWrapper>

        <div
          role="tabpanel"
          id={`location-panel-${active.id}`}
          aria-labelledby={`location-tab-${active.id}`}
          className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row"
        >
          <div className="md:w-1/2">
            <RevealWrapper className="reveal-me">
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
                {active.city}, {active.region}
              </h3>
              <p className="mt-4 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{active.description}</p>
              <div className="mt-6 space-y-1 text-base leading-[1.6] text-[#808080]">
                {active.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-4 text-base leading-[1.6] text-[#808080]">{active.meta}</p>
              <p className="mt-3 text-base leading-[1.6] text-[#808080]">
                <a href={active.phoneHref} className="transition-colors hover:text-secondary dark:hover:text-[#F2F2F2]">
                  {active.phone}
                </a>
              </p>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-8">
              <ButtonComponentList className="flex justify-start rounded-radius-sm" itemClassName="block">
                <ButtonComponent variant="primary" onClick={openMaps} ariaLabel={active.ctaLabel}>
                  {active.ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <iframe
              key={active.id}
              title={`Map of ${active.city}, ${active.region}`}
              src={mapsEmbedUrl(active.mapQuery)}
              className="aspect-square h-full min-h-[280px] w-full rounded-radius-md border-0 sm:min-h-[360px] md:aspect-auto md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default LocationsPresence
