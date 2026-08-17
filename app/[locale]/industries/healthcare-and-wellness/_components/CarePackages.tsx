import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'

const packages = [
  {
    index: '01',
    title: 'Website Growth Engine',
    description:
      'Improve structure, usability, performance, conversion paths, and the overall experience people have with your organization online.',
    href: '/packages/website-growth-engine',
    image: '/images/wow/nav/cards/Website.png',
    button: 'Explore Website Growth Engine',
  },
  {
    index: '02',
    title: 'Brand Authority',
    description: 'Build stronger credibility, positioning, identity, and consistency across your organization.',
    href: '/packages/brand-authority',
    image: '/images/wow/nav/cards/Branding & Creative 1.png',
    button: 'Explore Brand Authority',
  },
  {
    index: '03',
    title: 'AI Automation',
    description: 'Simplify repetitive workflows, communication, and internal processes with smarter automation.',
    href: '/packages/ai-automation',
    image: '/images/wow/nav/cards/AI Automation 1.png',
    button: 'Explore AI Automation',
  },
]

/** Layout: Home-20 PortfolioV6 / StartupPackages — overlapping image + card rows. */
const CarePackages = () => {
  return (
    <section aria-labelledby="care-packages-heading">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Recommended Solutions</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 id="care-packages-heading" className="text-appear mb-3 text-center">
              A Stronger Foundation for Growth.
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mb-10 max-w-[770px] text-[#808080] lg:mb-20">
              Explore packages that strengthen the digital presence, credibility, and systems surrounding your
              organization.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {packages.map((item) => (
            <RevealWrapper
              key={item.href}
              className="underline-hover-effect reveal-me group relative flex w-full flex-col items-center lg:flex-row"
            >
              <figure className="-z-30 w-full max-w-[870px] overflow-hidden rounded-radius-md">
                <Link href={item.href} className="block" aria-label={`View ${item.title}`}>
                  <Image
                    src={item.image}
                    width={870}
                    height={580}
                    className="h-full w-full rounded-radius-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.title}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full rounded-radius-sm border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item.index}
                </p>
                <div className="blog-title mb-3.5 lg:mb-5">
                  <Link href={item.href} aria-label={`View ${item.title}`}>
                    <h3 className="text-[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <p className="mb-10 text-base font-normal leading-[25.6px] tracking-[0.32px] text-[#808080]">
                  {item.description}
                </p>

                <ButtonComponentList className="flex" itemClassName="block">
                  <ButtonComponent href={item.href} variant="white" ariaLabel={item.button}>
                    {item.button}
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarePackages
