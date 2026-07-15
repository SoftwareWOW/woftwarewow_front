'use client'

import Image from 'next/image'
import { divisionBrandLogos, type DivisionId } from './nav-brand-assets'

type WowDivisionLogoProps = {
  divisionId: string
  /** Menu items: keep Standard logos in light mode, White logos in dark mode (incl. dark hover) */
  variant?: 'theme' | 'menu'
}

function DivisionLogoImage({ src, className }: { src: string; className?: string }) {
  const isSvg = src.endsWith('.svg') || src.includes('.svg')

  return (
    <Image
      src={src}
      alt=""
      width={203}
      height={15}
      unoptimized={isSvg}
      className={`h-[15px] w-auto max-w-full object-contain object-left sm:max-w-[183px] ${className ?? ''}`}
      aria-hidden
    />
  )
}

export function WowDivisionLogo({ divisionId, variant: _variant = 'theme' }: WowDivisionLogoProps) {
  const lightSrc = divisionBrandLogos.light[divisionId as DivisionId]
  const darkSrc = divisionBrandLogos.dark[divisionId as DivisionId]

  if (!lightSrc || !darkSrc) {
    return null
  }

  // Light mode + light hover (primary-50): Standard logos
  // Dark mode + dark navy hover: White logos stay readable
  return (
    <>
      <DivisionLogoImage src={lightSrc} className="dark:hidden" />
      <DivisionLogoImage src={darkSrc} className="hidden dark:block" />
    </>
  )
}
