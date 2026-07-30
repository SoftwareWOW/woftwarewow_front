import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'


interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudies: WorkType[] = getMarkDownData('data/marketing/project').reverse()

const CaseStudyHighlights = () => {
  return (
    <section className="pb-14 pt-28 sm:pt-36 md:pb-16 md:pt-[157px] lg:pb-[88px] xl:pb-[100px]">
   
        {/* Section Header */}
        <div className="mb-10 mx-auto " >
          
            <TextAppearAnimation>
              <h2 className="text-appear mt-3 md:mt-4">
                Project Highlights
              </h2>
            </TextAppearAnimation>
          
   
      </div>

      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-x-5 px-4 md:grid-cols-2 md:px-[30px]">
        {caseStudies.map((item, index) => (
          <RevealWrapper
            key={item.slug}
            className={cn('reveal-me underline-hover-effect group', (index + 1) % 2 === 0 ? 'md:mt-5' : '')}>
            <Link href={`/marketing/project/${item.slug}`}>
              <figure className="overflow-hidden">
                <img
                  src={item?.image}
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-radius-md"
                  alt={item?.title}
                />
              </figure>
              {/* <div className="blog-title mt-[26px] text-center lg:mt-[30px]">
                <h3 className="text-center text-[27px] font-normal capitalize leading-tight md:text-3xl lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[51px]">
                  {item?.title}
                </h3>
              </div> */}
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default CaseStudyHighlights
