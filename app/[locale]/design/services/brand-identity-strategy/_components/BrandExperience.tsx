import HubExploreSection, { type HubExploreSectionContent } from '@/app/[locale]/hub/_components/HubExploreSection'

type BrandExperienceProps = HubExploreSectionContent

/** Layout: hub HubExploreSection — split header + topic image cards. */
export default function BrandExperience(props: BrandExperienceProps) {
  return <HubExploreSection section={props} />
}
