import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type AdvantageItem = {
  title: string
  description: string
}

type AccessibleWebAdvantageSectionProps = {
  eyebrow: string
  title: string
  description: string
  items: ReadonlyArray<AdvantageItem>
}

/** Layout copy: AiAssistantsInActionSection (Home-19 OurExpertiseV2) — split header, 4× hover primary cards. */
export default function AccessibleWebAdvantageSection({
  eyebrow,
  title,
  description,
  items,
}: AccessibleWebAdvantageSectionProps) {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">{title}</h2>
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

        <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark"
            >
              <h5 className="mb-2.5 transition-colors duration-300 group-hover:text-white">{item.title}</h5>
              <p className="text-[#808080] transition-colors duration-300 group-hover:text-white/85">{item.description}</p>
            </article>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}