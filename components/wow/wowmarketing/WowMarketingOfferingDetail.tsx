'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { WowMarketingOffering } from '@/data/wowMarketingNavContent'
import {
  WOW_MARKETING_NAV_SERVICES,
  WOW_MARKETING_NAV_SOLUTIONS,
} from '@/data/wowMarketingNavContent'
import {
  wowMarketingServiceHref,
  wowMarketingSolutionHref,
} from '@/data/wowMarketingMegaNavRoutes'
import { Link } from '@/i18n/navigation'
import { Check } from 'lucide-react'

type WowMarketingOfferingDetailProps = {
  offering: WowMarketingOffering
}

export default function WowMarketingOfferingDetail({ offering }: WowMarketingOfferingDetailProps) {
  const related =
    offering.kind === 'service'
      ? WOW_MARKETING_NAV_SERVICES.filter((item) => item.slug !== offering.slug).slice(0, 3)
      : WOW_MARKETING_NAV_SOLUTIONS.filter((item) => item.slug !== offering.slug).slice(0, 3)

  const indexHref = offering.kind === 'service' ? '/marketing#services' : '/marketing#solutions'
  const relatedHref = (item: WowMarketingOffering) =>
    item.kind === 'service' ? wowMarketingServiceHref(item.slug) : wowMarketingSolutionHref(item.slug)

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1320px] px-3 md:px-4">
          <RevealWrapper className="mb-4">
            <SectionLabel>{offering.kind === 'service' ? 'Services' : 'Solutions'}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h1 className="max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.12] tracking-tight text-secondary dark:text-backgroundBody">
              {offering.headline}
            </h1>
          </TextAppearAnimation>
          <RevealWrapper delay={0.12} className="mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-colorText dark:text-dark-100 sm:text-lg">
              {offering.description}
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.2} className="mt-8 md:mt-10">
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="primary">
                Book a Strategy Call
              </ButtonComponent>
              <ButtonComponent href={indexHref} variant="secondary">
                {offering.kind === 'service' ? 'All Services' : 'All Solutions'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1320px] px-3 md:px-4">
        <RevealWrapper>
          <h2 className="font-outfit text-2xl font-light text-secondary dark:text-backgroundBody sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:gap-4">
            {offering.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-radius-sm border border-[#1515151A] p-4 dark:border-[#EDF0F51A]"
              >
                <Check className="mt-0.5 size-5 shrink-0 stroke-secondary dark:stroke-backgroundBody" strokeWidth={1.5} />
                <span className="text-sm leading-relaxed text-colorText dark:text-dark-100 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </RevealWrapper>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto w-full max-w-[1320px] px-3 pb-8 md:px-4 md:pb-12">
          <RevealWrapper>
            <h2 className="font-outfit text-xl font-light text-secondary dark:text-backgroundBody sm:text-2xl">
              Explore more
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={relatedHref(item)}
                    className="block rounded-radius-sm border border-[#1515151A] p-4 transition-colors hover:border-primary/40 dark:border-[#EDF0F51A]"
                  >
                    <span className="font-outfit text-base font-light text-secondary dark:text-backgroundBody">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </section>
      ) : null}

      <WowGrowthCta />
    </div>
  )
}
