'use client'

import FooterTabContent from '@/components/wow/footer/FooterTabContent'
import { footerTextTabs, type FooterTabId } from '@/components/wow/footer/footer-tab-data'
import WowText from '@/components/wow/shared/WowText'
import { stickyFooterClass } from '@/components/wow/footer-layout'
import { useStickyFooterHeight } from '@/components/wow/useStickyFooterHeight'
import { useMeetDialogOptional } from '@/components/wow/shared/MeetDialogProvider'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import { cn } from '@/utils/cn'
import { navItemHoverClass } from '@/components/wow/nav/nav-interaction-styles'
import { House, Sparkles } from 'lucide-react'
import { useState, type MouseEvent } from 'react'

type WowFooterProps = {
  footer: Dictionary['footer']
}

const legalLinks = [
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies Settings', href: '/policy' },
]

const accessTabs = [
  { label: 'Book a Meeting', href: '/meet' },
  { label: 'Case Studies', href: '/case-study' },
  { label: 'Think Tank', href: '/thinktank' },
  { label: 'Get a Quote', href: '/quotation' },
] as const

const tabButtonClass = cn(
  'inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-3 font-outfit text-xs font-light tracking-[0.4px] transition-colors',
  'sm:h-10 sm:px-4 sm:text-sm',
  '2xl:h-[79px] 2xl:px-8 2xl:text-[20px]',
)

const tabIdleClass = cn(
  'border-[#1515151A] bg-transparent text-secondary',
  'dark:border-[#EDF0F51A] dark:text-[#F2F2F2]',
  navItemHoverClass,
)

const tabActiveClass = 'border-primary bg-[#292757] !text-white hover:border-primary'

const accessTabClass = cn(
  'inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-3 py-1.5 font-outfit text-xs font-light tracking-[0.4px] !text-[#808080] transition-colors',
  'border-[#1515151A] hover:!text-black',
  'dark:border-[#EDF0F51A] dark:hover:!text-white',
  navItemHoverClass,
  'sm:min-h-0 sm:px-3.5 sm:py-2 sm:text-sm',
  '2xl:px-[22px] 2xl:py-[11px] 2xl:text-[20px]',
)

export default function WowFooter({ footer: _footer }: WowFooterProps) {
  const footerRef = useStickyFooterHeight<HTMLElement>()
  const meetDialog = useMeetDialogOptional()
  const [activeTab, setActiveTab] = useState<FooterTabId>('ask')

  const selectTab = (tab: FooterTabId) => {
    setActiveTab(tab)
  }

  const handleAccessClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/meet' && meetDialog) {
      event.preventDefault()
      meetDialog.open()
    }
  }

  return (
    <footer ref={footerRef} className={stickyFooterClass}>
      <div className="relative bg-background px-3 py-2 transition-colors duration-300 dark:bg-[#151515] sm:px-4 sm:py-3 2xl:px-10 2xl:py-5">
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <div
            className={cn(
              'flex flex-col items-center gap-3 rounded-radius-md border py-3 sm:gap-4 sm:py-4 2xl:gap-[30px] 2xl:py-[30px]',
              'border-[#1515151A] dark:border-[#EDF0F51A]',
            )}
          >
            <div
              role="tablist"
              aria-label="Footer sections"
              className="flex w-full max-w-full flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 sm:px-4 2xl:gap-5 2xl:px-6"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'ask'}
                onClick={() => selectTab('ask')}
                aria-label="Ask WOW"
                className={cn(
                  'group inline-flex size-9 shrink-0 items-center justify-center rounded-radius-sm border bg-[#292757] !text-white transition-transform sm:size-10 2xl:size-[79px]',
                  activeTab === 'ask' ? 'border-primary' : 'border-primary/70',
                )}
              >
                <Sparkles
                  className="size-4 !stroke-white !text-white transition-transform duration-300 group-hover:skew-x-6 sm:size-5 2xl:size-[46px]"
                  strokeWidth={1.5}
                  color="#ffffff"
                />
              </button>

              {footerTextTabs.map((tab) => {
                const selected = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => selectTab(tab.id)}
                    className={cn(tabButtonClass, selected ? tabActiveClass : tabIdleClass)}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <FooterTabContent tab={activeTab} />

            <div className="flex w-full flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 2xl:gap-5">
              <button
                type="button"
                onClick={() => selectTab('ask')}
                aria-label="Home"
                className={cn(
                  'inline-flex size-9 shrink-0 items-center justify-center rounded-radius-sm !text-[#808080] transition-colors sm:size-10 2xl:size-[50px]',
                  navItemHoverClass,
                )}
              >
                <House className="size-5 sm:size-6 2xl:size-[30px]" strokeWidth={1.5} />
              </button>

              {accessTabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  onClick={(event) => handleAccessClick(event, tab.href)}
                  className={accessTabClass}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <div className="h-px w-[min(1248px,calc(100%-1.5rem))] bg-[#1515151A] dark:bg-[#EDF0F51A]" />

            <div className="flex w-full max-w-[1248px] flex-col items-center justify-between gap-2 px-3 sm:px-5 md:flex-row md:gap-3 2xl:px-6">
              <p className="text-center font-outfit text-[11px] font-light leading-[1.5] !text-[#808080] sm:text-xs md:text-left 2xl:text-[20px] 2xl:leading-[1.6]">
                © 2026 WOW Superagency. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 2xl:gap-x-[13px]">
                {legalLinks.map((link, index) => (
                  <span key={link.label} className="inline-flex items-center gap-x-2 2xl:gap-x-[13px]">
                    {index > 0 ? (
                      <span className="font-outfit text-[11px] font-light !text-[#808080] sm:text-xs 2xl:text-[20px]" aria-hidden>
                        •
                      </span>
                    ) : null}
                    <Link
                      href={link.href}
                      className="font-outfit text-[11px] font-light leading-[1.5] !text-[#808080] transition-colors hover:!text-primary sm:text-xs 2xl:text-[20px] 2xl:leading-[1.6]"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="footer-wow-watermark pointer-events-none mt-1 max-w-full overflow-hidden select-none whitespace-nowrap pb-1 text-center font-semibold leading-none tracking-[-0.04em] sm:mt-1.5 sm:pb-1.5 2xl:mt-2 2xl:pb-2"
          >
            <WowText variant="watermark" className="text-[length:inherit]" />
            <span className="ml-2 text-[length:inherit] !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04] sm:ml-3">Superagency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
