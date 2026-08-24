'use client'

import { useEffect, useRef } from 'react'

const FOOTER_HEIGHT_VAR = '--sticky-footer-height'
const DESKTOP_MQ = '(min-width: 1024px)'

/** Measures the footer and sets --sticky-footer-height so main can scroll fully off it. */
export function useStickyFooterHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      if (!window.matchMedia(DESKTOP_MQ).matches) {
        document.documentElement.style.removeProperty(FOOTER_HEIGHT_VAR)
        return
      }
      document.documentElement.style.setProperty(FOOTER_HEIGHT_VAR, `${el.offsetHeight}px`)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener('resize', update)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
      document.documentElement.style.removeProperty(FOOTER_HEIGHT_VAR)
    }
  }, [])

  return ref
}
