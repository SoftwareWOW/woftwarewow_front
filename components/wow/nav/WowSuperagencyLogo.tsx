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

  const defaultSizeClass = 'h-5 w-auto max-w-full sm:h-6 md:h-8 2xl:h-10'
  const imageClass = cn(
    'block object-contain',
    objectClass,
    watermark
      ? 'h-auto w-auto max-h-[clamp(2.5rem,8vw,5rem)] max-w-full opacity-20 dark:opacity-10'
      : (className ?? defaultSizeClass),
  )

  const logo = (
    <>
      <LogoImage src={navbarBrandLogo.light} className={cn(imageClass, 'dark:hidden')} />
      <LogoImage src={navbarBrandLogo.dark} className={cn(imageClass, 'hidden dark:block')} />
    </>
  )

  if (watermark) {
    return (
      <div className={cn('flex w-full justify-center', className)}>{logo}</div>
    )
  }

  return (
    <span className="inline-flex max-w-full shrink-0 items-center leading-none">{logo}</span>
  )
}
