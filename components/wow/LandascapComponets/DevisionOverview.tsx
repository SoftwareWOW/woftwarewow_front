
'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { renderWowInTitle } from '@/components/wow/shared/WowText'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

const DIVISION_BG_BASE = '/images/wow/Hero/devision'

const DIVISIONS_SECTION_BG =
  'bg-[#ebe6f4] dark:bg-[#ebe6f4]'

export type DevisionOverviewItem = {
  id: number
  title: string
  description: string
  bgImage: string
  href: string
}

type DevisionOverviewProps = {
  divisions?: DevisionOverviewItem[]
}

const divisions: DevisionOverviewItem[] = [
  {
    id: 1,
    title: 'SoftwareWOW',
    description:
      'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
    bgImage: `${DIVISION_BG_BASE}/Mockup 2 Dark.png`,
    href: '/software',
  },
  {
    id: 2,
    title: 'WOW Marketing',
    description:
      'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
    bgImage: `${DIVISION_BG_BASE}/Image-copy-scaled.jpeg`,
    href: '/marketing',
  },
  {
    id: 3,
    title: 'WOW Design',
    description:
      'Brand identity and visual systems that make your business memorable, credible, and impossible to ignore.',
    bgImage: `${DIVISION_BG_BASE}/Design 1.jpg`,
    href: '/design',
  },
  {
    id: 4,
    title: 'WOW Intelligence',
    description:
      'AI solutions and automation that sharpen decisions, reduce manual work, and accelerate results.',
    bgImage: `${DIVISION_BG_BASE}/Intelligence.jpg`,
    href: '/intelligence',
  },
  {
    id: 5,
    title: 'WOW Social',
    description:
      'Social strategy and community building that turns followers into customers and customers into advocates.',
    bgImage: `${DIVISION_BG_BASE}/Events (1).jpg`,
    href: '/social',
  },
  {
    id: 6,
    title: 'WOW Accelerate',
    description:
      'Growth programs and strategic coaching designed to help your business reach its next level — faster.',
    bgImage: `${DIVISION_BG_BASE}/Accelerate.jpg`,
    href: '/accelerate',
  },
  {
    id: 7,
    title: 'WOW Websites',
    description:
      'High-performance websites optimized for speed, search visibility, conversion, and long-term growth.',
    bgImage: `${DIVISION_BG_BASE}/Website 1.jpg`,
    href: '/websites',
  },
  {
    id: 8,
    title: 'WOW Impact',
    description:
      'Purpose-led initiatives and community programs that strengthen your brand and expand your reach.',
    bgImage: `${DIVISION_BG_BASE}/Impact.jpg`,
    href: '/impact',
  },
  {
    id: 9,
    title: 'WOW Host',
    description:
      'Secure, reliable hosting and infrastructure that keeps your business online, fast, and protected.',
    bgImage: `${DIVISION_BG_BASE}/Server.jpg`,
    href: '/host',
  },
  {
    id: 10,
    title: 'WOW Hub',
    description:
      'Your centralized command center for tools, training, collaboration, and seamless team execution.',
    bgImage: `${DIVISION_BG_BASE}/Education.jpg`,
    href: '/hub',
  },
]

function renderDivisionTitle(title: string) {
  return renderWowInTitle(title)
}

