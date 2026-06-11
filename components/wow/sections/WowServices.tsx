import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import WowButton from '../WowButton'

const services = [
  { num: '01', title: 'Custom Software', desc: 'Tailored platforms built for your workflows, integrations, and growth goals.' },
  { num: '02', title: 'Web Applications', desc: 'Scalable web apps with modern UX, performance, and maintainability.' },
  { num: '03', title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences your customers love.' },
  { num: '04', title: 'SaaS Products', desc: 'Subscription-ready products designed to launch fast and scale reliably.' },
]

export default function WowServices() {
  return (
    <section className="overflow-hidden bg-[#f0eef8] px-4 py-20 dark:bg-dark-300 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear max-w-[641px] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1]">
              Our Services is all what you need
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="max-w-[470px]">
            <p className="text-base text-colorText dark:text-dark-100">
              We offer a full range of technology and creative services to help businesses grow.
            </p>
            <WowButton href="/services" className="mt-6">
              View All Services
            </WowButton>
          </RevealWrapper>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service) => (
            <RevealWrapper
              key={service.num}
              className="min-w-[280px] flex-1 rounded-lg border border-secondary/5 bg-white p-6 dark:border-dark dark:bg-dark-200 sm:min-w-[300px] md:min-w-[370px] md:p-8">
              <div className="flex gap-5">
                <span className="text-4xl font-light text-primary md:text-5xl">{service.num}</span>
                <div>
                  <h3 className="text-xl font-medium md:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-colorText dark:text-dark-100">{service.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
