'use client'

import { navbarBrandLogo } from '@/components/wow/nav/nav-brand-assets'
import Image from 'next/image'
import { cn } from '@/utils/cn'

type WowSuperagencyLogoProps = {
  className?: string
  /** Footer watermark uses a large faint mark */
  variant?: 'default' | 'watermark'
}

function LogoImage({
  src,
  className,
  width,
  height,
}: {
  src: string
  className?: string
  width: number
  height: number
}) {
  return (
    <Image
      src={src}
      alt="WOW Superagency"
      width={width}
      height={height}
      unoptimized
      className={className}
    />
  )
}

export function WowSuperagencyLogo({ className, variant = 'default' }: WowSuperagencyLogoProps) {
  const watermark = variant === 'watermark'

  return (
    <>
      <LogoImage
        src={navbarBrandLogo.light}
        width={320}
        height={40}
        className={cn(
          'h-auto w-auto max-w-full object-contain object-left dark:hidden',
          watermark ? 'max-h-[clamp(2.5rem,8vw,5rem)] opacity-20' : 'max-h-8 sm:max-h-9 2xl:max-h-10',
          className,
        )}
      />
      <LogoImage
        src={navbarBrandLogo.dark}
        width={320}
        height={40}
        className={cn(
          'hidden h-auto w-auto max-w-full object-contain object-left dark:block',
          watermark ? 'max-h-[clamp(2.5rem,8vw,5rem)] opacity-10' : 'max-h-8 sm:max-h-9 2xl:max-h-10',
          className,
        )}
      />
    </>
  )
}
