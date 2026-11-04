import { cn } from '@/utils/cn'

/** Matches footer section surface ([WowFooterShell] outer wrapper). */
export const footerSectionBgClass = 'bg-background dark:bg-[#151515]'

/** Links/buttons: section background on default and hover; borders unchanged. */
export const footerItemSurfaceClass = cn(
  footerSectionBgClass,
  'hover:bg-background dark:hover:bg-[#151515]',
  'hover:!text-black dark:hover:!text-white',
)

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Settings', href: '/policy' },
] as const

export const footerAccessTabs = [
  { label: 'Book a Meeting', href: '/meet' },
  { label: 'Get a Quote', href: '/quotation' },
] as const

export const footerTabButtonClass = cn(
  'box-border inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-radius-sm border px-3 py-0 font-outfit text-xs font-light leading-none tracking-[0.4px] transition-[color,background-color,border-color]',
  'h-9 min-h-9 max-h-9 sm:h-10 sm:min-h-10 sm:max-h-10 sm:px-4 sm:text-sm',
  '2xl:h-[79px] 2xl:min-h-[79px] 2xl:max-h-[79px] 2xl:px-8 2xl:text-[20px]',
  'max-h-[920px]:2xl:h-10 max-h-[920px]:2xl:min-h-10 max-h-[920px]:2xl:max-h-10 max-h-[920px]:2xl:px-4 max-h-[920px]:2xl:text-sm',
)

export const footerTabIconButtonClass = cn(
  'box-border inline-flex shrink-0 items-center justify-center rounded-radius-sm border p-0 transition-[color,background-color,border-color]',
  'size-9 min-h-9 max-h-9 min-w-9 max-w-9',
  'sm:size-10 sm:min-h-10 sm:max-h-10 sm:min-w-10 sm:max-w-10',
  '2xl:size-[79px] 2xl:min-h-[79px] 2xl:max-h-[79px] 2xl:min-w-[79px] 2xl:max-w-[79px]',
  'max-h-[920px]:2xl:size-10 max-h-[920px]:2xl:min-h-10 max-h-[920px]:2xl:max-h-10 max-h-[920px]:2xl:min-w-10 max-h-[920px]:2xl:max-w-10',
)

export const footerTabIdleClass = cn(
  'border-[#1515151A] text-secondary dark:border-[#EDF0F51A] dark:text-[#F2F2F2]',
  footerItemSurfaceClass,
)

export const footerTabActiveClass = cn(
  'border-primary bg-[#292757] !text-white',
  'hover:border-primary hover:bg-[#292757] hover:!text-white',
  'dark:hover:border-primary dark:hover:bg-[#292757]',
)

/** Tab panel slot — height locked to tallest tab on lg+; mobile sizes to content. */
export const footerTabPanelClass = cn(
  'row-start-1 flex w-full max-w-full flex-col overflow-x-hidden max-lg:min-h-0 max-lg:overflow-y-visible',
  'lg:min-h-0 lg:overflow-y-auto',
  'max-lg:[&>*]:h-auto max-lg:[&>*]:min-h-0 lg:[&>*]:h-full lg:[&>*]:min-h-0',
  '[&>*]:w-full [&>*]:max-w-full',
)

/** Vertical gap between tab row ↔ content ↔ access row (keep in sync with shell gap). */
export const footerBandGapClass =
  'gap-2 sm:gap-2.5 lg:gap-4 2xl:gap-[30px] max-h-[920px]:2xl:gap-4 max-h-[920px]:gap-2'

/** Tab content + pinned access row; stable panel slot height on lg+ only. */
export const footerMiddleSectionClass = cn(
  'grid w-full min-w-0 grid-rows-[auto_auto] lg:grid-rows-[minmax(0,1fr)_auto]',
  footerBandGapClass,
)

/** Bottom quick links — fixed button height, pinned under the panel slot. */
export const footerAccessRowClass = cn(
  'row-start-2 flex w-full shrink-0 flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 2xl:gap-5',
  'min-h-9 sm:min-h-10 2xl:min-h-[79px] max-h-[920px]:2xl:min-h-10',
)

export const footerAccessTabClass = cn(
  footerTabButtonClass,
  '!text-[#808080] border-[#1515151A]',
  'dark:border-[#EDF0F51A]',
  footerItemSurfaceClass,
)

/** Stretch card grids to fill the panel slot on lg+ (Explore / Services / Contact). */
export const footerCardPanelFillClass = cn(
  'flex w-full flex-col max-lg:h-auto max-lg:min-h-0 max-lg:flex-none lg:h-full lg:min-h-0',
)

