import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import CareerDetailsHero from '../_components/CareerDetailsHero'
import CareerDetailsOverview from '../_components/CareerDetailsOverview'
import CareerRelatedJobs from '../_components/CareerRelatedJobs'
import type { CareerListItem } from '@/lib/career/types'

export async function generateStaticParams() {
  const careers = getMarkDownData('data/career') as CareerListItem[]
  return careers.map((career) => ({
    slug: career.slug,
  }))
}

const CareerDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const career = getMarkDownContent('data/career/', slug)
  const postCareer = career.data as CareerListItem
  const careerContent = career.content
  const allCareers = getMarkDownData('data/career') as CareerListItem[]

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 pb-12 sm:gap-16 sm:pb-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px] 2xl:pb-[200px]">
        <CareerDetailsHero career={postCareer} />
        <CareerDetailsOverview career={postCareer} content={careerContent} />
        <CareerRelatedJobs jobs={allCareers} currentSlug={slug} />
        <WowGrowthCta />
      </div>
    </LayoutOne>
  )
}

export default CareerDetailsPage
