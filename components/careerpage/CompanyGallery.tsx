import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'

/** Fixed 4-slot collage — CMS images map by index (0–3). */
const galleryLayout = [
  {
    id: 1,
    alt: 'Team collaborating in modern office space',
    mobileClass: 'md:order-4',
    desktop: 'left-0 top-0 h-[520px] w-1/4',
  },
  {
    id: 2,
    alt: 'Creative workshop session with design team',
    mobileClass: '',
    desktop: 'left-[18%] top-[57px] z-10 h-[340px] w-1/3',
  },
  {
    id: 3,
    alt: 'Modern collaborative workspace environment',
    mobileClass: '',
    desktop: 'bottom-10 left-[50%] z-[5] h-[260px] w-[28%]',
  },
  {
    id: 4,
    alt: 'Team building and social activities',
    mobileClass: '',
    desktop: 'left-3/4 top-0 h-[520px] w-1/4',
  },
] as const

type CompanyGalleryProps = {
  images?: CmsGalleryImage[]
}

const CompanyGallery = ({ images }: CompanyGalleryProps) => {
  if (!images?.length) return null

  const slots = galleryLayout
    .map((slot, index) => {
      const cmsImage = images[index]
      if (!cmsImage?.src) return null
      return { ...slot, src: cmsImage.src, alt: cmsImage.alt ?? slot.alt }
    })
    .filter(Boolean) as Array<(typeof galleryLayout)[number] & { src: string; alt: string }>

  if (!slots.length) return null

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-[1440px] max-lg:px-4">
        {/* Mobile / tablet */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
          {slots.map((slot) => (
            <figure
              key={slot.id}
              className={`overflow-hidden rounded-lg ${slot.mobileClass}`}
            >
              <img
                src={slot.src}
                alt={slot.alt}
                className="h-[280px] w-full object-cover md:h-[360px]"
              />
            </figure>
          ))}
        </div>

        {/* Desktop — explicit absolute collage (matches original 4-col overlap) */}
        <div className="relative hidden h-[560px] w-full lg:block">
          {slots.map((slot) => (
            <figure
              key={slot.id}
              className={`absolute overflow-hidden rounded-lg ${slot.desktop}`}
            >
              <img src={slot.src} alt={slot.alt} className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyGallery
