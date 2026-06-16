'use client'

import type { LucideIcon } from 'lucide-react'
import type { NavigationMenuItem } from './navigation-types'
import { mobileBottomNavIcons } from './nav-assets'
import { mobileNavShellClass } from './mobile-nav-shell'

type WowMobileBottomNavProps = {
  items: NavigationMenuItem[]
  activeId: string | null
  onSelect: (id: string) => void
}

export default function WowMobileBottomNav({ items, activeId, onSelect }: WowMobileBottomNavProps) {
  return (
    <nav
         className={`fixed bottom-[calc(16px+env(safe-area-inset-bottom))] z-[1002] flex h-[70px] rounded-[3px] border border-primary bg-primary p-[5px] md:hidden ${mobileNavShellClass}`}
      aria-label="Mobile navigation"
    >
      {items.map((item) => {
        const Icon = mobileBottomNavIcons[item.id as keyof typeof mobileBottomNavIcons] as
          | LucideIcon
          | undefined
        const isActive = activeId === item.id

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(isActive ? '' : item.id)}
            className={`flex min-h-[60px] min-w-0 flex-1 items-center justify-center rounded-[3px] border-r border-dotted border-white/30 p-[14px] transition-colors last:border-r-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
              isActive ? 'bg-white/15' : 'hover:bg-white/10'
            }`}
            aria-label={item.label}
            aria-expanded={isActive}
          >
            {Icon && <Icon aria-hidden className="size-6 shrink-0 !text-white !stroke-white" strokeWidth={2} />}
          </button>
        )
      })}
    </nav>
  )
}