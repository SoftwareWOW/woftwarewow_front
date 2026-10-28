
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

if (typeof window !== 'undefined') {
  ScrollTrigger.config({
    ignoreMobileResize: true,
  })
}

interface HorizontalScrollOptions {
  offset?: number
  duration?: number
  ease?: string
  start?: string
  markers?: boolean
  scrub?: number | boolean
  onAnimationCreated?: (
    animation: gsap.core.Tween,
    scrollTrigger: ScrollTrigger
  ) => void
  onUpdate?: (
    progress: number,
    scrollTrigger: ScrollTrigger
  ) => void
  onPinReady?: () => void
  extraScroll?: number
  minWidth?: number
  maxPinWidth?: number
  lastItemFocusRatio?: number
  firstItemFocusRatio?: number
}

export default function useHorizontalScroll(
  options: HorizontalScrollOptions = {}
) {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const callbacksRef = useRef({
    onUpdate: options.onUpdate,
    onAnimationCreated: options.onAnimationCreated,
    onPinReady: options.onPinReady,
  })

  useEffect(() => {
    callbacksRef.current = {
      onUpdate: options.onUpdate,
      onAnimationCreated: options.onAnimationCreated,
      onPinReady: options.onPinReady,
    }
  }, [
    options.onUpdate,
    options.onAnimationCreated,
    options.onPinReady,
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
    lastItemFocusRatio = 0.5,
    firstItemFocusRatio,
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
          const getViewportWidth = () => {
            const width =
              trigger.clientWidth || window.innerWidth

            return maxPinWidth
              ? Math.min(width, maxPinWidth)
              : width
          }

          const getStartX = () => {
            // Keep the first card at its natural
            // left padding position.
            // This prevents mobile clipping.
            if (firstItemFocusRatio == null) {
              return 0
            }

            const first =
              content.firstElementChild as HTMLElement | null

            if (!first) return 0

            const firstCenter =
              first.offsetLeft + first.offsetWidth / 2

            const focusX =
              getViewportWidth() * firstItemFocusRatio

            // Never move the first card off-screen.
            return Math.max(
              0,
              focusX - firstCenter
            )
          }

          const getEndX = () => {
            const last =
              content.lastElementChild as HTMLElement | null

            if (!last) return getStartX()

            const viewportWidth = getViewportWidth()

            const contentWidth = content.scrollWidth

            const maxDistance = Math.max(
              0,
              contentWidth - viewportWidth
            )

            if (maxDistance <= 0) {
              return getStartX()
            }

            // Align the LAST CARD CENTER to the
            // selected viewport focus position.
            const lastCenter =
              last.offsetLeft + last.offsetWidth / 2

            const focusX =
              viewportWidth * lastItemFocusRatio

            const targetDistance =
              lastCenter -
              focusX +
              offset +
              extraScroll

            const distance = gsap.utils.clamp(
              0,
              maxDistance,
              targetDistance
            )

            return Math.min(
              getStartX(),
              -distance
            )
          }

          const getDistance = () =>
            Math.abs(getEndX() - getStartX())

          gsap.set(content, {
            x: getStartX(),
            force3D: true,
          })

          let scrollTrigger:
            | ScrollTrigger
            | undefined

          const notifyPosition = () => {
            if (!scrollTrigger) return

            callbacksRef.current.onUpdate?.(
              scrollTrigger.progress,
              scrollTrigger
            )
          }

          const animation = gsap.fromTo(
            content,
            {
              x: getStartX,
            },
            {
              x: getEndX,
              duration,
              ease,
              immediateRender: false,
              force3D: true,
              onUpdate: notifyPosition,
            }
          )

          scrollTrigger = ScrollTrigger.create({
            trigger,
            start,

            end: () =>
              `+=${Math.max(getDistance(), 1)}`,

            animation,
            pin: true,
            pinSpacing: true,
            scrub,
            markers,
            invalidateOnRefresh: true,
            anticipatePin: 1,

            onUpdate: notifyPosition,

            onRefresh: () => {
              notifyPosition()
              callbacksRef.current.onPinReady?.()
            },

            onToggle: () => {
              notifyPosition()
              callbacksRef.current.onPinReady?.()
            },
          })

          callbacksRef.current.onAnimationCreated?.(
            animation,
            scrollTrigger
          )

          notifyPosition()
          callbacksRef.current.onPinReady?.()

          let refreshFrame = 0

          const refresh = () => {
            cancelAnimationFrame(refreshFrame)

            refreshFrame = requestAnimationFrame(() => {
              ScrollTrigger.refresh()
            })
          }

          // Observe the content's actual width.
          // Do not observe the pinned element itself:
          // GSAP temporarily changes its dimensions.
          const resizeObserver = new ResizeObserver(
            refresh
          )

          resizeObserver.observe(content)

          let previousWidth = window.innerWidth

          const handleResize = () => {
            if (window.innerWidth !== previousWidth) {
              previousWidth = window.innerWidth
              refresh()
            }
          }

          window.addEventListener(
            'resize',
            handleResize,
            { passive: true }
          )

          window.addEventListener(
            'orientationchange',
            refresh
          )

          const initialFrame =
            requestAnimationFrame(refresh)

          return () => {
            cancelAnimationFrame(initialFrame)
            cancelAnimationFrame(refreshFrame)

            resizeObserver.disconnect()

            window.removeEventListener(
              'resize',
              handleResize
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
        lastItemFocusRatio,
        firstItemFocusRatio,
      ],
      revertOnUpdate: true,
    }
  )

  return {
    contentRef,
    triggerRef,
  }
}
