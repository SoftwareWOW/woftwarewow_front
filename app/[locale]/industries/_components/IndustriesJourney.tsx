import RevealWrapper from '@/components/animation/RevealWrapper'

const stats = [
  {
    value: '$2B',
    label: 'Total Revenue',
  },
  {
    value: '50+',
    label: 'Projects Successfully',
  },
  {
    value: '15',
    label: 'Awwwards',
  },
]

const IndustriesJourney = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="mx-auto max-w-[1320px] border-y border-[#1515151A] py-10 transition-colors duration-300 dark:border-white/10 md:py-14 lg:py-16">
        <RevealWrapper className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <h2 className="max-w-[420px] text-[clamp(1.75rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
            Join in the journey
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-left sm:text-center lg:min-w-[120px]">
                <p className="text-[clamp(1.75rem,3.5vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#808080] transition-colors duration-300 md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default IndustriesJourney
