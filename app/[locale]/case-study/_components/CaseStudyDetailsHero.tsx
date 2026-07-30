import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import type { CaseStudyData } from '@/lib/case-study/types'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { caseStudyHeroClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudyDetailsHeroProps = {
  study: CaseStudyData
}

function MetaColumn({
  label,
  children,
  withBorder = true,
}: {
  label: string
  children: React.ReactNode
  withBorder?: boolean
}) {
  return (
    <div
      className={`min-w-0 py-6 lg:py-0 ${withBorder ? 'border-black/10 lg:border-l lg:border-t-0 lg:pl-8 dark:border-white/10' : ''}`}>
      <p className="text-sm font-medium text-secondary dark:text-backgroundBody">{label}</p>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  )
}

const CaseStudyDetailsHero = ({ study }: CaseStudyDetailsHeroProps) => {
  const websiteUrl = study.website
    ? `https://${study.website.replace(/^https?:\/\//, '')}`
    : undefined

  return (
    <section className={caseStudyHeroClass}>
      <RevealWrapper className={caseStudySectionInnerClass}>
        <div className="relative">
          <figure className="relative overflow-hidden rounded-radius-md">
            {study.image ? (
              <Image
                src={study.image}
                alt={study.imageAlt ?? study.title}
                width={1320}
                height={577}
                priority
                className="aspect-[16/7] min-h-[220px] w-full object-cover sm:min-h-[280px] lg:min-h-[340px]"
              />
            ) : (
              <div className="aspect-[16/7] min-h-[220px] w-full bg-black/10 sm:min-h-[280px] lg:min-h-[340px] dark:bg-white/5" />
            )}

            <div className="absolute inset-0 bg-black/45" aria-hidden />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-5 sm:text-left">
                <div>
                  <h2 className="text-2xl font-medium text-white sm:text-3xl lg:text-4xl">{study.title}</h2>
                  <p className="mt-1 text-sm text-white/80 sm:text-base">{study.tagline}</p>
                </div>
              </div>

              {study.website ? (
                <p className="absolute bottom-5 left-0 right-0 text-sm text-white/70 sm:bottom-6">
                  {study.website}
                </p>
              ) : null}
            </div>
          </figure>

          {study.image ? (
            <div className="absolute bottom-10 left-4 z-10 translate-y-1/2 sm:left-6 lg:left-20">
              <div className="flex size-[72px] items-center justify-center overflow-hidden rounded-radius-md border-[6px] border-backgroundBody bg-white  dark:border-dark sm:size-[88px] lg:size-[112px] ">
                <Image
                  src={study.image}
                  alt={`${study.title} logo`}
                  width={112}
                  height={112}
                  className="size-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex flex-col gap-8 pt-6 sm:mt-14 sm:pt-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between lg:pt-10">
          <div className="min-w-0 max-w-3xl pl-0 sm:pl-[104px] lg:pl-[136px]">
            <h1 className="text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody sm:text-[40px] lg:text-[48px] xl:text-[56px]">
              {study.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg lg:text-[20px]">
              {study.subtitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 self-start lg:self-auto">
            <a
              href={websiteUrl ?? '#highlights'}
              target={websiteUrl ? '_blank' : undefined}
              rel={websiteUrl ? 'noopener noreferrer' : undefined}
              aria-label="Open project link"
              className="inline-flex size-12 items-center justify-center rounded-radius-sm border border-black/10 bg-backgroundBody text-secondary transition-colors hover:border-primary/30 hover:bg-primary/5 dark:border-white/10 dark:bg-dark dark:text-backgroundBody dark:hover:bg-primary/10 sm:size-14">
              <ArrowUpRight className="size-5" aria-hidden />
            </a>
            <ButtonComponentList className="w-auto" itemClassName="w-auto">
              <ButtonComponent href="/contact" variant="primary" className="[&_span]:!text-white">
                Book a similar project
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-0 border-t border-black/10 dark:border-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          <MetaColumn label="Company Size" withBorder={false}>
            {study.companySize}
          </MetaColumn>
          <MetaColumn label="Date">{study.date}</MetaColumn>
          <MetaColumn label="Project Duration">{study.projectDuration}</MetaColumn>
          <MetaColumn label="Website">
            <ul className="space-y-1">
              {study.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </MetaColumn>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default CaseStudyDetailsHero
