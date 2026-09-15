import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: portfolio/_components/PortfolioCta.tsx — default WowGrowthCta. */
type ClientsCtaProps = Partial<CmsTechnologiesSection>

const ClientsCta = ({ eyebrow = '', title, accentTitle, description, items }: ClientsCtaProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems([], items)


  return (
    <WowGrowthCta
      accentText="Ready to"
      mainText="Grow?"
      ariaLabel="Contact WOW Superagency"
    />
  )
}

export default ClientsCta
