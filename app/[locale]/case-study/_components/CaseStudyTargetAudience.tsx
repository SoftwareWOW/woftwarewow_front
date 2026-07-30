import RevealWrapper from '@/components/animation/RevealWrapper'
import type { CaseStudyAudience } from '@/lib/case-study/types'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyTargetAudienceProps = {
  audiences: CaseStudyAudience[]
}

const CaseStudyTargetAudience = ({ audiences }: CaseStudyTargetAudienceProps) => (
  <section className={caseStudySectionClass}>
    <div className={caseStudySectionInnerClass}>
      <RevealWrapper>
        <h2 className="text-[28px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[32px] lg:text-[36px]">
          Target Audience
        </h2>
        <div className="mt-8 space-y-8 lg:mt-10 lg:space-y-10">
          {audiences.map((item) => (
            <div key={item.label}>
              <h3 className="text-lg font-normal text-secondary dark:text-backgroundBody sm:text-xl lg:text-[24px]">
                {item.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted lg:text-[20px]">{item.description}</p>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </div>
  </section>
)

export default CaseStudyTargetAudience
