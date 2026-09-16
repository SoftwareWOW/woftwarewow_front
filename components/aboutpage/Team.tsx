'use client'
import Image from 'next/image'
import teamMembers from '@/data/teamMemberData.json'
import twiterLogo from '@/public/images/icons/x-twitter.svg'
import twiterDarkLogo from '@/public/images/icons/x-twitter-dark.svg'
import youtubeLogo from '@/public/images/icons/youtube.svg'
import youtubeDarkLogo from '@/public/images/icons/youtube-dark.svg'
import facebookLogo from '@/public/images/icons/facebook.svg'
import facebookDarkLogo from '@/public/images/icons/facebook-dark.svg'
import Link from 'next/link'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import RevealWrapper from '../animation/RevealWrapper'
import TeamGallery from './TeamGallery'
import type { CmsTeamMember } from '@/lib/strapi/mappers/page-sections'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  socialLinks?: {
    twitter?: string
    facebook?: string
    youtube?: string
  }
}

type TeamProps = {
  featuredMember?: CmsTeamMember | null
  /** Bottom gallery — CMS `members` only. */
  galleryMembers?: CmsTeamMember[] | null
  /** When true, gallery uses CMS members only (no static fallback). */
  fromCms?: boolean
  /** @deprecated Use featuredMember + galleryMembers */
  members?: CmsTeamMember[] | null
}

const FALLBACK_IMAGE = '/images/home-ai/team/ai-team-1.png'

function toDisplayMember(member: CmsTeamMember): TeamMember {
  return {
    id: member.id,
    name: member.name,
    role: member.role ?? '',
    image: member.image || FALLBACK_IMAGE,
    bio: member.bio ?? '',
    socialLinks: {},
  }
}

function resolveTeamLayout({
  featuredMember,
  galleryMembers,
  members,
  fromCms = false,
}: TeamProps): { featured: TeamMember; gallery: TeamMember[] } {
  const staticMembers = teamMembers as TeamMember[]

  if (fromCms) {
    return {
      featured: featuredMember ? toDisplayMember(featuredMember) : staticMembers[0],
      gallery: (galleryMembers ?? []).map(toDisplayMember),
    }
  }

  const gallery = (galleryMembers ?? members ?? []).map(toDisplayMember)
  return {
    featured: featuredMember ? toDisplayMember(featuredMember) : staticMembers[0],
    gallery: gallery.length ? gallery : staticMembers.slice(1),
  }
}

const Team = (props: TeamProps = {}) => {
  const { featured, gallery } = resolveTeamLayout(props)

  return (
    <section className="relative overflow-hidden">
      <RevealWrapper className="container">
        <div className="our-team-details flex flex-col gap-10 gap-x-[30px] border bg-backgroundBody p-5 dark:border-dark dark:bg-dark max-md:items-center max-md:justify-center lg:flex-row lg:p-10">
          <figure className="max-lg:w-full lg:min-h-[372px] lg:min-w-[330px]">
            <Image
              src={featured.image}
              width={330}
              height={372}
              alt={featured.name}
              className="h-full w-full object-cover rounded-radius-md"
            />
          </figure>

          <div className="flex-1">
            <div className="mb-5 flex flex-col justify-between gap-y-10 md:flex-row lg:mb-10">
              <div>
                <h2 className="mb-3 lg:text-4xl lg:leading-[1.2] lg:-tracking-[1.08px]">{featured.name}</h2>
                <SectionLabel>{featured.role}</SectionLabel>
              </div>

              <ul className="flex gap-5">
                {featured.socialLinks?.twitter && (
                  <li>
                    <Link
                      href={featured.socialLinks.twitter}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={twiterLogo} alt="Twitter" width={24} height={24} className="inline dark:hidden" />
                      <Image src={twiterDarkLogo} alt="Twitter" width={24} height={24} className="hidden dark:inline" />
                    </Link>
                  </li>
                )}
                {featured.socialLinks?.facebook && (
                  <li>
                    <a
                      href={featured.socialLinks.facebook}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={facebookLogo} alt="Facebook" width={24} height={24} className="inline dark:hidden" />
                      <Image
                        src={facebookDarkLogo}
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="hidden dark:inline"
                      />
                    </a>
                  </li>
                )}
                {featured.socialLinks?.youtube && (
                  <li>
                    <a
                      href={featured.socialLinks.youtube}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={youtubeLogo} alt="YouTube" width={24} height={24} className="inline dark:hidden" />
                      <Image
                        src={youtubeDarkLogo}
                        alt="YouTube"
                        width={24}
                        height={24}
                        className="hidden dark:inline"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="max-w-[730px] border-t pt-5 dark:border-dark lg:pt-10">
              <p>{featured.bio}</p>
            </div>
          </div>
        </div>
        <TeamGallery members={gallery} />
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/career" variant="primary">
              Join Our Team
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </RevealWrapper>
    </section>
  )
}

export default Team
