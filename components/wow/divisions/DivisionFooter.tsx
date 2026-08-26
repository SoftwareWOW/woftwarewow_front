'use client'

import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import WowText from '@/components/wow/shared/WowText'
import { footerSocialLinkClass, stickyFooterClass } from '@/components/wow/footer-layout'
import { useStickyFooterHeight } from '@/components/wow/useStickyFooterHeight'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'

type DivisionFooterProps = {
  config: DivisionSiteConfig
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
  { label: 'Cookie Settings', href: '/policy' },
]

export default function DivisionFooter({ config }: DivisionFooterProps) {
  const footerRef = useStickyFooterHeight<HTMLElement>()

  return (
    <footer ref={footerRef} className={stickyFooterClass}>
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

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-8 backdrop-blur-sm transition-colors duration-300 dark:border-white/5 dark:bg-dark/50 dark:backdrop-blur-sm sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-10 md:gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] xl:gap-16">
              <div className="min-w-0">
                <Link href={config.homeHref} className="inline-block max-w-full">
                  <Image
                    className="h-6 w-auto max-w-full dark:hidden sm:h-7"
                    src={config.logo.light}
                    alt={config.logoAlt}
                    width={220}
                    height={28}
                    unoptimized
                  />
                  <Image
                    className="hidden h-6 w-auto max-w-full dark:block sm:h-7"
                    src={config.logo.dark}
                    alt={config.logoAlt}
                    width={220}
                    height={28}
                    unoptimized
                  />
                </Link>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#555555] dark:text-[#999999] sm:text-base">
                  {config.tagline}
                </p>

                <address className="mt-5 not-italic text-sm leading-relaxed text-[#555555] dark:text-[#999999] sm:mt-6 md:text-base">
                  {config.addressLines[0]}
                  <br />
                  {config.addressLines[1]}
                  <br />
                  <a
                    href={config.phoneHref}
                    className="transition-colors hover:text-[#8b7cff] dark:hover:text-[#b794f4]"
                  >
                    {config.phone}
                  </a>
                </address>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className={footerSocialLinkClass}
                    >
                      <Icon className="size-3.5 sm:size-4" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
                {config.footerSections.map((section) => (
                  <div key={section.id} className="min-w-0">
                    <p className="mb-3 font-outfit text-[11px] font-normal uppercase tracking-[1.4px] text-black/45 dark:text-dark-100 sm:mb-4 sm:text-xs">
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
              <p className="text-xs text-[#555555] dark:text-[#666666] sm:text-sm">{config.copyright}</p>

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
            className="pointer-events-none mt-3 max-w-full overflow-hidden select-none whitespace-nowrap pb-3 text-center text-[clamp(0.95rem,4.2vw,3.75rem)] font-semibold leading-none tracking-[-0.04em] sm:mt-4 sm:pb-4 md:text-[clamp(1.1rem,3.6vw,4.25rem)]"
          >
            {config.name.toUpperCase().startsWith('WOW ') ? (
              <>
                <WowText variant="watermark" />
                <span className="ml-2 text-[#1a1a1a]/[0.04] dark:text-white/[0.04] sm:ml-3">
                  {config.name.slice(4)}
                </span>
              </>
            ) : /WOW$/i.test(config.name) ? (
              <>
                <span className="text-[#1a1a1a]/[0.04] dark:text-white/[0.04]">
                  {config.name.slice(0, -3)}{' '}
                </span>
                <WowText variant="watermark" />
              </>
            ) : (
              <>
                <WowText variant="watermark" />
                <span className="ml-2 text-[#1a1a1a]/[0.04] dark:text-white/[0.04] sm:ml-3">
                  {config.name}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
