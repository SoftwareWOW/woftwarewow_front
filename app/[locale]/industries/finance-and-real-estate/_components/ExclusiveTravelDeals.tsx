import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import type { ReactNode } from 'react'
import type { CmsHeroImage, CmsPackageListSection } from '@/lib/strapi/mappers/page-sections'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const teams: {
  title: ReactNode
  heading: string
  description: string
  image: string
  href: string
}[] = [
  {
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-backgroundBody">Websites</span>
      </>
    ),
    heading: 'Digital Experiences',
    description: 'Professional websites built around credibility, usability, and conversion.',
    image: '/images/wow/Hero/devision/Website%201.jpg',
    href: '/wowwebsites',
  },
  {
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-backgroundBody">Marketing</span>
      </>
    ),
    heading: 'Visibility & Acquisition',
    description: 'SEO, advertising, CRM, content, campaigns, and lead generation.',
    image: '/images/wow/Hero/devision/Image-copy-scaled.jpeg',
    href: '/wowmarketing',
  },
  {
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-backgroundBody">Accelerate</span>
      </>
    ),
    heading: 'Sales & Revenue',
    description: 'CRM, funnels, lead management, follow-up, and revenue systems.',
    image: '/images/wow/Hero/devision/Accelerate.jpg',
    href: '/wowaccelerate',
  },
  {
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-backgroundBody">Intelligence</span>
      </>
    ),
    heading: 'AI & Automation',
    description: 'Automate workflows, communication, business processes, and insights.',
    image: '/images/wow/Hero/devision/Intelligence.jpg',
    href: '/wowintelligence',
  },
  {
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>{' '}
        <span className="text-backgroundBody">Design</span>
      </>
    ),
    heading: 'Brand & Creative',
    description: 'Identity, marketing materials, presentations, and visual communication.',
    image: '/images/wow/Hero/devision/Design%201.jpg',
    href: '/wowdesign',
  },
  {
    title: (
      <>
        <span className="text-backgroundBody">Software </span>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW!</WowText>
      </>
    ),
    heading: 'Custom Technology',
    description: 'Platforms, portals, integrations, applications, and internal systems.',
    image: '/images/wow/Hero/devision/Mockup%202%20Dark.png',
    href: '/softwarewow',
  },
]

type DisplayTeam = {
  title: ReactNode
  heading: string
  description: string
  image: CmsHeroImage
  href: string
}

/** Layout: Home-13 ExclusiveTravelDeals — image overlay cards. */
type ExclusiveTravelDealsProps = Partial<CmsPackageListSection>

const ExclusiveTravelDeals = (cmsSection: ExclusiveTravelDealsProps = {}) => {
  const { eyebrow = 'THE WOW ECOSYSTEM', title, accentTitle, description, items: cmsItems } = cmsSection
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })

  const displayTeams: DisplayTeam[] = cmsItems?.length
    ? cmsItems.map((cms, index) => ({
        title: cms.title,
        heading: cms.subtitle ?? teams[index]?.heading ?? '',
        description: cms.description ?? teams[index]?.description ?? '',
        image: cms.image?.src
          ? cms.image
          : { src: teams[index]?.image ?? '' },
        href: cms.href ?? teams[index]?.href ?? '#',
      }))
    : teams.map((team) => ({ ...team, image: { src: team.image } }))

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center lg:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">More Capabilities Behind Every Opportunity.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-[#808080]">
              Growth can require much more than advertising. The WOW ecosystem connects the creative, technology,
              marketing, sales, and infrastructure capabilities behind your business.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayTeams.map((item) => (
            <RevealWrapper key={item.heading + item.href} as="figure" className="reveal-me relative min-h-[420px] overflow-hidden rounded-radius-md">
              <CmsResponsiveImage
                image={item.image}
                fill
                sizes={CMS_IMAGE_SIZES.halfGrid}
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" aria-hidden />
              <div className="absolute bottom-10 left-[30px] right-[30px] md:bottom-6 xl:bottom-10">
                <h6 className="flex flex-wrap items-center gap-[0.25em] text-backgroundBody">{item.title}</h6>
                <p className="mt-2 text-sm font-medium text-backgroundBody">{item.heading}</p>
                <p className="mb-8 mt-1.5 text-backgroundBody/70">{item.description}</p>
                <ButtonComponent href={item.href} variant="white" size="sm-v2">
                  Explore
                </ButtonComponent>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-7 flex justify-center md:mt-14">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="white">
              Explore the WOW Ecosystem
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ExclusiveTravelDeals
