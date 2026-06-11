'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import CircleTextAnimation from '@/components/shared/CircleTextAnimation'

const stats = [
  { value: '14', label: 'Years of experience' },
  { value: '80+', label: 'Projects done' },
  { value: '280+', label: 'Satisfied clients' },
  { value: '09', label: 'Trusted partners' },
  { value: '19', label: 'Awards' },
  { value: '39', label: 'Professional members' },
]

export default function WowStatistics() {
  const { revealRef } = useReveal()

  return (
    <section className="about relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:items-stretch lg:justify-normal">
          <CircleTextAnimation />
          <h3 className="mx-auto mt-[34px] text-center" ref={revealRef}>
            With years of industry expertise, our team of visionaries, storytellers, and design virtuosos come together to
            weave magic that captivates hearts and minds.
          </h3>

          <RevealWrapper>
            <p className="mx-auto mt-8 max-w-[770px] text-center text-base leading-relaxed text-colorText dark:text-dark-100">
              With years of experience and a diverse portfolio, we have established ourselves as a leading force in the
              world of technology. At our core, we believe in the transformative power of digital storytelling.
            </p>
          </RevealWrapper>

          <RevealWrapper>
            <div className="mt-16 w-full border-t border-secondary/10 dark:border-dark">
              <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-3">
                {stats.slice(0, 3).map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-6">
                    <span className="text-5xl font-light md:text-6xl">{stat.value}</span>
                    <span className="max-w-[170px] text-left text-sm text-colorText dark:text-dark-100">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-secondary/10 dark:border-dark" />
              <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-3">
                {stats.slice(3).map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-6">
                    <span className="text-5xl font-light md:text-6xl">{stat.value}</span>
                    <span className="max-w-[170px] text-left text-sm text-colorText dark:text-dark-100">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
