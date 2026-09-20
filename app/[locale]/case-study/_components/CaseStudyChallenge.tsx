import RevealWrapper from '@/components/animation/RevealWrapper'
import type { CaseStudyImage } from '@/lib/case-study/types'
import CaseStudySectionImage from './CaseStudySectionImage'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyChallengeProps = {
  paragraphs: string[]
  beforeImage?: CaseStudyImage
  afterImage?: CaseStudyImage
}

const CaseStudyChallenge = ({
  paragraphs,
  beforeImage,
  afterImage,
}: CaseStudyChallengeProps) => (
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
            <p className="mb-4 text-lg text-secondary dark:text-backgroundBody sm:text-[24px]">
              Before
            </p>
            <CaseStudySectionImage
              src={beforeImage?.src}
              alt={beforeImage?.alt ?? 'Before'}
              aspectClassName="aspect-[4/3] min-h-[220px]"
              placeholderLabel="Before placeholder"
            />
          </div>
          <div>
            <p className="mb-4 text-lg text-secondary dark:text-backgroundBody sm:text-[24px]">
              After
            </p>
            <CaseStudySectionImage
              src={afterImage?.src}
              alt={afterImage?.alt ?? 'After'}
              aspectClassName="aspect-[4/3] min-h-[220px]"
              placeholderLabel="After placeholder"
            />
          </div>
        </div>
      </RevealWrapper>
    </div>
  </section>
)

export default CaseStudyChallenge
