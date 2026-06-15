'use client'

import Image from 'next/image'
import { divisionBrandLogos } from './nav-brand-assets'

type WowDivisionLogoProps = {
  divisionId: string
}

export function WowDivisionLogo({ divisionId }: WowDivisionLogoProps) {
  const src = divisionBrandLogos[divisionId]

  if (!src) {
    return null
  }

  const isSvg = src.endsWith('.svg') || src.includes('.svg')

  return (
    <Image
      src={src}
      alt=""
      width={203}
      height={15}
      unoptimized={isSvg}
      className="h-[15px] w-auto max-w-full object-contain object-left sm:max-w-[183px]"
      aria-hidden
    />
  )
}
