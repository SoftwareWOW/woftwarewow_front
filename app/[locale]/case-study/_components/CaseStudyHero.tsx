import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const CaseStudyHero = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <RevealWrapper className="container">
        <div className="mb-5 flex items-center justify-center gap-2 md:mb-6 md:gap-5 md:mt-3 xl:mt-0">
          <SectionLabel>Case Studies</SectionLabel>
        </div>
        <h1 className="text-center xl:text-nowrap">
           Real Projects.
          <br className="hidden xl:block" />
         Real <span className="font-instrument  italic !bg-none !bg-clip-border !text-inherit">Partnerships.</span>
        </h1>

        <p className="mt-3 text-center md:mt-7">
          Explore how we've helped businesses solve challenges through technology, websites, <br /> branding, marketing, AI, and digital innovation.
        </p>
      </RevealWrapper>
    </section>
  )
}

export default CaseStudyHero
