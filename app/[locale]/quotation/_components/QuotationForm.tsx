'use client'

import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import { useToast } from '@/components/wow/shared/ToastProvider'
import { useState } from 'react'
import {
  budgetOptions,
  projectStageOptions,
  serviceOptions,
  timelineOptions,
} from '../_data/quotation'

const sectionTitleClassName =
  'text-lg font-normal leading-[1.2] tracking-[-0.02em] text-secondary dark:text-backgroundBody md:text-xl'

const labelClassName =
  'text-lg font-normal leading-[1.2] tracking-[-0.02em] text-[#666666] dark:text-dark-100 md:text-xl'

const inputClassName =
  'w-full rounded-radius-sm border border-[#1515151A] bg-backgroundBody px-5 py-4 text-base leading-[1.4] tracking-[0.02em] text-secondary placeholder:text-[#808080] focus:border-[#1515151A] focus:outline-none focus:bg-[#D9D8F3] dark:focus:bg-[#1F1F1F] dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody dark:placeholder:text-dark-100 md:text-lg'

const chipClassName = (selected: boolean) =>
  [
    'inline-flex cursor-pointer items-center justify-center rounded-radius-sm border border-[#1515151A] px-4 py-3 text-sm font-medium uppercase tracking-[0.08em] transition-all duration-300 dark:border-[#EDF0F51A] md:px-8 md:py-4 md:text-base',
    selected
      ? 'border-transparent bg-[#9592DE] text-white dark:border-transparent dark:bg-[#292757] dark:text-white'
      : 'bg-backgroundBody text-secondary hover:border-primary/30 dark:bg-dark dark:text-backgroundBody dark:hover:border-[#EDF0F533]',
  ].join(' ')

const QuotationForm = () => {
  const { showToast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [services, setServices] = useState<string[]>([])
  const [projectDescription, setProjectDescription] = useState('')
  const [goals, setGoals] = useState('')
  const [projectStage, setProjectStage] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleService = (value: string) => {
    setServices((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setCompany('')
    setPhone('')
    setWebsite('')
    setServices([])
    setProjectDescription('')
    setGoals('')
    setProjectStage('')
    setBudget('')
    setTimeline('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quotation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          website,
          services,
          projectDescription,
          goals,
          projectStage,
          budget,
          timeline,
        }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? 'Unable to send your request. Please try again.')
      }

      showToast(
        'Thank you! Your quotation request was sent. Check your email for a confirmation — we will reply as soon as possible.',
        'success',
      )
      resetForm()
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : 'Unable to send your request. Please try again.',
        'error',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto grid max-w-[800px] grid-cols-1 gap-8 md:gap-10"
      >
        <div className="md:col-span-full">
          <h3 className={sectionTitleClassName}>1. About You</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div>
              <label htmlFor="quotation-name" className={labelClassName}>
                Name
              </label>
              <input
                type="text"
                id="quotation-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className={`${inputClassName} mt-2`}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="quotation-email" className={labelClassName}>
                Email*
              </label>
              <input
                type="email"
                id="quotation-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`${inputClassName} mt-2`}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="quotation-company" className={labelClassName}>
                Company
              </label>
              <input
                type="text"
                id="quotation-company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                className={`${inputClassName} mt-2`}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="quotation-phone" className={labelClassName}>
                Phone*
              </label>
              <input
                type="tel"
                id="quotation-phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className={`${inputClassName} mt-2`}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="quotation-website" className={labelClassName}>
                Website
              </label>
              <input
                type="text"
                id="quotation-website"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website"
                className={`${inputClassName} mt-2`}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-full">
          <p className={sectionTitleClassName}>2. What Can We Help With?</p>
          <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
            {serviceOptions.map((item) => {
              const selected = services.includes(item)

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleService(item)}
                  className={chipClassName(selected)}
                  disabled={isSubmitting}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        <div className="md:col-span-full">
          <h3 className={sectionTitleClassName}>3. Tell Us About the Project</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quotation-description" className={labelClassName}>
                Project description*
              </label>
              <textarea
                id="quotation-description"
                name="projectDescription"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Text Placeholder"
                rows={6}
                className={`${inputClassName} mt-2 min-h-44`}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="quotation-goals" className={labelClassName}>
                What are you trying to achieve?*
              </label>
              <textarea
                id="quotation-goals"
                name="goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="Text Placeholder"
                rows={6}
                className={`${inputClassName} mt-2 min-h-44`}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-full">
          <p className={sectionTitleClassName}>4. Project Stage</p>
          <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
            {projectStageOptions.map((item) => {
              const selected = projectStage === item

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setProjectStage(item)}
                  className={chipClassName(selected)}
                  disabled={isSubmitting}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        <div className="md:col-span-full">
          <label htmlFor="quotation-budget" className={sectionTitleClassName}>
            5. Budget Range
          </label>
          <select
            id="quotation-budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={`${inputClassName} mt-4 appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22%3E%3Cpath d=%22M1 1.5L6 6.5L11 1.5%22 stroke=%22%23808080%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/%3E%3C/svg%3E')] bg-[length:12px_8px] bg-[right_1.25rem_center] bg-no-repeat pr-12`}
            disabled={isSubmitting}
          >
            <option value="">Select Range</option>
            {budgetOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-full">
          <p className={sectionTitleClassName}>6. Timeline</p>
          <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
            {timelineOptions.map((item) => {
              const selected = timeline === item

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setTimeline(item)}
                  className={chipClassName(selected)}
                  disabled={isSubmitting}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        <div className="md:col-span-full">
          <ButtonComponent
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            className="!w-full [&_.rv-button-bottom_span]:uppercase [&_.rv-button-top_span]:uppercase [&_span]:text-sm [&_span]:tracking-[0.18em] md:[&_span]:text-base"
          >
            {isSubmitting ? 'Sending...' : 'Request a Quote'}
          </ButtonComponent>
        </div>
      </form>
    </section>
  )
}

export default QuotationForm
