'use client'

import { useEffect, useState } from 'react'
import type { Dictionary } from '@/i18n/types'
import type { NavigationMenuItem } from './navigation-types'
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
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleEscape)
    }
  }, [item, onClose])

  if (!item) return null

  const activePage = item.mobile.pages.find((page) => page.id === activePageId) ?? item.mobile.pages[0]
  const hasMultiplePages = item.mobile.pages.length > 1

  return (
    <div className="fixed inset-0 z-[1001] lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label={navbar.closeMenu}
        onClick={onClose}
      />

      <div className="absolute inset-x-[15px] bottom-[calc(86px+env(safe-area-inset-bottom))] flex max-h-[min(461px,calc(100vh-180px))] animate-mobile-sheet-in flex-col overflow-hidden rounded-[5px] bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none">
        <div className="shrink-0 rounded-[3px] bg-secondary p-[10px] dark:bg-black">
          <div className="flex items-center justify-center px-5 py-[15px]">
            <p className="text-base font-light leading-none text-white">{activePage?.title ?? item.label}</p>
          </div>
        </div>

        {hasMultiplePages && (
          <div className="mt-[10px] flex shrink-0 gap-[3px] overflow-x-auto">
            {item.mobile.pages.map((page) => {
              const isActive = page.id === activePage?.id

              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setActivePageId(page.id)}
                  className={`shrink-0 rounded-[3px] px-[10px] py-2 text-xs font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    isActive
                      ? 'bg-black/[0.06] text-black dark:bg-white/[0.08] dark:text-backgroundBody'
                      : 'bg-black/[0.02] text-black/60 hover:bg-black/[0.04] dark:bg-white/[0.04] dark:text-dark-100'
                  }`}>
                  {page.title}
                </button>
              )
            })}
          </div>
        )}

        <div className="mt-[10px] flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-[3px]">
            {activePage?.items.map((entry) => (
              <li key={entry.id}>
                {'type' in entry && entry.type === 'division' ? (
                  <WowDivisionItem divisionId={entry.id} href={entry.href} onClick={onClose} />
                ) : (
                  <WowMenuItem
                    iconId={entry.id}
                    label={entry.label}
                    description={'description' in entry ? entry.description : undefined}
                    href={entry.href}
                    onClick={onClose}
                    showChevron
                    multilineDescription={'multilineDescription' in entry ? Boolean(entry.multilineDescription) : false}
                    tall={entry.id === 'helpSupport'}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
