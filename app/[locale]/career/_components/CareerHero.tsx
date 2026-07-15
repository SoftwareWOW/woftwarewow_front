import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const CareerHeroPage = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <HeroGradientAnimation />

      <RevealWrapper className="container">
        <div className="text-center">
          <div className="mb-3.5 flex justify-center">
            <SectionLabel>Career</SectionLabel>
          </div>
          <h1 className="mb-5 font-medium md:mb-8">
            Start building your <i className="font-instrument italic">future</i> here
          </h1>
          <p className="mx-auto max-w-md lg:max-w-[754px]">
            We provide a wide range of growth opportunities, a collaborative work culture, and a supportive team focused
            on your success.
          </p>
        </div>

        <RevealWrapper className="mt-11 flex justify-center md:mt-[76px]">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="secondary">
              Get Started
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </RevealWrapper>
    </section>
  )
}

export default CareerHeroPage
