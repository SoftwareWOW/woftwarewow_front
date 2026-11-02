import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltAroundPeople from './_components/BuiltAroundPeople'
import Capabilities from './_components/Capabilities'
import OurProcess from './_components/OurProcess'
import ProductDesignHero from './_components/ProductDesignHero'
import SelectedWork from './_components/SelectedWork'
import TechStack from './_components/TechStack'
import WhatWeDesign from './_components/WhatWeDesign'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Product Design & Prototyping | SoftwareWOW!',
    description:
      'From discovery and UX strategy to wireframes, UI design, and interactive prototypes—we help you define, design, and validate digital products before development.',
    keywords: [
      'product design',
      'UX design',
      'UI design',
      'prototyping',
      'wireframes',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Product Design & Prototyping | SoftwareWOW!',
      description:
        'Turn early ideas into clear, intuitive, development-ready digital experiences with SoftwareWOW product design and prototyping.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/product-design-prototyping`,
    },
  }
}

export default async function ProductDesignPrototypingServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — for-you/build-and-launch/BuildLaunchHero (Home-19) */}
        <ProductDesignHero />

        {/* 2. What We Design — homepage-16/ServicesV14 (image cards) */}
        <WhatWeDesign />

        {/* 3. Built Around People — homepage-13/AboutHoverImages + benefits */}
        <BuiltAroundPeople />

        {/* 4. Our Process — design/DesignHowWeWorkSection (ProcessV10 hover) */}
        <OurProcess />

        {/* 5. Capabilities — homepage-17/WhyChooseUsV6 */}
        <Capabilities />

        {/* 6. Our Stack — about/TechStack UI, design-first categories (local) */}
        <TechStack />

        {/* 7. Selected Work — homepage-24/ProjectCaseStudies */}
        <SelectedWork />

        {/* 8. Ready to Design What's Next? — shared WowGrowthCta */}
      
          <WowGrowthCta
            accentText="Ready to Design"
            mainText="What's Next?"
            ariaLabel="Start a product design and prototyping project with SoftwareWOW"
          />
      
      </div>
    </LayoutOne>
  )
}
