import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { MARKETING_FRAMEWORK } from './marketing-content'

export default function MarketingFrameworkSection() {
  const content = MARKETING_FRAMEWORK

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {content.steps.map((step) => (
              <RevealWrapper key={step.id} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                <h5 className="uppercase tracking-wide">
                  {step.id}. {step.title}
                </h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{step.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me relative min-h-[320px] overflow-hidden rounded-radius-md md:min-h-[480px] md:w-1/2">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
