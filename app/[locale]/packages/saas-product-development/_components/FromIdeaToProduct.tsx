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

type CardContentProps = {
  card: (typeof cards)[number]
  inverted?: boolean
}

const CardContent = ({ card, inverted = false }: CardContentProps) => (
  <>
    <span
      className={`font-instrument text-4xl italic md:text-5xl ${
        inverted ? 'text-white dark:text-secondary' : 'text-secondary dark:text-backgroundBody'
      }`}
    >
      {card.number}
    </span>
    <h5
      className={`mb-2.5 mt-6 break-words uppercase ${
        inverted ? 'text-white dark:text-secondary' : ''
      }`}
    >
      {card.title}
    </h5>
    <p className={`mb-3 text-base ${inverted ? 'text-white/80 dark:text-secondary/80' : 'text-[#808080]'}`}>
      {card.subtitle}
    </p>
    <p className={`text-base leading-relaxed ${inverted ? 'text-white/80 dark:text-secondary/80' : 'text-[#808080]'}`}>
      {card.description}
    </p>
  </>
)

/** Layout: OurExpertiseV2 + ServicesV11 slide hover. */
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

        <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row md:items-stretch">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group relative flex-1 overflow-hidden rounded-radius-sm border dark:border-dark"
            >
              {/* Front — in-flow so padding + height follow content */}
              <div className="relative z-0 box-border translate-y-0 px-8 py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0 md:px-10 md:py-12">
                <CardContent card={card} />
              </div>
              {/* Back — ServicesV11 invert */}
              <div className="absolute inset-0 z-10 box-border translate-y-full bg-secondary px-8 py-10 transition-all duration-700 group-hover:translate-y-0 dark:bg-backgroundBody md:px-10 md:py-12">
                <CardContent card={card} inverted />
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default FromIdeaToProduct
