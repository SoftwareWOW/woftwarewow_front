'use client'

import { useEffect, useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import type { Dictionary } from '@/i18n/types'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import WowSwiperSlideContent from '../LandascapComponets/WowSwiperSlideContent'
import SectionLabel from '../shared/SectionLabel'

const CLIENT_IMAGES: Record<string, string> = {
  'Michael Carter': '/images/wow/Hero/client/Michael Carter.png',
  'Emma Richardson': '/images/wow/Hero/client/Emma Richardson.jpg',
  'Daniel Foster': '/images/wow/Hero/client/Daniel Foster.png',
  'Sophia Bennett': '/images/wow/Hero/client/Sophia Bennett.png',
}

const REVIEW_CASE_STUDIES: Record<
  number,
  { href: string; mediaSrc: string; mediaAlt: string }
> = {
  1: {
    href: '/case-study/ccg-breakthrough',
    mediaSrc: '/images/wow/Hero/project/case-study/ccg.png',
    mediaAlt: 'CCG Breakthrough case study',
  },
  2: {
    href: '/case-study/inity-inc',
    mediaSrc: '/images/wow/Hero/project/case-study/InityInc.png',
    mediaAlt: 'Inity Inc case study',
  },
  3: {
    href: '/case-study/smartek',
    mediaSrc: '/images/wow/Hero/project/case-study/smartek.png',
    mediaAlt: 'Smartek case study',
  },
  4: {
    href: '/case-study/davinci-lounge',
    mediaSrc: '/images/wow/Hero/project/case-study/davinci.png',
    mediaAlt: 'DaVinci Lounge case study',
  },
}

type CarouselGridIndicatorProps = {
  isActive: boolean
  onClick: () => void
  ariaLabel: string
}

const CarouselGridIndicator = ({ isActive, onClick, ariaLabel }: CarouselGridIndicatorProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    aria-current={isActive}
    className={`h-[2px] w-[10px] shrink-0 rounded-none border-0 p-0 transition-colors duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cff]/40 ${
      isActive ? 'bg-[#8b7cff]' : 'bg-black/30 dark:bg-[#E8E8E8]/40'
    }`}
  />
)

type WowSuperAgencyClientProps = {
  superAgencyClient: Dictionary['superAgencyClient']
}

const WowSuperAgencyClient = ({ superAgencyClient }: WowSuperAgencyClientProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api || !isAutoPlay) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [api, isAutoPlay])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  return (
    <section className="relative overflow-hidden bg-background pt-10 transition-colors duration-300 sm:pt-12 md:pt-15 lg:pt-20">
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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <RevealWrapper className="container relative z-10">
        <div className="mb-4 text-center">
          <RevealWrapper>
            <SectionLabel className="mb-5">TRUSTED BY BUSINESSES</SectionLabel>
          </RevealWrapper>
          <h2 className="relative mb-4 inline-block font-['Outfit'] text-[clamp(32px,6vw,64px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#000000] transition-colors duration-300 dark:text-[#F2F2F2]">
            {superAgencyClient.heading.part1}
            <br />
            <span className="block">
              {superAgencyClient.heading.part2}
              <span className="font-instrument">{superAgencyClient.heading.highlight}</span>
            </span>
          </h2>
        </div>

        <div
          className="relative mx-auto w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {superAgencyClient.reviews.map((review) => {
                const caseStudy = REVIEW_CASE_STUDIES[review.id] ?? REVIEW_CASE_STUDIES[1]

                return (
                  <CarouselItem key={review.id} className="basis-full pl-2 md:pl-4">
                    <div className="p-1">
                      <div className="relative rounded-radius-md border border-[#1515151A] shadow-sm transition-all duration-300 dark:border-[#EDF0F51A] dark:shadow-none">
                        <WowSwiperSlideContent
                          title={review.title}
                          userName={review.userName}
                          position={review.position}
                          userImg={CLIENT_IMAGES[review.userName]}
                          href={caseStudy.href}
                          mediaSrc={caseStudy.mediaSrc}
                          mediaAlt={caseStudy.mediaAlt}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <div className="relative z-20 mt-6 flex justify-center">
              <div className="flex items-center gap-1">
                {superAgencyClient.reviews.map((_, index) => (
                  <CarouselGridIndicator
                    key={index}
                    isActive={index === currentIndex}
                    onClick={() => {
                      if (!api) return
                      setIsAutoPlay(false)
                      api.scrollTo(index)
                      setTimeout(() => setIsAutoPlay(true), 5000)
                    }}
                    ariaLabel={superAgencyClient.aria.goToTestimonial.replace(
                      '{index}',
                      String(index + 1),
                    )}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default WowSuperAgencyClient
