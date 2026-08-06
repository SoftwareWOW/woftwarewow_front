'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { renderWowInTitle } from '@/components/wow/shared/WowText'
import { cn } from '@/lib/utils'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

const DIVISION_BG_BASE = '/images/wow/Hero/devision'

/** Viewport X ratio used to pick the focused card (left side, first card on entry). */
const FOCUS_X_RATIO = 0.22

const divisions = [
  {
    id: 1,
    title: 'SoftwareWOW',
    description:
      'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
    bgImage: `${DIVISION_BG_BASE}/Mockup 2 Dark.png`,
    href: '/softwarewow',
  },
  {
    id: 2,
    title: 'WOW Marketing',
    description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
    bgImage: `${DIVISION_BG_BASE}/Image-copy-scaled.jpeg`,
    href: '/wowmarketing',
  },
  {
    id: 3,
    title: 'WOW Design',
    description:
      'Brand identity and visual systems that make your business memorable, credible, and impossible to ignore.',
    bgImage: `${DIVISION_BG_BASE}/Design 1.jpg`,
    href: '/wowdesign',
  },
  {
    id: 4,
    title: 'WOW Intelligence',
    description: 'AI solutions and automation that sharpen decisions, reduce manual work, and accelerate results.',
    bgImage: `${DIVISION_BG_BASE}/Intelligence.jpg`,
    href: '/wowintelligence',
  },
  {
    id: 5,
    title: 'WOW Social',
    description:
      'Social strategy and community building that turns followers into customers and customers into advocates.',
    bgImage: `${DIVISION_BG_BASE}/Events (1).jpg`,
    href: '/wowsocial',
  },
  {
    id: 6,
    title: 'WOW Accelerate',
    description: 'Growth programs and strategic coaching designed to help your business reach its next level — faster.',
    bgImage: `${DIVISION_BG_BASE}/Accelerate.jpg`,
    href: '/wowaccelerate',
  },
  {
    id: 7,
    title: 'WOW Websites',
    description:
      'High-performance websites optimized for speed, search visibility, conversion, and long-term growth.',
    bgImage: `${DIVISION_BG_BASE}/Website 1.jpg`,
    href: '/wowwebsites',
  },
  {
    id: 8,
    title: 'WOW Impact',
    description: 'Purpose-led initiatives and community programs that strengthen your brand and expand your reach.',
    bgImage: `${DIVISION_BG_BASE}/Impact.jpg`,
    href: '/wowimpact',
  },
  {
    id: 9,
    title: 'WOW Host',
    description: 'Secure, reliable hosting and infrastructure that keeps your business online, fast, and protected.',
    bgImage: `${DIVISION_BG_BASE}/Server.jpg`,
    href: '/wowhost',
  },
  {
    id: 10,
    title: 'WOW Hub',
    description: 'Your centralized command center for tools, training, collaboration, and seamless team execution.',
    bgImage: `${DIVISION_BG_BASE}/Education.jpg`,
    href: '/wowhub',
  },
]

function renderDivisionTitle(title: string) {
  return renderWowInTitle(title)
}

