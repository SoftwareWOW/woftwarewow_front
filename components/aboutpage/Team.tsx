'use client'
import Image from 'next/image'
import teamMembers from '@/data/teamMemberData.json'
import Link from 'next/link'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import TeamSocialLinks from '@/components/shared/TeamSocialLinks'
import RevealWrapper from '../animation/RevealWrapper'
import TeamGallery from './TeamGallery'
import { mapSocialLinks } from '@/lib/strapi/social-icons'
import type { CmsSocialLink } from '@/lib/strapi/social-icons'
import type { CmsTeamMember } from '@/lib/strapi/mappers/page-sections'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  socialLinks: CmsSocialLink[]
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

function mapLegacySocialLinks(socialLinks?: {
  twitter?: string
  facebook?: string
  youtube?: string
}): CmsSocialLink[] {
  return mapSocialLinks([
    { platform: 'twitter', url: socialLinks?.twitter },
    { platform: 'facebook', url: socialLinks?.facebook },
    { platform: 'youtube', url: socialLinks?.youtube },
  ].filter((link) => Boolean(link.url)))
}

function toDisplayMember(member: CmsTeamMember): TeamMember {
  return {
    id: member.id,
    name: member.name,
    role: member.role ?? '',
    image: member.image || FALLBACK_IMAGE,
    bio: member.bio ?? '',
    socialLinks: member.socialLinks ?? [],
  }
}

function toDisplayStaticMember(member: (typeof teamMembers)[number]): TeamMember {
  return {
    id: member.id,
    name: member.name,
    role: member.role,
    image: member.image || FALLBACK_IMAGE,
    bio: member.bio,
    socialLinks: mapLegacySocialLinks(member.socialLinks),
  }
}

function resolveTeamLayout({
  featuredMember,
  galleryMembers,
  members,
  fromCms = false,
}: TeamProps): { featured: TeamMember; gallery: TeamMember[] } {
  const staticMembers = teamMembers as (typeof teamMembers)[number][]

  if (fromCms) {
    return {
      featured: featuredMember ? toDisplayMember(featuredMember) : toDisplayStaticMember(staticMembers[0]),
      gallery: (galleryMembers ?? []).map(toDisplayMember),
    }
  }

  const gallery = (galleryMembers ?? members ?? []).map(toDisplayMember)
  return {
    featured: featuredMember ? toDisplayMember(featuredMember) : toDisplayStaticMember(staticMembers[0]),
    gallery: gallery.length ? gallery : staticMembers.slice(1).map(toDisplayStaticMember),
  }
}

const Team = (props: TeamProps = {}) => {
  const { featured, gallery } = resolveTeamLayout(props)
  const profileHref = `/team/${featured.id}`

  return (
    <section className="relative overflow-hidden">
      <RevealWrapper className="container">
        <div className="our-team-details relative flex flex-col gap-10 gap-x-[30px] border bg-backgroundBody p-5 dark:border-dark dark:bg-dark max-md:items-center max-md:justify-center lg:flex-row lg:p-10">
          <Link
            href={profileHref}
            aria-label={`View ${featured.name}'s profile`}
            className="absolute inset-0 z-[1] rounded-[inherit]"
          />

          <figure className="pointer-events-none relative z-[2] max-lg:w-full lg:min-h-[372px] lg:min-w-[330px]">
            <Image
              src={featured.image}
              width={330}
              height={372}
              alt={featured.name}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </figure>

          <div className="pointer-events-none relative z-[2] flex-1">
            <div className="mb-5 flex flex-col justify-between gap-y-10 md:flex-row lg:mb-10">
              <div>
                <h2 className="mb-3 lg:text-4xl lg:leading-[1.2] lg:-tracking-[1.08px]">{featured.name}</h2>
                <SectionLabel>{featured.role}</SectionLabel>
              </div>

              <TeamSocialLinks
                links={featured.socialLinks}
                className="pointer-events-auto relative z-[3] flex gap-5"
              />
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
