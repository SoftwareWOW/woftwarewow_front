'use client'

import { MenuItemIcon } from '@/components/wow/nav/MenuItemIcon'
import { isDivisionHref } from '@/components/wow/nav/nav-brand-assets'
import { navItemHoverClass, navItemIconClass } from '@/components/wow/nav/nav-interaction-styles'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { ArrowUpRight } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'

const footerIconBoxClass = cn(
  'border-black/10 bg-transparent group-hover:border-transparent group-hover:bg-primary group-[.is-active]:border-transparent group-[.is-active]:bg-primary',
  'dark:border-[#EDF0F51A] dark:bg-transparent dark:group-hover:border-transparent dark:group-hover:bg-primary dark:group-[.is-active]:border-transparent dark:group-[.is-active]:bg-primary',
)

const cardShellClass = cn(
  'group !inline-flex w-full items-center gap-2 rounded-radius-md border px-2.5 py-2 text-left transition-colors',
  'border-[#1515151A] bg-transparent dark:border-[#EDF0F51A]',
  'hover:border-transparent dark:hover:border-transparent',
  navItemHoverClass,
  'sm:gap-2.5 sm:px-3 sm:py-2.5',
  '2xl:gap-4 2xl:px-5 2xl:py-5',
)

const rowShellClass = cn(
  'group !inline-flex w-full items-center gap-2 rounded-radius-sm p-1.5 transition-colors sm:gap-2.5 sm:p-2',
  navItemHoverClass,
)

function FooterSkewArrow() {
  return (
    <span
      className={cn(
        'relative inline-flex size-7 shrink-0 overflow-hidden rounded-radius-sm border sm:size-8 2xl:size-10',
        footerIconBoxClass,
      )}
    >
      <ArrowUpRight
        aria-hidden
        className={cn(
          'absolute left-1/2 top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500',
          'group-hover:-translate-y-6 group-hover:translate-x-4 group-hover:opacity-0',
          'sm:size-4 sm:group-hover:-translate-y-7 sm:group-hover:translate-x-5',
          '2xl:size-5 2xl:group-hover:-translate-y-8 2xl:group-hover:translate-x-6',
          navItemIconClass,
        )}
        strokeWidth={1.75}
      />
      <ArrowUpRight
        aria-hidden
        className={cn(
          'absolute size-3.5 opacity-0 transition-all duration-500',
          '-translate-x-2 translate-y-6',
          'group-hover:translate-x-[14px] group-hover:translate-y-[2px] group-hover:opacity-100',
          'sm:size-4 sm:-translate-x-2.5 sm:translate-y-7 sm:group-hover:translate-x-[17px] sm:group-hover:translate-y-[2px]',
          '2xl:size-5 2xl:-translate-x-3 2xl:translate-y-8 2xl:group-hover:translate-x-[22px] 2xl:group-hover:translate-y-[3px]',
          navItemIconClass,
        )}
        strokeWidth={1.75}
      />
    </span>
  )
}

function FooterIconBox({ iconId, icon }: { iconId?: string; icon?: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex size-7 shrink-0 items-center justify-center rounded-radius-sm border p-1.5 sm:size-8 2xl:size-9 2xl:p-2',
        footerIconBoxClass,
      )}
    >
      {iconId ? <MenuItemIcon iconId={iconId} className={cn('size-3.5 sm:size-4', navItemIconClass)} /> : icon}
    </span>
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
}: {
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  iconId?: string
  icon?: ReactNode
  title: ReactNode
  description?: string
}) {
  return (
    <FooterNavLink href={href} onClick={onClick} className={cardShellClass}>
      {iconId || icon ? <FooterIconBox iconId={iconId} icon={icon} /> : null}
      <span className="min-w-0 flex-1">
        <span className="block font-outfit text-[13px] font-light leading-tight text-secondary group-hover:text-black dark:text-[#F2F2F2] dark:group-hover:!text-white sm:text-sm 2xl:text-lg">
          {title}
        </span>
        {description ? (
          <span className="mt-0.5 block font-outfit text-[11px] font-light leading-snug !text-[#808080] group-hover:text-black/60 dark:group-hover:!text-[#94A3B8] sm:text-xs 2xl:text-sm">
            {description}
          </span>
        ) : null}
      </span>
      <FooterSkewArrow />
    </FooterNavLink>
  )
}

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
    <FooterNavLink href={href} className={rowShellClass}>
      <FooterIconBox iconId={iconId} />
      <span className="min-w-0 flex-1 font-outfit text-[13px] font-light text-secondary group-hover:text-black dark:text-[#F2F2F2] dark:group-hover:!text-white sm:text-sm 2xl:text-base">
        {label}
      </span>
      <FooterSkewArrow />
    </FooterNavLink>
  )
}
