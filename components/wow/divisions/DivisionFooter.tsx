'use client'

import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import WowText from '@/components/wow/shared/WowText'
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
  { label: 'Cookies Settings', href: '/policy' },
]

export default function DivisionFooter({ config }: DivisionFooterProps) {
  return (
    <footer className="relative z-0 w-full max-w-full overflow-x-clip lg:fixed lg:inset-x-0 lg:bottom-0">
      <div className="relative bg-background px-3 py-3 transition-colors duration-300 dark:bg-dark md:px-4 md:py-4">
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
          <div className="rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-6 py-10 backdrop-blur-sm transition-colors duration-300 dark:border-white/5 dark:bg-dark/50 dark:backdrop-blur-sm md:px-10 md:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
              <div>
                <Link href={config.homeHref} className="inline-block">
                  <Image
                    className="h-7 w-auto dark:hidden"
                    src={config.logo.light}
                    alt={config.logoAlt}
                    width={220}
                    height={28}
                    unoptimized
                  />
                  <Image
                    className="hidden h-7 w-auto dark:block"
                    src={config.logo.dark}
                    alt={config.logoAlt}
                    width={220}
                    height={28}
                    unoptimized
                  />
                </Link>

                <p className="mt-4 max-w-sm text-base leading-relaxed text-[#555555] dark:text-[#999999]">
                  {config.tagline}
                </p>

                <address className="mt-6 not-italic text-sm leading-relaxed text-[#555555] dark:text-[#999999] md:text-base">
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

              <div className="grid gap-10 sm:grid-cols-3">
                {config.footerSections.map((section) => (
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

            <div className="mt-12 flex flex-col gap-4 border-t border-[#e5e5e5] pt-6 dark:border-white/10 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#555555] dark:text-[#666666]">{config.copyright}</p>

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

          <div
            aria-hidden
            className="pointer-events-none mt-6 select-none whitespace-nowrap pb-6 text-center text-[clamp(1.75rem,10vw,8rem)] font-semibold leading-none tracking-[-0.04em]"
          >
            <WowText variant="watermark" />
            <span className="ml-4 text-[#1a1a1a]/[0.04] dark:text-white/[0.04]">{config.name}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
