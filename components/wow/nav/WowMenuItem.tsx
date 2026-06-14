'use client'

import { Link } from '@/i18n/navigation'
import { MenuItemIcon } from './MenuItemIcon'
import { WowDivisionLogo } from './WowDivisionLogo'

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
  const className = `flex w-full gap-2 rounded-[3px] p-[10px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    tall ? 'min-h-[108px]' : ''
  } ${
    active
      ? 'bg-black/[0.04] dark:bg-white/[0.06]'
      : 'bg-white hover:bg-black/[0.02] dark:bg-dark-200 dark:hover:bg-white/[0.04]'
  }`

  const content = (
    <>
      <div className="flex size-7 shrink-0 items-center justify-center rounded-[3px] border-[0.5px] border-[#e6e6e6] bg-white p-2 dark:border-dark dark:bg-dark-200">
        <MenuItemIcon iconId={iconId} />
      </div>
      <div className="relative min-w-0 flex-1">
        <p className="text-sm font-light leading-none text-black dark:text-backgroundBody">{label}</p>
        {description && (
          <div className="mt-1.5 text-xs font-light text-[#666] dark:text-dark-100">
            {multilineDescription ? (
              description.split('\n').map((line) => (
                <p key={line} className="leading-[1.38]">
                  {line}
                </p>
              ))
            ) : (
              <p className="leading-[1.38]">{description}</p>
            )}
          </div>
        )}
        {showChevron && (
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            aria-hidden
            className="absolute end-[10px] top-[2px] text-black/40 dark:text-dark-100">
            <path d="M1 1L5 6L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
}

export function WowDivisionItem({ divisionId, href, onClick, onMouseEnter, active = false }: WowDivisionItemProps) {
  const className = `flex w-[203px] flex-col items-start justify-center rounded-[3px] px-[10px] py-[15px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    active
      ? 'bg-black/[0.04] dark:bg-white/[0.06]'
      : 'bg-white hover:bg-black/[0.02] dark:bg-dark-200 dark:hover:bg-white/[0.04]'
  }`

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
