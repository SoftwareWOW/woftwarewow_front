'use client'

import { getNavCardImage } from '@/components/wow/nav/nav-assets'
import type { NavigationDetailPanel } from '@/components/wow/nav/navigation-types'
import { WowDivisionLogo } from '@/components/wow/nav/WowDivisionLogo'
import type { DivisionId } from '@/i18n/division-paths'
import { cn } from '@/utils/cn'

const logoScaleClassName =
  'inline-flex shrink-0 cursor-default items-center border-0 bg-transparent p-0 text-[clamp(2.5rem,8vw,6rem)] leading-none outline-none'

const logoImageClassName =
  'h-[1em] w-auto max-w-[min(100%,14em)] object-contain object-left transition-opacity duration-200 hover:opacity-90'

export type MarqueeDivisionHint = Pick<NavigationDetailPanel, 'title' | 'description'> & {
  divisionId: DivisionId
  imageSrc: string
}

function hintFromDetail(divisionId: DivisionId, detail: NavigationDetailPanel): MarqueeDivisionHint {
  return {
    divisionId,
    title: detail.title,
    description: detail.description,
    imageSrc: getNavCardImage(divisionId),
  }
}

type WowDivisionMarqueeLogoHoverProps = {
  divisionId: DivisionId
  label: string
  detail: NavigationDetailPanel
  onHintChange: (hint: MarqueeDivisionHint | null) => void
}

export default function WowDivisionMarqueeLogoHover({
  divisionId,
  label,
  detail,
  onHintChange,
}: WowDivisionMarqueeLogoHoverProps) {
  return (
    <button
      type="button"
      className={cn(logoScaleClassName, 'focus-visible:ring-2 focus-visible:ring-primary/40')}
      aria-label={label}
      onMouseEnter={() => onHintChange(hintFromDetail(divisionId, detail))}
      onMouseLeave={() => onHintChange(null)}
      onFocus={() => onHintChange(hintFromDetail(divisionId, detail))}
      onBlur={() => onHintChange(null)}
    >
      <WowDivisionLogo divisionId={divisionId} variant="menu" className={logoImageClassName} />
    </button>
  )
}