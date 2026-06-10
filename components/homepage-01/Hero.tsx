import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[137px] md:pb-[100px] md:pt-[160px] xl:pt-[180px]">
      <HeroGradientAnimation />
      <div className="container">
        <RevealWrapper className="text-center">
          <div className="rv-badge mb-5 md:mb-10">
            <span className="rv-badge-text">Open for new work</span>
          </div>
          <h1 className="mb-7 xl:mb-8">
            Where Ambitions Become
            <br />
            <i className="font-instrument italic">Achievements</i>
          </h1>
          <p className="mx-auto mb-10 max-w-xl md:mb-14 lg:max-w-[750px] xl:mb-[76px]">
            WOW Superagency helps small businesses grow faster, smarter, and more confidently. We deliver web,
            marketing, AI, applications, and creative services that are clear to understand, fast to launch, and built
            for real-world outcomes.
          </p>

          <ul className="flex list-none flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <li className="mx-auto block w-[90%] md:ml-auto md:mr-0 md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Book Now</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Book Now</span>
                </div>
              </Link>
            </li>

            <li className="mx-auto block w-[90%] md:ml-0 md:mr-auto md:inline-block md:w-auto">
              <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>Our Services</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Our Services</span>
                </div>
              </Link>
            </li>
          </ul>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Hero
