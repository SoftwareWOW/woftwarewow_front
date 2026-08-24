'use client'

import WowText from '@/components/wow/shared/WowText'
import { stickyFooterClass } from '@/components/wow/footer-layout'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'

type WowFooterProps = {
  footer: Dictionary['footer']
}

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: '#' },
  { name: 'YouTube', icon: FaYoutube, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { name: 'X', icon: FaXTwitter, href: '#' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies Settings', href: '/policy' },
]

export default function WowFooter({ footer }: WowFooterProps) {
  return (
    <footer className={stickyFooterClass}>
      <div className="relative bg-background px-3 py-3 transition-colors duration-300 dark:bg-dark sm:px-4 sm:py-4 md:px-5 md:py-5">
        <div className="absolute inset-0 opacity-0 dark:opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-8 backdrop-blur-sm transition-colors duration-300 dark:border-white/5 dark:bg-dark/50 dark:backdrop-blur-sm sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-10 md:gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] xl:gap-16">
              <div className="min-w-0">
                <Link href="/" className="inline-block max-w-full">
                  <p className="text-xl font-semibold leading-none sm:text-2xl md:text-3xl">
                    <WowText />
                    <span className="ml-2 text-[#1a1a1a] dark:text-[#F2F2F2]">Superagency</span>
                  </p>
                </Link>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#555555] dark:text-[#999999] sm:text-base">
                  Technology, Marketing &amp; AI—All Under One Roof.
                </p>

                <address className="mt-5 not-italic text-sm leading-relaxed text-[#555555] dark:text-[#999999] sm:mt-6 md:text-base">
                  {footer.address.line1}
                  <br />
                  {footer.address.line2}
                  <br />
                  <a
                    href="tel:+18337638969"
                    className="transition-colors hover:text-[#8b7cff] dark:hover:text-[#b794f4]"
                  >
                    +1 (833) SOFT-WOW
                  </a>
                </address>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="flex size-9 items-center justify-center rounded-full border border-[#e5e5e5] text-[#555555] transition-all duration-300 hover:border-[#8b7cff] hover:bg-[#8b7cff] hover:text-white hover:shadow-lg hover:shadow-[#8b7cff]/30 sm:size-10 dark:border-white/10 dark:text-[#999999] dark:hover:border-[#b794f4] dark:hover:bg-[#b794f4] dark:hover:text-white dark:hover:shadow-[#b794f4]/30"
                    >
                      <Icon className="size-3.5 sm:size-4" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
                {footer.sections.map((section) => (
                  <div key={section.id} className="min-w-0">
                    <p className="mb-3 text-base font-medium text-[#1a1a1a] dark:text-[#F2F2F2] sm:mb-4 md:text-lg">
                      {section.title}
                    </p>
                    <ul className="space-y-2.5 text-sm text-[#555555] dark:text-[#999999] md:text-base">
                      {section.links.map((link) => (
                        <li key={link.id} className="min-w-0">
                          <Link
                            href={link.href}
                            className="break-words transition-colors duration-300 hover:text-[#8b7cff] dark:hover:text-[#b794f4]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#e5e5e5] pt-5 dark:border-white/10 sm:mt-10 sm:pt-6 md:mt-12 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-[#555555] dark:text-[#666666] sm:text-sm">
                © 2026 WOW Superagency. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-[#555555] underline underline-offset-4 transition-colors hover:text-[#8b7cff] dark:text-[#666666] dark:hover:text-[#b794f4] sm:text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none mt-4 max-w-full overflow-hidden select-none whitespace-nowrap pb-4 text-center text-[clamp(1.5rem,8vw,8rem)] font-semibold leading-none tracking-[-0.04em] sm:mt-6 sm:pb-6"
          >
            <WowText variant="watermark" />
            <span className="ml-3 text-[#1a1a1a]/[0.04] dark:text-white/[0.04] sm:ml-4">Superagency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
