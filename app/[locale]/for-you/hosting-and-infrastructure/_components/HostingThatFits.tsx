import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import pricingBg from '@/public/images/pricing-gradient.png'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

type Plan = {
  id: number
  title: string
  tagline: string
  description: string
  features: string[]
  ctaText?: string
  ctaVariant?: string
  isFeatured?: StaticImageData
}

const CheckmarkIcon = () => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="inline dark:hidden"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z"
        fill="currentColor"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="hidden dark:inline"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z"
        fill="currentColor"
      />
    </svg>
  </span>
)

const pricingPlans: Plan[] = [
  {
    id: 1,
    title: 'Shared Hosting',
    tagline: 'Simple, reliable hosting.',
    description:
      'Reliable hosting for small business websites with straightforward needs.',
    features: [
      'Business websites',
      'Landing pages',
      'Small web projects',
    ],
    ctaVariant: 'white',
  },
  {
    id: 2,
    title: 'VPS Hosting',
    tagline: 'More power to grow.',
    description:
      'Flexible hosting with greater resources, performance, and control.',
    features: [
      'Growing websites',
      'eCommerce stores',
      'Business applications',
    ],
    ctaVariant: 'primary',
    isFeatured: pricingBg,
  },
  {
    id: 3,
    title: 'Dedicated Hosting',
    tagline: 'Maximum power and control.',
    description:
      'Dedicated infrastructure for demanding websites and applications.',
    features: [
      'High-traffic platforms',
      'Custom applications',
      'Advanced infrastructure',
    ],
    ctaVariant: 'white',
  },
]

/** Layout: Home-19 PricingV4 — three hosting tiers (tagline instead of dollar price). */
const HostingThatFits = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="mb-7 text-center lg:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Hosting That Fits</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">Start with what you need. Scale when you need more.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-[#808080]">
              Different businesses need different levels of infrastructure. We&apos;ll help match the setup to your
              requirements.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {pricingPlans.map((plan) => {
          const {
            title,
            tagline,
            description,
            features,
            ctaText = 'Learn More',
            ctaVariant = 'white',
            isFeatured,
            id,
          } = plan

          return (
            <RevealWrapper
              key={id}
              className="reveal-me relative flex min-h-[510px] w-full flex-col border bg-backgroundBody px-[30px] pb-28 pt-[30px] dark:border-dark dark:bg-dark"
            >
              {isFeatured && (
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${isFeatured.src})` }}
                />
              )}

              <div className="relative mb-3 flex justify-end">
                <div className="rv-badge">
                  <span className="rv-badge-text uppercase">{title}</span>
                </div>
              </div>

              <h3 className="relative mb-3 text-3xl font-normal leading-tight max-sm:text-2xl md:text-4xl">
                {tagline}
              </h3>
              <p className="relative text-base leading-relaxed text-secondary/70 dark:text-backgroundBody/70">
                {description}
              </p>

              <p className="relative mb-3 mt-8 text-sm font-medium uppercase tracking-wide text-secondary/70 dark:text-backgroundBody/70">
                Best for:
              </p>
              <ul className="relative [&>*:not(:last-child)]:mb-2 md:[&>*:not(:last-child)]:mb-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex list-none gap-[10px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    <CheckmarkIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-8 w-[calc(100%-60px)]">
                <Link href="/contact" className={`rv-button rv-button-${ctaVariant} w-full`}>
                  <div className="rv-button-top !w-full !text-center">
                    <span className="font-normal">{ctaText}</span>
                  </div>
                  <div className="rv-button-bottom !w-full !text-center">
                    <span className="font-normal">{ctaText}</span>
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          )
        })}
        </div>
      </div>
    </section>
  )
}

export default HostingThatFits
