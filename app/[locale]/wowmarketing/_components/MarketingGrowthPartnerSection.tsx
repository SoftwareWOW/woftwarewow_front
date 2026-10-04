import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { MARKETING_GROWTH_PARTNER } from './marketing-content'

const CheckIcon = () => (
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary sm:size-6 dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

export default function MarketingGrowthPartnerSection() {
  const content = MARKETING_GROWTH_PARTNER

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        {content.eyebrow ? (
          <RevealWrapper className="reveal-me mb-2">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
        ) : null}
        <TextAppearAnimation>
          <h3 className="text-appear mb-8 text-3xl leading-tight sm:text-[34px] md:text-[44px] lg:mb-[52px] lg:text-[54px] xl:text-[64px] xl:leading-[1.1]">
            {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
          </h3>
        </TextAppearAnimation>
        <RevealWrapper className="reveal-me mb-10 max-w-3xl lg:mb-16">
          <p className="text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">{content.description}</p>
        </RevealWrapper>

        <RevealWrapper className="flex flex-col gap-x-16 gap-y-16 lg:flex-row">
          <figure className="relative min-h-[280px] overflow-hidden rounded-radius-md lg:w-1/2">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="rounded-radius-md object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
          <div className="lg:w-1/2">
            <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
              {content.benefits.map((item) => (
                <li
                  key={item}
                  className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
