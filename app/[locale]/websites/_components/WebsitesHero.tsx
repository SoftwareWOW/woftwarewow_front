import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import Image from 'next/image'
import { WEBSITES_HERO } from './websites-content'

export default function WebsitesHero() {
  const hero = WEBSITES_HERO

  return (
    <section className="relative overflow-hidden bg-background px-3 pt-12 transition-colors duration-300 dark:bg-background sm:pt-12 md:px-4 lg:pt-[70px] xl:pt-[80px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[45%] h-[min(80vw,640px)] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl dark:opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(99, 91, 255, 0.45) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="mb-10 text-center md:mb-14 lg:mb-16">
          <TextAppearAnimation>
            <h1 className="text-appear mx-auto max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.12] tracking-[-0.03em]">
              {hero.titleBefore}
              <br />
              <InstrumentText>{hero.titleAccent}</InstrumentText>
            </h1>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">
              {hero.description}
            </p>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
            <ButtonComponentList>
              <ButtonComponent href={hero.primaryCtaHref} variant="primary">
                {hero.primaryCta}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me relative mx-auto max-w-5xl">
          <figure className="relative overflow-hidden rounded-radius-md">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1280}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