/** Lighter tabs (Resources / Connect / Ask) — centered vertically in the lg+ panel slot. */
export const footerPanelTopAlignClass = cn(
  'flex w-full flex-col justify-start max-lg:h-auto max-lg:min-h-0',
  'lg:h-full lg:min-h-0 lg:justify-center',
)

/** Figma footer shell — soft purple glow (top orb + bottom center), base fill unchanged. */
export const footerShellGradientOverlayClass = cn(
  'before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-radius-md before:content-[""]',
  'before:bg-[radial-gradient(ellipse_92%_78%_at_50%_100%,rgba(149,146,222,0.34)_0%,rgba(217,216,243,0.42)_38%,transparent_70%),radial-gradient(ellipse_48%_36%_at_50%_0%,rgba(149,146,222,0.24)_0%,transparent_50%)]',
  'dark:before:bg-[radial-gradient(ellipse_92%_78%_at_50%_100%,rgba(137,120,255,0.26)_0%,rgba(41,39,87,0.1)_40%,transparent_70%),radial-gradient(ellipse_48%_36%_at_50%_0%,rgba(183,148,244,0.18)_0%,transparent_50%)]',
)

export const footerShellContainerClass = cn(
  'relative flex w-full min-h-0 flex-col items-center rounded-radius-md border',
  'pt-2.5 pb-2 sm:pt-3 sm:pb-2.5 lg:py-4 2xl:py-[30px]',
  'max-h-[920px]:2xl:py-4 max-h-[920px]:py-2.5',
  footerBandGapClass,
  footerSectionBgClass,
  footerShellGradientOverlayClass,
  'border-[#1515151A] dark:border-[#EDF0F51A]',
)

export const footerPanelClass = 'w-full px-3 sm:px-5 2xl:px-10'

/** Service cards — 3×3 grid fills panel slot; vertical inset comes from footerBandGapClass only. */
export const footerActionCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-2 sm:grid-cols-2 sm:gap-2.5',
  'lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(0,1fr))] lg:gap-4 2xl:gap-4',
)

/** Centers the Services card cluster in the tab panel on lg+; mobile stacks from the top. */
export const footerServicePanelCenterClass = cn(
  'flex w-full min-w-0 max-w-full flex-col max-lg:justify-start lg:min-h-0 lg:flex-1 lg:items-center lg:justify-center',
  'lg:px-2 xl:px-4 2xl:px-6',
)

const footerServiceGridGaps = cn(
  'grid min-w-0 w-full max-w-full items-stretch gap-3 sm:gap-3.5 md:gap-4 lg:mx-auto lg:gap-5 xl:gap-6 min-[1400px]:gap-6',
)

/** Seven cards — same as six-card grid, one step less gap at xl+ only. */
const footerServiceGridGapsSeven = cn(
  footerServiceGridGaps,
  'xl:gap-5 min-[1400px]:gap-5',
)

/** Up to 4 cards: cluster width matches footer tab row (--footer-tablist-width). */
const footerServiceGridTabAligned = cn(
  footerServiceGridGaps,
  'lg:w-[var(--footer-tablist-width,100%)] lg:max-w-[var(--footer-tablist-width,100%)]',
)

/** 5+ cards: use full tab panel width so cards are not squeezed to tab-button width. */
const footerServiceGridWide = footerServiceGridGaps

const footerServiceCols2 = 'lg:grid-cols-2'
/** Laptop: 2 columns; xl+: 3 columns (wide grids only). */
const footerServiceColsResponsive = 'lg:grid-cols-2 xl:grid-cols-3'
const footerServiceCols6 = 'xl:grid-cols-6'
const footerServiceHalfRowMax = cn(
  'lg:max-w-[calc((var(--footer-tablist-width,100%)-1.25rem)/2)]',
  'xl:max-w-[calc((var(--footer-tablist-width,100%)-1.5rem)/2)]',
  'min-[1400px]:max-w-[calc((var(--footer-tablist-width,100%)-24px)/2)]',
)

