'use client'

import type { DivisionChromeFooter } from '@/components/wow/divisions/division-chrome'
import FooterAskWow from '@/components/wow/FooterAskWow'
import {
  FooterActionCard,
  FooterTextLink,
  footerResourceColumnTitleClass,
} from '@/components/wow/footer/FooterActionCard'
import {
  connectSocials,
  contactCards,
  exploreDivisions,
  resourceColumns,
  serviceCards,
  type FooterTabId,
} from '@/components/wow/footer/footer-tab-data'
import {
  footerCardPanelFillClass,
  footerServiceGridClassForCount,
  footerServicePanelCenterClass,
  footerContactCardGridClass,
  footerExploreCardGridClass,
  footerPanelTopAlignClass,
} from '@/components/wow/footer/footer-shell-styles'
import { WowDivisionLogo } from '@/components/wow/nav/WowDivisionLogo'
import { WowSuperagencyLogo } from '@/components/wow/nav/WowSuperagencyLogo'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { useContactDialogOptional } from '@/components/wow/shared/ContactDialogProvider'
import FooterNewsletterSubscribe from '@/components/wow/footer/FooterNewsletterSubscribe'
import { Link } from '@/i18n/navigation'
import { socialBrandIcons } from '@/components/wow/footer/social-brand-icons'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import type { ReactNode } from 'react'

const panelClass = 'w-full px-3 sm:px-5 2xl:px-10'
const mutedText = '!text-[#808080]'

