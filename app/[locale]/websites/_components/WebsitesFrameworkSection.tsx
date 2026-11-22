'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useLandingImage } from '@/lib/strapi/division-landing/DivisionLandingImageContext'
import { LANDING_SECTION_KEYS } from '@/lib/strapi/division-landing/division-landing-image-manifest'
import Image from 'next/image'
import { WEBSITES_FRAMEWORK } from './websites-content'

/** Layout copied from MarketingFrameworkSection with split header row. */
export default function WebsitesFrameworkSection() {
  const content = WEBSITES_FRAMEWORK
  const frameworkSrc = useLandingImage(
    LANDING_SECTION_KEYS.wowWebsites.framework,
    0,
    content.image.src,
  )
  const steps = content.steps.map((step) => ({
    number: step.id,
    title: step.title,
    description: step.description,
  }))

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <RevealWrapper className="reveal-me mb-5 md:mb-8">
              <SectionLabel>{content.eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear max-w-[770px]">
                {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md lg:pt-2">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">{content.headerDescription}</p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-6">
              <ButtonComponentList>
                <ButtonComponent href={content.headerCtaHref} variant="secondary">
                  {content.headerCtaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-[30px]">
          <div className="w-full shrink-0 md:w-max md:order-1">
            <ul className="relative space-y-5 border-secondary dark:border-backgroundBody md:border-l md:space-y-6">
              {steps.map((step, index) => (
                <li key={step.number} className="relative max-w-max pl-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-background bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:shadow-[inset_0_0_0_1px_#EDF0F51A] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block text-xl font-light text-inherit ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-2 max-w-[483px] text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md md:order-2 md:min-h-[480px] min-w-0 flex-1 md:w-auto lg:min-h-[560px]">
            <Image
              src={frameworkSrc}
              alt={content.image.alt}
              fill
              className="rounded-radius-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
