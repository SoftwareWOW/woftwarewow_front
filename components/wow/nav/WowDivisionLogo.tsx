'use client'

import Image from 'next/image'
import { divisionBrandLogos } from './nav-brand-assets'

type WowDivisionLogoProps = {
  divisionId: string
  /** Menu items: swap to Standard logo on light hover/active surfaces in dark mode */
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

export function WowDivisionLogo({ divisionId, variant = 'theme' }: WowDivisionLogoProps) {
  const lightSrc = divisionBrandLogos.light[divisionId as keyof typeof divisionBrandLogos.light]
  const darkSrc = divisionBrandLogos.dark[divisionId as keyof typeof divisionBrandLogos.dark]

  if (!lightSrc || !darkSrc) {
    return null
  }

  if (variant === 'menu') {
    return (
      <>
        <DivisionLogoImage
          src={lightSrc}
          className="block dark:hidden dark:group-hover:block dark:group-[.is-active]:block"
        />
        <DivisionLogoImage
          src={darkSrc}
          className="hidden dark:block dark:group-hover:hidden dark:group-[.is-active]:hidden"
        />
      </>
    )
  }

  return (
    <>
      <DivisionLogoImage src={lightSrc} className="dark:hidden" />
      <DivisionLogoImage src={darkSrc} className="hidden dark:block" />
    </>
  )
}
