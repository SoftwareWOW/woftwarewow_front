'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ButtonComponent from '../shared/ButtonComponent'

const interestOptions = [
  'Web Development & Websites',
  'Custom Software & Mobile Apps',
  'UI/UX & Brand Design',
  'Digital Marketing & SEO',
  'AI & Business Automation',
  'Strategy & Consulting',
  'Other / Not Sure Yet',
]

const budgetOptions = ['Under $5k', '$5k – $15k', '$15k – $30k', '$30k – $75k', '$75k+']

const ContactFormSection = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Web Development & Websites',
  ])
  const [selectedBudget, setSelectedBudget] = useState('$5k – $15k')
  const [isInterestsOpen, setIsInterestsOpen] = useState(false)
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[800px]">
          {/* Card Container */}
          <div className="rounded-radius-sm border border-[#e5e5e5] bg-white/50 backdrop-blur-sm px-6 py-10 transition-all duration-300 hover:border-[#8b7cff]/20 hover:shadow-2xl hover:shadow-[#8b7cff]/5 dark:border-white/5 dark:bg-dark/50 dark:hover:border-[#8b7cff]/20 dark:hover:shadow-[#8b7cff]/10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            {/* Decorative gradient line at top */}
            <div className="absolute left-1/2 top-0 h-1 w-1/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] opacity-50" />

            <div className="text-center">
              <RevealWrapper>
                <span className="rv-badge mb-6 inline-block border border-[#e5e5e5] px-4 py-1.5 dark:border-white/10">
                  <span className="rv-badge-text text-sm font-medium uppercase tracking-[0.15em] text-[#8b7cff] dark:text-[#b794f4]">
                    Start the Conversation
                  </span>
                </span>
              </RevealWrapper>

              <TextAppearAnimation>
                <h2 className="text-appear font-seasons text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.15] text-[#000000] dark:text-[#F2F2F2]">
                  Let&apos;s Build Something{' '}
                  <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                    Great Together
                  </span>
                </h2>
              </TextAppearAnimation>

              <RevealWrapper className="mt-4">
                <p className="text-base leading-relaxed text-[#555555] dark:text-[#999999] md:text-lg">
                  Tell us where you are today and where you want to go. We&apos;ll recommend the smartest path forward
                  — with clarity, not pressure.
                </p>
              </RevealWrapper>
            </div>

            <RevealWrapper
              as="form"
              onSubmit={handleSubmit}
              className="reveal-me mx-auto mt-10 grid max-w-[800px] grid-cols-1 gap-5 text-left md:mt-12 md:gap-6"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[#555555] dark:text-[#999999] md:text-base">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Sarah Mitchell"
                  required
                  className="mt-2 w-full rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-4 text-base text-[#1a1a1a] placeholder:text-[#999999] transition-all duration-300 focus:border-[#8b7cff]/50 focus:outline-none focus:ring-4 focus:ring-[#8b7cff]/10 dark:border-white/10 dark:bg-dark/50 dark:text-[#F2F2F2] dark:placeholder:text-[#666666] dark:focus:border-[#8b7cff]/50 dark:focus:ring-[#8b7cff]/20"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[#555555] dark:text-[#999999] md:text-base">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. you@yourcompany.com"
                  required
                  className="mt-2 w-full rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-4 text-base text-[#1a1a1a] placeholder:text-[#999999] transition-all duration-300 focus:border-[#8b7cff]/50 focus:outline-none focus:ring-4 focus:ring-[#8b7cff]/10 dark:border-white/10 dark:bg-dark/50 dark:text-[#F2F2F2] dark:placeholder:text-[#666666] dark:focus:border-[#8b7cff]/50 dark:focus:ring-[#8b7cff]/20"
                />
              </div>

              {/* Interests Dropdown */}
              <div>
                <label className="text-sm font-medium text-[#555555] dark:text-[#999999] md:text-base">
                  What are you looking for? *
                </label>
                <div className="relative mt-2">
                  <button
                    type="button"
                    onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                    className="flex w-full items-center justify-between rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-4 text-base text-[#1a1a1a] transition-all duration-300 hover:border-[#8b7cff]/30 dark:border-white/10 dark:bg-dark/50 dark:text-[#F2F2F2] dark:hover:border-[#8b7cff]/30"
                  >
                    <span className="truncate text-[#1a1a1a] dark:text-[#F2F2F2]">
                      {selectedInterests.length > 0
                        ? selectedInterests.join(', ')
                        : 'Select one or more services'}
                    </span>
                    {isInterestsOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-[#8b7cff]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#8b7cff]" />
                    )}
                  </button>

                  {isInterestsOpen && (
                    <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-60 overflow-y-auto rounded-radius-sm border border-[#e5e5e5] bg-white/95 p-2 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-dark/95">
                      {interestOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            toggleInterest(option)
                          }}
                          className={`flex w-full items-center justify-between rounded-radius-sm px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                            selectedInterests.includes(option)
                              ? 'bg-[#8b7cff]/10 text-[#8b7cff] dark:bg-[#8b7cff]/20 dark:text-[#b794f4]'
                              : 'text-[#1a1a1a] hover:bg-[#f5f5f5] dark:text-[#F2F2F2] dark:hover:bg-white/5'
                          }`}
                        >
                          <span>{option}</span>
                          {selectedInterests.includes(option) && (
                            <svg className="h-4 w-4 text-[#8b7cff]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="text-sm font-medium text-[#555555] dark:text-[#999999] md:text-base">
                  Estimated Budget (USD) *
                </label>
                <div className="relative mt-2">
                  <button
                    type="button"
                    onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                    className="flex w-full items-center justify-between rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-4 text-base text-[#1a1a1a] transition-all duration-300 hover:border-[#8b7cff]/30 dark:border-white/10 dark:bg-dark/50 dark:text-[#F2F2F2] dark:hover:border-[#8b7cff]/30"
                  >
                    <span className="text-[#1a1a1a] dark:text-[#F2F2F2]">{selectedBudget}</span>
                    {isBudgetOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-[#8b7cff]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#8b7cff]" />
                    )}
                  </button>

                  {isBudgetOpen && (
                    <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-radius-sm border border-[#e5e5e5] bg-white/95 p-2 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-dark/95">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setSelectedBudget(option)
                            setIsBudgetOpen(false)
                          }}
                          className={`flex w-full items-center justify-between rounded-radius-sm px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                            selectedBudget === option
                              ? 'bg-[#8b7cff]/10 text-[#8b7cff] dark:bg-[#8b7cff]/20 dark:text-[#b794f4]'
                              : 'text-[#1a1a1a] hover:bg-[#f5f5f5] dark:text-[#F2F2F2] dark:hover:bg-white/5'
                          }`}
                        >
                          <span>{option}</span>
                          {selectedBudget === option && (
                            <svg className="h-4 w-4 text-[#8b7cff]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="text-sm font-medium text-[#555555] dark:text-[#999999] md:text-base">
                  Tell Us About Your Goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Share your goals, challenges, timeline, or anything that helps us prepare for your consultation"
                  className="mt-2 min-h-44 w-full rounded-radius-sm border border-[#e5e5e5] bg-white/50 px-5 py-4 text-base text-[#1a1a1a] placeholder:text-[#999999] transition-all duration-300 focus:border-[#8b7cff]/50 focus:outline-none focus:ring-4 focus:ring-[#8b7cff]/10 dark:border-white/10 dark:bg-dark/50 dark:text-[#F2F2F2] dark:placeholder:text-[#666666] dark:focus:border-[#8b7cff]/50 dark:focus:ring-[#8b7cff]/20"
                />
              </div>

              {/* Submit Button */}
              <ButtonComponent type="submit" variant="secondary" fullWidth>
                Request Your Free Consultation
              </ButtonComponent>

              <p className="text-center text-xs leading-relaxed text-[#999999] dark:text-[#666666]">
                Your information is confidential and will never be shared without your consent.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection