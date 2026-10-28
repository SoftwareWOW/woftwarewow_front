
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

if (typeof window !== 'undefined') {
  ScrollTrigger.config({ ignoreMobileResize: true })
}

interface HorizontalScrollOptions {
  offset?: number
  duration?: number
  ease?: string
  start?: string
  markers?: boolean
  scrub?: number | boolean
  extraScroll?: number
  minWidth?: number
  maxPinWidth?: number
  firstItemFocusRatio?: number
  lastItemFocusRatio?: number
  refreshKey?: string
  onAnimationCreated?: (
    animation: gsap.core.Tween,
    trigger: ScrollTrigger
  ) => void
  onUpdate?: (
    progress: number,
    trigger: ScrollTrigger
  ) => void
  onPinReady?: () => void
}

export default function useHorizontalScroll(
  options: HorizontalScrollOptions = {}
) {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const callbacksRef = useRef({
    onUpdate: options.onUpdate,
    onPinReady: options.onPinReady,
    onAnimationCreated: options.onAnimationCreated,
  })

  useEffect(() => {
    callbacksRef.current = {
      onUpdate: options.onUpdate,
      onPinReady: options.onPinReady,
      onAnimationCreated: options.onAnimationCreated,
    }
  }, [
    options.onUpdate,
    options.onPinReady,
    options.onAnimationCreated,
  ])

  const {
    offset = 0,
    duration = 1,
    ease = 'none',
    start = 'top top',
    markers = false,
    scrub = 0.8,
    extraScroll = 0,
    minWidth = 0,
    maxPinWidth,
    firstItemFocusRatio,
    lastItemFocusRatio = 0.5,
    refreshKey = '',
  } = options

  useGSAP(
    () => {
      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger) return

      const mm = gsap.matchMedia()

      mm.add(
        `(min-width: ${Math.max(0, minWidth)}px)`,
        () => {
          const viewportWidth = () => {
            const width =
              trigger.clientWidth || window.innerWidth

            return maxPinWidth
              ? Math.min(width, maxPinWidth)
              : width
          }

          const getStartX = () => {
            const first =
              content.firstElementChild as HTMLElement | null

            if (
              !first ||
              firstItemFocusRatio == null
            ) {
              return 0
            }

            const center =
              first.offsetLeft + first.offsetWidth / 2

            const target =
              viewportWidth() * firstItemFocusRatio

            return Math.max(0, target - center)
          }

          const getEndX = () => {
            const last =
              content.lastElementChild as HTMLElement | null

            if (!last) return getStartX()

            const width = viewportWidth()

            const maximumScroll = Math.max(
              0,
              content.scrollWidth - width
            )

            if (maximumScroll <= 0) {
              return getStartX()
            }

            const lastCenter =
              last.offsetLeft + last.offsetWidth / 2

            const requiredScroll =
              lastCenter -
              width * lastItemFocusRatio +
              offset +
              extraScroll

            const distance = gsap.utils.clamp(
              0,
              maximumScroll,
              requiredScroll
            )

            return Math.min(getStartX(), -distance)
          }

          const getDistance = () =>
            Math.abs(getEndX() - getStartX())

          gsap.set(content, {
            x: getStartX(),
            force3D: true,
          })

          let scrollTrigger: ScrollTrigger | undefined

          const notify = () => {
            if (!scrollTrigger) return

            callbacksRef.current.onUpdate?.(
              scrollTrigger.progress,
              scrollTrigger
            )
          }

          // Update on the actual animation frames,
          // including smooth scrub movement.
          const animation = gsap.fromTo(
            content,
            { x: getStartX },
            {
              x: getEndX,
              ease,
              duration,
              immediateRender: false,
              force3D: true,
              onUpdate: notify,
            }
          )

          scrollTrigger = ScrollTrigger.create({
            trigger,
            start,
            end: () =>
              `+=${Math.max(getDistance(), 1)}`,
            pin: true,
            pinSpacing: true,
            animation,
            scrub,
            markers,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: notify,
            onRefresh: () => {
              notify()
              callbacksRef.current.onPinReady?.()
            },
            onToggle: () => {
              notify()
              callbacksRef.current.onPinReady?.()
            },
          })

          callbacksRef.current.onAnimationCreated?.(
            animation,
            scrollTrigger
          )

          notify()
          callbacksRef.current.onPinReady?.()

          let refreshFrame = 0

          const refresh = () => {
            cancelAnimationFrame(refreshFrame)

            refreshFrame = requestAnimationFrame(() => {
              ScrollTrigger.refresh()
              notify()
            })
          }

          // Watch layout changes without continuously
          // refreshing during horizontal transforms.
          const observer = new ResizeObserver(refresh)
          observer.observe(content)

          let previousWidth = window.innerWidth

          const onResize = () => {
            if (window.innerWidth !== previousWidth) {
              previousWidth = window.innerWidth
              refresh()
            }
          }

          window.addEventListener(
            'resize',
            onResize,
            { passive: true }
          )

          window.addEventListener(
            'orientationchange',
            refresh
          )

          const firstFrame =
            requestAnimationFrame(refresh)

          return () => {
            cancelAnimationFrame(firstFrame)
            cancelAnimationFrame(refreshFrame)

            observer.disconnect()

            window.removeEventListener(
              'resize',
              onResize
            )

            window.removeEventListener(
              'orientationchange',
              refresh
            )

            scrollTrigger?.kill()
            animation.kill()

            gsap.set(content, {
              clearProps: 'transform',
            })
          }
        }
      )

      return () => mm.revert()
    },
    {
      scope: triggerRef,
      dependencies: [
        offset,
        duration,
        ease,
        start,
        markers,
        scrub,
        extraScroll,
        minWidth,
        maxPinWidth,
        firstItemFocusRatio,
        lastItemFocusRatio,
        refreshKey,
      ],
      revertOnUpdate: true,
    }
  )

  return { contentRef, triggerRef }
}
