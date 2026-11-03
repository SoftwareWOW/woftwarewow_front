import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  ArrowIcon,
  BrandMessagingIcon,
  DigitalContentIcon,
  SeoCopywritingIcon,
  ThoughtLeadershipIcon,
} from '@/components/homepage-18/Icons'
import { WowNavLink } from '@/components/wow/nav/WowNavLink'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const services = [
  {
    title: 'Mobile App Development',
    description: 'Build intuitive mobile applications.',
    href: '/software/mobile-applications',
    icon: <DigitalContentIcon />,
  },
  {
    title: 'Product Design & Prototyping',
    description: 'Design and validate app experiences.',
    href: '/software/product-design-prototyping',
    icon: <BrandMessagingIcon />,
  },
  {
    title: 'Custom Software Development',
    description: 'Develop tailored features and functionality.',
    href: '/software/custom-software-development',
    icon: <SeoCopywritingIcon />,
  },
  {
    title: 'Integrations & Modernization',
    description: 'Connect apps with existing systems.',
    href: '/software/integrations-modernization',
    icon: <ThoughtLeadershipIcon />,
  },
]

/** Layout: homepage-18/ServicesV15 */
const ConnectedExpertise = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Connected Expertise</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Everything behind a <InstrumentText>great mobile experience.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <RevealWrapper
              key={service.href}
              className="reveal-me group rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
            >
              <WowNavLink href={service.href} className="block">
                <span>{service.icon}</span>
                <h3 className="mb-2 mt-4 text-[25px] font-light leading-[1.2] lg:mb-3 lg:mt-6 lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mb-16 text-[#808080] lg:mb-[106px] lg:text-xl">{service.description}</p>
                <div className="flex items-center justify-center overflow-hidden border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
                  <ArrowIcon />
                </div>
              </WowNavLink>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
