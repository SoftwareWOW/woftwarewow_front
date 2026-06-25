'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
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
    <footer className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4">
      {/* Background decorative elements */}
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
        <RevealWrapper>
          <div className="rounded-2xl border border-[#e5e5e5] bg-white/50 backdrop-blur-sm px-6 py-10 transition-colors duration-300 dark:border-white/5 dark:bg-dark/50 dark:backdrop-blur-sm md:px-10 md:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
              {/* Left Column */}
              <div>
                <Link href="/" className="inline-block">
                  <p className="text-2xl font-semibold leading-none md:text-3xl">
                    <span className="bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                      WOW
                    </span>
                    <span className="text-[#1a1a1a] dark:text-[#F2F2F2]"> Superagency</span>
                  </p>
                </Link>

                <p className="mt-4 max-w-sm text-base leading-relaxed text-[#555555] dark:text-[#999999]">
                  Technology, Marketing &amp; AI—All Under One Roof.
                </p>

                <address className="mt-6 not-italic text-sm leading-relaxed text-[#555555] dark:text-[#999999] md:text-base">
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

                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="flex size-10 items-center justify-center rounded-full border border-[#e5e5e5] text-[#555555] transition-all duration-300 hover:border-[#8b7cff] hover:bg-[#8b7cff] hover:text-white hover:shadow-lg hover:shadow-[#8b7cff]/30 dark:border-white/10 dark:text-[#999999] dark:hover:border-[#b794f4] dark:hover:bg-[#b794f4] dark:hover:text-white dark:hover:shadow-[#b794f4]/30"
                    >
                      <Icon className="size-4" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Footer Links */}
              <div className="grid gap-10 sm:grid-cols-3">
                {footer.sections.map((section) => (
                  <div key={section.id}>
                    <p className="mb-4 text-base font-medium text-[#1a1a1a] dark:text-[#F2F2F2] md:text-lg">
                      {section.title}
                    </p>
                    <ul className="space-y-2.5 text-sm text-[#555555] dark:text-[#999999] md:text-base">
                      {section.links.map((link) => (
                        <li key={link.id}>
                          <Link
                            href={link.href}
                            className="transition-colors duration-300 hover:text-[#8b7cff] dark:hover:text-[#b794f4]"
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

            {/* Bottom Bar */}
            <div className="mt-12 flex flex-col gap-4 border-t border-[#e5e5e5] pt-6 dark:border-white/10 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#555555] dark:text-[#666666]">
                © 2026 WOW Superagency. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#555555] underline underline-offset-4 transition-colors hover:text-[#8b7cff] dark:text-[#666666] dark:hover:text-[#b794f4]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Background WOW Text */}
        <div
          aria-hidden
          className="pointer-events-none mt-6 select-none text-center text-[clamp(3rem,12vw,8rem)] font-semibold leading-none tracking-[-0.04em]"
        >
          <span className="bg-gradient-to-r from-[#8b7cff]/20 via-[#b794f4]/15 to-[#f4a8b8]/20 bg-clip-text text-transparent dark:from-[#8b7cff]/10 dark:via-[#b794f4]/8 dark:to-[#f4a8b8]/10">
            WOW
          </span>
          <span className="text-white dark:text-white/[0.04]"> Superagency</span>
        </div>
      </div>
    </footer>
  )
}