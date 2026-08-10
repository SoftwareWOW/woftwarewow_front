import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const solutions = [
  {
    title: 'Marketing Strategy',
    description: 'Clear strategies built around your market, customers and growth goals.',
  },
  {
    title: 'SEO & Content',
    description: 'Build visibility and attract customers actively searching for you.',
  },
  {
    title: 'Paid Media',
    description: 'Reach the right audiences with measurable, performance-focused campaigns.',
  },
  {
    title: 'Social Growth',
    description: 'Turn content, paid social and communities into business growth.',
  },
  {
    title: 'Lead Generation & Sales',
    description: 'Build funnels and systems that turn demand into qualified opportunities.',
  },
  {
    title: 'CRM & Automation',
    description: 'Connect leads, follow-ups and customer journeys through smarter automation.',
  },
]

/** Layout: Home-16 ServicesV14 — centered header + 6 bordered solution cards. */
const EverythingToGrow = () => {
  return (
    <section id="growth-solutions">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Everything You Need to Grow</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mb-3">
            Marketing solutions designed for
            <br />
            <InstrumentText> maximum impact</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            Strategy, visibility, demand and conversion — connected capabilities that help you attract customers and
            grow revenue.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {solutions.map((item) => (
          <RevealWrapper
            key={item.title}
            className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <h5 className="mb-2 lg:mb-3">{item.title}</h5>
            <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/contact" variant="secondary">
            Get Your Growth Plan
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default EverythingToGrow
