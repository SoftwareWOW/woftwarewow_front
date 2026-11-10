'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WowDivisionLogo } from '@/components/wow/nav/WowDivisionLogo'
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'

/** Match Marketing ecosystem rows; scaled for ElevateBrandV2 layout. */
const ROW_LOGO_CLASS = 'h-[0.6em] w-auto max-w-[min(100%,10em)] object-contain object-left'

export type WowEcosystemExpertiseRow = {
  id: string
  divisionId: DivisionId
  heading: string
  description: string
}

export type WowEcosystemExpertiseSectionProps = {
  eyebrow?: string
  title: string
  accentTitle?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  rows: WowEcosystemExpertiseRow[]
}

/** Home-19 ElevateBrandV2 — WOW Ecosystem rows with division brand SVGs. */
export default function WowEcosystemExpertiseSection({
  eyebrow = 'The WOW Ecosystem',
  title,
  accentTitle,
  description,
  ctaLabel,
  ctaHref = '/contact',
  rows,
}: WowEcosystemExpertiseSectionProps) {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                {title}{' '}
                {accentTitle ? <InstrumentText>{accentTitle}</InstrumentText> : null}
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            {description ? (
              <TextAppearAnimation>
                <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                  {description}
                </p>
              </TextAppearAnimation>
            ) : null}
            {ctaLabel ? (
              <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
                <ButtonComponentList className="flex justify-end max-md:justify-center" itemClassName="block">
                  <ButtonComponent href={ctaHref} variant="primary">
                    {ctaLabel}
                  </ButtonComponent>
                </ButtonComponentList>
              </RevealWrapper>
            ) : null}
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {rows.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {item.id}
              </span>
              <h3
                aria-label={item.heading}
                className="mt-2 flex items-center text-2xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]"
              >
                <WowDivisionLogo divisionId={item.divisionId} className={ROW_LOGO_CLASS} />
              </h3>
              <div className="ml-2.5 self-center text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px]">
                <p className="text-sm font-medium md:text-base md:leading-[1.6] md:tracking-[0.32px]">{item.heading}</p>
                <p className="mt-1 text-xs text-[#808080] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
