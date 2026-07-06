'use client'

import { useState, useEffect } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import type { Dictionary } from '@/i18n/types'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import WowSwiperSlideContent from '../LandascapComponets/WowSwiperSlideContent'
import SectionLabel from '../shared/SectionLabel'

const CLIENT_IMAGES: Record<string, string> = {
  'Michael Carter': '/images/wow/Hero/client/Michael Carter.png',
  'Emma Richardson': '/images/wow/Hero/client/Emma Richardson.jpg',
  'Daniel Foster': '/images/wow/Hero/client/Daniel Foster.png',
  'Sophia Bennett': '/images/wow/Hero/client/Sophia Bennett.png',
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
      isActive ? 'bg-[#8b7cff]' : 'bg-black dark:bg-[#E8E8E8]'
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

  // Autoplay functionality - slides from right to left
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

  // Track current slide index
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

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  // Manual navigation with autoplay control
  const handleManualNavigation = (direction: 'prev' | 'next') => {
    if (!api) return

    setIsAutoPlay(false)

    if (direction === 'next') {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    } else {
      if (api.canScrollPrev()) {
        api.scrollPrev()
      } else {
        api.scrollTo(superAgencyClient.reviews.length - 1)
      }
    }

    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background decorative elements - light mode friendly */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }} />
      </div>
      
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <RevealWrapper className="relative z-10 container">
                   
        {/* Section Header - New Heading */}
        <div className="text-center mb-4">
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

        {/* Carousel Container */}
        <div
          className="relative w-full mx-auto"
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
              {superAgencyClient.reviews.map((review, index) => (
                <CarouselItem
                  key={review.id}
                  className="pl-2 md:pl-4 basis-full"
                >
                  <div className="p-1">
                    {/* Single border container - removed the nested duplicate */}
                    <div className="relative rounded-radius-md border border-[#1515151A] dark:border-[#EDF0F51A] shadow-sm dark:shadow-none transition-all duration-300">
                      <WowSwiperSlideContent
                        tags={review.tags}
                        title={review.title}
                        userName={review.userName}
                        position={review.position}
                        userImg={CLIENT_IMAGES[review.userName]}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
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
                    ariaLabel={superAgencyClient.aria.goToTestimonial.replace('{index}', String(index + 1))}
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