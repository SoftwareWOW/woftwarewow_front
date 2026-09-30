import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

type Props = Partial<CmsProcessSection>

/** Layout: AiWithPurpose / BuildCommunity — 3 numbered columns with faded background numbers. */
const HowItWorks = ({ eyebrow, title, accentTitle, steps }: Props = {}) => {
  const displaySteps =
    steps?.map((step, index) => ({
      number: String(index + 1),
      title: step.title,
      description: step.description ?? '',
    })) ?? []

  if (!displaySteps.length && !title && !accentTitle) {
    return null
  }

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          {eyebrow ? (
            <RevealWrapper className="mb-5 flex justify-center">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
          ) : null}
          {title || accentTitle ? (
            <RevealWrapper className="reveal-me">
              <h2 className="mx-auto">
                {title}
                {accentTitle ? (
                  <>
                    <br className="hidden md:block" />
                    {accentTitle}
                  </>
                ) : null}
              </h2>
            </RevealWrapper>
          ) : null}
        </div>

        {displaySteps.length ? (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-3">
            {displaySteps.map((step) => (
              <RevealWrapper
                key={step.title}
                className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text text-[clamp(5rem,22vw,11.25rem)] font-black leading-none text-transparent dark:to-[#15151599]"
                >
                  {step.number}
                </span>
                <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
                {step.description ? (
                  <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                    {step.description}
                  </p>
                ) : null}
              </RevealWrapper>
            ))}
          </div>
        ) : null}

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Start Your Growth Plan
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HowItWorks
