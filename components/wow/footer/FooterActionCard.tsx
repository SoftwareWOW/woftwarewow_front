'use client'

import { MenuItemIcon } from '@/components/wow/nav/MenuItemIcon'
import { isDivisionHref } from '@/components/wow/nav/nav-brand-assets'
import { footerItemSurfaceClass } from '@/components/wow/footer/footer-shell-styles'
import { navItemDescriptionClass, navItemLabelClass } from '@/components/wow/nav/nav-interaction-styles'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { ArrowUpRight } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'

const footerIconBoxClass = cn(
  'border-black/10 dark:border-[#EDF0F51A]',
  footerItemSurfaceClass,
  'group-hover:bg-background dark:group-hover:bg-[#151515]',
)

const footerIconClass = cn(
  'stroke-secondary text-secondary dark:stroke-[#F2F2F2] dark:text-[#F2F2F2]',
  'group-hover:stroke-black group-hover:text-black dark:group-hover:!stroke-white dark:group-hover:!text-white',
)

const cardShellClass = cn(
  'group box-border flex h-full min-h-0 min-w-0 w-full max-w-full self-stretch rounded-radius-sm border text-left transition-colors',
  'border-[#1515151A] dark:border-[#EDF0F51A]',
  footerItemSurfaceClass,
)

const cardRowLayoutClass = cn(
  'items-center gap-2 px-2.5 py-2 sm:gap-2.5 sm:px-3 sm:py-2.5 2xl:gap-4 2xl:px-5 2xl:py-5',
)

/** Services tab cards (iconStyle plain) — Figma @ ~1400px: 24px title, 16px body, 60px icon, 20px pad, 24px gap. */
const cardServiceRowLayoutClass = cn(
  'flex-row items-start gap-3 p-3',
  'sm:gap-3.5 sm:p-3.5',
  'md:items-center md:gap-4 md:p-4',
  'lg:gap-4 lg:p-4',
  'xl:gap-6 xl:p-5',
  'min-[1400px]:gap-6 min-[1400px]:p-5',
)

const footerServiceTitleClass = cn(
  'block break-words font-outfit font-light leading-tight text-secondary dark:text-[#F2F2F2]',
  'text-[15px] sm:text-base md:text-lg lg:text-lg xl:text-xl min-[1400px]:text-2xl min-[1400px]:leading-[1.15]',
  navItemLabelClass,
)

const footerServiceDescriptionClass = cn(
  'mt-1 block break-words font-outfit font-light !text-[#808080]',
  'text-[11px] leading-snug sm:mt-1.5 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px]',
  'min-[1400px]:mt-2 min-[1400px]:text-base min-[1400px]:leading-[1.5]',
  navItemDescriptionClass,
)

/** Contact tab — Figma @ 1400px: 36px title, 16px body, 60px plain icon, 80px arrow; scales below/above. */
const cardContactLayoutClass = cn(
  'flex-col items-stretch gap-3 p-3 sm:gap-4 sm:p-4 lg:gap-5 lg:p-5 xl:gap-6 xl:p-6 min-[1400px]:gap-6 min-[1400px]:p-8',
)

const footerContactTitleClass = cn(
  'block font-outfit font-light leading-[1.15] text-secondary dark:text-[#F2F2F2]',
  'text-xl sm:text-2xl md:text-[26px] lg:text-[30px] xl:text-[34px]',
  'min-[1400px]:text-[36px] min-[1800px]:text-[40px]',
)

const footerContactDescriptionClass = cn(
  'mt-1 block font-outfit font-light leading-[1.5] !text-[#808080]',
  'text-xs sm:text-sm md:text-[14px] lg:text-[15px]',
  'min-[1400px]:mt-2 min-[1400px]:text-base min-[1800px]:text-[17px]',
)

const rowShellClass = cn(
  'group !inline-flex w-full items-center gap-2 rounded-radius-sm p-1.5 transition-colors sm:gap-2.5 sm:p-2',
  footerItemSurfaceClass,
)

