import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const WoWProces = () => {
  return (
    <section className="px-3 md:px-4">
      <div className="mx-auto max-w-[1320px]">
        <div>
          <RevealWrapper className="mb-2 text-center text-sm font-normal uppercase leading-6 tracking-[3px] lg:mb-3">
            How we build
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 text-center lg:mb-20">
              From idea to launch, <i className="font-instrument">seamlessly</i>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Discovery & Strategy</h5>
            <p className="text-center">We map your goals, users, and technical requirements before a line of code is written.</p>
          </RevealWrapper>

          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Design & Architecture</h5>
            <p className="text-center">UX, system design, and scalable foundations tailored to your product vision.</p>
          </RevealWrapper>

          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Build, Launch & Scale</h5>
            <p className="text-center">Agile development, rigorous testing, deployment, and continuous improvement.</p>
          </RevealWrapper>
        </div>
        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList itemClassName="block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="primary" fullWidth>
              Let&apos;s Start Your Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>      </div>
    </section>
  )
}

export default WoWProces
