'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import WowText from '@/components/wow/shared/WowText'
import { getCareerMeta, parseCareerSections } from '@/lib/career/parseCareerContent'
import type { CareerPostData } from '@/lib/career/types'
import { Building2, Globe, MapPin, Phone, Users } from 'lucide-react'
import { CareerShareIconButton } from './CareerShareButton'
import { careerSectionClass, careerSectionInnerClass } from './careerSectionSpacing'

type CareerDetailsOverviewProps = {
  career: CareerPostData
  content: string
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-black/5 py-4 last:border-b-0 dark:border-white/5">
      <span className="text-sm text-muted">{label}</span>
      <span className="text-right text-sm font-medium text-secondary dark:text-backgroundBody">{value}</span>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  if (!items.length) return null

  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-base leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-primary lg:text-[18px] xl:text-[20px]">
          {item}
        </li>
      ))}
    </ul>
  )
}

const CareerDetailsOverview = ({ career, content }: CareerDetailsOverviewProps) => {
  const parsed = parseCareerSections(content)
  const meta = getCareerMeta(career)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => setSubmitting(false), 800)
  }

  return (
    <section className={careerSectionClass}>
      <div className={careerSectionInnerClass}>
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,30%)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-12 2xl:grid-cols-[minmax(0,1fr)_360px] 2xl:gap-16">
          <RevealWrapper className="min-w-0">
            <h2 className="text-[24px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px]">
              Job Overview
            </h2>

            <div className="mt-8 space-y-10 sm:mt-10 lg:space-y-12 xl:space-y-14">
              <section>
                <h3 className="text-lg font-normal text-secondary dark:text-backgroundBody sm:text-xl lg:text-[22px] xl:text-[24px]">
                  About the Role
                </h3>
                {parsed.aboutTheRole.intro ? (
                  <p className="mt-4 text-base leading-relaxed text-muted lg:text-[18px] xl:text-[20px]">
                    {parsed.aboutTheRole.intro}
                  </p>
                ) : null}
              </section>

              {parsed.responsibilities.items.length > 0 ? (
                <section>
                  <h3 className="text-lg font-normal text-secondary dark:text-backgroundBody sm:text-xl lg:text-[22px] xl:text-[24px]">
                    Responsibilities
                  </h3>
                  {parsed.responsibilities.intro ? (
                    <p className="mt-4 text-base leading-relaxed text-muted lg:text-[18px] xl:text-[20px]">
                      {parsed.responsibilities.intro}
                    </p>
                  ) : null}
                  <BulletList items={parsed.responsibilities.items} />
                </section>
              ) : null}

              {parsed.requirements.required.length > 0 || parsed.requirements.niceToHave.length > 0 ? (
                <section>
                  <h3 className="text-lg font-normal text-secondary dark:text-backgroundBody sm:text-xl lg:text-[22px] xl:text-[24px]">
                    Requirements
                  </h3>

                  {parsed.requirements.required.length > 0 ? (
                    <div className="mt-6">
                      <h4 className="text-base font-normal text-secondary dark:text-backgroundBody sm:text-lg lg:text-[20px] xl:text-[24px]">
                        Required Qualifications
                      </h4>
                      <BulletList items={parsed.requirements.required} />
                    </div>
                  ) : null}

                  {parsed.requirements.niceToHave.length > 0 ? (
                    <div className="mt-8">
                      <h4 className="text-base font-normal text-secondary dark:text-backgroundBody sm:text-lg lg:text-[20px] xl:text-[24px]">
                        Nice to Have
                      </h4>
                      <BulletList items={parsed.requirements.niceToHave} />
                    </div>
                  ) : null}
                </section>
              ) : null}

              {parsed.benefits.items.length > 0 ? (
                <section>
                  <h3 className="text-lg font-normal text-secondary dark:text-backgroundBody sm:text-xl lg:text-[22px] xl:text-[24px]">
                    Benefits
                  </h3>
                  {parsed.benefits.intro ? (
                    <p className="mt-4 text-base leading-relaxed text-muted lg:text-[18px] xl:text-[20px]">
                      {parsed.benefits.intro}
                    </p>
                  ) : null}
                  <BulletList items={parsed.benefits.items} />
                </section>
              ) : null}
            </div>
          </RevealWrapper>

          <aside className="min-w-0 space-y-6 lg:sticky lg:top-28 lg:self-start">
            <RevealWrapper className="rounded-[10px] border border-black/10 bg-backgroundBody p-5 dark:border-white/10 dark:bg-dark-300 sm:p-6 lg:p-7 xl:p-8 2xl:p-10">
              <MetaRow label="Department" value={meta.department} />
              <MetaRow label="Employment" value={meta.employment} />
              <MetaRow label="Location" value={meta.location} />
              <MetaRow label="Experience" value={meta.experience} />
              <MetaRow label="Salary" value={meta.salary} />
              <MetaRow label="Posted" value={meta.posted} />
            </RevealWrapper>

            <RevealWrapper className="rounded-[10px] border border-black/10 bg-backgroundBody p-5 dark:border-white/10 dark:bg-dark-300 sm:p-6 lg:p-7 xl:p-8 2xl:p-10">
              <div className="mb-4 flex items-center gap-1 text-2xl font-medium text-secondary dark:text-backgroundBody">
                <WowText className="text-[1.15em]">WOW</WowText>
                <span>{meta.division.replace(/^WOW\s*/i, '')}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{meta.divisionDescription}</p>

              <div className="mt-6 space-y-4 border-t border-black/5 pt-6 dark:border-white/5">
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Building2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{meta.industry}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{meta.companySize}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{meta.companyLocation}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{meta.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Globe className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <a
                    href={`https://${meta.website.replace(/^https?:\/\//, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary">
                    {meta.website}
                  </a>
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper
              id="apply"
              className="scroll-mt-28 rounded-[10px] border border-black/10 bg-backgroundBody p-5 dark:border-white/10 dark:bg-dark-300 sm:p-6 lg:p-7 xl:p-8 2xl:p-10">
              <h3 className="text-lg font-normal text-secondary dark:text-backgroundBody sm:text-xl lg:text-[20px] xl:text-[24px]">
                Interested in joining our team?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Submit your application below and our recruitment team will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name*"
                  className="w-full rounded-radius-sm border border-black/10 bg-background px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-dark dark:text-backgroundBody"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address*"
                  className="w-full rounded-radius-sm border border-black/10 bg-background px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-dark dark:text-backgroundBody"
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-radius-sm border border-dashed border-black/10 bg-background px-4 py-3 text-sm text-muted file:mr-3 file:rounded-radius-sm file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary dark:border-white/10 dark:bg-dark"
                />

                <div className="flex min-w-0 flex-col gap-3 pt-2 sm:flex-row sm:items-stretch">
                  <ButtonComponentList className="min-w-0 flex-1" itemClassName="w-full">
                    <ButtonComponent
                      type="submit"
                      variant="primary"
                      fullWidth
                      disabled={submitting}
                      className="[&_span]:!text-white">
                      {submitting ? 'Submitting...' : 'Apply'}
                    </ButtonComponent>
                  </ButtonComponentList>
                  <ButtonComponentList className="shrink-0 sm:w-auto" itemClassName="w-full sm:w-auto">
                    <CareerShareIconButton title={career.title} description={career.description} />
                  </ButtonComponentList>
                </div>
              </form>
            </RevealWrapper>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CareerDetailsOverview
