'use client'

import { cn } from '@/utils/cn'
import { useLenis } from 'lenis/react'
import { useLayoutEffect, useState, type RefObject } from 'react'
import { privacyPolicySections } from '@/components/shared/privacy-policy-sections'

const DESKTOP_MQ = '(min-width: 1024px)'
const WIDE_MQ = '(min-width: 1280px)'
const TOC_TOP_PX = 112

type PrivacyPolicyTocProps = {
  anchorRef: RefObject<HTMLElement | null>
}

/** Fixed TOC — Lenis/transform parents break `position: sticky`. */
export default function PrivacyPolicyToc({ anchorRef }: PrivacyPolicyTocProps) {
  const lenis = useLenis()
  const [placement, setPlacement] = useState<{ left: number; width: number } | null>(null)

  useLayoutEffect(() => {
    const desktopMq = window.matchMedia(DESKTOP_MQ)

    const update = () => {
      if (!desktopMq.matches || !anchorRef.current) {
        setPlacement(null)
        return
      }
      const { left } = anchorRef.current.getBoundingClientRect()
      const width = window.matchMedia(WIDE_MQ).matches ? 260 : 240
      setPlacement({ left, width })
    }

    update()
    window.addEventListener('resize', update)
    lenis?.on('scroll', update)

    return () => {
      window.removeEventListener('resize', update)
      lenis?.off('scroll', update)
    }
  }, [anchorRef, lenis])

  if (!placement) return null

  return (
    <nav
      aria-label="On this page"
      className={cn(
        'fixed z-[25] hidden max-h-[calc(100dvh-7.5rem)] overflow-y-auto overscroll-contain',
        'bg-background pr-2 dark:bg-[#151515] lg:block [scrollbar-width:thin]',
      )}
      style={{
        top: TOC_TOP_PX,
        left: placement.left,
        width: placement.width,
      }}
    >
      <p className="mb-4 font-outfit text-xs font-medium uppercase tracking-[0.18em] text-colorText/70 dark:text-dark-100/70">
        On this page
      </p>
      <ol className="space-y-2 border-l border-[#1515151A] pl-4 dark:border-[#EDF0F51A]">
        {privacyPolicySections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                'block py-0.5 font-outfit text-sm font-light leading-snug text-colorText transition-colors',
                'hover:text-primary dark:text-dark-100 dark:hover:text-primary',
              )}
            >
              <span className="mr-1.5 text-xs text-colorText/50 dark:text-dark-100/50">{section.num}</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
      <a
        href="#contact-us"
        className="mt-5 inline-block font-outfit text-xs font-light text-primary underline-offset-2 hover:underline"
      >
        View all 13 sections ↓
      </a>
    </nav>
  )
}
