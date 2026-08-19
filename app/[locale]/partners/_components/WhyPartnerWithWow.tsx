import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { partnerBenefits } from '../_data/partners'

/** Layout: Home-12 WhyChooseUs — 5 stacked benefit rows + image. */
const WhyPartnerWithWow = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <RevealWrapper className="reveal-me mb-4 flex justify-center md:mb-5">
            <SectionLabel>WHY WOW</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">Built for mutual growth.</h2>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {partnerBenefits.map((benefit) => (
              <RevealWrapper key={benefit.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img
              src="/images/wow/Hero/devision/Accelerate.jpg"
              alt="WOW partner ecosystem"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Become a Partner
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhyPartnerWithWow
