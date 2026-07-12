import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { meetSectionClass, meetSectionInnerClass } from './meetSectionSpacing'

const MeetCta = () => (
  <section
    className={`${meetSectionClass} bg-background transition-colors duration-300 dark:bg-background`}
  >
    <div className={meetSectionInnerClass}>
      <div className="rounded-radius-md border border-[#e5e5e5] bg-white/50 px-6 py-12 backdrop-blur-sm transition-all duration-300 dark:border-white/5 dark:bg-dark/50 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <RevealWrapper className="mx-auto max-w-[900px] text-center">
          <SectionLabel className="mb-5">Get Started</SectionLabel>
          <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
            Ready to Start Your <span className="font-instrument italic">Project?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
            Schedule a meeting with our team and let&apos;s discuss how we can turn your ideas into
            reality.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <ButtonComponentList>
              <ButtonComponent href="/meet#schedule" variant="primary" ariaLabel="Schedule a Meeting">
                Schedule a Meeting
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="secondary" ariaLabel="Contact us">
                Contact Us
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </div>
  </section>
)

export default MeetCta
