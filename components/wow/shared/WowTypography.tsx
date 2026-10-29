import { cn } from '@/lib/utils'
import type { ElementType, ReactNode } from 'react'

/** Outfit / brand body weight (300) for Superagency & division experiences. */
export const WOW_FONT_WEIGHT = 'font-light'

type WowTypoProps = {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function WowH1({ children, className, as: Tag = 'h1' }: WowTypoProps) {
  return (
    <Tag
      className={cn(
        WOW_FONT_WEIGHT,
        'font-satoshi text-black dark:text-backgroundBody',
        'text-5xl leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function WowH2({ children, className, as: Tag = 'h2' }: WowTypoProps) {
  return (
    <Tag
      className={cn(
        WOW_FONT_WEIGHT,
        'font-satoshi text-black dark:text-backgroundBody',
        'text-[38px] leading-[1.3] md:text-[47px] md:leading-[1.2] lg:text-[54px] lg:leading-[1.24] xl:text-[64px]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function WowP({ children, className, as: Tag = 'p' }: WowTypoProps) {
  return (
    <Tag
      className={cn(
        WOW_FONT_WEIGHT,
        'text-base text-colorText dark:text-backgroundBody/70 md:text-lg lg:text-xl lg:leading-[1.4]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

type WowLabelProps = {
  children: ReactNode
  className?: string
}

export function WowLabel({ children, className }: WowLabelProps) {
  return (
    <span
      className={cn(
        WOW_FONT_WEIGHT,
        'inline-flex w-fit rounded-full bg-[#15151533] px-4 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#0D0D0D] dark:bg-[#EDF0F533] dark:text-[#F2F2F2] sm:text-[11px] xl:text-[12px]',
        className,
      )}
    >
      {children}
    </span>
  )
}
