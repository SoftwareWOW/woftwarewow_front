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
          Crafting Tomorrow&apos;s
          <span className="ml-5 inline-block font-instrument italic max-sm:mr-3">Solutions,</span>
          <br className="hidden xl:block" />
          Today
        </h1>

        <p className="mt-3 text-center md:mt-7">
          With years of industry expertise, our team of visionaries, storytellers, and design <br />
          virtuosos come together here for you to see.
        </p>
      </RevealWrapper>
    </section>
  )
}

export default CaseStudyHero
