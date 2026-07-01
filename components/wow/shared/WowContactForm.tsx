'use client'

import React, { useState } from 'react'

type WowContactFormProps = {
  className?: string
  onSubmitted?: () => void
}

const WowContactForm = ({ className = '', onSubmitted }: WowContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX',
    budget: '40k',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert(`${formData.name} Your Data Has Been Submited`)
    onSubmitted?.()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2 ${className}`}
    >
      <div>
      <label
          htmlFor="wow-contact-name"
          className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100"
        >
          Full Name
        </label>
        <input
          type="text"
          id="wow-contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-[#1515151A] dark:border-[#EDF0F51A] focus:outline-none  dark:bg-dark"
          required
        />
      </div>

      <div>
        <label
          htmlFor="wow-contact-email"
          className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100"
        >
          Work Email
        </label>
        <input
          type="email"
          id="wow-contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@company.com"
          className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-[#1515151A] dark:border-[#EDF0F51A] focus:outline-none  dark:bg-dark"
          required
        />
      </div>

      <div className="relative">
        <label
          htmlFor="wow-contact-service"
          className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100"
        >
          Service Type
        </label>
        <select
          id="wow-contact-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 indent-px text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-[#1515151A] dark:border-[#EDF0F51A] focus:outline-none  dark:bg-dark"
          required
        >
          <option value="UI/UX">UX Design</option>
          <option value="Web design">Product Design</option>
          <option value="Web development">Brand Identity</option>
          <option value="Design System">Design System</option>
        </select>
        <span className="pointer-events-none absolute right-5 top-1/2 translate-y-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="inline dark:hidden"
            aria-hidden
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="black"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            className="hidden dark:inline"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="relative">
        <label
          htmlFor="wow-contact-budget"
          className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100"
        >
          Project Budget
        </label>
        <select
          id="wow-contact-budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 indent-px text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-[#1515151A] dark:border-[#EDF0F51A] focus:outline-none  dark:bg-dark"
          required
        >
          <option value="40k">$10k - $25k</option>
          <option value="55k">$25k - $50k</option>
          <option value="90k">$50k - $100k</option>
          <option value="100k+">$100k+</option>
        </select>
        <span className="pointer-events-none absolute right-5 top-1/2 inline translate-y-1/3 dark:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 9L12 15L18 9"
              stroke="black"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="pointer-events-none absolute right-5 top-1/2 hidden translate-y-1/3 dark:inline">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="md:col-span-full">
        <label
          htmlFor="wow-contact-message"
          className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100"
        >
          Project Brief
        </label>
        <textarea
          id="wow-contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project goals and timeline"
          className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-[#1515151A] dark:border-[#EDF0F51A] focus:outline-none  dark:bg-dark"
          required
        />
      </div>

      <div className="col-span-full sm:mt-14 md:mx-auto">
        <button type="submit" className="rv-button rv-button-primary block w-full md:inline-block md:w-auto">
          <div className="rv-button-top">
            <span>Send Message</span>
          </div>
          <div className="rv-button-bottom">
            <span className="text-nowrap">Send Message</span>
          </div>
        </button>
      </div>
    </form>
  )
}

export default WowContactForm
