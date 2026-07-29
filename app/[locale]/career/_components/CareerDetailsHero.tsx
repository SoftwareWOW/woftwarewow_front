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
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1">
            <h1 className="text-[40px] font-light leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody sm:text-[52px] lg:text-[64px]">
              {career.title}
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-relaxed text-muted sm:text-lg lg:text-[20px]">
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

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px] lg:pt-2">
            <ButtonComponentList className="w-full sm:w-auto" itemClassName="w-full sm:w-auto">
              <ButtonComponent href="#apply" variant="primary" className="w-full sm:min-w-[220px] [&_span]:!text-white">
                Apply Now
              </ButtonComponent>
            </ButtonComponentList>
            <CareerShareButton
              title={career.title}
              description={career.description}
              className="w-full sm:min-w-[220px]"
            />
          </div>
        </div>
      </div>
    </RevealWrapper>
  </section>
)

export default CareerDetailsHero
