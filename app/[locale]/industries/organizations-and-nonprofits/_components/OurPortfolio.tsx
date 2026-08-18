'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Marquee from 'react-fast-marquee'

const portfolioImages = [
  {
    id: 1,
    src: '/images/wow/nav/cards/pexels-fauxels-3183132%201.png',
    alt: 'Community collaboration',
  },
  {
    id: 2,
    src: '/images/wow/nav/cards/pexels-cottonbro-4069290%201.png',
    alt: 'Mission-driven team',
  },
  {
    id: 3,
    src: '/images/wow/nav/cards/pexels-polina-tankilevitch-5386217%201.png',
    alt: 'Nonprofit professionals',
  },
  {
    id: 4,
    src: '/images/wow/nav/cards/pexels-akoonie-35088940%201.png',
    alt: 'Community engagement',
  },
  {
    id: 5,
    src: '/images/wow/nav/cards/Impact.png',
    alt: 'Social impact work',
  },
  {
    id: 6,
    src: '/images/wow/nav/cards/Branding%20%26%20Creative%201.png',
    alt: 'Brand storytelling',
  },
  {
    id: 7,
    src: '/images/wow/nav/cards/pexels-cottonbro-8088441%201.png',
    alt: 'Volunteer community',
  },
  {
    id: 8,
    src: '/images/wow/nav/cards/Hub.png',
    alt: 'Community hub',
  },
  {
    id: 9,
    src: '/images/wow/nav/cards/pexels-akaaljotsingh-anandpuria-156395437-10703306%201.png',
    alt: 'Organization outreach',
  },
  {
    id: 10,
    src: '/images/wow/nav/cards/Social.png',
    alt: 'Social community growth',
  },
]

/** Layout: Home-22 OurPortfolio — dual marquee rows. */
const OurPortfolio = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Our Portfolio</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              A glimpse of our
              <i className="font-instrument"> unforgettable </i>
              <br className="hidden md:block" />
              <i className="font-instrument">events </i>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center justify-around gap-5 md:gap-[30px]">
            {portfolioImages.map((img) => (
              <div className="h-72 min-w-60 md:h-[460px] md:min-w-[370px]" key={img.id}>
                <img src={img.src} alt={img.alt} className="h-full w-full rounded-radius-md object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-5 pt-[30px] md:gap-[30px]">
            {portfolioImages.toReversed().map((img) => (
              <div className="h-72 min-w-60 md:h-[460px] md:min-w-[370px]" key={`reverse-${img.id}`}>
                <img src={img.src} alt={img.alt} className="h-full w-full rounded-radius-md object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurPortfolio
