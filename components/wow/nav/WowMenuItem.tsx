'use client'

import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'
import { MenuItemIcon } from './MenuItemIcon'
import { divisionHrefs, type DivisionId } from './nav-brand-assets'
import { WowDivisionLogo } from './WowDivisionLogo'
import { navItemActiveClass, navItemChevronClass, navItemDescriptionClass, navItemIconBoxClass, navItemIconClass, navItemInactiveClass, navItemLabelClass } from './nav-interaction-styles'

type MenuVariant = 'desktop' | 'mobile'

type WowMenuItemProps = {
  iconId: string
  label: string
  description?: string
  href?: string
  onClick?: () => void
  onMouseEnter?: () => void
  active?: boolean
  showChevron?: boolean
  multilineDescription?: boolean
  tall?: boolean
}

export function WowMenuItem({
  iconId,
  label,
  description,
  href,
  onClick,
  onMouseEnter,
  active = false,
  showChevron = true,
  multilineDescription = false,
  tall = false,
}: WowMenuItemProps) {
  const className = `group flex w-full gap-[8px] rounded-radius-sm p-[10px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    tall ? 'min-h-[108px]' : ''
  } ${active ? `is-active ${navItemActiveClass}` : navItemInactiveClass}`

  const content = (
    <>
      <div className={`flex size-[28px] shrink-0 items-center justify-center rounded-radius-sm border-[0.5px] p-[8px] ${navItemIconBoxClass}`}>
        <MenuItemIcon iconId={iconId} className={navItemIconClass} />
      </div>
      <div className={`relative min-w-0 flex-1 ${showChevron ? 'pe-[22px]' : ''}`}>
        <div className="flex flex-col gap-[6px]">
          <p className={`text-[14px] font-light leading-none ${navItemLabelClass}`}>{label}</p>
          {description && (
            <>
              {multilineDescription ? (
                description.split('\n').map((line) => (
                  <p
                    key={line}
                    className={`text-xs font-light leading-[1.38] ${navItemDescriptionClass}`}>
                    {line}
                  </p>
                ))
              ) : (
                <p className={`text-xs font-light leading-[1.38] ${navItemDescriptionClass}`}>{description}</p>
              )}
            </>
          )}
        </div>
        {showChevron && (
          <ChevronRight
            aria-hidden
            className={`absolute end-[10px] top-1/2 h-3 w-5 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-[.is-active]:opacity-100 ${navItemChevronClass}`}
            strokeWidth={1.2}
          />
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick} onMouseEnter={onMouseEnter} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} onMouseEnter={onMouseEnter} className={className}>
      {content}
    </button>
  )
}

type WowDivisionItemProps = {
  divisionId: string
  href?: string
  onClick?: () => void
  onMouseEnter?: () => void
  active?: boolean
  variant?: MenuVariant
}

export function WowDivisionItem({
  divisionId,
  href,
  onClick,
  onMouseEnter,
  active = false,
  variant = 'desktop',
}: WowDivisionItemProps) {
  const isMobile = variant === 'mobile'

  const className = `group flex flex-col items-start justify-center rounded-[3px] px-[10px] py-[15px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    isMobile ? 'w-full' : 'w-[203px]'
  } ${active ? `is-active ${navItemActiveClass}` : navItemInactiveClass}`

  const content = <WowDivisionLogo divisionId={divisionId} variant="menu" />
  const resolvedHref =
    divisionId in divisionHrefs
      ? divisionHrefs[divisionId as DivisionId]
      : href

  if (resolvedHref) {
    return (
      <Link
        href={resolvedHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={className}
      >
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} onMouseEnter={onMouseEnter} className={className}>
      {content}
    </button>
  )
}
