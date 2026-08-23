import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const BrandKitHero = () => (
  <section className="relative overflow-hidden pt-32 md:pt-40 lg:pt-[185px]" aria-labelledby="brandkit-hero-heading">
    <HeroGradientAnimation />

    <div className="container">
      <RevealWrapper className="flex flex-col items-center text-center">
        <SectionLabel className="mb-4">Brand Kit</SectionLabel>
        <h1 id="brandkit-hero-heading" className="mb-4 mt-3.5">
          The WOW Brand, Ready to Use.
        </h1>
        <p className="mx-auto max-w-[470px] text-[#808080] md:max-w-[750px]">
          Access official logos, colors, typography, and brand resources for approved WOW Superagency communications.
        </p>

        <div className="mt-8 md:mt-12">
          <ButtonComponentList className="flex justify-center" itemClassName="block">
            <ButtonComponent href="#logos" variant="primary">
              Download Brand Assets
            </ButtonComponent>
          </ButtonComponentList>
        </div>
      </RevealWrapper>
    </div>
  </section>
)

export default BrandKitHero
