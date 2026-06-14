'use client'

import Image from 'next/image'
import type { NavigationMenuItem } from './navigation-types'
import { mobileBottomNavIcons } from './nav-brand-assets'

type WowMobileBottomNavProps = {
  items: NavigationMenuItem[]
  activeId: string | null
  onSelect: (id: string) => void
}

export default function WowMobileBottomNav({ items, activeId, onSelect }: WowMobileBottomNavProps) {
  return (
    <nav
      className="fixed inset-x-[15px] bottom-[calc(16px+env(safe-area-inset-bottom))] z-[1002] flex rounded-[3px] bg-primary p-[5px] lg:hidden"
      aria-label="Mobile navigation">
      {items.map((item) => {
        const iconSrc = mobileBottomNavIcons[item.id]
        const isActive = activeId === item.id

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(isActive ? '' : item.id)}
            className={`flex min-h-[60px] min-w-0 flex-1 items-center justify-center rounded-[3px] p-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
              isActive ? 'bg-white/15' : 'hover:bg-white/10'
            }`}
            aria-label={item.label}
            aria-expanded={isActive}>
            {iconSrc && (
              <Image
                src={iconSrc}
                alt=""
                width={24}
                height={24}
                className="h-6 w-auto max-w-[72px] object-contain"
                aria-hidden
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}
