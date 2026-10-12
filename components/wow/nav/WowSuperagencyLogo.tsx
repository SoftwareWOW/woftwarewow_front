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
  const objectClass = watermark ? 'object-center' : 'object-left'

  const logo = (
    <>
      <LogoImage
        src={navbarBrandLogo.light}
        className={cn(
          'h-auto w-auto max-w-full object-contain dark:hidden',
          objectClass,
          watermark ? 'max-h-[clamp(2.5rem,8vw,5rem)] opacity-20' : 'max-h-8 sm:max-h-9 2xl:max-h-10',
          !watermark ? className : undefined,
        )}
      />
      <LogoImage
        src={navbarBrandLogo.dark}
        className={cn(
          'hidden h-auto w-auto max-w-full object-contain dark:block',
          objectClass,
          watermark ? 'max-h-[clamp(2.5rem,8vw,5rem)] opacity-10' : 'max-h-8 sm:max-h-9 2xl:max-h-10',
          !watermark ? className : undefined,
        )}
      />
    </>
  )

  if (watermark) {
    return (
      <div className={cn('flex w-full justify-center', className)}>{logo}</div>
    )
  }

  return logo
}
