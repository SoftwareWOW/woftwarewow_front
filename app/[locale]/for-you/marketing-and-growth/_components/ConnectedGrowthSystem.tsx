import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'

const stages = [
  {
    id: 1,
    step: 'Stage 01',
    title: 'Attract',
    items: ['SEO', 'Paid Media', 'Social', 'Content'],
  },
  {
    id: 2,
    step: 'Stage 02',
    title: 'Engage',
    items: ['Brand', 'Content', 'Websites', 'Social'],
  },
  {
    id: 3,
    step: 'Stage 03',
    title: 'Convert',
    items: ['Landing Pages', 'Funnels', 'CRO', 'Lead Generation'],
  },
  {
    id: 4,
    step: 'Stage 04',
    title: 'Retain',
    items: ['CRM', 'Email', 'Automation', 'Customer Journeys'],
  },
  {
    id: 5,
    step: 'Stage 05',
    title: 'Grow',
    items: ['Analytics', 'Optimization', 'Sales Enablement', 'AI'],
  },
]

/** Layout: Home-16 ProcessV8 — stage cards extended to 5 growth stages. */
const ConnectedGrowthSystem = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>A Connected Growth System</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mb-3">
              Attract → Engage → Convert → Retain →
              <InstrumentText> Grow</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Awareness, acquisition, conversion and retention working together — not as separate services.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[24px] max-xl:flex-wrap xl:gap-[20px]">
          {stages.map((item) => (
            <RevealWrapper key={item.id} className="reveal-me w-full grow pt-6 sm:w-[45%] lg:w-[30%] xl:w-auto xl:grow">
              <div className="relative mx-auto grid min-h-[280px] grid-cols-1 content-between rounded-radius-md border px-5 pb-8 pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {item.step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{item.title}</h6>
                <ul className="mt-6 space-y-2">
                  {item.items.map((line) => (
                    <li
                      key={line}
                      className="text-sm font-normal leading-[1.4] text-black/70 dark:text-backgroundBody/70"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-10 text-center md:mt-14">
          <p className="text-lg font-normal text-secondary dark:text-backgroundBody md:text-xl">
            One connected growth system. Specialist expertise at every stage — powered by <WowText>WOW</WowText>.
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-7 flex justify-center md:mt-10">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Talk to a Growth Expert
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ConnectedGrowthSystem
