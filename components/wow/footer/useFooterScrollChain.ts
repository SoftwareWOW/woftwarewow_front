'use client'

import { useLenis } from 'lenis/react'
import { useEffect, type RefObject } from 'react'

function footerScrollMax(el: HTMLElement) {
  return Math.max(0, el.scrollHeight - el.clientHeight)
}

function footerScroller(footer: HTMLElement) {
  if (footerScrollMax(footer) > 1) return footer
  const panel = footer.querySelector<HTMLElement>('[role="tabpanel"]')
  if (panel && footerScrollMax(panel) > 1) return panel
  return footer
}

/** When the footer overflows, that content scrolls first, then the page. */
export function useFooterScrollChain(footerRef: RefObject<HTMLElement | null>) {
  const lenis = useLenis()

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const consume = (delta: number, pointerInFooter: boolean) => {
      const scroller = footerScroller(footer)
      const maxScroll = footerScrollMax(scroller)
      if (maxScroll <= 1 || delta === 0) return false

      const lenisInstance = lenis
      const atPageBottom =
        lenisInstance != null
          ? lenisInstance.scroll >= lenisInstance.limit - 4
          : window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 4
      const rect = footer.getBoundingClientRect()
      const footerFillsView = rect.top < 80 && rect.bottom > window.innerHeight - 8

      // Mid-page: scroll the body. Footer content scrolls once it fills the view or the page is at the bottom.
      if (!atPageBottom && !footerFillsView && scroller.scrollTop <= 0) return false
      if (!atPageBottom && !footerFillsView && !pointerInFooter) return false

      const { scrollTop } = scroller
      const atFooterTop = scrollTop <= 0
      const atFooterBottom = scrollTop >= maxScroll - 1

      if (delta > 0 && !atFooterBottom) {
        scroller.scrollTop = Math.min(maxScroll, scrollTop + delta)
        return true
      }

      if (delta < 0 && !atFooterTop) {
        scroller.scrollTop = Math.max(0, scrollTop + delta)
        return true
      }

      if (delta < 0 && atFooterTop && atPageBottom && lenisInstance) {
        lenisInstance.scrollTo(lenisInstance.scroll + delta)
        return true
      }

      return false
    }

    const onWheel = (event: WheelEvent) => {
      const target = event.target
      const pointerInFooter = target instanceof Node && footer.contains(target)
      if (!consume(event.deltaY, pointerInFooter)) return
      event.preventDefault()
      event.stopPropagation()
    }

    let lastTouchY = 0

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return
      lastTouchY = touch.clientY
    }

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return
      const delta = lastTouchY - touch.clientY
      lastTouchY = touch.clientY
      const target = event.target
      const pointerInFooter = target instanceof Node && footer.contains(target)
      if (!consume(delta, pointerInFooter)) return
      event.preventDefault()
      event.stopPropagation()
    }

    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true, capture: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false, capture: true })

    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true })
      window.removeEventListener('touchstart', onTouchStart, { capture: true })
      window.removeEventListener('touchmove', onTouchMove, { capture: true })
    }
  }, [footerRef, lenis])
}
