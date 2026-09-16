import teamMemberV2 from '@/data/teamMemberV2.json'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import Teams from './Teams'

export interface ITeamMember {
  id: string
  image: string
  title: string
  position: string
}

type GalleryMember = {
  id: string
  name: string
  role?: string
  image?: string
}

type TeamGalleryProps = {
  members?: GalleryMember[]
}

const FALLBACK_IMAGE = '/images/home-ai/team/ai-team-1.png'

function toGalleryTeam(members?: GalleryMember[]): ITeamMember[] {
  if (!members?.length) {
    return teamMemberV2 as ITeamMember[]
  }

  return members.map((member) => ({
    id: member.id,
    image: member.image || FALLBACK_IMAGE,
    title: member.name,
    position: member.role ?? '',
  }))
}

const TeamGallery = ({ members }: TeamGalleryProps = {}) => {
  const team = toGalleryTeam(members)

  return (
    <section className="mt-10 flex items-center justify-center overflow-hidden md:mt-14">
      <div className="container w-full">
        <RevealWrapper className="max-lg:hidden lg:block">
          <Teams team={team} />
        </RevealWrapper>

        <div className="max-lg:block lg:hidden">
          <div className="relative grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2">
            {team.map((teamM) => (
              <RevealWrapper key={teamM.id} className="relative">
                <Image
                  src={teamM.image}
                  width={344}
                  height={388}
                  alt={teamM.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 m-5 bg-primary px-4 py-4">
                  <Link href={`/team/${teamM.id}`}>
                    <div className="blog-title mb-1">
                      <h3 className="dark:text-secondary lg:text-4xl lg:leading-[1.2] lg:tracking-[-1.08px]">
                        {teamM.title}
                      </h3>
                    </div>
                  </Link>
                  <SectionLabel className="mt-2 bg-white/30 dark:bg-secondary/10">{teamM.position}</SectionLabel>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamGallery
