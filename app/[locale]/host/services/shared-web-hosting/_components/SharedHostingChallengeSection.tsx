import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Pillar = {
  number: string
  title: string
  description: string
}

type SharedHostingChallengeSectionProps = {
  eyebrow: string
  title: string
  description: string
  pillars: ReadonlyArray<Pillar>
}

/** Copy of MarketingUseCaseAdvantageSection — numbered pillars, equal default bg, hover highlight. */
export default function SharedHostingChallengeSection({
  eyebrow,
  title,
  description,
  pillars,
}: SharedHostingChallengeSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="container">
        <RevealWrapper className="reveal-me mb-6 flex justify-center md:mb-8 lg:mb-10">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-start md:justify-between md:gap-8 lg:mb-24 lg:gap-12">
          <div className="max-w-3xl">
            <TextAppearAnimation>
              <h2 className="text-appear text-[clamp(1.75rem,4vw,4rem)] font-light leading-[1.25]">
                {title}
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md shrink-0">
            <TextAppearAnimation>
              <p className="text-appear text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-[#808080] md:text-right">
                {description}
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <RevealWrapper className="grid auto-rows-fr grid-cols-12 items-stretch justify-center gap-[1px]">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group col-span-full flex h-full min-h-0 flex-col justify-start bg-backgroundBody px-5 py-7 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 sm:px-7 sm:py-9 md:px-8 md:py-10 lg:col-span-3"
            >
              <InstrumentText className="mb-3 text-[clamp(1.75rem,3.5vw,3rem)] leading-none text-secondary transition-colors duration-300 group-hover:text-white dark:text-backgroundBody dark:group-hover:text-white sm:mb-4">
                {pillar.number}
              </InstrumentText>
              <h4 className="mb-2 pb-1 text-[clamp(1.05rem,2vw,1.75rem)] font-light leading-[1.25] tracking-[-0.02em] transition-colors duration-300 group-hover:text-white dark:group-hover:text-white md:mb-3">
                {pillar.title}
              </h4>
              <p className="text-[clamp(0.875rem,1.4vw,1.0625rem)] italic leading-[1.5] text-[#000000b3] transition-colors duration-300 group-hover:text-white/85 dark:text-dark-100 dark:group-hover:text-white/85">
                {pillar.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
