'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { FormEvent, useState } from 'react'

const inputClassName =
  'w-full rounded-radius-sm border border-[#1515151A] bg-backgroundBody px-5 py-4 text-base leading-[1.4] tracking-[0.02em] text-secondary placeholder:text-[#808080] focus:border-[#1515151A] focus:bg-[#D9D8F3] focus:outline-none dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody dark:placeholder:text-dark-100 dark:focus:bg-[#1F1F1F] md:text-lg'

/** Layout: about PageHero — centered label, title, body + quotation-style search. */
const HelpHero = () => {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    document.getElementById('support-categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 lg:pt-[185px]">
      <HeroGradientAnimation />

      <div className="container">
        <RevealWrapper className="flex flex-col items-center text-center">
          <SectionLabel className="mb-4">HELP &amp; SUPPORT</SectionLabel>
          <h1 className="mb-4 mt-3.5">How Can We Help?</h1>
          <p className="mx-auto max-w-[470px] text-[#808080] md:max-w-[750px]">
            Build knowledge on your own time or join us for practical, interactive experiences.
          </p>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mx-auto mt-8 w-full max-w-3xl md:mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 rounded-radius-sm border border-[#1515151A] bg-backgroundBody p-2 dark:border-[#EDF0F51A] dark:bg-dark sm:flex-row sm:items-center"
          >
            <label htmlFor="help-search" className="sr-only">
              Search help topics
            </label>
            <input
              id="help-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={'Try “invoice”, “website update”, or “client portal”'}
              className={`${inputClassName} border-0 bg-transparent focus:bg-transparent dark:bg-transparent dark:focus:bg-transparent`}
            />
            <ButtonComponent type="submit" variant="primary" className="shrink-0 sm:mr-1">
              SEARCH
            </ButtonComponent>
          </form>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HelpHero
