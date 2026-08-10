import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    id: 1,
    step: 'Step 01',
    title: 'Start',
    subtitle: 'Build the foundations.',
    items: ['Brand', 'Website', 'Digital presence', 'Hosting', 'Core technology'],
  },
  {
    id: 2,
    step: 'Step 02',
    title: 'Grow',
    subtitle: 'Create demand.',
    items: ['SEO', 'Paid media', 'Social', 'Content', 'CRM', 'Automation'],
  },
  {
    id: 3,
    step: 'Step 03',
    title: 'Scale',
    subtitle: 'Build growth infrastructure.',
    items: ['AI', 'Custom software', 'Sales systems', 'Advanced automation', 'Analytics', 'Optimization'],
  },
]

/** Layout: Home-16 ProcessV8 — STEP badge cards + bottom CTA (trimmed to 3 steps). */
const BuiltToGrow = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Built to Grow With You</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mb-3">
              You don&apos;t need everything. You need the right{' '}
              <InstrumentText>next move</InstrumentText>.
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Start with the challenge that matters today. Add capabilities when your business is ready for tomorrow.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map((item) => (
            <RevealWrapper key={item.id} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:w-auto xl:grow">
              <div className="relative mx-auto grid min-h-[360px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-instrument text-4xl italic font-normal leading-[1.1] text-black dark:text-white md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-[1.3] text-black dark:text-backgroundBody">
                    {item.subtitle}
                  </p>
                </div>
                <ul className="mt-8 space-y-2 text-left">
                  {item.items.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm font-normal leading-[1.4] text-black/70 dark:text-backgroundBody/70"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-current" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-7 flex justify-center max-md:w-full md:mt-14">
          <ButtonComponentList itemClassName="max-md:w-full">
            <ButtonComponent href="/contact" variant="primary" fullWidth>
              Talk About Your Next Move
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuiltToGrow
