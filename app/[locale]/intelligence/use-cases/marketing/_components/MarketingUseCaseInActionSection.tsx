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
  'group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark'

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
              <span className="font-instrument text-5xl italic leading-none transition-colors duration-300 group-hover:text-white">
                {item.number}
              </span>
              <h5 className="mb-2.5 mt-8 transition-colors duration-300 group-hover:text-white">{item.title}</h5>
              <p className="text-[#808080] transition-colors duration-300 group-hover:text-white/85">{item.description}</p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}