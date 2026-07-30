import RevealWrapper from '@/components/animation/RevealWrapper'
import ImagePlaceholder from './ImagePlaceholder'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyBusinessGoalsProps = {
  goals: string[]
}

const CaseStudyBusinessGoals = ({ goals }: CaseStudyBusinessGoalsProps) => (
  <section className={caseStudySectionClass}>
    <div className={caseStudySectionInnerClass}>
      <RevealWrapper>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,36%)] lg:gap-12 xl:gap-16">
          <div>
            <h2 className="text-[28px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[32px] lg:text-[36px]">
              Business Goals
            </h2>
            <ul className="mt-8 space-y-4 lg:mt-10">
              {goals.map((goal) => (
                <li
                  key={goal}
                  className="relative pl-5 text-base leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-primary lg:text-[20px]">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder
            aspectClassName="aspect-square min-h-[240px]"
            label="Visual placeholder"
            className="w-full"
          />
        </div>
      </RevealWrapper>
    </div>
  </section>
)

export default CaseStudyBusinessGoals
