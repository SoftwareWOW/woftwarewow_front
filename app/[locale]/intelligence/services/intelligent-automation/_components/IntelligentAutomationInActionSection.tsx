import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Pillar = {
  number: string
  title: string
  description: string
}

type IntelligentAutomationInActionSectionProps = {
  eyebrow: string
  title: string
  accentTitle: string
  description: string
  items: ReadonlyArray<Pillar>
}

/** Layout copy: Home-19 OurExpertiseV2 — primary fill on hover only. */
export default function IntelligentAutomationInActionSection({
  eyebrow,
  title,
  accentTitle,
  description,
  items,
}: IntelligentAutomationInActionSectionProps) {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                {title}
                <InstrumentText>{accentTitle}</InstrumentText>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                {description}
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <article>
          <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {items.map((item) => (
              <article
                key={item.number}
                className="group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark"
              >
                <span className="font-instrument text-5xl italic leading-none transition-colors duration-300 group-hover:text-white">
                  {item.number}
                </span>
                <h5 className="mb-2.5 mt-8 transition-colors duration-300 group-hover:text-white">{item.title}</h5>
                <p className="text-[#808080] transition-colors duration-300 group-hover:text-white/85">{item.description}</p>
              </article>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}
