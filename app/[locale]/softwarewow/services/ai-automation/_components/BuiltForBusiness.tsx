import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Save time',
    description: 'Reduce manual work across repetitive processes.',
  },
  {
    title: 'Improve service',
    description: 'Help customers get faster answers and support.',
  },
  {
    title: 'Connect systems',
    description: 'Create smoother workflows between your existing tools.',
  },
  {
    title: 'Support decisions',
    description: 'Surface useful insights from business data.',
  },
  {
    title: 'Scale operations',
    description: 'Build systems that can support growing workloads.',
  },
]

/** Layout: homepage-16/WhyChooseUsV5 — split headline + 5-point list. */
const BuiltForBusiness = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 md:px-[30px]">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse md:gap-5 lg:gap-10 xl:gap-x-20">
          <div className="md:w-[45%]">
            <div className="[&>*:not(:first-child)]:mt-3.5">
              {points.map((point) => (
                <RevealWrapper key={point.title} className="py-2.5">
                  <h6>{point.title}</h6>
                  <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
                </RevealWrapper>
              ))}
            </div>
            <RevealWrapper className="mt-7 max-md:w-full md:mt-14">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
          <RevealWrapper className="md:w-[55%]">
            <div className="mb-3.5">
              <SectionLabel>Built for Business</SectionLabel>
            </div>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Automation where it actually <InstrumentText>matters.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BuiltForBusiness
