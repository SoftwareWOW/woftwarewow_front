import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TeamSocialLinks from './TeamSocialLinks'
import type { CmsTeamMemberDetail } from '@/lib/strapi/mappers/page-sections'

const TeamDetailsBody = ({ teamData }: { teamData: CmsTeamMemberDetail }) => {
  return (
    <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper className="flex flex-col justify-center gap-x-8 gap-y-6 border p-6 dark:border-dark max-lg:items-center md:p-7 lg:flex-row lg:justify-normal lg:p-10">
          <figure className="w-full md:h-[682px] lg:w-[428px]">
            <Image
              src={teamData.image}
              width={682}
              height={428}
              alt={teamData.name}
              className="aspect-3/2 h-full w-full object-cover rounded-radius-md"
            />
          </figure>

          <div className="flex-1">
            <h2 className="mb-3 text-3xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">
              {teamData.name}
            </h2>
            {teamData.role ?
              <span className="mb-4 inline-block text-lg font-light leading-[20px] text-colorText md:mb-10">
                {teamData.role}
              </span>
            : null}

            {teamData.description ?
              <p className="border-t py-4 dark:border-dark md:py-10">{teamData.description}</p>
            : null}

            {teamData.skills.length ?
              <>
                <h3 className="mb-3.5 text-2xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">
                  Skill
                </h3>
                <ul className="mb-5 md:mb-10">
                  {teamData.skills.map((skill) => (
                    <li className="mr-2 inline-block text-colorText" key={skill}>
                      {skill},
                    </li>
                  ))}
                </ul>
              </>
            : null}

            {teamData.tags.length ?
              <>
                <h3 className="mb-3.5 text-2xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">
                  Portfolio
                </h3>
                <ul className="mb-10 space-x-1 space-y-2">
                  {teamData.tags.map((tag) => (
                    <li className="rv-badge inline-block" key={tag}>
                      <span className="rv-badge-text">{tag}</span>
                    </li>
                  ))}
                </ul>
              </>
            : null}

            {teamData.socialLinks.length ?
              <>
                <h3 className="mb-3.5 text-2xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">
                  Contact
                </h3>
                <TeamSocialLinks links={teamData.socialLinks} />
              </>
            : null}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TeamDetailsBody
