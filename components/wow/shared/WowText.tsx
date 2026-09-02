import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export const WOW_GRADIENT =
  'linear-gradient(90deg, #615CC7 0%, #6F62BF 25%, #9671AC 50%, #D38B8E 75%, #DB8E8B 100%)'

const wowGradientStyle = {
  background: WOW_GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
} as const

const variantClasses = {
  brand:
    "inline-block overflow-visible pr-[0.12em] font-['Outfit'] font-extrabold leading-[0.95] tracking-[-0.06em] transition-transform duration-300 hover:scale-[1.02]",
  watermark: 'inline-block overflow-visible opacity-20 dark:opacity-10',
} as const

type WowTextProps = {
  children?: ReactNode
  className?: string
  variant?: keyof typeof variantClasses
}

export function renderWowInTitle(title: string, className?: string) {
  if (/^softwarewow/i.test(title.replace(/[^a-z]/gi, ''))) {
    return (
      <>
        <span className="font-extrabold tracking-[-0.06em] text-secondary group-hover:text-black dark:text-[#F2F2F2] dark:group-hover:!text-white">Software</span>
        <WowText className={className}>WOW!</WowText>
      </>
    )
  }

  if (title.startsWith('WOW ')) {
    return (
      <>
        <WowText className={className} />
        <span> {title.slice(4)}</span>
      </>
    )
  }

  const wowIndex = title.indexOf('WOW')
  if (wowIndex !== -1) {
    return (
      <>
        {title.slice(0, wowIndex)}
        <WowText className={className}>WOW!</WowText>
        {title.slice(wowIndex + 3)}
      </>
    )
  }

  return title
}

export default function WowText({
  children = 'WOW',
  className,
  variant = 'brand',
}: WowTextProps) {
  return (
    <span className={cn(variantClasses[variant], className)} style={wowGradientStyle}>
      {children}
    </span>
  )
}
