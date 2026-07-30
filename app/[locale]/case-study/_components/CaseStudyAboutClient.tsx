import RevealWrapper from '@/components/animation/RevealWrapper'
import ImagePlaceholder from './ImagePlaceholder'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyAboutClientProps = {
  paragraphs: string[]
}

const CaseStudyAboutClient = ({ paragraphs }: CaseStudyAboutClientProps) => (
  <section className={caseStudySectionClass}>
    <div className={caseStudySectionInnerClass}>
      <RevealWrapper>
        <h2 className="text-[28px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[32px] lg:text-[36px]">
          About the Client
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted lg:mt-8 lg:text-[20px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <ImagePlaceholder
          className="mt-8 w-full lg:mt-10"
          aspectClassName="aspect-[16/8] min-h-[220px]"
          label="Client image placeholder"
        />
      </RevealWrapper>
    </div>
  </section>
)

export default CaseStudyAboutClient
