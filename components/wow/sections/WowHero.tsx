'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import type { Dictionary } from '@/i18n/types'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

type WowHeroProps = {
  hero: Dictionary['hero']
}

const highlightClass =
  'font-seasons text-[clamp(2.25rem,5.5vw,3.78rem)] italic leading-[1.1] !bg-none bg-clip-border text-foreground dark:text-backgroundBody'

export default function WowHero({ hero }: WowHeroProps) {
  return (
    <section className="relative mt-16 overflow-hidden bg-background px-3 pt-20 transition-colors duration-300 dark:bg-background md:px-4 md:pt-30">


      <div className="relative z-10 mx-auto flex max-w-[1222px] flex-col items-center gap-16 lg:gap-[107px]">
        <div className="relative flex w-full flex-col items-center gap-5">
          <RevealWrapper delay={0.1} className="relative z-10">
            <p className="rounded-full border border-border/30 bg-background/50 px-5 py-2.5 text-center text-xs font-[300px] uppercase tracking-[0.96px] text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/40 dark:hover:bg-primary/10 sm:px-6 sm:py-3">
              {hero.badge}
            </p>
          </RevealWrapper>

          <div className="relative z-10 flex w-full flex-col items-center gap-8 md:gap-10">
            <TextAppearAnimation>
              <h1 className="max-w-[1221px] text-center font-outfit text-[clamp(2rem,5vw,3.375rem)] font-light leading-[1.33] text-foreground dark:text-backgroundBody">
                {hero.headline.part1}{' '}
                <span className={highlightClass}>{hero.headline.highlight1}</span>{' '}
                {hero.headline.part2}{' '}
                <span className={highlightClass}>{hero.headline.highlight2}</span>
              </h1>
            </TextAppearAnimation>

            <RevealWrapper delay={0.2} className="max-w-[759px] text-center">
              <p className="font-outfit text-lg font-light leading-[1.1] text-muted-foreground dark:text-dark-100 sm:text-xl md:text-[22px]">
                {hero.servicesLine}
                <br />
                {hero.description}
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
          <RevealWrapper delay={0.3} as="div">
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="primary">
                {hero.ctaPrimary}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
          <RevealWrapper delay={0.3} as="div">
            <ButtonComponentList>
              <ButtonComponent href="/services" variant="secondary">
                {hero.ctaSecondary}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
