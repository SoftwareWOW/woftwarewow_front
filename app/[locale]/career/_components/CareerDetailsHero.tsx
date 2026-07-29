import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CareerPostData } from '@/lib/career/types'
import CareerShareButton from './CareerShareButton'
import { careerHeroClass, careerSectionInnerClass } from './careerSectionSpacing'

type CareerDetailsHeroProps = {
  career: CareerPostData
}

const CareerDetailsHero = ({ career }: CareerDetailsHeroProps) => (
  <section className={careerHeroClass}>
    <RevealWrapper className={careerSectionInnerClass}>
      <div className="rounded-radius-md border border-black/10 bg-backgroundBody px-6 py-8 transition-colors duration-300 dark:border-white/10 dark:bg-dark sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px]">
              {career.title}
            </h1>
            <p className="mt-4 max-w-[760px] text-base leading-relaxed text-muted sm:mt-5 sm:text-lg lg:text-[18px] xl:text-[20px]">
              {career.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {career.tags.map((tag) => (
                <SectionLabel key={tag} className="h-6 px-3 py-0 text-[12px] leading-6">
                  {tag}
                </SectionLabel>
              ))}
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 lg:w-auto lg:min-w-[180px] xl:min-w-[220px] lg:pt-2">
            <ButtonComponentList className="w-full lg:w-auto" itemClassName="w-full lg:w-auto">
              <ButtonComponent href="#apply" variant="primary" className="w-full lg:min-w-[180px] xl:min-w-[220px] [&_span]:!text-white">
                Apply Now
              </ButtonComponent>
            </ButtonComponentList>
            <CareerShareButton
              title={career.title}
              description={career.description}
              className="w-full lg:min-w-[180px] xl:min-w-[220px]"
            />
          </div>
        </div>
      </div>
    </RevealWrapper>
  </section>
)

export default CareerDetailsHero
