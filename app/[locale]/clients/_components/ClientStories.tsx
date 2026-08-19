import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import { clientStories } from '../_data/clients'

/** Layout: portfolio/_components/FeaturedWork.tsx — alternating lg:flex-row layout. */
const ClientStories = () => {
  return (
    <section id="client-stories" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36">
      <div className="container mb-10 text-center md:mb-16">
        <div className="mb-4 flex justify-center md:mb-5">
          <SectionLabel>CLIENT STORIES</SectionLabel>
        </div>
        <TextAppearAnimation>
          <h2 className="text-appear">Partnerships that create progress.</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
            See how we work with our clients to turn business challenges into practical solutions and meaningful
            outcomes.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="container flex flex-col gap-16 md:gap-20 lg:gap-24">
        {clientStories.map((story, index) => (
          <RevealWrapperV2
            key={story.slug}
            className={`reveal-me group flex flex-col gap-8 lg:items-center lg:gap-10 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            <Link
              href={`/case-study/${story.slug}`}
              className="block flex-1 overflow-hidden rounded-radius-md"
            >
              <figure className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="aspect-[16/10] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </figure>
            </Link>

            <div className="flex flex-1 flex-col justify-center lg:max-w-md xl:max-w-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-[#808080]">
                {story.client} · {story.industry}
              </p>

              <h3 className="mt-6 text-lg font-medium md:text-xl">The Challenge</h3>
              <p className="mt-2 text-base leading-relaxed text-[#808080] md:text-lg">{story.challenge}</p>

              <h3 className="mt-6 text-lg font-medium md:text-xl">What We Did</h3>
              <p className="mt-2 text-sm text-[#808080] md:text-base">{story.serviceTags.join(' · ')}</p>

              <h3 className="mt-6 text-lg font-medium md:text-xl">The Outcome</h3>
              <p className="mt-2 text-base leading-relaxed text-[#808080] md:text-lg">{story.outcome}</p>

              <div className="mt-6">
                <ButtonComponent href={`/case-study/${story.slug}`} variant="secondary" size="sm">
                  View Case Study ↗
                </ButtonComponent>
              </div>
            </div>
          </RevealWrapperV2>
        ))}
      </div>
    </section>
  )
}

export default ClientStories
