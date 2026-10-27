import RevealWrapper from '@/components/animation/RevealWrapper'
import MarketingPlatformIcons from './MarketingPlatformIcons'

export default function MarketingPlatformsIntro() {
  return (
    <section className="relative bg-background transition-colors duration-300 dark:bg-background">
      <div className="container relative z-10">
        <RevealWrapper>
          <p className="mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(16px,2vw,22px)] font-light leading-[1.6] tracking-[0.02em] text-[#333333] dark:text-[#666666]">
            We leverage{' '}
            <span className="font-normal text-secondary dark:text-backgroundBody">industry-leading</span> marketing
            platforms and analytics tools to build campaigns that deliver measurable growth.
          </p>
        </RevealWrapper>
        <MarketingPlatformIcons />
      </div>
    </section>
  )
}
