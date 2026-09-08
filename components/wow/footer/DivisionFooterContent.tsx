'use client'

import FooterAskWow from '@/components/wow/FooterAskWow'
import { FooterActionCard, FooterTextLink } from '@/components/wow/footer/FooterActionCard'
import {
  footerHeadingText,
  footerMutedText,
  footerPanelClass,
} from '@/components/wow/footer/footer-shell-styles'
import { ConnectPanel } from '@/components/wow/footer/FooterTabContent'
import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import WowText from '@/components/wow/shared/WowText'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import Image from 'next/image'

function DivisionSectionPanel({
  config,
  sectionId,
}: {
  config: DivisionSiteConfig
  sectionId: string
}) {
  const section = config.footerSections.find((item) => item.id === sectionId)
  if (!section) return null

  const isFirstSection = config.footerSections[0]?.id === sectionId

  if (isFirstSection) {
    return (
      <div
        className={cn(
          footerPanelClass,
          'grid grid-cols-1 gap-5 py-3 sm:grid-cols-2 sm:gap-6 sm:py-4 lg:grid-cols-4 lg:gap-5 2xl:gap-6 2xl:py-8',
        )}
      >
        <div className="flex flex-col gap-2 sm:col-span-2 sm:gap-3 lg:col-span-1">
          <Link href={config.homeHref} className="inline-block max-w-full">
            <Image
              className="h-6 w-auto max-w-full dark:hidden sm:h-7 2xl:h-8"
              src={config.logo.light}
              alt={config.logoAlt}
              width={220}
              height={28}
              unoptimized
            />
            <Image
              className="hidden h-6 w-auto max-w-full dark:block sm:h-7 2xl:h-8"
              src={config.logo.dark}
              alt={config.logoAlt}
              width={220}
              height={28}
              unoptimized
            />
          </Link>
          <p
            className={cn(
              'max-w-[280px] font-outfit text-xs font-light leading-[1.5] sm:text-sm 2xl:text-base 2xl:leading-[1.6]',
              footerMutedText,
            )}
          >
            {config.tagline}
          </p>
          <p
            className={cn(
              'font-outfit text-xs font-light leading-[1.5] sm:text-sm 2xl:text-base 2xl:leading-[1.6]',
              footerMutedText,
            )}
          >
            {config.addressLines[0]}
            <br />
            {config.addressLines[1]}
          </p>
          <a
            href={config.phoneHref}
            className={cn(
              'font-outfit text-xs font-light leading-[1.5] transition-colors hover:!text-primary sm:text-sm 2xl:text-base',
              footerMutedText,
            )}
          >
            {config.phone}
          </a>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-4">
          <p className={cn('font-outfit text-sm font-light sm:text-base 2xl:text-xl', footerHeadingText)}>
            {section.title}
          </p>
          <ul className="flex flex-col gap-0.5 2xl:gap-1">
            {section.links.map((link) => (
              <li key={link.id}>
                <FooterTextLink href={link.href} iconId="about" label={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        footerPanelClass,
        'grid grid-cols-1 gap-2 py-3 sm:grid-cols-2 sm:gap-2.5 sm:py-4 lg:grid-cols-3 2xl:gap-4 2xl:py-8',
      )}
    >
      {section.links.map((link) => (
        <FooterActionCard key={link.id} href={link.href} iconStyle="none" title={link.label} />
      ))}
    </div>
  )
}

function DivisionWatermark({ config }: { config: DivisionSiteConfig }) {
  if (config.name.toUpperCase().startsWith('WOW ')) {
    return (
      <>
        <WowText variant="watermark" className="text-[length:inherit]" />
        <span className="ml-2 text-[length:inherit] !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04] sm:ml-3">
          {config.name.slice(4)}
        </span>
      </>
    )
  }

  if (/WOW$/i.test(config.name)) {
    return (
      <>
        <span className="text-[length:inherit] !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04]">
          {config.name.slice(0, -3)}{' '}
        </span>
        <WowText variant="watermark" className="text-[length:inherit]" />
      </>
    )
  }

  return (
    <>
      <WowText variant="watermark" className="text-[length:inherit]" />
      <span className="ml-2 text-[length:inherit] !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04] sm:ml-3">
        {config.name}
      </span>
    </>
  )
}

export function getDivisionFooterTabs(config: DivisionSiteConfig) {
  const sectionTabs = config.footerSections.map((section) => ({
    id: section.id,
    label: section.title,
  }))

  const hasConnectSection = config.footerSections.some((section) => section.id === 'connect')
  if (hasConnectSection) {
    return sectionTabs
  }

  return [...sectionTabs, { id: 'connect', label: 'Connect' }]
}

export function renderDivisionFooterPanel(config: DivisionSiteConfig, tabId: string) {
  if (tabId === 'ask') {
    return <FooterAskWow />
  }

  if (tabId === 'connect') {
    return <ConnectPanel />
  }

  const section = config.footerSections.find((item) => item.id === tabId)
  if (section?.id === 'connect') {
    return <ConnectPanel />
  }

  return <DivisionSectionPanel config={config} sectionId={tabId} />
}

export { DivisionWatermark }
