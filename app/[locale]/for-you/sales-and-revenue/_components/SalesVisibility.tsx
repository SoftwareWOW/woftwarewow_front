import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-15 BrandingProcess — split heading + 2×2 numbered grid. */
const SalesVisibility = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="">
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>Sales Visibility</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              A clearer view of what&apos;s working in
              <i className="font-instrument"> your sales engine.</i>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear text-lg leading-[1.6] tracking-[0.36px]">
              We help teams see pipeline health, activity and outcomes — so sales decisions are based on reality, not
              guesswork.
            </p>
          </TextAppearAnimation02>

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href="/contact" variant="white">
                Start Now
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 gap-y-[26px]">
          <RevealWrapper className="border-r px-[30px] py-[50px] dark:border-dark">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              1
            </h2>
            <h5 className="mb-6 mt-4">Pipeline Clarity</h5>
            <p className="text-base">See where every opportunity stands and what needs attention next.</p>
          </RevealWrapper>
          <RevealWrapper className="px-[30px] py-[50px]">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              2
            </h2>
            <h5 className="mb-6 mt-4">Activity Tracking</h5>
            <p className="text-base">Understand what your team is doing and where momentum is building.</p>
          </RevealWrapper>
          <RevealWrapper className="border-r px-[30px] py-[50px] dark:border-dark">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              3
            </h2>
            <h5 className="mb-6 mt-4">Forecasting</h5>
            <p className="text-base">Build realistic revenue projections based on real pipeline data.</p>
          </RevealWrapper>
          <RevealWrapper className="px-[30px] py-[50px]">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              4
            </h2>
            <h5 className="mb-6 mt-4">Reporting &amp; Insights</h5>
            <p className="text-base">Turn sales activity into clear reports that guide better decisions.</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default SalesVisibility
