import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { DESIGN_CHALLENGE } from './design-content'

export default function DesignChallengeSection() {
  const content = DESIGN_CHALLENGE

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              {content.titleBefore}
              <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <RevealWrapper>
            <p className="mb-4 text-2xl font-light text-secondary dark:text-backgroundBody md:text-3xl">
              {content.before.label}
            </p>
            <p className="mb-6 text-sm text-[#808080] md:text-base">{content.before.caption}</p>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-sm">
              <Image
                src={content.before.image}
                alt={content.before.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <p className="mb-4 text-2xl font-light text-inherit md:text-3xl">
              {content.after.label}
            </p>
            <p className="mb-6 text-sm text-[#808080] md:text-base">{content.after.caption}</p>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-sm">
              <Image
                src={content.after.image}
                alt={content.after.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
          <ButtonComponentList>
            <ButtonComponent href={content.ctaHref} variant="white">
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
