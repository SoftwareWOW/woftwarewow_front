import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import type { CmsProjectCard } from '@/lib/strapi/mappers/page-sections'
import { cn } from '@/utils/cn'
import Link from 'next/link'

/** Layout: Home-16 ProjectServicesV4 — one-row header + image/title case cards. */
const GrowthInAction = ({
  title = 'Growth in',
  accentTitle = 'action',
  description =
    'Problem → Solution → Result — how connected growth systems turn marketing into measurable outcomes.',
  projects,
}: {
  title?: string
  accentTitle?: string
  description?: string
  projects?: CmsProjectCard[] | null
} = {}) => {
  if (!projects?.length) {
    return null
  }

  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="w-full md:w-[55%] lg:w-[60%]">
            <RevealWrapper className="reveal-me">
              <h2 className="mt-3 md:mt-4">
                {title} <InstrumentText>{accentTitle}</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-right">{description}</p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-x-6 gap-y-14 px-4 md:grid-cols-2 md:px-[30px]">
        {projects.map((item, index) => {
          const slug = item.slug ?? item.href?.split('/').filter(Boolean).pop() ?? String(index)
          const href = item.href ?? `/marketing/project/${slug}`

          return (
            <RevealWrapper
              key={slug}
              className={cn(
                'reveal-me underline-hover-effect group',
                (index + 1) % 2 === 0 ? 'md:mt-12 lg:mt-20' : '',
              )}
            >
              <Link href={href}>
                <figure className="overflow-hidden rounded-radius-md">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.alt ?? item.title}
                      className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    />
                  ) : null}
                </figure>
                <h4 className="mt-6 text-xl md:text-2xl">{item.title}</h4>
              </Link>
            </RevealWrapper>
          )
        })}
      </div>
    </section>
  )
}

export default GrowthInAction
