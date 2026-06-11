import RevealWrapper from '@/components/animation/RevealWrapper'
import Image from 'next/image'

const avatars = ['/images/agent/01.jpg', '/images/agent/02.jpg', '/images/agent/03.jpg', '/images/agent/04.jpg']

export default function WowRatingSection() {
  return (
    <section className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-[1260px]">
        <RevealWrapper className="mb-10 flex flex-col items-center justify-between gap-6 rounded-lg border border-secondary/10 bg-white px-4 py-4 dark:border-dark dark:bg-dark-200 md:flex-row md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium uppercase tracking-[2px] text-colorText sm:gap-6 dark:text-dark-100">
            <span>Discuss Your Project</span>
            <span>Ask Question</span>
            <span>See Portfolio</span>
          </div>
          <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 md:w-auto">
            <span className="shrink-0 text-sm text-colorText dark:text-dark-100">Describe Your Project:</span>
            <div className="flex flex-1 items-center rounded bg-backgroundBody px-4 py-3 dark:border dark:border-dark dark:bg-dark">
              <input
                type="text"
                placeholder="Tell us about your project..."
                className="w-full bg-transparent text-sm text-secondary outline-none placeholder:text-colorText dark:text-backgroundBody dark:placeholder:text-dark-100"
              />
              <button
                type="button"
                className="ml-2 flex size-8 shrink-0 items-center justify-center rounded bg-primary"
                aria-label="Submit">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={src}
                className="relative -ml-3 size-10 overflow-hidden rounded-full border-2 border-white first:ml-0 dark:border-dark-200"
                style={{ zIndex: avatars.length - i }}>
                <Image src={src} alt="" fill className="object-cover" sizes="40px" />
              </div>
            ))}
            <div className="relative -ml-3 flex size-10 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-semibold text-white dark:border-dark-200">
              +
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm text-colorText dark:text-dark-100">Trusted by over 160+ businesses.</p>
            <div className="mt-1 flex items-center justify-center gap-2 sm:justify-start">
              <span className="text-lg font-semibold">4.5</span>
              <div className="flex gap-0.5 text-primary" aria-label="4.5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.27l-3.52 1.85.67-3.92L2.3 5.64l3.94-.57L8 1.5z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
