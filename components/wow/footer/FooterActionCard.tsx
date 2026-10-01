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
  'group box-border flex h-full min-h-0 w-full self-stretch rounded-radius-sm border text-left transition-colors',
  'border-[#1515151A] dark:border-[#EDF0F51A]',
  footerItemSurfaceClass,
)

const cardRowLayoutClass = cn(
  'items-center gap-2 px-2.5 py-2 sm:gap-2.5 sm:px-3 sm:py-2.5 2xl:gap-4 2xl:px-5 2xl:py-5',
)

const cardContactLayoutClass = cn(
  'flex-col items-stretch justify-between gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4 2xl:gap-6 2xl:p-8',
)

const rowShellClass = cn(
  'group !inline-flex w-full items-center gap-2 rounded-radius-sm p-1.5 transition-colors sm:gap-2.5 sm:p-2',
  footerItemSurfaceClass,
)

function FooterContactArrow() {
  return (
    <span
      className={cn(
        'relative inline-flex size-7 shrink-0 items-center justify-center self-end overflow-hidden rounded-radius-sm border sm:size-8 sm:self-center 2xl:size-10',
        footerIconBoxClass,
      )}
    >
      <ArrowUpRight
        aria-hidden
        className={cn(
          'absolute left-1/2 top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500',
          'group-hover:translate-x-1/2 group-hover:-translate-y-[180%] group-hover:opacity-0',
          'sm:size-4 2xl:size-5',
          footerIconClass,
        )}
        strokeWidth={1.75}
      />
      <ArrowUpRight
        aria-hidden
        className={cn(
          'absolute left-1/2 top-1/2 size-3.5 opacity-0 transition-all duration-500',
          '-translate-x-[180%] translate-y-[180%]',
          'group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100',
          'sm:size-4 2xl:size-5',
          footerIconClass,
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
      {iconId ? <MenuItemIcon iconId={iconId} className={cn('size-3.5 sm:size-4', footerIconClass)} /> : icon}
    </span>
  )
}

function FooterPlainIcon({ iconId }: { iconId: string }) {
  return (
    <MenuItemIcon
      iconId={iconId}
      className={cn(
        'size-5 shrink-0 sm:size-6 2xl:size-7',
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

  return (
    <FooterNavLink
      href={href}
      onClick={onClick}
      className={cn(cardShellClass, isContactCard ? cardContactLayoutClass : cardRowLayoutClass)}
    >
      {isContactCard ? (
        <>
          <div className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-4 2xl:gap-5">
            {iconStyle === 'boxed' && (iconId || icon) ? (
              <FooterIconBox iconId={iconId} icon={icon} />
            ) : null}
            <span className="min-w-0">
              <span
                className={cn(
                  'block font-outfit text-base font-light leading-tight sm:text-lg 2xl:text-[28px] 2xl:leading-[1.15]',
                  navItemLabelClass,
                  'text-secondary dark:text-[#F2F2F2]',
                )}
              >
                {title}
              </span>
              {description ? (
                <span
                  className={cn(
                    'mt-1 block font-outfit text-xs font-light leading-snug sm:text-sm 2xl:mt-2 2xl:text-base 2xl:leading-[1.5]',
                    navItemDescriptionClass,
                    '!text-[#808080]',
                  )}
                >
                  {description}
                </span>
              ) : null}
            </span>
          </div>
          <FooterContactArrow />
        </>
      ) : (
        <>
          {iconStyle === 'boxed' && (iconId || icon) ? <FooterIconBox iconId={iconId} icon={icon} /> : null}
          {iconStyle === 'plain' && iconId ? <FooterPlainIcon iconId={iconId} /> : null}
          <span className="min-w-0 flex-1">
            <span
              className={cn(
                'block font-outfit text-[13px] font-light leading-tight sm:text-sm 2xl:text-lg',
                navItemLabelClass,
                'text-secondary dark:text-[#F2F2F2]',
              )}
            >
              {title}
            </span>
            {description ? (
              <span
                className={cn(
                  'mt-0.5 block font-outfit text-[11px] font-light leading-snug sm:text-xs 2xl:text-sm',
                  navItemDescriptionClass,
                  '!text-[#808080]',
                )}
              >
                {description}
              </span>
            ) : null}
          </span>
        </>
      )}
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
      <span
        className={cn(
          'inline-flex size-7 shrink-0 items-center justify-center rounded-radius-sm border p-1.5 sm:size-8 2xl:p-2',
          footerIconBoxClass,
        )}
      >
        <MenuItemIcon iconId={iconId} className={cn('size-3.5 sm:size-4', footerIconClass)} />
      </span>
      <span
        className={cn(
          'min-w-0 flex-1 font-outfit text-[13px] font-light sm:text-sm 2xl:text-base',
          navItemLabelClass,
          'text-secondary dark:text-[#F2F2F2]',
        )}
      >
        {label}
      </span>
    </FooterNavLink>
  )
}
