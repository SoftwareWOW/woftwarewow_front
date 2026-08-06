'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true })
}

interface HorizontalScrollOptions {
  offset?: number
  duration?: number
  ease?: string
  start?: string
  markers?: boolean
  scrub?: number | boolean
  onAnimationCreated?: (animation: gsap.core.Tween, scrollTrigger: ScrollTrigger) => void
  onUpdate?: (progress: number, scrollTrigger: ScrollTrigger) => void
  extraScroll?: number
  /** Minimum viewport width (px) to enable horizontal pin. Use 0 to enable on all devices. */
  minWidth?: number
  /** Keep pinned section width capped and centered on large screens. */
  maxPinWidth?: number
  /** Scroll until the last item's center reaches this viewport width ratio (0–1). */
  lastItemFocusRatio?: number
}

const useHorizontalScroll = (options: HorizontalScrollOptions = {}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const onUpdateRef = useRef(options.onUpdate)
  const onAnimationCreatedRef = useRef(options.onAnimationCreated)

  useEffect(() => {
    onUpdateRef.current = options.onUpdate
    onAnimationCreatedRef.current = options.onAnimationCreated
  }, [options.onUpdate, options.onAnimationCreated])

  const {
    offset = 60,
    duration = 2,
    ease = 'none',
    start = 'top top',
    markers = false,
    scrub = 1,
    extraScroll = 370,
    minWidth = 600,
    maxPinWidth,
    lastItemFocusRatio,
  } = options

  useGSAP(
    () => {
      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger) return

      const mm = gsap.matchMedia()

      mm.add(`(min-width: ${minWidth}px)`, () => {
        const getViewportWidth = () => {
          if (maxPinWidth) {
            const parentWidth = trigger.parentElement?.clientWidth ?? window.innerWidth
            return Math.min(maxPinWidth, parentWidth)
          }
          return trigger.clientWidth
        }

        const getScrollAmount = () => {
          const contentWidth = content.scrollWidth
          const viewportWidth = getViewportWidth()
          let distance = contentWidth - viewportWidth

          if (lastItemFocusRatio != null) {
            const lastChild = content.lastElementChild as HTMLElement | null

            if (lastChild) {
              const lastCenter = lastChild.offsetLeft + lastChild.offsetWidth / 2
              const focusX = viewportWidth * lastItemFocusRatio
              distance = Math.max(distance, lastCenter - focusX)
            }
          }

          distance += offset + extraScroll

          return distance > 0 ? -distance : 0
        }

        const syncPinnedLayout = (scrollTrigger: ScrollTrigger) => {
          if (!maxPinWidth || !scrollTrigger.isActive) return

          const parentRect = trigger.parentElement?.getBoundingClientRect()
          const availableWidth = parentRect?.width ?? window.innerWidth
          const width = Math.min(maxPinWidth, availableWidth)
          const left = parentRect
            ? parentRect.left + (parentRect.width - width) / 2
            : (window.innerWidth - width) / 2

          gsap.set(trigger, {
            width,
            maxWidth: maxPinWidth,
            left,
          })
        }

        const animation = gsap.to(content, {
          x: getScrollAmount,
          duration,
          ease,
        })

        const scrollTrigger = ScrollTrigger.create({
          trigger,
          start,
          end: () => {
            const distance = Math.abs(getScrollAmount())
            return distance > 0 ? `+=${distance + getViewportWidth() * 0.1}` : '+=1'
          },
          pin: true,
          pinSpacing: true,
          animation,
          scrub,
          invalidateOnRefresh: true,
          markers,
          anticipatePin: 1,
          onUpdate: (self) => {
            onUpdateRef.current?.(self.progress, self)
            syncPinnedLayout(self)
          },
          onRefresh: (self) => {
            animation.vars.x = getScrollAmount()
            syncPinnedLayout(self)
          },
          onToggle: (self) => {
            syncPinnedLayout(self)
          },
        })

        onUpdateRef.current?.(scrollTrigger.progress, scrollTrigger)
        onAnimationCreatedRef.current?.(animation, scrollTrigger)

        const refreshScrollTrigger = () => {
          ScrollTrigger.refresh()
        }

        const handleOrientationChange = () => {
          window.setTimeout(refreshScrollTrigger, 350)
        }

        window.addEventListener('resize', refreshScrollTrigger)
        window.addEventListener('orientationchange', handleOrientationChange)

        requestAnimationFrame(refreshScrollTrigger)

        return () => {
          animation.kill()
          scrollTrigger.kill()
          window.removeEventListener('resize', refreshScrollTrigger)
          window.removeEventListener('orientationchange', handleOrientationChange)
        }
      })

      return () => {
        mm.revert()
      }
    },
    {
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll, minWidth, maxPinWidth, lastItemFocusRatio],
      scope: triggerRef,
    },
  )

  return {
    contentRef,
    triggerRef,
  }
}

export default useHorizontalScroll
