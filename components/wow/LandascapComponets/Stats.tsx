'use client'

import useReveal from '@/hooks/useReveal'
import CounterAnimation from '@/utils/CounterAnimation'
import RevealWrapper from '@/components/animation/RevealWrapper'

const achievementStats = [
  {
    value: 300,
    label: 'Businesses Reached',
    suffix: '+',
    description:
      'Through websites, campaigns, software, content, and growth programs designed to create measurable impact.',
  },
  {
    value: 500,
    label: 'Projects Delivered',
    suffix: '+',
    description: 'Across marketing, technology, design, AI, automation, and digital transformation.',
  },
  {
    value: 20,
    label: 'Industries Served',
    suffix: '+',
    description:
      'Including healthcare, construction, legal, hospitality, retail, professional services, and eCommerce.',
  },
  {
    value: 600,
    label: 'Strategy Sessions Completed',
    suffix: '+',
    description: 'Helping business owners identify opportunities, remove bottlenecks, and build smarter growth roadmaps.',
  },
]

const Stats = () => {
  const { revealRef } = useReveal()

  return (
    <section className="about relative bg-background transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-20">
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

      <div className="container relative z-10">
        {/* Description with animation - matching AboutV8 style */}
        <RevealWrapper>
          <h4
            className="mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(18px,2.5vw,28px)] font-[300px] leading-[1.6] tracking-[0.02em] text-[#333333] dark:text-[#666666] transition-colors duration-700"
            ref={revealRef}
          >
            WOW Superagency unites technology, marketing, AI, websites, software, and growth services in one coordinated ecosystem — helping businesses scale with less complexity and more confidence.
          </h4>
        </RevealWrapper>

        {/* Stats Grid - matching AboutV8 grid style */}

         <div 
              className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6"
            >
              {achievementStats.map((stat, index) => (
                <div key={stat.label} className="stat-item w-full">
                  <div className="relative flex h-full min-h-[280px] flex-col items-center justify-start p-6 transition-colors duration-300 md:p-8">
                    {/* Number */}
                    <div className="flex items-baseline gap-1">
                      <h2 className="font-['Outfit'] text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0D0D0D] dark:text-[#F2F2F2] transition-colors duration-300">
                        <CounterAnimation number={stat.value} />  {stat.suffix}
                      </h2>
                    </div>

                    {/* Label */}
                    <p className="mt-2 text-center font-['Outfit'] text-[clamp(14px,1.2vw,18px)] font-normal text-[#0D0D0D] dark:text-[#F2F2F2] transition-colors duration-300">
                      {stat.label}
                    </p>

                    {/* Description */}
                    <p className="mt-3 line-clamp-3 text-center font-['Outfit'] text-[clamp(11px,0.9vw,14px)] font-normal leading-[1.5] text-[#666666] dark:text-[#888888] transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  )
}

export default Stats
