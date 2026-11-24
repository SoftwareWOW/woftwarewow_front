import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Pillar = {
  title: string
  description: string
}

type CustomerServiceUseCaseExperienceSectionProps = {
  eyebrow: string
  title: string
  description: string
  pillars: ReadonlyArray<Pillar>
}

/** Layout copy: Home-02 ProcessV2 (wowmarketing RetailGrowthPillars) — four hover columns. */
export default function CustomerServiceUseCaseExperienceSection({
  eyebrow,
  title,
  description,
  pillars,
}: CustomerServiceUseCaseExperienceSectionProps) {
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
              <h2 className="text-appear text-[38px] font-light leading-[1.3] md:text-[47px] md:leading-[1.2] lg:text-[54px] lg:leading-[1.24] xl:text-[64px]">
                {title}
              </h2>
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
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group col-span-full flex h-full min-h-0 flex-col justify-start bg-backgroundBody px-7 py-10 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 md:px-10 md:py-10 lg:col-span-3"
            >
              <h4 className="pb-3 text-xl font-light leading-[1.25] tracking-[-0.02em] transition-colors duration-300 sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-[28px] xl:leading-[1.2] group-hover:text-white dark:group-hover:text-white md:mb-4">
                {pillar.title}
              </h4>
              <p className="text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 group-hover:text-white/85 dark:text-dark-100 dark:group-hover:text-white/85">
                {pillar.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}