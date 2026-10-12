'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import LegalDocumentToc from '@/components/shared/LegalDocumentToc'
import type { LegalDocumentFooterLink, LegalDocumentSection } from '@/components/shared/legal-document-types'
import { Link } from '@/i18n/navigation'
import { FC, useMemo, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

type ParsedSection = {
  id: string
  title: string
  markdown: string
}

function parseLegalContent(content: string, sectionDefs: readonly LegalDocumentSection[]) {
  const firstHeading = content.search(/^## /m)
  const intro = firstHeading === -1 ? content.trim() : content.slice(0, firstHeading).trim()
  const body = firstHeading === -1 ? '' : content.slice(firstHeading).trim()

  const chunks = body ? body.split(/^## /m).filter(Boolean) : []
  const sections: ParsedSection[] = chunks.map((chunk, index) => {
    const trimmed = chunk.trim()
    const newline = trimmed.indexOf('\n')
    const title = newline === -1 ? trimmed : trimmed.slice(0, newline).trim()
    const markdown = newline === -1 ? '' : trimmed.slice(newline + 1).trim()
    const id = sectionDefs[index]?.id ?? `section-${index + 1}`

    return { id, title, markdown }
  })

  return { intro, sections }
}

type LegalDocumentBodyProps = {
  content: string
  lastUpdated: string
  sections: readonly LegalDocumentSection[]
  footerLinks?: LegalDocumentFooterLink[]
}

const LegalDocumentBody: FC<LegalDocumentBodyProps> = ({ content, lastUpdated, sections, footerLinks }) => {
  const { intro, sections: parsedSections } = useMemo(
    () => parseLegalContent(content, sections),
    [content, sections],
  )
  const tocColumnRef = useRef<HTMLElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const lastSection = sections[sections.length - 1]

  return (
    <section ref={sectionRef} className="relative pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-16">
            <aside ref={tocColumnRef} className="hidden lg:block" aria-hidden="true" />

            <div className="min-w-0">
              <nav aria-label="On this page" className="mb-8 flex flex-wrap gap-2 lg:hidden">
                {sections.slice(0, 5).map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-radius-sm border border-[#1515151A] px-2.5 py-1 font-outfit text-xs text-colorText dark:border-[#EDF0F51A] dark:text-dark-100"
                  >
                    {section.num}
                  </a>
                ))}
                {lastSection ? (
                  <a
                    href={`#${lastSection.id}`}
                    className="rounded-radius-sm border border-[#1515151A] px-2.5 py-1 font-outfit text-xs text-primary dark:border-[#EDF0F51A]"
                  >
                    …{sections.length}
                  </a>
                ) : null}
              </nav>

              <RevealWrapper>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-colorText/70 dark:text-dark-100/70">
                  Last updated: {lastUpdated}
                </p>
                <div className="legal-policy-intro blog-details-body mt-4 space-y-4">
                  <ReactMarkdown>{intro}</ReactMarkdown>
                </div>
              </RevealWrapper>

              <div className="legal-policy-body blog-details-body mt-10 lg:mt-14">
                {parsedSections.map((section) => (
                  <article key={section.id} className="legal-policy-section">
                    <RevealWrapper>
                      <h2 id={section.id}>{section.title}</h2>
                      {section.markdown ? <ReactMarkdown>{section.markdown}</ReactMarkdown> : null}
                    </RevealWrapper>
                  </article>
                ))}
              </div>

              {footerLinks && footerLinks.length > 0 ? (
                <nav
                  aria-label="Related legal pages"
                  className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-[#1515151A] pt-8 font-outfit text-sm font-light text-colorText dark:border-[#EDF0F51A] dark:text-dark-100"
                >
                  {footerLinks.map((link, index) => (
                    <span key={link.label} className="inline-flex items-center gap-2">
                      {index > 0 ? <span className="text-colorText/40 dark:text-dark-100/40">·</span> : null}
                      <Link href={link.href} className="text-primary underline-offset-2 hover:underline">
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </nav>
              ) : null}
            </div>
          </div>

          <LegalDocumentToc sections={sections} anchorRef={tocColumnRef} boundsRef={sectionRef} />
        </div>
      </div>
    </section>
  )
}

export default LegalDocumentBody
