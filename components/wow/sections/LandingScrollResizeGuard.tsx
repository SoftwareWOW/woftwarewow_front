'use client'

import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

/**
 * Preserves Lenis scroll position when the viewport changes (e.g. browser zoom).
 * Mount only on the en-US landing page.
 */
export default function LandingScrollResizeGuard() {
  const lenis = useLenis()
  const lastScrollRef = useRef(0)

  useEffect(() => {
    if (!lenis) return

    const rememberScroll = () => {
      lastScrollRef.current = lenis.scroll
    }

    rememberScroll()
    lenis.on('scroll', rememberScroll)

    const preserveScrollOnViewportChange = () => {
      const savedScroll = lastScrollRef.current
      if (savedScroll < 32) return

      requestAnimationFrame(() => {
        lenis.resize()

        requestAnimationFrame(() => {
          if (lenis.scroll < 32) {
            lenis.scrollTo(savedScroll, { immediate: true })
          }
        })
      })
    }

    window.addEventListener('resize', preserveScrollOnViewportChange, { passive: true })
    window.visualViewport?.addEventListener('resize', preserveScrollOnViewportChange)

    return () => {
      lenis.off('scroll', rememberScroll)
      window.removeEventListener('resize', preserveScrollOnViewportChange)
      window.visualViewport?.removeEventListener('resize', preserveScrollOnViewportChange)
    }
  }, [lenis])

  return null
}
