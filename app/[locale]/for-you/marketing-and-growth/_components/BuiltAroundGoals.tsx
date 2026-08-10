import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const goals = [
  {
    title: 'Business goals',
    description: 'Solutions mapped to the outcomes you need — visibility, pipeline, revenue or retention.',
  },
  {
    title: 'Customers & market',
    description: 'Messaging and channels shaped around who you serve and where they decide.',
  },
  {
    title: 'Industry context',
    description: 'Approaches tuned to how your category buys, competes and converts.',
  },
  {
    title: 'Growth stage',
    description: 'From first demand engine to scaled multi-channel systems — right-sized for now.',
  },
  {
    title: 'Resources & capacity',
    description: 'Plans that fit your team, budget and timeline without forcing enterprise overhead.',
  },
]

/** Layout: Home-18 OurExpertise — bordered expertise cards for goal-fit. */
const BuiltAroundGoals = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Built Around Your Goals</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>
              Growth plans shaped around
              <InstrumentText> how you operate</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Solutions adapted to your business goals, customers, industry, growth stage and resources — not one-size
              packages.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {goals.map((item) => (
            <RevealWrapper
              key={item.title}
              className="reveal-me rounded-radius-md border px-[30px] py-12 dark:border-dark md:py-16"
            >
              <h5 className="mb-2.5 lg:text-[28px]">{item.title}</h5>
              <p className="text-base leading-[1.6] text-[#808080]">{item.description}</p>
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
      </div>
    </section>
  )
}

export default BuiltAroundGoals
