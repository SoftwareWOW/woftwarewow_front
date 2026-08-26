'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import RevealWrapper from '@/components/animation/RevealWrapper'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import type { Dictionary } from '@/i18n/types'
import { Link } from '@/i18n/navigation'

import SectionLabel from '../shared/SectionLabel'

/* =========================================================
   CLIENT IMAGES
========================================================= */

const CLIENT_IMAGES: Record<string, string> = {
  'Michael Carter': '/images/wow/Hero/client/Michael Carter.png',
  'Emma Richardson': '/images/wow/Hero/client/Emma Richardson.jpg',
  'Daniel Foster': '/images/wow/Hero/client/Daniel Foster.png',
  'Sophia Bennett': '/images/wow/Hero/client/Sophia Bennett.png',
}

/* =========================================================
   CASE STUDIES
========================================================= */

const REVIEW_CASE_STUDIES: Record<
  number,
  {
    href: string
    mediaSrc: string
    mediaAlt: string
  }
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

/* =========================================================
   CAROUSEL INDICATOR
========================================================= */

type CarouselGridIndicatorProps = {
  isActive: boolean
  onClick: () => void
  ariaLabel: string
}

const CarouselGridIndicator = ({
  isActive,
  onClick,
  ariaLabel,
}: CarouselGridIndicatorProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={isActive ? 'true' : undefined}
      className={`
        h-[2px]
        w-[10px]
        shrink-0
        border-0
        p-0
        transition-all
        duration-300
        hover:opacity-80
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/40

        ${
          isActive
            ? 'bg-primary'
            : 'bg-black/30 dark:bg-[#E8E8E8]/40'
        }
      `}
    />
  )
}

/* =========================================================
   TYPES
========================================================= */

type WowSuperAgencyClientProps = {
  superAgencyClient: Dictionary['superAgencyClient']
}

/* =========================================================
   COMPONENT
========================================================= */

