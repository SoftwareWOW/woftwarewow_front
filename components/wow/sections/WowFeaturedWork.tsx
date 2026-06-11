import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'
import Link from 'next/link'
import WowButton from '../WowButton'

const projects = [
  { image: '/images/project-3/services-7.png', type: 'Case study', year: '2020', title: 'Epicurean Elegance' },
  { image: '/images/services/business-big.png', type: 'Project', year: '2021', title: 'Artistry in Motion' },
  { image: '/images/services/services-details-img.png', type: 'Case study', year: '2022', title: 'Digital Canvas' },
]

export default function WowFeaturedWork() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1206px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear text-[clamp(2rem,4vw,3rem)] font-light">Featured work</h2>
          </TextAppearAnimation>
          <RevealWrapper className="max-w-[470px]">
            <p className="text-base text-colorText dark:text-dark-100">
              Our user-centered design encourages productivity and boosts revenue.
            </p>
            <WowButton href="/portfolio-agency/case-study" className="mt-6">
              View All Work
            </WowButton>
          </RevealWrapper>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <RevealWrapper key={project.title} className="group">
              <div className="relative mb-6 h-[280px] overflow-hidden rounded-lg sm:h-[320px] md:h-[415px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="382px"
                />
                <Link
                  href="/portfolio-agency/case-study"
                  className="absolute bottom-4 right-4 flex items-center gap-2 rounded bg-white/90 px-3 py-2 text-xs font-medium opacity-0 transition group-hover:opacity-100 dark:bg-dark-200/90 dark:text-backgroundBody">
                  View
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-colorText dark:text-dark-100">
                <span>{project.type}</span>
                <span className="text-2xl font-light text-secondary dark:text-backgroundBody">{project.year}</span>
              </div>
              <h3 className="mt-2 text-xl font-medium md:text-2xl">{project.title}</h3>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
