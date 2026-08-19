import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: components/wow/LandascapComponets/WowGrowthCta.tsx — single CTA adapted with eyebrow and supporting copy. */
const RecentWorkCta = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="mx-auto max-w-5xl text-center">
          <div className="mb-4 flex justify-center md:mb-5">
            <SectionLabel>START A PROJECT</SectionLabel>
          </div>
          <h2 className="text-[46px] font-normal leading-[1.1] max-lg:leading-[1.2] lg:text-[96px] lg:tracking-[-2.88px]">
            <InstrumentText className="max-md:mr-3 lg:text-[100px]">Your project</InstrumentText>
            <br className="hidden md:block" />
            could be next.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] md:mt-5 md:text-lg">
            Tell us what you&apos;re building, and we&apos;ll bring together the right expertise to make it happen.
          </p>
          <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default RecentWorkCta
