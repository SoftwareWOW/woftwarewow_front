import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const topRow = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Be Found',
    description: 'Search, social, content, campaigns, and destination visibility.',
    highlighted: false,
  },
  {
    number: '02',
    title: 'Explore',
    tagline: 'Create Desire',
    description: 'Strong visuals, storytelling, reviews, offers, and engaging digital experiences.',
    highlighted: true,
  },
  {
    number: '03',
    title: 'Book',
    tagline: 'Remove the Friction',
    description: 'Clear information, intuitive booking journeys, inquiries, and reservations.',
    highlighted: false,
  },
]

const bottomRow = [
  {
    number: '04',
    title: 'Experience',
    tagline: 'Stay Connected',
    description: 'Communication, digital touchpoints, support, and smarter guest interactions.',
    highlighted: false,
  },
  {
    number: '05',
    title: 'Return',
    tagline: 'Build Loyalty',
    description: 'Reviews, CRM, remarketing, email, and ongoing engagement.',
    highlighted: false,
  },
]

type JourneyCard = {
  number: string
  title: string
  tagline: string
  description: string
  highlighted: boolean
}

const JourneyCard = ({ card }: { card: JourneyCard }) => (
  <RevealWrapper
    className={`flex-1 rounded-radius-sm border px-[30px] py-10 ${
      card.highlighted
        ? 'border-transparent bg-backgroundBody dark:border-white/10 dark:bg-backgroundBody'
        : 'border-[#e5e5e5] dark:border-white/10'
    }`}
  >
    <span
      className={`font-instrument text-5xl italic leading-none ${
        card.highlighted ? 'text-secondary dark:text-secondary' : 'text-secondary dark:text-backgroundBody'
      }`}
    >
      {card.number}
    </span>
    <h5 className={`mb-1 mt-5 ${card.highlighted ? 'text-secondary dark:text-secondary' : ''}`}>{card.title}</h5>
    <p
      className={`text-sm font-medium md:text-base ${
        card.highlighted ? 'text-secondary/80 dark:text-secondary/80' : 'text-[#808080]'
      }`}
    >
      {card.tagline}
    </p>
    <p
      className={`mt-3 text-base leading-[1.6] ${
        card.highlighted ? 'text-secondary/70 dark:text-secondary/70' : 'text-[#808080]'
      }`}
    >
      {card.description}
    </p>
  </RevealWrapper>
)

/** Layout: Home-14 WhyChooseUsV3 — 3+2 numbered cards, card 02 inverted, ghost CTA. */
const GuestJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>THE GUEST JOURNEY</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">Make Every Stage Count.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              The experience begins before a guest arrives and continues after they leave. We help strengthen the
              entire journey.
            </p>
          </TextAppearAnimation>
        </div>

        <article className="space-y-[30px]">
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {topRow.map((card) => <JourneyCard key={card.number} card={card} />)}
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row md:justify-center">
            {bottomRow.map((card) => (
              <div key={card.number} className="md:max-w-[calc(50%-15px)] md:flex-1 lg:max-w-[calc(33.333%-20px)]">
                <JourneyCard card={card} />
              </div>
            ))}
          </RevealWrapper>
        </article>

        <RevealWrapper className="mt-8 flex justify-center md:mt-16">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="white">
              Elevate the Guest Journey
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default GuestJourney
