import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: components/wow/LandascapComponets/WowGrowthCta.tsx — general CTA with portfolio-specific copy. */
type PortfolioCtaProps = Partial<CmsTechnologiesSection>

const PortfolioCta = ({ eyebrow = '', title, accentTitle, description, items }: PortfolioCtaProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems([], items)


  return (
    <WowGrowthCta
      accentText="Let's build"
      mainText="what's next."
      ariaLabel="Start your portfolio project with WOW Superagency"
    />
  )
}

export default PortfolioCta
