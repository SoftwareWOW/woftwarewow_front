'use client'

import Image from 'next/image'
import { divisionBrandLogos, type DivisionId } from './nav-brand-assets'

type WowDivisionLogoProps = {
  divisionId: string
  /** Menu items: keep Standard logos in light mode, White logos in dark mode (incl. dark hover) */
  variant?: 'theme' | 'menu'
  size?: 'sm' | 'md'
}

const sizeClasses = {
  sm: 'h-[15px] sm:max-w-[183px]',
  md: 'h-[18px] sm:h-[20px] 2xl:h-[22px] sm:max-w-[220px] 2xl:max-w-[260px]',
} as const

function DivisionLogoImage({
  src,
  className,
  size,
}: {
  src: string
  className?: string
  size: keyof typeof sizeClasses
}) {
  const isSvg = src.endsWith('.svg') || src.includes('.svg')

  return (
    <Image
      src={src}
      alt=""
      width={203}
      height={15}
      unoptimized={isSvg}
      className={`w-auto max-w-full object-contain object-left ${sizeClasses[size]} ${className ?? ''}`}
      aria-hidden
    />
  )
}

export function WowDivisionLogo({
  divisionId,
  variant: _variant = 'theme',
  size = 'sm',
}: WowDivisionLogoProps) {
  const lightSrc = divisionBrandLogos.light[divisionId as DivisionId]
  const darkSrc = divisionBrandLogos.dark[divisionId as DivisionId]

  if (!lightSrc || !darkSrc) {
    return null
  }

  // Light mode + light hover (primary-50): Standard logos
  // Dark mode + dark navy hover: White logos stay readable
  return (
    <>
      <DivisionLogoImage src={lightSrc} size={size} className="dark:hidden" />
      <DivisionLogoImage src={darkSrc} size={size} className="hidden dark:block" />
    </>
  )
}
