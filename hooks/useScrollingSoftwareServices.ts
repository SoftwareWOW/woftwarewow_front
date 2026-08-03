'use client'

import gsap from 'gsap'
import { useCallback, useEffect, useRef } from 'react'

const CARD_STEP = 360
const STEP_DURATION = 0.45

interface UseScrollingSoftwareServicesOptions {
  duration?: number
  step?: number
  delay?: number
}

const useScrollingSoftwareServices = (options: UseScrollingSoftwareServicesOptions = {}) => {
  const { duration = 70, step = CARD_STEP, delay = 100 } = options

  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const stepTweenRef = useRef<gsap.core.Tween | null>(null)
  const resizeTimeoutRef = useRef<number | null>(null)
  const isHoveredRef = useRef(false)

  const getContentWidth = (marqueeInner: HTMLDivElement) => marqueeInner.offsetWidth / 3

  const normalizeX = (marqueeInner: HTMLDivElement) => {
    const contentWidth = getContentWidth(marqueeInner)
    let currentX = gsap.getProperty(marqueeInner, 'x') as number

    while (currentX <= -contentWidth * 2) {
      currentX += contentWidth
    }
    while (currentX > -contentWidth) {
      currentX -= contentWidth
    }

    gsap.set(marqueeInner, { x: currentX })
    return { contentWidth, currentX }
  }

  const startMarqueeLoop = useCallback(
    (marqueeInner: HTMLDivElement, contentWidth: number, autoPlay: boolean) => {
      animationRef.current?.kill()
      gsap.set(marqueeInner, { x: -contentWidth })

      animationRef.current = gsap.to(marqueeInner, {
        x: -contentWidth * 2,
        duration,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          gsap.set(marqueeInner, { x: -contentWidth })
        },
      })

      if (!autoPlay) {
        animationRef.current.pause()
      }
    },
    [duration],
  )

  const createInfiniteAnimation = useCallback(
    (marqueeInner: HTMLDivElement, contentWidth: number, startX: number, autoPlay: boolean) => {
      animationRef.current?.kill()
      gsap.set(marqueeInner, { x: startX })

      const endX = -contentWidth * 2
      const remaining = Math.abs(endX - startX)

      if (remaining <= 1) {
        startMarqueeLoop(marqueeInner, contentWidth, autoPlay)
        return
      }

      const segmentDuration = duration * (remaining / contentWidth)

      animationRef.current = gsap.to(marqueeInner, {
        x: endX,
        duration: segmentDuration,
        ease: 'none',
        onComplete: () => {
          startMarqueeLoop(marqueeInner, contentWidth, autoPlay)
        },
      })

      if (!autoPlay) {
        animationRef.current.pause()
      }
    },
    [duration, startMarqueeLoop],
  )

  useEffect(() => {
    let cleanup: (() => void) | undefined

    const initSlider = () => {
      const marqueeInner = marqueeRef.current
      if (!marqueeInner) return

      const originalContent = marqueeInner.innerHTML
      marqueeInner.innerHTML = originalContent + originalContent + originalContent

      const contentWidth = getContentWidth(marqueeInner)
      startMarqueeLoop(marqueeInner, contentWidth, true)

      const handleResize = () => {
        if (resizeTimeoutRef.current) {
          window.cancelAnimationFrame(resizeTimeoutRef.current)
        }

        resizeTimeoutRef.current = window.requestAnimationFrame(() => {
          if (!marqueeInner) return

          stepTweenRef.current?.kill()
          const { contentWidth: newContentWidth, currentX } = normalizeX(marqueeInner)
          createInfiniteAnimation(marqueeInner, newContentWidth, currentX, !isHoveredRef.current)
        })
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        stepTweenRef.current?.kill()
        animationRef.current?.kill()
      }
    }

    const timer = setTimeout(() => {
      cleanup = initSlider()
    }, delay)

    return () => {
      clearTimeout(timer)
      cleanup?.()
      if (resizeTimeoutRef.current) {
        window.cancelAnimationFrame(resizeTimeoutRef.current)
      }
      stepTweenRef.current?.kill()
      animationRef.current?.kill()
    }
  }, [createInfiniteAnimation, delay, startMarqueeLoop])

  const pauseMarquee = useCallback(() => {
    isHoveredRef.current = true
    animationRef.current?.pause()
  }, [])

  const resumeMarquee = useCallback(() => {
    isHoveredRef.current = false
    animationRef.current?.play()
  }, [])

  const stepMarquee = useCallback(
    (direction: 'next' | 'prev') => {
      const marqueeInner = marqueeRef.current
      if (!marqueeInner || step <= 0) return

      stepTweenRef.current?.kill()
      animationRef.current?.pause()

      stepTweenRef.current = gsap.to(marqueeInner, {
        x: direction === 'next' ? `-=${step}` : `+=${step}`,
        duration: STEP_DURATION,
        ease: 'power2.out',
        onComplete: () => {
          stepTweenRef.current = null
          const { contentWidth, currentX } = normalizeX(marqueeInner)
          createInfiniteAnimation(marqueeInner, contentWidth, currentX, !isHoveredRef.current)
        },
      })
    },
    [createInfiniteAnimation, step],
  )

  const goPrev = useCallback(() => {
    stepMarquee('prev')
  }, [stepMarquee])

  const goNext = useCallback(() => {
    stepMarquee('next')
  }, [stepMarquee])

  return {
    marqueeRef,
    pauseMarquee,
    resumeMarquee,
    goPrev,
    goNext,
  }
}

export default useScrollingSoftwareServices
