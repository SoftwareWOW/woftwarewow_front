'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
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
  } = options

  useGSAP(
    () => {
      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger || window.innerWidth < 768) return

      const getScrollAmount = () => {
        const contentWidth = content.scrollWidth
        return -(contentWidth - window.innerWidth + offset + extraScroll)
      }

      const animation = gsap.to(content, {
        x: getScrollAmount(),
        duration,
        ease,
      })

      const scrollTrigger = ScrollTrigger.create({
        trigger,
        start,
        end: () => `+=${Math.abs(getScrollAmount()) + window.innerWidth * 0.1}`,
        pin: true,
        pinSpacing: true,
        animation,
        scrub,
        invalidateOnRefresh: true,
        markers,
        anticipatePin: 1,
        onUpdate: (self) => {
          onUpdateRef.current?.(self.progress, self)
        },
        onRefresh: () => {
          animation.vars.x = getScrollAmount()
        },
      })

      onUpdateRef.current?.(scrollTrigger.progress, scrollTrigger)
      onAnimationCreatedRef.current?.(animation, scrollTrigger)

      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        animation.kill()
        scrollTrigger.kill()
        window.removeEventListener('resize', handleResize)
      }
    },
    {
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll],
      scope: triggerRef,
    },
  )

  return {
    contentRef,
    triggerRef,
  }
}

export default useHorizontalScroll
