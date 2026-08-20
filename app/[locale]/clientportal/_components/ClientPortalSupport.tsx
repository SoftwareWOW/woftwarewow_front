import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: education HowItWorks header — centered label, title, body, CTA. */
const ClientPortalSupport = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>BEYOND OUR LOCATIONS</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto max-w-[18ch]">
              Having Trouble Accessing Your <InstrumentText variant="solid">Portal?</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
              Our team can help with account access, project questions, or anything else you need.
            </p>
          </RevealWrapper>
          <RevealWrapper className="mt-8 flex justify-center md:mt-10">
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="white">
                GET SUPPORT
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ClientPortalSupport
