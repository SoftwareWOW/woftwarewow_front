import RevealWrapper from '@/components/animation/RevealWrapper'
import ImagePlaceholder from './ImagePlaceholder'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyChallengeProps = {
  paragraphs: string[]
}

const CaseStudyChallenge = ({ paragraphs }: CaseStudyChallengeProps) => (
  <section className={caseStudySectionClass}>
    <div className={caseStudySectionInnerClass}>
      <RevealWrapper>
        <h2 className="text-[28px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[32px] lg:text-[36px]">
          The Challenge
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted lg:mt-8 lg:text-[20px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-4 text-lg text-secondary dark:text-backgroundBody sm:text-[24px]">Before</p>
            <ImagePlaceholder aspectClassName="aspect-[4/3] min-h-[220px]" label="Before placeholder" />
          </div>
          <div>
            <p className="mb-4 text-lg text-secondary dark:text-backgroundBody sm:text-[24px]">After</p>
            <ImagePlaceholder aspectClassName="aspect-[4/3] min-h-[220px]" label="After placeholder" />
          </div>
        </div>
      </RevealWrapper>
    </div>
  </section>
)

export default CaseStudyChallenge
