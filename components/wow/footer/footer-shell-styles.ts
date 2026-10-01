import { navItemHoverClass } from '@/components/wow/nav/nav-interaction-styles'
import { cn } from '@/utils/cn'

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
  'border-[#1515151A] bg-transparent text-secondary',
  'dark:border-[#EDF0F51A] dark:text-[#F2F2F2]',
  navItemHoverClass,
)

export const footerTabActiveClass = cn(
  'border-primary bg-[#292757] !text-white',
  'hover:border-primary hover:bg-[#292757] hover:!text-white',
  'dark:hover:border-primary dark:hover:bg-[#292757]',
)

/** Grows to fill space between top tabs and bottom access row. */
export const footerTabPanelClass = cn(
  'row-start-1 flex h-full min-h-0 w-full flex-col overflow-hidden',
  '[&>*]:flex [&>*]:min-h-0 [&>*]:flex-1 [&>*]:flex-col',
)

/** Tab content + pinned access links; min-height keeps footer stable across tabs. */
export const footerMiddleSectionClass = cn(
  'grid w-full min-w-0 flex-1 grid-rows-[minmax(0,1fr)_auto] gap-1.5 sm:gap-2.5 2xl:gap-5',
  'min-h-[320px] sm:min-h-[380px] 2xl:min-h-[480px]',
)

/** Bottom quick links — fixed height (same as top tabs), stays at bottom of middle section. */
export const footerAccessRowClass = cn(
  'row-start-2 flex w-full shrink-0 flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 2xl:gap-5',
  'min-h-9 sm:min-h-10 2xl:min-h-[79px]',
)

export const footerAccessTabClass = cn(
  footerTabButtonClass,
  '!text-[#808080] border-[#1515151A] hover:!text-black',
  'dark:border-[#EDF0F51A] dark:hover:!text-white',
  navItemHoverClass,
)

/** Wrapper so card grids expand between tab bar and access row. */
export const footerCardPanelFillClass = 'flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden'

export const footerShellContainerClass = cn(
  'flex min-h-0 w-full flex-1 flex-col items-center gap-3 rounded-radius-md border py-3 sm:gap-4 sm:py-4 2xl:gap-[30px] 2xl:py-[30px]',
  'border-[#1515151A] dark:border-[#EDF0F51A]',
  '2xl:min-h-[640px]',
)

export const footerPanelClass = 'w-full px-3 sm:px-5 2xl:px-10'

/** Service cards — 3×3 grid fills middle area (design). */
export const footerActionCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-2 pt-3 sm:grid-cols-2 sm:gap-2.5 sm:pt-4',
  'lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(0,1fr))] lg:gap-4 lg:pt-8 2xl:gap-4',
)

/** Explore divisions — 3 columns, equal row heights. */
export const footerExploreCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-2 pt-3 sm:grid-cols-2 sm:gap-2.5 sm:pt-4',
  'lg:grid-cols-3 lg:auto-rows-fr lg:gap-4 lg:pt-8 2xl:gap-4',
)

/** Contact cards — 2×2 grid fills middle area (design). */
export const footerContactCardGridClass = cn(
  'grid h-full min-h-0 w-full flex-1 grid-cols-1 grid-rows-[repeat(4,minmax(0,1fr))] items-stretch gap-2 pt-3',
  'sm:grid-cols-2 sm:grid-rows-[repeat(2,minmax(0,1fr))] sm:gap-2.5 sm:pt-4 2xl:gap-4 2xl:pt-8',
)

export const footerMutedText = '!text-[#808080]'

export const footerHeadingText = 'text-secondary dark:text-[#F2F2F2]'
