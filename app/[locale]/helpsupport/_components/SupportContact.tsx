import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const cards = [
  {
    number: '01',
    title: 'Get Support',
    description: 'For account, project, billing, or technical questions.',
    cta: 'CONTACT SUPPORT',
    href: '/contact',
    variant: 'white' as const,
  },
  {
    number: '02',
    title: 'Meet With Your Team',
    description: 'For something that would be easier to discuss directly.',
    cta: 'BOOK A MEETING',
    href: '/meet',
    variant: 'primary' as const,
  },
]

/** Layout: technology-and-saas RecommendedSolutions — numbered cards. Two cards, no featured glow. */
const SupportContact = () => {
  return (
    <section>
      <div className="container pb-5 sm:pb-10 md:pb-15 lg:pb-20">
        <div className="mb-16 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center">
            <SectionLabel>CONTACT SUPPORT</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto">
              Still Need a <InstrumentText>Hand?</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
              Send us your question and we&apos;ll connect you with the right WOW team.
            </p>
          </RevealWrapper>
        </div>

        <article>
          <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {cards.map((item) => (
              <div
                key={item.number}
                className="flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 dark:border-dark"
              >
                <span className="font-instrument text-5xl italic leading-none">{item.number}</span>
                <h5 className="mb-2.5 mt-8">{item.title}</h5>
                <p className="text-[#808080]">{item.description}</p>
                <div className="mt-auto flex justify-end pt-8 lg:pt-10">
                  <ButtonComponentList className="flex" itemClassName="block">
                    <ButtonComponent href={item.href} variant={item.variant}>
                      {item.cta}
                    </ButtonComponent>
                  </ButtonComponentList>
                </div>
              </div>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default SupportContact
