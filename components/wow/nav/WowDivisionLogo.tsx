'use client'

import { divisionBrandLogos, type DivisionId } from './nav-brand-assets'

type WowDivisionLogoProps = {
  divisionId: string
  /** Menu items: keep Standard logos in light mode, White logos in dark mode (incl. dark hover) */
  variant?: 'theme' | 'menu'
  size?: 'sm' | 'md'
  /** Optional sizing override (e.g. `h-[1em]` to match surrounding text). */
  className?: string
}

const sizeDimensions = {
  sm: { height: 15, width: 183 },
  md: { height: 22, width: 260 },
} as const

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
  const { width, height } = sizeDimensions[size]
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG brand marks; avoids Next image URL edge cases
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      className={`w-auto max-w-full object-contain object-left ${className ?? sizeClasses[size]}`}
      aria-hidden
      decoding="async"
    />
  )
}

export function WowDivisionLogo({
  divisionId,
  variant: _variant = 'theme',
  size = 'sm',
  className,
}: WowDivisionLogoProps) {
  const lightSrc = divisionBrandLogos.light[divisionId as DivisionId]
  const darkSrc = divisionBrandLogos.dark[divisionId as DivisionId]

  if (!lightSrc || !darkSrc) {
    return null
  }

  const sizing = className ?? sizeClasses[size]

  return (
    <>
      <DivisionLogoImage src={lightSrc} size={size} className={`dark:hidden ${sizing}`} />
      <DivisionLogoImage src={darkSrc} size={size} className={`hidden dark:block ${sizing}`} />
    </>
  )
}
