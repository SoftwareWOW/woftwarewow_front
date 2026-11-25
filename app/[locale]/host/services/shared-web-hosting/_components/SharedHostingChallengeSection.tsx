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

/** Copy of MarketingUseCaseAdvantageSection — numbered pillars + first column highlighted. */
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
        <RevealWrapper className="reveal-me mb-8 flex justify-center md:mb-10">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <TextAppearAnimation>
              <h2 className="text-appear">{title}</h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md shrink-0">
            <TextAppearAnimation>
              <p className="text-appear text-base leading-relaxed text-[#808080] md:text-lg lg:text-right">
                {description}
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <RevealWrapper className="grid auto-rows-fr grid-cols-12 items-stretch justify-center gap-[1px]">
          {pillars.map((pillar, index) => {
            const highlighted = index === 0
            return (
              <div
                key={pillar.title}
                className={`group col-span-full flex h-full min-h-0 flex-col justify-start px-7 py-10 backdrop-blur transition-all duration-300 ease-in-out max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 md:px-10 md:py-10 lg:col-span-3 ${
                  highlighted
                    ? 'bg-primary text-white'
                    : 'bg-backgroundBody hover:bg-primary dark:bg-dark dark:hover:bg-primary'
                }`}
              >
                <InstrumentText
                  className={`mb-4 text-4xl leading-none md:text-5xl ${
                    highlighted
                      ? 'text-white'
                      : 'text-secondary group-hover:text-white dark:text-backgroundBody dark:group-hover:text-white'
                  }`}
                >
                  {pillar.number}
                </InstrumentText>
                <h4
                  className={`pb-3 text-xl font-light leading-[1.25] tracking-[-0.02em] transition-colors duration-300 sm:text-[22px] md:mb-4 md:text-2xl lg:text-[26px] xl:text-[28px] xl:leading-[1.2] ${
                    highlighted
                      ? 'text-white'
                      : 'group-hover:text-white dark:group-hover:text-white'
                  }`}
                >
                  {pillar.title}
                </h4>
                <p
                  className={`text-[17px] italic leading-[25.5px] transition-colors duration-300 ${
                    highlighted
                      ? 'text-white/85'
                      : 'text-[#000000b3] group-hover:text-white/85 dark:text-dark-100 dark:group-hover:text-white/85'
                  }`}
                >
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}
