import RevealWrapper from '@/components/animation/RevealWrapper'
import ImpactChannelIcons from './ImpactChannelIcons'
import { IMPACT_CHANNELS } from './impact-content'

export default function ImpactChannelsSection() {
  return (
    <section className="about relative bg-background transition-colors duration-300 dark:bg-background">
      <div className="container relative z-10">
        <RevealWrapper className="mt-0 md:mt-4">
          <p className="mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(16px,2vw,22px)] font-light leading-[1.6] tracking-[0.02em] text-[#333333] dark:text-[#666666]">
            {IMPACT_CHANNELS.bodyParagraph}
          </p>
        </RevealWrapper>
        <ImpactChannelIcons />
      </div>
    </section>
  )
}
