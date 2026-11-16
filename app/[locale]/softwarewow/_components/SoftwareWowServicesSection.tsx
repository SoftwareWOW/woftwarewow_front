'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { resolveLandingImage } from '@/lib/strapi/division-landing/resolve-landing-image'
import { useDivisionLandingImages } from '@/lib/strapi/division-landing/DivisionLandingImageContext'
import { LANDING_SECTION_KEYS } from '@/lib/strapi/division-landing/division-landing-image-manifest'
import { SOFTWAREWOW_SECTION_SHELL, SOFTWAREWOW_SERVICES } from './softwarewow-content'

type ServiceItem = (typeof SOFTWAREWOW_SERVICES.items)[number]

type SoftwareWowServicesSectionProps = {
  items?: readonly ServiceItem[]
}

export default function SoftwareWowServicesSection({ items: itemsFromCms }: SoftwareWowServicesSectionProps) {
  const imageMap = useDivisionLandingImages()
  const content = SOFTWAREWOW_SERVICES
  const useCmsItems = Boolean(itemsFromCms)
  const [showAll, setShowAll] = useState(false)
  const allItems = itemsFromCms ?? content.items
  const visibleItems = showAll ? allItems : allItems.slice(0, content.initialVisibleCount)
  const hasMore = allItems.length > content.initialVisibleCount

  return (
    <section id="services" className={`${SOFTWAREWOW_SECTION_SHELL} scroll-mt-28`}>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="[&>*:not(:last-child)]:mb-4">
          {visibleItems.map((item) => {
            const itemIndex = allItems.findIndex((entry) => entry.id === item.id)
            return (
            <RevealWrapper
              key={item.id}
              className="group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0"
            >
              <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
                <div className="blog-title mb-6">
                  <h3 className="text-[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">{item.title}</h3>
                </div>
                <p className="border-t pt-2 dark:border-dark md:pt-5">{item.description}</p>
              </div>
              <figure className="h-full w-full flex-1 overflow-hidden">
                <div className="block">
                  <Image
                    width={509}
                    height={295}
                    src={
                      useCmsItems
                        ? item.image
                        : resolveLandingImage(
                            imageMap,
                            LANDING_SECTION_KEYS.softwareWow.services,
                            itemIndex,
                            item.image,
                          )
                    }
                    alt={item.alt}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </div>
              </figure>
            </RevealWrapper>
            )
          })}
        </div>

        {hasMore ? (
          <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
            <ButtonComponentList>
              <ButtonComponent type="button" variant="white" onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? content.collapseLabel : content.expandLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}
