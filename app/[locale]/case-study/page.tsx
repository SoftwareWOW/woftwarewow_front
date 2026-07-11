import PortfolioItems from "@/components/projectpage-02/PortfolioItems";
import ProjectHeroV2 from "@/components/projectpage-02/ProjectHeroV2";
import GradientCta from "@/components/shared/GradientCta";
import LayoutOne from "@/components/shared/LayoutOne";
import WowGrowthCta from "@/components/wow/LandascapComponets/WowGrowthCta";

export const metadata = {
  title: 'Case Study',
}

const CaseStudyPage = () => {
  return (
    <LayoutOne>
     <ProjectHeroV2 />
      <PortfolioItems />
        <WowGrowthCta />
    </LayoutOne>
  )
}

export default CaseStudyPage;
