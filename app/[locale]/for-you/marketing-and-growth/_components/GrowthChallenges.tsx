import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const challenges = [
  {
    title: 'Low visibility',
    description: 'Customers can\'t find you when they\'re ready to buy.',
  },
  {
    title: 'Inconsistent leads',
    description: 'Demand comes in waves — or not at all — without a reliable engine.',
  },
  {
    title: 'Weak conversion',
    description: 'Traffic and attention don\'t turn into qualified opportunities.',
  },
  {
    title: 'Disconnected channels',
    description: 'SEO, social, paid and sales operate in silos instead of one system.',
  },
  {
    title: 'Unclear ROI',
    description: 'Spend grows, but it\'s hard to see what actually drives revenue.',
  },
]

/** Layout: Home-16 WhyChooseUsV5 — split headline + stacked challenge list. */
const GrowthChallenges = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1500px] px-4 md:px-[30px]">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse md:gap-5 lg:gap-10 xl:gap-x-20">
          <div className="md:w-[45%]">
            <div className="[&>*:not(:first-child)]:mt-3.5">
              {challenges.map((item) => (
                <RevealWrapper key={item.title} className="reveal-me border-b py-2.5 dark:border-dark">
                  <h6>{item.title}</h6>
                  <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
                </RevealWrapper>
              ))}
            </div>
            <RevealWrapper className="reveal-me mt-7 max-md:w-full md:mt-14">
              <ButtonComponentList>
                <ButtonComponent href="/contact" variant="secondary">
                  Talk Through Your Challenges
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper className="reveal-me md:w-[55%]">
            <SectionLabel className="mb-3.5">Your Growth Challenges</SectionLabel>
            <h2>
              Problems that keep growth
              <InstrumentText> stuck</InstrumentText>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#808080]">
              If these sound familiar, you don&apos;t need more disconnected tactics — you need a connected growth
              system.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default GrowthChallenges
