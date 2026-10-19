import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { WEBSITES_PROBLEM } from './websites-content'

const DotBullet = () => (
  <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-secondary dark:bg-backgroundBody" aria-hidden />
)

/** Layout copied from MarketingHoldbackSection — websites-specific content and bullets. */
export default function WebsitesProblemSection() {
  const content = WEBSITES_PROBLEM

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

        <RevealWrapper className="flex flex-col items-stretch gap-x-12 gap-y-10 lg:flex-row lg:gap-x-16">
          <div className="flex flex-col justify-center lg:w-[42%] xl:w-[40%]">
            <p className="mb-6 text-lg leading-[1.6] tracking-[0.36px] text-[#808080] lg:mb-8">{content.intro}</p>
            <p className="mb-4 text-base font-medium text-secondary dark:text-backgroundBody">{content.listHeader}</p>
            <ul className="mb-8 [&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
              {content.painPoints.map((item) => (
                <li
                  key={item.lead}
                  className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                >
                  <DotBullet />
                  <span>
                    <strong className="font-semibold text-secondary dark:text-backgroundBody">{item.lead}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
            <blockquote className="mb-8 border-l-2 border-secondary/30 pl-5 text-base leading-relaxed text-[#808080] dark:border-backgroundBody/30">
              {content.quote}
            </blockquote>
            <ButtonComponentList>
              <ButtonComponent href={content.ctaHref} variant="primary">
                {content.ctaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </div>
          <figure className="relative min-h-[300px] w-full overflow-hidden rounded-radius-md lg:min-h-[420px] lg:flex-1 xl:min-h-[480px]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="rounded-radius-md object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
