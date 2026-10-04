import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { MARKETING_APPROACH } from './marketing-content'

export default function MarketingApproachGrid() {
  const content = MARKETING_APPROACH

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto">{content.title}</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">{content.description}</p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <RevealWrapper key={item.title} className="reveal-me">
              <article className="group flex min-h-[280px] h-full flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark">
                <h5 className="mb-2.5 transition-colors duration-300 group-hover:text-white">{item.title}</h5>
                <p className="text-[#808080] transition-colors duration-300 group-hover:text-white/85">{item.description}</p>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
