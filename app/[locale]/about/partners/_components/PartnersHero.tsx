import RevealWrapper from '@/components/animation/RevealWrapper'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-20 HeroV20 — centered modern hero with inline image slider. */
const PartnersHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-[160px] lg:pt-[180px]"
      aria-labelledby="partners-hero-heading"
    >
      <HeroGradientAnimationV2 />

      <RevealWrapper className="container text-center">
        <SectionLabel className="mb-3">Partners</SectionLabel>

        <h1 id="partners-hero-heading" className="xl:leading-[1.1]">
          Better{' '}
          <InstrumentText>Together</InstrumentText>
          <CtaImageSlider
            slides={[
              { id: '1', img: '/images/wow/Hero/client/Avatar.png' },
              { id: '2', img: '/images/wow/Hero/client/Avatar (1).png' },
              { id: '3', img: '/images/wow/Hero/client/Avatar (2).png' },
            ]}
          />
          with trusted collaborators.
        </h1>

        <p className="mx-auto mt-3 max-w-[670px] text-center text-base leading-relaxed text-[#808080] md:text-lg">
          We partner with trusted technology, platform, and industry leaders to deliver better solutions for growing
          businesses.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
          <ButtonComponentList className="flex justify-center" itemClassName="block">
            <ButtonComponent href="/contact" variant="primary">
              Become a Partner
            </ButtonComponent>
          </ButtonComponentList>
          <ButtonComponentList className="flex justify-center" itemClassName="block">
            <ButtonComponent href="/meet" variant="secondary">
              Talk to Our Team
            </ButtonComponent>
          </ButtonComponentList>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default PartnersHero