const WowSuperAgencyClient = ({
  superAgencyClient,
}: WowSuperAgencyClientProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const resumeAutoplayTimer = useRef<number | null>(null)

  /* =======================================================
     AUTOPLAY
  ======================================================= */

  useEffect(() => {
    if (!api || !isAutoPlay) return

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => {
      window.clearInterval(interval)
    }
  }, [api, isAutoPlay])

  /* =======================================================
     CURRENT SLIDE
  ======================================================= */

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    onSelect()

    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  /* =======================================================
     CLEANUP TIMER
  ======================================================= */

  useEffect(() => {
    return () => {
      if (resumeAutoplayTimer.current) {
        window.clearTimeout(resumeAutoplayTimer.current)
      }
    }
  }, [])

  /* =======================================================
     AUTOPLAY HANDLERS
  ======================================================= */

  const handleMouseEnter = () => {
    setIsAutoPlay(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlay(true)
  }

  const handleIndicatorClick = (index: number) => {
    if (!api) return

    if (resumeAutoplayTimer.current) {
      window.clearTimeout(resumeAutoplayTimer.current)
    }

    setIsAutoPlay(false)
    api.scrollTo(index)

    resumeAutoplayTimer.current = window.setTimeout(() => {
      setIsAutoPlay(true)
    }, 5000)
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-background
        pt-10
        transition-colors
        duration-300

        sm:pt-12
        md:pt-16
        lg:pt-20
      "
    >
      {/* ===================================================
          BACKGROUND DOTS
      =================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0

          dark:opacity-20
        "
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      {/* ===================================================
          DARK VIGNETTE
      =================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0

          dark:opacity-100
        "
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <RevealWrapper className="container relative z-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-8 text-center md:mb-10 lg:mb-12">
          <RevealWrapper>
            <SectionLabel className="mb-5">
              TRUSTED BY BUSINESSES
            </SectionLabel>
          </RevealWrapper>

          <h2
            className="
              relative
              inline-block
              font-['Outfit']
              text-[clamp(32px,6vw,64px)]
              font-normal
              leading-[1.05]
              tracking-[-0.035em]
              text-[#000000]
              transition-colors
              duration-300

              dark:text-[#F2F2F2]
            "
          >
            {superAgencyClient.heading.part1}

            <br />

            <span className="block">
              {superAgencyClient.heading.part2}

              <span className="font-instrument">
                {superAgencyClient.heading.highlight}
              </span>
            </span>
          </h2>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="relative mx-auto w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocusCapture={() => setIsAutoPlay(false)}
          onBlurCapture={() => setIsAutoPlay(true)}
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
                const caseStudy =
                  REVIEW_CASE_STUDIES[review.id] ??
                  REVIEW_CASE_STUDIES[1]

                const clientImage =
                  CLIENT_IMAGES[review.userName]

                return (
                  <CarouselItem
                    key={review.id}
                    className="basis-full pl-2 md:pl-4"
                  >
                    <div className="p-1">
                      {/* =====================================
                          TESTIMONIAL CARD
                      ===================================== */}

                      <article
                        className="
                          relative
                          overflow-hidden
                          rounded-radius-md
                          border
                          border-[#1515151A]
                          bg-background
                          transition-colors
                          duration-300

                          dark:border-[#EDF0F51A]
                        "
                      >
                        <div
                          className="
                            grid
                            min-h-[420px]
                            grid-cols-1
                            gap-8
                            p-6

                            sm:p-8

                            lg:min-h-[430px]
                            lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.95fr)]
                            lg:items-stretch
                            lg:gap-12
                            lg:p-12

                            xl:grid-cols-[minmax(0,1fr)_minmax(520px,0.95fr)]
                            xl:gap-16
                          "
                        >
                          {/* =================================
                              LEFT CONTENT
                          ================================= */}

                          <div className="flex min-w-0 flex-col justify-between">
                            <div>
                              {/* QUOTE */}

                              <div
                                aria-hidden
                                className="
                                  mb-4
                                  h-[65px]
                                  font-serif
                                  text-[100px]
                                  font-bold
                                  leading-[0.8]
                                  text-[#171717]

                                  dark:text-[#454545]
                                "
                              >
                                “
                              </div>

                              {/* REVIEW */}

                              <blockquote
                                className="
                                  max-w-[650px]
                                  font-['Outfit']
                                  text-[clamp(20px,2.15vw,29px)]
                                  font-normal
                                  leading-[1.32]
                                  tracking-[-0.02em]
                                  text-[#202020]

                                  dark:text-[#EDEDED]
                                "
                              >
                                {review.title}
                              </blockquote>
                            </div>

                            {/* =================================
                                CLIENT
                            ================================= */}

                            <div
                              className="
                                mt-8
                                flex
                                items-center
                                gap-4

                                lg:mt-10
                              "
                            >
                              {clientImage && (
                                <div
                                  className="
                                    relative
                                    size-[52px]
                                    shrink-0
                                    overflow-hidden
                                    rounded-full
                                    bg-black/5

                                    md:size-[56px]
                                  "
                                >
                                  <Image
                                    src={clientImage}
                                    alt={review.userName}
                                    fill
                                    sizes="56px"
                                    className="object-cover"
                                  />
                                </div>
                              )}

                              <div className="min-w-0">
                                <div
                                  className="
                                    truncate
                                    font-['Outfit']
                                    text-[18px]
                                    font-medium
                                    leading-tight
                                    text-[#202020]

                                    dark:text-[#F0F0F0]

                                    md:text-[20px]
                                  "
                                >
                                  {review.userName}
                                </div>

                                <div
                                  className="
                                    mt-1
                                    truncate
                                    font-['Outfit']
                                    text-[13px]
                                    font-normal
                                    leading-tight
                                    text-[#777777]

                                    dark:text-[#8D8D8D]

                                    md:text-[14px]
                                  "
                                >
                                  {review.position}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* =================================
                              CASE STUDY MEDIA
                          ================================= */}

                          <div
                            className="
                              relative
                              min-h-[290px]
                              w-full
                              self-stretch

                              sm:min-h-[330px]
                              lg:min-h-[350px]
                            "
                          >
                            {/* =================================
                                IMAGE SHAPE

                                Uses global:
                                rounded-radius-md
                            ================================= */}

                            <div
                              className="
                                absolute
                                inset-0
                                overflow-hidden
                                rounded-radius-md
                              "
                            >
                              {/* =================================
                                  ENTIRE IMAGE CLICKABLE
                              ================================= */}

                              <Link
                                href={caseStudy.href}
                                aria-label={`View ${caseStudy.mediaAlt}`}
                                className="
                                  group/media
                                  absolute
                                  inset-0
                                  block
                                  cursor-pointer

                                  focus-visible:outline-none
                                  focus-visible:ring-2
                                  focus-visible:ring-inset
                                  focus-visible:ring-primary
                                "
                              >
                                {/* =============================
                                    IMAGE
                                ============================= */}

                                <Image
                                  src={caseStudy.mediaSrc}
                                  alt={caseStudy.mediaAlt}
                                  fill
                                  draggable={false}
                                  sizes="
                                    (max-width: 1023px) 100vw,
                                    (max-width: 1279px) 48vw,
                                    560px
                                  "
                                  className="
                                    select-none
                                    object-cover
                                    object-center

                                    transition-transform
                                    duration-700
                                    ease-out

                                    group-hover/media:scale-105
                                  "
                                />

                                {/* =============================
                                    HOVER OVERLAY
                                ============================= */}

                                <div
                                  aria-hidden
                                  className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    z-[1]
                                    bg-black/0

                                    transition-colors
                                    duration-500

                                    group-hover/media:bg-black/[0.025]

                                    dark:group-hover/media:bg-black/[0.08]
                                  "
                                />

                                {/* =================================================
                                    BOTTOM LEFT CUTOUT
                                ================================================= */}

                                <div
                                  className="
                                    absolute
                                    bottom-0
                                    left-0
                                    z-20
                                  "
                                >
                                  {/* =============================================
                                      MAIN CUTOUT SHAPE

                                      Uses global radius-md.
                                  ============================================= */}

                                  <div
                                    className="
                                      relative
                                      rounded-tr-radius-md
                                      bg-background
                                      pr-3
                                      pt-3
                                    "
                                  >
                                    {/* =========================================
                                        TOP INVERTED CORNER

                                        Makes the top connection between
                                        image and cutout concave + rounded.
                                    ========================================= */}

                                    <span
                                      aria-hidden
                                      className="
                                        pointer-events-none
                                        absolute
                                        left-0
                                        top-[calc(var(--radius-md)*-1)]
                                        z-[2]

                                        size-[var(--radius-md)]

                                        bg-background
                                      "
                                      style={{
                                        WebkitMaskImage:
                                          'radial-gradient(circle at 100% 0%, transparent calc(var(--radius-md) - 0.5px), #000 var(--radius-md))',
                                        maskImage:
                                          'radial-gradient(circle at 100% 0%, transparent calc(var(--radius-md) - 0.5px), #000 var(--radius-md))',

                                        WebkitMaskRepeat: 'no-repeat',
                                        maskRepeat: 'no-repeat',

                                        WebkitMaskPosition: 'center',
                                        maskPosition: 'center',

                                        WebkitMaskSize: '100% 100%',
                                        maskSize: '100% 100%',
                                      }}
                                    />

                                    {/* =========================================
                                        RIGHT INVERTED CORNER

                                        This fixes the square corner at the
                                        bottom/right side of the cutout.
                                    ========================================= */}

                                    <span
                                      aria-hidden
                                      className="
                                        pointer-events-none
                                        absolute
                                        bottom-0
                                        right-[calc(var(--radius-md)*-1)]
                                        z-[2]

                                        size-[var(--radius-md)]

                                        bg-background
                                      "
                                      style={{
                                        WebkitMaskImage:
                                          'radial-gradient(circle at 100% 0%, transparent calc(var(--radius-md) - 0.5px), #000 var(--radius-md))',
                                        maskImage:
                                          'radial-gradient(circle at 100% 0%, transparent calc(var(--radius-md) - 0.5px), #000 var(--radius-md))',

                                        WebkitMaskRepeat: 'no-repeat',
                                        maskRepeat: 'no-repeat',

                                        WebkitMaskPosition: 'center',
                                        maskPosition: 'center',

                                        WebkitMaskSize: '100% 100%',
                                        maskSize: '100% 100%',
                                      }}
                                    />

                                    {/* =========================================
                                        PURPLE BUTTON

                                        Uses:
                                        rounded-radius-sm
                                    ========================================= */}

                                    <div
                                      className="
                                        relative
                                        z-[3]

                                        flex
                                        size-[68px]
                                        items-center
                                        justify-center
                                        overflow-hidden

                                        rounded-radius-sm
                                        bg-primary
                                        text-white

                                        sm:size-[76px]
                                        lg:size-[82px]
                                        xl:size-[92px]
                                      "
                                    >
                                      {/* =====================================
                                          FIRST WHITE ARROW

                                          Same interaction style as
                                          your Projects section.

                                          Center -> exits top/right
                                      ===================================== */}

                                      <ArrowUpRight
                                        aria-hidden
                                        strokeWidth={2}
                                        className="
                                          absolute
                                          left-1/2
                                          top-1/2

                                          size-9

                                          -translate-x-1/2
                                          -translate-y-1/2

                                          !stroke-white
                                          !text-white

                                          opacity-100

                                          transition-all
                                          duration-500
                                          ease-out

                                          group-hover/media:translate-x-5
                                          group-hover/media:-translate-y-10
                                          group-hover/media:opacity-0

                                          lg:size-10
                                        "
                                      />

                                      {/* =====================================
                                          SECOND WHITE ARROW

                                          Bottom/left -> enters center
                                      ===================================== */}

                                      <ArrowUpRight
                                        aria-hidden
                                        strokeWidth={2}
                                        className="
                                          absolute
                                          left-1/2
                                          top-1/2

                                          size-9

                                          -translate-x-10
                                          translate-y-6

                                          !stroke-white
                                          !text-white

                                          opacity-0

                                          transition-all
                                          duration-500
                                          ease-out

                                          group-hover/media:-translate-x-1/2
                                          group-hover/media:-translate-y-1/2
                                          group-hover/media:opacity-100

                                          lg:size-10
                                        "
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            {/* =================================================
                CAROUSEL INDICATORS
            ================================================= */}

            <div
              className="
                relative
                z-20
                mt-5
                flex
                justify-center

                md:mt-6
              "
            >
              <div className="flex items-center gap-1">
                {superAgencyClient.reviews.map((_, index) => (
                  <CarouselGridIndicator
                    key={index}
                    isActive={index === currentIndex}
                    onClick={() => handleIndicatorClick(index)}
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