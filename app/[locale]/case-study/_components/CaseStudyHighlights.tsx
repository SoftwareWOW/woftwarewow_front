import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import type { CaseStudyTestimonial } from '@/lib/case-study/types'
import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'

interface WorkType {
  slug: string
  content: string
  [key: string]: unknown
}

const caseStudies: WorkType[] = getMarkDownData('data/marketing/project').reverse()

type CaseStudyHighlightsProps = {
  testimonial?: CaseStudyTestimonial
}

const CaseStudyHighlights = ({ testimonial }: CaseStudyHighlightsProps) => {
  return (
    <section className="pb-14 pt-28 sm:pt-36 md:pb-16 md:pt-[157px] lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto mb-10 max-w-[1430px] px-4 text-center md:px-[30px] md:text-left">
        <TextAppearAnimation>
          <h2 className="text-appear mt-3 md:mt-4">Project Highlights</h2>
        </TextAppearAnimation>
      </div>

      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-x-5 px-4 md:grid-cols-2 md:px-[30px]">
        {caseStudies.map((item, index) => (
          <RevealWrapper
            key={item.slug}
            className={cn('reveal-me underline-hover-effect group', (index + 1) % 2 === 0 ? 'md:mt-5' : '')}>
            <Link href={`/marketing/project/${item.slug}`}>
              <figure className="relative overflow-hidden rounded-radius-md">
                <img
                  src={item?.image as string}
                  className="h-full w-full rounded-radius-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  alt={item?.title as string}
                />

                {testimonial ? (
                  <div className="absolute inset-0 flex items-center justify-center rounded-radius-md p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
                    <div className="max-w-md rounded-radius-md border border-white/10 bg-black/50 p-5 backdrop-blur-md sm:p-8">
                      <p
                        className="bg-gradient-to-b from-[#7dd3fc] to-primary bg-clip-text text-center text-5xl leading-none text-transparent"
                        aria-hidden="true">
                        &ldquo;
                      </p>
                      <p className="mt-2 text-center text-base leading-relaxed text-white sm:text-lg">
                        {testimonial.quote}
                      </p>
                      <p className="mt-4 text-right text-sm text-white/80">—{testimonial.author}</p>
                    </div>
                  </div>
                ) : null}
              </figure>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default CaseStudyHighlights