const footerContactArrowBoxClass = cn(
  'relative ml-auto inline-flex shrink-0 items-center justify-center overflow-hidden rounded-radius-sm border',
  'border-[#1515151A] bg-transparent dark:border-[#EDF0F51A]',
  'size-11 min-h-11 min-w-11 sm:size-12 sm:min-h-12 sm:min-w-12',
  'md:size-14 md:min-h-14 md:min-w-14 lg:size-16 lg:min-h-16 lg:min-w-16',
  'xl:size-[72px] xl:min-h-[72px] xl:min-w-[72px]',
  'min-[1400px]:size-[80px] min-[1400px]:min-h-[80px] min-[1400px]:min-w-[80px]',
  'min-[1800px]:size-[88px] min-[1800px]:min-h-[88px] min-[1800px]:min-w-[88px]',
)

const footerContactArrowIconClass = cn(
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  'size-4 sm:size-[18px] md:size-5 lg:size-6 xl:size-7 min-[1400px]:size-8 min-[1800px]:size-9',
  '!fill-none stroke-secondary dark:stroke-[#F2F2F2]',
  'group-hover:stroke-black dark:group-hover:!stroke-white',
)

function FooterContactArrow() {
  return (
    <span className={footerContactArrowBoxClass}>
      <ArrowUpRight
        aria-hidden
        className={cn(
          footerContactArrowIconClass,
          'opacity-100 transition-all duration-500 group-hover:translate-x-1/2 group-hover:-translate-y-[180%] group-hover:opacity-0',
        )}
        strokeWidth={1.75}
      />
      <ArrowUpRight
        aria-hidden
        className={cn(
          footerContactArrowIconClass,
          'opacity-0 transition-all duration-500',
          '-translate-x-[180%] translate-y-[180%]',
          'group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100',
        )}
        strokeWidth={1.75}
      />
    </span>
  )
}

/** Plain glyph only — no border/background (Figma contact cards). */
const footerContactPlainIconClass = cn(
  'size-10 sm:size-11 md:size-12 lg:size-14 xl:size-[52px]',
  'min-[1400px]:size-[60px] min-[1800px]:size-[66px]',
  '!fill-none stroke-secondary dark:stroke-[#F2F2F2]',
  'group-hover:stroke-black dark:group-hover:!stroke-white',
  '[&_*]:!fill-none',
)

function FooterContactPlainIcon({ iconId, icon }: { iconId?: string; icon?: ReactNode }) {
  if (icon) {
    return (
      <span className="inline-flex shrink-0 items-center justify-center bg-transparent">{icon}</span>
    )
  }
  if (!iconId) return null
  return (
    <span className="inline-flex shrink-0 items-center justify-center bg-transparent">
      <MenuItemIcon iconId={iconId} className={footerContactPlainIconClass} />
    </span>
  )
}

function FooterIconBox({
  iconId,
  icon,
}: {
  iconId?: string
  icon?: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex size-7 shrink-0 items-center justify-center rounded-radius-sm border p-1.5 sm:size-8 2xl:size-9 2xl:p-2',
        footerIconBoxClass,
      )}
    >
      {iconId ? <MenuItemIcon iconId={iconId} className={cn('size-3.5 sm:size-4', footerIconClass)} /> : icon}
    </span>
  )
}

function FooterPlainIcon({ iconId, variant = 'default' }: { iconId: string; variant?: 'default' | 'service' }) {
  const sizeClass =
    variant === 'service'
      ? cn(
          'size-9 shrink-0 sm:size-10 md:size-11 lg:size-12 xl:size-14 min-[1400px]:size-[60px]',
        )
      : cn('size-5 shrink-0 sm:size-6 2xl:size-7')

  return (
    <MenuItemIcon
      iconId={iconId}
      className={cn(
        sizeClass,
        'stroke-secondary text-secondary group-hover:stroke-black group-hover:text-black',
        'dark:stroke-[#F2F2F2] dark:text-[#F2F2F2] dark:group-hover:!stroke-white dark:group-hover:!text-white',
      )}
    />
  )
}

type FooterNavLinkProps = {
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  className: string
  children: ReactNode
}

function FooterNavLink({ href, onClick, className, children }: FooterNavLinkProps) {
  if (!href) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    )
  }

  const division = isDivisionHref(href)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
      {...(division ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Link>
  )
}

