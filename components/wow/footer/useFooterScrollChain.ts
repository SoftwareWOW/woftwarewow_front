'use client'

import { useLenis } from 'lenis/react'
import { useEffect, type RefObject } from 'react'

const DESKTOP_MQ = '(min-width: 1024px)'

function footerScrollMax(el: HTMLElement) {
  return Math.max(0, el.scrollHeight - el.clientHeight)
}

/** When the fixed footer overflows, wheel scrolls the footer first, then Lenis (body). */
export function useFooterScrollChain(footerRef: RefObject<HTMLElement | null>) {
  const lenis = useLenis()

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const mq = window.matchMedia(DESKTOP_MQ)

    const onWheel = (event: WheelEvent) => {
      if (!mq.matches) return

      const maxScroll = footerScrollMax(footer)
      if (maxScroll <= 1) return

      const lenisInstance = lenis
      const atPageBottom =
        lenisInstance != null ? lenisInstance.scroll >= lenisInstance.limit - 4 : false
      const pointerInFooter = footer.contains(event.target as Node)

      // Mid-page: always scroll the body. Footer wheel only at page bottom (or finishing a footer scroll).
      if (!atPageBottom && footer.scrollTop <= 0) return
      if (!atPageBottom && !pointerInFooter) return

      const delta = event.deltaY
      const { scrollTop } = footer
      const atFooterTop = scrollTop <= 0
      const atFooterBottom = scrollTop >= maxScroll - 1

      if (delta > 0 && !atFooterBottom) {
        footer.scrollTop = Math.min(maxScroll, scrollTop + delta)
        event.preventDefault()
        event.stopPropagation()
        return
      }

      if (delta < 0 && !atFooterTop) {
        footer.scrollTop = Math.max(0, scrollTop + delta)
        event.preventDefault()
        event.stopPropagation()
        return
      }

      if (delta < 0 && atFooterTop && atPageBottom && lenisInstance) {
        lenisInstance.scrollTo(lenisInstance.scroll + delta)
        event.preventDefault()
        event.stopPropagation()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false, capture: true })

    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true })
    }
  }, [footerRef, lenis])
}