function ResourcesPanel({ divisionChrome }: { divisionChrome?: DivisionChromeFooter }) {
  const brand = divisionChrome?.resourcesBrand

  return (
    <div
      className={cn(
        panelClass,
        'grid grid-cols-1 gap-5 pt-3 sm:grid-cols-2 sm:gap-6 sm:pt-4 lg:grid-cols-4 lg:gap-5 2xl:gap-6 2xl:pt-8',
      )}
    >
      <div className="flex flex-col gap-2 sm:col-span-2 sm:gap-3 lg:col-span-1">
        {brand ? (
          <Link href={brand.homeHref} className="inline-block max-w-full">
            <Image
              className="h-6 w-auto max-w-full dark:hidden sm:h-7 2xl:h-8"
              src={brand.logo.light}
              alt={brand.logoAlt}
              width={220}
              height={28}
              unoptimized
            />
            <Image
              className="hidden h-6 w-auto max-w-full dark:block sm:h-7 2xl:h-8"
              src={brand.logo.dark}
              alt={brand.logoAlt}
              width={220}
              height={28}
              unoptimized
            />
          </Link>
        ) : (
          <WowSuperagencyLogo />
        )}
        <p className={cn('max-w-[280px] font-outfit text-xs font-light leading-[1.5] sm:text-sm 2xl:text-base 2xl:leading-[1.6]', mutedText)}>
          {brand?.tagline ?? 'This is where ambitions become achievements.'}
        </p>
        <p className={cn('font-outfit text-xs font-light leading-[1.5] sm:text-sm 2xl:text-base 2xl:leading-[1.6]', mutedText)}>
          {brand?.addressLines[0] ?? '90 Burnhamthorpe Rd West, 1400'}
          <br />
          {brand?.addressLines[1] ?? 'Mississauga, ON L5B 3C3 🇨🇦'}
        </p>
        <a
          href={brand?.phoneHref ?? 'tel:+18337638969'}
          className={cn('font-outfit text-xs font-light leading-[1.5] transition-colors hover:!text-primary sm:text-sm 2xl:text-base', mutedText)}
        >
          {brand?.phone ?? '+1 (833) SOFT-WOW'}
        </a>
      </div>

      {resourceColumns.map((column) => (
        <div key={column.title} className="flex flex-col gap-2 sm:gap-3 2xl:gap-4">
          <p className={footerResourceColumnTitleClass}>{column.title}</p>
          <ul className="flex flex-col gap-0.5 2xl:gap-1">
            {column.links.map((link) => (
              <li key={link.label}>
                <FooterTextLink href={link.href} iconId={link.iconId} label={link.label} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function ExplorePanel() {
  return (
    <div className={cn(panelClass, footerExploreCardGridClass)}>
      {exploreDivisions.map((division) => (
        <FooterActionCard
          key={division.href}
          href={division.href}
          iconStyle="none"
          title={<WowDivisionLogo divisionId={division.divisionId} size="md" />}
          description={division.subtitle}
        />
      ))}
    </div>
  )
}

function ServicesPanel({ divisionChrome }: { divisionChrome?: DivisionChromeFooter }) {
  const cards = divisionChrome?.serviceCards ?? serviceCards
  const gridClass = footerServiceGridClassForCount(cards.length)
  const serviceDensity = cards.length === 7 ? 'seven' : 'default'

  return (
    <div className={cn(panelClass, footerServicePanelCenterClass)}>
      <div className={gridClass}>
      {cards.map((service) => (
        <FooterActionCard
          key={service.title}
          href={service.href}
          iconId={service.iconId}
          iconStyle="plain"
          serviceDensity={serviceDensity}
          title={service.title}
          description={service.description}
        />
      ))}
      </div>
    </div>
  )
}

function ContactPanel() {
  const contactDialog = useContactDialogOptional()

  return (
    <div className={cn(panelClass, footerContactCardGridClass)}>
      {contactCards.map((card) => (
        <FooterActionCard
          key={card.title}
          href={card.action === 'link' ? card.href : undefined}
          onClick={card.action === 'contact' ? () => contactDialog?.open() : undefined}
          iconId={card.iconId}
          iconStyle="boxed"
          showArrow
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}

export function ConnectPanel() {
  return (
    <div
      className={cn(
        panelClass,
        'flex w-full flex-col items-center gap-6 py-3 sm:gap-8 sm:py-4 lg:py-0 2xl:gap-12 2xl:py-0',
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 min-[1400px]:gap-8">
        {connectSocials.map((social) => {
          const SocialIcon = socialBrandIcons[social.icon]
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={cn(
                'inline-flex shrink-0 items-center justify-center bg-transparent transition-opacity hover:opacity-80',
                mutedText,
              )}
            >
              <SocialIcon className="size-7 sm:size-8 md:size-9 lg:size-10 xl:size-11 min-[1400px]:size-[45px] min-[1800px]:size-12" />
            </a>
          )
        })}
      </div>

      <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-10 2xl:gap-14">
        <FooterNewsletterSubscribe />

        <div className="hidden h-12 w-px bg-[#1515151A] dark:bg-[#EDF0F51A] lg:block 2xl:h-16" />

        <Link
          href="/hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-outfit text-[clamp(1.35rem,3.2vw,2rem)] leading-none 2xl:text-[clamp(1.75rem,4vw,2.75rem)]"
        >
          <InstrumentText variant="solid">Join</InstrumentText>{' '}
          <WowDivisionLogo divisionId="wowHub" size="md" />
        </Link>
      </div>
    </div>
  )
}

const footerStretchTabIds = new Set<FooterTabId>(['explore', 'services', 'contact'])

export default function FooterTabContent({
  tab,
  divisionChrome,
}: {
  tab: FooterTabId
  divisionChrome?: DivisionChromeFooter
}) {
  let panel: ReactNode

  switch (tab) {
    case 'resources':
      panel = <ResourcesPanel divisionChrome={divisionChrome} />
      break
    case 'explore':
      panel = <ExplorePanel />
      break
    case 'services':
      panel = <ServicesPanel divisionChrome={divisionChrome} />
      break
    case 'contact':
      panel = <ContactPanel />
      break
    case 'connect':
      panel = <ConnectPanel />
      break
    default:
      panel = <FooterAskWow />
  }

  const wrapperClass = footerStretchTabIds.has(tab) ? footerCardPanelFillClass : footerPanelTopAlignClass

  return <div className={wrapperClass}>{panel}</div>
}
