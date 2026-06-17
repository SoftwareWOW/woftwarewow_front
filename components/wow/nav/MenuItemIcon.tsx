'use client'

import { Circle } from 'lucide-react'
import { navMenuIcons } from './nav-assets'
import { navItemIconClass } from './nav-interaction-styles'

type MenuItemIconProps = {
  iconId: string
  className?: string
}

export function MenuItemIcon({ iconId, className = navItemIconClass }: MenuItemIconProps) {
  const Icon = navMenuIcons[iconId as keyof typeof navMenuIcons]

  if (!Icon) {
    return <Circle aria-hidden className={className} strokeWidth={1.5} />
  }

  return <Icon aria-hidden className={className} strokeWidth={1.5} />
}
