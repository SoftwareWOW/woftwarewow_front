
'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { renderWowInTitle } from '@/components/wow/shared/WowText'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import type { PointerEvent } from 'react'

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

function DivisionPreviewImages({
  items,
  activeBgId,
  className = '',
  desktop = false,
}: {
  items: DevisionOverviewItem[]
  activeBgId: number
  className?: string
  desktop?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate min-h-0 min-w-0 ${className}`}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`
            pointer-events-none absolute inset-0
            transition-opacity duration-500 ease-in-out
            ${
              activeBgId === item.id
                ? 'z-10 opacity-100'
                : 'z-0 opacity-0'
            }
          `}
        >
          <Image
            src={item.bgImage}
            alt=""
            fill
            priority={item.id <= 2}
            sizes={
              desktop
                ? '(max-width: 1023px) 42vw, (max-width: 1535px) 45vw, 720px'
                : '(max-width: 767px) 220px, 180px'
            }
            className="object-contain object-center"
          />
        </div>
      ))}
    </div>
  )
}

function DevisionOverviewContent({
  divisionsData,
  pathname,
}: {
  divisionsData: DevisionOverviewItem[]
  pathname: string
}) {
  const [hoveredId, setHoveredId] =
    useState<number | null>(null)

  const [activeCardId, setActiveCardId] =
    useState(divisionsData[0]?.id ?? 1)

  const cardRefs =
    useRef<Record<number, HTMLElement | null>>({})

  const updateFrameRef = useRef<number | null>(null)
  const scrollProgressRef = useRef(0)
  const isScrollingRef = useRef(false)

  const idleTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null)

  const sectionElementRef =
    useRef<HTMLDivElement | null>(null)

  const updateActiveCardFromPosition = useCallback(() => {
    const section = sectionElementRef.current

    if (!section || divisionsData.length === 0) return

    const rect = section.getBoundingClientRect()
    const isMobile = window.innerWidth < 768
    const progress = scrollProgressRef.current

    const endBlend = Math.max(
      0,
      Math.min(1, (progress - 0.65) / 0.35)
    )

    const focusRatio = isMobile
      ? 0.5
      : 0.22 + endBlend * 0.28

    const focusX = rect.left + rect.width * focusRatio

    let closestId = divisionsData[0].id
    let closestDistance = Infinity

    for (const item of divisionsData) {
      const card = cardRefs.current[item.id]
      if (!card) continue

      const cardRect = card.getBoundingClientRect()
      const centerX = cardRect.left + cardRect.width / 2
      const distance = Math.abs(centerX - focusX)

      if (distance < closestDistance) {
        closestDistance = distance
        closestId = item.id
      }
    }

    setActiveCardId((previous) =>
      previous === closestId ? previous : closestId
    )
  }, [divisionsData])

  const scheduleActiveCardUpdate = useCallback(() => {
    if (updateFrameRef.current !== null) return

    updateFrameRef.current = requestAnimationFrame(() => {
      updateFrameRef.current = null
      updateActiveCardFromPosition()
    })
  }, [updateActiveCardFromPosition])

  const handleScrollUpdate = useCallback(
    (progress: number) => {
      scrollProgressRef.current = progress
      scheduleActiveCardUpdate()

      isScrollingRef.current = true
      setHoveredId(null)

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
      lastItemFocusRatio: 0.5,
      refreshKey: pathname,
      onUpdate: handleScrollUpdate,
      onPinReady: scheduleActiveCardUpdate,
    })

  useEffect(() => {
    sectionElementRef.current = triggerRef.current
    scheduleActiveCardUpdate()
  }, [triggerRef, scheduleActiveCardUpdate])

  useEffect(() => {
    const onResize = () => scheduleActiveCardUpdate()

    window.addEventListener('resize', onResize, {
      passive: true,
    })

    const frame = requestAnimationFrame(
      scheduleActiveCardUpdate
    )

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)

      if (updateFrameRef.current !== null) {
        cancelAnimationFrame(updateFrameRef.current)
      }

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [scheduleActiveCardUpdate])

  const handleCardPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch') return
      if (isScrollingRef.current) return

      const card = (event.target as Element).closest(
        '[data-card-id]'
      )

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
      className={`relative w-full min-w-0 ${DIVISIONS_SECTION_BG}`}
    >
      {/* VIEWPORT-HEIGHT SECTION */}
      <div
        ref={triggerRef}
        aria-labelledby="divisions-heading"
        className={`
          service-section
          relative flex w-full min-w-0
          h-[100svh] min-h-[540px]
          flex-col
          overflow-visible
          ${DIVISIONS_SECTION_BG}
        `}
      >
        {/* HEADER FILLS REMAINING HEIGHT */}
        <div
          className="
            relative z-20
            flex min-h-0 flex-1
            w-full
            px-5 pt-6
            sm:px-8 sm:pt-8
            md:px-10 md:pt-8
            lg:px-12 lg:pt-10
            xl:px-16 xl:pt-12
            2xl:px-20 2xl:pt-14
          "
        >
          <div
            className="
              mx-auto grid h-full min-h-0
              w-full max-w-[1440px]
              grid-cols-1
              grid-rows-[auto_minmax(0,1fr)]
              gap-3

              md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]
              md:grid-rows-1
              md:items-center
              md:gap-4
              lg:gap-8
            "
          >
            {/* HEADING */}
            <div className="relative z-20 min-w-0">
              <RevealWrapper>
                <SectionLabel
                  className="
                    mb-2 sm:mb-3 lg:mb-4
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
                    text-appear text-left
                    text-[#1a1a1a] dark:text-[#1a1a1a]
                    dark:[&_.word]:text-[#1a1a1a]
                    dark:[&_.font-instrument_.word]:!text-transparent
                    !text-[clamp(1.85rem,min(4.6vw,7svh),5.5rem)]
                    !leading-[1.12]
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

            {/* IMAGE USES ONLY AVAILABLE SPACE */}
            <div
              className="
                relative flex
                h-full min-h-0 min-w-0
                items-center justify-center
                md:justify-end
              "
            >
              {/* MOBILE IMAGE */}
              <DivisionPreviewImages
                items={divisionsData}
                activeBgId={activeBgId}
                className="
                  h-full w-[180px]
                  max-h-[150px]
                  sm:w-[220px]
                  md:hidden
                "
              />

              {/* DESKTOP IMAGE */}
              <DivisionPreviewImages
                items={divisionsData}
                activeBgId={activeBgId}
                desktop
                className="
                  hidden md:block
                  h-full w-full
                  max-h-full
                  min-h-0
                "
              />
            </div>
          </div>
        </div>

        {/* CARD STRIP - HEIGHT RESERVED FIRST */}
        <div
          ref={contentRef}
          dir="ltr"
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
            pb-4 pt-3
            sm:pl-8 sm:gap-5
            md:pl-10 md:pb-5
            lg:pl-12 lg:gap-5
            xl:pl-16 xl:gap-6
            2xl:pl-20

            overflow-visible
            will-change-transform
          "
        >
          {divisionsData.map((item) => {
            const isActive = activeBgId === item.id

            return (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                className={`
                  group relative flex shrink-0

                  w-[min(85vw,340px)]
                  sm:w-[340px]
                  md:w-[clamp(280px,28vw,420px)]
                  xl:w-[clamp(360px,32vw,510px)]
                  2xl:w-[clamp(450px,33vw,590px)]

                  rounded-radius-sm border-t-2
                  transition-transform duration-500
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
                  dir="auto"
                  className={`
                    relative flex w-full flex-col
                    rounded-radius-sm

                    h-[clamp(200px,33svh,280px)]
                    md:h-[clamp(210px,35svh,310px)]
                    xl:h-[clamp(240px,37svh,340px)]

                    p-5 sm:p-6
                    md:p-6 lg:p-7
                    xl:p-8 2xl:p-9

                    transition-colors duration-500

                    ${
                      isActive
                        ? 'bg-white dark:bg-[#121212]'
                        : 'bg-white/80 dark:bg-[#121212]/90'
                    }
                  `}
                >
                  <h3
                    className="
                      pr-2 font-bold
                      leading-[1.12]
                      tracking-[-0.025em]
                      text-[#1a1a1a] dark:text-white
                      text-[clamp(1.4rem,2.4vw,3rem)]
                    "
                  >
                    {renderWowInTitle(item.title)}
                  </h3>

                  <p
                    className="
                      mt-3 flex-1
                      text-[#777777] dark:text-[#888888]
                      text-[clamp(0.875rem,1.25vw,1.35rem)]
                      leading-[1.5]
                    "
                  >
                    {item.description}
                  </p>

                  {/* ACTIVE CARD ARROW */}
                  <div
                    className={`
                      mt-3 flex justify-end
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
                        flex shrink-0 items-center
                        justify-center rounded-radius-sm
                        bg-[#8b7cff] text-white
                        size-10 sm:size-11
                        lg:size-12 xl:size-14
                      "
                    >
                      <ArrowUpRight
                        className="
                          size-5 shrink-0 stroke-white
                          sm:size-6 xl:size-7
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

const DevisionOverview = ({
  divisions: divisionsProp,
}: DevisionOverviewProps) => {
  const pathname = usePathname()

  return (
    <DevisionOverviewContent
      key={pathname ?? 'default'}
      pathname={pathname ?? ''}
      divisionsData={divisionsProp ?? divisions}
    />
  )
}

export default DevisionOverview
