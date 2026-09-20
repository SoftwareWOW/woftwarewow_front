import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import type { CaseStudyHighlight, CaseStudyTestimonial } from '@/lib/case-study/types'
import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

interface WorkType {
  slug: string
  content: string
  [key: string]: unknown
}

const caseStudies: WorkType[] = getMarkDownData('data/marketing/project').reverse()

type CaseStudyHighlightsProps = {
  testimonial?: CaseStudyTestimonial
  highlights?: CaseStudyHighlight[]
}

function HighlightLink({
  href,
  children,
}: {
  href?: string
  children: ReactNode
}) {
  if (!href) {
    return <div className="block">{children}</div>
  }

  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className="block">
      {children}
    </Link>
  )
}

const CaseStudyHighlights = ({ testimonial, highlights }: CaseStudyHighlightsProps) => {
  const items =
    highlights?.length ?
      highlights.map((item, index) => ({
        key: `${item.image}-${index}`,
        image: item.image,
        alt: item.alt ?? 'Project highlight',
        href: item.href,
        quote: item.quote ?? testimonial?.quote,
        author: item.author ?? testimonial?.author,
      }))
    : caseStudies.map((item) => ({
        key: item.slug,
        image: item.image as string,
        alt: (item.title as string) ?? 'Project highlight',
        href: `/marketing/project/${item.slug}`,
        quote: testimonial?.quote,
        author: testimonial?.author,
      }))

  return (
    <section className={caseStudySectionClass}>
      <div className={caseStudySectionInnerClass}>
        <div className="mb-10 text-center md:text-left">
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 md:mt-4">Project Highlights</h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
          {items.map((item, index) => (
            <RevealWrapper
              key={item.key}
              className={cn(
                'reveal-me underline-hover-effect group',
                (index + 1) % 2 === 0 ? 'md:mt-5' : '',
              )}
            >
              <HighlightLink href={item.href}>
                <figure className="relative overflow-hidden rounded-radius-md">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1320}
                    height={880}
                    className="h-full w-full rounded-radius-md object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />

                  {item.quote && item.author ?
                    <div className="absolute inset-0 flex items-center justify-center rounded-radius-md p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
                      <div className="max-w-md rounded-radius-md border border-white/10 bg-black/50 p-5 backdrop-blur-md sm:p-8">
                        <p
                          className="bg-gradient-to-b from-[#7dd3fc] to-primary bg-clip-text text-center text-5xl leading-none text-transparent"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </p>
                        <p className="mt-2 text-center text-base leading-relaxed text-white sm:text-lg">
                          {item.quote}
                        </p>
                        <p className="mt-4 text-right text-sm text-white/80">
                          —{item.author}
                        </p>
                      </div>
                    </div>
                  : null}
                </figure>
              </HighlightLink>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudyHighlights
