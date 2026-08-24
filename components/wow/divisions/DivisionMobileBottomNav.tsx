'use client'

import type { DivisionNavItem } from '@/components/wow/divisions/division-site-config'
import { mobileNavShellClass } from '@/components/wow/nav/mobile-nav-shell'
import {
  mobileBottomNavActiveClass,
  mobileBottomNavInactiveClass,
} from '@/components/wow/nav/nav-interaction-styles'
import { Link, usePathname } from '@/i18n/navigation'
import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  CircleDot,
  Code2,
  Compass,
  FolderOpen,
  Headset,
  KeyRound,
  LayoutGrid,
  LineChart,
  ListOrdered,
  Rocket,
  Server,
  Sparkles,
  Users,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const divisionMobileNavIcons: Record<string, LucideIcon> = {
  services: Briefcase,
  process: ListOrdered,
  projects: FolderOpen,
  tech: Code2,
  approach: Compass,
  work: FolderOpen,
  solutions: Sparkles,
  clients: Users,
  programs: Rocket,
  outcomes: LineChart,
  stories: LayoutGrid,
  plans: Server,
  support: Headset,
  features: LayoutGrid,
  access: KeyRound,
}

type DivisionMobileBottomNavProps = {
  items: DivisionNavItem[]
}

function hashFromHref(href: string) {
  const hashIndex = href.indexOf('#')
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : ''
}

export default function DivisionMobileBottomNav({ items }: DivisionMobileBottomNavProps) {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash.replace(/^#/, ''))
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [pathname])

  return (
    <nav
      className={`relative flex h-[70px] rounded-radius-sm border border-primary bg-primary p-[5px] md:hidden ${mobileNavShellClass}`}
      aria-label="Mobile navigation"
    >
      {items.map((item) => {
        const Icon = divisionMobileNavIcons[item.id] ?? CircleDot
        const itemHash = hashFromHref(item.href)
        const isActive = itemHash ? activeHash === itemHash : false

        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => {
              if (itemHash) setActiveHash(itemHash)
            }}
            className={`group flex min-h-[60px] min-w-0 flex-1 items-center justify-center rounded-radius-sm border-r border-dotted border-white/30 p-[14px] transition-colors last:border-r-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
              isActive ? mobileBottomNavActiveClass : mobileBottomNavInactiveClass
            }`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              aria-hidden
              className={`size-6 shrink-0 transition-colors ${
                isActive
                  ? '!text-black !stroke-black'
                  : '!text-white !stroke-white group-hover:!text-black group-hover:!stroke-black'
              }`}
              strokeWidth={2}
            />
          </Link>
        )
      })}
    </nav>
  )
}
