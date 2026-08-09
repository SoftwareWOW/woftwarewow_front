import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const StrategyHero = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <div className="absolute -bottom-4 left-0 h-full w-full bg-gradient-to-b from-dark/20 to-dark" />
      <video className="absolute left-0 top-0 z-[-1] h-full w-full object-cover" autoPlay muted loop>
        <source src="/video/promo.mp4" type="video/mp4" />
        <track src="/subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="/descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>
      {/* Hero Content */}
      <RevealWrapper className="reveal-me container absolute left-1/3 top-1/2 z-40 -translate-x-1/3 -translate-y-1/2">
        <SectionLabel className="mb-5 bg-white/15 text-backgroundBody dark:bg-white/15 dark:text-backgroundBody">
          Strategy Centre
        </SectionLabel>
        <h1 className="mb-3 text-backgroundBody max-md:leading-none max-sm:text-4xl">
          Strategy That Drives <br className="hidden md:block" />
          Growth –<br className="hidden md:block" />
          <i className="font-instrument text-inherit">Clear. Measurable. Built to scale.</i>
        </h1>
        <p className="max-w-3xl text-backgroundBody/70 max-sm:text-sm">
          Discover how WOW plans, executes, and measures digital growth for SMBs — with clarity, measurable outcomes,
          and a coordinated roadmap across every division.
        </p>
        <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row lg:mt-14">
          <ButtonComponent href="#growth-framework" variant="primary" fullWidth>
            Explore Our Approach
          </ButtonComponent>
          <ButtonComponent href="/meet" variant="white" fullWidth>
            Book a Strategy Session
          </ButtonComponent>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default StrategyHero