/** Services tab — layout by card count; cluster centered with gaps/padding unchanged. */
export function footerServiceGridClassForCount(count: number): string {
  if (count <= 0) {
    return cn(footerServiceGridTabAligned, 'grid-cols-1')
  }
  if (count === 1) {
    return cn(footerServiceGridTabAligned, 'grid-cols-1', footerServiceHalfRowMax, 'lg:justify-items-center')
  }
  if (count === 2) {
    return cn(footerServiceGridTabAligned, 'grid-cols-1 sm:grid-cols-2', footerServiceCols2)
  }
  if (count === 3) {
    return cn(
      footerServiceGridTabAligned,
      'grid-cols-1 sm:grid-cols-2',
      footerServiceCols2,
      '[&>*:nth-child(3)]:lg:col-span-2 [&>*:nth-child(3)]:lg:justify-self-center',
      '[&>*:nth-child(3)]:lg:max-w-[calc((var(--footer-tablist-width,100%)-1.25rem)/2)]',
      '[&>*:nth-child(3)]:xl:max-w-[calc((var(--footer-tablist-width,100%)-1.5rem)/2)]',
      '[&>*:nth-child(3)]:min-[1400px]:max-w-[calc((var(--footer-tablist-width,100%)-24px)/2)]',
    )
  }
  if (count === 4) {
    return cn(
      footerServiceGridTabAligned,
      'grid-cols-1 sm:grid-cols-2',
      footerServiceCols2,
    )
  }
  if (count === 5) {
    return cn(
      footerServiceGridWide,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
      footerServiceCols6,
      '[&>*:nth-child(-n+3)]:xl:col-span-2',
      '[&>*:nth-child(4)]:xl:col-start-2 [&>*:nth-child(4)]:xl:col-span-2',
      '[&>*:nth-child(5)]:xl:col-start-4 [&>*:nth-child(5)]:xl:col-span-2',
    )
  }
  if (count === 6) {
    return cn(footerServiceGridWide, 'grid-cols-1 sm:grid-cols-2', footerServiceColsResponsive)
  }
  if (count === 7) {
    return cn(
      footerServiceGridGapsSeven,
      'grid-cols-1 sm:grid-cols-2',
      footerServiceColsResponsive,
      '[&>*:nth-child(7)]:xl:col-start-2',
    )
  }
  if (count === 8) {
    return cn(
      footerServiceGridWide,
      'grid-cols-1 sm:grid-cols-2',
      footerServiceColsResponsive,
      '[&>*:nth-child(7)]:xl:col-start-1',
      '[&>*:nth-child(8)]:xl:col-start-3',
    )
  }
  if (count === 9) {
    return cn(footerServiceGridWide, 'grid-cols-1 sm:grid-cols-2', footerServiceColsResponsive)
  }
  if (count === 10) {
    return cn(
      footerServiceGridWide,
      'grid-cols-1 sm:grid-cols-2',
      footerServiceColsResponsive,
      '[&>*:nth-child(10)]:xl:col-start-2',
    )
  }

  const remainder = count % 3
  if (remainder === 0) {
    return cn(footerServiceGridWide, 'grid-cols-1 sm:grid-cols-2', footerServiceColsResponsive)
  }
  if (remainder === 1) {
    return cn(
      footerServiceGridWide,
      'grid-cols-1 sm:grid-cols-2',
      footerServiceColsResponsive,
      `[&>*:nth-child(${count})]:xl:col-start-2`,
    )
  }
  return cn(
    footerServiceGridWide,
    'grid-cols-1 sm:grid-cols-2',
    footerServiceColsResponsive,
    '[&>*:nth-last-child(2)]:xl:col-start-1',
    '[&>*:nth-last-child(1)]:xl:col-start-3',
  )
}

/** Explore divisions — 3 columns, equal row heights in panel slot on lg+. */
export const footerExploreCardGridClass = cn(
  'grid w-full max-w-full grid-cols-1 items-stretch gap-2 sm:grid-cols-2 sm:gap-2.5',
  'max-lg:h-auto max-lg:min-h-0 max-lg:flex-none',
  'lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-3 lg:auto-rows-fr lg:gap-4 2xl:gap-4',
)

/** Contact cards — 2×2 grid fills panel slot when active (lg+). */
export const footerContactCardGridClass = cn(
  'grid w-full max-w-full grid-cols-1 items-stretch gap-2',
  'max-lg:h-auto max-lg:min-h-0 max-lg:flex-none max-lg:auto-rows-auto',
  'sm:grid-cols-2 sm:gap-2.5 lg:h-full lg:min-h-0 lg:flex-1',
  'lg:grid-rows-[repeat(2,minmax(0,1fr))] 2xl:gap-4',
)

export const footerMutedText = '!text-[#808080]'

export const footerHeadingText = 'text-secondary dark:text-[#F2F2F2]'
