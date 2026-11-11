'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import {
  WOW_SOCIAL_NAV_SERVICES,
  type WowSocialNavService,
} from '@/data/wowSocialNavContent'
import { wowSocialServiceHref } from '@/data/wowSocialMegaNavRoutes'
import { Link } from '@/i18n/navigation'
import { Check } from 'lucide-react'

type WowSocialServiceDetailProps = {
  service: WowSocialNavService
}

export default function WowSocialServiceDetail({ service }: WowSocialServiceDetailProps) {
  const otherServices = WOW_SOCIAL_NAV_SERVICES.filter((item) => item.slug !== service.slug)

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1320px] px-3 md:px-4">
          <RevealWrapper className="mb-4">
            <SectionLabel>Services</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h1 className="max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.12] tracking-tight text-secondary dark:text-backgroundBody">
              {service.headline}
            </h1>
          </TextAppearAnimation>
          <RevealWrapper delay={0.12} className="mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-colorText dark:text-dark-100 sm:text-lg">
              {service.description}
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.2} className="mt-8 md:mt-10">
            <ButtonComponentList>
              <ButtonComponent href="/meet" variant="primary">
                Start a Project
              </ButtonComponent>
              <ButtonComponent href="/social#services" variant="secondary">
                All Services
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1320px] gap-10 px-3 md:grid-cols-2 md:gap-16 md:px-4">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-4">Includes</SectionLabel>
              <h2 className="mb-6 text-3xl tracking-normal md:text-4xl">What you get</h2>
            </RevealWrapper>
            <ul className="flex flex-col gap-3">
              {service.includes.map((item) => (
                <RevealWrapper key={item} as="li" className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-secondary dark:text-backgroundBody"
                    strokeWidth={2}
                  />
                  <span className="text-base leading-relaxed text-colorText dark:text-dark-100">{item}</span>
                </RevealWrapper>
              ))}
            </ul>
          </div>

          <div>
            <RevealWrapper>
              <SectionLabel className="mb-4">Outcomes</SectionLabel>
              <h2 className="mb-6 text-3xl tracking-normal md:text-4xl">What changes</h2>
            </RevealWrapper>
            <ul className="flex flex-col gap-3">
              {service.outcomes.map((item) => (
                <RevealWrapper key={item} as="li" className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-secondary dark:text-backgroundBody"
                    strokeWidth={2}
                  />
                  <span className="text-base leading-relaxed text-colorText dark:text-dark-100">{item}</span>
                </RevealWrapper>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1320px] px-3 md:px-4">
          <RevealWrapper>
            <SectionLabel className="mb-4">More services</SectionLabel>
            <h2 className="mb-8 text-3xl tracking-normal md:text-4xl">Explore WOW Social</h2>
          </RevealWrapper>
          <ul className="grid gap-4 md:grid-cols-2">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link
                  href={wowSocialServiceHref(item.slug)}
                  className="block rounded-radius-md border p-6 transition-colors hover:border-secondary/40 dark:border-dark dark:hover:border-backgroundBody/40"
                >
                  <h3 className="text-xl font-light md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-colorText dark:text-dark-100">{item.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WowGrowthCta accentText={service.ctaAccent} mainText={service.ctaMain} ariaLabel={service.title} />
    </div>
  )
}
