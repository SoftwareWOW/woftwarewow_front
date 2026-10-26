import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import pricingBg from '@/public/images/pricing-gradient.png'
import { HUB_LEARNING_OPTIONS, HUB_SECTION_INNER, HUB_SECTION_SHELL } from './hub-content'

export default function HubLearningOptionsSection() {
  const section = HUB_LEARNING_OPTIONS

  return (
    <section className={`overflow-hidden ${HUB_SECTION_SHELL}`}>
      <div className={HUB_SECTION_INNER}>
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{section.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">
              {section.titleBefore}
              <InstrumentText>{section.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-[#808080]">{section.description}</p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {section.plans.map((plan) => {
            const isFeatured = 'isFeatured' in plan && plan.isFeatured
            const buttonVariant = plan.ctaVariant === 'primary' ? 'primary' : 'white'

            return (
              <RevealWrapper
                key={plan.id}
                className="reveal-me relative flex min-h-[380px] w-full flex-col border bg-backgroundBody px-[30px] pb-[30px] pt-[30px] dark:border-dark dark:bg-dark"
              >
                {isFeatured ? (
                  <div
                    className="absolute inset-0 h-full w-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${pricingBg.src})` }}
                    aria-hidden
                  />
                ) : null}

                <div className="relative mb-3 flex justify-end">
                  <div className="rv-badge">
                    <span className="rv-badge-text uppercase">{plan.badge}</span>
                  </div>
                </div>

                <h3 className="relative mb-3 text-2xl font-normal leading-tight md:text-3xl">{plan.title}</h3>
                <p className="relative text-base leading-relaxed text-secondary/70 dark:text-backgroundBody/70">
                  {plan.description}
                </p>

                <div className="relative z-10 mt-auto w-full pt-8">
                  <ButtonComponent href={plan.ctaHref} variant={buttonVariant} fullWidth>
                    {plan.ctaLabel}
                  </ButtonComponent>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-4 text-2xl md:text-3xl lg:text-4xl">
              <InstrumentText>{section.footer.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mb-6 max-w-2xl text-base text-[#808080] md:text-lg">{section.footer.description}</p>
          </RevealWrapper>
          <RevealWrapper className="reveal-me flex justify-center">
            <ButtonComponentList className="w-full max-w-xl">
              <ButtonComponent href={section.footer.ctaHref} variant="secondary" fullWidth>
                {section.footer.ctaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
