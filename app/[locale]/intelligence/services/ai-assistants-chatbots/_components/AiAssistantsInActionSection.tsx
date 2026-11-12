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

type AiAssistantsInActionSectionProps = {
  eyebrow: string
  title: string
  accentTitle: string
  description: string
  items: ReadonlyArray<Pillar>
}

/** Layout copy: Home-19 OurExpertiseV2 — split header + 3 pillars, first static primary. */
export default function AiAssistantsInActionSection({
  eyebrow,
  title,
  accentTitle,
  description,
  items,
}: AiAssistantsInActionSectionProps) {
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
            {items.map((item, index) => {
              const isPrimary = index === 0
              return (
                <article
                  key={item.number}
                  className={`flex min-h-[280px] flex-1 flex-col rounded-radius-md border px-[30px] py-10 ${
                    isPrimary
                      ? 'border-primary bg-primary text-white dark:border-primary'
                      : 'border-[#e5e5e5] dark:border-dark'
                  }`}
                >
                  <span
                    className={`font-instrument text-5xl italic leading-none ${isPrimary ? 'text-white' : 'text-secondary dark:text-backgroundBody'}`}
                  >
                    {item.number}
                  </span>
                  <h5 className={`mb-2.5 mt-8 ${isPrimary ? 'text-white' : ''}`}>{item.title}</h5>
                  <p className={isPrimary ? 'text-white/85' : 'text-[#808080]'}>{item.description}</p>
                </article>
              )
            })}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}
