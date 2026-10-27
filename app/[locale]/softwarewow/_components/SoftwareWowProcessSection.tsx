import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { SOFTWAREWOW_PROCESS } from './softwarewow-content'

export default function SoftwareWowProcessSection() {
  const content = SOFTWAREWOW_PROCESS

  return (
    <section className="bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">{content.title}</h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-6">
          {content.steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text font-black leading-none text-transparent dark:to-[#15151599] text-[clamp(5rem,22vw,11.25rem)]"
              >
                {step.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href={content.ctaHref} variant="white">
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
