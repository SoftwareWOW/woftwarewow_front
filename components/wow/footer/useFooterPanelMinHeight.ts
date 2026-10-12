'use client'

import { useLayoutEffect, useRef, useState } from 'react'

/** Stable panel slot height = tallest tab (footer size stays fixed when switching tabs). */
export function useFooterPanelMinHeight(measureTabIds: readonly string[]) {
  const measureRef = useRef<HTMLDivElement>(null)
  const [panelMinHeight, setPanelMinHeight] = useState(0)
  const tabKey = measureTabIds.join('\0')

  useLayoutEffect(() => {
    const root = measureRef.current
    if (!root) return

    const measure = () => {
      const panels = root.querySelectorAll<HTMLElement>('[data-footer-panel-measure]')
      let maxHeight = 0
      panels.forEach((panel) => {
        maxHeight = Math.max(maxHeight, panel.getBoundingClientRect().height)
      })
      const next = maxHeight > 0 ? Math.ceil(maxHeight) : 0
      setPanelMinHeight((prev) => (prev === next ? prev : next))
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(root)
    root.querySelectorAll<HTMLElement>('[data-footer-panel-measure]').forEach((panel) => {
      observer.observe(panel)
    })

    window.addEventListener('resize', measure)
    window.visualViewport?.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
      window.visualViewport?.removeEventListener('resize', measure)
    }
  }, [tabKey])

  return { measureRef, panelMinHeight }
}
