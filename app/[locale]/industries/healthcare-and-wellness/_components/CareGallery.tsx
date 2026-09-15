import RevealWrapper from '@/components/animation/RevealWrapper'

const DEFAULT_IMAGES = [
  { src: '/images/travel-blogs/travel-gallary-1.png', alt: 'Van in mountains' },
  { src: '/images/travel-blogs/travel-gallary-2.png', alt: 'Building on cliff edge' },
  { src: '/images/travel-blogs/travel-gallary-5.png', alt: 'Mountain view' },
  { src: '/images/travel-blogs/travel-gallary-3.png', alt: 'Travel finances' },
  { src: '/images/travel-blogs/travel-gallary-4.png', alt: 'Person in forest' },
  { src: '/images/travel-blogs/travel-gallary-6.png', alt: 'City tram' },
] as const

const GRID_CLASSES = [
  'col-span-4 row-span-1',
  'col-span-4 row-span-2',
  'col-span-4 row-span-1',
  'col-span-2 row-span-1',
  'col-span-2 row-span-1',
  'col-span-4 row-span-1',
] as const

type CareGalleryProps = {
  images?: { src: string; alt?: string }[]
}

/** Layout: Home-13 TravelImagesGallery — 12-column mosaic. Origin pt/pb stripped. */
const CareGallery = ({ images }: CareGalleryProps = {}) => {
  const galleryImages = (images?.length ? images : DEFAULT_IMAGES).slice(0, GRID_CLASSES.length)

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-2 lg:gap-3.5 2xl:gap-7">
          {galleryImages.map((image, index) => (
            <RevealWrapper key={`${image.src}-${index}`} className={`reveal-me ${GRID_CLASSES[index]}`}>
              <img
                src={image.src}
                alt={image.alt ?? ''}
                className="h-full w-full rounded-radius-md object-cover"
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareGallery
