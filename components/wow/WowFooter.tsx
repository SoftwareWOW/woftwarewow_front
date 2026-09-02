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
  'inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-3.5 font-outfit text-sm font-light tracking-[0.4px] transition-colors',
  'sm:h-12 sm:px-5 sm:text-base',
  'xl:h-[79px] xl:px-8 xl:text-[20px]',
)

const tabIdleClass = cn(
  'border-[#1515151A] bg-transparent text-secondary hover:border-primary/40',
  'dark:border-[#EDF0F51A] dark:text-[#F2F2F2] dark:hover:border-primary/50',
)

const tabActiveClass = 'border-primary bg-[#292757] text-white hover:border-primary'

const accessTabClass = cn(
  'inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-3.5 py-2 font-outfit text-sm font-light tracking-[0.4px] !text-[#808080] transition-colors hover:border-primary/40 hover:!text-secondary',
  'border-[#1515151A] dark:border-[#EDF0F51A] dark:hover:!text-[#F2F2F2]',
  'sm:min-h-0 sm:px-4 sm:py-2.5 sm:text-base',
  'md:px-[22px] md:py-[11px] md:text-[20px]',
)

export default function WowFooter({ footer: _footer }: WowFooterProps) {
  const footerRef = useStickyFooterHeight<HTMLElement>()
  const meetDialog = useMeetDialogOptional()
  const [activeTab, setActiveTab] = useState<FooterTabId>('ask')

  const selectTab = (tab: FooterTabId) => {
    setActiveTab(tab)
    footerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAccessClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/meet' && meetDialog) {
      event.preventDefault()
      meetDialog.open()
    }
  }

  return (
    <footer ref={footerRef} className={stickyFooterClass}>
      <div className="relative bg-background px-3 py-3 transition-colors duration-300 dark:bg-[#151515] sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-8 xl:px-10">
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <div
            className={cn(
              'flex flex-col items-center gap-6 overflow-hidden rounded-radius-md border py-5 sm:gap-[24px] sm:py-6 lg:gap-[30px] lg:py-[30px]',
              'border-[#1515151A] dark:border-[#EDF0F51A]',
            )}
          >
            <div
              role="tablist"
              aria-label="Footer sections"
              className="flex w-full max-w-full flex-wrap items-center justify-center gap-2 px-3 sm:gap-3 md:gap-4 xl:gap-5 xl:px-6"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'ask'}
                onClick={() => selectTab('ask')}
                aria-label="Ask WOW"
                className={cn(
                  'inline-flex size-11 shrink-0 items-center justify-center rounded-radius-sm border text-white transition-opacity hover:opacity-90 sm:size-12 xl:size-[79px]',
                  activeTab === 'ask' ? 'border-primary bg-[#292757]' : 'border-primary/70 bg-[#292757]/80',
                )}
              >
                <Sparkles className="size-5 sm:size-6 xl:size-[46px]" strokeWidth={1.5} />
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

            <div className="flex w-full flex-wrap items-center justify-center gap-2 px-3 sm:gap-3 md:gap-5">
              <button
                type="button"
                onClick={() => selectTab('ask')}
                aria-label="Home"
                className="inline-flex size-11 shrink-0 items-center justify-center !text-[#808080] transition-colors hover:!text-secondary dark:hover:!text-[#F2F2F2] sm:size-[50px]"
              >
                <House className="size-6 sm:size-[30px] md:size-[50px]" strokeWidth={1.5} />
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

            <div className="flex w-full max-w-[1248px] flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row md:gap-4">
              <p className="text-center font-outfit text-xs font-light leading-[1.6] !text-[#808080] sm:text-sm md:text-left md:text-[20px]">
                © 2026 WOW Superagency. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-[13px] gap-y-2">
                {legalLinks.map((link, index) => (
                  <span key={link.label} className="inline-flex items-center gap-x-[13px]">
                    {index > 0 ? (
                      <span className="font-outfit text-xs font-light !text-[#808080] sm:text-sm md:text-[20px]" aria-hidden>
                        •
                      </span>
                    ) : null}
                    <Link
                      href={link.href}
                      className="font-outfit text-xs font-light leading-[1.6] !text-[#808080] transition-colors hover:!text-primary sm:text-sm md:text-[20px]"
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
            className="footer-wow-watermark pointer-events-none mt-2 max-w-full overflow-hidden select-none whitespace-nowrap pb-2 text-center text-[clamp(1.25rem,7vw,7.5rem)] font-semibold leading-none tracking-[-0.04em] sm:mt-3 sm:pb-3"
          >
            <WowText variant="watermark" />
            <span className="ml-2 !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04] sm:ml-3">Superagency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
