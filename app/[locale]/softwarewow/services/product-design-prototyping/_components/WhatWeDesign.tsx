'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'

export type WhatWeDesignArea = {
  title: string
  description: string
}

export type WhatWeDesignProps = {
  eyebrow?: string
  titleBefore?: string
  titleAccent?: string
  description?: string
  areas?: ReadonlyArray<WhatWeDesignArea>
  layout?: 'grid' | 'tabs'
  defaultActiveIndex?: number
  featureImage?: { src: string; alt: string }
}

const DEFAULT_GRID_AREAS: WhatWeDesignArea[] = [
  {
    title: 'Product Discovery',
    description: 'Understand the opportunity, define product goals, and shape the right direction.',
  },
  {
    title: 'UX Research & Strategy',
    description: 'Explore user needs and behaviors to guide meaningful product decisions.',
  },
  {
    title: 'User Flows & Wireframes',
    description: 'Organize features, journeys, and screens into clear, intuitive structures.',
  },
  {
    title: 'UI & Product Design',
    description: 'Create beautiful, consistent interfaces designed around real interactions.',
  },
  {
    title: 'Interactive Prototyping',
    description: 'Bring ideas to life through clickable experiences that can be reviewed and refined.',
  },
]

const GRID_AREA_IMAGES: Record<string, { src: string; alt: string }> = {
  'Product Discovery': {
    src: '/images/wow/LandingPageNaveBare/notes-with-words-and-female-hand-on-light-backgrou-2026-03-24-21-39-26-utc%201.svg',
    alt: 'Product discovery and planning session',
  },
  'UX Research & Strategy': {
    src: '/images/wow/LandingPageNaveBare/ux-graphic-designer-planing-application-process-d-2026-03-11-00-50-35-utc%202.svg',
    alt: 'UX research and application planning',
  },
  'User Flows & Wireframes': {
    src: '/images/wow/Hero/devision/Website 1.jpg',
    alt: 'Wireframe and user flow structure',
  },
  'UI & Product Design': {
    src: '/images/wow/Hero/devision/Design 2.jpg',
    alt: 'UI and visual product design',
  },
  'Interactive Prototyping': {
    src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
    alt: 'Interactive prototype experience',
  },
}

/** Layout: homepage-16/ServicesV14 — bordered cards; tabs variant uses ProcessV10 cards. */
const WhatWeDesign = ({
  eyebrow = 'What We Design',
  titleBefore = 'From first idea to ',
  titleAccent = 'clear direction.',
  description = 'Every great digital product starts with understanding its users. We bring clarity to ideas, structure to experiences, and purpose to every interaction.',
  areas = DEFAULT_GRID_AREAS,
  layout = 'grid',
  defaultActiveIndex = 0,
  featureImage,
}: WhatWeDesignProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const safeActiveIndex = Math.min(Math.max(0, activeIndex), areas.length - 1)

  const headerBlock = (
    <>
      <RevealWrapper className="mb-3">
        <SectionLabel>{eyebrow}</SectionLabel>
      </RevealWrapper>
      <TextAppearAnimation>
        <h2 className="text-appear mt-3">
          {titleBefore}
          {titleAccent ? <InstrumentText>{titleAccent}</InstrumentText> : null}
        </h2>
      </TextAppearAnimation>
      <RevealWrapper className="reveal-me mt-3 max-w-2xl">
        <p className="text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
      </RevealWrapper>
    </>
  )

  if (layout === 'tabs') {
    const activeArea = areas[safeActiveIndex]

    return (
      <section>
        <div className="container">
          <div className="mb-10 flex flex-col items-start justify-between gap-x-10 gap-y-6 md:mb-16 lg:flex-row lg:items-end">
            <div className="md:flex-1">{headerBlock}</div>
            {featureImage ? (
              <RevealWrapper as="figure" className="reveal-me w-full shrink-0 lg:max-w-[42%]">
                <img
                  src={featureImage.src}
                  alt={featureImage.alt}
                  className="h-auto w-full rounded-radius-md object-cover"
                />
              </RevealWrapper>
            ) : null}
          </div>

          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:gap-[30px]">
            {areas.map((area, index) => {
              const isActive = index === safeActiveIndex

              if (isActive) {
                return (
                  <RevealWrapper key={area.title} className="relative w-full grow pt-8 xl:grow">
                    <button
                      type="button"
                      className="group mx-auto grid min-h-[280px] w-full grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center transition-colors duration-300 hover:bg-primary dark:border-dark xl:min-h-[320px]"
                      onClick={() => setActiveIndex(index)}
                    >
                      <h6 className="text-2xl font-light leading-[1.1] text-black transition-colors duration-300 group-hover:text-white dark:text-white">
                        <WowText>{area.title}</WowText>
                      </h6>
                      {area.description ? (
                        <p className="mt-4 text-base font-light leading-[1.3] text-black/70 transition-colors duration-300 group-hover:text-white dark:text-backgroundBody/70">
                          {area.description}
                        </p>
                      ) : null}
                    </button>
                  </RevealWrapper>
                )
              }

              return (
                <RevealWrapper key={area.title} className="reveal-me flex w-full items-end xl:flex-1">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="w-full pb-4 text-left text-xl font-light text-secondary transition-opacity hover:opacity-80 dark:text-backgroundBody md:text-2xl"
                  >
                    {area.title}
                  </button>
                </RevealWrapper>
              )
            })}
          </div>
          {/* satisfy screen readers with active area when inactive titles have no description */}
          <span className="sr-only">{activeArea.title}</span>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">{headerBlock}</div>
        </div>

        <div className="mx-auto flex max-w-[1600px] flex-wrap justify-center gap-[30px]">
          {areas.map((area) => {
            const image = GRID_AREA_IMAGES[area.title]
            return (
              <RevealWrapper
                key={area.title}
                className="reveal-me group w-full border px-6 py-9 dark:border-dark sm:max-w-[520px] md:w-[calc(50%-15px)] md:max-w-none lg:px-[30px] lg:py-[50px] xl:w-[calc(33.333%-20px)] xl:max-w-[480px]"
              >
                {image ? (
                  <figure className="mb-6 overflow-hidden rounded-radius-sm">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>
                ) : null}
                <h5 className="mb-2 lg:mb-3">{area.title}</h5>
                <p className="text-base leading-[1.6] text-[#808080]">{area.description}</p>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDesign
