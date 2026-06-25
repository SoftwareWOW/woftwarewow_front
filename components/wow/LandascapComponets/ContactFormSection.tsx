'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { useState } from 'react'

const interestOptions = [
  'UI/UX Design',
  'Web Design',
  'Web-Development',
  'Website Creation',
  'Animation',
  'Others',
]

const budgetOptions = ['$2k-4k', '$4k-6k', '$6k-8k']

const ContactFormSection = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Web-Development', 'Website Creation'])
  const [selectedBudget, setSelectedBudget] = useState('$4k-6k')

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const tagBaseClass =
    'rounded-md border px-4 py-3 text-sm font-medium transition-all duration-300 md:px-6 md:py-4 md:text-base'
  const tagInactiveClass =
    'border-secondary/15 bg-transparent text-colorText/60 hover:border-secondary/30 hover:text-secondary dark:border-white/15 dark:text-white/50 dark:hover:border-white/30 dark:hover:text-white/70'
  const tagActiveClass = 'border-[#2E2E63] bg-[#2E2E63] text-white dark:border-[#2E2E63] dark:bg-[#2E2E63]'

  return (
    <section className="overflow-hidden bg-backgroundBody pb-14 pt-14 transition-colors duration-300 dark:bg-[#0B0B0B] md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <RevealWrapper>
            <span className="rv-badge mb-6 inline-block border border-secondary/10 dark:border-white/10">
              <span className="rv-badge-text dark:!text-white/80">Inquiry Form</span>
            </span>
          </RevealWrapper>

          <TextAppearAnimation>
            <h2 className="text-appear font-seasons text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.15] text-secondary dark:text-white">
              Let&apos;s Discuss Your <i className="italic">Project</i>
            </h2>
          </TextAppearAnimation>

          <RevealWrapper className="mt-4">
            <p className="text-base leading-relaxed text-colorText dark:text-white/60 md:text-lg">
              Tell us about your goals and challenges. We&apos;ll recommend the best path forward.
            </p>
          </RevealWrapper>

          <RevealWrapper
            as="form"
            onSubmit={handleSubmit}
            className="reveal-me mx-auto mt-12 grid max-w-[800px] grid-cols-1 gap-8 text-left md:gap-[30px]">
            <div className="md:col-span-full">
              <label htmlFor="name" className="text-lg text-colorText/70 dark:text-white/50 md:text-xl">
                Your Data
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                required
                className="mt-3 w-full rounded-md border border-secondary/10 bg-background py-4 pl-5 text-base text-secondary placeholder:text-secondary/30 focus:border-primary/50 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-[#8b7cff]/50 md:text-lg"
              />
            </div>

            <div className="md:col-span-full">
              <label className="text-lg text-colorText/70 dark:text-white/50 md:text-xl">You are interested in:</label>
              <div className="mt-3 flex flex-wrap gap-3">
                {interestOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleInterest(option)}
                    className={`${tagBaseClass} ${
                      selectedInterests.includes(option) ? tagActiveClass : tagInactiveClass
                    }`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-full">
              <label className="text-lg text-colorText/70 dark:text-white/50 md:text-xl">Budget in USD:</label>
              <div className="mt-3 flex flex-wrap gap-3">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedBudget(option)}
                    className={`${tagBaseClass} ${selectedBudget === option ? tagActiveClass : tagInactiveClass}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-full">
              <label htmlFor="message" className="text-lg text-colorText/70 dark:text-white/50 md:text-xl">
                Project Details*
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us more about your project"
                className="mt-3 min-h-44 w-full rounded-md border border-secondary/10 bg-background py-4 pl-5 text-base text-secondary placeholder:text-secondary/30 focus:border-primary/50 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-[#8b7cff]/50 md:text-lg"
              />
            </div>

            <button type="submit" className="rv-button rv-button-secondary col-span-full !w-full dark:!bg-white">
              <div className="rv-button-top !w-full !text-center dark:!bg-white dark:!text-secondary">
                <span className="text-xs font-semibold uppercase tracking-[0.15em]">Request a Consultation</span>
              </div>
              <div className="rv-button-bottom !w-full !text-center dark:!bg-white dark:!text-secondary">
                <span className="text-xs font-semibold uppercase tracking-[0.15em]">Request a Consultation</span>
              </div>
            </button>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
