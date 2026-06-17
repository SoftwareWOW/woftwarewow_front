'use client'

import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'
import { MenuItemIcon } from './MenuItemIcon'
import { WowDivisionLogo } from './WowDivisionLogo'

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

const activeClass =
  'bg-black/[0.04] dark:bg-white/[0.08]'
const inactiveClass =
  'bg-white hover:bg-black/[0.02] dark:bg-dark dark:hover:bg-white/[0.04]'

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
  const className = `flex w-full gap-[8px] rounded-[3px] p-[10px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    tall ? 'min-h-[108px]' : ''
  } ${active ? activeClass : inactiveClass}`

  const content = (
    <>
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[3px] border-[0.5px] border-black/10 bg-white p-[8px] dark:border-dark dark:bg-dark">
        <MenuItemIcon iconId={iconId} />
      </div>
      <div className={`relative min-w-0 flex-1 ${showChevron ? 'pe-[22px]' : ''}`}>
        <div className="flex flex-col gap-[6px]">
          <p className="text-[14px] font-light leading-none text-black dark:text-backgroundBody">{label}</p>
          {description && (
            <>
              {multilineDescription ? (
                description.split('\n').map((line) => (
                  <p
                    key={line}
                    className="text-xs font-light leading-[1.38] text-black/60 dark:text-dark-100">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-xs font-light leading-[1.38] text-black/60 dark:text-dark-100">{description}</p>
              )}
            </>
          )}
        </div>
        {showChevron && (
          <ChevronRight
            aria-hidden
            className="absolute end-[10px] top-[2px] h-3 w-1.5 text-black/40 dark:text-dark-100"
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

  const className = `flex flex-col items-start justify-center rounded-[3px] px-[10px] py-[15px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    isMobile ? 'w-full' : 'w-[203px]'
  } ${active ? activeClass : inactiveClass}`

  const content = <WowDivisionLogo divisionId={divisionId} />

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
