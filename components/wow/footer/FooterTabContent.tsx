'use client'

import FooterAskWow from '@/components/wow/FooterAskWow'
import {
  connectSocials,
  contactCards,
  exploreDivisions,
  resourceColumns,
  serviceCards,
  type FooterTabId,
} from '@/components/wow/footer/footer-tab-data'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { useContactDialogOptional } from '@/components/wow/shared/ContactDialogProvider'
import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import WowText, { renderWowInTitle } from '@/components/wow/shared/WowText'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { Icon, addCollection } from '@iconify/react'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { ArrowUpRight, Megaphone } from 'lucide-react'
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

const panelClass = 'w-full px-4 sm:px-6 lg:px-10'
const cardClass = cn(
  'rounded-radius-md border border-[#1515151A] bg-transparent transition-colors hover:border-primary/40',
  'dark:border-[#EDF0F51A]',
)
const mutedText = '!text-[#808080]'
const headingText = 'text-secondary dark:text-[#F2F2F2]'

function ExploreTitle({ title }: { title: string }) {
  if (title.startsWith('SoftwareWOW')) {
    return <WowText className="text-[clamp(1.15rem,2.2vw,1.75rem)]">SoftwareWOW!</WowText>
  }

  return (
    <span className={cn('font-outfit text-[clamp(1.15rem,2.2vw,1.75rem)] font-light', headingText)}>
      {renderWowInTitle(title)}
    </span>
  )
}

function ResourcesPanel() {
  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-10 py-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 lg:py-8')}>
      <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
        <p className="font-outfit text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-none tracking-[-0.06em]">
          <WowText />
          <span className={cn('ml-1 font-light', headingText)}>Superagency</span>
        </p>
        <p className={cn('max-w-[280px] font-outfit text-sm font-light leading-[1.6] sm:text-base', mutedText)}>
          This is where ambitions become achievements.
        </p>
        <p className={cn('font-outfit text-sm font-light leading-[1.6] sm:text-base', mutedText)}>
          90 Burnhamthorpe Rd West, 1400
          <br />
          Mississauga, ON L5B 3C3 🇨🇦
        </p>
        <a
          href="tel:+18337638969"
          className={cn('font-outfit text-sm font-light leading-[1.6] transition-colors hover:!text-primary sm:text-base', mutedText)}
        >
          +1 (833) SOFT-WOW
        </a>
      </div>

      {resourceColumns.map((column) => (
        <div key={column.title} className="flex flex-col gap-4">
          <p className={cn('font-outfit text-lg font-light sm:text-xl', headingText)}>{column.title}</p>
          <ul className="flex flex-col gap-3">
            {column.links.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'inline-flex items-center gap-2.5 font-outfit text-sm font-light transition-colors hover:!text-primary sm:text-base',
                      headingText,
                    )}
                  >
                    <Icon className="size-4 shrink-0 sm:size-5" strokeWidth={1.5} />
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

function ExplorePanel() {
  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:py-8')}>
      {exploreDivisions.map((division) => (
        <Link
          key={division.href}
          href={division.href}
          className={cn(cardClass, 'flex min-h-[92px] flex-col justify-center px-5 py-4 sm:min-h-[108px] sm:px-6')}
        >
          <ExploreTitle title={division.title} />
          <p className={cn('mt-1 font-outfit text-sm font-light sm:text-base', mutedText)}>{division.subtitle}</p>
        </Link>
      ))}
    </div>
  )
}

function ServicesPanel() {
  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:py-8')}>
      {serviceCards.map((service) => {
        const Icon = service.icon
        return (
          <Link
            key={service.title}
            href={service.href}
            className={cn(cardClass, 'flex items-start gap-4 px-4 py-4 sm:px-5 sm:py-5')}
          >
            <Icon className={cn('mt-0.5 size-6 shrink-0 sm:size-7', headingText)} strokeWidth={1.5} />
            <span>
              <span className={cn('block font-outfit text-base font-light sm:text-lg', headingText)}>{service.title}</span>
              <span className={cn('mt-1 block font-outfit text-sm font-light', mutedText)}>{service.description}</span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}

function ContactPanel() {
  const contactDialog = useContactDialogOptional()

  const handleAction = (action: (typeof contactCards)[number]['action']) => {
    if (action === 'contact') {
      contactDialog?.open()
    }
  }

  return (
    <div className={cn(panelClass, 'grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 sm:gap-4 lg:py-8')}>
      {contactCards.map((card) => {
        const content = (
          <>
            <Megaphone className={cn('size-6 shrink-0 sm:size-7', headingText)} strokeWidth={1.5} />
            <span className="min-w-0 flex-1">
              <span className={cn('block font-outfit text-lg font-light sm:text-xl', headingText)}>{card.title}</span>
              <span className={cn('mt-1 block font-outfit text-sm font-light', mutedText)}>{card.description}</span>
            </span>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-radius-sm border border-[#1515151A] dark:border-[#EDF0F51A]">
              <ArrowUpRight className={cn('size-5', headingText)} strokeWidth={1.5} />
            </span>
          </>
        )

        const className = cn(cardClass, 'flex items-center gap-4 px-4 py-5 text-left sm:px-6 sm:py-6')

        if (card.action === 'link') {
          return (
            <Link key={card.title} href={card.href} className={className}>
              {content}
            </Link>
          )
        }

        return (
          <button
            key={card.title}
            type="button"
            onClick={() => handleAction(card.action)}
            className={className}
          >
            {content}
          </button>
        )
      })}
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
    <div className={cn(panelClass, 'flex flex-col items-center gap-10 py-6 lg:gap-12 lg:py-8')}>
      <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
        {connectSocials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={cn('transition-colors hover:!text-primary', mutedText)}
          >
            <Icon icon={socialIconNames[social.icon]} className="size-5 sm:size-6" />
          </a>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
        <div className="flex w-full max-w-[520px] flex-col items-center gap-4 lg:items-start">
          <p className={cn('text-center font-outfit text-sm font-light leading-[1.6] lg:text-left sm:text-base', mutedText)}>
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
                'h-12 min-w-0 flex-1 rounded-radius-sm border bg-transparent px-4 font-outfit text-sm font-light',
                'border-[#1515151A] text-secondary placeholder:text-[#808080] focus:outline-none',
                'dark:border-[#EDF0F51A] dark:text-[#F2F2F2] sm:h-14 sm:text-base',
              )}
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-radius-sm bg-primary px-6 font-outfit text-xs font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:bg-primary/90 sm:h-14 sm:px-8 sm:text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="hidden h-16 w-px bg-[#1515151A] dark:bg-[#EDF0F51A] lg:block" />

        <Link href="/wowhub" className="text-center font-outfit text-[clamp(1.75rem,4vw,2.75rem)] leading-none">
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
