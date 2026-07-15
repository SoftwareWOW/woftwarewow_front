import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionHeaderV3 from '@/components/shared/SectionHeaderV3'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gradientBg from '@/public/images/gradient-bg.png'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'

export interface CareerJobType {
  slug: string
  content: string
  [key: string]: any
}
interface sectionHeaderProps {
  sectionHeader?: boolean
}

const jobsData: CareerJobType[] = getMarkDownData('data/career')

const Jobs = ({ sectionHeader = false }: sectionHeaderProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.7] scale-y-[6] sm:scale-y-[4] md:scale-y-[3.4] lg:scale-y-[2.8] xl:scale-y-[2.3] 2xl:scale-y-[1.5]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>

      {sectionHeader ? (
        <div className="container">
          <SectionHeaderV3
            italicTitle="Available"
            headingTitle="Positions"
            description="We champion athletes, storytellers, and brands that
  shape culture and inspire the world with their
  unique perspectives."
          />
        </div>
      ) : (
        <div className="container">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Open Roles</SectionLabel>
          </RevealWrapper>
          <RevealWrapper>
            <h2 className="text-appear text-center">Start your professional journey today</h2>
          </RevealWrapper>
        </div>
      )}

      <div className="mt-[60px] max-lg:px-5 [&>*:not(:last-child)]:mb-6">
        {jobsData?.toReversed()?.map((job) => (
          <RevealWrapper
            as="article"
            key={job.slug}
            className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-y-7 border bg-background p-6 dark:border-dark dark:bg-background md:flex-row md:justify-between lg:p-10">
            <div className="flex flex-col flex-wrap justify-center md:justify-normal">
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag: string) => (
                  <SectionLabel key={tag}>{tag}</SectionLabel>
                ))}
              </div>
              <h3 className="mb-4 mt-8 text-3xl leading-[25.2px] tracking-wide">{job.title}</h3>
              <p className="max-w-[720px]">{job.description}</p>
            </div>

            <div className="max-md:w-full">
              <ButtonComponentList
                className="flex max-md:w-full"
                itemClassName="max-md:w-full md:inline-block md:w-auto">
                <ButtonComponent href={`/career/${job.slug}`} variant="secondary" fullWidth>
                  Apply Now
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default Jobs
