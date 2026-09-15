import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type CareerHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
}

const CareerHeroPage = ({
  badgeTitle = 'Career',
  title = 'Build the Future of Small Business',
  italicTitle = 'Growth',
  description = 'Join a team of creators, strategists, developers, marketers, and innovators building technology and digital solutions that help businesses grow.',
}: CareerHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <HeroGradientAnimation />

      <RevealWrapper className="container">
        <div className="text-center">
          <div className="mb-3.5 flex justify-center">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </div>
          <h1 className="mb-5 font-medium md:mb-8">
            {title} <i className="font-instrument italic !bg-none !bg-clip-border !text-inherit">{italicTitle}</i>
          </h1>
          <p className="mx-auto max-w-md lg:max-w-[754px]">{description}</p>
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
