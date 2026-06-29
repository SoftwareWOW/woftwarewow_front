'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollingProps {
  children: ReactNode
}

function LenisScrollEffects({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lenis = useLenis()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [pathname, searchParams, lenis])

  useEffect(() => {
    if (!lenis) return

    const handleClick = (ele: Element) => {
      lenis.scrollTo(ele.getAttribute('href') ?? '', {
        offset: -100,
      })
    }

    const elements = document.querySelectorAll('.lenis-scroll-to')
    const clickHandler = (e: Event) => handleClick(e.target as Element)

    elements.forEach((ele) => {
      ele.addEventListener('click', clickHandler)
    })

    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', clickHandler)
      })
    }
  }, [lenis, pathname])

  useEffect(() => {
    if (!lenis) return

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.animatedScroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    const handleRefresh = () => {
      lenis.resize()
    }

    ScrollTrigger.addEventListener('refresh', handleRefresh)
    ScrollTrigger.refresh()

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(tickerCallback)
      ScrollTrigger.removeEventListener('refresh', handleRefresh)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
    }
  }, [lenis])

  return children
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  return (
    <ReactLenis root options={{ duration: 1.1, autoRaf: false, syncTouch: true, touchMultiplier: 1 }}>
      <LenisScrollEffects>{children}</LenisScrollEffects>
    </ReactLenis>
  )
}

export default SmoothScrollProvider
