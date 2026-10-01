'use client'

import { useLayoutEffect, useMemo, useRef, useState } from 'react'

/** Natural height of the tallest footer tab panel at the current viewport width. */
export function useFooterPanelMinHeight(
  tabIds: ReadonlyArray<string>,
  measureKey: string,
) {
  const measureRef = useRef<HTMLDivElement>(null)
  const [panelMinHeight, setPanelMinHeight] = useState(0)

  const idsKey = useMemo(() => tabIds.join('\0'), [tabIds])

  useLayoutEffect(() => {
    const root = measureRef.current
    if (!root) return

    const measure = () => {
      const panels = root.querySelectorAll<HTMLElement>('[data-footer-panel-measure]')
      let max = 0
      panels.forEach((el) => {
        max = Math.max(max, el.getBoundingClientRect().height)
      })
      setPanelMinHeight(max > 0 ? Math.ceil(max) : 0)
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(root)
    root.querySelectorAll<HTMLElement>('[data-footer-panel-measure]').forEach((el) => {
      observer.observe(el)
    })

    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [idsKey, measureKey])

  return { measureRef, panelMinHeight }
}
