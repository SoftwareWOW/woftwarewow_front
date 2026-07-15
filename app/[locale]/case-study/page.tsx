import PortfolioItems from "@/components/projectpage-02/PortfolioItems";
import ProjectHeroV2 from "@/components/projectpage-02/ProjectHeroV2";
import GradientCta from "@/components/shared/GradientCta";
import LayoutOne from "@/components/shared/LayoutOne";
import WowGrowthCta from "@/components/wow/LandascapComponets/WowGrowthCta";
import CaseStudyHero from "./_components/CaseStudyHero";
import Projects from "./_components/Projects";

export const metadata = {
  title: 'Case Study',
}

const CaseStudyPage = () => {
  return (
    <LayoutOne>
     <CaseStudyHero />
      <Projects/>
        <WowGrowthCta />
    </LayoutOne>
  )
}

export default CaseStudyPage;
