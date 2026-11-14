import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type ActionItem = {
  number: string
  title: string
  description: string
}

type MarketingUseCaseInActionSectionProps = {
  eyebrow: string
  title: string
  items: ReadonlyArray<ActionItem>
}

const cardClassName =
  'group flex-1 rounded-radius-md border px-[30px] py-10 transition-colors duration-300 ease-in-out hover:bg-backgroundBody dark:border-dark dark:hover:bg-secondary'

/** Layout copy: Home-14 WhyChooseUsV3 (MissionJourney cards) — three-column row. */
export default function MarketingUseCaseInActionSection({ eyebrow, title, items }: MarketingUseCaseInActionSectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">{title}</h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row">
          {items.map((item) => (
            <div key={item.number} className={cardClassName}>
              <span className="font-instrument text-5xl italic leading-none text-secondary transition-colors duration-300 group-hover:text-secondary dark:text-backgroundBody dark:group-hover:text-backgroundBody">
                {item.number}
              </span>
              <h5 className="mb-2.5 mt-5 transition-colors duration-300 group-hover:text-secondary dark:group-hover:text-backgroundBody">
                {item.title}
              </h5>
              <p className="text-base leading-[1.6] text-[#808080] transition-colors duration-300 group-hover:text-secondary/70 dark:group-hover:text-backgroundBody/70">
                {item.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}