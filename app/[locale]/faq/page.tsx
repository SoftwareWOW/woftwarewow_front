import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

export const metadata = {
  title: 'Faq',
}

const FAQPage = () => {
  return (
    <LayoutOne>
      <FAQ bigTitleWithBadge={true} />
       <WowGrowthCta />
    </LayoutOne>
  )
}

export default FAQPage
