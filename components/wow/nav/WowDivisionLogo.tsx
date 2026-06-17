'use client'

import Image from 'next/image'
import { divisionBrandLogos } from './nav-brand-assets'

type WowDivisionLogoProps = {
  divisionId: string
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

export function WowDivisionLogo({ divisionId }: WowDivisionLogoProps) {
  const lightSrc = divisionBrandLogos.light[divisionId as keyof typeof divisionBrandLogos.light]
  const darkSrc = divisionBrandLogos.dark[divisionId as keyof typeof divisionBrandLogos.dark]

  if (!lightSrc || !darkSrc) {
    return null
  }

  return (
    <>
      <DivisionLogoImage src={lightSrc} className="dark:hidden" />
      <DivisionLogoImage src={darkSrc} className="hidden dark:block" />
    </>
  )
}
