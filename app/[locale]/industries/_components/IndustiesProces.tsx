import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const data = [
  {
    id: 1,
    step: 'Step 01',
    title: 'Understand',
    description: 'Research your market and audience.',
  },
  {
    id: 2,
    step: 'Step 02',
    title: 'Design',
    description: 'Create experiences that fit your customers.',
  },
  {
    id: 3,
    step: 'Step 03',
    title: 'Build',
    description: 'Develop scalable digital products.',
  },
  {
    id: 4,
    step: 'Step 04',
    title: 'Grow',
    description: 'Market, optimize, and improve results.',
  },
]

const IndustriesProcess = () => {
  return (
    <section className="relative bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 text-center md:mb-16 lg:mb-20">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Process</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-[#0D0D0D] dark:text-[#F2F2F2]">
              A proven framework
              <span className="font-instrument italic"> for startup success</span>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              A strategic roadmap to marketing success
            </p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[30px]">
          {data.map((item) => (
            <RevealWrapper key={item.id} className="reveal-me w-full pt-5">
              <div className="relative mx-auto grid min-h-[260px] grid-cols-1 content-between rounded-radius-sm border border-[#e5e5e5] px-5 pb-10 pt-12 text-center transition-colors duration-300 dark:border-white/10 sm:min-h-[280px] md:min-h-[300px] md:pb-[42px]">
                <div className="absolute -top-4 left-1/2  -translate-x-1/2">
                  <SectionLabel>{item.step}</SectionLabel>
                </div>
                <h6 className="text-xl font-normal leading-[1.1] text-[#0D0D0D] dark:text-[#F2F2F2] sm:text-2xl">
                  {item.title}
                </h6>
                <p className="text-sm font-normal leading-[1.3] text-[#808080] md:text-base">{item.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Start Your Journey
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default IndustriesProcess
