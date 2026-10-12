'use client'

import type { LegalDocumentSection } from '@/components/shared/legal-document-types'
import { useLenis } from 'lenis/react'
import { useLayoutEffect, useState, type RefObject } from 'react'

/** Align with fixed TOC / navbar — heading past this line becomes “current”. */
export const LEGAL_SECTION_SPY_OFFSET_PX = 160

export function useLegalSectionScrollSpy(
  sections: readonly LegalDocumentSection[],
  boundsRef: RefObject<HTMLElement | null>,
) {
  const lenis = useLenis()
  const [activeId, setActiveId] = useState('')

  useLayoutEffect(() => {
    const update = () => {
      const root = boundsRef.current
      if (!root || sections.length === 0) {
        setActiveId((prev) => (prev === '' ? prev : ''))
        return
      }

      let current = ''
      for (const section of sections) {
        const el = root.querySelector<HTMLElement>(`#${CSS.escape(section.id)}`)
        if (!el) continue
        if (el.getBoundingClientRect().top <= LEGAL_SECTION_SPY_OFFSET_PX) {
          current = section.id
        }
      }

      setActiveId((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener('resize', update)
    lenis?.on('scroll', update)

    return () => {
      window.removeEventListener('resize', update)
      lenis?.off('scroll', update)
    }
  }, [sections, boundsRef, lenis])

  return activeId
}
