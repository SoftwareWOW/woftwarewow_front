'use client'

import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'

const interestData = [
  { id: 'uiux', value: 'UI/UX Design' },
  { id: 'webdesign', value: 'Web Design' },
  { id: 'webdev', value: 'Web-Development' },
  { id: 'website', value: 'Website Creation' },
  { id: 'animation', value: 'Animation' },
  { id: 'others', value: 'Others' },
]

const budgetData = [
  { id: 'budget1', value: '$2k-4k' },
  { id: 'budget2', value: '$4k-6k' },
  { id: 'budget3', value: '$6k-8k' },
]

type WowContactFormProps = {
  className?: string
  onSubmitted?: () => void
  showHeader?: boolean
}

const labelClassName =
  'text-lg font-normal leading-[1.2] tracking-[-0.02em] text-[#666666] dark:text-dark-100 md:text-xl'

const inputClassName =
  'w-full rounded-radius-sm border border-[#1515151A] bg-backgroundBody px-5 py-4 text-base leading-[1.4] tracking-[0.02em] text-secondary placeholder:text-[#808080] focus:border-[#1515151A] focus:outline-none focus:bg-[#D9D8F3] dark:focus:bg-[#1F1F1F] dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody dark:placeholder:text-dark-100 md:text-lg'

const chipClassName = (selected: boolean) =>
  [
    'inline-flex cursor-pointer items-center justify-center rounded-radius-sm border border-[#1515151A] px-4 py-3 text-sm font-medium transition-all duration-300 dark:border-[#EDF0F51A] md:px-8 md:py-4 md:text-base',
    selected
      ? 'border-transparent bg-[#9592DE] text-white dark:border-transparent dark:bg-[#292757] dark:text-white'
      : 'bg-backgroundBody text-secondary hover:border-primary/30 dark:bg-dark dark:text-backgroundBody dark:hover:border-[#EDF0F533]',
  ].join(' ')

const WowContactForm = ({ className = '', onSubmitted, showHeader = true }: WowContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', { name, email, interests, budget, message })
    alert(`${name}, your request has been submitted.`)
    onSubmitted?.()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto grid max-w-[800px] grid-cols-1 gap-8 md:gap-10 ${className}`}
    >
      {showHeader && (
        <div className="text-center md:col-span-full">
          <h2 className="font-instrument text-[clamp(28px,5vw,40px)] font-normal leading-[1.15] tracking-[-0.02em] text-secondary dark:text-backgroundBody">
            Let&apos;s Discuss Your <span className="italic">Project</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base leading-[1.6] text-[#808080] dark:text-dark-100 md:text-lg">
            Tell us about your goals and challenges. We&apos;ll recommend the best path forward.
          </p>
        </div>
      )}

      <div className="md:col-span-full">
        <label htmlFor="wow-contact-name" className={labelClassName}>
          Your Data
        </label>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <input
            type="text"
            id="wow-contact-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
            className={inputClassName}
            required
          />
          <input
            type="email"
            id="wow-contact-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            className={inputClassName}
            required
          />
        </div>
      </div>

      <div className="md:col-span-full">
        <p className={labelClassName}>You are interested in</p>
        <div className="mt-3 flex flex-wrap gap-3 md:gap-4">
          {interestData.map((item) => {
            const selected = interests.includes(item.value)

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleInterest(item.value)}
                className={chipClassName(selected)}
              >
                {item.value}
              </button>
            )
          })}
        </div>
      </div>

      <div className="md:col-span-full">
        <p className={labelClassName}>Budget in USD:</p>
        <div className="mt-3 flex flex-wrap gap-3 md:gap-4">
          {budgetData.map((item) => {
            const selected = budget === item.value

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setBudget(item.value)}
                className={chipClassName(selected)}
              >
                {item.value}
              </button>
            )
          })}
        </div>
      </div>

      <div className="md:col-span-full">
        <label htmlFor="wow-contact-message" className={labelClassName}>
          Project Details*
        </label>
        <textarea
          id="wow-contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us more about your project"
          rows={6}
          className={`${inputClassName} mt-3 min-h-44`}
          required
        />
      </div>

      <div className="md:col-span-full">
        <ButtonComponent
          type="submit"
          variant="secondary"
          fullWidth
          className="!w-full [&_.rv-button-bottom_span]:uppercase [&_.rv-button-top_span]:uppercase [&_span]:text-sm [&_span]:tracking-[0.18em] md:[&_span]:text-base"
        >
          Request a Consultation
        </ButtonComponent>
      </div>
    </form>
  )
}

export default WowContactForm
