'use client'

import { useEffect, useState } from 'react'
import type { Dictionary } from '@/i18n/types'
import type { NavigationMenuItem } from './navigation-types'
import { mobileNavInsetClass, mobileNavShellClass } from './mobile-nav-shell'
import { navTabActiveClass, navTabInactiveClass } from './nav-interaction-styles'
import { WowDivisionItem, WowMenuItem } from './WowMenuItem'

type WowMobileMenuSheetProps = {
  item: NavigationMenuItem | null
  navbar: Dictionary['navbar']
  onClose: () => void
}

export default function WowMobileMenuSheet({ item, navbar, onClose }: WowMobileMenuSheetProps) {
  const [activePageId, setActivePageId] = useState<string | null>(null)

  useEffect(() => {
    if (!item) return
    setActivePageId(item.mobile.pages[0]?.id ?? null)
  }, [item])

  useEffect(() => {
    if (!item) return

    const previousOverflow = document.body.style.overflow
    const previousOverflowX = document.body.style.overflowX
    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.overflowX = previousOverflowX
      document.removeEventListener('keydown', handleEscape)
    }
  }, [item, onClose])

  if (!item) return null

  const activePage = item.mobile.pages.find((page) => page.id === activePageId) ?? item.mobile.pages[0]
  const hasMultiplePages = item.mobile.pages.length > 1

  return (
    <div className="fixed inset-0 z-[1001] overflow-hidden md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label={navbar.closeMenu}
        onClick={onClose}
      />

      <div
        className={`pointer-events-none absolute bottom-[calc(100px+env(safe-area-inset-bottom))] ${mobileNavInsetClass}`}
      >
        <div
          className={`pointer-events-auto animate-mobile-sheet-in overflow-hidden rounded-radius-sm bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none ${mobileNavShellClass}`}
        >
          <div className="flex max-h-[min(461px,calc(100dvh-180px))] min-w-0 flex-col overflow-hidden">
            {hasMultiplePages && (
              <div
                className="mt-[10px] grid shrink-0 gap-[6px]"
                style={{ gridTemplateColumns: `repeat(${item.mobile.pages.length}, minmax(0, 1fr))` }}
              >
                {item.mobile.pages.map((page) => {
                  const isActive = page.id === activePage?.id

                  return (
                    <button
                      key={page.id}
                      type="button"
                      onClick={() => setActivePageId(page.id)}
                      className={`h-[46px] min-w-0 rounded-radius-sm px-[10px] font-outfit text-xs font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isActive ? navTabActiveClass : navTabInactiveClass
                      }`}
                    >
                      {page.title}
                    </button>
                  )
                })}
              </div>
            )}

            <div className="mt-[10px] min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
              <ul className="flex min-w-0 flex-col gap-[3px]">
                {activePage?.items.map((entry) => (
                  <li key={entry.id} className="min-w-0">
                    {'type' in entry && entry.type === 'division' ? (
                      <WowDivisionItem
                        divisionId={entry.id}
                        href={entry.href}
                        onClick={onClose}
                        variant="mobile"
                      />
                    ) : (
                      <WowMenuItem
                        iconId={entry.id}
                        label={entry.label}
                        description={'description' in entry ? entry.description : undefined}
                        href={entry.href}
                        onClick={onClose}
                        showChevron
                        multilineDescription={
                          'multilineDescription' in entry ? Boolean(entry.multilineDescription) : false
                        }
                        tall={entry.id === 'helpSupport'}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