const DevisionOverview = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeCardId, setActiveCardId] = useState<number>(1)
  const cardRefs = useRef<Record<number, HTMLElement | null>>({})
  const scrollUpdateRef = useRef<() => void>(() => {})

  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 80,
    minWidth: 0,
    lastItemFocusRatio: FOCUS_X_RATIO,
    onUpdate: () => {
      scrollUpdateRef.current()
    },
    onAnimationCreated: () => {
      const trigger = triggerRef.current
      if (!trigger) return

      trigger.style.overflow = 'visible'

      const pinSpacer = trigger.parentElement
      if (pinSpacer?.classList.contains('pin-spacer')) {
        pinSpacer.style.overflow = 'visible'
      }
    },
  })

  const updateActiveCardFromPosition = useCallback(() => {
    const section = triggerRef.current
    const sectionRect = section?.getBoundingClientRect()
    const focusX = sectionRect
      ? sectionRect.left + sectionRect.width * FOCUS_X_RATIO
      : window.innerWidth * FOCUS_X_RATIO
    let closestId = 1
    let closestDistance = Infinity

    for (const item of divisions) {
      const el = cardRefs.current[item.id]
      if (!el) continue

      const rect = el.getBoundingClientRect()
      const cardCenterX = rect.left + rect.width / 2
      const distance = Math.abs(cardCenterX - focusX)

      if (distance < closestDistance) {
        closestDistance = distance
        closestId = item.id
      }
    }

    setActiveCardId((prev) => (prev === closestId ? prev : closestId))
  }, [triggerRef])

  useEffect(() => {
    scrollUpdateRef.current = updateActiveCardFromPosition
  }, [updateActiveCardFromPosition])

  useEffect(() => {
    updateActiveCardFromPosition()

    const handleResize = () => updateActiveCardFromPosition()
    window.addEventListener('resize', handleResize, { passive: true })

    return () => window.removeEventListener('resize', handleResize)
  }, [updateActiveCardFromPosition])

  const activeBgId = hoveredId ?? activeCardId

  return (
    <section className="relative w-full overflow-visible">
      <div
        ref={triggerRef}
        className="service-section relative z-10 flex min-h-[100svh] w-full flex-col overflow-visible"
        aria-labelledby="divisions-heading"
        onMouseLeave={() => setHoveredId(null)}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[#ebe6f4] transition-colors duration-500 dark:bg-[#0a0a0a]"
        />

        {divisions.map((item) => (
          <div
            key={item.id}
            aria-hidden
            className={`absolute inset-0 transition-opacity duration-700 ${
              activeBgId === item.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.bgImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={item.id <= 2}
            />
          </div>
        ))}

        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeBgId !== null ? 'bg-black/60' : 'bg-black/40'
          }`}
        />

        {/* Header Section */}
        <div className="relative z-10 px-5 pt-24 sm:px-10 md:px-16 md:pt-28 lg:px-20 lg:pt-32">
          <div className="mx-auto flex w-full max-w-[1320px] items-start justify-between gap-6">
            <div className="max-w-3xl">
              <RevealWrapper>
                <SectionLabel
                  className={cn(
                    'mb-4 transition-colors duration-500 md:mb-5',
                    activeBgId !== null && '!bg-white/15 !text-white/90',
                  )}
                >
                  Divisions Overview
                </SectionLabel>
              </RevealWrapper>

              <TextAppearAnimation>
                <h2
                  id="divisions-heading"
                  className={`text-appear text-left transition-colors duration-500 max-md:text-4xl max-sm:text-3xl ${
                    activeBgId !== null ? 'text-white' : 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                  }`}
                >
                  Eleven Divisions. <br />
                  One Growth{' '}
                  <span className="font-instrument italic">Ecosystem.</span>
                </h2>
              </TextAppearAnimation>
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          className="service-wrapper relative z-10 mt-auto flex w-max flex-nowrap items-end gap-4 overflow-visible px-5 pb-8 pe-[max(5rem,18vw)] pt-6 sm:gap-5 sm:px-10 sm:pb-10 md:gap-6 md:px-16 md:pb-12 lg:px-20 lg:pb-14"
          aria-label="WOW Superagency divisions"
        >
          {divisions.map((item) => {
            const isActive = activeBgId === item.id

            return (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-[82vw] shrink-0 overflow-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cff] focus-visible:ring-offset-2 sm:w-[320px] md:w-[340px] lg:w-[360px]"
                onMouseEnter={() => setHoveredId(item.id)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
              >
                <article
                  ref={(el) => {
                    cardRefs.current[item.id] = el
                  }}
                  data-card-id={item.id}
                  className={`relative flex min-h-[220px] flex-col overflow-visible rounded-radius-sm p-6 transition-all duration-500 will-change-transform sm:min-h-[240px] md:min-h-[260px] md:p-7 lg:min-h-[280px] lg:p-8 ${
                    isActive
                      ? 'scale-[1.02] bg-white dark:bg-[#121212]'
                      : 'scale-100 bg-white/80 dark:bg-[#121212]/90'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-black transition-opacity duration-300 dark:bg-white ${
                      isActive ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <h3 className="pr-4 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] md:text-[1.65rem] dark:text-white">
                    {renderDivisionTitle(item.title)}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-[#777777] md:text-[16px] dark:text-[#888888]">
                    {item.description}
                  </p>

                  <div
                    className={`absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-radius-sm bg-[#8b7cff] !text-white transition-all duration-300 ${
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'pointer-events-none scale-90 opacity-0'
                    }`}
                    aria-hidden={!isActive}
                  >
                    <ArrowUpRight className="h-5 w-5 shrink-0 stroke-white text-white" strokeWidth={2} color="#ffffff" />
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