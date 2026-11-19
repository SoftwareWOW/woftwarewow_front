import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

type Step = {
  id: string
  title: string
  description: string
}

type OperationsUseCasePoweredSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  steps: ReadonlyArray<Step>
  image: { src: string; alt: string }
  sectionId?: string
}

/** Header: operations §2 Challenge. Body: marketing WhatWeAutomate / Home-07 ProcessV4. */
export default function OperationsUseCasePoweredSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  steps,
  image,
  sectionId = 'intelligent-operations',
}: OperationsUseCasePoweredSectionProps) {
  const isSvg = image.src.toLowerCase().endsWith('.svg')

  return (
    <section id={sectionId} className="scroll-mt-24">
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 lg:leading-[1.21]">
              {titleBefore}
              {titleAccent ? (
                <>
                  <br />
                  <InstrumentText>{titleAccent}</InstrumentText>
                </>
              ) : null}
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-[770px] text-[#808080]">{description}</p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
          <figure className="relative mx-auto min-h-[280px] w-full max-w-[570px] shrink-0 overflow-hidden rounded-radius-md md:mx-0 md:min-h-0 md:w-[570px] md:self-stretch">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 570px"
              className={`rounded-radius-md ${isSvg ? 'object-contain' : 'object-cover'}`}
            />
          </figure>

          <div className="min-w-0 flex-1 md:self-stretch">
            <ul className="relative space-y-5 md:space-y-6 lg:space-y-7">
              {steps.map((step, index) => (
                <li key={step.id} className="flex max-w-max items-start gap-6 md:gap-8">
                  <div className="flex w-16 shrink-0 flex-col items-center self-stretch">
                    <div className="relative z-10 flex shrink-0 items-center justify-center rounded-full bg-secondary px-3.5 py-5 text-lg font-bold text-white lg:px-6 lg:py-8">
                      <span className="inline-block text-xl font-semibold text-inherit">{step.id}</span>
                    </div>
                    {index < steps.length - 1 ? (
                      <span
                        aria-hidden
                        className="mt-0 w-px min-h-4 flex-1 bg-secondary dark:bg-backgroundBody md:-mb-6 lg:-mb-7"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <h3 className="wow-process-step-title text-nowrap">{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-base leading-relaxed text-[#808080]">{step.description}</p>
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