import RevealWrapper from '@/components/animation/RevealWrapper'
import TeamSocialLinks from '@/components/shared/TeamSocialLinks'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import teamMembers from '@/data/teamMemberData.json'
import { mapSocialLinks } from '@/lib/strapi/social-icons'
import type { CmsSocialLink } from '@/lib/strapi/social-icons'
import type { CmsTeamMember } from '@/lib/strapi/mappers/page-sections'
import Image from 'next/image'
import Link from 'next/link'
import { EVENT_DETAILS_INNER, EVENT_DETAILS_SECTION_X } from './event-details-layout'
import { EVENT_DETAIL_SURFACE_LG } from './event-detail-surfaces'

const FALLBACK_IMAGE = '/images/home-ai/team/ai-team-1.png'

type Props = {
  featuredMember?: CmsTeamMember | null
}

function mapLegacySocialLinks(socialLinks?: {
  twitter?: string
  facebook?: string
  youtube?: string
}): CmsSocialLink[] {
  return mapSocialLinks(
    [
      { platform: 'twitter', url: socialLinks?.twitter },
      { platform: 'facebook', url: socialLinks?.facebook },
      { platform: 'youtube', url: socialLinks?.youtube },
    ].filter((link) => Boolean(link.url)),
  )
}

function resolveFeatured(featuredMember?: CmsTeamMember | null) {
  if (featuredMember) {
    return {
      id: featuredMember.id,
      name: featuredMember.name,
      role: featuredMember.role ?? '',
      image: featuredMember.image || FALLBACK_IMAGE,
      bio: featuredMember.bio ?? '',
      socialLinks: featuredMember.socialLinks ?? [],
    }
  }

  const fallback = teamMembers[0]
  return {
    id: fallback.id,
    name: fallback.name,
    role: fallback.role,
    image: fallback.image || FALLBACK_IMAGE,
    bio: fallback.bio,
    socialLinks: mapLegacySocialLinks(fallback.socialLinks),
  }
}

/** Layout: team page featured member card (`Team` → `our-team-details`). */
const EventSpeaker = ({ featuredMember }: Props) => {
  const featured = resolveFeatured(featuredMember)
  const profileHref = `/team/${featured.id}`
  const hasContent = Boolean(featured.name?.trim() || featured.bio?.trim() || featured.image)

  if (!hasContent) return null

  return (
    <section className={`relative overflow-hidden ${EVENT_DETAILS_SECTION_X}`}>
      <RevealWrapper className={`reveal-me ${EVENT_DETAILS_INNER}`}>
        <SectionLabel className="mb-5">Featured speaker</SectionLabel>
        <div
          className={`our-team-details relative flex flex-col gap-10 gap-x-[30px] p-5 max-md:items-center max-md:justify-center lg:flex-row lg:p-10 ${EVENT_DETAIL_SURFACE_LG}`}
        >
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

            <div className="max-w-[730px] border-t border-[#1515151A] pt-5 dark:border-white/10 lg:pt-10">
              {featured.bio ? (
                <p className="text-secondary dark:text-backgroundBody">{featured.bio}</p>
              ) : null}
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default EventSpeaker