function DivisionPreviewImages({
  items,
  activeBgId,
  className = '',
}: {
  items: DevisionOverviewItem[]
  activeBgId: number
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate ${className}`}
    >
      {items.map((item) =>
        item.bgImage ? (
          <Image
            key={item.id}
            src={item.bgImage}
            alt=""
            fill
            priority={item.id <= 2}
            sizes="(max-width: 767px) 180px, (max-width: 1280px) 320px, 540px"
            className={`
              absolute inset-0
              h-full w-full
              object-contain object-center
              transition-opacity duration-500
              ease-in-out
              ${
                activeBgId === item.id
                  ? 'opacity-100'
                  : 'opacity-0'
              }
            `}
          />
        ) : null
      )}
    </div>
  )
}

const DevisionOverview = ({
  divisions: divisionsProp,
}: DevisionOverviewProps) => {
  const divisionsData = divisionsProp ?? divisions

  const [hoveredId, setHoveredId] =
    useState<number | null>(null)

  const [activeCardId, setActiveCardId] =
    useState<number>(divisionsData[0]?.id ?? 1)

  const cardRefs =
    useRef<Record<number, HTMLElement | null>>({})

  const sectionElementRef =
    useRef<HTMLDivElement | null>(null)

  const updateFrameRef =
    useRef<number | null>(null)

  const scrollProgressRef = useRef(0)

  const isScrollingRef = useRef(false)

  const idleTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null)

  const updateActiveCardFromPosition = useCallback(() => {
    const section = sectionElementRef.current

    if (!section || divisionsData.length === 0) {
      return
    }

    const rect = section.getBoundingClientRect()
    const isMobile = window.innerWidth < 768

    // On laptops, start by highlighting the
    // left-hand card and gradually move the
    // focus toward the center near the end.
    // On mobile, focus stays at the center.
    const progress = scrollProgressRef.current

    const endBlend = Math.max(
      0,
      Math.min(1, (progress - 0.65) / 0.35)
    )

    const focusRatio = isMobile
      ? 0.5
      : 0.22 + endBlend * 0.28

    const focusX =
      rect.left + rect.width * focusRatio

    let closestId = divisionsData[0].id
    let closestDistance = Infinity

    for (const item of divisionsData) {
      const card = cardRefs.current[item.id]

      if (!card) continue

      const cardRect = card.getBoundingClientRect()

      const centerX =
        cardRect.left + cardRect.width / 2

      const distance = Math.abs(
        centerX - focusX
      )

      if (distance < closestDistance) {
        closestDistance = distance
        closestId = item.id
      }
    }

    setActiveCardId((previous) =>
      previous === closestId
        ? previous
        : closestId
    )
  }, [divisionsData])

  const scheduleActiveCardUpdate =
    useCallback(() => {
      if (updateFrameRef.current !== null) return

      updateFrameRef.current = requestAnimationFrame(
        () => {
          updateFrameRef.current = null
          updateActiveCardFromPosition()
        }
      )
    }, [updateActiveCardFromPosition])

  const handleScrollUpdate = useCallback(
    (progress: number) => {
      scrollProgressRef.current = progress

      scheduleActiveCardUpdate()

      isScrollingRef.current = true

      setHoveredId((previous) =>
        previous === null ? previous : null
      )

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }

      idleTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 200)
    },
    [scheduleActiveCardUpdate]
  )

  const { contentRef, triggerRef } =
    useHorizontalScroll({
      minWidth: 0,
      offset: 0,
      extraScroll: 0,
      duration: 1,
      scrub: 0.8,

      // No firstItemFocusRatio:
      // First card stays at its natural position.
      lastItemFocusRatio: 0.5,

      onUpdate: (progress) => {
        handleScrollUpdate(progress)
      },

      onPinReady: () => {
        scheduleActiveCardUpdate()
      },
    })

  useEffect(() => {
    sectionElementRef.current = triggerRef.current

    scheduleActiveCardUpdate()
  }, [triggerRef, scheduleActiveCardUpdate])

  useEffect(() => {
    const handleResize = () => {
      scheduleActiveCardUpdate()
    }

    window.addEventListener(
      'resize',
      handleResize,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )

      if (updateFrameRef.current !== null) {
        cancelAnimationFrame(updateFrameRef.current)
      }

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [scheduleActiveCardUpdate])

  const handleCardPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch') return
      if (isScrollingRef.current) return

      const card = (
        event.target as Element
      ).closest('[data-card-id]')

      if (!card) return

      const id = Number(
        (card as HTMLElement).dataset.cardId
      )

      if (!Number.isNaN(id)) {
        setHoveredId(id)
      }
    },
    []
  )

  const activeBgId = hoveredId ?? activeCardId

  return (
    <section
      className={`
        relative w-full min-w-0
        ${DIVISIONS_SECTION_BG}
      `}
    >
      {/* PINNED SECTION */}
      <div
        ref={triggerRef}
        aria-labelledby="divisions-heading"
        className={`
          service-section
          relative flex w-full min-w-0
          flex-col justify-between
          overflow-visible
          min-h-[100svh]
          ${DIVISIONS_SECTION_BG}
        `}
      >
        {/* HEADER */}
        <div
          className="
            relative z-10
            w-full shrink-0

            px-5 pt-8
            sm:px-8 sm:pt-10
            md:px-10 md:pt-10
            lg:px-12 lg:pt-12
            xl:px-16 xl:pt-14
            2xl:px-20 2xl:pt-20
          "
        >
          <div
            className="
              mx-auto flex
              w-full max-w-[1440px]
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
              sm:gap-6
              lg:gap-8
            "
          >
            {/* HEADING */}
            <div
              className="
                relative z-20
                w-full shrink-0
                md:w-[58%]
                lg:w-[56%]
                xl:w-[55%]
              "
            >
              <RevealWrapper>
                <SectionLabel
                  className="
                    mb-3
                    sm:mb-4
                    lg:mb-5
                    dark:bg-[#15151533]
                    dark:text-[#0D0D0D]
                  "
                >
                  Divisions Overview
                </SectionLabel>
              </RevealWrapper>

              <TextAppearAnimation>
                <h2
                  id="divisions-heading"
                  className="
                    text-appear
                    text-left
                    text-[#1a1a1a]
                    dark:text-[#1a1a1a]
                    dark:[&_.word]:text-[#1a1a1a]
                    dark:[&_.font-instrument_.word]:!text-transparent

                    !text-[clamp(2rem,4.7vw,5.75rem)]
                    !leading-[1.13]
                    tracking-[-0.035em]
                  "
                >
                  Eleven Divisions.
                  <br />
                  One Growth{' '}
                  <span className="font-instrument italic">
                    Ecosystem.
                  </span>
                </h2>
              </TextAppearAnimation>
            </div>

            {/* DESKTOP IMAGE */}
            <div
              className="
                relative hidden
                md:flex
                w-full
                md:w-[42%]
                lg:w-[44%]
                xl:w-[45%]
                min-w-0
                items-center justify-center
                overflow-visible
              "
            >
              <DivisionPreviewImages
                items={divisionsData}
                activeBgId={activeBgId}
                className="
                  w-full
                  h-[clamp(150px,22vh,360px)]
                  xl:h-[clamp(190px,26vh,420px)]
                "
              />
            </div>

            {/* MOBILE IMAGE */}
            <div
              className="
                relative flex
                w-full justify-center
                overflow-visible
                md:hidden
              "
            >
              <DivisionPreviewImages
                items={divisionsData}
                activeBgId={activeBgId}
                className="
                  h-[clamp(90px,17svh,150px)]
                  w-[180px]
                  sm:w-[220px]
                "
              />
            </div>
          </div>
        </div>

        {/* HORIZONTAL CARDS */}
        <div
          ref={contentRef}
          aria-label="WOW Superagency divisions"
          onPointerMove={handleCardPointerMove}
          onPointerLeave={() => setHoveredId(null)}
          className="
            service-wrapper
            relative z-10
            flex w-max max-w-none
            shrink-0 flex-nowrap
            items-stretch

            gap-4
            pl-5 pr-[50vw]
            pb-6 pt-4

            sm:pl-8 sm:gap-5
            md:mt-auto md:pl-10
            md:pb-7 md:pt-4
            lg:pl-12 lg:gap-5 lg:pb-8
            xl:pl-16 xl:gap-6 xl:pb-10
            2xl:pl-20 2xl:pb-12

            overflow-visible
            will-change-transform
          "
        >
          {divisionsData.map((item) => {
            const isActive =
              activeBgId === item.id

            return (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                className={`
                  group relative flex
                  shrink-0

                  w-[min(85vw,340px)]
                  sm:w-[340px]
                  md:w-[clamp(280px,28vw,420px)]
                  xl:w-[clamp(360px,32vw,510px)]
                  2xl:w-[clamp(450px,33vw,590px)]

                  rounded-radius-sm
                  border-t-2
                  transition-transform
                  duration-500

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#8b7cff]

                  ${
                    isActive
                      ? 'z-10 scale-[1.01] border-white'
                      : 'z-0 scale-100 border-transparent'
                  }
                `}
              >
                <article
                  ref={(el) => {
                    cardRefs.current[item.id] = el
                  }}
                  data-card-id={item.id}
                  className={`
                    relative flex
                    h-full w-full flex-col
                    rounded-radius-sm

                    min-h-[210px]
                    sm:min-h-[240px]
                    md:min-h-[clamp(220px,34vh,310px)]
                    xl:min-h-[clamp(260px,38vh,360px)]

                    p-5
                    sm:p-6
                    md:p-6
                    lg:p-7
                    xl:p-8
                    2xl:p-9

                    transition-colors
                    duration-500

                    ${
                      isActive
                        ? 'bg-white dark:bg-[#121212]'
                        : 'bg-white/80 dark:bg-[#121212]/90'
                    }
                  `}
                >
                  {/* CARD TITLE */}
                  <h3
                    className="
                      pr-2
                      font-bold
                      tracking-[-0.025em]
                      leading-[1.12]
                      text-[#1a1a1a]
                      dark:text-white
                      text-[clamp(1.55rem,2.4vw,3rem)]
                    "
                  >
                    {renderDivisionTitle(item.title)}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3 flex-1
                      text-[#777777]
                      dark:text-[#888888]
                      text-[clamp(0.9rem,1.25vw,1.35rem)]
                      leading-[1.5]
                    "
                  >
                    {item.description}
                  </p>

                  {/* ACTIVE CARD ARROW */}
                  <div
                    className={`
                      mt-4
                      flex justify-end
                      transition-all duration-300

                      ${
                        isActive
                          ? 'scale-100 opacity-100'
                          : 'pointer-events-none scale-90 opacity-0'
                      }
                    `}
                    aria-hidden={!isActive}
                  >
                    <span
                      className="
                        flex shrink-0
                        items-center justify-center
                        rounded-radius-sm
                        bg-[#8b7cff]
                        text-white

                        size-11
                        sm:size-12
                        lg:size-14
                        xl:size-16
                      "
                    >
                      <ArrowUpRight
                        className="
                          size-6
                          sm:size-7
                          xl:size-8
                          shrink-0
                          text-white
                          stroke-white
                        "
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DevisionOverview
