import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: case-study/_components/CaseStudyHero.tsx — compact recent-work hero with reduced spacing. */
const RecentWorkHero = () => {
  return (
    <section className="relative overflow-hidden px-3 pt-24 sm:pt-28 md:px-4 lg:pt-32 xl:pt-36">
      <RevealWrapper className="container">
        <div className="mb-4 flex items-center justify-center md:mb-5">
          <SectionLabel>RECENT WORK</SectionLabel>
        </div>
        <h1 className="mx-auto max-w-4xl text-center">
          See what we&apos;ve been
          <br className="hidden md:block" />
          working on.
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[#808080] md:mt-5">
          Explore our latest work across technology, marketing, design, and growth.
        </p>
      </RevealWrapper>
    </section>
  )
}

export default RecentWorkHero
