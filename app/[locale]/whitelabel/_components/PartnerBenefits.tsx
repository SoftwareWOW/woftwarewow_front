import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { partnerBenefits } from '../_data/whitelabel'

/** Layout: technology-and-saas RecommendedSolutions — bordered cards with primary highlight. */
const PartnerBenefits = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-5 flex justify-center">
            <SectionLabel>BUILT FOR PARTNERS</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto">Scale Capability, Not Overhead.</h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
          {partnerBenefits.map((item, index) => (
            <article
              key={item.title}
              className={
                index === 0
                  ? 'flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-primary bg-primary px-[30px] py-10'
                  : 'group flex min-h-[280px] flex-1 flex-col rounded-radius-md border border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark'
              }
            >
              <h5
                className={
                  index === 0
                    ? 'mb-2.5 text-white'
                    : 'mb-2.5 transition-colors duration-300 group-hover:text-white'
                }
              >
                {item.title}
              </h5>
              <p
                className={
                  index === 0
                    ? 'text-white/85'
                    : 'text-[#808080] transition-colors duration-300 group-hover:text-white/85'
                }
              >
                {item.description}
              </p>
            </article>
          ))}
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/partners" variant="primary">
              DISCUSS A PARTNERSHIP
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PartnerBenefits