export function FooterActionCard({
  href,
  onClick,
  iconId,
  icon,
  title,
  description,
  showArrow = false,
  iconStyle = 'none',
}: {
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  iconId?: string
  icon?: ReactNode
  title: ReactNode
  description?: string
  showArrow?: boolean
  iconStyle?: 'none' | 'boxed' | 'plain'
}) {
  const isContactCard = showArrow
  const isServiceCard = iconStyle === 'plain' && !isContactCard

  return (
    <FooterNavLink
      href={href}
      onClick={onClick}
      className={cn(
        cardShellClass,
        isContactCard ? cardContactLayoutClass : isServiceCard ? cardServiceRowLayoutClass : cardRowLayoutClass,
      )}
    >
      {isContactCard ? (
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 sm:gap-4 lg:gap-5 min-[1400px]:gap-6">
          <div className="flex w-full items-start justify-between gap-3 sm:gap-4">
            {iconStyle === 'boxed' && (iconId || icon) ? (
              <FooterContactPlainIcon iconId={iconId} icon={icon} />
            ) : (
              <span className="shrink-0" aria-hidden />
            )}
            <FooterContactArrow />
          </div>
          <span className="min-w-0">
            <span className={footerContactTitleClass}>{title}</span>
            {description ? (
              <span className={footerContactDescriptionClass}>{description}</span>
            ) : null}
          </span>
        </div>
      ) : (
        <>
          {iconStyle === 'boxed' && (iconId || icon) ? <FooterIconBox iconId={iconId} icon={icon} /> : null}
          {iconStyle === 'plain' && iconId ? (
            <FooterPlainIcon iconId={iconId} variant={isServiceCard ? 'service' : 'default'} />
          ) : null}
          <span className="min-w-0 flex-1">
            <span
              className={
                isServiceCard
                  ? footerServiceTitleClass
                  : cn(
                      'block font-outfit text-[13px] font-light leading-tight sm:text-sm 2xl:text-lg',
                      navItemLabelClass,
                      'text-secondary dark:text-[#F2F2F2]',
                    )
              }
            >
              {title}
            </span>
            {description ? (
              <span className={isServiceCard ? footerServiceDescriptionClass : cn(
                  'mt-0.5 block font-outfit text-[11px] font-light leading-snug sm:text-xs 2xl:text-sm',
                  navItemDescriptionClass,
                  '!text-[#808080]',
                )}>
                {description}
              </span>
            ) : null}
          </span>
        </>
      )}
    </FooterNavLink>
  )
}

/** Resources tab column titles — Figma @ 1400px: 32px. */
export const footerResourceColumnTitleClass = cn(
  'font-outfit font-light leading-tight text-secondary dark:text-[#F2F2F2]',
  'text-lg sm:text-xl md:text-2xl lg:text-[28px]',
  'min-[1400px]:text-[32px] min-[1800px]:text-[36px]',
)

const footerResourceLinkRowClass = cn(
  'group inline-flex w-full items-center gap-2 py-1 sm:gap-2.5 sm:py-1.5 min-[1400px]:gap-3',
)

/** Resources tab link icons — plain glyph @ 1400px: 20×20px. */
const footerResourceLinkIconClass = cn(
  'shrink-0 !fill-none',
  'size-4 sm:size-[18px] md:size-5',
  'min-[1400px]:size-5 min-[1800px]:size-[22px]',
  'stroke-secondary dark:stroke-[#F2F2F2]',
  'group-hover:stroke-black dark:group-hover:!stroke-white',
  '[&_*]:!fill-none',
)

/** Resources tab link labels — Figma @ 1400px: 20px. */
const footerResourceLinkLabelClass = cn(
  'min-w-0 flex-1 font-outfit font-light leading-snug text-secondary dark:text-[#F2F2F2]',
  'text-sm sm:text-base md:text-lg',
  'min-[1400px]:text-xl min-[1800px]:text-[22px]',
)

export function FooterTextLink({
  href,
  iconId,
  label,
}: {
  href: string
  iconId: string
  label: string
}) {
  return (
    <FooterNavLink href={href} className={footerResourceLinkRowClass}>
      <MenuItemIcon iconId={iconId} className={footerResourceLinkIconClass} />
      <span className={footerResourceLinkLabelClass}>{label}</span>
    </FooterNavLink>
  )
}
