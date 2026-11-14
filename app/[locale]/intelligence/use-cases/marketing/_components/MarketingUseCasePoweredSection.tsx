import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CmsResponsiveImage } from '@/lib/strapi/cms-section-props'

type Step = {
  id: string
  title: string
  description: string
}

type MarketingUseCasePoweredSectionProps = {
  eyebrow: string
  title: string
  description: string
  steps: ReadonlyArray<Step>
  image: { src: string; alt: string }
  sectionId?: string
}

/** Layout copy: social/PaidSocialBeyondClickSection (intelligent-automation WhatWeAutomate). */
export default function MarketingUseCasePoweredSection({
  eyebrow,
  title,
  description,
  steps,
  image,
  sectionId,
}: MarketingUseCasePoweredSectionProps) {
  return (
    <section
      id={sectionId}
      className="scroll-mt-24 bg-background transition-colors duration-300 dark:bg-background"
    >
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-5 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">{title}</h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md md:min-h-[480px] md:w-[min(100%,420px)] md:shrink-0 lg:min-h-[560px] [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
            <CmsResponsiveImage
              image={image}
              alt={image.alt}
              fill
              className="rounded-radius-md object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </figure>

          <div className="min-w-0 flex-1">
            <ul className="relative space-y-5 md:space-y-6">
              {steps.map((step, index) => (
                <li key={step.id} className="relative max-w-max px-10">
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute -left-px top-11 z-0 hidden w-px bg-secondary md:block lg:top-14 dark:bg-backgroundBody"
                      style={{ height: 'calc(100% + 1.5rem)' }}
                    />
                  ) : null}
                  <div
                    className={`absolute left-0 z-10 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span className="inline-block text-xl font-light text-inherit">{step.id}</span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-2 max-w-[483px] text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}