'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { FormEvent, useState } from 'react'

type DomainsSearchSectionProps = {
  titleBefore: string
  titleAccent: string
  titleAfter: string
  placeholder: string
  tlds: ReadonlyArray<string>
}

/** Adapted from helpsupport HelpHero search form — domain finder + TLD chips. */
export default function DomainsSearchSection({
  titleBefore,
  titleAccent,
  titleAfter,
  placeholder,
  tlds,
}: DomainsSearchSectionProps) {
  const [query, setQuery] = useState('')
  const [selectedTld, setSelectedTld] = useState(tlds[0] ?? '.com')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="domain-search" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container">
        <RevealWrapper className="reveal-me mb-8 text-center md:mb-10">
          <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-light leading-[1.2]">
            {titleBefore}
            <InstrumentText>{titleAccent}</InstrumentText>
            {titleAfter}
          </h2>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mx-auto w-full max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-radius-sm border border-[#1515151A] bg-backgroundBody p-2 dark:border-[#EDF0F51A] dark:bg-dark"
          >
            <label htmlFor="domain-search-input" className="sr-only">
              Search for a domain name
            </label>
            <input
              id="domain-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="w-full border-0 bg-transparent px-4 py-3 text-base leading-[1.4] tracking-[0.02em] text-secondary placeholder:text-[#808080] focus:outline-none dark:text-backgroundBody dark:placeholder:text-dark-100 md:text-lg"
            />
            <button
              type="submit"
              aria-label="Search domains"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white transition-opacity hover:opacity-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
                <path
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-6 flex flex-wrap items-center justify-center gap-3">
          {tlds.map((tld) => {
            const active = tld === selectedTld
            return (
              <button
                key={tld}
                type="button"
                onClick={() => setSelectedTld(tld)}
                className={`rounded-radius-sm border px-4 py-2 text-sm transition-colors ${
                  active
                    ? 'border-primary bg-primary text-white'
                    : 'border-[#1515151A] text-secondary dark:border-[#EDF0F51A] dark:text-backgroundBody'
                }`}
              >
                {tld}
              </button>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}
