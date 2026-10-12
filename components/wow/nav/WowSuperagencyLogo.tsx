'use client'

import { navbarBrandLogo } from '@/components/wow/nav/nav-brand-assets'
import { cn } from '@/utils/cn'

type WowSuperagencyLogoProps = {
  className?: string
  /** Footer watermark uses a large faint mark */
  variant?: 'default' | 'watermark'
}

function LogoImage({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG brand marks
    <img
      src={src}
      alt="WOW Superagency"
      className={className}
      decoding="async"
    />
  )
}

export function WowSuperagencyLogo({ className, variant = 'default' }: WowSuperagencyLogoProps) {
  const watermark = variant === 'watermark'

  return (
    <>
      <LogoImage
        src={navbarBrandLogo.light}
        className={cn(
          'h-auto w-auto max-w-full object-contain object-left dark:hidden',
          watermark ? 'max-h-[clamp(2.5rem,8vw,5rem)] opacity-20' : 'max-h-8 sm:max-h-9 2xl:max-h-10',
          className,
        )}
      />
      <LogoImage
        src={navbarBrandLogo.dark}
        className={cn(
          'hidden h-auto w-auto max-w-full object-contain object-left dark:block',
          watermark ? 'max-h-[clamp(2.5rem,8vw,5rem)] opacity-10' : 'max-h-8 sm:max-h-9 2xl:max-h-10',
          className,
        )}
      />
    </>
  )
}
