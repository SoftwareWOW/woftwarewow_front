'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import SectionDecorativeBackground from '@/components/shared/SectionDecorativeBackground'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import type { CmsRfqAccordionSection } from '@/lib/strapi/mappers/page-sections'
import type { CmsImageProps } from '@/lib/strapi/cms-section-props'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 3

/** Layout: SolutionToChallenges accordion — Build & Launch RFQ variant with centered header. */
const BuildAndLaunchRfq = ({
  eyebrow,
  title,
  description,
  groups,
  backgroundImage,
}: Partial<CmsRfqAccordionSection> & CmsImageProps = {}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const servicesData =
    groups?.map((group, index) => ({
      id: index + 1,
      title: group.title,
      subtitle: group.subtitle,
      items: group.items,
    })) ?? []

  if (!servicesData.length) {
    return null
  }
  const visibleServices = showAll ? servicesData : servicesData.slice(0, INITIAL_VISIBLE_COUNT)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleToggleShowAll = () => {
    if (showAll && activeIndex !== null && activeIndex >= INITIAL_VISIBLE_COUNT) {
      setActiveIndex(null)
    }
    setShowAll((prev) => !prev)
  }

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      {backgroundImage?.src ? (
        <SectionDecorativeBackground
          src={backgroundImage.src}
          wrapperClassName="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] opacity-60 dark:opacity-40 sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]"
          imgClassName="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] opacity-60 dark:opacity-40 sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
          <Image src={gradientBg} alt="" aria-hidden />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 text-center md:mb-16">
          {eyebrow ? (
            <RevealWrapper className="mb-4 flex justify-center">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
          ) : null}
          {title ? (
            <RevealWrapper>
              <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">{title}</h2>
            </RevealWrapper>
          ) : null}
          {description ? (
            <RevealWrapper className="mt-4">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
            </RevealWrapper>
          ) : null}
        </div>

        <RevealWrapper className="w-full [&>*:not(:last-child)]:mb-6">
          {visibleServices.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={service.id}
                className={`accordion-item relative w-full rounded-radius-sm border bg-backgroundBody px-5 py-0 duration-300 dark:bg-dark ${
                  isActive
                    ? 'open active border-black dark:border-white/10'
                    : 'border-black/10 dark:border-white/10'
                }`}
                data-active={isActive ? true : false}
              >
                <div
                  className={`accordion-header group relative flex cursor-pointer justify-between py-[35px] ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleAccordion(index)
                    }
                  }}
                  aria-expanded={isActive}
                >
                  <h3 className="flex flex-col gap-x-10 gap-y-3 font-outfit text-[25px] font-[500px] leading-[25.2px] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] md:flex-row md:items-center md:font-medium md:leading-[1.2] lg:text-3xl">
                    <span>{service.title}</span>
                    <span className="mt-2 pr-[2px] text-base font-normal text-[#808080] transition-colors duration-300 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {service.subtitle}
                    </span>
                  </h3>
                  <div
                    className={`flex size-[60px] shrink-0 items-center justify-center rounded-radius-sm bg-primary transition-colors duration-300 group-hover:bg-primary/50 dark:group-hover:bg-[#1F1F1F] md:size-[65px] lg:size-[79px] ${
                      isActive ? 'bg-primary/50 dark:bg-[#1F1F1F]' : ''
                    }`}
                  >
                    <ArrowDown
                      aria-hidden
                      className={`size-10 !stroke-white !text-white transition-transform duration-300 ease-out ${
                        isActive ? 'rotate-180' : ''
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="accordion-body flex flex-col justify-start gap-x-10 pb-10 duration-300 md:flex-row lg:gap-x-[73px]">
                      <ul className="[&>*:not(:last-child)]:mb-1">
                        {service.items.slice(0, Math.ceil(service.items.length / 2)).map((item) => (
                          <li
                            key={item}
                            className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] transition-colors duration-300 dark:text-[#999999]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="[&>*:not(:last-child)]:mb-1">
                        {service.items.slice(Math.ceil(service.items.length / 2)).map((item) => (
                          <li
                            key={item}
                            className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] transition-colors duration-300 dark:text-[#999999]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RevealWrapper>

        <RevealWrapper className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-14">
          {servicesData.length > INITIAL_VISIBLE_COUNT && (
            <ButtonComponentList>
              <ButtonComponent type="button" variant="white" onClick={handleToggleShowAll} ariaExpanded={showAll}>
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          )}
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="secondary">
              Start Now
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>

        <RevealWrapper className="mt-10 flex items-center justify-center gap-4 md:mt-14">
          <p className="font-instrument text-2xl italic md:text-[32px]">
            Build My <InstrumentText>Launch Plan</InstrumentText>
          </p>
          <Link
            href="/contact"
            aria-label="Build my launch plan"
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-radius-sm bg-primary transition-opacity hover:opacity-90 md:size-14"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" aria-hidden>
              <path
                d="M4 14L14 4M14 4H6M14 4V12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuildAndLaunchRfq
