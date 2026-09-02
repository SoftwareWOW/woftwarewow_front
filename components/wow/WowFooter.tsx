'use client'

import FooterAskWow from '@/components/wow/FooterAskWow'
import WowText from '@/components/wow/shared/WowText'
import { stickyFooterClass } from '@/components/wow/footer-layout'
import { useStickyFooterHeight } from '@/components/wow/useStickyFooterHeight'
import { useAIChatControllerOptional } from '@/components/ai/AIChatController'
import { useContactDialogOptional } from '@/components/wow/shared/ContactDialogProvider'
import { useMeetDialogOptional } from '@/components/wow/shared/MeetDialogProvider'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import { cn } from '@/utils/cn'
import { House, Sparkles } from 'lucide-react'
import type { MouseEvent } from 'react'

type WowFooterProps = {
  footer: Dictionary['footer']
}

const legalLinks = [
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies Settings', href: '/policy' },
]

const primaryTabs = [
  { label: 'Resources', href: '/blog' },
  { label: 'Explore WOW', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Connect', href: '/partners' },
] as const

const accessTabs = [
  { label: 'Book a Meeting', href: '/meet' },
  { label: 'Case Studies', href: '/case-study' },
  { label: 'Think Tank', href: '/thinktank' },
  { label: 'Get a Quote', href: '/quotation' },
] as const

const primaryTabClass = cn(
  'inline-flex h-[52px] shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-5 font-outfit text-base font-light tracking-[0.4px] transition-colors',
  'border-[#1515151A] bg-background text-secondary hover:border-primary/40',
  'dark:border-[#EDF0F51A] dark:bg-[#151515] dark:text-[#F2F2F2] dark:hover:border-primary/50',
  'md:h-[79px] md:px-8 md:text-[20px]',
)

const accessTabClass = cn(
  'inline-flex shrink-0 items-center whitespace-nowrap rounded-radius-sm border px-4 py-2.5 font-outfit text-base font-light tracking-[0.4px] !text-[#808080] transition-colors hover:border-primary/40 hover:!text-secondary',
  'border-[#1515151A] dark:border-[#EDF0F51A] dark:hover:!text-[#F2F2F2]',
  'md:px-[22px] md:py-[11px] md:text-[20px]',
)

export default function WowFooter({ footer: _footer }: WowFooterProps) {
  const footerRef = useStickyFooterHeight<HTMLElement>()
  const aiChat = useAIChatControllerOptional()
  const contactDialog = useContactDialogOptional()
  const meetDialog = useMeetDialogOptional()

  const handleTabClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/contact' && contactDialog) {
      event.preventDefault()
      contactDialog.open()
      return
    }

    if (href === '/meet' && meetDialog) {
      event.preventDefault()
      meetDialog.open()
    }
  }

  return (
    <footer ref={footerRef} className={stickyFooterClass}>
      <div className="relative bg-background px-3 py-3 transition-colors duration-300 dark:bg-[#151515] sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-10">
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div
            className={cn(
              'flex flex-col items-center gap-[30px] overflow-hidden rounded-radius-md border py-[30px]',
              'border-[#1515151A] dark:border-[#EDF0F51A]',
            )}
          >
            <div className="flex w-full flex-wrap items-center justify-center gap-3 px-4 md:gap-5 md:px-6">
              <button
                type="button"
                onClick={() => aiChat?.open()}
                aria-label="Open WOW AI assistant"
                className="inline-flex size-[52px] shrink-0 items-center justify-center rounded-radius-sm border border-primary bg-[#292757] text-white transition-opacity hover:opacity-90 md:size-[79px]"
              >
                <Sparkles className="size-7 md:size-[46px]" strokeWidth={1.5} />
              </button>

              {primaryTabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  onClick={(event) => handleTabClick(event, tab.href)}
                  className={primaryTabClass}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <div className="w-full">
              <FooterAskWow />
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-3 px-4 md:gap-5">
              <Link
                href="/"
                aria-label="Home"
                className="inline-flex size-[50px] shrink-0 items-center justify-center !text-[#808080] transition-colors hover:!text-secondary dark:hover:!text-[#F2F2F2]"
              >
                <House className="size-[30px] md:size-[50px]" strokeWidth={1.5} />
              </Link>

              {accessTabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  onClick={(event) => handleTabClick(event, tab.href)}
                  className={accessTabClass}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <div className="h-px w-[min(1248px,calc(100%-2rem))] bg-[#1515151A] dark:bg-[#EDF0F51A]" />

            <div className="flex w-full max-w-[1248px] flex-col items-center justify-between gap-4 px-5 sm:px-6 md:flex-row">
              <p className="text-center font-outfit text-sm font-light leading-[1.6] !text-[#808080] md:text-left md:text-[20px]">
                © 2026 WOW Superagency. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-[13px] gap-y-2">
                {legalLinks.map((link, index) => (
                  <span key={link.label} className="inline-flex items-center gap-x-[13px]">
                    {index > 0 ? (
                      <span className="font-outfit text-sm font-light !text-[#808080] md:text-[20px]" aria-hidden>
                        •
                      </span>
                    ) : null}
                    <Link
                      href={link.href}
                      className="font-outfit text-sm font-light leading-[1.6] !text-[#808080] transition-colors hover:!text-primary md:text-[20px]"
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
            className="footer-wow-watermark pointer-events-none mt-3 max-w-full overflow-hidden select-none whitespace-nowrap pb-3 text-center text-[clamp(1.5rem,8vw,7.5rem)] font-semibold leading-none tracking-[-0.04em] sm:mt-4 sm:pb-4"
          >
            <WowText variant="watermark" />
            <span className="ml-2 !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04] sm:ml-3">Superagency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
