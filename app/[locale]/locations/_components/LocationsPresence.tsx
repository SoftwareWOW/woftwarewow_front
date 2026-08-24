'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { renderWowInTitle } from '@/components/wow/shared/WowText'
import { officeLocations } from '../_data/locations'

function mapsEmbedUrl(mapQuery: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`
}

function mapsSearchUrl(mapQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
}

/** Layout: partners/WhyPartnerWithWow — header + two-column details/media + CTA. */
const LocationsPresence = () => {
  const location = officeLocations[0]

  if (!location) return null

  const openMaps = () => {
    window.open(mapsSearchUrl(location.mapQuery), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="locations">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <RevealWrapper className="reveal-me mb-4 flex justify-center md:mb-5">
            <SectionLabel>WHERE WE ARE</SectionLabel>
          </RevealWrapper>
          <RevealWrapper>
            <h2 className="mt-3">{renderWowInTitle('Find WOW Around the World.')}</h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
              We help strengthen the moments that influence how guests discover, choose, experience, and remember your
              brand.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2">
            <RevealWrapper className="reveal-me">
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.02em]">
                {location.city}, {location.region}
              </h3>
              <p className="mt-4 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{location.description}</p>
              <div className="mt-6 space-y-1 text-base leading-[1.6] text-[#808080]">
                {location.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-4 text-base leading-[1.6] text-[#808080]">{location.meta}</p>
              <p className="mt-3 text-base leading-[1.6] text-[#808080]">
                <a
                  href={location.phoneHref}
                  className="transition-colors hover:text-secondary dark:hover:text-[#F2F2F2]"
                >
                  {location.phone}
                </a>
              </p>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-8">
              <ButtonComponentList className="flex justify-start rounded-radius-sm" itemClassName="block">
                <ButtonComponent variant="primary" onClick={openMaps} ariaLabel={location.ctaLabel}>
                  {location.ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <iframe
              title={`Map of ${location.city}, ${location.region}`}
              src={mapsEmbedUrl(location.mapQuery)}
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
