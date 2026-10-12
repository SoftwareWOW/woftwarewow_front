'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import PrivacyPolicyToc from '@/components/shared/PrivacyPolicyToc'
import { privacyPolicySections } from '@/components/shared/privacy-policy-sections'
import { FC, useMemo, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

export { privacyPolicySections }

type ParsedSection = {
  id: string
  title: string
  markdown: string
}

function parsePrivacyContent(content: string) {
  const firstHeading = content.search(/^## /m)
  const intro = firstHeading === -1 ? content.trim() : content.slice(0, firstHeading).trim()
  const body = firstHeading === -1 ? '' : content.slice(firstHeading).trim()

  const chunks = body ? body.split(/^## /m).filter(Boolean) : []
  const sections: ParsedSection[] = chunks.map((chunk, index) => {
    const trimmed = chunk.trim()
    const newline = trimmed.indexOf('\n')
    const title = newline === -1 ? trimmed : trimmed.slice(0, newline).trim()
    const markdown = newline === -1 ? '' : trimmed.slice(newline + 1).trim()
    const id = privacyPolicySections[index]?.id ?? `section-${index + 1}`

    return { id, title, markdown }
  })

  return { intro, sections }
}

type PrivacyPolicyBodyProps = {
  content: string
  lastUpdated: string
}

const PrivacyPolicyBody: FC<PrivacyPolicyBodyProps> = ({ content, lastUpdated }) => {
  const { intro, sections } = useMemo(() => parsePrivacyContent(content), [content])
  const tocAnchorRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="mx-auto max-w-[820px]">
          <RevealWrapper>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-colorText/70 dark:text-dark-100/70">
              Last updated: {lastUpdated}
            </p>
            <div className="legal-policy-intro blog-details-body mt-4 space-y-4">
              <ReactMarkdown>{intro}</ReactMarkdown>
            </div>
          </RevealWrapper>
        </div>

        <div
          ref={tocAnchorRef}
          className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-16"
        >
          <aside className="hidden lg:block" aria-hidden="true" />
          <PrivacyPolicyToc anchorRef={tocAnchorRef} />

          <div className="min-w-0 flex-1">
            <nav aria-label="On this page" className="mb-8 flex flex-wrap gap-2 lg:hidden">
              {privacyPolicySections.slice(0, 5).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-radius-sm border border-[#1515151A] px-2.5 py-1 font-outfit text-xs text-colorText dark:border-[#EDF0F51A] dark:text-dark-100"
                >
                  {section.num}
                </a>
              ))}
              <a
                href="#contact-us"
                className="rounded-radius-sm border border-[#1515151A] px-2.5 py-1 font-outfit text-xs text-primary dark:border-[#EDF0F51A]"
              >
                …13
              </a>
            </nav>

            <div className="legal-policy-body blog-details-body mx-auto max-w-[820px] lg:max-w-none">
              {sections.map((section) => (
                <article key={section.id} className="legal-policy-section">
                  <RevealWrapper>
                    <h2 id={section.id}>{section.title}</h2>
                    {section.markdown ? <ReactMarkdown>{section.markdown}</ReactMarkdown> : null}
                  </RevealWrapper>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyBody
