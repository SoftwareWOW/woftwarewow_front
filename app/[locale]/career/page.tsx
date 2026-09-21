import CompanyGallery from '@/components/careerpage/CompanyGallery'
import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Metadata } from 'next'
import BenefitsCareer from './_components/BenefitsCareer'
import CareerHeroPage from './_components/CareerHero'
import CareerRfq from './_components/CareerRfq'
import Communities from './_components/Comunities'
import Jobs from './_components/Jobs'

import type { Locale } from '@/i18n/config'
import type {
  CmsCareerJobCard,
  CmsFaqItem,
  CmsCareerCommunitySection,
  CmsImageGallerySection,
  CmsRfqAccordionSection,
} from '@/lib/strapi/mappers/page-sections'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage,
  resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'
import { setRequestLocale } from 'next-intl/server'

const PAGE_SLUG = 'career' as const

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

function mapRfqGroupsToFaqItems(section?: CmsRfqAccordionSection | null): CmsFaqItem[] | undefined {
  if (!section?.groups?.length) return undefined
  return section.groups.map((group) => ({
    question: group.title,
    answer: group.subtitle ?? '',
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Career' })
}

const CareerPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  const companyGallery =
    cms.imageGallery('companyGallery') ??
    (sections.companyGallery as CmsImageGallerySection | undefined)
  const communityImages = sections.communityImages as CmsCareerCommunitySection | undefined
  const careerJobs = sections.careerJobs as { jobs?: CmsCareerJobCard[] } | undefined
  const careerRfq = sections.careerRfq as CmsRfqAccordionSection | undefined

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {cms.hero ? <CareerHeroPage {...cms.hero} /> : null}
        <CompanyGallery images={companyGallery?.images} />
        <BenefitsCareer />
        <Jobs jobs={careerJobs?.jobs} />
        <Communities avatars={communityImages?.avatars} teamImage={communityImages?.teamImage} />
        <CareerRfq items={mapRfqGroupsToFaqItems(careerRfq)} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default CareerPage
