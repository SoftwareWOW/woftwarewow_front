import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { MARKETING_HOLDBACK } from './marketing-content'

const XIcon = () => (
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-radius-sm border border-secondary/30 sm:size-6 dark:border-backgroundBody/30">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M2 2L8 8M8 2L2 8"
        className="stroke-secondary dark:stroke-backgroundBody"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  </span>
)

export default function MarketingHoldbackSection() {
  const content = MARKETING_HOLDBACK

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <RevealWrapper className="reveal-me mb-2">
          <SectionLabel>{content.eyebrow}</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h3 className="text-appear mb-8 text-3xl leading-tight sm:text-[34px] md:text-[44px] lg:mb-[52px] lg:text-[54px] xl:text-[64px] xl:leading-[1.1]">
            {content.titleBefore}
            <br />
            <InstrumentText>{content.titleAccent}</InstrumentText>
          </h3>
        </TextAppearAnimation>
        <RevealWrapper className="reveal-me mb-10 max-w-3xl lg:mb-16">
          <p className="text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">{content.description}</p>
        </RevealWrapper>

        <RevealWrapper className="flex flex-col gap-x-16 gap-y-16 lg:flex-row">
          <div className="lg:w-1/2">
            <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
              {content.painPoints.map((item) => (
                <li
                  key={item}
                  className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                >
                  <XIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="relative min-h-[280px] overflow-hidden rounded-radius-md lg:w-1/2">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="rounded-radius-md object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
