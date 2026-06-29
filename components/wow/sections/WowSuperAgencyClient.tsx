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

const CLIENT_IMAGES: Record<string, string> = {
  'Michael Carter': '/images/wow/hero/client/Michael Carter.png',
  'Emma Richardson': '/images/wow/hero/client/Emma Richardson.jpg',
  'Daniel Foster': '/images/wow/hero/client/Daniel Foster.png',
  'Sophia Bennett': '/images/wow/hero/client/Sophia Bennett.png',
}

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
    <section className="relative overflow-hidden bg-background py-10 transition-colors duration-300 lg:py-[60px] xl:py-[50px]">
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

      <RevealWrapper className="relative z-10 container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
        {/* Section Header - New Heading */}
        <div className="text-center mb-4">
          <h2 className="font-['Outfit'] text-[clamp(32px,6vw,64px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#000000] dark:text-[#F2F2F2] mb-4 relative inline-block transition-colors duration-300">
            {superAgencyClient.heading.part1}{' '}
            <span className="font-['Ogg_TRIAL'] italic text-[#8b7cff] dark:text-[#b794f4]">
              {superAgencyClient.heading.highlight}
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
                    <div className="relative overflow-hidden rounded-radius-sm transition-all duration-300">
                      {/* Animated border glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r from-[#8b7cff]/20 via-[#b794f4]/20 to-[#f4a8b8]/20 rounded-radius-sm blur-xl transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      <div className="relative bg-white backdrop-blur-sm dark:bg-dark rounded-radius-sm transition-colors duration-300 shadow-sm dark:shadow-none">
                        <WowSwiperSlideContent
                          tags={review.tags}
                          title={review.title}
                          userName={review.userName}
                          position={review.position}
                          userImg={CLIENT_IMAGES[review.userName]}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation - Moved INSIDE Carousel component with proper positioning */}
            <div className="flex justify-center gap-3 mt-6 relative z-20">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {superAgencyClient.reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!api) return
                      setIsAutoPlay(false)
                      api.scrollTo(index)
                      setTimeout(() => setIsAutoPlay(true), 5000)
                    }}
                    className={`transition-all duration-500 rounded-full ${
                      index === currentIndex
                        ? 'w-10 h-2.5 bg-gradient-to-r from-[#8b7cff] to-[#b794f4] shadow-lg shadow-[#8b7cff]/30 dark:shadow-[#8b7cff]/50'
                        : 'w-2.5 h-2.5 bg-[#d0d0d0] dark:bg-white/20 hover:bg-[#8b7cff] dark:hover:bg-white/40'
                    }`}
                    aria-label={superAgencyClient.aria.goToTestimonial.replace('{index}', String(index + 1))}
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