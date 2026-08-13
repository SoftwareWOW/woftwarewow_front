import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'


const topics = [
  'Marketing & Growth',
  'AI & Automation',
  'Sales',
  'Branding & Creative',
  'Social Media',
  'Websites & eCommerce',
  'Software & Technology',
  'Business Systems',
  'Meaningful impact',
]

/** Layout: EverythingToGrow / ServicesV14 — centered header + 9 bordered topic cards. */
const LearningTopics = () => {
  return (
    <section id="learning-topics">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Explore</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className=" relative">
          <h2 className="mb-3">
            What you&apos;ll love
            <br />
            <InstrumentText>learning here</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            Practical topics built around the challenges growing businesses face — from marketing and AI to systems and
            meaningful impact.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {topics.map((title) => (
          <RevealWrapper
            key={title}
            className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <h5 className="mb-0">{title}</h5>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/wowhub" variant="primary">
            Browse All Learning
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default LearningTopics
