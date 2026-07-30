import RevealWrapper from '@/components/animation/RevealWrapper'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyApproachProps = {
  intro?: string
  callout: string
  paragraphs: string[]
}

const CaseStudyApproach = ({ intro, callout, paragraphs }: CaseStudyApproachProps) => (
  <section className={caseStudySectionClass}>
    <div className={caseStudySectionInnerClass}>
      <RevealWrapper>
        <h2 className="text-[28px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[32px] lg:text-[36px]">
          Our Approach
        </h2>

        {intro ? (
          <p className="mt-6 text-base leading-relaxed text-muted lg:mt-8 lg:text-[20px]">{intro}</p>
        ) : null}

        <blockquote className="mt-6 border-l-2 border-primary pl-5 text-base leading-relaxed text-primary lg:mt-8 lg:text-[20px]">
          {callout}
        </blockquote>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted lg:mt-8 lg:text-[20px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </RevealWrapper>
    </div>
  </section>
)

export default CaseStudyApproach
