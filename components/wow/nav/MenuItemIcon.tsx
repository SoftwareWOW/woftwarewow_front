'use client'

import Image from 'next/image'
import { navIconAssets } from './nav-assets'

type MenuItemIconProps = {
  iconId: string
}

export function MenuItemIcon({ iconId }: MenuItemIconProps) {
  const asset = navIconAssets[iconId]

  if (!asset) {
    return <span className="block size-3" aria-hidden />
  }

  if (Array.isArray(asset)) {
    return (
      <span className="relative block size-3" aria-hidden>
        {asset.map((src) => (
          <Image key={src} src={src} alt="" fill className="object-contain" sizes="12px" unoptimized />
        ))}
      </span>
    )
  }

  return (
    <span className="relative block size-3" aria-hidden>
      <Image src={asset} alt="" fill className="object-contain" sizes="12px" unoptimized />
    </span>
  )
}
