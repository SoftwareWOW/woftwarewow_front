'use client'

import { Circle } from 'lucide-react'
import { navMenuIcons } from './nav-assets'

const iconClassName = 'size-3 shrink-0 text-black dark:text-backgroundBody'

type MenuItemIconProps = {
  iconId: string
}

export function MenuItemIcon({ iconId }: MenuItemIconProps) {
  const Icon = navMenuIcons[iconId as keyof typeof navMenuIcons]

  if (!Icon) {
    return <Circle aria-hidden className={iconClassName} strokeWidth={1.5} />
  }

  return <Icon aria-hidden className={iconClassName} strokeWidth={1.5} />
}
