'use client'

import gsap from 'gsap'
import { useCallback, useEffect, useRef } from 'react'

const CARD_STEP = 360

interface UseScrollingSoftwareServicesOptions {
  duration?: number
  step?: number
  delay?: number
}

const useScrollingSoftwareServices = (options: UseScrollingSoftwareServicesOptions = {}) => {
  const { duration = 200, step = CARD_STEP, delay = 100 } = options

  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const resizeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const initSlider = () => {
      const marqueeInner = marqueeRef.current
      if (!marqueeInner) return

      const originalContent = marqueeInner.innerHTML
      marqueeInner.innerHTML = originalContent + originalContent + originalContent

      const contentWidth = marqueeInner.offsetWidth / 3

      animationRef.current = gsap.to(marqueeInner, {
        x: -contentWidth * 2,
        duration,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          gsap.set(marqueeInner, { x: -contentWidth })
        },
      })

      const handleResize = () => {
        if (resizeTimeoutRef.current) {
          window.cancelAnimationFrame(resizeTimeoutRef.current)
        }

        resizeTimeoutRef.current = window.requestAnimationFrame(() => {
          if (!marqueeInner || !animationRef.current) return

          const newContentWidth = marqueeInner.offsetWidth / 3

          animationRef.current.vars.x = -newContentWidth * 2
          gsap.set(marqueeInner, { x: -newContentWidth })
          animationRef.current.invalidate().restart()
        })
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        animationRef.current?.kill()
      }
    }

    const timer = setTimeout(() => {
      const cleanup = initSlider()
      return () => {
        cleanup?.()
      }
    }, delay)

    return () => {
      clearTimeout(timer)
      if (resizeTimeoutRef.current) {
        window.cancelAnimationFrame(resizeTimeoutRef.current)
      }
    }
  }, [duration, delay])

  const pauseMarquee = useCallback(() => {
    animationRef.current?.pause()
  }, [])

  const resumeMarquee = useCallback(() => {
    animationRef.current?.play()
  }, [])

  const stepMarquee = useCallback(
    (direction: 'next' | 'prev') => {
      const marqueeInner = marqueeRef.current
      if (!marqueeInner || !animationRef.current || step <= 0) return

      const animation = animationRef.current
      animation.pause()

      gsap.to(marqueeInner, {
        x: direction === 'next' ? `-=${step}` : `+=${step}`,
        duration: 0.65,
        ease: 'power2.inOut',
        onComplete: () => {
          animation.play()
        },
      })
    },
    [step],
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
