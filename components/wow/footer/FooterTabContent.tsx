'use client'

import FooterAskWow from '@/components/wow/FooterAskWow'
import { FooterActionCard, FooterTextLink } from '@/components/wow/footer/FooterActionCard'
import {
  connectSocials,
  contactCards,
  exploreDivisions,
  resourceColumns,
  serviceCards,
  type FooterTabId,
} from '@/components/wow/footer/footer-tab-data'
import { navItemHoverClass } from '@/components/wow/nav/nav-interaction-styles'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { useContactDialogOptional } from '@/components/wow/shared/ContactDialogProvider'
import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import WowText, { renderWowInTitle } from '@/components/wow/shared/WowText'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { Icon, addCollection } from '@iconify/react'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'

addCollection(simpleIcons)

const socialIconNames = {
  facebook: 'simple-icons:facebook',
  instagram: 'simple-icons:instagram',
  linkedin: 'simple-icons:linkedin',
  x: 'simple-icons:x',
  pinterest: 'simple-icons:pinterest',
  google: 'simple-icons:google',
  tiktok: 'simple-icons:tiktok',
  youtube: 'simple-icons:youtube',
} as const

const panelClass = 'w-full px-3 sm:px-5 2xl:px-10'
const mutedText = '!text-[#808080]'
const headingText = 'text-secondary dark:text-[#F2F2F2]'

function ResourcesPanel() {
  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-5 py-3 sm:grid-cols-2 sm:gap-6 sm:py-4 lg:grid-cols-4 lg:gap-5 2xl:gap-6 2xl:py-8')}>
      <div className="flex flex-col gap-2 sm:col-span-2 sm:gap-3 lg:col-span-1">
        <p className="font-outfit text-xl font-extrabold leading-none tracking-[-0.06em] sm:text-2xl 2xl:text-[2rem]">
          <WowText />
          <span className={cn('ml-1 font-light', headingText)}>Superagency</span>
        </p>
        <p className={cn('max-w-[280px] font-outfit text-xs font-light leading-[1.5] sm:text-sm 2xl:text-base 2xl:leading-[1.6]', mutedText)}>
          This is where ambitions become achievements.
        </p>
        <p className={cn('font-outfit text-xs font-light leading-[1.5] sm:text-sm 2xl:text-base 2xl:leading-[1.6]', mutedText)}>
          90 Burnhamthorpe Rd West, 1400
          <br />
          Mississauga, ON L5B 3C3 🇨🇦
        </p>
        <a
          href="tel:+18337638969"
          className={cn('font-outfit text-xs font-light leading-[1.5] transition-colors hover:!text-primary sm:text-sm 2xl:text-base', mutedText)}
        >
          +1 (833) SOFT-WOW
        </a>
      </div>

      {resourceColumns.map((column) => (
        <div key={column.title} className="flex flex-col gap-2 sm:gap-3 2xl:gap-4">
          <p className={cn('font-outfit text-sm font-light sm:text-base 2xl:text-xl', headingText)}>{column.title}</p>
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
    <div className={cn(panelClass, 'grid grid-cols-1 gap-2 py-3 sm:grid-cols-2 sm:gap-2.5 sm:py-4 lg:grid-cols-3 2xl:gap-4 2xl:py-8')}>
      {exploreDivisions.map((division) => (
        <FooterActionCard
          key={division.href}
          href={division.href}
          iconId={division.iconId}
          title={renderWowInTitle(division.title)}
          description={division.subtitle}
        />
      ))}
    </div>
  )
}

function ServicesPanel() {
  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-2 py-3 sm:grid-cols-2 sm:gap-2.5 sm:py-4 lg:grid-cols-3 2xl:gap-4 2xl:py-8')}>
      {serviceCards.map((service) => (
        <FooterActionCard
          key={service.title}
          href={service.href}
          iconId={service.iconId}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  )
}

function ContactPanel() {
  const contactDialog = useContactDialogOptional()

  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-2 py-3 sm:grid-cols-2 sm:gap-2.5 sm:py-4 2xl:gap-4 2xl:py-8')}>
      {contactCards.map((card) => (
        <FooterActionCard
          key={card.title}
          href={card.action === 'link' ? card.href : undefined}
          onClick={card.action === 'contact' ? () => contactDialog?.open() : undefined}
          iconId={card.iconId}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}

function ConnectPanel() {
  const toast = useToastOptional()
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    toast?.showToast('Thanks — we will keep you posted.')
    setEmail('')
  }

  return (
    <div className={cn(panelClass, 'flex flex-col items-center gap-6 py-3 sm:gap-8 sm:py-4 2xl:gap-12 2xl:py-8')}>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 2xl:gap-4">
        {connectSocials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={cn(
              'inline-flex size-8 items-center justify-center rounded-radius-sm transition-colors sm:size-9 2xl:size-11',
              mutedText,
              navItemHoverClass,
            )}
          >
            <Icon icon={socialIconNames[social.icon]} className="size-4 sm:size-5 2xl:size-6" />
          </a>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-10 2xl:gap-14">
        <div className="flex w-full max-w-[520px] flex-col items-center gap-3 lg:items-start">
          <p className={cn('text-center font-outfit text-xs font-light leading-[1.5] lg:text-left sm:text-sm 2xl:text-base 2xl:leading-[1.6]', mutedText)}>
            Ideas, insights and practical ways to grow your business.
          </p>
          <form onSubmit={handleSubscribe} className="flex w-full flex-col gap-2 sm:flex-row sm:items-stretch">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="hello@email.com"
              aria-label="Email address"
              className={cn(
                'h-10 min-w-0 flex-1 rounded-radius-sm border bg-transparent px-3 font-outfit text-sm font-light sm:h-11 2xl:h-14 2xl:px-4 2xl:text-base',
                'border-[#1515151A] text-secondary placeholder:text-[#808080] focus:outline-none',
                'dark:border-[#EDF0F51A] dark:text-[#F2F2F2]',
              )}
            />
            <button
              type="submit"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-radius-sm bg-primary px-5 font-outfit text-[10px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:bg-primary/90 sm:h-11 sm:px-6 sm:text-xs 2xl:h-14 2xl:px-8 2xl:text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="hidden h-12 w-px bg-[#1515151A] dark:bg-[#EDF0F51A] lg:block 2xl:h-16" />

        <Link
          href="/wowhub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-outfit text-[clamp(1.35rem,3.2vw,2rem)] leading-none 2xl:text-[clamp(1.75rem,4vw,2.75rem)]"
        >
          <InstrumentText variant="solid">Join</InstrumentText>{' '}
          <WowText /> <span className={headingText}>Hub</span>
        </Link>
      </div>
    </div>
  )
}

export default function FooterTabContent({ tab }: { tab: FooterTabId }) {
  let panel: ReactNode

  switch (tab) {
    case 'resources':
      panel = <ResourcesPanel />
      break
    case 'explore':
      panel = <ExplorePanel />
      break
    case 'services':
      panel = <ServicesPanel />
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

  return (
    <div role="tabpanel" className="w-full min-w-0">
      {panel}
    </div>
  )
}
