'use client'

import { useLayoutEffect, useRef, useState } from 'react'

/** Height of the active footer tab panel (avoids empty space from taller inactive tabs). */
export function useFooterPanelMinHeight(activeTab: string) {
  const measureRef = useRef<HTMLDivElement>(null)
  const [panelMinHeight, setPanelMinHeight] = useState(0)

  useLayoutEffect(() => {
    const root = measureRef.current
    if (!root) return

    const measure = () => {
      const panel = root.querySelector<HTMLElement>('[data-footer-panel-measure]')
      const height = panel?.getBoundingClientRect().height ?? 0
      setPanelMinHeight(height > 0 ? Math.ceil(height) : 0)
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(root)
    const panel = root.querySelector<HTMLElement>('[data-footer-panel-measure]')
    if (panel) observer.observe(panel)

    window.addEventListener('resize', measure)
    window.visualViewport?.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
      window.visualViewport?.removeEventListener('resize', measure)
    }
  }, [activeTab])

  return { measureRef, panelMinHeight }
}
