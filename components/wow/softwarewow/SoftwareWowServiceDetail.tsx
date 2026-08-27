'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import {
  SOFTWARE_WOW_NAV_SERVICES,
  type SoftwareWowNavService,
} from '@/data/softwareWowNavServices'
import { Link } from '@/i18n/navigation'
import { Check } from 'lucide-react'

type SoftwareWowServiceDetailProps = {
  service: SoftwareWowNavService
}

export default function SoftwareWowServiceDetail({ service }: SoftwareWowServiceDetailProps) {
  const otherServices = SOFTWARE_WOW_NAV_SERVICES.filter((item) => item.slug !== service.slug)

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1320px] px-3 md:px-4">
          <RevealWrapper className="mb-4">
            <SectionLabel>Services</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h1 className="max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.12] tracking-tight text-secondary dark:text-backgroundBody">
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
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
              <ButtonComponent href="/softwarewow#services" variant="secondary">
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
                  <span className="text-base leading-relaxed text-colorText dark:text-dark-100">
                    {item}
                  </span>
                </RevealWrapper>
              ))}
            </ul>
          </div>

          <div>
            <RevealWrapper>
              <SectionLabel className="mb-4">Outcomes</SectionLabel>
              <h2 className="mb-6 text-3xl tracking-normal md:text-4xl">What changes</h2>
            </RevealWrapper>
            <ul className="flex flex-col gap-4">
              {service.outcomes.map((item, index) => (
                <RevealWrapper
                  key={item}
                  className="border-b border-black/10 pb-4 last:border-b-0 dark:border-white/10"
                >
                  <p className="mb-1 text-sm font-medium text-black/40 dark:text-dark-100">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="text-lg leading-snug text-secondary dark:text-backgroundBody">
                    {item}
                  </p>
                </RevealWrapper>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1320px] px-3 md:px-4">
          <RevealWrapper className="mb-8 md:mb-12">
            <SectionLabel className="mb-4">More services</SectionLabel>
            <h2 className="text-3xl tracking-normal md:text-4xl">Explore related work</h2>
          </RevealWrapper>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <RevealWrapper key={item.slug}>
                <Link
                  href={`/softwarewow/services/${item.slug}`}
                  className="group flex h-full flex-col gap-2 border border-black/10 bg-backgroundBody p-5 transition-colors hover:border-black/25 dark:border-white/10 dark:bg-dark dark:hover:border-white/25 md:p-6"
                >
                  <p className="text-lg font-medium text-secondary group-hover:underline dark:text-backgroundBody">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-colorText dark:text-dark-100">
                    {item.summary}
                  </p>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-3">
        <WowGrowthCta
          accentText={service.ctaAccent}
          mainText={service.ctaMain}
          ariaLabel={`Start a ${service.title} project with SoftwareWOW`}
        />
      </div>
    </div>
  )
}
