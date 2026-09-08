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
  'inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-3 font-outfit text-xs font-light tracking-[0.4px] transition-colors',
  'sm:h-10 sm:px-4 sm:text-sm',
  '2xl:h-[79px] 2xl:px-8 2xl:text-[20px]',
)

export const footerTabIdleClass = cn(
  'border-[#1515151A] bg-transparent text-secondary',
  'dark:border-[#EDF0F51A] dark:text-[#F2F2F2]',
  navItemHoverClass,
)

export const footerTabActiveClass = 'border-primary bg-[#292757] !text-white hover:border-primary'

export const footerAccessTabClass = cn(
  'inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-3 py-1.5 font-outfit text-xs font-light tracking-[0.4px] !text-[#808080] transition-colors',
  'border-[#1515151A] hover:!text-black',
  'dark:border-[#EDF0F51A] dark:hover:!text-white',
  navItemHoverClass,
  'sm:min-h-0 sm:px-3.5 sm:py-2 sm:text-sm',
  '2xl:px-[22px] 2xl:py-[11px] 2xl:text-[20px]',
)

export const footerShellContainerClass = cn(
  'flex flex-col items-center gap-3 rounded-radius-md border py-3 sm:gap-4 sm:py-4 2xl:gap-[30px] 2xl:py-[30px]',
  'border-[#1515151A] dark:border-[#EDF0F51A]',
)

export const footerPanelClass = 'w-full px-3 sm:px-5 2xl:px-10'

export const footerMutedText = '!text-[#808080]'

export const footerHeadingText = 'text-secondary dark:text-[#F2F2F2]'
