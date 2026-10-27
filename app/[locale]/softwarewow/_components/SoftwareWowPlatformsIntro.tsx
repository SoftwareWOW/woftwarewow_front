import RevealWrapper from '@/components/animation/RevealWrapper'
import { SOFTWAREWOW_PLATFORMS, SOFTWAREWOW_SECTION_SHELL } from './softwarewow-content'
import SoftwareWowPlatformIcons from './SoftwareWowPlatformIcons'

export default function SoftwareWowPlatformsIntro() {
  const copy = SOFTWAREWOW_PLATFORMS

  return (
    <section className={`${SOFTWAREWOW_SECTION_SHELL} relative`}>
      <div className="container relative z-10">
        <RevealWrapper>
          <p className="mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(16px,2vw,22px)] font-light leading-[1.6] tracking-[0.02em] text-[#333333] dark:text-[#666666]">
            {copy.intro}
          </p>
        </RevealWrapper>
        <SoftwareWowPlatformIcons />
      </div>
    </section>
  )
}
