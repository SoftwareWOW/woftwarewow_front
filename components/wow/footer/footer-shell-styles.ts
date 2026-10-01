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
  { label: 'Cookies Settings', href: '/policy' },
] as const

export const footerAccessTabs = [
  { label: 'Book a Meeting', href: '/meet' },
  { label: 'Case Studies', href: '/case-study' },
  { label: 'Think Tank', href: '/thinktank' },
  { label: 'Get a Quote', href: '/quotation' },
] as const

export const footerTabButtonClass = cn(
  'box-border inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-radius-sm border px-3 py-0 font-outfit text-xs font-light leading-none tracking-[0.4px] transition-[color,background-color,border-color]',
  'h-9 min-h-9 max-h-9 sm:h-10 sm:min-h-10 sm:max-h-10 sm:px-4 sm:text-sm',
  '2xl:h-[79px] 2xl:min-h-[79px] 2xl:max-h-[79px] 2xl:px-8 2xl:text-[20px]',
)

export const footerTabIconButtonClass = cn(
  'box-border inline-flex shrink-0 items-center justify-center rounded-radius-sm border p-0 transition-[color,background-color,border-color]',
  'size-9 min-h-9 max-h-9 min-w-9 max-w-9',
  'sm:size-10 sm:min-h-10 sm:max-h-10 sm:min-w-10 sm:max-w-10',
  '2xl:size-[79px] 2xl:min-h-[79px] 2xl:max-h-[79px] 2xl:min-w-[79px] 2xl:max-w-[79px]',
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

/** Tab panel slot — min-height set from measured tallest tab (WowFooterShell). */
export const footerTabPanelClass = cn(
  'row-start-1 flex h-full min-h-0 w-full flex-col overflow-hidden',
  '[&>*]:h-full [&>*]:min-h-0 [&>*]:w-full',
)

/** Vertical gap between tab row ↔ content ↔ access row (keep in sync with shell gap). */
export const footerBandGapClass = 'gap-2.5 sm:gap-4 2xl:gap-[30px]'

/** Tab content + pinned access row; panel row height is stable across tab switches. */
export const footerMiddleSectionClass = cn(
  'grid w-full min-w-0 grid-rows-[minmax(0,1fr)_auto]',
  footerBandGapClass,
)

/** Bottom quick links — fixed button height, pinned under the panel slot. */
export const footerAccessRowClass = cn(
  'row-start-2 flex w-full shrink-0 flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 2xl:gap-5',
  'min-h-9 sm:min-h-10 2xl:min-h-[79px]',
)

export const footerAccessTabClass = cn(
  footerTabButtonClass,
  '!text-[#808080] border-[#1515151A]',
  'dark:border-[#EDF0F51A]',
  footerItemSurfaceClass,
)

/** Stretch card grids to fill the panel slot (Explore / Services / Contact). */
export const footerCardPanelFillClass = 'flex h-full min-h-0 w-full flex-col'

/** Top-aligned panels (Resources / Connect / Ask). */
export const footerPanelTopAlignClass = 'flex h-full min-h-0 w-full flex-col justify-start'

export const footerShellContainerClass = cn(
  'relative flex w-full flex-col items-center rounded-radius-md border py-3 sm:py-4 2xl:py-[30px]',
  footerBandGapClass,
  footerSectionBgClass,
  'border-[#1515151A] dark:border-[#EDF0F51A]',
)

export const footerPanelClass = 'w-full px-3 sm:px-5 2xl:px-10'

/** Service cards — 3×3 grid fills panel slot; vertical inset comes from footerBandGapClass only. */
export const footerActionCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-2 sm:grid-cols-2 sm:gap-2.5',
  'lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(0,1fr))] lg:gap-4 2xl:gap-4',
)

/** Explore divisions — 3 columns, equal row heights in panel slot. */
export const footerExploreCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-2 sm:grid-cols-2 sm:gap-2.5',
  'lg:grid-cols-3 lg:auto-rows-fr lg:gap-4 2xl:gap-4',
)

/** Contact cards — 2×2 grid fills panel slot when active. */
export const footerContactCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 grid-rows-[repeat(4,minmax(0,1fr))] items-stretch gap-2',
  'sm:grid-cols-2 sm:grid-rows-[repeat(2,minmax(0,1fr))] sm:gap-2.5 2xl:gap-4',
)

export const footerMutedText = '!text-[#808080]'

export const footerHeadingText = 'text-secondary dark:text-[#F2F2F2]'
