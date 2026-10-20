import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ACCELERATE_HOW_WE_WORK } from './accelerate-content'

export default function AccelerateHowWeWorkSection() {
  const content = ACCELERATE_HOW_WE_WORK

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {content.steps.map(({ step, title, description }) => {
            const isFeatured = step === content.featuredStep
            return (
              <RevealWrapper key={step} className="relative w-full grow pt-8 sm:w-[48%] xl:grow">
                <div className="absolute left-1/2 top-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {step}
                  </span>
                </div>
                <div
                  className={`group mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center transition-colors duration-300 dark:border-dark ${
                    isFeatured ? 'bg-primary' : 'hover:bg-primary'
                  }`}
                >
                  <h6
                    className={`text-2xl font-normal leading-[1.1] transition-colors duration-300 ${
                      isFeatured ? 'text-white' : 'text-black group-hover:text-white dark:text-white'
                    }`}
                  >
                    {title}
                  </h6>
                  <p
                    className={`text-base font-normal leading-[1.3] transition-colors duration-300 ${
                      isFeatured
                        ? 'text-white/90'
                        : 'text-black/70 group-hover:text-white dark:text-backgroundBody/70'
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        <RevealWrapper className="reveal-me mt-7 flex justify-center md:mt-14">
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
