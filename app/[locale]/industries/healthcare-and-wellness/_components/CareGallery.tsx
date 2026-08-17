import RevealWrapper from '@/components/animation/RevealWrapper'
import Image from 'next/image'

/** Layout: Home-13 TravelImagesGallery — 12-column mosaic. Origin pt/pb stripped. */
const CareGallery = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-2 lg:gap-3.5 2xl:gap-7">
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <Image
              src="/images/travel-blogs/travel-gallary-1.png"
              alt="Van in mountains"
              width={800}
              height={520}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-2">
            <Image
              src="/images/travel-blogs/travel-gallary-2.png"
              alt="Building on cliff edge"
              width={800}
              height={1040}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <Image
              src="/images/travel-blogs/travel-gallary-5.png"
              alt="Mountain view"
              width={800}
              height={520}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-2 row-span-1">
            <Image
              src="/images/travel-blogs/travel-gallary-3.png"
              alt="Travel finances"
              width={400}
              height={520}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-2 row-span-1">
            <Image
              src="/images/travel-blogs/travel-gallary-4.png"
              alt="Person in forest"
              width={400}
              height={520}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <Image
              src="/images/travel-blogs/travel-gallary-6.png"
              alt="City tram"
              width={800}
              height={520}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default CareGallery
