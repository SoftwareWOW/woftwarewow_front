'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import type { Dictionary } from '@/i18n/types'
import WowButton from '../WowButton'

type WowHeroProps = {
  hero: Dictionary['hero']
}

const highlightClass =
  'font-seasons text-[clamp(2.25rem,5.5vw,3.78rem)] italic leading-[1.1] !bg-none bg-clip-border text-foreground dark:text-backgroundBody'

export default function WowHero({ hero }: WowHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-16 pt-12 mt-16 sm:px-8 sm:pb-20 sm:pt-16 md:pt-20 lg:pb-24">
      {/* Background Decorations for Dark Mode */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl dark:bg-secondary/10" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl dark:bg-accent/10" />
      </div>

      <div className="relative mx-auto flex max-w-[1222px] flex-col items-center gap-16 lg:gap-[107px]">
        <div className="relative flex w-full flex-col items-center gap-5">
          <RevealWrapper delay={0.1} className="relative z-10">
            <p className="rounded-full border border-border/30 bg-background/50 px-5 py-2.5 text-center text-xs font-medium uppercase tracking-[0.96px] text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/40 dark:hover:bg-primary/10 sm:px-6 sm:py-3">
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

        <RevealWrapper delay={0.3} className="relative z-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
          <WowButton
            href="/contact"
            className="w-full px-8 py-8 text-sm font-light uppercase tracking-[0.15em] shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 dark:shadow-primary/30 dark:hover:shadow-primary/40 sm:w-auto"
          >
            {hero.ctaPrimary}
          </WowButton>
          <WowButton
            href="/services"
            variant="dark"
            className="w-full px-8 py-8 text-sm font-light uppercase tracking-[0.15em] border-2 border-border bg-background/50 text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-primary/40 dark:hover:bg-primary/10 sm:w-auto"
          >
            {hero.ctaSecondary}
          </WowButton>
        </RevealWrapper>
      </div>
    </section>
  )
}
