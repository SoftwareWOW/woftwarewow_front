import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, Bright Solutions', quote: 'WOW Superagency delivered exactly what we needed — fast, clear, and built for growth.' },
  { name: 'Michael Carter', role: 'Marketing Director', quote: 'Their team turned our vision into a modern platform our customers actually enjoy using.' },
  { name: 'Emily Davis', role: 'Founder, Green Earth', quote: 'Professional, transparent, and results-driven. We saw measurable impact within weeks.' },
  { name: 'John Smith', role: 'Product Manager', quote: 'Working with WOW felt like having an in-house tech team without the overhead.' },
  { name: 'David Martinez', role: 'COO, TechNova', quote: 'The quality of work and communication exceeded our expectations at every step.' },
  { name: 'Lisa White', role: 'Head of Operations', quote: 'They helped us modernize legacy systems while keeping the business running smoothly.' },
]

export default function WowTestimonials() {
  return (
    <section className="overflow-hidden px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1170px]">
        <TextAppearAnimation>
          <h2 className="text-appear mb-12 text-[clamp(2rem,4vw,3rem)] font-light">What our clients say</h2>
        </TextAppearAnimation>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark sm:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <RevealWrapper
                key={item.name}
                className="rounded-lg border border-secondary/10 bg-white p-6 dark:border-dark dark:bg-dark-200">
                <div className="mb-4 flex items-center gap-4 border-b border-secondary/10 pb-4 dark:border-dark">
                  <div className="relative size-14 overflow-hidden rounded-full">
                    <Image src="/images/agent/01.jpg" alt="" fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-colorText dark:text-dark-100">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-colorText dark:text-dark-100">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between border-t border-secondary/10 pt-4 text-xs text-colorText dark:border-dark dark:text-dark-100">
                  <span className="font-semibold text-primary">WOW</span>
                  <span>Feb 03, 2026</span>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
