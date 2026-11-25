import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type AdvantageItem = {
  number: string
  title: string
  description: string
}

type VpsHostingAdvantageSectionProps = {
  eyebrow: string
  title: string
  accentTitle: string
  description: string
  items: ReadonlyArray<AdvantageItem>
}

/** Copy of StartupJourney / BrandingProcess — split heading + 2×2 numbered grid (no CTA). */
export default function VpsHostingAdvantageSection({
  eyebrow,
  title,
  accentTitle,
  description,
  items,
}: VpsHostingAdvantageSectionProps) {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-6">
        <div className="w-full lg:max-w-xl xl:max-w-2xl">
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[clamp(1.75rem,4vw,4.5rem)] font-light leading-[1.2]">
              {title}
              <InstrumentText>{accentTitle}</InstrumentText>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear mt-3 text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.6] tracking-[0.36px] text-[#808080]">
              {description}
            </p>
          </TextAppearAnimation02>
        </div>

        <div className="grid w-full grid-cols-1 gap-y-[26px] sm:grid-cols-2 lg:w-auto lg:min-w-[52%]">
          {items.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className={`px-5 py-8 sm:px-[30px] sm:py-[50px] ${index % 2 === 0 ? 'sm:border-r dark:sm:border-dark' : ''}`}
            >
              <h2 className="font-instrument text-[clamp(2.5rem,6vw,6rem)] font-light italic leading-tight tracking-[-2px]">
                {item.number}
              </h2>
              <h5 className="mb-3 mt-3 text-[clamp(1.05rem,1.8vw,1.5rem)] sm:mb-6 sm:mt-4">{item.title}</h5>
              <p className="text-[clamp(0.875rem,1.35vw,1rem)] text-[#808080]">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
