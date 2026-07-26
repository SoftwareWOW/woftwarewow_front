'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Link from 'next/link'
import { useState } from 'react'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

export type SoftwareWoWProject = {
  slug: string
  content: string
  title?: string
  category?: string
  image?: string
  [key: string]: unknown
}

type SoftwareWoWProjectsClientProps = {
  caseStudies: SoftwareWoWProject[]
  initialVisibleCount?: number
}

const SoftwareWoWProjectsClient = ({
  caseStudies,
  initialVisibleCount = 1,
}: SoftwareWoWProjectsClientProps) => {
  const [showAll, setShowAll] = useState(false)
  const visibleCaseStudies = showAll ? caseStudies : caseStudies.slice(0, initialVisibleCount)

  return (
    <section className="px-3 md:px-4">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 text-center lg:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear">
              Helping businesses <span className="font-instrument italic">thrive</span>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {visibleCaseStudies.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row"
            >
              <figure className="-z-30 max-w-[870px] overflow-hidden">
                <Link href={`/management-consulting/project/${item.slug}`} className="block">
                  <img
                    src={item.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.title}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item.category}
                </p>
                <div className="blog-title mb-20 lg:mb-[104px]">
                  <Link href={`/management-consulting/project/${item.slug}`}>
                    <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <ButtonComponent href={`/management-consulting/project/${item.slug}`} variant="white">
                  Read Case Study
                </ButtonComponent>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {caseStudies.length > initialVisibleCount && (
          <RevealWrapper className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
            <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
              <ButtonComponent
                type="button"
                variant="white"
                fullWidth
                onClick={() => setShowAll((prev) => !prev)}
                ariaExpanded={showAll}
              >
                {showAll ? 'See Less' : 'Load More'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default SoftwareWoWProjectsClient
