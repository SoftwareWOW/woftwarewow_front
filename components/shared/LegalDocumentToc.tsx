'use client'

import type { LegalDocumentSection } from '@/components/shared/legal-document-types'
import { cn } from '@/utils/cn'
import { useLenis } from 'lenis/react'
import { useCallback, useLayoutEffect, useRef, useState, type RefObject } from 'react'

const DESKTOP_MQ = '(min-width: 1024px)'
const WIDE_MQ = '(min-width: 1280px)'
const TOC_TOP_PX = 112

type Placement = { left: number; width: number; top: number; show: boolean }

type LegalDocumentTocProps = {
  sections: readonly LegalDocumentSection[]
  activeSectionId: string
  anchorRef: RefObject<HTMLElement | null>
  boundsRef: RefObject<HTMLElement | null>
}

/** Fixed TOC — Lenis/transform parents break `position: sticky`. */
export default function LegalDocumentToc({
  sections,
  activeSectionId,
  anchorRef,
  boundsRef,
}: LegalDocumentTocProps) {
  const lenis = useLenis()
  const navRef = useRef<HTMLElement | null>(null)
  const updateRef = useRef<() => void>(() => {})
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const [placement, setPlacement] = useState<Placement | null>(null)

  useLayoutEffect(() => {
    const desktopMq = window.matchMedia(DESKTOP_MQ)

    const update = () => {
      if (!desktopMq.matches || !anchorRef.current) {
        setPlacement((prev) => (prev === null ? prev : null))
        return
      }
      const { left } = anchorRef.current.getBoundingClientRect()
      const width = window.matchMedia(WIDE_MQ).matches ? 260 : 240

      let top = TOC_TOP_PX
      let show = true
      const boundsEl = boundsRef.current
      const navEl = navRef.current

      if (boundsEl) {
        const bounds = boundsEl.getBoundingClientRect()
        show = bounds.top < window.innerHeight && bounds.bottom > TOC_TOP_PX

        if (bounds.top > top) {
          top = bounds.top
        }

        if (navEl) {
          const tocHeight = navEl.getBoundingClientRect().height
          const bottomLimit = bounds.bottom - tocHeight
          if (bottomLimit < top) {
            top = Math.max(bounds.top, bottomLimit)
          }
        }
      }

      setPlacement((prev) => {
        if (
          prev &&
          prev.left === left &&
          prev.width === width &&
          prev.top === top &&
          prev.show === show
        ) {
          return prev
        }
        return { left, width, top, show }
      })
    }

    updateRef.current = update
    update()

    window.addEventListener('resize', update)
    lenis?.on('scroll', update)

    const ro = new ResizeObserver(update)
    resizeObserverRef.current = ro
    if (boundsRef.current) ro.observe(boundsRef.current)
    const navEl = navRef.current
    if (navEl) ro.observe(navEl)

    return () => {
      window.removeEventListener('resize', update)
      lenis?.off('scroll', update)
      ro.disconnect()
      resizeObserverRef.current = null
    }
  }, [anchorRef, boundsRef, lenis])

  const setNavRef = useCallback((node: HTMLElement | null) => {
    const prev = navRef.current
    if (prev === node) return
    navRef.current = node

    const ro = resizeObserverRef.current
    if (ro) {
      if (prev) ro.unobserve(prev)
      if (node) ro.observe(node)
    }

    if (node) updateRef.current()
  }, [])

  if (!placement?.show) return null

  return (
    <nav
      ref={setNavRef}
      aria-label="On this page"
      className={cn(
        'fixed z-[25] hidden max-h-[calc(100dvh-7.5rem)] overflow-y-auto overscroll-contain',
        'bg-background pr-2 dark:bg-[#151515] lg:block [scrollbar-width:thin]',
      )}
      style={{
        top: placement.top,
        left: placement.left,
        width: placement.width,
      }}
    >
      <p className="mb-4 font-outfit text-xs font-medium uppercase tracking-[0.18em] text-colorText/70 dark:text-dark-100/70">
        On this page
      </p>
      <ol className="space-y-2 border-l border-[#1515151A] pl-4 dark:border-[#EDF0F51A]">
        {sections.map((section) => {
          const isActive = activeSectionId === section.id
          return (
            <li
              key={section.id}
              className={cn(
                '-ml-px border-l-2 pl-[calc(1rem-2px)] transition-colors',
                isActive ? 'border-primary' : 'border-transparent',
              )}
            >
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'block py-0.5 font-outfit text-sm leading-snug transition-colors',
                  isActive ?
                    'font-medium text-primary dark:text-primary'
                  : 'font-light text-colorText hover:text-primary dark:text-dark-100 dark:hover:text-primary',
                )}
              >
                <span
                  className={cn(
                    'mr-1.5 text-xs',
                    isActive ? 'text-primary/80 dark:text-primary/80' : 'text-colorText/50 dark:text-dark-100/50',
                  )}
                >
                  {section.num}
                </span>
                {section.title}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
