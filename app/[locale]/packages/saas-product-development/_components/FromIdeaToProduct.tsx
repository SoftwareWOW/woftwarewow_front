import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const cards = [
  {
    number: '01',
    title: 'I Have an Idea',
    subtitle: 'But nothing built yet.',
    description: 'You need help defining the product, features, experience and technical direction.',
  },
  {
    number: '02',
    title: 'I Have a Prototype',
    subtitle: 'But need to turn it into a real product.',
    description: 'You have validated some of the thinking and now need design, development and launch support.',
  },
  {
    number: '03',
    title: 'I Have an Existing Product',
    subtitle: 'But it needs its next version.',
    description: 'You need to improve, rebuild or expand an existing SaaS product.',
  },
]

/** Layout: Home-19 OurExpertiseV2 — 3 cards with hover-to-white. */
const FromIdeaToProduct = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>From Idea to Product</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              You have the idea. Now you need the team <InstrumentText>to build it.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group flex-1 rounded-radius-sm border px-[30px] py-16 transition-colors duration-300 hover:bg-white dark:border-dark dark:hover:bg-backgroundBody"
            >
              <span className="font-instrument text-4xl italic text-secondary transition-colors duration-300 group-hover:text-secondary dark:text-backgroundBody dark:group-hover:text-secondary md:text-5xl">
                {card.number}
              </span>
              <h5 className="mb-2.5 mt-6 uppercase transition-colors duration-300 group-hover:text-secondary dark:group-hover:text-secondary">
                {card.title}
              </h5>
              <p className="mb-3 text-base text-[#808080] transition-colors duration-300 group-hover:text-secondary/70">
                {card.subtitle}
              </p>
              <p className="text-base leading-relaxed text-[#808080] transition-colors duration-300 group-hover:text-secondary/70">
                {card.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default FromIdeaToProduct
