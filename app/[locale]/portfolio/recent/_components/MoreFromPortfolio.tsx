import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'

/** Layout: portfolio/_components/FeaturedWork.tsx — compact bridge section back to the full portfolio. */
const MoreFromPortfolio = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="rounded-radius-sm border border-[#e5e5e5] px-6 py-10 text-center dark:border-[#333] md:px-10 md:py-14">
          <TextAppearAnimation>
            <h2 className="text-appear">There&apos;s more to explore.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              Discover selected projects, case studies, and solutions from across WOW Superagency.
            </p>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/portfolio" variant="primary" size="sm">
                Explore Our Portfolio
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default MoreFromPortfolio
