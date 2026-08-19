import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Local section — compact bordered CTA; WowGrowthCta split layout omitted. */
const PortfolioCta = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="mx-auto max-w-3xl rounded-radius-md border border-[#e5e5e5] px-6 py-12 text-center dark:border-[#333] md:px-10 md:py-16">
          <SectionLabel className="mb-4 md:mb-5">START A PROJECT</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Let&apos;s build what&apos;s next.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#808080] md:mt-5 md:text-lg">
            Tell us what you&apos;re working on, and we&apos;ll bring together the right expertise to make it happen.
          </p>
          <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
            <ButtonComponentList className="flex flex-wrap justify-center gap-3">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
              <ButtonComponent href="/meet" variant="secondary">
                Talk to an Expert
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PortfolioCta
