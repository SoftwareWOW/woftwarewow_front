import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: components/wow/LandascapComponets/WowGrowthCta.tsx — shared general CTA for the recent-work page. */
type RecentWorkCtaProps = Partial<CmsTechnologiesSection>

const RecentWorkCta = ({ eyebrow = '', title, accentTitle, description, items }: RecentWorkCtaProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems([], items)


  return <WowGrowthCta accentText="Your project" mainText="could be next." ariaLabel="Start your next project with WOW Superagency" />
}

export default RecentWorkCta
