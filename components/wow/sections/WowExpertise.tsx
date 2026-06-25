import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import WowButton from '../WowButton'

const expertise = [
  { title: 'Software Architecture', subtitle: 'Market research & long-term planning', featured: false },
  { title: 'Application Development', subtitle: 'Process improvement & automation', featured: false },
  { title: 'Artificial Intelligence', subtitle: 'Executive coaching & team development', featured: false },
  { title: 'Automation & Agent Development', subtitle: 'Budget planning & risk mitigation', featured: true },
  { title: 'Cloud Engineering', subtitle: 'AI-driven solutions & IT strategy', featured: false },
  { title: 'Data & Integrations', subtitle: 'Stress-free arrangements for work trips.', featured: false },
]

export default function WowExpertise() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1170px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear text-[clamp(2rem,4vw,3rem)] font-medium uppercase tracking-wide">OUR EXPERTISE</h2>
          </TextAppearAnimation>
          <RevealWrapper className="max-w-[470px]">
            <p className="text-base text-colorText dark:text-dark-100">
              Personalized journeys designed to inspire, explore, and create unforgettable outcomes.
            </p>
            <WowButton href="/services" className="mt-6">
              Explore Services
            </WowButton>
          </RevealWrapper>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <RevealWrapper
              key={item.title}
              className={`flex min-h-[280px] flex-col justify-between rounded-radius-sm p-6 sm:min-h-[320px] md:min-h-[400px] md:p-8 ${
                item.featured
                  ? 'bg-secondary text-white dark:bg-primary'
                  : 'border border-secondary/10 bg-white text-secondary dark:border-dark dark:bg-dark-200'
              }`}>
              <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-current/20">
                <span className="text-lg font-semibold">!</span>
              </div>
              <div>
                <h3 className="text-xl font-medium leading-tight md:text-3xl">{item.title}</h3>
                <p className={`mt-3 text-sm ${item.featured ? 'text-white/70' : 'text-colorText dark:text-dark-100'}`}>
                  {item.subtitle}
                </p>
                {item.featured && (
                  <WowButton href="/contact" variant="primary" className="mt-6">
                    Get Started
                  </WowButton>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
