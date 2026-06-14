'use client'

import Image from 'next/image'
import type { NavigationMenuItem } from './navigation-types'

const navIcons: Record<string, { src: string; alt: string }> = {
  company: { src: '/images/wow/nav/icon-company.png', alt: 'Company' },
  forYou: { src: '/images/wow/nav/icon-for-you.png', alt: 'For you' },
  explore: { src: '/images/wow/nav/icon-explore.png', alt: 'Explore' },
  more: { src: '/images/wow/nav/icon-more.png', alt: 'More' },
}

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
        const icon = navIcons[item.id]
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
            {icon && (
              <Image
                src={icon.src}
                alt=""
                width={24}
                height={24}
                className="size-6 brightness-0 invert"
                aria-hidden
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}
