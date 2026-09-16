import GradientCta from '@/components/shared/GradientCta'
import LayoutOne from '@/components/shared/LayoutOne'
import TeamDetailsBody from '@/components/shared/TeamDetailsBody'
import staticTeamMembers from '@/data/teamMemberV2.json'
import type { Locale } from '@/i18n/config'
import { locales } from '@/i18n/config'
import {
  getAllSuperagencyTeamMemberParams,
  getSuperagencyTeamMemberByRef,
} from '@/lib/strapi/fetchers/team-members'
import { mapSocialLinks } from '@/lib/strapi/social-icons'
import type { CmsTeamMemberDetail } from '@/lib/strapi/mappers/page-sections'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string; id: string }>
}

function mapStaticTeamMember(
  member: (typeof staticTeamMembers)[number],
): CmsTeamMemberDetail {
  return {
    id: member.id,
    name: member.title,
    role: member.position,
    description: member.description,
    image: member.image,
    skills: member.skills,
    tags: member.tags,
    socialLinks: mapSocialLinks([
      { platform: 'twitter', url: member.twitterLink },
      { platform: 'facebook', url: member.fbLink },
      { platform: 'youtube', url: member.youtubeLink },
    ].filter((link) => link.url && link.url !== '#')),
  }
}

export async function generateStaticParams() {
  const cmsParams = await getAllSuperagencyTeamMemberParams()

  if (cmsParams.length) {
    return cmsParams.map(({ locale, id }) => ({ locale, id }))
  }

  return locales.flatMap((locale) =>
    staticTeamMembers.map((member) => ({
      locale,
      id: member.id,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params
  const cmsMember = await getSuperagencyTeamMemberByRef(id, locale as Locale)
  const staticMember = staticTeamMembers.find((item) => item.id === id)
  const member = cmsMember ?? (staticMember ? mapStaticTeamMember(staticMember) : null)

  if (!member) {
    return { title: 'Team | WOW Superagency' }
  }

  return {
    title: `${member.name} | Team | WOW Superagency`,
    description: member.description,
  }
}

const TeamDetailsPage = async ({ params }: Props) => {
  const { locale, id } = await params
  setRequestLocale(locale as Locale)

  const cmsMember = await getSuperagencyTeamMemberByRef(id, locale as Locale)
  const staticMember = staticTeamMembers.find((member) => member.id === id)
  const teamData = cmsMember ?? (staticMember ? mapStaticTeamMember(staticMember) : null)

  if (!teamData) {
    notFound()
  }

  return (
    <LayoutOne>
      <TeamDetailsBody teamData={teamData} />
      <GradientCta />
    </LayoutOne>
  )
}

export default TeamDetailsPage
