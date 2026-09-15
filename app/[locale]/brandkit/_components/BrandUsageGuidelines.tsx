import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Check, X } from 'lucide-react'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const dontItems = [
  'Stretch or distort the logo',
  'Recolor it arbitrarily',
  'Add effects or shadows',
  'Place it on unreadable backgrounds',
  'Alter the wordmark or symbol',
]

const doItems = [
  'Use approved logo files',
  'Maintain sufficient clear space',
  'Keep proportions unchanged',
  'Use approved brand colors',
  'Ensure strong contrast',
]

type BrandUsageGuidelinesProps = Partial<CmsTechnologiesSection>

const BrandUsageGuidelines = ({
  eyebrow = 'Usage Guidelines',
  title = 'Do & Don\'t',
  accentTitle,
  description = 'Follow these rules to keep WOW Superagency brand assets consistent across every touchpoint.',
}: BrandUsageGuidelinesProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )

  return (
  <section>
    <div className="container">
      <div className="mb-10 text-center md:mb-14">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>{header.eyebrow}</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mx-auto max-w-[770px]">{header.title}{header.accentTitle ? <> <InstrumentText>{header.accentTitle}</InstrumentText></> : null}</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">{header.description}</p>
        </TextAppearAnimation>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevealWrapper>
          <article className="h-full rounded-radius-md border border-black/15 bg-backgroundBody p-6 dark:border-white/15 dark:bg-dark md:p-10">
            <h3 className="mb-8 text-4xl font-normal tracking-normal text-secondary dark:text-backgroundBody md:text-5xl">
              Don&apos;t
            </h3>
            <ul className="space-y-5">
              {dontItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#808080] md:text-lg">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-[#808080]/40 text-[#808080]">
                    <X className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </RevealWrapper>

        <RevealWrapper>
          <article className="h-full rounded-radius-md border border-primary/30 p-6 dark:border-white/25 dark:from-[#615CCE]/25 dark:via-[#1A1A1A] dark:to-[#151515] md:p-10">
            <h3 className="mb-8 text-4xl font-normal tracking-normal text-secondary dark:text-backgroundBody md:text-5xl">
              Do
            </h3>
            <ul className="space-y-5">
              {doItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-secondary dark:text-backgroundBody md:text-lg"
                >
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-secondary/40 text-secondary dark:border-backgroundBody/50 dark:text-backgroundBody">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </RevealWrapper>
      </div>
    </div>
  </section>
  )
}

export default BrandUsageGuidelines
