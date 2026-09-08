'use client'

import {
  footerAccessTabClass,
  footerAccessTabs,
  footerLegalLinks,
  footerShellContainerClass,
  footerTabActiveClass,
  footerTabButtonClass,
  footerTabIdleClass,
} from '@/components/wow/footer/footer-shell-styles'
import { stickyFooterClass } from '@/components/wow/footer-layout'
import { useStickyFooterHeight } from '@/components/wow/useStickyFooterHeight'
import { useMeetDialogOptional } from '@/components/wow/shared/MeetDialogProvider'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { navItemHoverClass } from '@/components/wow/nav/nav-interaction-styles'
import { House, Sparkles } from 'lucide-react'
import { useState, type MouseEvent, type ReactNode } from 'react'

export type FooterTabDefinition = {
  id: string
  label: string
}

type WowFooterShellProps = {
  tabs: ReadonlyArray<FooterTabDefinition>
  defaultTabId?: string
  showAskTab?: boolean
  copyright: string
  watermark: ReactNode
  renderPanel: (tabId: string) => ReactNode
  tablistLabel?: string
}

export default function WowFooterShell({
  tabs,
  defaultTabId = 'ask',
  showAskTab = true,
  copyright,
  watermark,
  renderPanel,
  tablistLabel = 'Footer sections',
}: WowFooterShellProps) {
  const footerRef = useStickyFooterHeight<HTMLElement>()
  const meetDialog = useMeetDialogOptional()
  const [activeTab, setActiveTab] = useState(defaultTabId)

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
          <div className={footerShellContainerClass}>
            <div
              role="tablist"
              aria-label={tablistLabel}
              className="flex w-full max-w-full flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 sm:px-4 2xl:gap-5 2xl:px-6"
            >
              {showAskTab ? (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'ask'}
                  onClick={() => setActiveTab('ask')}
                  aria-label="Ask WOW"
                  className={cn(
                    'group inline-flex size-9 shrink-0 items-center justify-center rounded-radius-sm border transition-colors sm:size-10 2xl:size-[79px]',
                    activeTab === 'ask' ? footerTabActiveClass : footerTabIdleClass,
                  )}
                >
                  <Sparkles
                    className={cn(
                      'size-4 transition-transform duration-300 group-hover:skew-x-6 sm:size-5 2xl:size-[46px]',
                      activeTab === 'ask'
                        ? '!stroke-white !text-white'
                        : 'stroke-secondary text-secondary dark:stroke-[#F2F2F2] dark:text-[#F2F2F2]',
                    )}
                    strokeWidth={1.5}
                    color={activeTab === 'ask' ? '#ffffff' : undefined}
                  />
                </button>
              ) : null}

              {tabs.map((tab) => {
                const selected = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(footerTabButtonClass, selected ? footerTabActiveClass : footerTabIdleClass)}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div role="tabpanel" className="w-full min-w-0">
              {renderPanel(activeTab)}
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-1.5 px-3 sm:gap-2.5 2xl:gap-5">
              <button
                type="button"
                onClick={() => setActiveTab(showAskTab ? 'ask' : tabs[0]?.id ?? 'ask')}
                aria-label="Home"
                className={cn(
                  'inline-flex size-9 shrink-0 items-center justify-center rounded-radius-sm border border-[#1515151A] !text-[#808080] transition-colors dark:border-[#EDF0F51A] sm:size-10 2xl:size-[50px]',
                  navItemHoverClass,
                )}
              >
                <House className="size-5 sm:size-6 2xl:size-[30px]" strokeWidth={1.5} />
              </button>

              {footerAccessTabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  onClick={(event) => handleAccessClick(event, tab.href)}
                  className={footerAccessTabClass}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <div className="h-px w-[min(1248px,calc(100%-1.5rem))] bg-[#1515151A] dark:bg-[#EDF0F51A]" />

            <div className="flex w-full max-w-[1248px] flex-col items-center justify-between gap-2 px-3 sm:px-5 md:flex-row md:gap-3 2xl:px-6">
              <p className="text-center font-outfit text-[11px] font-light leading-[1.5] !text-[#808080] sm:text-xs md:text-left 2xl:text-[20px] 2xl:leading-[1.6]">
                {copyright}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 2xl:gap-x-[13px]">
                {footerLegalLinks.map((link, index) => (
                  <span key={link.label} className="inline-flex items-center gap-x-2 2xl:gap-x-[13px]">
                    {index > 0 ? (
                      <span
                        className="font-outfit text-[11px] font-light !text-[#808080] sm:text-xs 2xl:text-[20px]"
                        aria-hidden
                      >
                        •
                      </span>
                    ) : null}
                    <Link
                      href={link.href}
                      className="rounded-radius-sm px-1 py-0.5 font-outfit text-[11px] font-light leading-[1.5] !text-[#808080] transition-colors hover:!text-primary sm:text-xs 2xl:text-[20px] 2xl:leading-[1.6]"
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
            {watermark}
          </div>
        </div>
      </div>
    </footer>
  )
}
