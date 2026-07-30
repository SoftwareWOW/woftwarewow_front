'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import type { CaseStudyTestimonial } from '@/lib/case-study/types'
import ImagePlaceholder from './ImagePlaceholder'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyHighlightsProps = {
  testimonial?: CaseStudyTestimonial
}

const CaseStudyHighlights = ({ testimonial }: CaseStudyHighlightsProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section id="highlights" className={caseStudySectionClass}>
      <div className={caseStudySectionInnerClass}>
        <RevealWrapper>
          <h2 className="text-[28px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[32px] lg:text-[36px]">
            Project Highlights
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
            <div className="relative overflow-hidden rounded-radius-md border border-black/10 dark:border-white/10">
              <ImagePlaceholder
                aspectClassName="aspect-[4/5] min-h-[320px]"
                label="Testimonial background placeholder"
                className="rounded-none border-0"
              />
              {testimonial ? (
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                  <div className="max-w-md rounded-radius-md border border-white/10 bg-backgroundBody/80 p-6 backdrop-blur-sm dark:bg-dark/80 sm:p-8">
                    <p className="text-4xl leading-none text-primary">&ldquo;</p>
                    <p className="mt-2 text-base leading-relaxed text-secondary dark:text-backgroundBody sm:text-lg">
                      {testimonial.quote}
                    </p>
                    <p className="mt-4 text-right text-sm text-muted">—{testimonial.author}</p>
                  </div>
                </div>
              ) : null}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show highlight ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`size-2 rounded-full transition-colors ${
                      activeSlide === index ? 'bg-primary' : 'bg-black/20 dark:bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <ImagePlaceholder aspectClassName="aspect-[16/10] min-h-[180px]" label="UI showcase placeholder" />
              <ImagePlaceholder aspectClassName="aspect-[16/10] min-h-[180px]" label="UI showcase placeholder" />
            </div>

            <ImagePlaceholder aspectClassName="aspect-[4/3] min-h-[220px]" label="Highlight placeholder" />

            <ImagePlaceholder
              aspectClassName="aspect-[4/3] min-h-[220px]"
              label="Responsive devices placeholder"
            />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default CaseStudyHighlights
